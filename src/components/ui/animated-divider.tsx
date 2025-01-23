"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedDivider() {
  const dividerRef = useRef(null);
  const isInView = useInView(dividerRef, { once: true });

  return (
    <motion.div
      ref={dividerRef}
      className="h-1 w-full bg-violet-800 my-4"
      initial={{ scaleX: 0, originX: 0.5 }} // Start with 0 width from the center
      animate={isInView ? { scaleX: 1 } : {}} // Animate to full width when visible
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    />
  );
}
