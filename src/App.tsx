import { NavBar } from "./componets/NavBar";
import userImage from "./assets/perfil_preview_rev_1.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import img_about_me from "./assets/Empty State Concept_preview_rev_2.png";
import eclipse from "./assets/Intersection 7.svg";
import eclipse2 from "./assets/Vector 1.svg";
// import eclipse3 from "./assets/hero-bg.svg";
// import eclipse4 from "./assets/hero-bg.svg";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { CardSkill } from "./componets/CardSkill";
import { Project, Skill } from "./interfaces";
import img from "./assets/db439986-0833-4777-8014-dfc13460eedf.jpg";
import { CardProject } from "./componets/CardProject";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const skills: Skill[] = [
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

  const projects: Project[] = [
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

  return (
    <div className="bg-gradient-to-b from-slate-950 to-blue-950">
      <section className="min-h-screen pt-28 overflow relative">
        <img
          src={eclipse2}
          alt=""
          className="absolute bottom-0 right-0 opacity-40 h-full w-full"
        />
        <NavBar />
        <div className="flex items-center justify-between min-h-section px-48 flex-wrap relative">
          <div className="flex flex-col max-w-3xl">
            <span className="text-white text-sm">
              Desenvolvedor de Software
            </span>
            <h1 className="text-white text-5xl mb-3 font-semibold leading-tight">
              Prazer, Eu sou{" "}
              <span className="text-cyan-300 block">João Miguel A. Lopes</span>
            </h1>
            <p className="text-white mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae fugiat quod beatae, quidem omnis a earum cum hic
              dolores laborum qui blanditiis perferendis reprehenderit illo
              impedit excepturi vel officiis voluptates?
            </p>
            <div className="flex justify-start items-center mt-8">
              <button className="mr-6 px-12 py-2 rounded-full text-sm border border-cyan-400 text-cyan-400 flex justify-center items-center gap-2 transition hover:bg-cyan-400 hover:text-white hover:cursor-pointer">
                Baixar CV <LuDownload />
              </button>
              <ul className="flex justify-center items-center">
                <li className="flex justify-center items-center text-cyan-400 p-2 border border-cyan-400 rounded-full text-sm mr-6 transition hover:bg-cyan-400 hover:text-white hover:cursor-pointer">
                  <FaGithub />
                </li>
                <li className="flex justify-center items-center text-cyan-400 p-2 border border-cyan-400 rounded-full text-sm transition hover:bg-cyan-400 hover:text-white hover:cursor-pointer">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-cyan-400 rounded-full flex justify-center items-center overflow-hidden size-96 shadow-neon">
            <img src={userImage} alt="Perfil - João Miguel" />
          </div>
        </div>
      </section>
      <section className="py-16 overflow relative">
        <div className="px-12  flex justify-center items-center z-50 relative">
          <img
            src={eclipse}
            alt=""
            className="absolute top-20 right-96 size-48 opacity-5"
          />
          <div className="max-w-2xl flex-1">
            <h2 className="my-8 text-4xl text-white uppercase text-center">
              Quem <span className="text-cyan-400 font-bold">eu sou</span>
            </h2>

            <p className="text-white font-normal text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              alias non repudiandae culpa, omnis quia sint placeat consequuntur
              fugit eligendi, minus modi obcaecati pariatur iste vel.
            </p>
            <p className="text-white font-normal text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              alias non repudiandae culpa
            </p>
            <ul className="flex space-between items-center flex-wrap mt-6">
              <li className="flex justify-start items-center flex-50 mb-6">
                <span className="text-xs text-gray-500">Nome</span>
                <p className="ml-2 text-cyan-200">João Miguel</p>
              </li>
              <li className="flex justify-start items-center flex-50 mb-6">
                <span className="text-xs text-gray-500">Nacionalidade</span>
                <p className="ml-2 text-cyan-200">Brasileira</p>
              </li>
              <li className="flex justify-start items-center flex-50 mb-6">
                <span className="text-xs text-gray-500">Telefone</span>
                <p className="ml-2 text-cyan-200">+55 21 97547-1418</p>
              </li>
              <li className="flex justify-start items-center flex-50 mb-6">
                <span className="text-xs text-gray-500">Email</span>
                <p className="ml-2 text-cyan-200">jmiguelarlopes@gmail.com</p>
              </li>
            </ul>
            <span className="flex justify-center items-center opacity-70 text-white font-extralight text-xs w-full text-center mt-8">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              <br />- João Miguel
            </span>
          </div>
          <div className="flex justify-between items-center p-4">
            <img src={img_about_me} alt="Developer" className="h-96" />
          </div>
        </div>
      </section>
      <section className="py-16 overflow relative flex justify-start items-center flex-col">
        <h2 className="text-center text-white font-bold text-4xl mb-12">
          Skills
        </h2>
        <ul className="max-w-section flex justify-center items-center flex-wrap">
          {skills.map((skill, index) => (
            <CardSkill skill={skill} key={index} small={false} />
          ))}
        </ul>
      </section>
      <section className="py-16 overflow relative flex justify-start items-center flex-col">
        <h2 className="text-center text-white font-bold text-4xl mb-12">
          Projetos
        </h2>
        <div className="max-w-section w-full">
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // navigation
            pagination={{
              dynamicBullets: true,
            }}
            // style={{ padding: "2rem 0" }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} style={{ justifyContent: "center" }}>
                <CardProject project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default App;
