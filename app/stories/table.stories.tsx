import { Table } from "~/components/ui/table";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const Demo: Story = {
  render: () => {
    return (
      <Table>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Header className="w-[100px]">Invoice</Table.Header>
            <Table.Header>Status</Table.Header>
            <Table.Header>Method</Table.Header>
            <Table.Header className="text-right">Amount</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {invoices.map((invoice) => (
            <Table.Row key={invoice.invoice}>
              <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell className="text-right">
                {invoice.totalAmount}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3}>Total</Table.Cell>
            <Table.Cell className="text-right">$2,500.00</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  },
};
