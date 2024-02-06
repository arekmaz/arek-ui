import { Center } from "~/components/ui/stack";
import { Calendars } from "~/demo/calendar.stories";
import { Checkboxes } from "~/demo/checkbox.stories";
import { DatePickers } from "~/demo/date-picker.stories";
import { Forms } from "~/demo/form.stories";
import { Highlights } from "~/demo/highlight.stories";
import { InputGroups } from "~/demo/input-group.stories";
import { Sliders } from "~/demo/slider.stories";
import { Switches } from "~/demo/switch.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <Sliders />
      <Switches />
    </Center>
  );
}
