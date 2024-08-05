import { Skill } from "../../interfaces";
import { CardSkill } from "../CardSkill";

export function CardProject({ project }: any) {
  return (
    <div className="flex-1 max-w-96 bg-slate-950 p-4 rounded-lg">
      <h3 className="text-center mb-2 text-2xl text-white">{project.name}</h3>
      <img src={project.img} alt="" className="w-full h-36 rounded px-8 mb-4" />
      <p className="text-gray-300 text-xs leading-relaxed">
        {project.description}
      </p>
      <h4 className="my-2 text-cyan-400">Tecnologias:</h4>
      <ul className="flex justify-between items-center flex-wrap">
        {project.skills.map((skill: Skill, index: number) => (
          <CardSkill skill={skill} small={true} key={index} />
        ))}
      </ul>
      <div className="flex justify-center items-center mt-4">
        <button
          type="button"
          className="mx-2 px-6 py-1 bg-cyan-500 text-white font-bold rounded"
        >
          GitHub
        </button>
        <button
          type="button"
          className="mx-2 px-6 py-1 bg-cyan-500 text-white font-bold rounded"
        >
          Site
        </button>
      </div>
    </div>
  );
}
