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
    trigger: [...inputClasses, "px-3", "h-11", "min-w-11"],
    valueText: [
      "flex gap-1 flex-row whitespace-nowrap group-data-[placeholder-shown]/select-trigger:text-gray-400",
      "disabled:opacity-50",
    ],
    filterInput: [...inputClasses, "px-3", "h-11", "min-w-11"],
    clearTrigger: "",
    positioner: "",
    content: [
      "bg-background rounded-md shadow-lg flex flex-col z-[1000] data-[state=closed]:opacity-0 data-[state=open]:opacity-1 transition-opacity duration-500 ease-out data-[state=closed]:h-0 data-[state=closed]:overflow-hidden",
      "outline-muted",
    ],
    itemGroup: "",
    itemGroupLabel: "px-2 py-1.5 text-sm font-semibold",
    item: "items-center rounded-md cursor-pointer flex justify-between transition-all duration-75 hover:bg-muted data-[highlighted]:bg-accent data-[disabled]:text-muted-foreground data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent",
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

export const Root = withProvider(S.Root, "root");
export const Label = withContext(S.Label, "label");
export const Control = withContext(S.Control, "control");
export const Trigger = withContext(S.Trigger, "trigger");
export const FilterInput = withContext(ark.input, "filterInput");
export const ClearTrigger = withContext(S.ClearTrigger, "clearTrigger");
export const ValueText = withContext(S.ValueText, "valueText");
export const Positioner = withContext(S.Positioner, "positioner");
export const Content = withContext(S.Content, "content");
export const ItemGroup = withContext(S.ItemGroup, "itemGroup");
export const ItemGroupLabel = withContext(S.ItemGroupLabel, "itemGroupLabel");
export const Item = withContext(S.Item, "item");
export const ItemText = withContext(S.ItemText, "itemText");
export const ItemIndicator = withContext(S.ItemIndicator, "itemIndicator");
export const Indicator = withContext(S.Indicator, "indicator");

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
  Root,
  Label,
  Control,
  Trigger,
  FilterInput,
  ClearTrigger,
  ValueText,
  Positioner,
  Content,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
  AutoFocusingFilterInput,
});
