import HeroTyped from "@/components/ui/HeroTyped";
import ShineButton from "@/components/ui/ShineButton";

export default function Hero() {
  return (
    <section id="home">
      <div className="bg-no-repeat bg-fixed bg-cover bg-center h-screen absolute top-0 left-0 w-full -z-30"></div>
      {/* dark overlay */}
      <div className="flex justify-center flex-col items-center h-screen gap-8">
        <h1 className=" text-white font-semibold">
          <span className="text-4xl sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
          </span>
          <span className="text-violet-200 font-bold text-5xl sm:text-6xl md:text-7xl">
            ANAS
          </span>
        </h1>
        <HeroTyped />
        <div className="flex justify-center items-center gap-4">
          <a
            className="inline-flex items-center justify-center h-full w-full"
            href="#about">
            <ShineButton className="text-sm md:text-base w-40 py-4">
              About Me
            </ShineButton>
          </a>
          <a
            className="inline-flex items-center justify-center h-full w-full"
            href="#contact">
            <ShineButton className="text-sm md:text-base w-40 py-4">
              Contact Me
            </ShineButton>
          </a>
        </div>
        <a
          href="ANAS-P-Resume.pdf"
          download="ANAS-P-Resume.pdf"
          className="inline-flex items-center justify-center">
          <ShineButton className="text-sm md:text-base w-80 py-4 border-purple-900 bg-purple-900 hover:shadow-purple-500 hover:border-purple-700 shadow-purple-900 shad hover:before:-translate-x-80">
            Download Resume
          </ShineButton>
        </a>
      </div>
    </section>
  );
}
