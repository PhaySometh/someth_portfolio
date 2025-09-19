"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  image: string;
  category: string;
}

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const technologies: Technology[] = [
    // Frontend
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "Vite",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      category: "Frontend",
    },
    {
      name: "Flutter",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },

    // Backend
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      name: "Express.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
    },
    {
      name: "Laravel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Backend",
    },
    {
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Backend",
    },
    {
      name: "Ruby on Rails",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
      category: "Backend",
    },

    // Programming Languages
    {
      name: "C Programming",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/760px-C_Programming_Language.svg.png?20201031132917",
      category: "Programming Languages",
    },
    {
      name: "C++",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "Programming Languages",
    },
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Programming Languages",
    },
    {
      name: "R Programming",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
      category: "Programming Languages",
    },
    {
      name: "Ruby",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      category: "Programming Languages",
    },

    // Design & Tools
    {
      name: "Figma",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "Design & Tools",
    },
    {
      name: "Adobe Photoshop",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
      category: "Design & Tools",
    },
    {
      name: "Canva",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      category: "Design & Tools",
    },

    // Others
    {
      name: "Packet Tracer",
      image:
        "https://packet-tracer-win.com/images/uploads/2023-12-29/icon-block-doaqi.png",
      category: "Others",
    },
    {
      name: "Introduction to Network",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
      category: "Others",
    },
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Others",
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "Others",
    },
    {
      name: "GitLab",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      category: "Others",
    },
    {
      name: "Visual Studio Code",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "Others",
    },
    {
      name: "Linux Terminal",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      category: "Others",
    },
  ];

  // Filter technologies based on active category
  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  // Define categories for the two rows
  const firstRowCategories = ["Frontend", "Backend"];
  const secondRowCategories = [
    "Programming Languages",
    "Design & Tools",
    "Others",
  ];

  const TechnologyCard = ({ technology }: { technology: Technology }) => (
    <div className="flex flex-col items-center justify-center w-40 h-40 bg-gray-50 rounded-lg shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-white flex-shrink-0">
      <img
        src={technology.image}
        alt={technology.name}
        className="w-16 h-16 mb-2 object-contain"
        onError={(e) => {
          // Fallback to a generic tech icon if image fails to load
          e.currentTarget.src =
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
        }}
      />
      <span className="font-bold text-center text-sm leading-tight text-black">
        {technology.name}
      </span>
    </div>
  );

  const CategoryButton = ({
    category,
    isActive,
    onClick,
  }: {
    category: string;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-black text-white shadow-lg transform scale-105"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105"
      }`}
    >
      {category}
    </button>
  );

  // Calculate the width needed for seamless scrolling
  const cardWidth = 160 + 24; // 40 (w-40) * 4 (rem to px) + 24px gap
  const technologiesWidth = filteredTechnologies.length * cardWidth;

  return (
    <motion.section
      className="py-20 px-8 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Technologies & Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Category Filters in Two Rows */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* Show All Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <CategoryButton
              category="All Technologies"
              isActive={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            />
          </motion.div>

          {/* First Row - Frontend and Backend */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            {firstRowCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.7 + index * 0.1,
                }}
              >
                <CategoryButton
                  category={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - Programming Languages, Design & Tools, Others */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            {secondRowCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.9 + index * 0.1,
                }}
              >
                <CategoryButton
                  category={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Technology Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {activeCategory === "all" ? (
            // Show all technologies in scrolling animation (original behavior)
            <div className="space-y-12">
              {/* First Row - Frontend and Backend technologies scrolling right to left */}
              <div className="relative overflow-hidden py-4">
                <motion.div
                  className="flex space-x-6"
                  animate={{ x: [-technologiesWidth / 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  style={{ width: `${technologiesWidth}px` }}
                >
                  {technologies
                    .filter((tech) =>
                      firstRowCategories.includes(tech.category)
                    )
                    .concat(
                      technologies.filter((tech) =>
                        firstRowCategories.includes(tech.category)
                      )
                    )
                    .map((tech, index) => (
                      <TechnologyCard key={`row1-${index}`} technology={tech} />
                    ))}
                </motion.div>
              </div>

              {/* Second Row - Other technologies scrolling left to right */}
              <div className="relative overflow-hidden py-4">
                <motion.div
                  className="flex space-x-6"
                  animate={{ x: [0, -technologiesWidth / 2] }}
                  transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  style={{ width: `${technologiesWidth}px` }}
                >
                  {technologies
                    .filter((tech) =>
                      secondRowCategories.includes(tech.category)
                    )
                    .concat(
                      technologies.filter((tech) =>
                        secondRowCategories.includes(tech.category)
                      )
                    )
                    .map((tech, index) => (
                      <TechnologyCard key={`row2-${index}`} technology={tech} />
                    ))}
                </motion.div>
              </div>
            </div>
          ) : (
            // Show filtered technologies in a single centered row
            <div className="flex justify-center py-8">
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                {filteredTechnologies.map((tech, index) => (
                  <motion.div
                    key={`filtered-${tech.name}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <TechnologyCard technology={tech} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
