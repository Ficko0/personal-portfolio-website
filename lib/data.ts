import backendImage from "@/public/back-end web api.png";
import calcImage from "@/public/calculator.png";
import tripPlannerImage from "@/public/trip planner.png";
import issueTrackerImage from "@/public/issue-tracker-img.png";
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
      "Trip planner application that allows the user to book a trip to a country of choice.",
    tags: ["TypeScript", "React", "React Forms", "ContextAPI", "TailwindCSS"],
    imageUrl: tripPlannerImage,
    projectUrl: "https://github.com/Ficko0/Trip-Planner",
  },
  {
    title: "Music App API",
    description:
      "Back-end API made using NestJS with a self-engineered auth service.",
    tags: ["TypeScript", "NestJS", "JWT", "TypeORM", "Swagger", "PostgreSQL"],
    imageUrl: backendImage,
    projectUrl: "https://github.com/Ficko0/Music-App-API",
  },
  {
    title: "Issue Tracker App",
    description:
      "An issue tracker appication made using Angular 18 newest syntax and managing the state of the app through a signal store.",
    tags: ["TypeScript", "Angular 18"],
    imageUrl: issueTrackerImage,
    projectUrl: "https://github.com/Ficko0/Issue-Tracker",
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
      "Tutoring and helping students learn the newest and latest coding practices.",
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
