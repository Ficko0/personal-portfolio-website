"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-4 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        After finishing high school, I am currently enrolled in a coding
        bootcamp where I am building comprehensive skills in front-end and
        back-end technologies. With experience in HTML, CSS, JavaScript,
        TypeScript, and frameworks like React and Nest.js, I am passionate about
        developing scalable, responsive web applications. My goal is to
        continuously enhance my expertise in creating dynamic user experiences
        and efficient, reliable back-end systems. As of lately, I've had the
        honour to spread my knowledge and expertise as an assistant lecturer at
        the Qinshift Academy for Programming.
      </p>
    </motion.section>
  );
}
