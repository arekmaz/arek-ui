import { ComponentProps } from "react";
import { RadioGroup } from "~/components/ui/radio-group";
import { Story } from "./storyHelpers";

export const Demo = (props: ComponentProps<typeof RadioGroup>) => {
  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte", disabled: true },
    { id: "vue", label: "Vue" },
  ];
  return (
    <RadioGroup.Root defaultValue="react" {...props}>
      <RadioGroup.Indicator />
      {options.map((option) => (
        <RadioGroup.Item
          key={option.id}
          value={option.id}
          disabled={option.disabled}
        >
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};

export const RadioGroups = () => {
  return (
    <Story title="radio groups" componentFilename="radio-group">
      <Demo />
      <Demo orientation="horizontal" />
    </Story>
  );
};
