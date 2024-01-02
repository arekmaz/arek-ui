import { Menu as M } from "@ark-ui/react/menu";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";
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
  "duration-150",
  "hover:bg-muted",
  "data-[state=highlighted]:bg-muted",
  "[&_:where(svg)]:text-muted-foreground",
]);

const menuStyles = tv({
  slots: {
    root: [],
    itemGroupLabel: ["font-semibold", "text-sm"],
    content: [
      "bg-background",
      "rounded-md",
      "shadow-lg",
      "flex-col",
      "outline-none",
      "w-[calc(100%+2rem)]",
      "z-[1000]",
      "data-[state=closed]:hidden",
      "flex",
      // TODO: animation
    ],
    itemGroup: ["flex", "flex-col"],
    positioner: ["z-[1000]"],
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
        optionItem: ["h-10", "px-2.5", "mx-1", "[&_:where(svg)]:size-4"],
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
const OptionItem = withContext(M.OptionItem, "optionItem");
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
  OptionItem,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
});
