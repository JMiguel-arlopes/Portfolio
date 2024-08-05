import { useState } from "react";
import { Skill } from "../../interfaces";

interface CardSkillProps {
  skill: Skill;
  small: boolean;
}

export function CardSkill({ skill, small = false }: CardSkillProps) {
  const [isPointer, setPointer] = useState<boolean>(false);

  return (
    <li
      className={
        !small
          ? "m-4 flex justify-center items-center border border-cyan-400 w-56 h-32 p-2 rounded-xl shadow-neonCard transition hover:shadow-neonCardActive hover:scale-105 active:scale-110"
          : "m-2 flex justify-center items-center border border-cyan-400 w-12 h-6 p-2 rounded-xl shadow-neonCard transition hover:border-none hover:shadow-none active:scale-110"
      }
      onMouseEnter={() => setPointer(true)}
      onMouseLeave={() => setPointer(false)}
    >
      {!isPointer ? (
        <span
          className={
            !small
              ? "size-16 pointer-events-none"
              : "size-4 pointer-events-none"
          }
        >
          {skill.image}
        </span>
      ) : (
        <span
          className={
            !small
              ? "w-full flex justify-center items-center text-2xl text-cyan-200 pointer-events-none"
              : "w-full flex justify-center items-center text-xs text-cyan-100 pointer-events-none"
          }
        >
          {skill.name}
        </span>
      )}
    </li>
  );
}
