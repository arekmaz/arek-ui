import { TreeView as TV } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

export { type TreeViewNodeProviderProps } from '@ark-ui/react/tree-view'

const treeViewStyles = tv({
  slots: {
    branch: ["cursor-default", "flex", "flex-col"],
    branchContent: [
      "ps-3",
      "flex",
      "max-h-[10000px]",
      "data-[state=open]:mt-1.5",
      "data-[state=open]:opacity-100",
      "data-[state=open]:ease-emphasized-in",
      "data-[state=closed]:max-h-0",
      "data-[state=closed]:opacity-0",
      "data-[state=closed]:overflow-hidden",
      "data-[state=closed]:ease-emphasized-out",
      "transition-[max-height,margin,opacity]",
      "duration-fast",
      "flex-col",
      "gap-1.5",
    ],
    branchControl: [
      "flex",
      "gap-1",
      "data-[state=selected]:bg-foreground",
      "data-[state=selected]:text-background",
      "data-[focus]:ring-2",
      "data-[focus]:ring-ring",
      "data-[focus]:ring-offset-background",
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
      "data-[state=selected]:bg-foreground",
      "data-[state=selected]:text-background",
      "data-[focus]:outline-2",
      "data-[focus]:outline-ring",
      "rounded-sm",
      "cursor-default",
      "p-1",
    ],
    itemText: [],
    label: [],
    tree: ["flex", "flex-col", "gap-1.5"],
  },
});

const { withContext, withProvider } = createStyleContext(treeViewStyles);

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

export const TreeView = Object.assign(TV.Root, {
  ...TV,
  Branch,
  BranchContent,
  BranchControl,
   BranchIndicator,
  BranchText,
  // BranchTrigger,
  Item,
  // ItemText,
  Label,
  Tree,
});

