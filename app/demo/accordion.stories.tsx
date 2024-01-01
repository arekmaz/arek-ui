import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "~/components/ui/accordion";
import { VStack } from "~/components/ui/stack";

const Collapsible = () => {
  return (
    <Accordion defaultValue={["React"]}>
      {["React", "Solid", "Vue"].map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator asChild>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemContentContainer>
              {item} is a JavaScript library for building user interfaces.
            </Accordion.ItemContentContainer>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

const Disabled = () => {
  return (
    <Accordion defaultValue={["React"]} disabled>
      {["React", "Solid", "Vue"].map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            {item}
            <Accordion.ItemIndicator asChild>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export const Accordions = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>Accordions:</p>
      <Collapsible />
      <Disabled />
    </VStack>
  );
};
