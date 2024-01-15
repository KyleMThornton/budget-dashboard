import { Card, Title, Text, LineChart } from "@tremor/react";
import { useState } from "react";

const netWorthData = [
  {
    year: 2020,
    "Net Worth": 150000,
  },
  {
    year: 2021,
    "Net Worth": 250000,
  },
  {
    year: 2022,
    "Net Worth": 200000,
  },
  {
    year: 2023,
    "Net Worth": 300000,
  },
];

export default function NetWorthCard() {
  const [value, setValue] = useState(null);

  return (
    <>
      <Card
        className="max-w-md mx-auto m-1"
        decoration="top"
        decorationColor="teal"
      >
        <Title>Net Worth</Title>
        <Text className="mt-3">Net Worth</Text>
        <LineChart
          className="h-72 mt-4"
          data={netWorthData}
          index="year"
          categories={["Net Worth"]}
          colors={["green"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
        />
      </Card>
    </>
  );
}
