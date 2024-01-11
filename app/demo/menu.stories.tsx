import { Story, filenameFromImportMetaUrl } from "./storyHelpers";
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
import { ComponentProps } from "react";
import { Button } from "~/components/ui/button";
import { Menu } from "~/components/ui/menu";
import { HStack } from "~/components/ui/stack";

export const Demo = (props: ComponentProps<typeof Menu>) => {
  return (
    <Menu {...props}>
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
            <Menu.Root
              positioning={{ placement: "right-start", gutter: -2 }}
              {...props}
            >
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
};

export const Menus = () => {
  return (
    <Story
      title="menus"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Demo />
    </Story>
  );
};
