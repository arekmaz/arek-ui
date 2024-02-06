import { TreeView as TV } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const treeViewStyles = tv({
  slots: {
    root: [],
    branch: ["cursor-default", "flex", "flex-col", "gap-1.5"],
    branchContent: ["ps-3", "_open:flex", "flex-col", "gap-1.5"],
    branchControl: [
      "flex",
      "gap-1",
      "_selected:bg-foreground",
      "_selected:text-background",
      "_focus:ring-2",
      "_focus:ring-ring",
      "_focus:ring-offset-background",
      "outline-none",
      "rounded-sm",
      "p-1",
    ],
    branchIndicator: [],
    branchText: ["cursor-default", "flex", "gap-1"],
    branchTrigger: [],
    item: [
      "flex",
      "gap-1",
      "_selected:bg-foreground",
      "_selected:text-background",
      "_focus:outline-2",
      "_focus:outline-ring",
      "rounded-sm",
      "p-1",
    ],
    itemText: [],
    label: [],
    tree: ["flex", "flex-col", "gap-1.5"],
  },
});

const { withContext, withProvider } = createStyleContext(treeViewStyles);

const Root = withProvider(TV.Root, "root");
const Branch = withContext(TV.Branch, "branch");
const BranchContent = withContext(TV.BranchContent, "branchContent");
const BranchControl = withContext(TV.BranchControl, "branchControl");
const BranchIndicator = withContext(TV.BranchIndicator, "branchIndicator");
const BranchText = withContext(TV.BranchText, "branchText");
const BranchTrigger = withContext(TV.BranchTrigger, "branchTrigger");
const Item = withContext(TV.Item, "item");
const ItemText = withContext(TV.ItemText, "itemText");
const Label = withContext(TV.Label, "label");
const Tree = withContext(TV.Tree, "tree");

export const TreeView = Object.assign(Root, {
  Root,
  Branch,
  BranchContent,
  BranchControl,
  // BranchIndicator,
  BranchText,
  // BranchTrigger,
  Item,
  // ItemText,
  Label,
  Tree,
});
