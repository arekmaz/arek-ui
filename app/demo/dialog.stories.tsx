import { Portal } from "@ark-ui/react";
import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";
import { IconButton } from "~/components/ui/icon-button";
import { HStack, Stack } from "~/components/ui/stack";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const Normal = () => {
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
};

export const Dialogs = () => {
  return (
    <Story
      title="dialogs"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Normal />
    </Story>
  );
};
