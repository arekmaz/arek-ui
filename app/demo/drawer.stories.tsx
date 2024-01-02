import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Drawer } from "~/components/ui/drawer";
import { IconButton } from "~/components/ui/icon-button";
import { Story } from "./storyHelpers";
import { ComponentProps } from "react";

export const Demo = ({
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

export const Drawers = () => {
  return (
    <Story title="drawers">
      <Demo label="drawer right" />
      <Demo variant="left" label="drawer left" />
    </Story>
  );
};
