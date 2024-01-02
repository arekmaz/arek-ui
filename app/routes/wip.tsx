import { Center } from "~/components/ui/stack";
import { Avatars } from "~/demo/avatar.stories";
import { Cards } from "~/demo/card.stories";
import { Comboboxes } from "~/demo/combobox.stories";
import { Selects } from "~/demo/select.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <Cards />
      <Selects />
    </Center>
  );
}
