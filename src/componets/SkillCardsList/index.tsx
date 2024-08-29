import { skills } from "../../datas";
import { CardSkill } from "../CardSkill";

export default function SkillCardsList() {
  return (
    <ul className="max-w-section flex justify-center items-center flex-wrap">
      {skills.map((skill, index) => (
        <CardSkill skill={skill} key={index} small={false} />
      ))}
    </ul>
  );
}
