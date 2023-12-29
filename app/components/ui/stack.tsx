import { ark, HTMLArkProps } from "@ark-ui/react/factory";
import { tv, type VariantProps } from "tailwind-variants";
import { styled } from "../utils/styles";

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
    spacing: ["gap-0", "gap-1", "gap-2", "gap-3"],
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
    },
  },
  defaultVariants: {
    direction: "column",
    spacing: 1,
    justify: "start",
    align: "start",
  },
});

export const Stack = styled<StackProps>(ark.div, stackVariants);

export const VStack = styled<StackProps>(ark.div, stackVariants, {
  align: "center",
});

export const HStack = styled<StackProps>(ark.div, stackVariants, {
  direction: "row",
  align: "center",
});