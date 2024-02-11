import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Drawer } from "~/components/ui/drawer";
import { IconButton } from "~/components/ui/icon-button";
import { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Drawer",
  component: Drawer,
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
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = ({
  label,
  ...props
}: ComponentProps<typeof Drawer> & { label: string }) => {
  return (
    <Drawer {...props}>
      <Drawer.Trigger asChild>
        <Button>{label}</Button>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
            <Drawer.CloseTrigger asChild className="absolute top-3 right-4">
              <IconButton variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{/* Content */}</Drawer.Body>
          <Drawer.Footer className="gap-3">
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Button>Primary</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer>
  );
};

export const Right: Story = { render: () => <Demo label="drawer right" /> };
export const Left: Story = {
  render: () => <Demo variant="left" label="drawer left" />,
};
export const Bottom: Story = {
  render: () => <Demo variant="bottom" label="drawer bottom" />,
};
export const Top: Story = {
  render: () => <Demo variant="top" label="drawer top" />,
};
