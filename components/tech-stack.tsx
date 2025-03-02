"use client";

import { useEffect, useRef, useState } from "react";

interface TechStackProps {
  skills?: {
    name: string;
    icon: string;
  }[];
}

const defaultSkills = [
  {
    name: "HTML",
    icon: "https://svgl.app/library/html5.svg",
  },
  {
    name: "CSS",
    icon: "https://svgl.app/library/css.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://svgl.app/library/tailwindcss.svg",
  },
  {
    name: "JavaScript",
    icon: "https://svgl.app/library/javascript.svg",
  },
  {
    name: "Figma",
    icon: "https://svgl.app/library/figma.svg",
  },
  {
    name: "Adobe Illustrator",
    icon: "https://svgl.app/library/illustrator.svg",
  },
  {
    name: "Adobe Photoshop",
    icon: "https://svgl.app/library/photoshop.svg",
  },
];

const TechStack = ({ skills = defaultSkills }: TechStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const getVisibleSkills = () => {
    const visibleCount = 5; // Show 5 items at a time
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i - 2 + skills.length) % skills.length;
      items.push({ ...skills[index], position: i });
    }
    return items;
  };

  return (
    <div className="w-full max-w-[90rem] mx-auto py-24">
      {/* Title with effect */}
      <div className="text-center mb-16">
        <h2 className="relative inline-block">
          <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-zinc-900/50 via-zinc-800/50 to-zinc-900/50 blur-xl" />
          <span className="relative inline-block text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-200 pb-2 title-glow">
            EXPERIENCE WITH
          </span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
        </h2>
      </div>

      <div className="relative px-12">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black to-transparent z-10" />

        {/* Skills container */}
        <div className="relative h-[400px] flex items-center justify-center">
          <div className="flex gap-8">
            {getVisibleSkills().map(({ name, icon, position }) => {
              const isCenter = position === 2;
              const isAdjacent = position === 1 || position === 3;

              return (
                <div
                  key={`${name}-${position}`}
                  className={`transform transition-all duration-700 ease-out ${
                    isCenter
                      ? "scale-110 opacity-100 z-30"
                      : isAdjacent
                      ? "scale-90 opacity-60 z-20"
                      : "scale-75 opacity-30 z-10"
                  }`}
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex + position - 2 + skills.length) %
                        skills.length
                    )
                  }
                >
                  <div
                    className={`relative w-64 h-64 bg-zinc-900 rounded-3xl flex flex-col items-center justify-center gap-6 transition-all duration-700 cursor-pointer
                      ${
                        isCenter
                          ? "border-2 border-white/20 bg-zinc-900"
                          : "border border-zinc-800/50 bg-zinc-900/75"
                      }
                    `}
                  >
                    <div
                      className={`relative w-32 h-32 flex items-center justify-center transition-all duration-500 ${
                        isCenter ? "scale-110" : ""
                      }`}
                    >
                      <img
                        src={icon}
                        alt={name}
                        className={`w-24 h-24 object-contain transition-all duration-500 ${
                          isCenter ? "brightness-110" : "brightness-75"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xl font-medium transition-colors duration-500 ${
                        isCenter ? "text-zinc-300" : "text-zinc-500"
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() =>
            setActiveIndex((activeIndex - 1 + skills.length) % skills.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-20 text-zinc-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => setActiveIndex((activeIndex + 1) % skills.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-20 text-zinc-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-16">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-500 ease-in-out ${
              index === activeIndex
                ? "w-10 h-2 bg-white"
                : "w-2 h-2 bg-zinc-700 hover:bg-zinc-600"
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
