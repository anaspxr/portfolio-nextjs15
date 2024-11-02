import Slider from "./projects-slide";

import React from "react";

export default function Projects() {
  return (
    <div>
      <div>
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold text-center my-4">
          Projects
        </h1>
        <p className="text-center text-gray-500 my-2">
          Some of the projects I have worked on
        </p>
      </div>
      <Slider />
    </div>
  );
}
