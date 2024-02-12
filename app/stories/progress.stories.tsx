import { Progress } from "~/components/ui/progress";
import { Story } from "./storyHelpers";
import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Progress",
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "progress.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

const useProgress = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return value;
};

export const LinearSm: Story = {
  render: () => {
    const value = useProgress();
    return (
      <Progress value={value} min={0} max={100} size="sm">
        <Progress.Label>Linear sm</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const LinearMD: Story = {
  render: () => {
    const value = useProgress();
    return (
      <Progress value={value} min={0} max={100} size="md">
        <Progress.Label>Linear md</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const LinearLG: Story = {
  render: () => {
    const value = useProgress();
    return (
      <Progress value={value} min={0} max={100} size="lg">
        <Progress.Label>Linear lg</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const LinearIndeterminate: Story = {
  render: () => {
    return (
      <Progress value={null} min={0} max={100}>
        <Progress.Label>Linear indeterminate</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const CircleSM: Story = {
  render: () => {
    const value = useProgress();
    return (
      <Progress value={value} min={0} max={100} size="sm">
        <Progress.Label>Circle sm</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const CircleMD: Story = {
  render: () => {
    const value = useProgress();
    return (
      <Progress value={value} min={0} max={100} size="md">
        <Progress.Label>Circle md</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const CircleLG: Story = {
  render: () => {
    const value = useProgress();
    return (
      <Progress value={value} min={0} max={100} size="lg">
        <Progress.Label>Circle lg</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>
    );
  },
};

export const CircleIndeterminate: Story = {
  render: () => {
    return (
      <Progress value={null} min={0} max={100}>
        <Progress.Label>Circle indeterminate</Progress.Label>
        <Progress.Circle>
          <Progress.CircleTrack />
          <Progress.CircleRange />
        </Progress.Circle>
        <Progress.ValueText />
      </Progress>
    );
  },
};
