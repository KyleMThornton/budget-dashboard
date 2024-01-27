import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "Mortgage",
    expense: 2500,
  },
  {
    name: "Utilities",
    expense: 400,
  },
  {
    name: "Food & Dining",
    expense: 934,
  },
  {
    name: "Entertainment",
    expense: 360,
  },
  {
    name: "Interest on Loans",
    expense: 220,
  },
  {
    name: "Shopping",
    expense: 540,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function SpendingPieChart() {
  return (
    <Card
      className="max-w-lg mx-auto m-1 mt-3"
      decoration="top"
      decorationColor="teal"
    >
      <Title>Spending Categories</Title>
      <DonutChart
        className="mt-6"
        data={cities}
        category="expense"
        index="name"
        valueFormatter={valueFormatter}
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
    </Card>
  );
}
