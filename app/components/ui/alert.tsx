import * as React from "react";
import * as Tv from "tailwind-variants";
import * as ArkUi from "@ark-ui/react";
import { twMerge } from "tailwind-merge";

export const alertVariants = Tv.tv({
  base: "[&>svg]:text-foreground relative w-full rounded-lg border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
  variants: {
    variant: {
      default: { root: ["bg-background", "text-foreground"] },
      destructive: {
        root: [
          "border-destructive/50",
          "text-destructive",
          "dark:border-destructive",
          "[&>svg]:text-destructive",
        ],
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type AlertProps = ArkUi.HTMLArkProps<"div"> &
  Tv.VariantProps<typeof alertVariants>;

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <ArkUi.ark.div
        ref={ref}
        className={twMerge(alertVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

export type AlertTitleProps = ArkUi.HTMLArkProps<"h5">;

export const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <ArkUi.ark.h5
        ref={ref}
        className={twMerge(
          "mb-1",
          "font-medium",
          "leading-none",
          "tracking-tight",
          className,
        )}
        {...props}
      />
    );
  },
);

export type AlertDescriptionProps = ArkUi.HTMLArkProps<"div">;

export const AlertDescription = React.forwardRef<
  HTMLDivElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <ArkUi.ark.div
      ref={ref}
      className={twMerge("text-sm", "[&_p]:leading-relaxed", className)}
      {...props}
    />
  );
});

const { withProvider, withContext } = createStyleContext(alertVariants);
