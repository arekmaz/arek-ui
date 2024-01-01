import { HoverCard as HC } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";

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
      // TODO: animation
    ],
    arrow: [],
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
