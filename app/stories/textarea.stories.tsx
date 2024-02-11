import { Textarea } from "~/components/ui/textarea";
import { Story } from "./storyHelpers";

export const Textareas = () => {
  return (
    <Story title="textareas" componentFilename="textarea">
      <Textarea placeholder="Enter the text" />
    </Story>
  );
};
