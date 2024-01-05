/* eslint-disable jsx-a11y/label-has-associated-control */
import { Input } from "~/components/ui/input";
import { Story } from "./storyHelpers";

export const Inputs = () => {
  return (
    <Story title="inputs">
      <label>
        Input
        <Input placeholder="Enter email" />
      </label>

      <label>
        Input 2xs
        <Input variant="2xs" placeholder="Enter email" />
      </label>

      <label>
        Input xs
        <Input variant="xs" placeholder="Enter email" />
      </label>

      <label>
        Input sm
        <Input variant="sm" placeholder="Enter email" />
      </label>

      <label>
        Input md
        <Input placeholder="Enter email" />
      </label>

      <label>
        Input lg
        <Input variant="lg" placeholder="Enter email" />
      </label>

      <label>
        Input xl
        <Input variant="xl" placeholder="Enter email" />
      </label>

      <label>
        Input 2xl
        <Input variant="2xl" placeholder="Enter email" />
      </label>

      <label>
        Disabled
        <Input disabled placeholder="Enter email" />
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
