import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { Popover } from "~/components/ui/popover";
import { Stack } from "~/components/ui/stack";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const Demo = () => (
  <Popover>
    <Popover.Trigger asChild>
      <Button>Open Popover</Button>
    </Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Stack spacing={1}>
          <Popover.Title>Favorite Framework</Popover.Title>
          <Popover.Description>
            Tell us what is your favorite framework and why you love to use it.
          </Popover.Description>
        </Stack>
        <div className="absolute top-1 right-1">
          <Popover.CloseTrigger asChild>
            <IconButton aria-label="Close Popover" variant="ghost" size="sm">
              <XIcon />
            </IconButton>
          </Popover.CloseTrigger>
        </div>
      </Popover.Content>
    </Popover.Positioner>
  </Popover>
);

export const Popovers = () => {
  return (
    <Story
      title="popovers"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Demo />
    </Story>
  );
};
