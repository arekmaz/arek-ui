import type { MetaFunction } from "@remix-run/node";
import { Center, VStack } from "~/components/ui/stack";
import { Accordions } from "~/demo/accordion.stories";
import { Alerts } from "~/demo/alert.stories";
import { Avatars } from "~/demo/avatar.stories";
import { Badges } from "~/demo/badge.stories";
import { Buttons } from "~/demo/button.stories";
import { Calendars } from "~/demo/calendar.stories";
import { Cards } from "~/demo/card.stories";
import { Checkboxes } from "~/demo/checkbox.stories";
import { Collapsibles } from "~/demo/collapsible.stories";
import { Comboboxes } from "~/demo/combobox.stories";
import { ContextMenus } from "~/demo/contextMenu.stories";
import { DatePickers } from "~/demo/datePicker.stories";
import { Dialogs } from "~/demo/dialog.stories";
import { Drawers } from "~/demo/drawer.stories";
import { HoverCards } from "~/demo/hoverCard.stories";
import { IconButtons } from "~/demo/iconButton.stories";
import { Inputs } from "~/demo/input.stories";
import { InputGroups } from "~/demo/inputGroup.stories";
import { Menus } from "~/demo/menu.stories";
import { Paginations } from "~/demo/pagination.stories";
import { Popovers } from "~/demo/popover.stories";
import { RadioGroups } from "~/demo/radioGroup.stories";
import { ScrollAreas } from "~/demo/scroll-area.stories";
import { Selects } from "~/demo/select.stories";
import { Separators } from "~/demo/separator.stories";
import { Skeletons } from "~/demo/skeleton.stories";
import { TagsInputs } from "~/demo/tagsInput.stories";
import { ToggleGroups } from "~/demo/toggleGroup.stories";

export const meta: MetaFunction = () => {
  return [
    { title: "Arek UI - Ark UI + TailwindCSS" },
    {
      name: "description",
      content: "Arek UI - Ark UI + TailwindCSS Component collection",
    },
  ];
};

export default function Index() {
  return (
    <Center className="w-screen flex-1">
      <VStack
        spacing={5}
        className="md:flex-row flex-wrap pb-20 justify-center pt-5 px-5"
      >
        <Buttons />
        <Checkboxes />
        <Comboboxes />
        <Selects />
        <DatePickers />
        <IconButtons />
        <Inputs />
        <InputGroups />
        <Accordions />
        <Alerts />
        <Dialogs />
        <Avatars />
        <Badges />
        <Calendars />
        <Cards />
        <Collapsibles />
        <TagsInputs />
        <ContextMenus />
        <HoverCards />
        <Drawers />
        <Menus />
        <Paginations />
        <Popovers />
        <RadioGroups />
        <ScrollAreas />
        <Separators />
        <Skeletons />
        <ToggleGroups />
      </VStack>
    </Center>
  );
}
