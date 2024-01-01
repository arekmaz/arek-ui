import { ReactNode } from "react";
import { VStack } from "~/components/ui/stack";

export const Story = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <VStack spacing={3} className="border rounded-md p-5">
      <p>{title.toUpperCase()}:</p>
      {children}
    </VStack>
  );
};
