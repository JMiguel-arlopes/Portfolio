import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function IconsList() {
  return (
    <ul className="flex justify-center items-center">
      <li className="flex justify-center items-center text-cyan-400 p-2 border border-cyan-400 rounded-full text-sm mr-6 transition hover:bg-cyan-400 hover:text-white hover:cursor-pointer">
        <a
          href="https://github.com/JMiguel-arlopes"
          title="Github"
          target="_blank"
          rel="noopener"
        >
          <FaGithub />
        </a>
      </li>
      <li className="flex justify-center items-center text-cyan-400 p-2 border border-cyan-400 rounded-full text-sm transition hover:bg-cyan-400 hover:text-white hover:cursor-pointer">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-miguel-a-lopes-8431b4261"
          title="LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
}
