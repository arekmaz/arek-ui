import { Checkbox as C } from "@ark-ui/react";
import { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-style-context";

const checkbox = tv({
  slots: {
    root: "flex items-center gap-2 cursor-pointer group/checkbox text-foreground",
    label: "margin-start-2",
    control:
      "border border-foreground rounded-sm size-5 relative outline-none data-[focus]:ring-1 ring-foreground shrink-0",
    controlCheckedIcon:
      "transition-opacity absolute top-0 opacity-0 group-data-[state=checked]/checkbox:opacity-100",
    controlIndeterminateIcon:
      "transition-opacity absolute top-0 opacity-0 group-data-[state=indeterminate]/checkbox:opacity-100",
  },
});

const CI = (props: ComponentProps<"svg">) => (
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

const II = (props: ComponentProps<"svg">) => (
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

const { withProvider, withContext } = createStyleContext(checkbox);

const Root = withProvider(C.Root, "root");
const Control = withContext(C.Control, "control");
const Label = withContext(C.Label, "label");
const CheckIcon = withContext(CI, "controlCheckedIcon");
const IndeterminateIcon = withContext(II, "controlIndeterminateIcon");

export const Checkbox = Object.assign(Root, {
  Root,
  Control,
  CheckIcon,
  IndeterminateIcon,
  Label,
});
