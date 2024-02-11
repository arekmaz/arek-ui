import { Slider, SliderProps } from "~/components/ui/slider";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Slider",
  component: Slider,
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
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const Single = (props: SliderProps) => {
  const [value, setValue] = useState([33]);

  return (
    <Slider
      min={0}
      max={100}
      value={value}
      onValueChange={(value) => setValue(value.value)}
      {...props}
    >
      <Slider.Label>
        Slider {props.size ?? "md"}: {value.join(" - ")}
      </Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
      <Slider.MarkerGroup>
        <Slider.Marker value={25}>25</Slider.Marker>
        <Slider.Marker value={50}>50</Slider.Marker>
        <Slider.Marker value={75}>75</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider>
  );
};

export const SingleSlider: Story = {
  render: Single,
};

export const SingleSliderSM: Story = {
  args: {
    size: "sm",
  },
  render: Single,
};

export const SingleSliderLG: Story = {
  args: {
    size: "lg",
  },
  render: Single,
};

export const Range: Story = {
  render: (props) => {
    const [value, setValue] = useState([33, 55]);

    return (
      <Slider
        min={0}
        max={100}
        value={value}
        onValueChange={(value) => setValue(value.value)}
        {...props}
      >
        <Slider.Label>
          Range {props.size ?? "md"}: {value.join(" - ")}
        </Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
          <Slider.Thumb index={1} />
        </Slider.Control>
        <Slider.MarkerGroup>
          <Slider.Marker value={25}>25</Slider.Marker>
          <Slider.Marker value={50}>50</Slider.Marker>
          <Slider.Marker value={75}>75</Slider.Marker>
        </Slider.MarkerGroup>
      </Slider>
    );
  },
};

export const Range3: Story = {
  render: (props) => {
    const [value, setValue] = useState([33, 55, 66]);

    return (
      <Slider
        min={0}
        max={100}
        value={value}
        onValueChange={(value) => setValue(value.value)}
        {...props}
      >
        <Slider.Label>
          Range 3 {props.size ?? "md"}: {value.join(" - ")}
        </Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
          <Slider.Thumb index={1} />
          <Slider.Thumb index={2} />
        </Slider.Control>
        <Slider.MarkerGroup>
          <Slider.Marker value={25}>25</Slider.Marker>
          <Slider.Marker value={50}>50</Slider.Marker>
          <Slider.Marker value={75}>75</Slider.Marker>
        </Slider.MarkerGroup>
      </Slider>
    );
  },
};
