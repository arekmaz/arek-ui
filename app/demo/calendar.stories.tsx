import { useState } from "react";
import { Calendar } from "~/components/ui/calendar";
import { Story } from "./storyHelpers";

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
    <Story title="calendars">
      <Normal />
    </Story>
  );
};
