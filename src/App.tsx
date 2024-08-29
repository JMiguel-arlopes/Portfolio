import { NavBar } from "./componets/NavBar";

import { LuDownload } from "react-icons/lu";
import img_about_me from "./assets/Empty State Concept_preview_rev_2.png";
import eclipse from "./assets/Intersection 7.svg";
import eclipse2 from "./assets/Vector 1.svg";

import Footer from "./componets/Footer";
import IconsList from "./componets/IconsList";
// import { skills } from "./datas";
import SwipperProjects from "./componets/SwipperProjects";
import SkillCardsList from "./componets/SkillCardsList";
import UserPicture from "./componets/UserPicture";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-blue-950">
      <section className="min-h-screen pt-28 overflow relative" id="home">
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
              <IconsList />
            </div>
          </div>
          <UserPicture />
        </div>
      </section>
      <section className="py-16 overflow relative" id="aboutme">
        <div className="px-12  flex justify-center items-center z-40 relative">
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
      <section
        className="py-16 overflow relative flex justify-start items-center flex-col"
        id="skills"
      >
        <h2 className="text-center text-white font-bold text-4xl mb-12">
          Skills
        </h2>
        <SkillCardsList />
      </section>
      <section
        className="py-16 overflow relative flex justify-start items-center flex-col"
        id="projects"
      >
        <h2 className="text-center text-white font-bold text-4xl mb-12">
          Projetos
        </h2>
        <SwipperProjects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
