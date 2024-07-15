import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  slots: {
    root: ["flex", "overflow-hidden", "relative", "_vertical:flex-col"],
    item: [
      "appearance-none",
      "inline-flex",
      "cursor-pointer",
      "items-center",
      "text-muted-foreground",
      "font-semibold",
      "min-w-0",
      "justify-center",
      "outline-none",
      "relative",
      "duration-normal",
      "transition-[background,border-color,color,box-shadow]",
      "ease-default",
      "select-none",
      "align-middle",
      "whitespace-nowrap",

      "hover:text-foreground",
      "hover:bg-muted",
      "data-[state=on]:text-foreground",
      "data-[state=on]:bg-muted",

      "_disabled:border-muted-foreground",
      "_disabled:text-muted-foreground",
      "_disabled:cursor-not-allowed",
      "_disabled:hover:bg-transparent",
      "_disabled:hover:border-muted-foreground",
      "_disabled:hover:text-muted-foreground",
    ],
  },
  variants: {
    variant: {
      outline: {
        root: [
          "border",
          "rounded-sm",
          "data-[orientation=horizontal]:divide-x",
          "_vertical:divide-y",
        ],
        item: ["focus-visible:text-foreground", "bg-muted-background"],
      },
      ghost: {
        root: ["gap-1"],
        item: [
          "rounded-sm",
          "focus-visible:outline-offset-2",
          "focus-visible:outline",
          "focus-visible:outline-2",
          "focus-visible:outline-border",
        ],
      },
    },
    size: {
      sm: {
        item: ["h-9", "min-w-9", "text-sm", "gap-2", "[&_svg]:size-[1.25rem]"],
      },
      md: {
        item: ["h-10", "min-w-10", "text-sm", "gap-2", "[&_svg]:size-5"],
      },
      lg: {
        item: ["h-11", "min-w-11", "text-md", "gap-2", "[&_svg]:size-5"],
      },
    },
  },
  defaultVariants: { size: "md", variant: "outline" },
});
const { withProvider, withContext } = createStyleContext(styles);

export const ToggleGroupRoot = withProvider(ArkToggleGroup.Root, "root");
export const ToggleGroupItem = withContext(ArkToggleGroup.Item, "item");

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
});
