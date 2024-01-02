import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { VStack } from "~/components/ui/stack";

export const Story = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{title.toLowerCase()}:</CardTitle>
      </CardHeader>
      <CardContent>
        <VStack spacing={3}>{children}</VStack>
      </CardContent>
    </Card>
  );
};
