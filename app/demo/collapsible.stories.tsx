import { Collapsible } from "~/components/ui/collapsible";
import { Story } from "./storyHelpers";

export const Normal = () => {
  return (
    <Collapsible className="h-[100px] w-[400px]">
      <Collapsible.Trigger>Can I use this in my project?</Collapsible.Trigger>
      <Collapsible.Content className='py-5 bg-foreground text-background rounded-lg px-3'>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
      </Collapsible.Content>
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
