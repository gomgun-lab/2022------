import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from ".";

export default {
  title: "Pages/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => <Select />;

export const Primary = Template.bind({});
