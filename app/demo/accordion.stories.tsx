import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "~/components/ui/accordion";
import { Card } from "~/components/ui/card";
import { Story } from "./storyHelpers";

const Single = () => {
  return (
    <Card>
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
    </Card>
  );
};

const Collapsible = () => {
  return (
    <Card>
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
    </Card>
  );
};

const Disabled = () => {
  return (
    <Card>
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
    </Card>
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
