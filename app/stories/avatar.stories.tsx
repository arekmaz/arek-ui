import { AxeIcon } from "lucide-react";
import { Avatar } from "~/components/ui/avatar";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Avatar",
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
    );
  },
};

export const Placeholder: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
    );
  },
};

export const FallbackIcon: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Fallback>
          <AxeIcon />
        </Avatar.Fallback>
      </Avatar>
    );
  },
};
