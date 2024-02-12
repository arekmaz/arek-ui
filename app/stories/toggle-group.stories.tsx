import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { ToggleGroup } from "~/components/ui/toggle-group";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ToggleGroup",
  component: ToggleGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "toggle-group.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  render: (props) => (
    <ToggleGroup.Root multiple {...props}>
      <ToggleGroup.Item value="bold" aria-label="Toggle Bold">
        <BoldIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="italic" aria-label="Toggle Italic">
        <ItalicIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="underline" aria-label="Toggle Underline">
        <UnderlineIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
};

export const Single: Story = {
  render: (props) => (
    <ToggleGroup.Root defaultValue={["left"]} {...props}>
      <ToggleGroup.Item value="left" aria-label="Align Left">
        <AlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center" aria-label="Align Center">
        <AlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right" aria-label="Align Right">
        <AlignRightIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="justify" aria-label="Align Justify">
        <AlignJustifyIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
};
