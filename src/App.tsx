import { useState, useEffect } from "react";
import AccountsCard from "./components/AccountsCard";
import BudgetCard from "./components/BudgetCard";
import Navbar from "./components/Navbar";
import NetWorthCard from "./components/NetWorthCard";
import SpendingCard from "./components/SpendingCard";
import Footer from "./components/Footer";

function App() {
  const [checkingBalance, setcheckingBalance] = useState(7500);
  const [savingsBalance, setsavingsBalance] = useState(12500);
  const [creditCard1Balance, setcreditCard1Balance] = useState(1200);
  const [creditCard2Balance, setcreditCard2Balance] = useState(750);
  const [mortgageBalance, setmortgageBalance] = useState(250000);
  const [investmentBalance, setinvestmentBalance] = useState(75000);
  const [retirementBalance, setretirementBalance] = useState(88000);
  const [homeValue, sethomeValue] = useState(352000);
  const [personalLoanBalance, setpersonalLoanBalance] = useState(7250);
  const [incomeBudgeted, setincomeBudgeted] = useState(79000);
  const [incomeActual, setincomeActual] = useState(77000);
  const [expensesBudgeted, setexpensesBudgeted] = useState(74000);
  const [expensesActual, setexpensesActual] = useState(58000);
  const [netWorth2023, setnetWorth2023] = useState(150000);

  useEffect(() => {
    const netWorth =
      checkingBalance +
      savingsBalance -
      creditCard1Balance -
      creditCard2Balance -
      mortgageBalance +
      investmentBalance +
      retirementBalance +
      homeValue -
      personalLoanBalance;
    setnetWorth2023(netWorth);
  }, [
    checkingBalance,
    savingsBalance,
    creditCard1Balance,
    creditCard2Balance,
    mortgageBalance,
    investmentBalance,
    retirementBalance,
    homeValue,
    personalLoanBalance,
  ]);

  return (
    <main className="bg-slate-100 flex flex-col items-center min-h-screen">
      <Navbar
        checkingBalance={checkingBalance}
        setCheckingBalance={setcheckingBalance}
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
      <span className="flex-grow"></span>
      <Footer />
    </main>
  );
}

export default App;
