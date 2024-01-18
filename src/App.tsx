import AccountsCard from "./components/AccountsCard";
import BudgetCard from "./components/BudgetCard";
import Navbar from "./components/Navbar";
import NetWorthCard from "./components/NetWorthCard";
import SpendingCard from "./components/SpendingCard";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-5/6 m-10 flex lg:flex-row flex-col">
          <div className="m-4">
            <BudgetCard />
            <SpendingCard />
          </div>
          <div className="m-4">
            <AccountsCard />
          </div>
          <div className="m-4">
            <NetWorthCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
