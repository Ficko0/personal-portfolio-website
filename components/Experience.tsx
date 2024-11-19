"use client";
import { experienceData } from "@/lib/data";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import SectionHeading from "./SectionHeading";
import { LuMapPin } from "react-icons/lu";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.9);

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}
      className="flex flex-col flex-wrap mb-10"
    >
      <SectionHeading title="Experience" />
      {experienceData.map((item, index) => (
        <div
          className="border border-black/[0.7rem] mx-5 my-5 px-4 py-4 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition"
          key={index}
        >
          <div className="flex items-center justify-center my-3 scale-150">
            {item.icon}
          </div>
          <h3 className="font-semibold uppercase my-2">{item.title}</h3>
          <p className="flex gap-3">
            <LuMapPin />
            {item.location}
          </p>
          <p className="mt-3 font-semibold text-gray-700">{item.description}</p>
          <p className="font-light text-gray-800 mt-2">{item.date}</p>
        </div>
      ))}
    </motion.section>
  );
}
