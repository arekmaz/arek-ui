import { matchSorter } from "match-sorter";
import { useState } from "react";
import { Combobox as C } from "./combobox_1";
import { ChevronsUpDownIcon } from "lucide-react";
import { Portal } from "@ark-ui/react";

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
    <C items={items} onInputValueChange={handleChange}>
      <C.Label>Framework</C.Label>
      <C.Control>
        <C.Input placeholder="select a framework" />
        <C.Trigger asChild>
          <ChevronsUpDownIcon />
        </C.Trigger>
        {/* <ClearTrigger>Clear</ClearTrigger> */}
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
  );
};
