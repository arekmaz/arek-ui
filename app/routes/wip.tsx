import { Mail } from "lucide-react";
import { Input } from "~/components/ui/input";
import { InputGroup } from "~/components/ui/input-group";
import { Center } from "~/components/ui/stack";

export default function Wip() {
  return (
    <Center className="flex-1">
      <InputGroup>
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input />
        <InputGroup.RightAddon>
          <Mail />
        </InputGroup.RightAddon>
      </InputGroup>

      <InputGroup status="error">
        <InputGroup.LeftAddon>
          <Mail />
        </InputGroup.LeftAddon>
        <InputGroup.Input />
        <InputGroup.RightAddon>
          <Mail />
        </InputGroup.RightAddon>
      </InputGroup>
    </Center>
  );
}
