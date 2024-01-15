import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <IoMdMenu className="text-3xl mt-1 mr-2 cursor-pointer" />
        <span className="font-semibold text-xl tracking-tight">
          Budget Dashboard
        </span>
      </div>
    </nav>
  );
}
