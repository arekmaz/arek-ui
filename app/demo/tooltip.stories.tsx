import { Tooltip } from "~/components/ui/tooltip";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const Demo = () => (
  <Tooltip>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip>
);

export const WithArrow = () => (
  <Tooltip>
    <Tooltip.Trigger>With Arrow</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip>
);

export const Tooltips = () => {
  return (
    <Story
      title="tooltips"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Demo />
      <WithArrow />
    </Story>
  );
};
