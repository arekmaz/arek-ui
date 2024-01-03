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
      "[&>svg~*]:pl-7",
      "[&>svg+div]:translate-y-[-3px]",
      "[&>svg]:absolute",
      "[&>svg]:left-4",
      "[&>svg]:top-4",
      "[&>svg]:text-foreground",
    ],
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
          "[&>svg]:text-destructive",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const { withProvider, withContext } = createStyleContext(alertVariants);

const Root = withProvider(ark.div, "root", { role: "alert" });
const Title = withContext(ark.h5, "title");
const Description = withContext(ark.div, "description");

export const Alert = Object.assign(Root, { Title, Description });
