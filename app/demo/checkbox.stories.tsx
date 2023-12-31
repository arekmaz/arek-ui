import { Checkbox as C } from "~/components/ui/checkbox";
import { VStack } from "~/components/ui/stack";

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
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>CHECKBOXES:</p>
      <Checkbox />
      <IndeterminateCheckbox />
      <DisabledCheckbox />
    </VStack>
  );
};
