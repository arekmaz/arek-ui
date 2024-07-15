import { HoverCard as HC } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const hoverCardStyles = tv({
  slots: {
    root: [],
    trigger: [],
    positioner: [],
    content: [
      "bg-background",
      "border",
      "rounded-lg",
      "shadow-lg",
      "max-w-80",
      "p-4",
      "relative",
      "data-[state=open]:animate-[fade-in_250ms_ease-out]",
      "data-[state=closed]:animate-[fade-out_200ms_ease-out]",
    ],
    arrow: [
      "[--arrow-background:hsl(var(--background))]",
      "[--arrow-size:12px]",
      "z-auto",
    ],
    arrowTip: ["border-t-[1px]", "border-l-[1px]"],
  },
});

const { withProvider, withContext } = createStyleContext(hoverCardStyles);

const Root = withProvider(HC.Root, "root");
const Trigger = withContext(HC.Trigger, "trigger");
const Positioner = withContext(HC.Positioner, "positioner");
const Content = withContext(HC.Content, "content");
const Arrow = withContext(HC.Arrow, "arrow");
const ArrowTip = withContext(HC.ArrowTip, "arrowTip");

export const HoverCard = Object.assign(Root, {
  Trigger,
  Positioner,
  Content,
  Arrow,
  ArrowTip,
});
