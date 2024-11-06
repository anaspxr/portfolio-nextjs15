import React from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { GrGithub } from "react-icons/gr";
import { LuExternalLink } from "react-icons/lu";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-2 my-20 sm:mx-12 mb-8 md:mx-20 lg:mx-32 p-4 bg-black bg-opacity-50 border rounded-md border-opacity-50 border-violet-500">
      <h2 className="text-3xl text-center mb-2">Projects</h2>
      <div
        className={`mb-2 h-1 w-40 m-auto bg-violet-800 transition-[width] duration-700 ease-in-out`}></div>
      <p className="text-center mb-4">
        Some of the projects i have worked on..
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-violet-500 bg-opacity-20 rounded-sm overflow-hidden">
            <div>
              <a
                href={
                  project.links.live ? project.links.live : project.links.github
                }
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
                <p className="text-xs sm:text-sm  ">{project.description}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
