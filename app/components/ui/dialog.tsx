import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";
import { Dialog as D } from "@ark-ui/react/dialog";

const dialogStyles = tv({
  slots: {
    root: [],
    backdrop: [
      "backdrop-blur-[4px]",
      "bg-background/80",
      "h-screen",
      "left-0",
      "fixed",
      "top-0",
      "w-screen",
      "z-overlay",
      // TODO: animation
    ],
    positioner: [
      "flex",
      "items-center",
      "justify-center",
      "fixed",
      "left-0",
      "top-0",
      "overflow-auto",
      "w-screen",
      "h-[100dvh]",
      "z-modal",
    ],
    content: [
      "bg-popover",
      "rounded-sm",
      "border",
      "shadow-lg",
      "min-w-96",
      "relative",
      "p-6",
      // TODO: animation
    ],
    title: ["font-semibold", "text-lg"],
    description: ["text-muted-foreground", "text-sm"],
    trigger: [],
    closeTrigger: [],
  },
});

const { withProvider, withContext } = createStyleContext(dialogStyles);

const Root = withProvider(D.Root, "root");
const Backdrop = withContext(D.Backdrop, "backdrop");
const Content = withContext(D.Content, "content");
const Positioner = withContext(D.Positioner, "positioner");
const Title = withContext(D.Title, "title");
const Description = withContext(D.Description, "description");
const Trigger = withContext(D.Trigger, "trigger");
const CloseTrigger = withContext(D.CloseTrigger, "closeTrigger");

export const Dialog = Object.assign(Root, {
  Backdrop,
  Content,
  Positioner,
  Title,
  Description,
  Trigger,
  CloseTrigger,
});
