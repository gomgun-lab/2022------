import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StartingPointList from ".";

export default {
  title: "Components/StartingPointList",
  component: StartingPointList,
} as ComponentMeta<typeof StartingPointList>;

const Template: ComponentStory<typeof StartingPointList> = () => (
  <StartingPointList />
);

export const Primary = Template.bind({});
