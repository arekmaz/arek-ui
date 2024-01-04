/* eslint-disable @typescript-eslint/no-explicit-any */
import { ark } from "@ark-ui/react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { ComponentProps } from "react";

const cardStyles = tv({
  slots: {
    root: ["rounded-lg border bg-card text-card-foreground shadow-sm"],
    header: ["flex flex-col space-y-1.5 p-6"],
    title: ["text-2xl font-semibold leading-none tracking-tight"],
    description: ["text-sm text-muted-foreground"],
    content: ["p-6 pt-0"],
    footer: ["flex items-center p-6 pt-0"],
  },
});

const { withProvider, withContext } = createStyleContext(cardStyles);

const Root = withProvider(ark.div, "root", { "data-part": "card" } as any);
const Header = withContext(ark.div, "header", { "data-part": "header" } as any);
const Title = withContext(ark.h3, "title", { "data-part": "title" } as any);
const Description = withContext(ark.p, "description", {
  "data-part": "description",
} as any);
const Content = withContext(ark.div, "content", {
  "data-part": "content",
} as any);
const Footer = withContext(ark.div, "footer", { "data-part": "footer" } as any);

export const Card = Object.assign(Root, {
  Header,
  Title,
  Description,
  Content,
  Footer,
});

export type CardProps = ComponentProps<typeof Card>;
