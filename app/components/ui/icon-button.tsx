import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";
import { buttonVariants } from "./button";

const iconButton = tv({
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
  size: "icon",
  type: "button",
});
