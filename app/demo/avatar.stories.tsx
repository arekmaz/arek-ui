import { Avatar } from "~/components/ui/avatar";
import { VStack } from "~/components/ui/stack";

export const Avatars = () => {
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>AVATARS:</p>
      <Avatar>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
    </VStack>
  );
};
