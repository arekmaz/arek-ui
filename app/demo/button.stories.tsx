import {
  Button,
  ButtonDestructive,
  ButtonGhost,
  ButtonLink,
  ButtonOutline,
  ButtonSecondary,
} from "~/components/ui/button";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";
import { Loader2, Mail } from "lucide-react";

export const Buttons = () => {
  return (
    <Story
      title="buttons"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Button>Primary</Button>

      <ButtonSecondary>Secondary</ButtonSecondary>

      <ButtonGhost>Ghost</ButtonGhost>

      <ButtonDestructive>Destructive</ButtonDestructive>

      <ButtonLink>Link</ButtonLink>

      <ButtonOutline>Outline</ButtonOutline>

      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </Story>
  );
};
