import { Center } from "~/components/ui/stack";
import { DatePickers } from "~/demo/date-picker.stories";
import { Progresses } from "~/demo/progress.stories";
import { TreeViews } from "~/demo/tree-view.stories";

export default function Wip() {
  return (
    <Center className="flex-1">
      <Progresses />
    </Center>
  );
}
