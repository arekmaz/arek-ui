import { Tooltip } from "~/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Tooltip",
  component: Tooltip,
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: (props) => (
    <Tooltip {...props}>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip>
  ),
};

export const WithArrow: Story = {
  render: (props) => (
    <Tooltip {...props}>
      <Tooltip.Trigger>With Arrow</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip>
  ),
};
