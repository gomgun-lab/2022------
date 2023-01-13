import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectSubPage from ".";

export default {
  title: "Pages/SelectSubPage",
  component: SelectSubPage,
} as ComponentMeta<typeof SelectSubPage>;

const Template: ComponentStory<typeof SelectSubPage> = () => <SelectSubPage />;

export const Primary = Template.bind({});
