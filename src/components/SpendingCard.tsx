import { Card, LineChart, Title } from "@tremor/react";
// import { useState } from "react";

const chartdata2 = [
  {
    date: "Day 1",
    "Last Week": 100,
    "This Week": 58,
  },
  {
    date: "Day 2",
    "Last Week": 125,
    "This Week": 71,
  },
  {
    date: "Day 3",
    "Last Week": 125,
    "This Week": 71,
  },
  {
    date: "Day 4",
    "Last Week": 178,
    "This Week": 71,
  },
  {
    date: "Day 5",
    "Last Week": 200,
    "This Week": 171,
  },
  {
    date: "Day 6",
    "Last Week": 250,
    "This Week": 191,
  },
  {
    date: "Day 7",
    "Last Week": 260,
    "This Week": 271,
  },
];

export default function SpendingCard() {
  // const [value, setValue] = useState(null);

  return (
    <Card
      className="max-w-lg mx-auto m-1 mt-3"
      decoration="top"
      decorationColor="teal"
    >
      <Title>Spending</Title>
      <LineChart
        className="h-72 mt-4"
        data={chartdata2}
        index="date"
        categories={["Last Week", "This Week"]}
        colors={["neutral", "indigo"]}
        yAxisWidth={30}
        connectNulls={true}
      />
    </Card>
  );
}
