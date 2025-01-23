"use client";

import React from "react";
import { socialLinks } from "@/lib/social-links";
import { motion } from "framer-motion";

export default function HeroSocialLinks() {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 }, // Start slightly off-screen
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.2, color: "#8b5cf6" }} // Hover effect
            whileTap={{ scale: 0.9 }} // Tap effect
          >
            <Icon className="hover:text-violet-400" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
