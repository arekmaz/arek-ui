import * as React from "react";
import * as ArkAccordion from "@ark-ui/react/accordion";
import { twMerge } from "tailwind-merge";

export type AccordionProps = ArkAccordion.AccordionRootProps;

export const Accordion = ArkAccordion.AccordionRoot;

export type AccordionItemProps = ArkAccordion.AccordionItemProps;

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <ArkAccordion.AccordionItem
    ref={ref}
    className={twMerge(
      "border-b",
      "data-[state=open]:border-muted-foreground",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export type AccordionItemTriggerProps = ArkAccordion.AccordionItemTriggerProps;

export const AccordionItemTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(({ className, ...props }, ref) => (
  <ArkAccordion.AccordionItemTrigger
    ref={ref}
    className={twMerge(
      "flex",
      "flex-1",
      "items-center",
      "justify-between",
      "py-4",
      "w-full",
      "cursor-pointer",
      "font-medium",
      "hover:underline",
      "disabled:text-muted-foreground",
      "disabled:text-muted-foreground",
      "disabled:cursor-not-allowed",
      "disabled:hover:no-underline",
      className,
    )}
    {...props}
  />
));
AccordionItemTrigger.displayName = "AccordionItemTrigger";

export type AccordionItemIndicatorProps =
  ArkAccordion.AccordionItemIndicatorProps;

export const AccordionItemIndicator = React.forwardRef<
  HTMLDivElement,
  AccordionItemIndicatorProps
>(({ className, ...props }, ref) => (
  <ArkAccordion.AccordionItemIndicator
    ref={ref}
    className={twMerge(
      "h-4",
      "w-4",
      "shrink-0",
      "transition-transform",
      "duration-normal",
      "data-[state=open]:rotate-180",
      className,
    )}
    {...props}
  />
));
AccordionItemIndicator.displayName = "AccordionItemIndicator";

export type AccordionItemContentProps = ArkAccordion.AccordionItemContentProps;

export const AccordionItemContent = React.forwardRef<
  HTMLDivElement,
  AccordionItemContentProps
>(({ className, ...props }, ref) => (
  <ArkAccordion.AccordionItemContent
    ref={ref}
    className={twMerge(
      "data-[state=open]:animate-collapse-down",
      "data-[state=closed]:animate-collapse-up",
      "overflow-hidden",
      className,
    )}
    {...props}
  />
));
AccordionItemContent.displayName = "AccordionItemContent";
