import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const styles = tv({
  slots: {
    root: ["w-full", "caption-bottom", "text-sm"],
    body: ["[&_tr:last-child]:border-0"],
    cell: ["p-4", "align-middle", "[&:has([role=checkbox])]:pr-0"],
    footer: [
      "border-t",
      "bg-muted/50",
      "font-medium",
      "[&>tr]:last:border-b-0",
    ],
    header: [
      "h-12",
      "px-4",
      "text-left",
      "align-middle",
      "font-medium",
      "text-muted-foreground",
      "[&:has([role=checkbox])]:pr-0",
    ],
    head: ["[&_tr]:border-b"],
    row: [
      "border-b",
      "transition-colors",
      "hover:bg-muted/50",
      "data-[state=selected]:bg-muted",
    ],
    caption: ["mt-4", "text-sm", "text-muted-foreground"],
  },
});
const { withProvider, withContext } = createStyleContext(styles);

export const Root = withProvider(ark.table, "root");
export const Body = withContext(ark.tbody, "body");
export const Caption = withContext(ark.caption, "caption");
export const Cell = withContext(ark.td, "cell");
export const Footer = withContext(ark.tfoot, "footer");
export const Head = withContext(ark.thead, "head");
export const Header = withContext(ark.th, "header");
export const Row = withContext(ark.tr, "row");

export const Table = Object.assign(Root, {
  Body,
  Caption,
  Cell,
  Footer,
  Head,
  Header,
  Row,
});
