import { Highlight, Mark } from "~/components/ui/highlight";
import { VStack } from "~/components/ui/stack";
import { Story } from "./storyHelpers";
import { Fragment } from "react";
import { Button } from "~/components/ui/button";

const Demo = () => {
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
};

const Multiple = () => {
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
};

const CaseSensitive = () => {
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
};

const CustomHighlight = () => {
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
};

export const Highlights = () => {
  return (
    <Story title="Highlight">
      <Demo />
      <Multiple />
      <CustomHighlight />
      <CaseSensitive />
    </Story>
  );
};
