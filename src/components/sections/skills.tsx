import { skills } from "@/lib/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-2 sm:mx-8 mb-8 md:mx-16 lg:mx-32 p-4  bg-black bg-opacity-50 border rounded-md border-opacity-50 border-purple-500  ">
      <h2 className="text-3xl mb-2 text-center">My skills</h2>
      <div
        className={`mb-8 h-1 w-32 m-auto bg-violet-800 transition-[width] duration-700 ease-in-out`}></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  m-auto justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" p-4 flex items-center justify-center hover:scale-105 transition-transform  bg-violet-500 bg-opacity-20 rounded-md">
            <div className="flex flex-col items-center">
              <Image
                height={512}
                width={512}
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16 object-contain"
              />
              <p className="text-center text-white">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
