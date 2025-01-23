"use client";

import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show button if scrolled down more than 300px
      } else {
        setIsVisible(false); // Hide button if less than 300px
      }

      // Detect scrolling direction
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      setLastScrollY(window.scrollY); // Update last scroll position
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [lastScrollY]);

  return (
    isVisible &&
    isScrollingUp && (
      <motion.button
        className="fixed bottom-4 right-4 p-2 bg-violet-200  hover:bg-violet-300  bg-opacity-10 backdrop-blur-lg border border-purple-500 text-white rounded-full shadow-lg hover:bg-opacity-20 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 50 }} // Start off-screen
        animate={{ opacity: 1, y: 0 }} // Slide up and fade in
        exit={{ opacity: 0, y: 50 }} // Slide down and fade out
        transition={{ duration: 0.3, ease: "easeInOut" }}>
        <BiChevronUp />
      </motion.button>
    )
  );
}
