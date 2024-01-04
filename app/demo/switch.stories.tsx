import type { SwitchProps } from "@ark-ui/react";
import { Switch } from "~/components/ui/switch";
import { Story } from "./storyHelpers";

export const Demo = (props: SwitchProps) => (
  <Switch defaultChecked {...props}>
    Label
  </Switch>
);

export const Switches = () => {
  return (
    <Story title="switches">
      <Demo />
    </Story>
  );
};
