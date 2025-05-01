import React from "react";
import backendImage from "@/public/back-end web api.png";
import calcImage from "@/public/calculator.png";
import tripPlannerImage from "@/public/trip planner.png";
import issueTrackerImage from "@/public/issue-tracker-img.png";
import rickMortyImage from "@/public/rick-morty.jpg";
import drumKitImage from "@/public/drumKit.png";
import todoImage from "@/public/todo.png";
import { LuBookOpen, LuGraduationCap, LuCode } from "react-icons/lu";
import { StaticImageData } from "next/image";

interface ExperienceData {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
}

interface HeaderLinks {
  name: string;
  hash: string;
}

interface ProjectsData {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  projectUrl: string;
}

export const headerLinks: HeaderLinks[] = [
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

export const projectsData: ProjectsData[] = [
  {
    title: "Vanilla JS To-Do Application",
    description:
      "Simple vanilla JavaScript To-Do application that stores the tasks in local storage",
    tags: ["JavaScript"],
    imageUrl: todoImage,
    projectUrl: "https://github.com/Ficko0/todo-vanilajs",
  },
  {
    title: "Drum Kit App",
    description:
      "A drum machine application made using NextJS and EmotionJSX styled components",
    tags: ["JavaScript", "TypeScript", "NextJS", "EmotionJSX"],
    imageUrl: drumKitImage,
    projectUrl: "https://github.com/Ficko0/drum-machine",
  },
  {
    title: "Rick & Morty GraphQL",
    description:
      "Simple GraphQL app made using NextJS and Apollo GraphQL with AntDesign styled components",
    tags: ["JavaScript", "TypeScript", "NextJS", "GraphQL", "AntDesign"],
    imageUrl: rickMortyImage,
    projectUrl: "https://github.com/Ficko0/rick-morty-graphql",
  },
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
      "An issue tracker application made using Angular 18 newest syntax and managing the state of the app through a signal store.",
    tags: ["TypeScript", "Angular 18"],
    imageUrl: issueTrackerImage,
    projectUrl: "https://github.com/Ficko0/Issue-Tracker",
  },
] as const;

export const skillsData: string[] = [
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
  "GraphQL",
  "Hasura",
  "Prisma",
  "MySQL",
  "Vesion Control",
  "Unit Testing",
] as const;

export const experienceData: ExperienceData[] = [
  {
    title: "Software Engineering Intern at Pabau Clinic Software",
    location: "Skopje, Macedonia",
    description:
      "Implemented various new features and worked on the main software hands on.",
    icon: React.createElement(LuCode),
    date: "Feb 2025 - May 2025",
  },
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
