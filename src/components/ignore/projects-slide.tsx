"use client";

import {
  MouseEventHandler,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/lib/projects";

export default function Slider() {
  const [mouseDownAt, setMouseDownAt] = useState<number | null>(null);
  const [percentage, setPercentage] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const trackRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!mouseDownAt) return;
    const mouseMovement = mouseDownAt - e.clientX;
    const windowWidth = window.innerWidth;
    setPercentage(
      Math.min(
        Math.max(prevPercentage + (mouseMovement / windowWidth) * -100, -105),
        5
      )
    );
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (!mouseDownAt) return;
    const touchMovement = mouseDownAt - e.touches[0].clientX;
    const windowWidth = window.innerWidth;
    setPercentage(
      Math.min(
        Math.max(
          prevPercentage + (touchMovement / (windowWidth * 2)) * -100,
          -105
        ),
        5
      )
    );
  };

  const handleMouseUp = () => {
    setMouseDownAt(null);
    setPrevPercentage(percentage);
    if (percentage < -100) {
      setPercentage(-100);
      return;
    }
    if (percentage > 0) {
      setPercentage(0);
      return;
    }
  };

  useEffect(() => {
    const totalLength =
      window.innerWidth > 600
        ? projects.length * (300 + 25) - window.innerWidth
        : projects.length * (200 + 15) - window.innerWidth;

    trackRef.current?.animate(
      {
        transform: `translate(${
          (percentage * totalLength) / window.innerWidth
        }%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    imagesRef.current.forEach((img) => {
      img?.animate(
        {
          objectPosition: `${percentage + 100}% 50%`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });
  }, [percentage]);

  // Automatic animation logic
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setPercentage((prev) => {
        const nextPercentage = prev + direction * 0.1; // Adjust the increment speed as needed
        if (nextPercentage >= 2) {
          setDirection(-1);
        } else if (nextPercentage <= -102) {
          setDirection(1);
        }
        return nextPercentage;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction]);

  return (
    <div className="overflow-x-hidden">
      <div
        id="slider-container"
        className="overflow-hidden w-full m-0 select-none"
        onMouseDown={(e) => {
          setMouseDownAt(e.clientX);
        }}
        onTouchStart={(e) => {
          setMouseDownAt(e.touches[0].clientX);
        }}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchCancel={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        <div id="image-track" className="flex gap-6 select-none" ref={trackRef}>
          {projects.map((p, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                className="sm:w-[300px] sm:h-[400px] w-[200px] h-[300px] object-[100%,50%] object-cover select-none"
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                alt=""
                src={p.image}
                width={1024}
                height={768}
                draggable={false}
              />
              <div className="flex justify-between items-center">
                <p>{p.name}</p>

                <div className="flex gap-2 items-center">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      className="hover:text-purple-700">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      className="hover:text-purple-700">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
