import { CodeIcon, GithubIcon } from "lucide-react";
import { Card, CardProps } from "~/components/ui/card";
import { IconButton } from "~/components/ui/icon-button";
import { Tooltip } from "~/components/ui/tooltip";
import { HStack, VStack } from "~/components/ui/stack";

export const filenameFromImportMetaUrl = (metaUrl: string) => {
  const url = new URL(metaUrl);

  const filename = url.pathname.split(/[/\\]/).at(-1);

  return filename;
};

export const Story = ({
  title,
  children,
  componentFilename,
  ...props
}: {
  title: string;
  componentFilename?: string;
} & CardProps) => {
  return (
    <Card {...props}>
      <Card.Header>
        <Card.Title className="capitalize" asChild>
          <div className="grid grid-cols-2">
          <HStack justify="start">{title.toLowerCase()}:</HStack>
          <HStack justify="end">
            
            {componentFilename && (
              <>
                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <IconButton asChild variant="outline">
                      <a
                        target="_blank"
                        href={`https://github.com/arekmaz/arek-ui/blob/main/app/demo/${componentFilename}.stories.tsx`}
                        rel="noreferrer"
                      >
                        <CodeIcon />
                      </a>
                    </IconButton>
                  </Tooltip.Trigger>
                  <Tooltip.Positioner>
                    <Tooltip.Arrow>
                      <Tooltip.ArrowTip />
                    </Tooltip.Arrow>
                    <Tooltip.Content>Show demo code</Tooltip.Content>
                  </Tooltip.Positioner>
                </Tooltip>
                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <IconButton asChild variant="outline">
                      <a
                        target="_blank"
                        href={`https://github.com/arekmaz/arek-ui/blob/main/app/components/ui/${componentFilename}.tsx`}
                        rel="noreferrer"
                      >
                        <GithubIcon />
                      </a>
                    </IconButton>
                  </Tooltip.Trigger>
                  <Tooltip.Positioner>
                    <Tooltip.Arrow>
                      <Tooltip.ArrowTip />
                    </Tooltip.Arrow>
                    <Tooltip.Content>Show code</Tooltip.Content>
                  </Tooltip.Positioner>
                </Tooltip>
              </>
            )}
          </HStack>
          </div>
        </Card.Title>
      </Card.Header>
      <Card.Content asChild>
        <VStack spacing={3}>{children}</VStack>
      </Card.Content>
    </Card>
  );
};
