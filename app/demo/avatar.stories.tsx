import { Avatar } from "~/components/ui/avatar";
import { VStack } from "~/components/ui/stack";
import { Story } from "./storyHelpers";

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
