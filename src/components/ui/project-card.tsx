import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    image: string;
    links: {
      github: string;
      live?: string;
    };
  };
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-150px" });

  // Animation for each project card (slide from bottom)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start below the screen
    visible: {
      opacity: 1,
      y: 0, // Slide to their original position
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center justify-between bg-violet-500 bg-opacity-20 rounded-sm overflow-hidden">
      <div>
        <a
          href={project.links.live ? project.links.live : project.links.github}
          target="_blank"
          className="w-full sm:h-64 h-40">
          <Image
            height={512}
            width={512}
            src={project.image}
            alt={project.name}
            className="w-full sm:h-64 h-40 object-cover hover:scale-105 transition-transform duration-300"
          />
        </a>

        <div className="p-2">
          <h3 className="text-center text-white text-xl my-2">
            {project.name}
          </h3>
          <p className="text-xs sm:text-sm">{project.description}</p>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-800 text-white flex items-center py-2 px-4 m-2 rounded-md hover:bg-violet-600 transition-colors duration-300">
          <button className="flex gap-4 items-center">
            Github <GrGithub />
          </button>
        </a>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-800 text-white flex items-center py-2 px-4 m-2 rounded-md hover:bg-violet-600 transition-colors duration-300">
            <button className="flex gap-4 items-center">
              Live <LuExternalLink />
            </button>
          </a>
        )}
      </div>
    </motion.div>
  );
}
