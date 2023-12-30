import { Combobox as C } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { matchSorter } from "match-sorter";
import { HStack } from "./stack";

const combobox = tv({
  slots: {
    root: "flex flex-col gap-1.5 w-full",
    label: "text-foreground font-medium",
    control: "relative",
    input:
      "items-center rounded-sm cursor-pointer flex content-between duration-75 transition-all hover:bg-muted disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent border border-border outline-none focus-visible:ring-2 ring-black",
    trigger:
      "bottom-0 text-muted-foreground absolute top-0 size-4 h-full right-3 cursor-pointer",
    clearTrigger: "",
    positioner: "",
    content:
      "bg-popover rounded-md shadow-lg flex flex-col z-[1000] data-[state=closed]:opacity-0 data-[state=open]:opacity-1 transition-opacity duration-500 ease-out",
    itemGroup: "",
    itemGroupLabel: "px-2 py-1.5 text-sm font-semibold",
    item: "items-center rounded-md cursor-pointer flex justify-between transition-all duration-75 hover:bg-gray-100 data-[highlighted]:bg-gray-200 data-[disabled]:text-stone-200 data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-transparent ",
    itemText: "",
    itemIndicator: "",
  },
  variants: {
    size: {
      md: {
        content: "p-1 gap-1",
        item: "text-md px-2 h-10",
        itemGroupLabel: "px-2 py-1.5",
        trigger: "r-3",
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

const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
];

export const SingleCombobox = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items} onInputValueChange={handleChange}>
      <Label>Framework</Label>
      <Control>
        <Input placeholder="select a framework" />
        <Trigger asChild>
          <ChevronsUpDownIcon />
        </Trigger>
        {/* <ClearTrigger>Clear</ClearTrigger> */}
      </Control>
      <Portal>
        <Positioner>
          <Content>
            <ItemGroup id="framework">
              <ItemGroupLabel htmlFor="framework">Frameworks</ItemGroupLabel>
              {items.map((item) => (
                <Item key={item.value} item={item}>
                  <ItemText>{item.label}</ItemText>
                  <ItemIndicator>✓</ItemIndicator>
                </Item>
              ))}
            </ItemGroup>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
};

export const MultipleCombobox = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items} onInputValueChange={handleChange} multiple>
      <Label>Framework</Label>
      <Control>
        <Input placeholder="select a framework" />
        <Trigger asChild>
          <ChevronsUpDownIcon />
        </Trigger>
        {/* <ClearTrigger>Clear</ClearTrigger> */}
      </Control>
      <Portal>
        <Positioner>
          <Content>
            <ItemGroup id="framework">
              <ItemGroupLabel htmlFor="framework">Frameworks</ItemGroupLabel>
              {items.map((item) => (
                <Item key={item.value} item={item}>
                  <ItemText>{item.label}</ItemText>
                  <ItemIndicator>✓</ItemIndicator>
                </Item>
              ))}
            </ItemGroup>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
};
