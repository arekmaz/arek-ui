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
import { VStack } from "~/components/ui/stack";

export const IconButtons = () => {
  // eslint-disable-next-line react/jsx-key
  return (
    <VStack spacing={3} className="border border-black rounded-md p-5">
      <p>ICON BUTTONS:</p>
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
    </VStack>
  );
};
