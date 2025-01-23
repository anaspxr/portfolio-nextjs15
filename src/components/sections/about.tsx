"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import AnimatedDivider from "../ui/animated-divider";

export default function About() {
  // Ref for Intersection Observer
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" }); // Start animation slightly earlier

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate only when in view
      variants={containerVariants}
      className="mx-4 sm:mx-12 mb-8 md:mx-20 lg:mx-32">
      <motion.h2
        className="text-3xl font-bold text-center text-violet-200"
        variants={itemVariants}>
        About Me
      </motion.h2>
      <motion.div variants={itemVariants}>
        <AnimatedDivider />
      </motion.div>
      <motion.div
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6"
        variants={containerVariants}>
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-start gap-4"
          variants={itemVariants}>
          <p className="text-2xl text-violet-200 font-semibold">Anas P</p>
          <p>
            <FaLaptopCode className="text-violet-400 inline mr-2" />
            Currently Intern at{" "}
            <a
              className="text-violet-200 hover:underline hover:text-violet-300"
              href="https://bridgeon.in/"
              target="_blank"
              rel="noopener noreferrer">
              BridgeOn
            </a>
          </p>
          <p className="flex items-center gap-2">
            <MdMail className="text-violet-400 flex-shrink-0" />
            <a
              href="mailto:anaspappadan@gmail.com"
              className="hover:underline hover:text-violet-300">
              anaspappadan@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <IoLocationSharp className="text-violet-400" />
            <span>Manjeri, Kerala</span>
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            I am a web developer with a passion for creating beautiful &
            user-friendly websites and backend services. I have experience in
            building websites using modern technologies like React, Next.js,
            Node.js, and Express. I am always eager to learn new technologies
            and improve my skills.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
