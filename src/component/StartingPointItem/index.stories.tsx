import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StartingPointItem from ".";

export default {
  title: "Components/StartingPointItem",
  component: StartingPointItem,
} as ComponentMeta<typeof StartingPointItem>;

const Template: ComponentStory<typeof StartingPointItem> = (args) => (
  <StartingPointItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  id: 1,
  index: 0,
  point: "this is test value.",
};

export const Secondary = Template.bind({});

Secondary.args = {
  id: 3,
  index: 2,
  point: "this is test value.",
};

export const Thrid = Template.bind({});

Thrid.args = {
  id: 3,
  index: 2,
  point: undefined,
};
