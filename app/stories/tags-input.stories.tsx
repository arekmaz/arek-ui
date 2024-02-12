import { TagsInput } from "~/components/ui/tags-input";
import { Combobox as C } from "~/components/ui/combobox";
import { ArrowRight, ChevronsUpDownIcon, PiIcon, XIcon } from "lucide-react";
import { IconButton } from "~/components/ui/icon-button";
import { InputGroup } from "~/components/ui/input-group";
import { useState } from "react";
import { matchSorter } from "match-sorter";
import { data } from "~/components/ui/select";
import { Portal } from "@ark-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "TagsInput",
  component: TagsInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "tags-input.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TagsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => {
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
  },
};

export const WithInputGroup = {
  render: () => {
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
  },
};

export const WithCombobox: Story = {
  render: () => {
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
  },
};

export const Disabled: Story = {
  render: () => {
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
  },
};
