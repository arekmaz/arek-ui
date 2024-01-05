/* eslint-disable jsx-a11y/label-has-associated-control */
import { Mail } from "lucide-react";
import { InputGroup } from "~/components/ui/input-group";
import { Story } from "./storyHelpers";

export const InputGroups = () => {
  return (
    <Story title="input groups">
      <label>
        Normal
        <InputGroup>
          <InputGroup.Input placeholder="enter some text" />
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
    </Story>
  );
};
