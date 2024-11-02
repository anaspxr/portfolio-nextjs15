import { FaLaptopCode } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";

export default function About() {
  return (
    <div className="mx-4 sm:mx-12 mb-8 md:mx-20 lg:mx-32">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div
        className={`my-2 h-1 bg-violet-800 transition-[width] duration-700 ease-in-out`}></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div>
          <p className="text-2xl text-violet-200 my-2">Anas P</p>
          <p className="">
            <span>
              <FaLaptopCode className="text-violet-400 inline mr-2" />
              MERN stack Intern at{" "}
              <a
                className="text-violet-200 hover:underline hover:text-violet-300"
                href="https://bridgeon.in/">
                BridgeOn
              </a>
            </span>
          </p>
          <p className="flex items-center gap-2">
            <MdMail className="text-violet-400 flex-shrink-0" />
            anaspappadan@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <IoLocationSharp className="text-violet-400" /> Manjeri, Kerala
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="mt-4 text-lg">
            I am a web developer with a passion for creating beautiful &
            user-friendly websites and backend services. I have experience in
            building websites using modern technologies like React, Next.js,
            Node.js and Express . I am always eager to learn new technologies
            and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
}
