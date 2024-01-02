import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { styled } from "../utils/styled";

const skeletonStyles = tv({
  base: ["animate-pulse", "bg-muted", "rounded-md"],
  variants: {
    variant: {
      circle: ["rounded-full", "size-40"],
      rectangle: ["w-full", "h-20"],
      square: ["size-40"],
    },
  },
});

export const Skeleton = styled(ark.div, skeletonStyles);
