import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "~/components/ui/accordion";
import { Stack, VStack } from "~/components/ui/stack";
import { Story } from "./storyHelpers";

const Single = () => {
  return (
    <Stack className="border p-2">
      Single
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
    </Stack>
  );
};

const Collapsible = () => {
  return (
    <Stack className="border p-2">
      Collapsible
      <Accordion defaultValue={["React"]} collapsible>
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
    </Stack>
  );
};

const Disabled = () => {
  return (
    <Stack className="border p-2">
      Disabled
      <Accordion defaultValue={["React"]} disabled>
        {(["React", "disabled", "Vue"] as const).map((item, id) => (
          <Accordion.Item key={id} value={item} disabled={item === "disabled"}>
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
    </Stack>
  );
};

export const Accordions = () => {
  return (
    <Story title="accordions">
      <Single />
      <Collapsible />
      <Disabled />
    </Story>
  );
};
