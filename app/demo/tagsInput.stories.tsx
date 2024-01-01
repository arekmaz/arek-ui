import { TagsInput } from "~/components/ui/tags-input";
import { Story } from "./storyHelpers";
import { XIcon } from "lucide-react";
import { IconButton } from "~/components/ui/icon-button";

const Normal = () => {
  return (
    <TagsInput>
      {(api) => (
        <>
          <TagsInput.Label>Frameworks</TagsInput.Label>
          <TagsInput.Control>
            {api.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemInput />
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger>
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
    </Story>
  );
};
