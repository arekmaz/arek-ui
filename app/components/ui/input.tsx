import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";
import { id } from "../utils/id";

export const inputClasses = id([
  "w-full",
  "rounded-md",
  "border",
  "border-input",
  "bg-background",
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
  "_disabled:cursor-not-allowed",
  "_disabled:opacity-50",
  "_invalid:text-destructive",
  "_invalid:placeholder-destructive/50",
  "_invalid:border-destructive",
]);

const input = tv({
  base: inputClasses,
  variants: {
    scale: {
      "2xs": ["px-1.5", "h-7", "min-w-7", "text-xs"],
      xs: ["px-2", "h-8", "min-w-8", "text-xs"],
      sm: ["px-2.5", "h-9", "min-w-9", "text-sm"],
      md: ["px-3", "h-10", "min-w-10", "text-md"],
      lg: ["px-3.5", "h-11", "min-w-11", "text-md"],
      xl: ["px-4", "h-12", "min-w-12", "text-lg"],
      "2xl": ["px-2", "h-16", "min-w-16", "text-3xl"],
    },
  },
  defaultVariants: { scale: "md" },
});

export const Input = styled(ark.input, input);
