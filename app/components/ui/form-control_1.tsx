/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ark } from "@ark-ui/react";
import { pipe } from "effect";
import {
    ComponentProps,
    ElementType,
    Provider,
    ReactElement,
    forwardRef
} from "react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { createContext } from "../utils/createContext";

type FormControlContextValue = {
  isDisabled: boolean;
  id: boolean;
  isInvalid: boolean;
};

export const propsForKeys = <
  T extends Record<string | number, any>,
  Keys extends (keyof T)[]
>(
  keys: Keys,
  props: T
): { [k in Keys[number]]: T[k] } => {
  const keyProps: any = {};

  for (const [key, value] of Object.entries(props)) {
    if (keys.includes(key)) {
      keyProps[key] = value;
      continue;
    }
  }

  return keyProps;
};

const [FormControlProvider, useFormControl] =
  createContext<FormControlContextValue>();

const formControlStyles = tv({
  slots: {
    root: "",
  },
});

const { withProvider, withContext } = createStyleContext(formControlStyles);

const withSplitPropsProvider = <T extends ElementType>(
  Component: T,
  Provider: Provider<Partial<ComponentProps<T>>>,
  providerProps: (keyof ComponentProps<T>)[]
): ((props: ComponentProps<T>) => ReactElement) => {
  const WithProvider = forwardRef<T, ComponentProps<T>>(
    (props, ref) => {
      return (
        <Provider value={propsForKeys(providerProps, props)}>
          <Component ref={ref} {...(props as any)} />
        </Provider>
      );
    }
  );
  WithProvider.displayName =
    (Component as any).displayName || (Component as any).name || "WithProvider";

  return WithProvider as any;
};

type Values<T> = T[keyof T];

const mapProps = <
  const P extends { [k: string]: any },
  const M extends { [k in Extract<keyof P, string>]?: string }
>(
  props: P,
  map: M
): {
  [key in Extract<keyof M, string> as Extract<M[key], string>]: P[key];
} & Omit<P, keyof M & string> => {
  const mapped: any = {};
  for (const key of Object.keys(props)) {
    mapped[map[key] as any] = props[key];
  }

  return mapped;
};

const withMappedProps =
  <
    P extends Record<string, any>,
    M extends { [key in keyof P]: string },
    C extends ElementType<
      { [key in keyof P as M[key]]: P[key] } & Omit<P, Values<M>>
    >
  >(
    Component: C,
    map: M
  ): ((props: ReturnType<typeof mapProps<P, M>>) => ReactElement) =>
  (props) =>
    <Component {...(mapProps(props, map) as any)} />;

const Root = pipe(
  withMappedProps(ark.fieldset, {
    isInvalid: "data-invalid",
    isDisabled: "disabled",
  }),
  (a) => a,
  (c) => withProvider(c, "root"),
  (c) =>
    withSplitPropsProvider(c, FormControlProvider as any, [
      "isInvalid",
      "isDisabled",
    ])
);

export const FormControl = Object.assign(Root);
