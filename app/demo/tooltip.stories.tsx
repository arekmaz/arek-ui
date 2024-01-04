import { Tooltip } from "~/components/ui/tooltip";
import { Story } from "./storyHelpers";

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
    <Story title="tooltips">
      <Demo />
      <WithArrow />
    </Story>
  );
};
