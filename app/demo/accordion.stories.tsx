import { ChevronDownIcon } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemIndicator,
  AccordionItemContent,
} from "~/components/ui/accordion";
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
            <AccordionItem key={id} value={item} className="min-w-[420px]">
              <AccordionItemTrigger>
                {item}
                <AccordionItemIndicator asChild>
                  <ChevronDownIcon />
                </AccordionItemIndicator>
              </AccordionItemTrigger>
              <AccordionItemContent>
                {item} is a JavaScript library for building user interfaces.
              </AccordionItemContent>
            </AccordionItem>
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
            <AccordionItem key={id} value={item} className="min-w-[420px]">
              <AccordionItemTrigger>
                {item}
                <AccordionItemIndicator asChild>
                  <ChevronDownIcon />
                </AccordionItemIndicator>
              </AccordionItemTrigger>
              <AccordionItemContent>
                {item} is a JavaScript library for building user interfaces.
              </AccordionItemContent>
            </AccordionItem>
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
            <AccordionItem key={id} value={item} disabled={item === "disabled"}>
              <AccordionItemTrigger>
                {item}
                <AccordionItemIndicator asChild>
                  <ChevronDownIcon />
                </AccordionItemIndicator>
              </AccordionItemTrigger>
              <AccordionItemContent>
                {item} is a JavaScript library for building user interfaces.
              </AccordionItemContent>
            </AccordionItem>
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
