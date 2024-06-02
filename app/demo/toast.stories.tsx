import { createToaster, Toaster } from "@ark-ui/react/toast";
import { Button } from "~/components/ui/button";
import { Story } from "./storyHelpers";
import { Toast } from "~/components/ui/toast";
import { XIcon } from "lucide-react";

const toaster = createToaster({
  placement: "top-end",
});

export const Demo = () => (
  <>
    <Button
      onClick={() =>
        toaster.create({
          title: "info",
          description: "Description",
          type: "info",
        })
      }
    >
      Create Info Toast (default)
    </Button>
    <Button
      variant="destructive"
      onClick={() =>
        toaster.create({
          title: "error",
          description: "Description",
          type: "error",
        })
      }
    >
      Create Error Toast
    </Button>
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "success",
          description: "Description",
          type: "success",
        })
      }
    >
      Create Success Toast
    </Button>
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "loading",
          description: "Description",
          type: "loading",
        })
      }
    >
      Create Loading Toast
    </Button>
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: "custom",
          description: "Description",
          type: "custom",
        })
      }
    >
      Create Custom Toast
    </Button>
    <Toaster toaster={toaster}>
      {(toast) => (
        <Toast key={toast.id}>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.ActionTrigger>Do Action</Toast.ActionTrigger>
          <Toast.CloseTrigger>
            <XIcon />
          </Toast.CloseTrigger>
        </Toast>
      )}
    </Toaster>
  </>
);

export const Toasts = () => {
  return (
    <Story title="toasts" componentFilename="toast">
      <Demo />
    </Story>
  );
};
