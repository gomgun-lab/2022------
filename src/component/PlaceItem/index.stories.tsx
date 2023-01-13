import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PlaceItem from ".";

export default {
  title: "Components/PlaceItem",
  component: PlaceItem,
} as ComponentMeta<typeof PlaceItem>;

const Template: ComponentStory<typeof PlaceItem> = (args) => (
  <PlaceItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  addressName: "예시 주소 지명입니다. (서울 종로구 평창동)",
};
