import { ark, HTMLArkProps } from "@ark-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { styled } from "../utils/styled";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type ButtonProps = ButtonVariantProps & HTMLArkProps<"button">;

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      sm: "h-9 rounded-md px-3",
      default: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const Button = styled(ark.button, buttonVariants);
export const ButtonSecondary = styled(ark.button, buttonVariants, {
  variant: "secondary",
});
export const ButtonDestructive = styled(ark.button, buttonVariants, {
  variant: "destructive",
});
export const ButtonOutline = styled(ark.button, buttonVariants, {
  variant: "outline",
});
export const ButtonGhost = styled(ark.button, buttonVariants, {
  variant: "ghost",
});
export const ButtonLink = styled(ark.button, buttonVariants, {
  variant: "link",
});
