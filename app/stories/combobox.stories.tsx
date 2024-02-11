import { Portal } from "@ark-ui/react/portal";
import { ArrowRight, ChevronsUpDownIcon } from "lucide-react";
import { matchSorter } from "match-sorter";
import { useState } from "react";
import { Combobox as C } from "~/components/ui/combobox";
import { InputGroup } from "~/components/ui/input-group";
import { cn } from "~/components/utils/cn";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Combobox",
  component: C,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof C>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte", disabled: true },
  { label: "Angular JS", value: "angularjs" },
];

export const SingleCombobox: Story = {
  render: () => {
    const [items, setItems] = useState(data);

    const handleChange = (e: any) => {
      const filtered = matchSorter(data, e.value, { keys: ["label"] });
      setItems(filtered.length > 0 ? filtered : data);
    };

    return (
      <C items={items} onInputValueChange={handleChange}>
        <C.Label>Single combobox</C.Label>
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
  },
};

export const WithError: Story = {
  render: () => {
    const [items, setItems] = useState(data);

    const handleChange = (e: any) => {
      const filtered = matchSorter(data, e.value, { keys: ["label"] });
      setItems(filtered.length > 0 ? filtered : data);
    };

    return (
      <C items={items} onInputValueChange={handleChange} variant="error">
        <C.Label>With Error</C.Label>
        <C.Control>
          <C.Input placeholder="select a framework" />
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
    );
  },
};

export const OpenOnClickCombobox: Story = {
  render: () => {
    const [items, setItems] = useState(data);

    const handleChange = (e: any) => {
      const filtered = matchSorter(data, e.value, { keys: ["label"] });
      setItems(filtered.length > 0 ? filtered : data);
    };

    return (
      <C items={items} onInputValueChange={handleChange} openOnClick>
        <C.Label>Single combobox - open on click</C.Label>
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
  },
};

export const MultipleCombobox: Story = {
  render: () => {
    const [items, setItems] = useState(data);

    const handleChange = (e: any) => {
      const filtered = matchSorter(data, e.value, { keys: ["label"] });
      setItems(filtered.length > 0 ? filtered : data);
    };

    return (
      <C
        items={items}
        onInputValueChange={handleChange}
        multiple
        onValueChange={() => setItems(data)}
      >
        <C.Label>Multiple combobox</C.Label>
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
  },
};

export const DisabledCombobox: Story = {
  render: () => {
    const [items, setItems] = useState(data);

    const handleChange = (e: any) => {
      const filtered = matchSorter(data, e.value, { keys: ["label"] });
      setItems(filtered.length > 0 ? filtered : data);
    };

    return (
      <C items={items} onInputValueChange={handleChange} disabled>
        <C.Label>Disabled combobox</C.Label>
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
  },
};

export const WithInputGroup = {
  render: () => {
    const [items, setItems] = useState(data);

    const handleChange = (e: any) => {
      const filtered = matchSorter(data, e.value, { keys: ["label"] });
      setItems(filtered.length > 0 ? filtered : data);
    };

    return (
      <C items={items} onInputValueChange={handleChange}>
        <C.Label>With input group</C.Label>
        <C.Control>
          <InputGroup>
            <InputGroup.LeftAddon>
              <ArrowRight />
            </InputGroup.LeftAddon>
            <C.Input placeholder="select a framework" asChild unstyled>
              <InputGroup.Input />
            </C.Input>
            <C.Trigger
              asChild
              unstyled
              className={cn(
                "text-muted-foreground",
                "size-4",
                "cursor-pointer",
                "_disabled:cursor-not-allowed",
                "_disabled:opacity-50"
              )}
            >
              <InputGroup.RightAddon>
                <ChevronsUpDownIcon />
              </InputGroup.RightAddon>
            </C.Trigger>
          </InputGroup>
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
  },
};
