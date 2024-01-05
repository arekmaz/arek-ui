import { tv } from "tailwind-variants";
import { Loader2 } from "lucide-react";
import { ark } from "@ark-ui/react";
import { createStyleContext } from "../utils/create-styled-context";

const spinnerStyles = tv({
  slots: { root: ["shrink-0"], icon: ["size-full", "animate-spin"] },
  variants: {
    size: {
      xs: { root: ["size-3"] },
      sm: { root: ["size-5"] },
      md: { root: ["size-8"] },
      lg: { root: ["size-9"] },
      xl: { root: ["size-12"] },
    },
    direction: {
      default: { icon: ["animate-spin"] },
      alternate: { icon: ["animate-spin", "direction-alternate"] },
      reverse: { icon: ["animate-spin", "direction-reverse"] },
      reverseAlternate: {
        icon: ["animate-spin", "direction-alternate-reverse"],
      },
    },
  },
  defaultVariants: { size: "md", direction: "default" },
});

const { withProvider, withContext } = createStyleContext(spinnerStyles);

const Icon = withContext(ark.div, "icon");

const Root = withProvider(ark.div, "root", {
  children: (
    <Icon asChild>
      <Loader2 />
    </Icon>
  ),
});

export const Spinner = Object.assign(Root, { Icon });
