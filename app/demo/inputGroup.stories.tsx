import { Mail } from "lucide-react";
import { InputGroup } from "~/components/ui/input-group";
import { VStack } from "~/components/ui/stack";

export const InputGroups = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>Input Group:</p>

      <label>
        Normal
        <InputGroup>
          <InputGroup.Input />
        </InputGroup>
      </label>

      <label>
        Left addon
        <InputGroup>
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input />
        </InputGroup>
      </label>

      <label>
        Right addon
        <InputGroup>
          <InputGroup.Input />
          <InputGroup.RightAddon>
            <Mail />
          </InputGroup.RightAddon>
        </InputGroup>
      </label>

      <label>
        Disabled
        <InputGroup disabled>
          <InputGroup.Input placeholder="placeholder" />
          <InputGroup.RightAddon>
            <Mail />
          </InputGroup.RightAddon>
        </InputGroup>
      </label>

      <label>
        Error
        <InputGroup status="error">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input />
          <InputGroup.RightAddon>
            <Mail />
          </InputGroup.RightAddon>
        </InputGroup>
      </label>
    </VStack>
  );
};
