/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
import { Select as S, useSelectContext } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";
import { ComponentProps, useRef, useEffect } from "react";
import { ark, HTMLArkProps } from "@ark-ui/react/factory";
import { inputClasses } from "./input";

export const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
];

const combobox = tv({
  slots: {
    root: "flex flex-col gap-1.5 w-full bg-background text-foreground ",
    label: "text-foreground font-medium",
    control: "relative cursor-pointer",
    indicator:
      "text-muted-foreground h-full absolute top-0 bottom-0 right-3 size-4",
    trigger: [
      ...inputClasses,
      "px-3",
      "h-11",
      "min-w-11",
      "group/select-trigger",
    ],
    valueText: [
      "flex",
      "gap-1",
      "flex-row",
      "whitespace-nowrap",
      "group-data-[placeholder-shown]/select-trigger:text-muted-foreground",
      "group-data-[disabled]/select-trigger:text-muted-foreground",
      // "group-data-[disabled]/select-trigger:opacity-50",
      "whitespace-nowrap",
    ],
    filterInput: [...inputClasses, "px-3", "h-11", "min-w-11"],
    clearTrigger: "",
    positioner: "",
    content: [
      "bg-popover",
      "rounded-md",
      "shadow-lg",
      "flex",
      "flex-col",
      "z-dropdown",
      // TODO: align animation
      "_closed:opacity-0",
      "_open:opacity-1",
      "transition-opacity",
      "duration-500",
      "ease-out",
      "ring-1",
      "ring-border",
      "_closed:h-0",
      "_closed:overflow-hidden",
      "outline-muted",
    ],
    itemGroup: "",
    itemGroupLabel: "px-2 py-1.5 text-sm font-semibold",
    item: "items-center rounded-md cursor-pointer flex justify-between transition-all duration-75 hover:bg-muted data-[highlighted]:bg-accent _disabled:text-muted-foreground _disabled:cursor-not-allowed _disabled:hover:bg-transparent",
    itemText: "",
    itemIndicator: "",
  },
  variants: {
    size: {
      md: {
        content: "p-1 gap-1",
        item: "text-md px-2 h-10",
        itemGroupLabel: "px-2 py-1.5",
        filterInput: "px-3 h-10 min-w-10 text-md",
        trigger: "px-3 h-10 text-md min-w-52",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const { withContext, withProvider } = createStyleContext(combobox);

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
  const { isOpen } = useSelectContext();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        filterInputRef.current?.focus();
      }, 0);
    }
  }, [isOpen]);

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
