/* eslint-disable react/prop-types */
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

export type DataAttributes = Record<`data-${string}`, string | number>;

export interface ComponentVariants<
  T extends ElementType,
  R extends StyleRecipe,
  OtherProps
> {
  (
    props: CombineProps<ComponentProps<T>, StyleVariantProps<R>> & OtherProps
  ): JSX.Element;
}

export const splitProps = (
  keys: (string | number)[],
  props: Record<string, any>
) => {
  const keyProps: any = {};
  const otherProps: any = {};

  for (const [key, value] of Object.entries(props)) {
    if (keys.includes(key)) {
      keyProps[key] = value;
      continue;
    }
    otherProps[key] = value;
  }

  return [keyProps, otherProps];
};

export const createStyleContext = <R extends StyleRecipe>(recipe: R) => {
  const StyleContext = createContext<{
    slotStyles: StyleSlotRecipe<R> | null;
    classes: Classes<R>;
    unstyled?: boolean;
  }>({ slotStyles: null, classes: {} });

  const withProvider = <T extends ElementType>(
    Component: T,
    slot: StyleSlot<R>,
    defaultProps?: Partial<ComponentProps<T> & DataAttributes>
  ): ComponentVariants<
    T & DataAttributes,
    R,
    {
      classes?: Classes<R>;
      unstyled?: boolean;
    }
  > => {
    const StyledComponent = forwardRef(
      (
        {
          classes = {},
          unstyled = false,
          ...props
        }: ComponentProps<T> & {
          classes?: Classes<R>;
          unstyled?: boolean;
        },
        ref
      ) => {
        const [variantProps, otherProps] = splitProps(recipe.variantKeys, {
          ...defaultProps,
          ...props,
        });

        const slotStyles = useMemo(
          () => recipe(variantProps) as any,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          Object.values(variantProps)
        );
        return (
          <StyleContext.Provider value={{ slotStyles, classes, unstyled }}>
            <Component
              ref={ref}
              {...otherProps}
              className={
                unstyled
                  ? props.className
                  : slotStyles[slot]({
                      className: cn(classes[slot], props.className),
                    })
              }
            />
          </StyleContext.Provider>
        );
      }
    );
    return StyledComponent as any;
  };

  const withContext = <T extends ElementType>(
    Component: T,
    slot: StyleSlot<R>,
    defaultProps?: Partial<ComponentProps<T> & DataAttributes>
  ): ElementType<
    ComponentProps<T> & DataAttributes & { unstyled?: boolean }
  > => {
    const StyledComponent = forwardRef(
      (
        {
          unstyled: unstyledProp,
          ...props
        }: ComponentProps<T> & { unstyled?: boolean },
        ref
      ) => {
        const { slotStyles, classes, unstyled } = useContext(
          StyleContext
        ) as any;
        const el = createElement(Component, {
          ...defaultProps,
          ...props,
          className:
            unstyled || unstyledProp
              ? props.className
              : slotStyles?.[slot]({
                  className: cn(classes[slot], props.className),
                }),
          ref,
        });

        return el;
      }
    );
    return StyledComponent as any;
  };

  return {
    withProvider,
    withContext,
  };
};
