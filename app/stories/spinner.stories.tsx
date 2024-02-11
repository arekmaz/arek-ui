import { Spinner } from "~/components/ui/spinner";
import { VStack } from "~/components/ui/stack";
import { FanIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Spinner",
  component: Spinner,
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
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XS: Story = { args: { size: "xs" } };
export const SM: Story = { args: { size: "sm" } };
export const MD: Story = { args: { size: "md" } };
export const LG: Story = { args: { size: "lg" } };
export const XL: Story = { args: { size: "xl" } };
export const Alternate: Story = { args: { className: "direction-alternate" } };
export const Reverse: Story = { args: { className: "direction-reverse" } };
export const ReverseAlternate: Story = {
  args: { className: "direction-reverse-alternate" },
};

export const Spinners = () => {
  return (
    <Story title="spinners" componentFilename="spinner">
      <VStack>
        custom icon
        <Spinner>
          <Spinner.Icon asChild>
            <FanIcon className="text-muted-foreground" />
          </Spinner.Icon>
        </Spinner>
      </VStack>

      <VStack>
        custom animation
        <Spinner
          animation="custom"
          classes={{ icon: "animate-bounce duration-fast" }}
        />
      </VStack>
    </Story>
  );
};
