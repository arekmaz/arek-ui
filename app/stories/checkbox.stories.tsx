import { Checkbox as C } from "~/components/ui/checkbox";

import { HammerIcon, ShieldQuestionIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Checkbox",
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

export const Checkbox: Story = {
  render: () => {
    return (
      <C>
        <C.Label>Checkbox</C.Label>
        <C.Control />
      </C>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <C invalid>
        <C.Label>Invalid checkbox</C.Label>
        <C.Control />
      </C>
    );
  },
};

export const IndeterminateCheckbox: Story = {
  render: () => {
    return (
      <C checked="indeterminate">
        <C.Label>Indeterminate checkbox</C.Label>
        <C.Control />
      </C>
    );
  },
};

export const DisabledCheckbox: Story = {
  render: () => {
    return (
      <C disabled defaultChecked>
        <C.Label>Disabled checkbox</C.Label>
        <C.Control />
      </C>
    );
  },
};

export const CustomIcon: Story = {
  render: () => {
    return (
      <C defaultChecked>
        <C.Label>Custom checked icon</C.Label>
        <C.Control>
          <C.CheckIcon>
            <HammerIcon className="size-[18px]" />
          </C.CheckIcon>
        </C.Control>
      </C>
    );
  },
};

export const CustomIndeterminateIcon: Story = {
  render: () => {
    return (
      <C defaultChecked="indeterminate">
        <C.Label>Custom indeterminate icon</C.Label>
        <C.Control>
          <C.IndeterminateIcon>
            <ShieldQuestionIcon className="size-[18px]" />
          </C.IndeterminateIcon>
          <C.CheckIcon />
        </C.Control>
      </C>
    );
  },
};
