import HeroTyped from "@/components/ui/HeroTyped";
import ShineButton from "@/components/ui/ShineButton";

export default function Hero() {
  return (
    <section id="home">
      <div className="bg-no-repeat bg-fixed bg-cover bg-center h-screen absolute top-0 left-0 w-full -z-30"></div>
      {/* dark overlay */}
      <div className="flex justify-center flex-col items-center h-screen gap-8">
        <h1 className="text-7xl text-white font-semibold">
          Hi, I&apos;m <span className="text-violet-200 font-bold">ANAS</span>
        </h1>
        <HeroTyped />
        <div className="flex justify-center items-center gap-4">
          <ShineButton className="text-sm md:text-base w-40 py-4">
            <a
              className="inline-flex items-center justify-center h-full w-full"
              href="#about">
              About Me
            </a>{" "}
          </ShineButton>
          <ShineButton className="text-sm md:text-base w-40 py-4">
            <a
              className="inline-flex items-center justify-center h-full w-full"
              href="#contact">
              Contact Me
            </a>
          </ShineButton>
        </div>
      </div>
    </section>
  );
}
