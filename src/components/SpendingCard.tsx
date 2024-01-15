import { Card, LineChart, Title } from "@tremor/react";
import { useState } from "react";

const chartdata2 = [
  {
    date: "Day 1",
    "2022": 100,
    "2023": 78,
  },
  {
    date: "Day 3",
    "2022": 125,
    "2023": 71,
  },
  {
    date: "Day 5",
    "2022": 125,
    "2023": 71,
  },
  {
    date: "Day 7",
    "2022": 178,
    "2023": 71,
  },
  {
    date: "Day 9",
    "2022": 200,
    "2023": 71,
  },
];

export default function SpendingCard() {
  const [value, setValue] = useState(null);

  return (
    <Card
      className="max-w-md mx-auto m-1 mt-3"
      decoration="top"
      decorationColor="teal"
    >
      <Title>Spending</Title>
      <LineChart
        className="h-72 mt-4"
        data={chartdata2}
        index="date"
        categories={["2022", "2023"]}
        colors={["neutral", "indigo"]}
        yAxisWidth={30}
        onValueChange={(v) => setValue(v)}
        connectNulls={true}
      />
    </Card>
  );
}
