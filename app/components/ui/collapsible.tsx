import * as ArkCollapsible from '@ark-ui/react/collapsible'
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

const collapsibleStyles = tv({
  slots: {
    root: [],
    trigger: ['cursor-pointer'],
    content: [
      'data-[state=closed]:animate-collapse-up',
      'data-[state=open]:animate-collapse-down'
    ],
  },
});

const { withContext, withProvider } = createStyleContext(collapsibleStyles);

const Root = withProvider(ArkCollapsible.CollapsibleRoot, "root");

const CollapsibleTrigger = withContext(
  ArkCollapsible.CollapsibleTrigger,
  "trigger"
);

const CollapsibleContent = withContext(
  ArkCollapsible.CollapsibleContent,
  "content"
);

export const Collapsible = Object.assign(Root, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent
})
