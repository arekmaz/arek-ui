import { Portal, Select as S } from "@ark-ui/react";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import {
  AutoFocusingFilterInput,
  Content,
  Control,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
  ValueText,
  data,
  Indicator,
} from "~/components/ui/select";
import { ChevronsUpDownIcon } from "lucide-react";
import { VStack } from "~/components/ui/stack";

export const MultipleSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items} multiple>
      <Label>Multiple select</Label>
      <Control>
        <Trigger>
          <ValueText placeholder="select a framework" />
          <Indicator asChild>
            <ChevronsUpDownIcon />
          </Indicator>
        </Trigger>
      </Control>
      <Portal>
        <Positioner>
          <Content>
            <AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
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

export const SingleSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items}>
      <Label>Single select</Label>
      <Control>
        <Trigger>
          <ValueText placeholder="select a framework" />
          <Indicator asChild>
            <ChevronsUpDownIcon />
          </Indicator>
        </Trigger>
      </Control>
      <Portal>
        <Positioner>
          <Content>
            <AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
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

export const DisabledSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <Root items={items} disabled>
      <Label>Disabled select</Label>
      <Control>
        <Trigger>
          <ValueText placeholder="select a framework" />
          <Indicator asChild>
            <ChevronsUpDownIcon />
          </Indicator>
        </Trigger>
      </Control>
      <Portal>
        <Positioner>
          <Content>
            <AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
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

export const Selects = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>SELECTS:</p>
      <SingleSelect />
      <MultipleSelect />
      <DisabledSelect />
    </VStack>
  );
};
