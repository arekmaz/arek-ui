import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "~/components/ui/accordion";
import { Card } from "~/components/ui/card";
import { Story } from "./storyHelpers";

const Single = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Single</Card.Title>
      </Card.Header>
      <Card.Content>
        <Accordion defaultValue={["React"]}>
          {["React", "Solid", "Vue"].map((item, id) => (
            <Accordion.Item key={id} value={item} className="min-w-[420px]">
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
      </Card.Content>
    </Card>
  );
};

const Collapsible = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Collapsible</Card.Title>
      </Card.Header>
      <Card.Content>
        <Accordion defaultValue={["React"]} collapsible>
          {["React", "Solid", "Vue"].map((item, id) => (
            <Accordion.Item key={id} value={item} className="min-w-[420px]">
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
      </Card.Content>
    </Card>
  );
};

const Disabled = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Disabled</Card.Title>
      </Card.Header>
      <Card.Content>
        <Accordion defaultValue={["React"]}>
          {(["React", "disabled", "Vue"] as const).map((item, id) => (
            <Accordion.Item
              key={id}
              value={item}
              disabled={item === "disabled"}
            >
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
      </Card.Content>
    </Card>
  );
};

export const Accordions = () => {
  return (
    <Story title="accordions" componentFilename="accordion">
      <Single />
      <Collapsible />
      <Disabled />
    </Story>
  );
};
