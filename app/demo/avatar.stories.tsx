import { Avatar } from "~/components/ui/avatar";
import { Story } from "./storyHelpers";

export const Avatars = () => {
  return (
    <Story title="avatars">
      <Avatar>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar>
    </Story>
  );
};
