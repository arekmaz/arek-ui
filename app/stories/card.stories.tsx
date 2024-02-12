import { Portal } from "@ark-ui/react";
import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Select, data } from "~/components/ui/select";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "card.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <Card className="w-[350px]">
        <Card.Header>
          <Card.Title>Create project</Card.Title>
          <Card.Description>
            Deploy your new project in one-click.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Select items={data}>
                  <Select.Label>Multiple select</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="select a framework" />
                      <Select.Indicator asChild>
                        <ChevronsUpDownIcon />
                      </Select.Indicator>
                    </Select.Trigger>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        <Select.AutoFocusingFilterInput
                          placeholder="Filter frameworks"
                          className="pointer-events-auto"
                        />
                        <Select.ItemGroup id="framework">
                          <Select.ItemGroupLabel htmlFor="framework">
                            Frameworks
                          </Select.ItemGroupLabel>
                          {data.map((item) => (
                            <Select.Item key={item.value} item={item}>
                              <Select.ItemText>{item.label}</Select.ItemText>
                              <Select.ItemIndicator>✓</Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.ItemGroup>
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select>
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </Card.Footer>
      </Card>
    );
  },
};
