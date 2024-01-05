import { Slider, SliderProps } from "~/components/ui/slider";
import { Story } from "./storyHelpers";
import { Card } from "~/components/ui/card";
import { useState } from "react";

export const Single = (props: SliderProps) => {
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

export const Range = (props: SliderProps) => {
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
};

export const Range3 = (props: SliderProps) => {
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
};

export const Sliders = () => {
  return (
    <Story title="sliders" classes={{ content: "min-w-80 gap-10 pb-10" }}>
      <Single size="sm" />
      <Single />
      <Single size="lg" />

      <Range size="sm" />
      <Range />
      <Range size="lg" />

      <Range3 size="sm" />
      <Range3 />
      <Range3 size="lg" />
    </Story>
  );
};
