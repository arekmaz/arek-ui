import { Slider as ArkSlider } from "@ark-ui/react/slider";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { ComponentProps } from "react";

const styles = tv({
  slots: {
    root: ["flex", "flex-col", "gap-1", "w-full"],
    control: [
      "relative",
      "flex",
      "items-center",
      "cursor-pointer",
      "_focus:ring-2",
      "_focus:ring-ring",
      "_focus:ring-offset-2",
      "_focus:rounded-sm",
    ],
    track: ["bg-input", "rounded-full", "overflow-hidden", "flex-1"],
    range: ["bg-foreground"],
    thumb: [
      "bg-background",
      "border-2",
      "border-foreground",
      "rounded-full",
      "outline-none",
      "shadow-sm",
      "z-[1]",
      "_focus:ring-2",
      "_focus:border-ring",
      "_focus:ring-foreground",
    ],
    label: ["font-medium"],
    valueText: [],
    markerGroup: ["absolute"],
    marker: [
      "[--before-background:hsl(var(--foreground))]",
      "text-muted-foreground",
      "before:bg-background",
      "before:rounded-full",
      'before:content-[""]',
      "before:block",
      "before:left-1/2",
      "before:relative",
      "before:-translate-x-1/2",
    ],
  },
  variants: {
    size: {
      sm: {
        control: ["h-4"],
        range: ["h-1.5"],
        track: ["h-1.5"],
        thumb: ["size-4"],
        marker: ["text-sm", "before:h-1", "before:-top-3", "before:w-1"],
        label: ["text-sm"],
        root: [],
        valueText: [],
        markerGroup: ["-mt-0.5"],
      },
      md: {
        control: ["h-5"],
        range: ["h-2"],
        track: ["h-2"],
        thumb: ["size-5"],
        marker: ["text-sm", "before:h-1", "before:-top-3", "before:w-1"],
        label: ["text-sm"],
        markerGroup: ["-mt-1"],
        root: [],
        valueText: [],
      },
      lg: {
        control: ["h-6"],
        range: ["h-2.5"],
        track: ["h-2.5"],
        thumb: ["size-6"],
        marker: [
          "text-sm",
          "before:h-1.5",
          "before:-top-[15px]",
          "before:w-1.5",
        ],
        label: ["text-sm"],
        markerGroup: ["-mt-1"],
        root: [],
        valueText: [],
      },
    },
  },
  defaultVariants: { size: "md" },
});

const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(ArkSlider.Root, "root");
export const Control = withContext(ArkSlider.Control, "control");
export const Label = withContext(ArkSlider.Label, "label");
export const Marker = withContext(ArkSlider.Marker, "marker");
export const MarkerGroup = withContext(ArkSlider.MarkerGroup, "markerGroup");
export const Range = withContext(ArkSlider.Range, "range");
export const Thumb = withContext(ArkSlider.Thumb, "thumb");
export const Track = withContext(ArkSlider.Track, "track");
export const ValueText = withContext(ArkSlider.ValueText, "valueText");

export const Slider = Object.assign(Root, {
  Control,
  Label,
  Marker,
  MarkerGroup,
  Range,
  Thumb,
  Track,
  ValueText,
});

export type SliderProps = ComponentProps<typeof Slider>;
