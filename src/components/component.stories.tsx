import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyComponent from "../../output/react/src/components/component.lite";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MyComponent",
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyComponent> = (args) => (
  <MyComponent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  initCount: 4,
};
