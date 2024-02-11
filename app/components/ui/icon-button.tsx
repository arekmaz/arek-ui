import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";
import { buttonVariants } from "./button";

const iconButton = tv({
  base: "size-10",
  extend: buttonVariants,
  variants: {
    size: {
      default: "px-0",
      sm: "px-0",
      lg: "px-0",
      icon: "px-0",
    },
  },
});

export const IconButton = styled(ark.button, iconButton, {
  type: "button",
});
