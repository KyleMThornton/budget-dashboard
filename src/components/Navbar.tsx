import EditAccountsDrawer from "./EditAccountsDrawer";

export default function Navbar() {
  return (
    <div className="w-screen bg-teal-500">
      <nav className="w-screen flex p-5 items-center text-white justify-between container md:px-20">
        <EditAccountsDrawer />
        <span className="font-semibold text-xl tracking-tight">
          Budget Dashboard
        </span>
      </nav>
    </div>
  );
}
