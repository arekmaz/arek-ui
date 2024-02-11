import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "~/components/ui/accordion";
import { Card } from "~/components/ui/card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Single</Card.Title>
        </Card.Header>
        <Card.Content>
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
        </Card.Content>
      </Card>
    );
  },
};

export const Collapsible: Story = {
  render: () => {
    return (
      <Card>
        <Card.Header>
          <Card.Title>Collapsible</Card.Title>
        </Card.Header>
        <Card.Content>
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
        </Card.Content>
      </Card>
    );
  },
};

export const Disabled: Story = {
  render: () => {
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
                  <Accordion.ItemContentContainer>
                    {item} is a JavaScript library for building user interfaces.
                  </Accordion.ItemContentContainer>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Content>
      </Card>
    );
  },
};
