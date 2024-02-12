/* eslint-disable jsx-a11y/label-has-associated-control */
import { Mail } from "lucide-react";
import { InputGroup } from "~/components/ui/input-group";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "InputGroup",
  component: InputGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "input-group.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => {
    return (
      <InputGroup>
        <InputGroup.Input placeholder="enter some text" />
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
      </InputGroup>
    );
  },
};

export const GroupSM: Story = {
  render: () => {
    return (
      <InputGroup scale="sm">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const GroupXS: Story = {
  render: () => {
    return (
      <InputGroup scale="xs">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const Group2XS: Story = {
  render: () => {
    return (
      <InputGroup scale="2xs">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const GroupMd: Story = {
  render: () => {
    return (
      <InputGroup scale="md">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const GroupLg: Story = {
  render: () => {
    return (
      <InputGroup scale="lg">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const GroupXL: Story = {
  render: () => {
    return (
      <InputGroup scale="xl">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const Group2XL: Story = {
  render: () => {
    return (
      <InputGroup scale="2xl">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input placeholder="enter some text" />
      </InputGroup>
    );
  },
};

export const LeftAddon: Story = {
  render: () => {
    return (
      <InputGroup>
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input />
      </InputGroup>
    );
  },
};

export const RightAddon: Story = {
  render: () => {
    return (
      <InputGroup>
        <InputGroup.Input />
        <InputGroup.RightAddon>
          <Mail />
        </InputGroup.RightAddon>
      </InputGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <InputGroup disabled>
        <InputGroup.Input placeholder="placeholder" />
        <InputGroup.RightAddon>
          <Mail />
        </InputGroup.RightAddon>
      </InputGroup>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <InputGroup status="error">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input />
        <InputGroup.RightAddon>
          <Mail />
        </InputGroup.RightAddon>
      </InputGroup>
    );
  },
};

export const InputGroups = () => {
  return (
    <Story title="input groups" componentFilename="input-group">
      <label>Normal</label>

      <label>Input Group 2xs</label>

      <label>Input Group xs</label>

      <label>Input Group sm</label>

      <label>Input Group md (default)</label>

      <label>Input Group lg</label>

      <label>Input Group xl</label>

      <label>Input Group 2xl</label>

      <label>Left addon</label>

      <label>Right addon</label>

      <label>Disabled</label>

      <label>
        Error
        <InputGroup status="error">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input />
          <InputGroup.RightAddon>
            <Mail />
          </InputGroup.RightAddon>
        </InputGroup>
      </label>
    </Story>
  );
};
