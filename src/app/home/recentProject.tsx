"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPlay, FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

export default function RecentProjects() {
  const projects = [
    {
      title: "SMEAN - ស្មៀន",
      subtitle: "the startup project",
      description:
        "A Khmer-language voice-to-text and summarization platform, built to help professionals transcribe and summarize recordings. Winner of Turing Hackathon Cycle 8 🚀",
      demo: "https://www.smean-ai.com/",
      facebook: "https://web.facebook.com/profile.php?id=61577486514113",
      source: null,
      image: "/smean_thumbnail.png",
      tech: ["Next.js", "React", "Tailwind", "AI/ML Integration"],
    },
    {
      title: "Phsar Design",
      subtitle: "next gen batch 2 project",
      description:
        "A platform idea to connect freelance/talent artists with clients who want to hire them for design or services.",
      demo: "https://phsardesign.vercel.app/",
      facebook: "https://web.facebook.com/profile.php?id=61567582710788",
      source: null,
      image: "/phsardesign_thumbnail.png",
      tech: ["Next.js", "React", "Tailwind", "Firebase"],
    },
    {
      title: "KhodKquiz",
      subtitle: "SE Year 2 final project",
      description:
        "A real-time, gamified web quiz system (Node.js, Express, Sequelize, PostgreSQL + React). Built for both Software Engineering and Database Administration courses.",
      demo: null,
      facebook: null,
      source: "https://github.com/PhaySometh/KhodKquiz",
      image: "/khodkquiz_thumbnail.png",
      tech: ["Node.js", "Express", "Sequelize", "PostgreSQL", "React"],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
            Recent Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of my latest work and personal projects that demonstrate
            my skills and passion for innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content Section */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-500 font-medium italic">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image Section with Overlay Buttons */}
              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      priority={index < 2}
                    />

                    {/* Hover overlay - only shows on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none" />

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-end justify-center p-6">
                      <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiPlay className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.source && (
                          <motion.a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiGithub className="w-4 h-4" />
                            Source
                          </motion.a>
                        )}
                        {project.facebook && (
                          <motion.a
                            href={project.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors duration-200 shadow-lg backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaFacebook className="w-4 h-4" />
                            Facebook
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/project"
            className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out inline-block"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
