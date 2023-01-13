import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchForm from ".";

export default {
  title: "Components/SearchForm",
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} />
);

export const Primary = Template.bind({});
