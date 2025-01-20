import { skills } from "@/lib/skills";
import TechCard from "../ui/tech-card";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-2 sm:mx-8 mb-8 md:mx-16 lg:mx-32 p-4  bg-black bg-opacity-50 border rounded-md border-opacity-50 border-purple-500 ">
      <h2 className="text-3xl mb-2 text-center">Technologies I use</h2>
      <div
        className={`mb-8 h-1 w-32 m-auto bg-violet-800 transition-[width] duration-700 ease-in-out`}></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  m-auto justify-center">
        {skills.map((skill, index) => (
          <TechCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
