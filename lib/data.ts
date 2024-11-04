import backendImage from "@/public/back-end web api.png";
import calcImage from "@/public/calculator.png";
import tripPlannerImage from "@/public/trip planner.png";
import React from "react";
import { LuGraduationCap, LuNewspaper } from "react-icons/lu";

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
  },
  {
    title: "Trip Planner App",
    description:
      "Trip planner application where you can book a trip for a certain amount of days.",
    tags: ["TypeScript", "React", "React Forms", "ContextAPI", "TailwindCSS"],
    imageUrl: tripPlannerImage,
  },
  {
    title: "Music App API",
    description: "Back-end API made using NestJS.",
    tags: ["TypeScript", "NestJS", "JWT"],
    imageUrl: backendImage,
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
] as const;

export const experienceData = [
  {
    title: "Graduated at Qinshift Academy for Programming",
    location: "Skopje, Macedonia",
    description:
      "I enroled in a coding bootcamp where I learned all the basic and advanced prinicples of programming",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2023 - Oct 2024",
  },
  {
    title: "Assistant Lecturer at the Qinshift Academy for Programming",
    location: "Skopje, Macedonia",
    description:
      "After finishing the bootcamp, I was called in to lecture and educate the new generations of students at the academy",
    icon: React.createElement(LuNewspaper),
    date: "Nov 2024 - Current",
  },
] as const;
