"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/skills";
import TechCard from "../ui/tech-card";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="relative mx-2 sm:mx-8 mb-8 md:mx-16 lg:mx-32 p-4 bg-black bg-opacity-50 border rounded-md border-opacity-50 border-purple-500">
      <h2 className="text-3xl mb-2 text-center">Technologies I use</h2>
      <div className="mb-8 h-1 w-32 m-auto bg-violet-800 transition-[width] duration-700 ease-in-out"></div>
      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 m-auto justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{
              opacity: isInView ? 1 : 0,
              rotateY: isInView ? 0 : -90,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}>
            <TechCard {...skill} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
