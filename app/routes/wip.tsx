import { Center } from "~/components/ui/stack";
import { Dialogs } from "~/demo/dialog.stories";
import { Drawers } from "~/demo/drawer.stories";
import { InputGroups } from "~/demo/inputGroup.stories";
import { Selects } from "~/demo/select.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <Dialogs />
      <Drawers />
    </Center>
  );
}
