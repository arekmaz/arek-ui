import * as React from "react";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";
import { ark } from "@ark-ui/react";

const textareaStyles = tv({
  base: [
    "flex",
    "min-h-[80px]",
    "w-full",
    "rounded-md",
    "border",
    "border-input",
    "bg-background",
    "px-3",
    "py-2",
    "text-sm",
    "ring-offset-background",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
});

export const Textarea = styled(ark.textarea, textareaStyles);
Textarea.displayName = "Textarea";
export type TextareaProps = React.ComponentProps<typeof Textarea>;
