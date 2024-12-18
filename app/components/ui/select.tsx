/* eslint-disable react/prop-types */
import { Select as S, ark, useSelectContext } from "@ark-ui/react";
import { ComponentProps, useEffect, useRef } from "react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { inputClasses } from "./input";

export const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
];

const selectStyles = tv({
  slots: {
    root: "flex w-full flex-col gap-1.5",
    label: "font-medium",
    control: "relative cursor-pointer bg-background",
    indicator: "size-4 text-muted-foreground",
    trigger: [
      ...inputClasses,
      "flex",
      "justify-between",
      "items-center",
      "px-3",
      "h-10",
      "min-w-10",
      "text-md",
      "group/select-trigger",
    ],
    valueText: [
      "flex",
      "gap-1",
      "flex-row",
      "whitespace-nowrap",
      "group-data-[disabled]/select-trigger:text-muted-foreground",
      "whitespace-nowrap",
    ],
    filterInput: [
      "h-10",
      "w-full",
      "border-b",
      "border-input",
      "bg-transparent",
      "px-3",
      "py-2",
      "text-sm",
      "ring-offset-background",
      "file:border-0",
      "file:text-sm",
      "file:font-medium",
      "placeholder-muted-foreground",
      "focus-visible:outline-none",
      "data-[disabled]:cursor-not-allowed",
      "data-[disabled]:opacity-50",
      "px-3",
      "h-11",
      "min-w-11",
    ],
    clearTrigger: "",
    positioner: "",
    content: [
      "overflow-hidden",
      "bg-popover",
      "rounded-md",
      "shadow-lg",
      "data-[state=open]:flex",
      "flex-col",
      "z-dropdown",
      "data-[state=closed]:animate-fade-out",
      "data-[state=open]:animate-fade-in",
      "border",
      "focus-visible:outline",
      "focus-visible:outline-offset-2",
      "focus-visible:outline-2",
      "focus-visible:outline-offset-2",
      "focus-visible:outline-foreground",
    ],
    itemGroup: "",
    itemGroupLabel: "px-2 py-1.5 text-sm font-semibold",
    item: [
      "items-center",
      "rounded-md",
      "cursor-pointer",
      "flex",
      "justify-between",
      "transition-all",
      "duration-faster",
      "hover:bg-muted",
      "data-[highlighted]:bg-accent",
      "data-[disabled]:text-muted-foreground",
      "data-[disabled]:cursor-not-allowed",
      "data-[disabled]:hover:bg-transparent",
    ],
    itemText: "",
    itemIndicator: "",
  },
  variants: {
    size: {
      md: {
        content: "gap-1",
        item: "text-md h-10 px-2",
        itemGroupLabel: "px-2 py-1.5",
        filterInput: "text-md h-10 min-w-10 px-3",
        trigger: "text-md h-10 min-w-52 px-3",
        itemGroup: "px-1 pb-1",
      },
    },
    variant: {
      default: {
        label: ["text-foreground"],
        valueText: [
          "group-data-[placeholder-shown]/select-trigger:text-muted-foreground",
        ],
      },
      error: {
        root: [],
        label: ["text-destructive"],
        valueText: [
          "text-destructive",
          "group-data-[placeholder-shown]/select-trigger:text-destructive/50",
        ],
        trigger: ["border-destructive"],
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

const { withContext, withProvider } = createStyleContext(selectStyles);

const Root = withProvider(S.Root, "root");
const Label = withContext(S.Label, "label");
const Control = withContext(S.Control, "control");
const Trigger = withContext(S.Trigger, "trigger");
const FilterInput = withContext(ark.input, "filterInput");
const ClearTrigger = withContext(S.ClearTrigger, "clearTrigger");
const ValueText = withContext(S.ValueText, "valueText");
const Positioner = withContext(S.Positioner, "positioner");
const Content = withContext(S.Content, "content");
const ItemGroup = withContext(S.ItemGroup, "itemGroup");
const ItemGroupLabel = withContext(S.ItemGroupLabel, "itemGroupLabel");
const Item = withContext(S.Item, "item");
const ItemText = withContext(S.ItemText, "itemText");
const ItemIndicator = withContext(S.ItemIndicator, "itemIndicator");
const Indicator = withContext(S.Indicator, "indicator");

export const AutoFocusingFilterInput = (
  props: ComponentProps<typeof FilterInput>,
) => {
  const filterInputRef = useRef<HTMLInputElement>(null!);
  const { open, value } = useSelectContext();

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        filterInputRef.current?.focus();
      }, 0);
    }
  }, [open, value]);

  return <FilterInput tabIndex={0} {...props} ref={filterInputRef as any} />;
};

export const Select = Object.assign(Root, {
  Label,
  Control,
  Trigger,
  FilterInput,
  ClearTrigger,
  ValueText,
  Positioner,
  Indicator,
  Content,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
  AutoFocusingFilterInput,
});
