import AccountsCard from "./components/AccountsCard";
import BudgetCard from "./components/BudgetCard";
import Navbar from "./components/Navbar";
import NetWorthCard from "./components/NetWorthCard";
import SpendingCard from "./components/SpendingCard";

function App() {
  return (
    <>
      <Navbar />
      <AccountsCard />
      <BudgetCard />
      <NetWorthCard />
      <SpendingCard />
    </>
  );
}

export default App;
