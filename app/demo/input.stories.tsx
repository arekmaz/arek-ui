/* eslint-disable jsx-a11y/label-has-associated-control */
import { Input } from "~/components/ui/input";
import { Story } from "./storyHelpers";

export const Inputs = () => {
  return (
    <Story title="inputs" componentFilename="input">
      <label>
        Input
        <Input placeholder="Enter email" />
      </label>

      <label>
        Input 2xs
        <Input scale="2xs" placeholder="Enter email" />
      </label>

      <label>
        Input xs
        <Input scale="xs" placeholder="Enter email" />
      </label>

      <label>
        Input sm
        <Input scale="sm" placeholder="Enter email" />
      </label>

      <label>
        Input md
        <Input placeholder="Enter email" />
      </label>

      <label>
        Input lg
        <Input scale="lg" placeholder="Enter email" />
      </label>

      <label>
        Input xl
        <Input scale="xl" placeholder="Enter email" />
      </label>

      <label>
        Input 2xl
        <Input scale="2xl" placeholder="Enter email" />
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
        <Input aria-invalid="true" defaultValue="error" />
      </label>

      <label>
        Error placeholder
        <Input placeholder="placeholder" aria-invalid="true" />
      </label>
    </Story>
  );
};
