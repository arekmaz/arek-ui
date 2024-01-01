// forked from https://github.com/chakra-ui/chakra-ui/blob/main/packages/legacy/react-utils/src/context.ts
import {
  createContext as createReactContext,
  useContext as useReactContext,
} from "react";

export interface CreateContextOptions {
  /**
   * Error message to throw if the context is `undefined`
   */
  errorMessage?: string;
  /**
   * The display name of the context
   */
  name?: string;
}

export type CreateContextReturn<T> = [
  React.Provider<T>,
  () => T,
  React.Context<T>
];

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext<ContextType>(options: CreateContextOptions = {}) {
  const defaultValue = {};

  const {
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name,
  } = options;

  const Context = createReactContext<ContextType>(defaultValue as any);

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);

    if (context === defaultValue) {
      const error = new Error(errorMessage);
      error.name = `ContextError(${name ?? "-"})`;
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
}
