/* eslint-disable jsx-a11y/label-has-associated-control */
import { Mail } from "lucide-react";
import { InputGroup } from "~/components/ui/input-group";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const InputGroups = () => {
  return (
    <Story
      title="input groups"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <label>
        Normal
        <InputGroup>
          <InputGroup.Input placeholder="enter some text" />
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
        </InputGroup>
      </label>

      <label>
        Input Group 2xs
        <InputGroup scale="2xs">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input placeholder="enter some text" />
        </InputGroup>
      </label>

      <label>
        Input Group xs
        <InputGroup scale="xs">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input placeholder="enter some text" />
        </InputGroup>
      </label>

      <label>
        Input Group sm
        <InputGroup scale="sm">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input placeholder="enter some text" />
        </InputGroup>
      </label>

      <label>
        Input Group md (default)
        <InputGroup scale="md">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input placeholder="enter some text" />
        </InputGroup>
      </label>

      <label>
        Input Group lg
        <InputGroup scale="lg">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input placeholder="enter some text" />
        </InputGroup>
      </label>

      <label>
        Input Group xl
        <InputGroup scale="xl">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
          <InputGroup.Input placeholder="enter some text" />
        </InputGroup>
      </label>

      <label>
        Input Group 2xl
        <InputGroup scale="2xl">
          <InputGroup.LeftAddon>
            <Mail />
          </InputGroup.LeftAddon>
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
