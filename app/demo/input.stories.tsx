/* eslint-disable jsx-a11y/label-has-associated-control */
import { Input } from "~/components/ui/input";
import { Story } from "./storyHelpers";

export const Inputs = () => {
  return (
    <Story title="inputs">
      <label>
        Input
        <Input />
      </label>

      <label>
        Disabled
        <Input disabled />
      </label>

      <label>
        Placeholder
        <Input placeholder="placeholder" />
      </label>

      <label>
        Error
        <Input status="error" defaultValue="error" />
      </label>

      <label>
        Error placeholder
        <Input placeholder="placeholder" status="error" />
      </label>
    </Story>
  );
};
