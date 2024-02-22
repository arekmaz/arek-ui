import { createToaster } from "@ark-ui/react/toast";
import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { Toast } from "~/components/ui/toast";
import { Story } from "./storyHelpers";

const [Toaster, toast] = createToaster({
  placement: "top-end",
  render(toast) {
    return (
      <Toast type={toast.type}>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
        <Toast.CloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <XIcon />
          </IconButton>
        </Toast.CloseTrigger>
      </Toast>
    );
  },
});

export const Demo = () => (
  <>
    <Button
      onClick={() =>
        toast.create({
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
        toast.create({
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
        toast.create({
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
        toast.create({
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
        toast.create({
          title: "custom",
          description: "Description",
          type: "custom",
        })
      }
    >
      Create Custom Toast
    </Button>
    <Toaster />
  </>
);

export const Toasts = () => {
  return (
    <Story title="toasts" componentFilename="toast">
      <Demo />
    </Story>
  );
};
