import { Checkbox as C, CheckboxProps as CP } from "@ark-ui/react";
import { ComponentProps, useMemo } from "react";
import { VariantProps, tv } from "tailwind-variants";

const checkbox = tv({
  slots: {
    root: "flex items-center gap-2 cursor-pointer group/checkbox",
    label: "margin-start-2",
    control: "border border-black rounded-sm size-5 relative",
    controlCheckedIcon:
      "transition-opacity absolute top-0 opacity-0 group-data-[state=checked]/checkbox:opacity-100",
    controlIndeterminateIcon:
      "transition-opacity absolute top-0 opacity-0 group-data-[state=indeterminate]/checkbox:opacity-100",
  },
  variants: {
    size: { default: "", sm: "" },
  },
});

console.log({ checkbox, k: checkbox.variantKeys });

type CheckboxProps = CP &
  VariantProps<typeof checkbox> & {
    classes?: { [key in keyof ReturnType<typeof checkbox>]?: string };
  };

const CheckIcon = (props: ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = (props: ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.91675 7H11.0834"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Checkbox = ({ classes, size, ...rootProps }: CheckboxProps) => {
  const { control, label, root, controlCheckedIcon, controlIndeterminateIcon } =
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo(() => checkbox({ size }), [size]);

  return (
    <C.Root {...rootProps} className={root({ className: classes?.root })}>
      <C.Control className={control({ className: classes?.control })}>
        <CheckIcon
          className={controlCheckedIcon({
            className: classes?.controlCheckedIcon,
          })}
        />
        <MinusIcon
          className={controlIndeterminateIcon({
            className: classes?.controlIndeterminateIcon,
          })}
        />
      </C.Control>
      <C.Label className={label({ className: classes?.label })}>
        Checkboxxx
      </C.Label>
    </C.Root>
  );
};
