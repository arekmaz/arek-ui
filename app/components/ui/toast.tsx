import { Toast as T } from "@ark-ui/react/toast";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  slots: {
    root: [
      "bg-background",
      "rounded-md",
      "border",
      "relative",
      "shadow-lg",
      "min-w-80",
      "p-4",

      "_open:animate-[slide-in-top_200ms_ease-out]",
      "data-[state=closed]:animate-[slide-out-top_200ms_ease-out]",
    ],
    group: ["p-4"],
    title: ["text-sm font-semibold"],
    description: ["text-sm"],
    closeTrigger: ["absolute", "top-3", "right-3"],
    actionTrigger: [],
  },
  variants: {
    type: {
      info: {
        description: ["text-muted-foreground"],
      },
      error: {
        root: "border-destructive bg-destructive text-destructive-foreground",
        closeTrigger: "text-destructive-foreground",
      },
      custom: {
        description: ["text-muted-foreground"],
      },
      success: {
        description: ["text-muted-foreground"],
      },
      loading: {
        description: ["text-muted-foreground"],
      },
    },
  },
  defaultVariants: {
    type: "info",
  },
});

const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(T.Root, "root");
export const CloseTrigger = withContext(T.CloseTrigger, "closeTrigger");
export const ActionTrigger = withContext(T.ActionTrigger, "actionTrigger");
export const Description = withContext(T.Description, "description");
export const Title = withContext(T.Title, "title");

export const Toast = Object.assign(Root, {
  CloseTrigger,
  ActionTrigger,
  Description,
  Title,
});
