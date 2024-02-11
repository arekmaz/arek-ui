import { ComponentProps } from "react";
import { RadioGroup } from "~/components/ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "RadioGroup",
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: (props: ComponentProps<typeof RadioGroup>) => {
    const options = [
      { id: "react", label: "React" },
      { id: "solid", label: "Solid" },
      { id: "svelte", label: "Svelte", disabled: true },
      { id: "vue", label: "Vue" },
    ];
    return (
      <RadioGroup.Root defaultValue="react" {...props}>
        {options.map((option) => (
          <RadioGroup.Item
            key={option.id}
            value={option.id}
            disabled={option.disabled}
          >
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
};

export const Horizontal: Story = {
  render: (props: ComponentProps<typeof RadioGroup>) => {
    const options = [
      { id: "react", label: "React" },
      { id: "solid", label: "Solid" },
      { id: "svelte", label: "Svelte", disabled: true },
      { id: "vue", label: "Vue" },
    ];
    return (
      <RadioGroup.Root defaultValue="react" orientation="horizontal" {...props}>
        {options.map((option) => (
          <RadioGroup.Item
            key={option.id}
            value={option.id}
            disabled={option.disabled}
          >
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
};
