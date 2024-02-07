import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  slots: {
    root: [],
    list: [
      "inline-flex",
      "items-center",
      "justify-center",
      "rounded-md",
      "bg-muted",
      "p-1",
      "text-muted-foreground",
    ],
    trigger: [
      "inline-flex",
      "items-center",
      "justify-center",
      "whitespace-nowrap",
      "rounded-sm",
      "py-1.5",
      "font-medium",
      "ring-offset-background",
      "transition-all",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-ring",
      "focus-visible:ring-offset-2",
      "disabled:pointer-events-none",
      "disabled:opacity-50",
      "_selected:bg-background",
      "_selected:text-foreground",
      "_selected:shadow-sm",
    ],
    content: [
      "mt-2",
      "ring-offset-background",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-ring",
      "focus-visible:ring-offset-2",
    ],
    indicator: [],
  },
  defaultVariants: { size: "md" },
  variants: {
    size: {
      sm: {
        trigger: ["text-sm", "h-9", "min-w-9", "px-2.5"],
      },
      md: {
        trigger: ["text-md", "h-10", "min-w-10", "px-3"],
      },
      lg: {
        trigger: ["text-md", "h-11", "min-w-11", "px-3.5"],
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(ArkTabs.Root, "root");
export const Content = withContext(ArkTabs.Content, "content");
export const Indicator = withContext(ArkTabs.Indicator, "indicator");
export const List = withContext(ArkTabs.List, "list");
export const Trigger = withContext(ArkTabs.Trigger, "trigger");

export const Tabs = Object.assign(Root, {
  Content,
  Indicator,
  List,
  Trigger,
});
