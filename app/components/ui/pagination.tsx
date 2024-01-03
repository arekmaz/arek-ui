import { Pagination as P } from "@ark-ui/react/pagination";
import { createStyleContext } from "../utils/create-styled-context";
import { tv } from "tailwind-variants";

const paginationStyles = tv({
  slots: {
    root: ["flex", "justify-between", "gap-4"],
    item: ["tabular-nums"],
    ellipsis: [
      "inline-flex",
      "items-center",
      "text-foreground",
      "font-semibold",
      "px-2",
    ],
    nextTrigger: [],
    prevTrigger: [],
  },
});

const { withProvider, withContext } = createStyleContext(paginationStyles);

const Root = withProvider(P.Root, "root");
const Ellipsis = withContext(P.Ellipsis, "ellipsis");
const Item = withContext(P.Item, "item");
const NextTrigger = withContext(P.NextTrigger, "nextTrigger");
const PrevTrigger = withContext(P.PrevTrigger, "prevTrigger");

export const Pagination = Object.assign(Root, {
  Ellipsis,
  Item,
  NextTrigger,
  PrevTrigger,
});
