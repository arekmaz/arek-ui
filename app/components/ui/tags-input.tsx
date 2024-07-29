import { TagsInput as TA } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const tagsInputStyles = tv({
  slots: {
    root: ["flex", "flex-col", "gap-1.5", "w-full", "group/tags-input"],
    control: [
      "flex",
      'items-center',
      "border",
      "rounded-md",
      "flex-wrap",
      "outline-0",
      "duration-normal",
      "transition-[border-color,box-shadow]",
      "ease-default",
      "focus-within:outline-none",
      "focus-within:ring-2",
      "focus-within:ring-ring",
      "focus-within:ring-offset-2",
      "shadow-sm",
      "min-h-10",
      "_disabled:cursor-not-allowed",
    ],
    input: ["outline-none", "bg-transparent", "_disabled:cursor-not-allowed"],
    itemPreview: [
      "inline-flex",
      "items-center",
      "border",
      "rounded-md",
      "_highlighted:border-muted-foreground",
      "_highlighted:shadow-sm",
      "_hidden:hidden",
      "_disabled:cursor-not-allowed",
    ],
    item: [],
    itemInput: ["bg-transparent", "outline-none"],
    label: ["text-sm"],
    itemText: [],
    itemDeleteTrigger: ["group-data-[disabled]/tags-input:cursor-not-allowed"],
    clearTrigger: [],
  },
  variants: {
    size: {
      md: {
        root: "gap-1.5",
        control: ["gap-1.5", "min-w-10", "px-3", "py-[7px]"],
        itemPreview: ["gap-1", "h-6", "pr-1", "pl-2", "text-sm"],
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
const ItemPreview = withContext(TA.ItemPreview, 'itemPreview')

export const TagsInput = Object.assign(Root, {
  ...TA,
  Label,
  Control,
  Item,
  ItemInput,
  ItemText,
  ItemDeleteTrigger,
  Input,
  ClearTrigger,
  ItemPreview
});
