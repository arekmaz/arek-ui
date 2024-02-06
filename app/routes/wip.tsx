import { Center } from "~/components/ui/stack";
import { Calendars } from "~/demo/calendar.stories";
import { DatePickers } from "~/demo/date-picker.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <Calendars />
      <DatePickers />
    </Center>
  );
}
