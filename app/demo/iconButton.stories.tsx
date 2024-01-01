import {
  AArrowDown,
  AArrowDownIcon,
  AArrowUp,
  AArrowUpIcon,
  ALargeSmall,
  ALargeSmallIcon,
  ChevronDown,
  ChevronDownCircle,
  CoffeeIcon,
  Mail,
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
        ChevronDown,
        ChevronDownCircle,
        Mail,
        AArrowDown,
        AArrowDownIcon,
        AArrowUp,
        AArrowUpIcon,
        ALargeSmall,
        ALargeSmallIcon,
      ].map((icon, index) => (
        <IconButton key={index}>{createElement(icon)}</IconButton>
      ))}
    </Story>
  );
};
