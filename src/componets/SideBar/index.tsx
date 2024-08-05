import { FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdWork, MdCall } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

export function SideBar() {
  return (
    <nav className="bg-white/40 absolute left-0 top-0 py-16 px-1 rounded-tr-3xl rounded-br-3xl translate-y-1/2">
      <ul className="flex flex-col gap-6 justify-center items-center">
        <li className="p-4 rounded-full transition hover:bg-cyan-500/10 hover:cursor-pointer hover:text-cyan-400">
          <IoHome className="text-xs" />
        </li>
        <li className="p-4 rounded-full transition hover:bg-cyan-500/10 hover:cursor-pointer hover:text-cyan-400">
          <FaRegUser className="text-xs" />
        </li>
        <li className="p-4 rounded-full transition hover:bg-cyan-500/10 hover:cursor-pointer hover:text-cyan-400">
          <MdWork className="text-xs" />
        </li>
        <li className="p-4 rounded-full transition hover:bg-cyan-500/10 hover:cursor-pointer hover:text-cyan-400">
          <MdCall className="text-xs" />
        </li>
        <li className="p-4 rounded-full transition hover:bg-cyan-500/10 hover:cursor-pointer hover:text-cyan-400">
          <IoMdSearch className="text-xs" />
        </li>
      </ul>
    </nav>
  );
}
