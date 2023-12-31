import { Combobox as C } from "@ark-ui/react/combobox";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";

const combobox = tv({
  slots: {
    root: "flex flex-col gap-1.5 w-full",
    label: "text-foreground font-medium data-[disabled]:text-muted-foreground",
    control: "relative",
    input:
      "bg-background rounded-sm cursor-pointer content-between duration-75 transition-all hover:bg-muted disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent border border-input outline-none focus-visible:ring-1 ring-muted-foreground",
    trigger:
      "bottom-0 text-muted-foreground absolute top-0 size-4 h-full cursor-pointer",
    clearTrigger: "",
    positioner: "",
    content:
      "bg-popover rounded-md shadow-lg flex flex-col z-[1000] data-[state=closed]:opacity-0 data-[state=open]:opacity-1 transition-opacity duration-500 ease-out ring-1 ring-border outline-muted",
    itemGroup: "",
    itemGroupLabel: "px-2 py-1.5 text-sm font-semibold",
    item: "items-center rounded-md cursor-pointer flex justify-between transition-all duration-75 data-[highlighted]:bg-accent data-[disabled]:text-muted-foreground data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent",
    itemText: "",
    itemIndicator: "",
  },
  variants: {
    size: {
      md: {
        content: "p-1 gap-1",
        item: "text-md px-2 h-10",
        itemGroupLabel: "px-2 py-1.5",
        trigger: "right-3",
        input: "px-3 h-10 min-w-10 text-md",
      },
    },
  },
  defaultVariants: {
    size: "md",
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
});
