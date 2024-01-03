import { RadioGroup as RG } from "@ark-ui/react/radio-group";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  slots: {
    root: [
      "bg-background",
      "flex",
      "_vertical:flex-col",
      "_horizontal:flex-row",
    ],
    itemControl: [
      "bg-transparent",
      "border",
      "rounded-full",
      "transition-[background]",
      "ease-default",
      "duration-normal",
      "hover:bg-muted",

      "_checked:bg-foreground",
      "_checked:border-foreground",
      "_checked:outline",
      "_checked:outline-background",
      "_checked:hover:bg-muted-foreground",
      "_checked:hover:border-muted-foreground",

      "_disabled:bg-muted",
      "_disabled:text-muted-foreground",
      "_disabled:hover:bg-[initial]",
      "_disabled:hover:text-muted-foreground",

      "_focus:ring-2",
      "_focus:ring-muted-foreground",
      "_focus:ring-offset-2",
    ],
    item: [
      "flex",
      "items-center",
      "cursor-pointer",
      "_disabled:cursor-not-allowed",
    ],
    itemText: [
      "text-foreground",
      "font-medium",
      "_disabled:text-muted-foreground",
    ],
    label: [],
    indicator: [],
  },
  variants: {
    size: {
      sm: {
        root: ["_vertical:gap-3", "_horizontal:gap-4"],
        item: ["gap-2"],
        itemControl: [
          "size-4",
          "_checked:outline-[3px]",
          "_checked:outline-offset-[-4px]",
        ],
        itemText: ["text-sm"],
      },
      md: {
        root: ["_vertical:gap-4", "_horizontal:gap-6"],
        item: ["gap-3"],
        itemControl: [
          "size-5",
          "_checked:outline-[4px]",
          "_checked:outline-offset-[-5px]",
        ],
        itemText: ["text-md"],
      },
    },
  },
  defaultVariants: { size: "md" },
});
const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(RG.Root, "root");
export const Indicator = withContext(RG.Indicator, "indicator");
export const Item = withContext(RG.Item, "item");
export const ItemControl = withContext(RG.ItemControl, "itemControl");
export const ItemText = withContext(RG.ItemText, "itemText");
export const Label = withContext(RG.Label, "label");

export const RadioGroup = Object.assign(Root, {
  Root,
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
});
