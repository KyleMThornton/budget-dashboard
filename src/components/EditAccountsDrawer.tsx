import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";

interface EditAccountsDrawerProps {
  checkingBalance: number;
  setCheckingBalance: (checkingBalance: number) => void;
  savingsBalance: number;
  setsavingsBalance: (savingsBalance: number) => void;
  creditCard1Balance: number;
  setcreditCard1Balance: (creditCard1Balance: number) => void;
  creditCard2Balance: number;
  setcreditCard2Balance: (creditCard2Balance: number) => void;
  mortgageBalance: number;
  setmortgageBalance: (mortgageBalance: number) => void;
  investmentBalance: number;
  setinvestmentBalance: (investmentBalance: number) => void;
  retirementBalance: number;
  setretirementBalance: (retirementBalance: number) => void;
  homeValue: number;
  sethomeValue: (homeValue: number) => void;
  personalLoanBalance: number;
  setpersonalLoanBalance: (personalLoanBalance: number) => void;
  incomeBudgeted: number;
  setincomeBudgeted: (incomeBudgeted: number) => void;
  incomeActual: number;
  setincomeActual: (incomeActual: number) => void;
  expensesBudgeted: number;
  setexpensesBudgeted: (expensesBudgeted: number) => void;
  expensesActual: number;
  setexpensesActual: (expensesActual: number) => void;
}

export default function EditAccountsDrawer({
  checkingBalance,
  setCheckingBalance,
  savingsBalance,
  setsavingsBalance,
  creditCard1Balance,
  setcreditCard1Balance,
  creditCard2Balance,
  setcreditCard2Balance,
  mortgageBalance,
  setmortgageBalance,
  investmentBalance,
  setinvestmentBalance,
  retirementBalance,
  setretirementBalance,
  homeValue,
  sethomeValue,
  personalLoanBalance,
  setpersonalLoanBalance,
  incomeBudgeted,
  setincomeBudgeted,
  incomeActual,
  setincomeActual,
  expensesBudgeted,
  setexpensesBudgeted,
  expensesActual,
  setexpensesActual,
}: EditAccountsDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [checkingInput, setCheckingInput] = useState(checkingBalance);
  const [savingsInput, setSavingsInput] = useState(savingsBalance);
  const [creditCard1Input, setCreditCard1Input] = useState(creditCard1Balance);
  const [creditCard2Input, setCreditCard2Input] = useState(creditCard2Balance);
  const [mortgageInput, setMortgageInput] = useState(mortgageBalance);
  const [investmentInput, setInvestmentInput] = useState(investmentBalance);
  const [retirementInput, setRetirementInput] = useState(retirementBalance);
  const [homeInput, setHomeInput] = useState(homeValue);
  const [personalLoanInput, setPersonalLoanInput] =
    useState(personalLoanBalance);
  const [incomeBudgetInput, setIncomeBudgetInput] = useState(incomeBudgeted);
  const [incomeActualInput, setIncomeActualInput] = useState(incomeActual);
  const [expensesBudgetInput, setExpensesBudgetInput] =
    useState(expensesBudgeted);
  const [expensesActualInput, setExpensesActualInput] =
    useState(expensesActual);

  // const btnRef = React.useRef();

  const handleButtonClick = () => {
    if (checkingInput) {
      setCheckingBalance(checkingInput);
    }
    if (savingsInput) {
      setsavingsBalance(savingsInput);
    }
    if (creditCard1Input) {
      setcreditCard1Balance(creditCard1Input);
    }
    if (creditCard2Input) {
      setcreditCard2Balance(creditCard2Input);
    }
    if (mortgageInput) {
      setmortgageBalance(mortgageInput);
    }
    if (investmentInput) {
      setinvestmentBalance(investmentInput);
    }
    if (retirementInput) {
      setretirementBalance(retirementInput);
    }
    if (homeInput) {
      sethomeValue(homeInput);
    }
    if (personalLoanInput) {
      setpersonalLoanBalance(personalLoanInput);
    }
    if (incomeBudgetInput) {
      setincomeBudgeted(incomeBudgetInput);
    }
    if (incomeActualInput) {
      setincomeActual(incomeActualInput);
    }
    if (expensesBudgetInput) {
      setexpensesBudgeted(expensesBudgetInput);
    }
    if (expensesActualInput) {
      setexpensesActual(expensesActualInput);
    }
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Edit Accounts
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Account Values</DrawerHeader>

          <DrawerBody>
            <Box>
              <FormLabel>Checking</FormLabel>
              <Input
                placeholder="Checking"
                id="checking"
                type="number"
                value={checkingInput}
                onChange={(e) => setCheckingInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Savings</FormLabel>
              <Input
                placeholder="Savings"
                id="savings"
                type="number"
                value={savingsInput}
                onChange={(e) => setSavingsInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Credit Card 1</FormLabel>
              <Input
                placeholder="Credit Card 1"
                id="cc1"
                type="number"
                value={creditCard1Input}
                onChange={(e) => setCreditCard1Input(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Credit Card 2</FormLabel>
              <Input
                placeholder="Credit Card 2"
                id="cc2"
                type="number"
                value={creditCard2Input}
                onChange={(e) => setCreditCard2Input(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Mortgage</FormLabel>
              <Input
                placeholder="Mortgage"
                id="mortgage"
                type="number"
                value={mortgageInput}
                onChange={(e) => setMortgageInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Investment</FormLabel>
              <Input
                placeholder="Investment"
                id="investment"
                type="number"
                value={investmentInput}
                onChange={(e) => setInvestmentInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Retirement</FormLabel>
              <Input
                placeholder="Retirement"
                id="retirement"
                type="number"
                value={retirementInput}
                onChange={(e) => setRetirementInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Home Value</FormLabel>
              <Input
                placeholder="Home Value"
                id="home"
                type="number"
                value={homeInput}
                onChange={(e) => setHomeInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Personal Loan</FormLabel>
              <Input
                placeholder="Personal Loan"
                id="loan"
                type="number"
                value={personalLoanInput}
                onChange={(e) => setPersonalLoanInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Income - Budgeted</FormLabel>
              <Input
                placeholder="Income - Budgeted"
                id="incomeBudget"
                type="number"
                value={incomeBudgetInput}
                onChange={(e) => setIncomeBudgetInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Income - Actual</FormLabel>
              <Input
                placeholder="Income - Actual"
                id="incomeActual"
                type="number"
                value={incomeActualInput}
                onChange={(e) => setIncomeActualInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Expenses - Budgeted</FormLabel>
              <Input
                placeholder="Expenses - Budgeted"
                id="expensesBudget"
                type="number"
                value={expensesBudgetInput}
                onChange={(e) => setExpensesBudgetInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <FormLabel>Expenses - Actual</FormLabel>
              <Input
                placeholder="Expenses - Actual"
                id="expensesActual"
                type="number"
                value={expensesActualInput}
                onChange={(e) => setExpensesActualInput(Number(e.target.value))}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleButtonClick}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
