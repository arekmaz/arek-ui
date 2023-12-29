import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox_1";
import { Center, Stack, VStack } from "~/components/ui/stack";
import { cn } from "~/components/utils/cn";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1>Welcome to Remix</h1>

      <Center className="w-screen bg-red-500">
        <VStack>
          <Button>button</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="link">link</Button>
          <Button variant="outline" disabled>
            link
          </Button>
        </VStack>
      </Center>

      {/* <Checkbox />
      <Checkbox checked="indeterminate" />
      <Checkbox checked />
      <Checkbox checked={false} /> */}
      <Checkbox.Root
        classes={{ root: cn({ "text-blue-500": checked }) }}
        checked={checked}
        onCheckedChange={(c) => setChecked(c.checked as boolean)}
      >
        <Checkbox.Label className="text-red-500">label</Checkbox.Label>
        <Checkbox.Control>
          <Checkbox.CheckIcon />
        </Checkbox.Control>
        <Checkbox.Control>
          <Checkbox.CheckIcon />
        </Checkbox.Control>
        <Checkbox.Control>
          <Checkbox.CheckIcon />
        </Checkbox.Control>
        <Checkbox.Label>label</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
}
