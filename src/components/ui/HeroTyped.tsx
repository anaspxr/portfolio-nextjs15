"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const words = [
  "Web Developer",
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const options = {
  strings: words,
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  cursorChar: "|",
};

export default function HeroTyped() {
  const elRef = useRef(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    typedRef.current = new Typed(elRef.current, options);

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <p>
      <span style={{ whiteSpace: "pre" }} ref={elRef} />
    </p>
  );
}
