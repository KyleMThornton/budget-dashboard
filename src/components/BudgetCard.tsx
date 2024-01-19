import { Card, Metric, Text, ProgressBar, Title, Flex } from "@tremor/react";

interface BudgetCardProps {
  incomeBudgeted: number;
  incomeActual: number;
  expensesBudgeted: number;
  expensesActual: number;
}

export default function BudgetCard(BudgetCardProps: BudgetCardProps) {
  const incomeBudgeted = BudgetCardProps.incomeBudgeted;
  const incomeActual = BudgetCardProps.incomeActual;
  const expensesBudgeted = BudgetCardProps.expensesBudgeted;
  const expensesActual = BudgetCardProps.expensesActual;

  return (
    <Card
      className="max-w-lg mx-auto m-1"
      decoration="top"
      decorationColor="teal"
    >
      <Title>Budget</Title>
      <Text className="mt-3">Income</Text>
      <Flex className="items-end">
        <Metric className="mt-2">$ {incomeActual.toLocaleString()}</Metric>
        <Text>Budgeted: $ {incomeBudgeted.toLocaleString()}</Text>
      </Flex>
      <ProgressBar
        value={(incomeActual / incomeBudgeted) * 100}
        className="mt-3"
        color="green"
      />
      <Text className="mt-3">Expenses</Text>
      <Flex className="items-end">
        <Metric className="mt-2">$ {expensesActual.toLocaleString()}</Metric>
        <Text>Budgeted: $ {expensesBudgeted.toLocaleString()}</Text>
      </Flex>
      <ProgressBar
        value={(expensesActual / expensesBudgeted) * 100}
        className="mt-3"
        color="red"
      />
    </Card>
  );
}
