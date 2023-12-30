import type { MetaFunction } from "@remix-run/node";
import { MultipleCombobox, SingleCombobox } from "~/components/ui/combobox_1";
import { MultipleSelect } from "~/components/ui/select";
import { Center, VStack } from "~/components/ui/stack";
import { TagsCombobox } from "~/components/ui/tags-combobox";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Center className="w-screen h-screen">
      <VStack className="w-min" spacing={5}>
        <MultipleSelect />
      </VStack>
    </Center>
  );
}
