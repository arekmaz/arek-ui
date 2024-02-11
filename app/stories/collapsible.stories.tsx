import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Story } from "./storyHelpers";

export const Normal = () => {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  );
};
export const Collapsibles = () => {
  return (
    <Story title="collapsibles" componentFilename="collapsible">
      <Normal />
    </Story>
  );
};
