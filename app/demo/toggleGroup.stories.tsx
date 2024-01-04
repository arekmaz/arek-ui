import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { ComponentProps } from "react";
import { Stack } from "~/components/ui/stack";
import { ToggleGroup } from "~/components/ui/toggle-group";
import { cn } from "~/components/utils/cn";
import { Story } from "./storyHelpers";
import { Card } from "~/components/ui/card";

export const Demo = (props: ComponentProps<typeof ToggleGroup>) => {
  return (
    <Stack
      direction={props.orientation === "horizontal" ? "row" : "column"}
      spacing={3}
      className={cn("rounded-md")}
    >
      {props.variant ?? "outline"}
      <ToggleGroup.Root multiple {...props}>
        <ToggleGroup.Item value="bold" aria-label="Toggle Bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle Italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="underline" aria-label="Toggle Underline">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <ToggleGroup.Root defaultValue={["left"]} {...props}>
        <ToggleGroup.Item value="left" aria-label="Align Left">
          <AlignLeftIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center" aria-label="Align Center">
          <AlignCenterIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" aria-label="Align Right">
          <AlignRightIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="justify" aria-label="Align Justify">
          <AlignJustifyIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </Stack>
  );
};

export const ToggleGroups = () => {
  return (
    <Story title="toggle groups" classes={{ content: "md:flex-row" }}>
      <Card>
        <Card.Header>
          <Card.Title>Small</Card.Title>
        </Card.Header>
        <Card.Content asChild>
          <Stack spacing={3}>
            <Demo size="sm" />
            <Demo variant="ghost" size="sm" />
          </Stack>
        </Card.Content>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Medium</Card.Title>
        </Card.Header>
        <Card.Content asChild>
          <Stack spacing={3}>
            <Demo size="md" />
            <Demo variant="ghost" size="md" />
          </Stack>
        </Card.Content>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Large</Card.Title>
        </Card.Header>
        <Card.Content asChild>
          <Stack spacing={3}>
            <Demo size="lg" />
            <Demo variant="ghost" size="lg" />
          </Stack>
        </Card.Content>
      </Card>
    </Story>
  );
};
