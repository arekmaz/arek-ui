import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";
import { Accordion as A, ark } from "@ark-ui/react";

const accordionStyles = tv({
  slots: {
    root: [],
    item: ["border-b"],
    itemTrigger: [
      "w-full",
      "flex",
      "flex-1",
      "items-center",
      "justify-between",
      "py-4",
      "font-medium",
      "transition-all",
      "hover:underline",
      "[&[data-state=open]>svg]:rotate-180",
      "disabled:text-muted-foreground",
      "disabled:cursor-not-allowed",
      "disabled:hover:no-underline",
    ],
    itemIndicator: ["h-4 w-4 shrink-0 transition-transform duration-200"],
    itemContent: [
      "transition-all",
      "grid",
      "duration-200",
      "ease-default",
      "grid-rows-[0fr]",
      "data-[state=open]:grid-rows-[1fr]",
    ],
    itemContentContainer: ["overflow-hidden"],
  },
});

const { withContext, withProvider } = createStyleContext(accordionStyles);

const Root = withProvider(A.Root, "root");
const Item = withContext(A.Item, "item");
const ItemTrigger = withContext(A.ItemTrigger, "itemTrigger");
const ItemIndicator = withContext(A.ItemIndicator, "itemIndicator");
const ItemContent = withContext(A.ItemContent, "itemContent");
const ItemContentContainer = withContext(ark.div, "itemContentContainer");

export const Accordion = Object.assign(Root, {
  Item,
  ItemTrigger,
  ItemIndicator,
  ItemContent,
  ItemContentContainer,
});
