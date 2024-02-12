import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Menu } from "~/components/ui/menu";
import { HStack } from "~/components/ui/stack";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Menu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "menu.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => {
    return (
      <Menu>
        <Menu.Trigger asChild>
          <Button variant="outline">Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup id="group-1">
              <Menu.ItemGroupLabel htmlFor="group-1">
                My Account
              </Menu.ItemGroupLabel>
              <Menu.Separator />
              <Menu.Item id="profile">
                <HStack spacing={6} justify="between" className="flex-1">
                  <HStack spacing={2}>
                    <UserIcon />
                    Profile
                  </HStack>
                  <span className="text-muted-foreground text-sm">⇧⌘P</span>
                </HStack>
              </Menu.Item>
              <Menu.Item id="billing">
                <HStack spacing={2}>
                  <CreditCardIcon /> Billing
                </HStack>
              </Menu.Item>
              <Menu.Item id="settings">
                <HStack spacing={6} justify="between" className="flex-1">
                  <HStack spacing={2}>
                    <SettingsIcon /> Settings
                  </HStack>
                  <span className="text-muted-foreground text-sm">⌘,</span>
                </HStack>
              </Menu.Item>
              <Menu.Root positioning={{ placement: "right-start", gutter: -2 }}>
                <Menu.TriggerItem className="justify-between">
                  <HStack spacing={2}>
                    <UserPlusIcon />
                    Invite member
                  </HStack>
                  <ChevronRightIcon />
                </Menu.TriggerItem>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item id="email">
                      <HStack spacing={2}>
                        <MailIcon /> Email
                      </HStack>
                    </Menu.Item>
                    <Menu.Item id="message">
                      <HStack spacing={2}>
                        <MessageSquareIcon /> Message
                      </HStack>
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item id="other">
                      <HStack spacing={2}>
                        <PlusCircleIcon />
                        More Options...
                      </HStack>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
              <Menu.Separator />
              <Menu.Item id="logout">
                <HStack spacing={2}>
                  <LogOutIcon />
                  Logout
                </HStack>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu>
    );
  },
};
