import { RadioGroup as RG } from "@ark-ui/react/radio-group";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  slots: {
    root: [
      "bg-background",
      "flex",
      "data-[orientation=vertical]:flex-col",
      "data-[orientation=horizontal]:flex-row",
    ],
    itemControl: [
      "bg-transparent",
      "border",
      "rounded-full",
      "transition-[background]",
      "ease-default",
      "duration-normal",
      "hover:bg-muted",

      "data-[state=checked]:bg-foreground",
      "data-[state=checked]:border-foreground",
      "data-[state=checked]:outline",
      "data-[state=checked]:outline-background",
      "data-[state=checked]:hover:bg-muted-foreground",
      "data-[state=checked]:hover:border-muted-foreground",

      "data-[disabled]:bg-muted",
      "data-[disabled]:text-muted-foreground",
      "data-[disabled]:hover:bg-[initial]",
      "data-[disabled]:hover:text-muted-foreground",

      "data-[focus]:ring-2",
      "data-[focus]:ring-muted-foreground",
      "data-[focus]:ring-offset-2",
    ],
    item: [
      "flex",
      "items-center",
      "cursor-pointer",
      "data-[disabled]:cursor-not-allowed",
    ],
    itemText: [
      "text-foreground",
      "font-medium",
      "data-[disabled]:text-muted-foreground",
    ],
    label: [],
    indicator: [],
  },
  variants: {
    size: {
      sm: {
        root: ["_vertical:gap-3", "data-[orientation=horizontal]:gap-4"],
        item: ["gap-2"],
        itemControl: [
          "size-4",
          "data-[state=checked]:outline-[3px]",
          "data-[state=checked]:outline-offset-[-4px]",
        ],
        itemText: ["text-sm"],
      },
      md: {
        root: ["data-[orientation=vertical]:gap-4", "data-[orientation=horizontal]:gap-6"],
        item: ["gap-3"],
        itemControl: [
          "size-5",
          "data-[state=checked]:outline-[4px]",
          "data-[state=checked]:outline-offset-[-5px]",
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
  ...RG,
  Root,
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
});
