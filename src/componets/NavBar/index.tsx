import { FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { IoCodeSlash } from "react-icons/io5";

export function NavBar() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTopPosition = elementRef.current.offsetTop + 96;
        setIsAtTop(window.scrollY <= elementTopPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        isAtTop
          ? "w-full flex justify-between items-center h-28 fixed left-0 top-0 px-48"
          : "w-full flex justify-between items-center h-28 fixed left-0 top-0 px-48 bg-gradient-to-b from-cyan-200/25 via-white/10 to-transparent backdrop-blur-sm z-50"
      }
      ref={elementRef}
    >
      <h3 className="flex flex-row text-2xl min-w-max text-white font-bold tracking-wide capitalize">
        João<span className="text-cyan-400">.</span>
      </h3>
      <ul className="flex justify-center items-center gap-8">
        <li className="text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          <a
            href="#home"
            className=" flex justify-center items-center gap-1.5 w-full"
          >
            <IoHome />
            Home
          </a>
        </li>
        <li className="f text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          <a
            href="#aboutme"
            className=" flex justify-center items-center gap-1.5 w-full"
          >
            <FaRegUser />
            Sobre Mim
          </a>
        </li>
        <li className="text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          <a
            href="#skills"
            className=" flex justify-center items-center gap-1.5 w-full"
          >
            <IoCodeSlash />
            Skills
          </a>
        </li>

        <li className="text-white transition hover:cursor-pointer hover:text-cyan-400 hover:border-b hover:border-cyan-400">
          <a
            href="#projects"
            className=" flex justify-center items-center gap-1.5 w-full"
          >
            <MdWork />
            Projetos
          </a>
        </li>
      </ul>
    </nav>
  );
}
