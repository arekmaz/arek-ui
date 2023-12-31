import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";

export const inputClasses = [
  "flex",
  "h-10",
  "w-full",
  "rounded-md",
  "border",
  "border-input",
  "bg-background",
  "px-3",
  "py-2",
  "text-sm",
  "ring-offset-background",
  "file:border-0",
  "file:bg-transparent",
  "file:text-sm",
  "file:font-medium",
  "placeholder-muted-foreground",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
];

const input = tv({
  base: inputClasses,
  variants: {
    size: {
      md: ["px-3", "h-11", "min-w-11"],
    },
    status: {
      normal: [],
      error: [
        "text-destructive",
        "placeholder-destructive",
        "border-destructive",
      ],
    },
  },
  defaultVariants: { size: "md", status: "normal" },
});

export const Input = styled(ark.input, input);
