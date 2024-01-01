import { Avatar } from "~/components/ui/avatar";
import { Story } from "./storyHelpers";
import { Stack, VStack } from "~/components/ui/stack";

export const Avatars = () => {
  return (
    <Story title="avatars">
      <VStack>
        Normal
        <Avatar>
          <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar>
      </VStack>
      <VStack>
        Placeholder
        <Avatar>
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar>
      </VStack>
    </Story>
  );
};
