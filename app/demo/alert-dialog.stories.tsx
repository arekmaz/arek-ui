import { Button } from "~/components/ui/button";
import { Story } from "./storyHelpers";
import * as AlertDialog from "~/components/ui/alert-dialog";
import { HStack } from "~/components/ui/stack";

export const Normal = () => {
  return (
    <AlertDialog.AlertDialog>
      <AlertDialog.AlertDialogTrigger asChild>
        <Button variant="outline">Normal Dialog</Button>
      </AlertDialog.AlertDialogTrigger>

      <AlertDialog.AlertDialogContent>
        <AlertDialog.AlertDialogTitle>
          Dialog Title
        </AlertDialog.AlertDialogTitle>
        <AlertDialog.AlertDialogDescription>
          Dialog Description
        </AlertDialog.AlertDialogDescription>

        <HStack justify="end" className="w-full">
          <AlertDialog.AlertDialogCancel asChild>
            <Button variant="outline">Close</Button>
          </AlertDialog.AlertDialogCancel>

          <AlertDialog.AlertDialogAction asChild>
            <Button>Save</Button>
          </AlertDialog.AlertDialogAction>
        </HStack>
      </AlertDialog.AlertDialogContent>
    </AlertDialog.AlertDialog>
  );
};

export const AlertDialogs = () => {
  return (
    <Story title="alert-dialogs" componentFilename="alert-dialog">
      <Normal />
    </Story>
  );
};
