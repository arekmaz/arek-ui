import { Popover as P } from "@ark-ui/react/popover";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  base: "popover",
  slots: {
    root: [],
    positioner: ["relative"],
    content: [
      "border",
      "bg-popover",
      "rounded-lg",
      "shadow-lg",
      "data-[state=open]:flex",
      "flex-col",
      "z-popover",
      "max-w-sm",
      "p-4",
      "data-[state=open]:animate-fade-in",
      "data-[state=closed]:animate-fade-out",
    ],
    title: ["font-medium", "text-sm"],
    description: ["text-muted-foreground", "text-sm"],
    closeTrigger: ["text-muted-foreground"],
    arrow: [
      "[--arrow-size:12px]",
      "[--arrow-background:hsl(var(--background))]",
    ],
    arrowTip: ["border-t-[1px]", "border-l-[1px]"],
    anchor: [],
    trigger: [],
    indicator: [],
  },
  variants: {},
});

const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(P.Root, "root");
export const Anchor = withContext(P.Anchor, "anchor");
export const Arrow = withContext(P.Arrow, "arrow");
export const ArrowTip = withContext(P.ArrowTip, "arrowTip");
export const CloseTrigger = withContext(P.CloseTrigger, "closeTrigger");
export const Content = withContext(P.Content, "content");
export const Description = withContext(P.Description, "description");
export const Indicator = withContext(P.Indicator, "indicator");
export const Positioner = withContext(P.Positioner, "positioner");
export const Title = withContext(P.Title, "title");
export const Trigger = withContext(P.Trigger, "trigger");

export const Popover = Object.assign(Root, {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Positioner,
  Title,
  Trigger,
});
