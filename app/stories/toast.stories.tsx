import { createToaster } from "@ark-ui/react/toast";
import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { Toast } from "~/components/ui/toast";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Toast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "toast.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Toast>;

const [Toaster, toast] = createToaster({
  placement: "top-end",
  render(toast) {
    return (
      <Toast type={toast.type}>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
        <Toast.CloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <XIcon />
          </IconButton>
        </Toast.CloseTrigger>
      </Toast>
    );
  },
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: (props) => (
    <>
      <Button
        onClick={() =>
          toast.create({
            title: "info",
            description: "Description",
            type: "info",
            ...props,
          })
        }
      >
        Create Info Toast (default)
      </Button>
      <Toaster />
    </>
  ),
};

export const Destructive: Story = {
  render: (props) => (
    <Button
      variant="destructive"
      onClick={() =>
        toast.create({
          title: "error",
          description: "Description",
          type: "error",
          ...props,
        })
      }
    >
      Create Error Toast
    </Button>
  ),
};

export const Success: Story = {
  render: (props) => (
    <Button
      variant="outline"
      onClick={() =>
        toast.create({
          title: "success",
          description: "Description",
          type: "success",
          ...props,
        })
      }
    >
      Create Success Toast
    </Button>
  ),
};

export const Loading: Story = {
  render: (props) => (
    <Button
      variant="outline"
      onClick={() =>
        toast.create({
          title: "loading",
          description: "Description",
          type: "loading",
          ...props,
        })
      }
    >
      Create Loading Toast
    </Button>
  ),
};

export const Custom: Story = {
  render: (props) => (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.create({
            title: "custom",
            description: "Description",
            type: "custom",
            ...props,
          })
        }
      >
        Create Custom Toast
      </Button>
      <Toaster />
    </>
  ),
};
