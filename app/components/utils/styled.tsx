/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, type ExoticComponent } from "react";
import { VariantProps } from "tailwind-variants";
import { cn } from "./cn";
import { DataAttributes } from "./create-styled-context";

const mergeProps = <T extends Record<string, any>>(
  baseProps: T,
  propsToMerge: Partial<T>
): T => ({
  ...baseProps,
  ...propsToMerge,
});

type GenericProps = Record<string, unknown>;
type StyleRecipe = {
  (props?: GenericProps): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variantKeys: (string | number)[];
};

type Component<ComponentProps extends {}> =
  | ExoticComponent<ComponentProps>
  | ((prop: ComponentProps) => JSX.Element);

export const splitVariantProps = (
  variantKeys: (string | number)[],
  props: Record<string, any>
) => {
  const variantProps: any = {};
  const otherProps: any = {};

  for (const [key, value] of Object.entries(props)) {
    if (variantKeys.includes(key)) {
      variantProps[key] = value;
      continue;
    }
    otherProps[key] = value;
  }

  return [variantProps, otherProps];
};

export const styled = <ComponentProps extends {}, R extends StyleRecipe>(
  Component: Component<ComponentProps>,
  recipe: R,
  defaultProps?: Partial<ComponentProps & VariantProps<R> & DataAttributes>
) => {
  const Comp = forwardRef<
    typeof Component,
    ComponentProps & VariantProps<R> & { unstyled?: boolean } & DataAttributes
  >(({ unstyled, ...props }, ref) => {
    const [variantProps, otherProps] = splitVariantProps(recipe.variantKeys, {
      ...defaultProps,
      ...props,
    });

    const classNames = recipe(variantProps);

    const componentProps = mergeProps(otherProps, {
      className: unstyled
        ? (props as any).className
        : cn(classNames, (props as any).className),
    } as any);

    return <Component {...componentProps} ref={ref} />;
  });
  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name;
  return Comp;
};
