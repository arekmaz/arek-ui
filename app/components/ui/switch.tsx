import { Switch as ArkSwitch } from "@ark-ui/react/switch";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  base: "switchRecipe",
  defaultVariants: { size: "md" },
  slots: {
    root: ["flex", "items-center", "relative"],
    label: ["select-none", "text-md", "font-medium"],
    control: [
      "inline-flex",
      "items-center",
      "rounded-full",
      "cursor-pointer",
      "shrink-0",
      "duration-normal",
      "transition-[background]",
      "ease-default",
      "_checked:bg-foreground",
    ],
    thumb: "switchRecipe__thumb",
  },
  variants: {
    size: {
      sm: {
        root: "switchRecipe__root--size_sm",
        label: "switchRecipe__label--size_sm",
        control: "switchRecipe__control--size_sm",
        thumb: "switchRecipe__thumb--size_sm",
      },
      md: {
        root: "switchRecipe__root--size_md",
        label: "switchRecipe__label--size_md",
        control: "switchRecipe__control--size_md",
        thumb: "switchRecipe__thumb--size_md",
      },
      lg: {
        root: "switchRecipe__root--size_lg",
        label: "switchRecipe__label--size_lg",
        control: "switchRecipe__control--size_lg",
        thumb: "switchRecipe__thumb--size_lg",
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
  Root,
  Control,
  Label,
  Thumb,
});
