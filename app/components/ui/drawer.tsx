import { Dialog as ArkDrawer } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";

const drawerStyles = tv({
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
      "z-[1300]",
      // TODO: animation
    ],
    positioner: [
      "flex",
      "items-center",
      "h-[100dvh]",
      "justify-center",
      "fixed",
      "top-0",
      "w-screen",
      "sm:w-96",
      "z-[1400]",
    ],
    content: [
      "bg-background",
      "shadow-lg",
      "grid",
      "divide-y",
      "grid-cols-[1fr]",
      "grid-rows-[auto_1fr_auto]",
      "grid-areas-drawerContent",
      "size-full",
      "data-[state=closed]:hidden",
    ],
    header: [
      "flex",
      "flex-col",
      "gap-1",
      "grid-in-header",
      "pt-6",
      "pb-4",
      "px-6",
    ],
    body: ["flex", "flex-col", "grid-in-body", "overflow-auto", "p-6"],
    footer: ["flex", "grid-in-footer", "justify-end", "py-4", "px-6"],
    title: ["text-foreground", "font-semibold", "text-xl"],
    description: ["text-muted-foreground"],
    closeTrigger: [],
    trigger: [],
  },
  variants: {
    variant: {
      left: {
        positioner: ["left-0"],
        content: [
          //TODO: animation
        ],
      },
      right: {
        positioner: ["right-0"],
        content: [
          //TODO: animation
        ],
      },
    },
  },
  defaultVariants: {
    variant: "right",
  },
});

const { withProvider, withContext } = createStyleContext(drawerStyles);

const Root = withProvider(ArkDrawer.Root, "root");
const Backdrop = withContext(ArkDrawer.Backdrop, "backdrop");
const Body = withContext(ark.div, "body");
const CloseTrigger = withContext(ArkDrawer.CloseTrigger, "closeTrigger");
const Content = withContext(ArkDrawer.Content, "content");
const Description = withContext(ArkDrawer.Description, "description");
const Footer = withContext(ark.div, "footer");
const Header = withContext(ark.div, "header");
const Positioner = withContext(ArkDrawer.Positioner, "positioner");
const Title = withContext(ArkDrawer.Title, "title");
const Trigger = withContext(ArkDrawer.Trigger, "trigger");

export const Drawer = Object.assign(Root, {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Title,
  Trigger,
  Root,
});
