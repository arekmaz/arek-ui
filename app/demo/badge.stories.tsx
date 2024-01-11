import { Badge } from "~/components/ui/badge";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const Badges = () => {
  return (
    <Story
      title="badges"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </Story>
  );
};
