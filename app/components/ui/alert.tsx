import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const alertVariants = tv({
  slots: {
    root: [
      "relative",
      "w-full",
      "rounded-lg",
      "border",
      "p-4",
      "has-[.icon]:pl-11",
    ],
    icon: ["icon", "absolute", "left-4", "top-4", "text-foreground"],
    title: ["mb-1", "font-medium", "leading-none", "tracking-tight"],
    description: ["text-sm", "[&_p]:leading-relaxed"],
  },
  variants: {
    variant: {
      default: { root: ["bg-background", "text-foreground"] },
      destructive: {
        root: [
          "border-destructive/50",
          "text-destructive",
          "dark:border-destructive",
        ],
        icon: ["text-destructive"],
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const { withProvider, withContext } = createStyleContext(alertVariants);

const Root = withProvider(ark.div, "root", {
  role: "alert",
  "data-part": "test",
});
const Icon = withContext(ark.div, "icon");
const Title = withContext(ark.h5, "title");
const Description = withContext(ark.div, "description", {
  "data-part": "description",
});

export const Alert = Object.assign(Root, {
  Root,
  Icon,
  Title,
  Description,
});
