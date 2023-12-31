import type { MetaFunction } from "@remix-run/node";
import { Center, VStack } from "~/components/ui/stack";
import { Buttons } from "~/demo/button.stories";
import { Checkboxes } from "~/demo/checkbox.stories";
import { Comboboxes } from "~/demo/combobox.stories";
import { DatePickers } from "~/demo/datePicker.stories";
import { IconButtons } from "~/demo/iconButton.stories";
import { Selects } from "~/demo/select.stories";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center className="w-screen flex-1">
      <VStack spacing={5} className="md:flex-row flex-wrap">
        <Buttons />
        <Checkboxes />
        <Comboboxes />
        <Selects />
        <DatePickers />
        <IconButtons />
      </VStack>
    </Center>
  );
}
