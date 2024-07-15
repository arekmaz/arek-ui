import { tv } from "tailwind-variants";
import { createStyleContext } from "../utils/create-styled-context";
import { DatePicker as D } from "@ark-ui/react";

const datePickerStyles = tv({
  slots: {
    root: "flex flex-col gap-1.5",
    content: [
      "bg-background",
      "rounded-sm",
      "shadow-lg",
      "flex",
      "_hidden:hidden",
      "flex-col",
      "gap-3",
      "p-4",
      "w-[344px]",
      "z-dropdown",
    ],
    control: ["flex", "gap-2"],
    label: ["text-foreground", "font-medium", "text-sm"],
    tableHeader: ["text-muted-foreground", "font-semibold", "h-10", "text-sm"],
    viewControl: ["flex", "gap-2", "justify-between"],
    table: ["w-full", "border-separate", "border-spacing-1", "-m-1"],
    tableCell: "text-center",
    tableCellTrigger: [
      "w-full",
      "data-[in-range]:bg-foreground data-[in-range]:text-background",
      "data-[today]:border data-[today]:border-primary",
      "hover:bg-foreground hover:text-background",
      "data-[selected]:bg-foreground data-[selected]:text-background",
      "_disabled:text-muted-foreground hover:_disabled:bg-transparent",
    ],
    clearTrigger: "",
    input: "",
    monthSelect: "",
    nextTrigger: "",
    positioner: "",
    prevTrigger: "",
    rangeText: "",
    tableBody: "",
    tableHead: "",
    tableRow: "",
    trigger: [],
    view: "",
    viewTrigger: "",
    yearSelect: "",
  },
});

const { withContext, withProvider } = createStyleContext(datePickerStyles);

const Root = withProvider(D.Root, "root");
const ClearTrigger = withContext(D.ClearTrigger, "clearTrigger");
const Content = withContext(D.Content, "content");
const Control = withContext(D.Control, "control");
const Input = withContext(D.Input, "input");
const Label = withContext(D.Label, "label");
const MonthSelect = withContext(D.MonthSelect, "monthSelect");
const NextTrigger = withContext(D.NextTrigger, "nextTrigger");
const Positioner = withContext(D.Positioner, "positioner");
const PrevTrigger = withContext(D.PrevTrigger, "prevTrigger");
const RangeText = withContext(D.RangeText, "rangeText");
const Table = withContext(D.Table, "table");
const TableBody = withContext(D.TableBody, "tableBody");
const TableCell = withContext(D.TableCell, "tableCell");
const TableCellTrigger = withContext(D.TableCellTrigger, "tableCellTrigger");
const TableHead = withContext(D.TableHead, "tableHead");
const TableHeader = withContext(D.TableHeader, "tableHeader");
const TableRow = withContext(D.TableRow, "tableRow");
const Trigger = withContext(D.Trigger, "trigger");
const View = withContext(D.View, "view");
const ViewControl = withContext(D.ViewControl, "viewControl");
const ViewTrigger = withContext(D.ViewTrigger, "viewTrigger");
const YearSelect = withContext(D.YearSelect, "yearSelect");

export const DatePicker = Object.assign(Root, {
  ...D,
  Root,
  ClearTrigger,
  Content,
  Control,
  Input,
  Label,
  MonthSelect,
  NextTrigger,
  Positioner,
  PrevTrigger,
  RangeText,
  Table,
  TableCell,
  TableCellTrigger,
  TableHeader,
  ViewControl,
  TableBody,
  TableHead,
  TableRow,
  Trigger,
  View,
  ViewTrigger,
  YearSelect,
});
