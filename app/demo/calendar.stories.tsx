import { useState } from "react";
import { Calendar } from "~/components/ui/calendar";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

const Normal = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export const Calendars = () => {
  return (
    <Story
      title="calendars"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Normal />
    </Story>
  );
};
