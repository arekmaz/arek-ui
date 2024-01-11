import { TagsCombobox } from "~/components/ui/tags-combobox";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const TagsComboboxes = () => {
  return (
    <Story
      title="tags comboboxes"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <TagsCombobox />
    </Story>
  );
};
