import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";

const input = tv({
  base: [
    "appearance-none",
    "bg-background",
    "border-border",
    "rounded-sm",
    "border",
    "text-foreground",
    "outline-0",
    "relative",
    "w-full",
  ],
  variants: {
    size: {
      md: ["px-3", "h-11", "min-w-11", "text-base"],
    },
  },
  defaultVariants: { size: "md" },
});

export const Input = styled(ark.input, input);
