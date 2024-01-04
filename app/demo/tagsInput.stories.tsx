import { TagsInput } from "~/components/ui/tags-input";
import { Story } from "./storyHelpers";
import { ArrowRight, PiIcon, XIcon } from "lucide-react";
import { IconButton } from "~/components/ui/icon-button";
import { InputGroup } from "~/components/ui/input-group";

const Normal = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>Normal</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const WithInputGroup = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>With input group</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}
            <InputGroup variant="ghost">
              <InputGroup.LeftAddon>
                <PiIcon />
              </InputGroup.LeftAddon>
              <TagsInput.Input placeholder="Add Framework" unstyled asChild>
                <InputGroup.Input className="w-28" />
              </TagsInput.Input>
              <InputGroup.RightAddon>
                <ArrowRight />
              </InputGroup.RightAddon>
            </InputGroup>
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

const Disabled = () => {
  return (
    <TagsInput disabled defaultValue={["test"]}>
      {(api) => (
        <>
          <TagsInput.Label>Disabled</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger asChild>
                  <IconButton size="sm" variant="ghost">
                    <XIcon />
                  </IconButton>
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.Item>
            ))}
            <TagsInput.Input placeholder="Add Framework" />
          </TagsInput.Control>
        </>
      )}
    </TagsInput>
  );
};

export const TagsInputs = () => {
  return (
    <Story title="TAGS INPUTS">
      <Normal />
      <WithInputGroup />
      <Disabled />
    </Story>
  );
};
