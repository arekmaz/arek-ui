import { TagsInput as TA } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";

const tagsInputStyles = tv({
  slots: {
    root: ["flex", "flex-col", "gap-1.5", "w-full"],
    control: [
      "flex",
      "border",
      "rounded-md",
      "flex-wrap",
      "outline-0",
      "duration-200",
      "transition-[border-color,box-shadow]",
      "ease-default",
      "focus-within:outline-none",
      "focus-within:ring-2",
      "focus-within:ring-ring",
      "focus-within:ring-offset-2",
      "shadow-sm",
      "min-h-10",
    ],
    input: ["outline-none", "bg-transparent"],
    item: [
      "inline-flex",
      "items-center",
      "border",
      "rounded-md",
      "data-[state=highlighted]:border-accent",
      "data-[state=highlighted]:shadow-sm",
      "data-[state=hidden]:hidden",
      "data-[focus]:text-red-500",
    ],
    itemInput: ["bg-transparent", "outline-none"],
    label: ["text-sm"],
    itemText: [],
    itemDeleteTrigger: [],
    clearTrigger: [],
  },
  variants: {
    size: {
      md: {
        root: "gap-1.5",
        control: ["gap-1.5", "min-w-10", "px-3", "py-[7px]"],
        item: ["gap-1", "h-6", "pr-1", "pl-2", "text-sm"],
        itemDeleteTrigger: ["[&_svg]:size-4"],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const { withProvider, withContext } = createStyleContext(tagsInputStyles);

const Root = withProvider(TA.Root, "root");
const Label = withContext(TA.Label, "label");
const Control = withContext(TA.Control, "control");
const Item = withContext(TA.Item, "item");
const ItemInput = withContext(TA.ItemInput, "itemInput");
const ItemText = withContext(TA.ItemText, "itemText");
const ItemDeleteTrigger = withContext(
  TA.ItemDeleteTrigger,
  "itemDeleteTrigger"
);
const Input = withContext(TA.Input, "input");
const ClearTrigger = withContext(TA.ClearTrigger, "clearTrigger");

export const TagsInput = Object.assign(Root, {
  Label,
  Control,
  Item,
  ItemInput,
  ItemText,
  ItemDeleteTrigger,
  Input,
  ClearTrigger,
});
