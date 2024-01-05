import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const inputGroup = tv({
  slots: {
    root: [
      "flex",
      "cursor-text",
      "items-center",
      "gap-1",
      "border-input",
      "bg-background",
      "text-sm",
      "ring-offset-background",
      "file:border-0",
      "file:bg-transparent",
      "file:text-sm",
      "file:font-medium",
      "focus-within:outline-none",
      "_disabled:cursor-not-allowed",
      "_disabled:opacity-50",
    ],
    addonRight: [
      "flex",
      "items-center",
      "[&_svg]:text-muted-foreground",
      "cursor-auto",
    ],
    addonLeft: [
      "flex",
      "items-center",
      "[&_svg]:text-muted-foreground",
      "cursor-auto",
    ],
    input: [
      "flex-1",
      "outline-none",
      "text-base",
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
          "border-destructive",
          "[&_svg]:text-destructive",
        ],
        input: ["placeholder-destructive/50"],
      },
    },
    variant: {
      ghost: {},
      standalone: {
        root: [
          "rounded-md",
          "focus-within:ring-2",
          "focus-within:ring-ring",
          "focus-within:ring-offset-2",
          "px-1",
          "px-2",
          "h-10",
          "has-[input:focus-visible]:ring-2",
          "has-[input:focus-visible]:ring-ring",
          "has-[input:focus-visible]:ring-offset-2",
          "border",
        ],
      },
    },
  },
  defaultVariants: { status: "normal", variant: "standalone" },
});

const { withProvider, withContext } = createStyleContext(inputGroup);

const Root = withProvider(ark.fieldset, "root", {
  "data-part": "input-group",
} as any);

const LeftAddon = withContext(ark.div, "addonLeft", {
  "data-part": "addon-left",
} as any);

const RightAddon = withContext(ark.div, "addonRight", {
  "data-part": "addon-right",
} as any);

const Input = withContext(ark.input, "input");

export const InputGroup = Object.assign(Root, { LeftAddon, RightAddon, Input });
