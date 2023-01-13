import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceList from ".";

export default {
  title: "Components/PlaceList",
  component: PlaceList,
} as ComponentMeta<typeof PlaceList>;

const Template: ComponentStory<typeof PlaceList> = (args) => (
  <PlaceList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  confirmInput: "중구",
};

export const Secondary = Template.bind({});

Secondary.args = {
  confirmInput: "",
};
