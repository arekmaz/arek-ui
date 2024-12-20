import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { ComponentProps } from "react";

const styles = tv({
  base: "switchRecipe",
  defaultVariants: { size: "md" },
  slots: {
    root: ["flex", "items-center", "relative"],
    control: [
      "bg-input",
      "inline-flex",
      "ring-1",
      "ring-foreground",
      "shadow-md",
      "border-foreground",
      "items-center",
      "rounded-full",
      "cursor-pointer",
      "shrink-0",
      "duration-normal",
      "transition-[background]",
      "ease-default",
      "data-[state=checked]:bg-foreground",
      "data-[state=checked]:border-background",
      "data-[focus]:ring-2",
      "data-[focus]:ring-ring",
      "data-[focus]:ring-offset-2",
      "data-[disabled]:cursor-not-allowed",
      "data-[disabled]:bg-muted-foreground",
      "data-[disabled]:ring-0",
    ],
    label: ["select-none", "text-md", "font-medium"],
    thumb: [
      "bg-foreground",
      "rounded-full",
      "shadow-sm",
      "duration-normal",
      "transition-[transform,background]",
      "ease-default",
      "data-[state=checked]:translate-x-full",
      "data-[state=checked]:bg-background",
      "data-[disabled]:bg-input",
    ],
  },
  variants: {
    size: {
      sm: {
        root: ["gap-2"],
        control: ["w-7", "p-0.5"],
        thumb: ["size-3"],
        label: ["text-sm"],
      },
      md: {
        root: ["gap-3"],
        control: ["w-9", "p-0.5"],
        thumb: ["size-4"],
        label: ["text-md"],
      },
      lg: {
        root: ["gap-4"],
        control: ["w-11", "p-0.5"],
        thumb: ["size-5"],
        label: ["text-lg"],
      },
    },
  },
});
const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(ArkSwitch.Root, "root");
export const Control = withContext(ArkSwitch.Control, "control");
export const Label = withContext(ArkSwitch.Label, "label");
export const Thumb = withContext(ArkSwitch.Thumb, "thumb");

export const Switch = Object.assign(Root, {
  ...ArkSwitch,
  Root,
  Control,
  Label,
  Thumb,
});

export type SwitchProps = ComponentProps<typeof Switch>;
