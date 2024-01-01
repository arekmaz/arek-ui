import { Center } from "~/components/ui/stack";
import { TagsComboboxes } from "~/demo/tagsCombobox.stories";
import { TagsInputs } from "~/demo/tagsInput.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <TagsInputs />
      <TagsComboboxes />
    </Center>
  );
}
