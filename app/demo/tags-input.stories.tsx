import { TagsInput } from "~/components/ui/tags-input";
import { Combobox as C } from "~/components/ui/combobox";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";
import { ArrowRight, ChevronsUpDownIcon, PiIcon, XIcon } from "lucide-react";
import { IconButton } from "~/components/ui/icon-button";
import { InputGroup } from "~/components/ui/input-group";
import { useState } from "react";
import { matchSorter } from "match-sorter";
import { data } from "~/components/ui/select";
import { Portal } from "@ark-ui/react";

const Normal = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>Normal</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const WithInputGroup = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>With input group</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}
            <InputGroup variant="ghost">
              <InputGroup.LeftAddon>
                <PiIcon />
              </InputGroup.LeftAddon>
              <TagsInput.Input placeholder="Add Framework" unstyled asChild>
                <InputGroup.Input className="w-28" />
              </TagsInput.Input>
              <InputGroup.RightAddon>
                <ArrowRight />
              </InputGroup.RightAddon>
            </InputGroup>
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const WithCombobox = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>With combobox</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}

            <C
              items={items}
              onInputValueChange={handleChange}
              onValueChange={({ value: [firstValue] }) => {
                console.log({ firstValue, v: Array.from(api.value) });
                if (firstValue) {
                  api.setValue([...api.value, firstValue]);
                }
              }}
              className="w-auto"
            >
              <C.Control>
                <TagsInput.Input placeholder="Add Framework" asChild>
                  <C.Input placeholder="select a framework" unstyled />
                </TagsInput.Input>
                <C.Trigger asChild>
                  <ChevronsUpDownIcon />
                </C.Trigger>
              </C.Control>
              <Portal>
                <C.Positioner>
                  <C.Content>
                    <C.ItemGroup id="framework">
                      <C.ItemGroupLabel htmlFor="framework">
                        Frameworks
                      </C.ItemGroupLabel>
                      {items.map((item) => (
                        <C.Item key={item.value} item={item}>
                          <C.ItemText>{item.label}</C.ItemText>
                          <C.ItemIndicator>✓</C.ItemIndicator>
                        </C.Item>
                      ))}
                    </C.ItemGroup>
                  </C.Content>
                </C.Positioner>
              </Portal>
            </C>
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const Disabled = () => {
  return (
    <TagsInput disabled defaultValue={["test"]}>
      {(api) => (
        <>
          <TagsInput.Label>Disabled</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

export const TagsInputs = () => {
  return (
    <Story
      title="TAGS INPUTS"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Normal />
      <WithInputGroup />
      <Disabled />
      <WithCombobox />
    </Story>
  );
};
