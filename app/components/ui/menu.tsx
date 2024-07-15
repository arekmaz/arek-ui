import { Menu as M } from "@ark-ui/react/menu";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { id } from "../utils/id";

const itemStyle = id([
  "flex",
  "items-center",
  "radius-sm",
  "cursor-pointer",
  "font-medium",
  "text-sm",
  "transition-[background,color]",
  "ease-default",
  "duration-fast",
  "hover:bg-muted",
  "_highlighted:bg-muted",
  "[&_:where(svg)]:text-muted-foreground",
]);

const menuStyles = tv({
  slots: {
    root: [],
    itemGroupLabel: ["font-semibold", "text-sm"],
    content: [
      "border",
      "bg-background",
      "rounded-md",
      "shadow-lg",
      "flex-col",
      "outline-none",
      "w-[calc(100%+2rem)]",
      "z-dropdown",
      "flex",
      "_hidden:hidden",
      "_open:animate-[fade-in_250ms_ease-out]",
      "data-[state=closed]:animate-[fade-out_200ms_ease-out]",
    ],
    itemGroup: ["flex", "flex-col"],
    positioner: ["z-dropdown"],
    item: [...itemStyle],
    optionItem: [...itemStyle],
    triggerItem: [...itemStyle],
    arrow: [],
    arrowTip: [],
    contextTrigger: [],
    separator: [],
    trigger: [],
  },
  variants: {
    size: {
      md: {
        itemGroup: ["gap-1"],
        itemGroupLabel: ["py-2.5", "px-2.5", "mx-1"],
        content: ["py-1", "gap-1"],
        item: ["h-10", "px-2.5", "mx-1", "[&_:where(svg)]:size-4"],
        triggerItem: ["h-10", "px-2.5", "mx-1", "[&_:where(svg)]:size-4"],
      },
    },
  },
  defaultVariants: { size: "md" },
});

const { withProvider, withContext } = createStyleContext(menuStyles);

const Root = withProvider(M.Root, "root");
const Arrow = withContext(M.Arrow, "arrow");
const ArrowTip = withContext(M.ArrowTip, "arrowTip");
const Content = withContext(M.Content, "content");
const ContextTrigger = withContext(M.ContextTrigger, "contextTrigger");
const Item = withContext(M.Item, "item");
const ItemGroup = withContext(M.ItemGroup, "itemGroup");
const ItemGroupLabel = withContext(M.ItemGroupLabel, "itemGroupLabel");
const Positioner = withContext(M.Positioner, "positioner");
const Separator = withContext(M.Separator, "separator");
const Trigger = withContext(M.Trigger, "trigger");
const TriggerItem = withContext(M.TriggerItem, "triggerItem");

export const Menu = Object.assign(Root, {
  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  Item,
  ItemGroup,
  ItemGroupLabel,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
});
