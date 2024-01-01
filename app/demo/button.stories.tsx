import {
  Button,
  ButtonDestructive,
  ButtonGhost,
  ButtonLink,
  ButtonOutline,
  ButtonSecondary,
} from "~/components/ui/button";
import { Story } from "./storyHelpers";

export const Buttons = () => {
  return (
    <Story title="buttons">
      <Button>Primary</Button>
      <ButtonSecondary>Secondary</ButtonSecondary>
      <ButtonGhost>Ghost</ButtonGhost>
      <ButtonDestructive>Destructive</ButtonDestructive>
      <ButtonLink>Link</ButtonLink>
      <ButtonOutline>Outline</ButtonOutline>
    </Story>
  );
};
