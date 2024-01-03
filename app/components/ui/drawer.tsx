import { Dialog as ArkDrawer } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";

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
      "z-overlay",
      "_open:animate-fade-in",
      "_closed:animate-fade-out",
    ],
    positioner: [
      "flex",
      "items-center",
      "h-[100dvh]",
      "justify-center",
      "fixed",
      "w-screen",
      "z-modal",
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
      "_hidden:hidden",
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
        positioner: ["top-0", "left-0", "sm:w-96"],
        content: [
          "_open:animate-drawer-in-left",
          "_closed:animate-drawer-out-left",
        ],
      },
      right: {
        positioner: ["top-0", "right-0", "sm:w-96"],
        content: [
          "_open:animate-drawer-in-right",
          "_closed:animate-drawer-out-right",
        ],
      },
      top: {
        positioner: ["top-0", "sm:h-1/2"],
        content: [
          "_open:animate-drawer-in-top",
          "_closed:animate-drawer-out-top",
        ],
      },
      bottom: {
        positioner: ["bottom-0", "sm:h-1/2"],
        content: [
          "_open:animate-drawer-in-bottom",
          "_closed:animate-drawer-out-bottom",
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
