import { CommonSave, HomeIcon, Searchsvg, User } from "@/components/icons";
import { ReactElement } from "react";

type SidenavLink = {
  title: string;
  icon: ReactElement;
  path: string;
};

type Skill = {
  name: string;
  color: string;
};

export const LeftSidenavLinks: SidenavLink[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Profile",
    icon: <User />,
    path: "/profile",
  },
  {
    title: "Saves",
    icon: <CommonSave />,
    path: "/saves",
  },
  {
    title: "Explore",
    icon: <Searchsvg />,
    path: "/search",
  },
];

export const skillsList: Skill[] = [
  {
    name: "Javascript",
    color: "#CFA22D",
  },
  {
    name: "Php",
    color: "#787cb4",
  },
  {
    name: "Java",
    color: "#0d8ac7",
  },
  {
    name: "Vue",
    color: "#00b77f",
  },
  {
    name: "React",
    color: "#5ed3f3",
  },
  {
    name: "Angular",
    color: "#fe140d",
  },
  {
    name: "HTML",
    color: "#e96228",
  },
  {
    name: "CSS",
    color: "#0068ba",
  },
  {
    name: "NodeJS",
    color: "#3c823b",
  },
  {
    name: "Python",
    color: "#ffe05e",
  },
  {
    name: "Ruby",
    color: "#930e03",
  },
  {
    name: "Go",
    color: "#00add8",
  },
  {
    name: "Kotlin",
    color: "#7952cb",
  },
  {
    name: ".NET",
    color: "#4e2acd",
  },
  {
    name: "Swift",
    color: "#e84e36",
  },
  {
    name: "Typescript",
    color: "#2f74c0",
  },
  {
    name: "SQL",
    color: "#f7ac00",
  },

  {
    name: "Docker",
    color: "#2496ed",
  },
  {
    name: "Jenjins",
    color: "#cc3631",
  },
  {
    name: "C++",
    color: "#659bd3",
  },
  {
    name: "C#",
    color: "#803788",
  },
];

export const positionList = [
  "Desarrollador Frontend",
  "Desarrollador Backend",
  "Desarrollador Fullstack",
  "Desarrollador Mobile",
  "Data Scientist",
  "Machine Learning",
  "Diseñador UX/UI",
  "Desarrollador DevOps",
  "Desarrollador de Videojuegos",
];
