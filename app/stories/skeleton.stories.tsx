import { Skeleton } from "~/components/ui/skeleton";
import { HStack, Stack } from "~/components/ui/stack";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Skeleton",
  component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonDemo: Story = {
  render: () => {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="size-12" variant="circle" />
        <Stack spacing={2}>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </Stack>
      </div>
    );
  },
};

export const List: Story = {
  render: () => {
    return (
      <Stack spacing={2} align="stretch" className="w-full">
        <HStack>
          <Skeleton className="h-2 flex-1" />
          <Skeleton className="h-2 flex-[5]" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-[3]" />
          <Skeleton className="h-2 flex-[2]" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-[4]" />
          <Skeleton className="h-2 flex-1" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-[3]" />
          <Skeleton className="h-2 flex-[8]" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-1" />
          <Skeleton className="h-2 flex-[5]" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-[3]" />
          <Skeleton className="h-2 flex-[2]" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-[4]" />
          <Skeleton className="h-2 flex-1" />
        </HStack>
        <HStack>
          <Skeleton className="h-2 flex-[3]" />
          <Skeleton className="h-2 flex-[8]" />
        </HStack>
      </Stack>
    );
  },
};
