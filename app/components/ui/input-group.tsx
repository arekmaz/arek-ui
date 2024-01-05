import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const inputGroup = tv({
  slots: {
    root: [
      "flex",
      "cursor-text",
      "items-center",
      "border-input",
      "bg-background",
      "ring-offset-background",
      "_disabled:cursor-not-allowed",
      "_disabled:opacity-50",
    ],
    addonRight: [
      "input-group-addon-right",
      "flex",
      "items-center",
      "[&_svg]:text-muted-foreground",
      "cursor-auto",
    ],
    addonLeft: [
      "input-group-addon-left",
      "flex",
      "items-center",
      "[&_svg]:text-muted-foreground",
      "cursor-auto",
    ],
    input: [
      "flex-1",
      "outline-none",
      "bg-transparent",
      "file:text-sm",
      "file:font-medium",
      "_disabled:cursor-not-allowed",
    ],
  },
  variants: {
    scale: {
      "2xs": {
        root: [
          "px-1.5",
          "h-7",
          "min-w-7",
          "has-[.input-group-addon-right]:pr-0.5",
          "has-[.input-group-addon-left]:pl-0.5",
          "gap-0.5",
        ],
        input: ["text-xs"],
        addonLeft: ["text-xs", "[&_svg]:size-5"],
        addonRight: ["text-xs", "[&_svg]:size-5"],
      },
      xs: {
        root: [
          "px-2",
          "h-8",
          "min-w-8",
          "has-[.input-group-addon-right]:pr-1",
          "has-[.input-group-addon-left]:pl-1",
          "gap-1",
        ],
        input: ["text-xs"],
        addonLeft: ["text-xs", "[&_svg]:size-5"],
        addonRight: ["text-xs", "[&_svg]:size-5"],
      },
      sm: {
        root: [
          "px-2.5",
          "h-9",
          "min-w-9",
          "has-[.input-group-addon-right]:pr-1",
          "has-[.input-group-addon-left]:pl-1",
          "gap-1",
        ],
        input: ["text-sm"],
        addonLeft: ["text-sm", "[&_svg]:size-5"],
        addonRight: ["text-sm", "[&_svg]:size-5"],
      },
      md: {
        root: [
          "px-3",
          "h-10",
          "min-w-10",
          "has-[.input-group-addon-right]:pr-2",
          "has-[.input-group-addon-left]:pl-2",
          "gap-2",
        ],
        input: ["text-md"],
        addonLeft: ["text-sm", "[&_svg]:size-6"],
        addonRight: ["text-sm", "[&_svg]:size-6"],
      },
      lg: {
        root: [
          "px-3.5",
          "h-11",
          "min-w-11",
          "has-[.input-group-addon-right]:pr-2",
          "has-[.input-group-addon-left]:pl-2",
          "gap-2",
        ],
        input: ["text-md"],
        addonLeft: ["text-md", "[&_svg]:size-7"],
        addonRight: ["text-md", "[&_svg]:size-7"],
      },
      xl: {
        root: [
          "px-4",
          "h-12",
          "min-w-12",
          "has-[.input-group-addon-right]:pr-2",
          "has-[.input-group-addon-left]:pl-2",
          "gap-2",
        ],
        input: ["text-lg"],
        addonLeft: ["text-lg", "[&_svg]:size-8"],
        addonRight: ["text-lg", "[&_svg]:size-8"],
      },
      "2xl": {
        root: [
          "px-4",
          "h-16",
          "min-w-16",
          "has-[.input-group-addon-right]:pr-2",
          "has-[.input-group-addon-left]:pl-2",
          "gap-2",
        ],
        input: ["text-3xl"],
        addonLeft: ["text-3xl", "[&_svg]:size-10"],
        addonRight: ["text-3xl", "[&_svg]:size-10"],
      },
    },
    status: {
      normal: {
        input: ["placeholder-muted-foreground"],
      },
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
          "has-[input:focus-visible]:ring-2",
          "has-[input:focus-visible]:ring-ring",
          "has-[input:focus-visible]:ring-offset-2",
          "border",
        ],
      },
    },
  },
  defaultVariants: { status: "normal", variant: "standalone", scale: "md" },
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
