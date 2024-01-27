import EditAccountsDrawer from "./EditAccountsDrawer";

interface NavbarProps {
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

export default function Navbar({
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
}: NavbarProps) {
  return (
    <div className="w-screen bg-teal-500">
      <nav className="w-screen flex p-5 items-center text-white justify-between container md:px-20">
        <EditAccountsDrawer
          checkingBalance={checkingBalance}
          setCheckingBalance={setCheckingBalance}
          savingsBalance={savingsBalance}
          setsavingsBalance={setsavingsBalance}
          creditCard1Balance={creditCard1Balance}
          setcreditCard1Balance={setcreditCard1Balance}
          creditCard2Balance={creditCard2Balance}
          setcreditCard2Balance={setcreditCard2Balance}
          mortgageBalance={mortgageBalance}
          setmortgageBalance={setmortgageBalance}
          investmentBalance={investmentBalance}
          setinvestmentBalance={setinvestmentBalance}
          retirementBalance={retirementBalance}
          setretirementBalance={setretirementBalance}
          homeValue={homeValue}
          sethomeValue={sethomeValue}
          personalLoanBalance={personalLoanBalance}
          setpersonalLoanBalance={setpersonalLoanBalance}
          incomeBudgeted={incomeBudgeted}
          setincomeBudgeted={setincomeBudgeted}
          incomeActual={incomeActual}
          setincomeActual={setincomeActual}
          expensesBudgeted={expensesBudgeted}
          setexpensesBudgeted={setexpensesBudgeted}
          expensesActual={expensesActual}
          setexpensesActual={setexpensesActual}
        />
        <span className="font-semibold text-xl tracking-tight">
          Budget Dashboard
        </span>
      </nav>
    </div>
  );
}
