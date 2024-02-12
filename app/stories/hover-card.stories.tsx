import { Portal } from "@ark-ui/react";
import { HoverCard } from "~/components/ui/hover-card";
import { MapPinIcon } from "lucide-react";
import { HStack, Stack } from "~/components/ui/stack";
import { Avatar } from "~/components/ui/avatar";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "HoverCard",
  component: HoverCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "hover-card.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <HoverCard>
      <HoverCard.Trigger>Hover me</HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            Content
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard>
  ),
};

export const Demo = () => (
  <HoverCard>
    <HoverCard.Trigger asChild>
      <a
        href="https://twitter.com/grizzly_codes/"
        target="_blank"
        className="text-sm font-medium"
      >
        @grizzly_codes
      </a>
    </HoverCard.Trigger>

    <HoverCard.Positioner>
      <HoverCard.Content>
        <HoverCard.Arrow>
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>
        <Stack direction="row" spacing={4}>
          <Avatar>
            <Avatar.Image
              src="https://avatars.githubusercontent.com/u/1846056"
              alt="cs"
            />
          </Avatar>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <p className="text-sm font-semibold">@grizzly_codes</p>
              <p className="text-sm text-muted-foreground">
                Staff Software Engineer working at vivenu GmbH
              </p>
            </Stack>
            <HStack spacing={1} className="text-xs text-muted-foreground">
              <MapPinIcon />
              <p>Joined Dezember 2011</p>
            </HStack>
          </Stack>
        </Stack>
      </HoverCard.Content>
    </HoverCard.Positioner>
  </HoverCard>
);

export const HoverCards = () => {
  return (
    <Story title="hover cards" componentFilename="hover-card">
      <Basic />
      <Demo />
    </Story>
  );
};
