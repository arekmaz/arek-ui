import { Tooltip as T } from "@ark-ui/react/tooltip";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  base: "tooltip",
  slots: {
    root: ["relative"],
    trigger: [],
    arrow: [
      "[--arrow-background:hsl(var(--background))]",
      "[--arrow-size:12px]",
      "z-auto",
    ],
    arrowTip: ["border-t-[1px]", "border-l-[1px]"],
    positioner: [],
    content: [
      "z-50",
      "overflow-hidden",
      "rounded-md",
      "border",
      "bg-popover",
      "px-3",
      "py-1.5",
      "text-sm",
      "text-popover-foreground",
      "shadow-md",
      "animate-in",
      "fade-in-0",
      "zoom-in-95",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0",
      "data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
    ],
  },
  variants: {},
});
const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(T.Root, "root");
export const Arrow = withContext(T.Arrow, "arrow");
export const ArrowTip = withContext(T.ArrowTip, "arrowTip");
export const Content = withContext(T.Content, "content");
export const Positioner = withContext(T.Positioner, "positioner");
export const Trigger = withContext(T.Trigger, "trigger");

export const Tooltip = Object.assign(Root, {
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Trigger,
});
