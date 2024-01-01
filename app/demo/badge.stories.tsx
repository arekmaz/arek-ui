import { Badge } from "~/components/ui/badge";
import { VStack } from "~/components/ui/stack";

export const Badges = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>BADGES:</p>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </VStack>
  );
};
