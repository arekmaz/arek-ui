import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ComponentProps } from "react";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { Pagination } from "~/components/ui/pagination";
import { Story } from "./storyHelpers";

export const Demo = (props: ComponentProps<typeof Pagination>) => {
  return (
    <Pagination pageSize={10} siblingCount={1} defaultPage={2} {...props}>
      <Pagination.Context>
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
      </Pagination.Context>
    </Pagination>
  );
};

export const Paginations = () => {
  return (
    <Story title="paginations" componentFilename="pagination">
      <Demo count={90} />
    </Story>
  );
};
