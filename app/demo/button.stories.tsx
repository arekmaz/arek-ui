import {
  Button,
  ButtonDestructive,
  ButtonGhost,
  ButtonLink,
  ButtonOutline,
  ButtonSecondary,
} from "~/components/ui/button";
import { VStack } from "~/components/ui/stack";

export const Buttons = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>BUTTONS:</p>
      <Button>Primary</Button>
      <ButtonSecondary>Secondary</ButtonSecondary>
      <ButtonGhost>Ghost</ButtonGhost>
      <ButtonDestructive>Destructive</ButtonDestructive>
      <ButtonLink>Link</ButtonLink>
      <ButtonOutline>Outline</ButtonOutline>
    </VStack>
  );
};
