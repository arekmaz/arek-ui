import { ark, HTMLArkProps } from "@ark-ui/react";
import { tv, type VariantProps } from "tailwind-variants";
import { styled } from "../utils/styled";

type StackVariantProps = VariantProps<typeof stackVariants>;
export type StackProps = StackVariantProps & HTMLArkProps<"div">;

const stackVariants = tv({
  base: "flex",
  variants: {
    direction: {
      row: "flex-row",
      rowReverse: "flex-row-reverse",
      column: "flex-col",
      columnReverse: "flex-col-reverse",
    },
    spacing: [
      "gap-0",
      "gap-1",
      "gap-2",
      "gap-3",
      "gap-4",
      "gap-5",
      "gap-6",
      "gap-7",
      "gap-8",
      "gap-9",
      "gap-10",
    ],
    align: {
      start: "items-start",
      stretch: "items-stretch",
      end: "items-end",
      center: "items-center",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "column",
    spacing: 1,
    justify: "start",
    align: "start",
  },
});

export const Stack = styled(ark.div, stackVariants);

export const VStack = styled(ark.div, stackVariants, {
  align: "center",
});

export const HStack = styled(ark.div, stackVariants, {
  direction: "row",
  align: "center",
});

export const Center = styled(ark.div, stackVariants, {
  align: "center",
  justify: "center",
});
