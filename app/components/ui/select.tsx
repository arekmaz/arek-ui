/* eslint-disable react/prop-types */
import { Select as S, useSelectContext } from "@ark-ui/react";
import { ark } from "@ark-ui/react";
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
    root: "flex flex-col gap-1.5 w-full",
    label: "font-medium",
    control: "relative cursor-pointer bg-background",
    indicator: "text-muted-foreground size-4",
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
      "_disabled:cursor-not-allowed",
      "_disabled:opacity-50",
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
      "flex",
      "flex-col",
      "z-dropdown",
      "_closed:animate-fade-out",
      "_open:animate-fade-in",
      "_hidden:hidden",
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
        content: "gap-1",
        item: "text-md px-2 h-10",
        itemGroupLabel: "px-2 py-1.5",
        filterInput: "px-3 h-10 min-w-10 text-md",
        trigger: "px-3 h-10 text-md min-w-52",
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
  props: ComponentProps<typeof FilterInput>
) => {
  const filterInputRef = useRef<HTMLInputElement>(null!);
  const { isOpen, value } = useSelectContext();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        filterInputRef.current?.focus();
      }, 0);
    }
  }, [isOpen, value]);

  return <FilterInput tabIndex={0} {...props} ref={filterInputRef} />;
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
