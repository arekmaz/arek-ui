import {
  CollectionItem,
  Combobox as C,
  ComboboxProps,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { forwardRef, useMemo } from "react";
import { tv, VariantProps } from "tailwind-variants";

type ColectionItem = any;

const combobox = tv({
  slots: {
    root: "",
    label: "",
    control: "",
    input: "",
  },
  variants: {
    size: { default: "", sm: "" },
  },
});

const { root } = combobox();

export const Root = forwardRef<HTMLDivElement, ComboboxProps<CollectionItem>>(
  ({ className, ...props }, ref) => (
    <C.Root {...props} ref={ref} className={root({ className })} />
  )
);
Root.displayName = "Combobox.Root";

export const Combobox = (props: VariantProps<typeof combobox>) => {
  const items = ["React", "Solid", "Vue"];

  const { root } = useMemo(() => combobox({ ...props }), []);

  return (
    <C.Root items={[]} lazyMount unmountOnExit>
      <C.Label>Framework</C.Label>
      <C.Control>
        <C.Input />
        <C.Trigger>Open</C.Trigger>
        <C.ClearTrigger>Clear</C.ClearTrigger>
      </C.Control>
      <Portal>
        <C.Positioner>
          <C.Content>
            <C.ItemGroup id="framework">
              <C.ItemGroupLabel htmlFor="framework">
                Frameworks
              </C.ItemGroupLabel>
              {items.map((item) => (
                <C.Item key={item} item={item}>
                  <C.ItemText>{item}</C.ItemText>
                  <C.ItemIndicator>✓</C.ItemIndicator>
                </C.Item>
              ))}
            </C.ItemGroup>
          </C.Content>
        </C.Positioner>
      </Portal>
    </Root>
  );
};
