import { Combobox as C } from "@ark-ui/react/combobox";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { inputClasses } from "./input";

const combobox = tv({
  slots: {
    root: ["flex w-full flex-col gap-1.5"],
    label: [
      "text-foreground",
      "font-medium",
      "_disabled:text-muted-foreground",
    ],
    control: "relative",
    input: [...inputClasses, "px-3", "h-11", "min-w-11", "text-base"],
    trigger: [
      "bottom-0",
      "text-muted-foreground",
      "absolute",
      "top-0",
      "size-4",
      "h-full",
      "cursor-pointer",
      "_disabled:cursor-not-allowed",
      "_disabled:opacity-50",
    ],
    clearTrigger: "",
    positioner: "",
    content: [
      "bg-popover",
      "rounded-md",
      "shadow-lg",
      "flex",
      "flex-col",
      "z-dropdown",
      "_hidden:hidden",
      "data-[state=closed]:opacity-0",
      "data-[state=open]:opacity-1",
      "transition-opacity",
      "duration-slowest",
      "ease-out",
      "ring-1",
      "ring-border",
      "outline-muted",
    ],
    itemGroup: "",
    itemGroupLabel: ["px-2 py-1.5 text-sm font-semibold"],
    item: [
      "items-center",
      "rounded-md",
      "cursor-pointer",
      "flex",
      "justify-between",
      "transition-all",
      "duration-faster",
      "data-[highlighted]:bg-accent",
      "_disabled:text-muted-foreground",
      "_disabled:cursor-not-allowed",
      "_disabled:hover:bg-transparent",
    ],
    itemText: "",
    itemIndicator: "",
  },
  variants: {
    size: {
      md: {
        content: "gap-1 p-1",
        item: "text-md h-10 px-2",
        itemGroupLabel: "px-2 py-1.5",
        trigger: "right-3",
        input: "text-md h-10 min-w-10 px-3",
      },
    },
    variant: {
      default: {},
      error: {
        label: ["text-destructive"],
        input: [
          "text-destructive",
          "placeholder:text-destructive/50",
          "border-destructive",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

const { withContext, withProvider } = createStyleContext(combobox);

export const Root = withProvider(C.Root, "root");
export const Label = withContext(C.Label, "label");
export const Control = withContext(C.Control, "control");
export const Input = withContext(C.Input, "input");
export const Trigger = withContext(C.Trigger, "trigger");
export const ClearTrigger = withContext(C.ClearTrigger, "clearTrigger");
export const Positioner = withContext(C.Positioner, "positioner");
export const Content = withContext(C.Content, "content");
export const ItemGroup = withContext(C.ItemGroup, "itemGroup");
export const ItemGroupLabel = withContext(C.ItemGroupLabel, "itemGroupLabel");
export const Item = withContext(C.Item, "item");
export const ItemText = withContext(C.ItemText, "itemText");
export const ItemIndicator = withContext(C.ItemIndicator, "itemIndicator");

export const Combobox = Object.assign(Root, {
  Label,
  Control,
  Input,
  Trigger,
  ClearTrigger,
  Positioner,
  Content,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemIndicator,
  ItemText,
  Context: C.Context,
});
