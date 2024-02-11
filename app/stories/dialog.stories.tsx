import { Portal } from "@ark-ui/react";
import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";
import { IconButton } from "~/components/ui/icon-button";
import { HStack, Stack } from "~/components/ui/stack";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Dialog",
  component: Dialog,
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => {
    return (
      <Dialog>
        <Dialog.Trigger asChild>
          <Button variant="outline">Normal Dialog</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Stack align="stretch">
                <HStack className="justify-between">
                  <Dialog.Title>Dialog Title</Dialog.Title>
                  <Dialog.CloseTrigger>
                    <IconButton variant="ghost">
                      <XIcon />
                    </IconButton>
                  </Dialog.CloseTrigger>
                </HStack>
                <Dialog.Description>Dialog Description</Dialog.Description>

                <HStack justify="end" className="w-full">
                  <Dialog.CloseTrigger>
                    <Button variant="outline">Close</Button>
                  </Dialog.CloseTrigger>

                  <Dialog.CloseTrigger>
                    <Button>Save</Button>
                  </Dialog.CloseTrigger>
                </HStack>
              </Stack>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog>
    );
  },
};
