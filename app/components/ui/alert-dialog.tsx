import * as React from "react";
import * as ArkUi from "@ark-ui/react";
import { twMerge } from "tailwind-merge";
import * as ArkDialog from "@ark-ui/react/dialog";
import { buttonVariants } from "./button";
import { cn } from "../utils/cn";

export type AlertDialogProps = ArkDialog.DialogRootProps;

export const AlertDialog = ArkDialog.DialogRoot;

export type DialogTriggerProps = ArkDialog.DialogTriggerProps;

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerProps
>(({ className, ...props }, ref) => {
  return (
    <ArkDialog.DialogTrigger
      ref={ref}
      className={buttonVariants({ className, variant: "outline" })}
      {...props}
    />
  );
});

DialogTrigger.displayName = "DialogTrigger";

const AlertDialogPortal = ArkUi.Portal;

const AlertDialogOverlay = React.forwardRef<
  HTMLDivElement,
  ArkDialog.DialogBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <ArkDialog.DialogBackdrop
      ref={ref}
      className={twMerge(
        "backdrop-blur-[4px]",
        "bg-background/80",
        "h-screen",
        "left-0",
        "fixed",
        "top-0",
        "w-screen",
        "z-overlay",
        "data-[state=open]:animate-fade-in",
        "data-[state=closed]:animate-fade-out",
        className,
      )}
      {...props}
    />
  );
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

const AlertDialogPositioner = ArkDialog.DialogPositioner;

export type AlertDialogContentProps = ArkDialog.DialogContentProps;

export const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPositioner>
        <ArkDialog.DialogContent
          ref={ref}
          className={twMerge(
            "bg-background",
            "data-[state=open]:animate-in",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",
            "data-[state=closed]:slide-out-to-left-1/2",
            "data-[state=closed]:slide-out-to-top-[48%]",
            "data-[state=open]:slide-in-from-left-1/2",
            "data-[state=open]:slide-in-from-top-[48%]",
            "fixed",
            "top-[50%]",
            "left-[50%]",
            "z-50",
            "grid",
            "w-full",
            "max-w-lg",
            "translate-x-[-50%]",
            "translate-y-[-50%]",
            "gap-4",
            "border",
            "p-6",
            "shadow-lg",
            "duration-200",
            "sm:rounded-lg",
            className,
          )}
          {...props}
        />
      </AlertDialogPositioner>
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

export type AlertDialogHeaderProps = ArkUi.HTMLArkProps<"div">;

export const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(({ className, ...props }, ref) => (
  <ArkUi.ark.div
    className={twMerge(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
));
AlertDialogHeader.displayName = "AlertDialogHeader";

export type AlertDialogFooterProps = ArkUi.HTMLArkProps<"div">;

export const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(({ className, ...props }, ref) => (
  <ArkUi.ark.div
    className={twMerge(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
));
AlertDialogFooter.displayName = "AlertDialogFooter";

type AlertDialogTitleProps = ArkDialog.DialogTitleProps;

export const AlertDialogTitle = React.forwardRef<
  HTMLHeadingElement,
  AlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <ArkDialog.DialogTitle
    ref={ref}
    className={twMerge("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

type AlertDialogDescriptionProps = ArkDialog.DialogDescriptionProps;

const AlertDialogDescription = React.forwardRef<
  HTMLDivElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <ArkDialog.DialogDescription
    ref={ref}
    className={twMerge("text-muted-foreground text-sm", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";
