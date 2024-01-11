import { GithubIcon } from "lucide-react";
import { Card, CardProps } from "~/components/ui/card";
import { IconButton } from "~/components/ui/icon-button";
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
          <HStack justify="between">
            {title.toLowerCase()}:
            {componentFilename && (
              <IconButton asChild variant="outline">
                <a
                  href={`https://github.com/arekmaz/arek-ui/blob/main/app/components/ui/${componentFilename}.tsx`}
                >
                  <GithubIcon />
                </a>
              </IconButton>
            )}
          </HStack>
        </Card.Title>
      </Card.Header>
      <Card.Content asChild>
        <VStack spacing={3}>{children}</VStack>
      </Card.Content>
    </Card>
  );
};
