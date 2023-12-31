import { ChevronDown, ChevronDownCircle, Mail } from "lucide-react";
import { IconButton } from "~/components/ui/icon-button";
import { Center } from "~/components/ui/stack";
import { BasicDatePicker } from "~/demo/datePicker.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <IconButton>
        <ChevronDown />
      </IconButton>
      <IconButton>
        <ChevronDownCircle />
      </IconButton>
      <IconButton>
        <Mail />
      </IconButton>
    </Center>
  );
}
