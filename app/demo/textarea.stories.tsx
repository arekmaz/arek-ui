import { Textarea } from "~/components/ui/textarea";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const Textareas = () => {
  return (
    <Story
      title="textareas"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Textarea placeholder="Enter the text" />
    </Story>
  );
};
