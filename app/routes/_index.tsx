import { Portal } from "@ark-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { ChevronsUpDownIcon } from "lucide-react";
import { matchSorter } from "match-sorter";
import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { Combobox } from "~/components/ui/combobox";
import { InputGroup } from "~/components/ui/input-group";
import { VStack } from "~/components/ui/stack";
import { cn } from "~/components/utils/cn";
import { Accordions } from "~/demo/accordion.stories";
import { Alerts } from "~/demo/alert.stories";
import { Avatars } from "~/demo/avatar.stories";
import { Badges } from "~/demo/badge.stories";
import { TreeViews } from "~/demo/tree-view.stories";
import { Progresses } from "~/demo/progress.stories";
import { Buttons } from "~/demo/button.stories";
import { Calendars } from "~/demo/calendar.stories";
import { Forms } from "~/demo/form.stories";
import { Cards } from "~/demo/card.stories";
import { Checkboxes } from "~/demo/checkbox.stories";
import { Collapsibles } from "~/demo/collapsible.stories";
import { Comboboxes } from "~/demo/combobox.stories";
import { ContextMenus } from "~/demo/context-menu.stories";
import { DatePickers } from "~/demo/date-picker.stories";
import { Dialogs } from "~/demo/dialog.stories";
import { Drawers } from "~/demo/drawer.stories";
import { HoverCards } from "~/demo/hover-card.stories";
import { IconButtons } from "~/demo/icon-button.stories";
import { InputGroups } from "~/demo/input-group.stories";
import { Inputs } from "~/demo/input.stories";
import { Menus } from "~/demo/menu.stories";
import { Paginations } from "~/demo/pagination.stories";
import { Popovers } from "~/demo/popover.stories";
import { RadioGroups } from "~/demo/radio-group.stories";
import { ScrollAreas } from "~/demo/scroll-area.stories";
import { Selects } from "~/demo/select.stories";
import { Separators } from "~/demo/separator.stories";
import { Skeletons } from "~/demo/skeleton.stories";
import { Sliders } from "~/demo/slider.stories";
import { Spinners } from "~/demo/spinner.stories";
import { Switches } from "~/demo/switch.stories";
import { Tables } from "~/demo/table.stories";
import { TabsStories } from "~/demo/tabs.stories";
import { TagsInputs } from "~/demo/tags-input.stories";
import { Textareas } from "~/demo/textarea.stories";
import { Toasts } from "~/demo/toast.stories";
import { ToggleGroups } from "~/demo/toggle-group.stories";
import { Tooltips } from "~/demo/tooltip.stories";
import { Highlights } from "~/demo/highlight.stories";
import { useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Arek UI React - Ark UI + TailwindCSS" },
    {
      name: "description",
      content: "Arek UI - Ark UI + TailwindCSS Component collection",
    },
  ];
};

const components = [
  ["Button", Buttons],
  ["Checkbox", Checkboxes],
  ["Combobox", Comboboxes],
  ["Select", Selects],
  ["Date Picker", DatePickers],
  ["Icon Button", IconButtons],
  ["Input", Inputs],
  ["Input Group", InputGroups],
  ["Accordion", Accordions],
  ["Alert", Alerts],
  ["Dialog", Dialogs],
  ["Avatar", Avatars],
  ["Badge", Badges],
  ["Tree View", TreeViews],
  ["Progress", Progresses],
  ["Calendar", Calendars],
  ["Card", Cards],
  ["Collapsible", Collapsibles],
  ["Tags Input", TagsInputs],
  ["Context Menu", ContextMenus],
  ["Hover Card", HoverCards],
  ["Drawer", Drawers],
  ["Menu", Menus],
  ["Pagination", Paginations],
  ["Popover", Popovers],
  ["Radio Group", RadioGroups],
  ["Scroll Area", ScrollAreas],
  ["Separator", Separators],
  ["Skeleton", Skeletons],
  ["Toggle Group", ToggleGroups],
  ["Switch", Switches],
  ["Textarea", Textareas],
  ["Tabs", TabsStories],
  ["Tooltip", Tooltips],
  ["Toast", Toasts],
  ["Slider", Sliders],
  ["Spinner", Spinners],
  ["Hightlight", Highlights],
  ["Table", Tables],
  ["Form", Forms],
] as Array<[string, () => ReactElement]>;

const storyComponents = components.sort(([a], [b]) =>
  a === b ? 0 : a > b ? 1 : -1
);

export default function Index() {
  const [, startTransition] = useTransition();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("q") ?? "");

  const [filteredPairs, setFilteredPairs] = useState(() => {
    const matches = matchSorter(storyComponents, inputValue, {
      keys: ["0"],
    });
    return matches;
  });

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    setTimeout(() => {
      setSearchParams((p) => ({ ...p, q: inputValue }));
      startTransition(() => {
        const matches = matchSorter(storyComponents, inputValue, {
          keys: ["0"],
        });
        setFilteredPairs(matches.length ? matches : storyComponents);
      });
    }, 0);
  }, [inputValue, setSearchParams]);

  return (
    <VStack className="w-screen flex-1 py-5" spacing={5}>
      <p className="text-4xl text-center font-semibold">Arek UI - React</p>
      <div>
        <Combobox
          items={filteredPairs.map(([name]) => name)}
          inputValue={inputValue}
          onInputValueChange={(value) => {
            setInputValue(value.inputValue);
          }}
          onValueChange={(value) => {
            setInputValue(value.value[0]);
          }}
          allowCustomValue
          openOnClick
          autoFocus
        >
          <Combobox.Control>
            <InputGroup scale="2xl">
              <Combobox.Input placeholder="select a framework" asChild unstyled>
                <InputGroup.Input
                  // @ts-expect-error union too complex
                  ref={inputRef}
                  onFocus={() => {
                    inputRef.current.select();
                  }}
                />
              </Combobox.Input>
              <Combobox.Trigger
                asChild
                unstyled
                className={cn(
                  "text-muted-foreground",
                  "size-4",
                  "cursor-pointer",
                  "_disabled:cursor-not-allowed",
                  "_disabled:opacity-50"
                )}
              >
                <InputGroup.RightAddon>
                  <ChevronsUpDownIcon />
                </InputGroup.RightAddon>
              </Combobox.Trigger>
            </InputGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content className="max-h-80 overflow-scroll">
                <Combobox.ItemGroup>
                  <Combobox.ItemGroupLabel>Components</Combobox.ItemGroupLabel>
                  {filteredPairs.map(([name]) => (
                    <Combobox.Item key={name} item={name}>
                      <Combobox.ItemText>{name}</Combobox.ItemText>
                      <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                    </Combobox.Item>
                  ))}
                </Combobox.ItemGroup>
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox>
      </div>
      <VStack
        spacing={5}
        className="md:flex-row flex-wrap pb-20 justify-center pt-5 px-5"
      >
        {filteredPairs.map(([name, Comp]) => {
          return <Comp key={name} />;
        })}
      </VStack>
    </VStack>
  );
}
