import { Highlight, Mark } from "~/components/ui/highlight";
import { VStack } from "~/components/ui/stack";
import { Story } from "./storyHelpers";
import { Fragment } from "react";
import { Button } from "~/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Highlight",
  component: Highlight,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    sourceLink: "highlight.tsx",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => {
    return (
      <VStack>
        Default highlight &quot;a&quot;
        <p>
          <Highlight
            searchWords={["a"]}
            textToHighlight="abcde abc aaa"
          ></Highlight>
        </p>
      </VStack>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    return (
      <VStack>
        Default highlight &quot;a&quot; and &quot;test&quot;
        <p>
          <Highlight
            searchWords={["a", "test"]}
            textToHighlight="abctestde abc atestaa test a"
          />
        </p>
      </VStack>
    );
  },
};

export const CaseSensitive: Story = {
  render: () => {
    return (
      <VStack>
        Case sensitive highlight &quot;A&quot;
        <p>
          <Highlight
            searchWords={["A"]}
            textToHighlight="abcteAstdAe aAbc ateAAstaa test A a"
            caseSensitive
          />
        </p>
      </VStack>
    );
  },
};

export const CustomHighlight: Story = {
  render: () => {
    return (
      <VStack>
        Custom highlight &quot;a&quot; and &quot;test&quot;
        <p>
          <Highlight
            searchWords={["a", "test"]}
            textToHighlight="abctestde abc atestaa test a"
          >
            {(chunks) =>
              chunks.map((chunk, index) => {
                return chunk.match ? (
                  <Button
                    key={index}
                    className="py-1 border bg-foreground text-background rounded-md px-0"
                  >
                    {chunk.text}
                  </Button>
                ) : (
                  <Fragment key={index}>{chunk.text}</Fragment>
                );
              })
            }
          </Highlight>
        </p>
      </VStack>
    );
  },
};
