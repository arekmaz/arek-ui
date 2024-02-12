import { Switch, SwitchProps } from "~/components/ui/switch";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: ({ label = "Switch", ...props }) => (
    <Switch defaultChecked {...props}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>{label}</Switch.Label>
    </Switch>
  ),
};
