import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
  Subtitle,
} from "@tremor/react";

export default function AccountsCard() {
  let checkingBalance = 1000000;
  let savingsBalance = 1000000;
  let creditCard1Balance = 1000000;
  let creditCard2Balance = 1000000;
  let mortgageBalance = 1000000;
  let investmentBalance = 1000000;
  let retirementBalance = 1000000;
  let homeValue = 1000000;
  let personalLoanBalance = 1000000;

  return (
    <Card
      className="max-w-md mx-auto m-1"
      decoration="top"
      decorationColor="teal"
    >
      <Title>Accounts</Title>
      <Subtitle className="mt-3">Cash</Subtitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Balance</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Checking</Text>
            </TableCell>
            <TableCell>$ {checkingBalance.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Savings</Text>
            </TableCell>
            <TableCell>$ {savingsBalance.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
        <Subtitle className="mt-3">Credit</Subtitle>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Balance</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Credit Card 1</Text>
            </TableCell>
            <TableCell>$ {creditCard1Balance.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Credit Card 2</Text>
            </TableCell>
            <TableCell>$ {creditCard2Balance.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
        <Subtitle className="mt-3">Investments</Subtitle>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Balance</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Investment Account</Text>
            </TableCell>
            <TableCell>$ {investmentBalance.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Retirement Account</Text>
            </TableCell>
            <TableCell>$ {retirementBalance.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">House</Text>
            </TableCell>
            <TableCell>$ {homeValue.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
        <Subtitle className="mt-3">Loans</Subtitle>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Balance</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Mortgage</Text>
            </TableCell>
            <TableCell>$ {mortgageBalance.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-100">
            <TableCell>
              <Text className="flex items-center">Personal Loan</Text>
            </TableCell>
            <TableCell>$ {personalLoanBalance.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
