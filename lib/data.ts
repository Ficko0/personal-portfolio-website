import backendImage from "@/public/back-end web api.png";
import calcImage from "@/public/calculator.png";
import tripPlannerImage from "@/public/trip planner.png";
import React from "react";
import { LuBookOpen, LuGraduationCap, LuNewspaper } from "react-icons/lu";

export const headerLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Vanilla JS Calculator",
    description:
      "Fully functional calculator made using vanila JavaScript, HTML5 and CSS3",
    tags: ["Javascript", "HTML5", "CSS3"],
    imageUrl: calcImage,
    projectUrl: "https://github.com/Ficko0/Vanilla-JS-Calculator",
  },
  {
    title: "Trip Planner App",
    description:
      "Trip planner application where you can book a trip for a certain amount of days.",
    tags: ["TypeScript", "React", "React Forms", "ContextAPI", "TailwindCSS"],
    imageUrl: tripPlannerImage,
    projectUrl: "https://github.com/Ficko0/Trip-Planner",
  },
  {
    title: "Music App API",
    description: "Back-end API made using NestJS.",
    tags: ["TypeScript", "NestJS", "JWT", "TypeORM", "Swagger", "PostgreSQL"],
    imageUrl: backendImage,
    projectUrl: "https://github.com/Ficko0/Music-App-API",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "NestJS",
  "Framer Motion",
  "Angular 18",
  "DrizzleORM",
  "TypeORM",
] as const;

export const experienceData = [
  {
    title: "Assistant Lecturer at the Qinshift Academy for Programming",
    location: "Skopje, Macedonia",
    description:
      "Spreading my knowledge, skills and expertise with the upcoming generations.",
    icon: React.createElement(LuBookOpen),
    date: "Nov 2024 - Current",
  },
  {
    title: "Graduated at Qinshift Academy for Programming",
    location: "Skopje, Macedonia",
    description:
      "I enroled in a coding bootcamp where I learned all the basic and advanced prinicples of programming.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2023 - Oct 2024",
  },
] as const;
