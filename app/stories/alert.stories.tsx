import { Terminal } from "lucide-react";
import { Alert } from "~/components/ui/alert";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Alert",
  component: Alert,
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
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  render: () => {
    return (
      <Alert>
        <Alert.Icon asChild>
          <Terminal className="h-4 w-4" />
        </Alert.Icon>
        <Alert.Title>Basic Alert!</Alert.Title>
        <Alert.Description>
          You can add components and dependencies to your app using the cli.
        </Alert.Description>
      </Alert>
    );
  },
};
export const NoIcon: Story = {
  render: () => {
    return (
      <Alert>
        <Alert.Title>Basic Alert! - no icon</Alert.Title>
        <Alert.Description>
          You can add components and dependencies to your app using the cli.
        </Alert.Description>
      </Alert>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <Alert variant="destructive">
        <Alert.Icon asChild>
          <Terminal className="h-4 w-4" />
        </Alert.Icon>
        <Alert.Title>Error Alert!</Alert.Title>
        <Alert.Description>
          You can add components and dependencies to your app using the cli.
        </Alert.Description>
      </Alert>
    );
  },
};
