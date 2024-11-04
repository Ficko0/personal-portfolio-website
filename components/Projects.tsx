"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import React from "react";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.9);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 overflow-x-hidden"
    >
      <SectionHeading title="Personal Projects" />
      <>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </>
    </motion.section>
  );
}
