// import { FaRegUser } from "react-icons/fa";
// import { IoHome } from "react-icons/io5";
// import { MdWork, MdCall } from "react-icons/md";
// import { IoMdSearch } from "react-icons/io";

export function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center h-28 absolute left-0 top-0 px-48">
      <h3 className="flex flex-row text-2xl min-w-max text-white font-bold tracking-wide capitalize">
        João<span className="text-cyan-400">.</span>
      </h3>
      <ul className="flex justify-center items-center gap-8">
        <li className="flex justify-center items-center gap-1 text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          {/* <IoHome /> */}
          Home
        </li>
        <li className="flex justify-center items-center gap-1 text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          {/* <FaRegUser /> */}
          Sobre Mim
        </li>
        <li className="flex justify-center items-center gap-1 text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          {/* <MdWork /> */}
          Trabalhos
        </li>
        <li className="flex justify-center items-center gap-1 text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          {/* <MdCall /> */}
          Contato
        </li>
        <li className="flex justify-center items-center gap-1 text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          {/* <IoMdSearch /> */}
          Procurar
        </li>
      </ul>
    </nav>
  );
}
