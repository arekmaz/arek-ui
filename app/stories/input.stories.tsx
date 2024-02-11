/* eslint-disable jsx-a11y/label-has-associated-control */
import { Input } from "~/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Input",
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Input placeholder="Enter email" />,
};

export const Input2XS: Story = {
  render: () => <Input placeholder="Enter email" scale="2xs" />,
};

export const InputXS: Story = {
  render: () => <Input placeholder="Enter email" scale="xs" />,
};

export const InputSM: Story = {
  render: () => <Input placeholder="Enter email" scale="sm" />,
};

export const InputMD: Story = {
  render: () => <Input placeholder="Enter email" scale="md" />,
};

export const InputLG: Story = {
  render: () => <Input placeholder="Enter email" scale="lg" />,
};

export const InputXL: Story = {
  render: () => <Input placeholder="Enter email" scale="xl" />,
};

export const Input2XL: Story = {
  render: () => <Input placeholder="Enter email" scale="2xl" />,
};

export const Disabled: Story = {
  render: () => <Input placeholder="Enter email" disabled />,
};

export const Placeholder: Story = {
  render: () => <Input placeholder="placeholder" />,
};
export const Error: Story = {
  render: () => <Input defaultValue="error" aria-invalid="true" />,
};

export const ErrorPlaceholder: Story = {
  render: () => <Input defaultValue="placeholder" aria-invalid="true" />,
};
