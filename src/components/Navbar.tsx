// import { IoMdMenu } from "react-icons/io";
import EditAccountsDrawer from "./EditAccountsDrawer";

export default function Navbar() {
  return (
    <nav className="w-screen bg-teal-500 flex p-5 items-center text-white justify-between">
      <EditAccountsDrawer />
      <span className="font-semibold text-xl tracking-tight">
        Budget Dashboard
      </span>
    </nav>
  );
}
