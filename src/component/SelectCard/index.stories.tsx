import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectCard from ".";

export default {
  title: "Components/SelectCard",
  component: SelectCard,
} as ComponentMeta<typeof SelectCard>;

const Template: ComponentStory<typeof SelectCard> = () => <SelectCard />;

export const Primary = Template.bind({});
