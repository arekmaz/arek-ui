import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { Accordion as A, ark } from "@ark-ui/react";

const accordionStyles = tv({
  slots: {
    root: [],
    item: ["border-b", "data-[state=open]:border-muted-foreground"],
    itemTrigger: [
      "flex",
      "flex-1",
      "items-center",
      "justify-between",
      "py-4",
      "w-full",
      "cursor-pointer",
      "font-medium",
      "hover:underline",
      "disabled:text-muted-foreground",
      "disabled:text-muted-foreground",
      "disabled:cursor-not-allowed",
      "disabled:hover:no-underline",
    ],
    itemIndicator: [
      "h-4",
      "w-4",
      "shrink-0",
      "transition-transform",
      "duration-normal",
      "data-[state=open]:rotate-180",
    ],
    itemContent: [
      "data-[state=open]:animate-accordion-down",
      "data-[state=closed]:animate-accordion-up",
      "overflow-hidden",
    ],
  },
});

const { withContext, withProvider } = createStyleContext(accordionStyles);

const Root = withProvider(A.Root, "root");
const Item = withContext(A.Item, "item");
const ItemTrigger = withContext(A.ItemTrigger, "itemTrigger");
const ItemIndicator = withContext(A.ItemIndicator, "itemIndicator");
const ItemContent = withContext(A.ItemContent, "itemContent");

export const Accordion = Object.assign(Root, {
  Root,
  Item,
  ItemTrigger,
  ItemIndicator,
  ItemContent,
});
