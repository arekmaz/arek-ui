import { GithubIcon } from "lucide-react";
import { Card, CardProps } from "~/components/ui/card";
import { IconButton } from "~/components/ui/icon-button";
import { HStack, VStack } from "~/components/ui/stack";

export const Story = ({
  title,
  children,
  componentFilename,
  ...props
}: {
  title: string;
  componentFilename: string;
} & CardProps) => {
  return (
    <Card {...props}>
      <Card.Header asChild>
        <HStack justify="between">
          <Card.Title className="capitalize">{title.toLowerCase()}:</Card.Title>

          {componentFilename && (
            <IconButton asChild>
              <a
                href={`https://github.com/arekmaz/arek-ui/blob/main/app/components/ui/${componentFilename}.tsx`}
              >
                <GithubIcon />
              </a>
            </IconButton>
          )}
        </HStack>
      </Card.Header>
      <Card.Content asChild>
        <VStack spacing={3}>{children}</VStack>
      </Card.Content>
    </Card>
  );
};
