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

export default function EditAccountsDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [checkingBalance, setcheckingBalance] = useState(100);
  // const [savingsBalance, setsavingsBalance] = useState(100);
  // const [creditCard1Balance, setcreditCard1Balance] = useState(100);
  // const [creditCard2Balance, setcreditCard2Balance] = useState(100);
  // const [mortgageBalance, setmortgageBalance] = useState(100);
  // const [investmentBalance, setinvestmentBalance] = useState(100);
  // const [retirementBalance, setretirementBalance] = useState(100);
  // const [homeValue, sethomeValue] = useState(100);
  // const [personalLoanBalance, setpersonalLoanBalance] = useState(100);
  // const [incomeBudgeted, setincomeBudgeted] = useState(100);
  // const [incomeActual, setincomeActual] = useState(100);
  // const [expensesBudgeted, setexpensesBudgeted] = useState(100);
  // const [expensesActual, setexpensesActual] = useState(100);
  // const btnRef = React.useRef();

  //   const handleAccountUpdates = () => {};

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
              <Input placeholder="Checking" id="checking" />
              <FormLabel>Savings</FormLabel>
              <Input placeholder="Savings" id="savings" />
              <FormLabel>Credit Card 1</FormLabel>
              <Input placeholder="Credit Card 1" id="cc1" />
              <FormLabel>Credit Card 2</FormLabel>
              <Input placeholder="Credit Card 2" id="cc2" />
              <FormLabel>Mortgage</FormLabel>
              <Input placeholder="Mortgage" id="mortgage" />
              <FormLabel>Investment</FormLabel>
              <Input placeholder="Investment" id="invesment" />
              <FormLabel>Retirement</FormLabel>
              <Input placeholder="Retirement" id="retirement" />
              <FormLabel>Home Value</FormLabel>
              <Input placeholder="Home Value" id="home" />
              <FormLabel>Personal Loan</FormLabel>
              <Input placeholder="Personal Loan" id="loan" />
              <FormLabel>Income - Budgeted</FormLabel>
              <Input placeholder="Personal Loan" id="incomeBudget" />
              <FormLabel>Income - Actual</FormLabel>
              <Input placeholder="Personal Loan" id="incomeActual" />
              <FormLabel>Expenses - Budgeted</FormLabel>
              <Input placeholder="Personal Loan" id="per" />
              <FormLabel>Expenses - Actual</FormLabel>
              <Input placeholder="Personal Loan" />
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
