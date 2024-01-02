import {
  AArrowDownIcon,
  AArrowUpIcon,
  ALargeSmallIcon,
  ChevronDownIcon,
  ChevronDownCircleIcon,
  CoffeeIcon,
  MailIcon,
  ActivitySquareIcon,
  ActivityIcon,
  AirplayIcon,
  AirVentIcon,
  AlarmClockCheckIcon,
  AlarmSmokeIcon,
  AlertCircleIcon,
  ArchiveXIcon,
} from "lucide-react";
import { createElement } from "react";
import { IconButton } from "~/components/ui/icon-button";
import { Story } from "./storyHelpers";

export const IconButtons = () => {
  // eslint-disable-next-line react/jsx-key
  return (
    <Story title="icon buttons">
      {[
        CoffeeIcon,
        ChevronDownIcon,
        ChevronDownCircleIcon,
        MailIcon,
        AArrowDownIcon,
        AArrowUpIcon,
        ALargeSmallIcon,
        ActivitySquareIcon,
        ActivityIcon,
        AirplayIcon,
        AirVentIcon,
        AlarmClockCheckIcon,
        AlarmSmokeIcon,
        AlertCircleIcon,
        ArchiveXIcon,
      ].map((icon, index) => (
        <IconButton key={index}>{createElement(icon)}</IconButton>
      ))}
    </Story>
  );
};
