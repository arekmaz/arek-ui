import { Switch, SwitchProps } from "~/components/ui/switch";
import { Story, filenameFromImportMetaUrl } from "./storyHelpers";

export const Demo = ({ label, ...props }: SwitchProps & { label: string }) => (
  <Switch defaultChecked {...props}>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>{label}</Switch.Label>
  </Switch>
);

export const Switches = () => {
  return (
    <Story
      title="switches"
      componentFilename={filenameFromImportMetaUrl(import.meta.url)?.replace(
        ".stories.tsx",
        ""
      )}
    >
      <Demo label="small" size="sm" />
      <Demo label="medium" />
      <Demo label="large" size="lg" />
    </Story>
  );
};
