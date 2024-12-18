import { TagsInput } from "~/components/ui/tags-input";
import { Combobox as C } from "~/components/ui/combobox";
import { Story } from "./storyHelpers";
import { ArrowRight, PiIcon, XIcon } from "lucide-react";
import { IconButton } from "~/components/ui/icon-button";
import { InputGroup } from "~/components/ui/input-group";
import { useMemo, useState } from "react";
import { matchSorter } from "match-sorter";
import { data } from "~/components/ui/select";
import { createListCollection, Portal } from "@ark-ui/react";

const Normal = () => {
  return (
    <TagsInput>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label>Normal</TagsInput.Label>
            <TagsInput.Control>
              {api.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger>
                      <XIcon />
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                </TagsInput.Item>
              ))}
              <TagsInput.Input placeholder="Add Framework" />
            </TagsInput.Control>
          </>
        )}
      </TagsInput.Context>
    </TagsInput>
  );
};

const WithInputGroup = () => {
  return (
    <TagsInput>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label>With input group</TagsInput.Label>
            <TagsInput.Control>
              {api.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger asChild>
                      <IconButton size="sm" variant="ghost">
                        <XIcon />
                      </IconButton>
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
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
      </TagsInput.Context>
    </TagsInput>
  );
};

const WithCombobox = () => {
  const [items, setItems] = useState(data);

  const handleChange = (e: any) => {
    const filtered = matchSorter(data, e.inputValue, { keys: ["label"] });
    setItems(filtered.length > 0 ? filtered : data);
  };

  const collection = useMemo(() => createListCollection({ items }), [items]);

  return (
    <TagsInput>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label>With combobox</TagsInput.Label>
            <TagsInput.Control className="p-0">
              {api.value.map((value, index) => (
                <TagsInput.Item
                  key={index}
                  index={index}
                  value={value}
                  className="ps-1"
                >
                  <TagsInput.ItemInput />
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger>
                      <XIcon />
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                </TagsInput.Item>
              ))}

              <C
                collection={collection}
                onInputValueChange={handleChange}
                onValueChange={({ value: [firstValue] }) => {
                  if (firstValue) {
                    api.setValue(
                      Array.from(new Set([...api.value, firstValue])),
                    );
                  }
                }}
                onOpenChange={() => setItems(data)}
                className="flex-1"
              >
                <C.Control className="flex w-auto">
                  <TagsInput.Input
                    placeholder="Add Framework"
                    className="flex-1 border-none focus-visible:ring-0"
                    asChild
                  >
                    <C.Input placeholder="select a framework" />
                  </TagsInput.Input>
                </C.Control>
                <Portal>
                  <C.Positioner>
                    <C.Content>
                      <C.ItemGroup>
                        <C.ItemGroupLabel>Frameworks</C.ItemGroupLabel>
                        {items.map((item) => (
                          <C.Item key={item.value} item={item}>
                            <C.ItemText>{item.label}</C.ItemText>
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
      </TagsInput.Context>
    </TagsInput>
  );
};

const Disabled = () => {
  return (
    <TagsInput disabled defaultValue={["test"]}>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label>Disabled</TagsInput.Label>
            <TagsInput.Control>
              {api.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger asChild>
                      <XIcon />
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                </TagsInput.Item>
              ))}
              <TagsInput.Input placeholder="Add Framework" />
            </TagsInput.Control>
          </>
        )}
      </TagsInput.Context>
    </TagsInput>
  );
};

export const TagsInputs = () => {
  return (
    <Story title="TAGS INPUTS" componentFilename="tags-input">
      <Normal />
      <WithInputGroup />
      <Disabled />
      <WithCombobox />
    </Story>
  );
};
