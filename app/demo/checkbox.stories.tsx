import { HammerIcon, ShieldQuestionIcon } from "lucide-react";
import { Checkbox as C } from "~/components/ui/checkbox";
import { Story } from "./storyHelpers";

export const Checkbox = () => {
  return (
    <C>
      <C.Label>Checkbox</C.Label>
      <C.Control>
        <C.Indicator>
          <C.CheckIcon />
        </C.Indicator>
      </C.Control>
      <C.HiddenInput />
    </C>
  );
};

export const Invalid = () => {
  return (
    <C invalid>
      <C.Label>Invalid checkbox</C.Label>
      <C.Control>
        <C.Indicator>
          <C.CheckIcon />
        </C.Indicator>
      </C.Control>
      <C.HiddenInput />
    </C>
  );
};

export const IndeterminateCheckbox = () => {
  return (
    <C checked="indeterminate">
      <C.Label>Indeterminate checkbox</C.Label>
      <C.Control>
        <C.Indicator>
          <C.CheckIcon />
        </C.Indicator>
      </C.Control>
      <C.HiddenInput />
    </C>
  );
};

export const DisabledCheckbox = () => {
  return (
    <C disabled defaultChecked>
      <C.Label>Disabled checkbox</C.Label>
      <C.Control>
        <C.Indicator>
          <C.CheckIcon />
        </C.Indicator>
      </C.Control>
      <C.HiddenInput />
    </C>
  );
};

export const CustomIcon = () => {
  return (
    <C defaultChecked>
      <C.Label>Custom checked icon</C.Label>
      <C.Control>
        <C.CheckIcon>
          <HammerIcon className="size-[18px]" />
        </C.CheckIcon>
      </C.Control>
      <C.HiddenInput />
    </C>
  );
};

export const CustomIndeterminateIcon = () => {
  return (
    <C defaultChecked="indeterminate">
      <C.Label>Custom indeterminate icon</C.Label>
      <C.Control>
        <C.IndeterminateIcon>
          <ShieldQuestionIcon className="size-[18px]" />
        </C.IndeterminateIcon>
        <C.CheckIcon />
      </C.Control>
      <C.HiddenInput />
    </C>
  );
};

export const Checkboxes = () => {
  return (
    <Story title="checkboxes" componentFilename="checkbox">
      <Checkbox />
      <IndeterminateCheckbox />
      <Invalid />
      <DisabledCheckbox />
      <CustomIcon />
      <CustomIndeterminateIcon />
    </Story>
  );
};
