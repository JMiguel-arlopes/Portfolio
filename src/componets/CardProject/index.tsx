import { IoCodeSlash } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { Skill } from "../../interfaces";
import { CardSkill } from "../CardSkill";

export function CardProject({ project }: any) {
  return (
    <div className="flex-1 max-w-96 rounded-2xl overflow-hidden h-auto min-h-96 flex flex-col">
      <div className="bg-black p-6 h-auto flex-1">
        <p className="text-gray-300 text-xs leading-relaxed">
          {project.description}
        </p>
        <h4 className="text-xs my-2 text-cyan-400">Tecnologias:</h4>
        <ul className="flex justify-between items-center flex-wrap">
          {project.skills.map((skill: Skill, index: number) => (
            <CardSkill skill={skill} small={true} key={index} />
          ))}
        </ul>
      </div>
      <div className="bg-slate-950 p-4">
        <div className="flex justify-content items-center mb-1">
          <a href={project.github} title="código github" target="_blank">
            <span className="text-xs text-gray-500 capitalize transition cursor-pointer flex items-center justify-start gap-2 hover:text-cyan-500">
              <IoCodeSlash />
              github
            </span>
          </a>
          <span className="h-3 w-px bg-gray-500 mx-2"></span>
          <a href={project.site} title="código github" target="_blank">
            <span className="text-xs text-gray-500 capitalize transition cursor-pointer flex items-center justify-start gap-2 hover:text-cyan-500">
              <FaLaptopCode /> site
            </span>
          </a>
        </div>
        <h3 className="text-gray-100">{project.name}</h3>
      </div>
    </div>
  );
}
