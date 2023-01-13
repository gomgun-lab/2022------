import graph from "../assets/graph.json";

import { getStationName } from "../utils/parseStationName";

const STRAIGHT = 2;
const TRANSFER = 4;

export const findPath = (start, end) => {
  return dijkstra(
    graph,
    getStationName(start.place_name),
    getStationName(end.place_name)
  );
};

const dijkstra = (graph, start, end) => {
  const distanceTable = new Map();
  const predecessorTable = new Map();

  for (const node of Object.keys(graph)) {
    distanceTable.set(node, Infinity);
    predecessorTable.set(node, null);
  }

  distanceTable.set(start, 0);

  const visited = new Set();
  const priorityQueue = new Set();

  priorityQueue.add(start);

  while (priorityQueue.size > 0) {
    let currentLine = null;
    let minDistanceNode = null;
    for (const node of priorityQueue) {
      if (
        minDistanceNode == null ||
        distanceTable.get(node) < distanceTable.get(minDistanceNode)
      ) {
        minDistanceNode = node;
      }
    }

    priorityQueue.delete(minDistanceNode);
    visited.add(minDistanceNode);

    for (const neighbor of graph[minDistanceNode]) {
      const { line_num: line, station_nm: name } = neighbor;
      if (!visited.has(name)) {
        const km = line === currentLine ? STRAIGHT : TRANSFER;
        const distance = distanceTable.get(minDistanceNode) + km;

        if (distance < distanceTable.get(name)) {
          distanceTable.set(name, distance);
          predecessorTable.set(name, minDistanceNode);
          priorityQueue.add(name);
        }
      }
    }
  }

  const path = [];
  let currentNode = end;
  while (currentNode !== start) {
    path.unshift(currentNode);
    currentNode = predecessorTable.get(currentNode);
  }
  path.unshift(start);

  return path;
};
