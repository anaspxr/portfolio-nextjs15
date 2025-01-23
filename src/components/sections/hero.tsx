"use client";

import { motion } from "framer-motion";
import HeroTyped from "@/components/ui/HeroTyped";
import ShineButton from "@/components/ui/ShineButton";
import HeroSocialLinks from "../ui/HeroSocialLinks";

export default function Hero() {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger each child by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 0.6, repeat: Infinity },
    },
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="flex justify-center flex-col items-center h-screen gap-8">
        {/* Main Heading */}
        <motion.h1 className="text-white font-semibold" variants={itemVariants}>
          <span className="text-5xl sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
          </span>
          <span className="text-violet-200 font-bold text-6xl sm:text-7xl md:text-8xl">
            ANAS
          </span>
        </motion.h1>

        {/* Typed Animation */}
        <motion.div className="min-h-8" variants={itemVariants}>
          <HeroTyped />
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <HeroSocialLinks />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center items-center sm:gap-4 gap-2"
          variants={itemVariants}>
          <a
            className="inline-flex items-center justify-center h-full w-full"
            href="#about">
            <ShineButton className="text-sm md:text-base w-40 py-4">
              About Me
            </ShineButton>
          </a>
          {/* Resume Button */}
          <a
            href="ANAS-P-Resume.pdf"
            download="ANAS-P-Resume.pdf"
            className="inline-flex items-center justify-center">
            <ShineButton className="text-sm md:text-base w-44 py-4">
              Download Resume
            </ShineButton>
          </a>
        </motion.div>
        <motion.div variants={bounceVariants}>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center h-full w-full"
            href="#contact">
            <ShineButton className="text-sm md:text-base w-80 py-4 border-purple-900 bg-purple-900 hover:shadow-purple-500 hover:border-purple-700 shadow-purple-900 shad hover:before:-translate-x-80">
              Contact Me
            </ShineButton>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
