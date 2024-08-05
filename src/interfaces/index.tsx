import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  image: ReactElement<IconType>;
}

export interface Project {
  name: string;
  description: string;
  skills: Skill[];
  img: string;
}
