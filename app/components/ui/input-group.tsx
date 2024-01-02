import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";
import { Input as I, inputClasses } from "./input";

const inputGroup = tv({
  slots: {
    root: [
      "relative",
      "flex",
      "gap-1",
      "px-1",
      ...inputClasses,
      "w-auto",
      "has-[input:focus-visible]:ring-2",
      "has-[input:focus-visible]:ring-ring",
      "has-[input:focus-visible]:ring-offset-2",
      "px-2",
    ],
    addonRight: ["flex", "items-center"],
    addonLeft: ["flex", "items-center"],
    input: [
      "flex-1",
      "h-full",
      "outline-none",
      "bg-transparent",
      "file:font-medium",
      "placeholder-muted-foreground",
      "_disabled:cursor-not-allowed",
    ],
  },
  variants: {
    status: {
      normal: [],
      error: {
        root: [
          "text-destructive",
          "placeholder-destructive",
          "border-destructive",
        ],
      },
    },
  },
  defaultVariants: { status: "normal" },
});

const { withProvider, withContext } = createStyleContext(inputGroup);

const Root = withProvider(ark.fieldset, "root");

const LeftAddon = withContext(ark.div, "addonLeft", {
  "data-part": "addon-left",
} as any);

const RightAddon = withContext(ark.div, "addonRight", {
  "data-part": "addon-right",
} as any);

const Input = withContext(ark.input, "input");

export const InputGroup = Object.assign(Root, { LeftAddon, RightAddon, Input });
