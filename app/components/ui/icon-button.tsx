import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";
import { buttonVariants } from "./button";

const iconButton = tv({
  extend: buttonVariants,
  variants: {
    size: {
      sm: "px-0 size-9",
      default: "px-0 size-10",
      lg: "px-0 size-11",
    },
  },
});

export const IconButton = styled(ark.button, iconButton, {
  type: "button",
});
