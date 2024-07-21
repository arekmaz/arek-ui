import { Progress as P } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const progressStyles = tv({
  slots: {
    root: ["flex", "items-center", "flex-col", "gap-1.5", "w-full"],
    label: ["text-foreground", "font-medium", "text-sm"],
    track: ["bg-muted", "rounded-lg", "overflow-hidden", "w-full"],
    range: [
      "bg-foreground",
      "h-full",
      "transition-[width]",
      "ease-in-out",
      "duration-normal",
      "[--translate-x:-100%]",
      "data-[state=indeterminate]:animate-linear-indeterminate",
      "data-[state=indeterminate]:w-[210%]",
    ],
    circle: ["data-[state=indeterminate]:animate-spin"],
    circleTrack: ["stroke-muted"],
    circleRange: [
      "stroke-foreground",
      "transition-[stroke-dasharray,stroke]",
      "duration-slowest",
      "data-[state=indeterminate]:animate-circle-indeterminate",
    ],
    valueText: ["text-sm"],
    view: [],
  },
  variants: {
    size: {
      sm: { track: ["h-0.5"], circle: ["[--size:24px]", "[--thickness:4px]"] },
      md: { track: ["h-1.5"], circle: ["[--size:40px]", "[--thickness:8px]"] },
      lg: { track: ["h-2.5"], circle: ["[--size:56px]", "[--thickness:16px]"] },
    },
  },
  defaultVariants: { size: "md" },
});

const { withContext, withProvider } = createStyleContext(progressStyles);

const Root = withProvider(P.Root, "root");
const Label = withContext(P.Label, "label");
const Track = withContext(P.Track, "track");
const Range = withContext(P.Range, "range");
const CircleTrack = withContext(P.CircleTrack, "circleTrack");
const CircleRange = withContext(P.CircleRange, "circleRange");
const Circle = withContext(P.Circle, "circle");
const ValueText = withContext(P.ValueText, "valueText");
const View = withContext(P.View, "view");

export const Progress = Object.assign(Root, {
  Root,
  Label,
  Track,
  Range,
  Circle,
  CircleTrack,
  CircleRange,
  ValueText,
  // View,
});
