"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/skills";
import TechCard from "../ui/tech-card";
import AnimatedDivider from "../ui/animated-divider";

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item animation variant (for individual cards)
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="my-20 mx-2 sm:mx-8 mb-8 md:mx-16 lg:mx-32">
      <h2 className="text-3xl mb-2 text-center font-semibold text-violet-200">
        Technologies I use
      </h2>
      <AnimatedDivider />
      <div className="bg-black bg-opacity-50 border rounded-md border-opacity-50 border-purple-500 p-4 mt-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 m-auto justify-center"
          variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger delay for each card
              }}>
              <TechCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
