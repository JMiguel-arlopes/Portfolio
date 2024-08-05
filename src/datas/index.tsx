import { IoLogoJavascript } from "react-icons/io";
import { Project, Skill } from "../interfaces";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiBlockchaindotcom, SiDotnet, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import img from "./assets/db439986-0833-4777-8014-dfc13460eedf.jpg";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    image: <IoLogoJavascript className="w-full text-white h-full" />,
  },
  {
    name: "React",
    image: <FaReact className="w-full text-white h-full" />,
  },
  {
    name: "Python",
    image: <FaPython className="w-full text-white h-full" />,
  },
  {
    name: "C Sharp",
    image: <TbBrandCSharp className="w-full text-white h-full" />,
  },
  {
    name: ".NET",
    image: <SiDotnet className="w-full text-white h-full" />,
  },
  {
    name: "Tailwind",
    image: <SiTailwindcss className="w-full text-white h-full" />,
  },
  {
    name: "MySQL",
    image: <GrMysql className="w-full text-white h-full" />,
  },
  {
    name: "Blockchain",
    image: <SiBlockchaindotcom className="w-full text-white h-full" />,
  },
  {
    name: "Node.JS",
    image: <DiNodejs className="w-full text-white h-full" />,
  },
  {
    name: "GIT",
    image: <FaGitAlt className="w-full text-white h-full" />,
  },
  {
    name: "HTML",
    image: <FaHtml5 className="w-full text-white h-full" />,
  },
  {
    name: "CSS",
    image: <FaCss3Alt className="w-full text-white h-full" />,
  },
  {
    name: "GITHUB",
    image: <FaGithub className="w-full text-white h-full" />,
  },
];

export const projects: Project[] = [
  {
    name: "Primeiro Projeto",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing eli Voluptatem nostrum. Obcaecati nihil possimus consequuntur vero dignissimos quasi quam modi sint porro et harum laborum illo illum accusantium nam esse doloribus",
    skills: [
      {
        name: "JavaScript",
        image: <IoLogoJavascript className="w-full text-white h-full" />,
      },
      {
        name: "React",
        image: <FaReact className="w-full text-white h-full" />,
      },
      {
        name: "Python",
        image: <FaPython className="w-full text-white h-full" />,
      },
      {
        name: "Csharp",
        image: <TbBrandCSharp className="w-full text-white h-full" />,
      },
      {
        name: ".NET",
        image: <SiDotnet className="w-full text-white h-full" />,
      },
      {
        name: "Tailwind",
        image: <SiTailwindcss className="w-full text-white h-full" />,
      },
    ],
    img: img,
  },
  {
    name: "Segundo Projeto",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing eli Voluptatem nostrum. Obcaecati nihil possimus consequuntur vero dignissimos quasi quam modi sint porro et harum laborum illo illum accusantium nam esse doloribus",
    skills: [
      {
        name: "JavaScript",
        image: <IoLogoJavascript className="w-full text-white h-full" />,
      },
      {
        name: "React",
        image: <FaReact className="w-full text-white h-full" />,
      },
      {
        name: "Python",
        image: <FaPython className="w-full text-white h-full" />,
      },
      {
        name: "Csharp",
        image: <TbBrandCSharp className="w-full text-white h-full" />,
      },
      {
        name: ".NET",
        image: <SiDotnet className="w-full text-white h-full" />,
      },
      {
        name: "Tailwind",
        image: <SiTailwindcss className="w-full text-white h-full" />,
      },
    ],
    img: img,
  },
];
