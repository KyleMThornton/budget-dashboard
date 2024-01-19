import { Card, Title, Text, LineChart } from "@tremor/react";
import { useState } from "react";

interface NetWorthCardProps {
  netWorth2023: number;
}

export default function NetWorthCard(NetWorthCardProps: NetWorthCardProps) {
  const netWorthData = [
    {
      year: 2020,
      "Net Worth": 100000,
    },
    {
      year: 2021,
      "Net Worth": 125000,
    },
    {
      year: 2022,
      "Net Worth": 100000,
    },
    {
      year: 2023,
      "Net Worth": NetWorthCardProps.netWorth2023,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(null);

  return (
    <>
      <Card
        className="max-w-lg mx-auto m-1"
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
        />
      </Card>
    </>
  );
}
