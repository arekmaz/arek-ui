import { Portal } from "@ark-ui/react";
import { ChevronsUpDownIcon, XIcon } from "lucide-react";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import { Combobox as C } from "./combobox";
import { Input } from "./input";
import { TagsInput } from "./tags-input";

const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
];

export const TagsCombobox = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.value, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  return (
    <C items={items} onInputValueChange={handleChange} multiple>
      <C.Context>
        {(comboboxApi) => {
          return (
            <>
              <C.Label>Framework</C.Label>
              <C.Control>
                <TagsInput
                  value={comboboxApi.value}
                  onValueChange={({ value }) => comboboxApi.setValue(value)}
                >
                  <TagsInput.Context>
                    {(api) => {
                      return (
                        <>
                          <TagsInput.Control>
                            {api.value.map((value, index) => (
                              <TagsInput.Item
                                key={index}
                                index={index}
                                value={value}
                              >
                                <TagsInput.ItemInput />
                                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                                <TagsInput.ItemDeleteTrigger>
                                  <XIcon />
                                </TagsInput.ItemDeleteTrigger>
                              </TagsInput.Item>
                            ))}
                          </TagsInput.Control>
                          <TagsInput.Input
                            placeholder="Add Framework"
                            onChange={(e: any) => {
                              comboboxApi.setInputValue(e.target.value);
                              comboboxApi.setOpen(true);
                            }}
                            asChild
                          >
                            <Input />
                          </TagsInput.Input>
                          <TagsInput.ClearTrigger>
                            Clear all
                          </TagsInput.ClearTrigger>
                        </>
                      );
                    }}
                  </TagsInput.Context>
                </TagsInput>
                <C.Trigger asChild>
                  <ChevronsUpDownIcon />
                </C.Trigger>
              </C.Control>
              <Portal>
                <C.Positioner>
                  <C.Content>
                    <C.ItemGroup>
                      <C.ItemGroupLabel>Frameworks</C.ItemGroupLabel>
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
            </>
          );
        }}
      </C.Context>
    </C>
  );
};
