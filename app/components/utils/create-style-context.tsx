/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import {
  createContext,
  createElement,
  forwardRef,
  useContext,
  type ComponentProps,
  type ElementType,
  type JSX,
  useMemo,
} from "react";
import { cn } from "./cn";

type GenericProps = Record<string, unknown>;
type StyleRecipe = {
  (props?: GenericProps): Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variantKeys: (string | number)[];
};
type StyleSlot<R extends StyleRecipe> = keyof ReturnType<R>;
type Classes<R extends StyleRecipe> = { [key in StyleSlot<R>]?: string };
type StyleSlotRecipe<R extends StyleRecipe> = Record<StyleSlot<R>, string>;
type StyleVariantProps<R extends StyleRecipe> = Parameters<R>[0];
type CombineProps<T, U> = Omit<T, keyof U> & U;

export interface ComponentVariants<
  T extends ElementType,
  R extends StyleRecipe,
  OtherProps
> {
  (
    props: CombineProps<ComponentProps<T>, StyleVariantProps<R>> & OtherProps
  ): JSX.Element;
}

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

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<{
    slotStyles: StyleSlotRecipe<R> | null;
    classes: Classes<R>;
  }>({ slotStyles: null, classes: {} });

  const withProvider = <T extends ElementType>(
    Component: T,
    slot?: StyleSlot<R>
  ): ComponentVariants<T, R, { classes?: Classes<R> }> => {
    const StyledComponent = forwardRef(
      (
        {
          classes = {},
          ...props
        }: ComponentProps<T> & {
          classes?: Classes<R>;
        },
        ref
      ) => {
        const [variantProps, otherProps] = splitVariantProps(
          recipe.variantKeys,
          props
        );

        const slotStyles = useMemo(
          () => recipe(variantProps) as any,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          Object.values(variantProps)
        );
        return (
          <StyleContext.Provider value={{ slotStyles, classes }}>
            <Component
              ref={ref}
              {...otherProps}
              className={slotStyles[slot]({
                className: cn(classes[slot], props.className),
              })}
            />
          </StyleContext.Provider>
        );
      }
    );
    return StyledComponent as any;
  };

  const withContext = <T extends ElementType>(
    Component: T,
    slot?: StyleSlot<R>
  ): T => {
    if (!slot) return Component;

    const StyledComponent = forwardRef((props: ComponentProps<T>, ref) => {
      const { slotStyles, classes } = useContext(StyleContext) as any;
      return createElement(Component, {
        ...props,
        className: slotStyles?.[slot]({
          className: cn(classes[slot], props.className),
        }),
        ref,
      });
    });
    return StyledComponent as unknown as T;
  };

  return {
    withProvider,
    withContext,
  };
};
