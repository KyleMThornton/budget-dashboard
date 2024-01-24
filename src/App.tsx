import { useState } from "react";
import AccountsCard from "./components/AccountsCard";
import BudgetCard from "./components/BudgetCard";
import Navbar from "./components/Navbar";
import NetWorthCard from "./components/NetWorthCard";
import SpendingCard from "./components/SpendingCard";

function App() {
  const [checkingBalance, setcheckingBalance] = useState(100);
  const [savingsBalance, setsavingsBalance] = useState(100);
  const [creditCard1Balance, setcreditCard1Balance] = useState(100);
  const [creditCard2Balance, setcreditCard2Balance] = useState(100);
  const [mortgageBalance, setmortgageBalance] = useState(100);
  const [investmentBalance, setinvestmentBalance] = useState(100);
  const [retirementBalance, setretirementBalance] = useState(100);
  const [homeValue, sethomeValue] = useState(100);
  const [personalLoanBalance, setpersonalLoanBalance] = useState(100);
  const [incomeBudgeted, setincomeBudgeted] = useState(100);
  const [incomeActual, setincomeActual] = useState(100);
  const [expensesBudgeted, setexpensesBudgeted] = useState(100);
  const [expensesActual, setexpensesActual] = useState(100);
  const [netWorth2023, setnetWorth2023] = useState(150000);

  const handleAccountUpdates = () => {
    setcheckingBalance(100);
    setsavingsBalance(100);
    setcreditCard1Balance(100);
    setcreditCard2Balance(100);
    setmortgageBalance(100);
    setinvestmentBalance(100);
    setretirementBalance(100);
    sethomeValue(100);
    setpersonalLoanBalance(100);
    setincomeBudgeted(100);
    setincomeActual(100);
    setexpensesBudgeted(100);
    setexpensesActual(100);
    setnetWorth2023(150000);
  };

  return (
    <main className="bg-slate-100 flex flex-col items-center">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="m-50 flex lg:flex-row flex-col">
          <div className="m-4">
            <BudgetCard
              incomeBudgeted={incomeBudgeted}
              incomeActual={incomeActual}
              expensesBudgeted={expensesBudgeted}
              expensesActual={expensesActual}
            />
            <SpendingCard />
          </div>
          <div className="m-4">
            <AccountsCard
              checkingBalance={checkingBalance}
              savingsBalance={savingsBalance}
              creditCard1Balance={creditCard1Balance}
              creditCard2Balance={creditCard2Balance}
              mortgageBalance={mortgageBalance}
              investmentBalance={investmentBalance}
              retirementBalance={retirementBalance}
              homeValue={homeValue}
              personalLoanBalance={personalLoanBalance}
            />
          </div>
          <div className="m-4">
            <NetWorthCard netWorth2023={netWorth2023} />
          </div>
        </div>
      </div>
      <button
        onClick={handleAccountUpdates}
        className="opacity-0 cursor-default"
      >
        Update Accounts
      </button>
    </main>
  );
}

export default App;
