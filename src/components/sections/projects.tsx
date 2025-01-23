"use client";

import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/projects";
import AnimatedDivider from "../ui/animated-divider";
import { useRef } from "react";
import ProjectCard from "../ui/project-card";

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger children (project cards)
    },
  };

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mx-2 my-20 sm:mx-12 mb-8 md:mx-20 lg:mx-32 p-4">
      <h2 className="text-3xl text-center mb-2 font-semibold text-violet-200">
        Projects
      </h2>
      <AnimatedDivider />
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
