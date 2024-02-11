import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { Pagination } from "~/components/ui/pagination";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Pagination",
  component: Pagination,
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
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo = {
  render: (props) => {
    return (
      <Pagination
        pageSize={10}
        siblingCount={1}
        defaultPage={2}
        count={90}
        {...props}
      >
        {({ pages, page: currentPage }) => (
          <>
            <Pagination.PrevTrigger asChild>
              <IconButton variant="ghost" aria-label="Next Page">
                <ChevronLeftIcon />
              </IconButton>
            </Pagination.PrevTrigger>

            {pages.map((page, index) =>
              page.type === "page" ? (
                <Pagination.Item key={index} {...page} asChild>
                  <Button
                    variant={page.value === currentPage ? "outline" : "ghost"}
                  >
                    {page.value}
                  </Button>
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index}>
                  &#8230;
                </Pagination.Ellipsis>
              )
            )}
            <Pagination.NextTrigger asChild>
              <IconButton variant="ghost" aria-label="Next Page">
                <ChevronRightIcon />
              </IconButton>
            </Pagination.NextTrigger>
          </>
        )}
      </Pagination>
    );
  },
};
