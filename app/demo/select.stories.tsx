import { Portal } from "@ark-ui/react";
import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import { Select as S, data } from "~/components/ui/select";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";
import { InputGroup } from "~/components/ui/input-group";
import { HStack } from "~/components/ui/stack";

export const MultipleSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items} multiple>
      <S.Label>Multiple select</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel htmlFor="framework">
                Frameworks
              </S.ItemGroupLabel>
              {items.map((item) => (
                <S.Item key={item.value} item={item}>
                  <S.ItemText>{item.label}</S.ItemText>
                  <S.ItemIndicator>✓</S.ItemIndicator>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const SingleSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items}>
      <S.Label>Single select</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel htmlFor="framework">
                Frameworks
              </S.ItemGroupLabel>
              {items.map((item) => (
                <S.Item key={item.value} item={item}>
                  <S.ItemText>{item.label}</S.ItemText>
                  <S.ItemIndicator>✓</S.ItemIndicator>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const WithError = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items} variant="error">
      <S.Label>With error</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel htmlFor="framework">
                Frameworks
              </S.ItemGroupLabel>
              {items.map((item) => (
                <S.Item key={item.value} item={item}>
                  <S.ItemText>{item.label}</S.ItemText>
                  <S.ItemIndicator>✓</S.ItemIndicator>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const DisabledSelect = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <S items={items} disabled>
      <S.Label>Disabled select</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.AutoFocusingFilterInput
              placeholder="Filter frameworks"
              onChange={(e) => handleChange(e.target)}
              className="pointer-events-auto"
            />
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel htmlFor="framework">
                Frameworks
              </S.ItemGroupLabel>
              {items.map((item) => (
                <S.Item key={item.value} item={item}>
                  <S.ItemText>{item.label}</S.ItemText>
                  <S.ItemIndicator>✓</S.ItemIndicator>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const WithGroupInput = () => {
  const [search, setSearch] = useState("");

  const items = matchSorter(data, search, { keys: ["label"] });

  return (
    <S items={items} multiple onValueChange={() => setSearch("")}>
      <S.Label>With input group</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder="select a framework" />
          <S.Indicator asChild>
            <ChevronsUpDownIcon />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <InputGroup
              asChild
              variant="ghost"
              className="px-2 py-1 border-b h-10"
            >
              <HStack>
                <InputGroup.LeftAddon>
                  <SearchIcon />
                </InputGroup.LeftAddon>
                <InputGroup.Input asChild>
                  <S.AutoFocusingFilterInput
                    unstyled
                    placeholder="Filter frameworks"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                </InputGroup.Input>
              </HStack>
            </InputGroup>
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel htmlFor="framework">
                Frameworks
              </S.ItemGroupLabel>
              {items.map((item) => (
                <S.Item key={item.value} item={item}>
                  <S.ItemText>{item.label}</S.ItemText>
                  <S.ItemIndicator>✓</S.ItemIndicator>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S>
  );
};

export const Selects = () => {
  return (
    <Story
      title="selects"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <SingleSelect />
      <MultipleSelect />
      <DisabledSelect />
      <WithGroupInput />
      <WithError />
    </Story>
  );
};
