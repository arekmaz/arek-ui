import { Checkbox as C } from "~/components/ui/checkbox";
import { Story } from "./storyHelpers";

export const Checkbox = () => {
  return (
    <C>
      <C.Label>Checkbox</C.Label>
      <C.Control>
        <C.CheckIcon />
      </C.Control>
    </C>
  );
};

export const IndeterminateCheckbox = () => {
  return (
    <C checked="indeterminate">
      <C.Label>Indeterminate checkbox</C.Label>
      <C.Control>
        <C.IndeterminateIcon />
      </C.Control>
    </C>
  );
};

export const DisabledCheckbox = () => {
  return (
    <C disabled>
      <C.Label>Disabled checkbox</C.Label>
      <C.Control>
        <C.IndeterminateIcon />
      </C.Control>
    </C>
  );
};

export const Checkboxes = () => {
  return (
    <Story title="checkbox">
      <Checkbox />
      <IndeterminateCheckbox />
      <DisabledCheckbox />
    </Story>
  );
};
