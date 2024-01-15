import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const collapsibleStyles = tv({
  slots: {
    root: [],
    trigger: [],
    content: [],
  },
});

const { withContext, withProvider } = createStyleContext(collapsibleStyles);

const Collapsible = withProvider(CollapsiblePrimitive.Root, "root");

const CollapsibleTrigger = withContext(
  CollapsiblePrimitive.CollapsibleTrigger,
  "trigger"
);

const CollapsibleContent = withContext(
  CollapsiblePrimitive.CollapsibleContent,
  "content"
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
