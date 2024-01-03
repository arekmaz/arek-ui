import { Center } from "~/components/ui/stack";
import { InputGroups } from "~/demo/inputGroup.stories";
import { Selects } from "~/demo/select.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <Selects />
      <InputGroups />
    </Center>
  );
}
