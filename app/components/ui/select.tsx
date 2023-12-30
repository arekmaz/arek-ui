/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
import { Portal, Select as S } from "@ark-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { matchSorter } from "match-sorter";
import { ComponentProps, useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";

const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
];

const combobox = tv({
  slots: {
    root: "flex flex-col gap-1.5 w-full",
    label: "text-foreground font-medium",
    control: "relative cursor-pointer",
    valueText: "flex gap-1 flex-row whitespace-nowrap",
    filterInput:
      "items-center rounded-sm cursor-pointer flex content-between duration-75 transition-all hover:bg-muted disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent border border-border outline-none focus-visible:ring-2 ring-black",
    trigger:
      "items-center rounded-sm cursor-pointer flex justify-between duration-75 transition-all hover:bg-muted disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent border border-border outline-none focus-visible:ring-2 ring-black w-full",
    clearTrigger: "",
    positioner: "",
    content:
      "bg-popover rounded-md shadow-lg flex flex-col z-[1000] data-[state=closed]:opacity-0 data-[state=open]:opacity-1 transition-opacity duration-500 ease-out data-[state=closed]:h-0 data-[state=closed]:overflow-hidden",
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
export const FilterInput = withContext("input", "filterInput");
export const ClearTrigger = withContext(S.ClearTrigger, "clearTrigger");
export const ValueText = withContext(S.ValueText, "valueText");
export const Positioner = withContext(S.Positioner, "positioner");
export const Content = withContext(S.Content, "content");
export const ItemGroup = withContext(S.ItemGroup, "itemGroup");
export const ItemGroupLabel = withContext(S.ItemGroupLabel, "itemGroupLabel");
export const Item = withContext(S.Item, "item");
export const ItemText = withContext(S.ItemText, "itemText");
export const ItemIndicator = withContext(S.ItemIndicator, "itemIndicator");

const AutoFocusableFilterInput = ({
  isOpen,
  ...props
}: ComponentProps<typeof FilterInput> & { isOpen: boolean }) => {
  const filterInputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        filterInputRef.current?.focus();
      }, 0);
    }
  }, [isOpen]);

  return <FilterInput tabIndex={0} {...props} ref={filterInputRef} />;
};

export const MultipleSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items} multiple>
      {(props) => {
        return (
          <>
            <Label>Framework</Label>
            <Control>
              <Trigger>
                <ValueText placeholder="Select a Framework..." />
                <S.Indicator>
                  <ChevronDownIcon />
                </S.Indicator>
              </Trigger>
            </Control>
            <Portal>
              <Positioner>
                <Content>
                  <AutoFocusableFilterInput
                    isOpen={props.isOpen}
                    placeholder="Filter frameworks"
                    onChange={(e) => handleChange(e.target)}
                    className="pointer-events-auto"
                  />
                  <ItemGroup id="framework">
                    <ItemGroupLabel htmlFor="framework">
                      Frameworks
                    </ItemGroupLabel>
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
          </>
        );
      }}
    </Root>
  );
};

export const SingleSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items}>
      {(props) => {
        return (
          <>
            <Label>Framework</Label>
            <Control>
              <Trigger>
                <ValueText placeholder="Select a Framework..." />
                <S.Indicator>
                  <ChevronDownIcon />
                </S.Indicator>
              </Trigger>
            </Control>
            <Portal>
              <Positioner>
                <Content>
                  <AutoFocusableFilterInput
                    isOpen={props.isOpen}
                    placeholder="Filter frameworks"
                    onChange={(e) => handleChange(e.target)}
                    className="pointer-events-auto"
                  />
                  <ItemGroup id="framework">
                    <ItemGroupLabel htmlFor="framework">
                      Frameworks
                    </ItemGroupLabel>
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
          </>
        );
      }}
    </Root>
  );
};
