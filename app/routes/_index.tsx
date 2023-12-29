import type { MetaFunction } from "@remix-run/node";
import { Checkbox } from "~/components/ui/checkbox_1";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>

      {/* <Checkbox />
      <Checkbox checked="indeterminate" />
      <Checkbox checked />
      <Checkbox checked={false} /> */}
      <Checkbox.Root>
        <Checkbox.Label className="text-red-500">label</Checkbox.Label>
        <Checkbox.Control>
          <Checkbox.CheckIcon />
        </Checkbox.Control>
        <Checkbox.Label>label</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
}
