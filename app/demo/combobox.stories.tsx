import { Portal } from "@ark-ui/react/portal";
import { ChevronsUpDownIcon } from "lucide-react";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import {
  Content,
  Control,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
} from "~/components/ui/combobox";
import { VStack } from "~/components/ui/stack";

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
      <Label>Single combobox</Label>
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
      <Label>Multiple combobox</Label>
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

export const DisabledCombobox = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items} onInputValueChange={handleChange} disabled>
      <Label>Disabled combobox</Label>
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

export const Comboboxes = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>COMBOBOXES:</p>
      <SingleCombobox />
      <MultipleCombobox />
      <DisabledCombobox />
    </VStack>
  );
};
