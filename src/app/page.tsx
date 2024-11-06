import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-screen-2xl m-auto">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
