import type { Meta, StoryObj } from "@storybook/react";
import { CupSodaIcon } from "lucide-react";

import { IconButton } from "~/components/ui/icon-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "IconButton",
  component: IconButton,
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: <CupSodaIcon />,
  },
};

export const Secondary: Story = {
  args: {
    children: <CupSodaIcon />,
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: <CupSodaIcon />,
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: <CupSodaIcon />,
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: <CupSodaIcon />,
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: <CupSodaIcon />,
    variant: "link",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <CupSodaIcon />,
  },
};
