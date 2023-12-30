import type { MetaFunction } from "@remix-run/node";
import { Center, HStack } from "~/components/ui/stack";
import { Buttons } from "~/demo/button.stories";
import { Checkboxes } from "~/demo/checkbox.stories";
import { Comboboxes } from "~/demo/combobox.stories";
import { Selects } from "~/demo/select.stories";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center className="w-screen h-screen">
      <HStack className="w-min" spacing={5}>
        <Buttons />
        <Checkboxes />
        <Comboboxes />
        <Selects />
      </HStack>
    </Center>
  );
}
