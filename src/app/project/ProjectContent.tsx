"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiPlay, FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

export default function ProjectContent() {
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <motion.section
        className="bg-white py-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A comprehensive showcase of my work, from startup ventures to
              academic projects. Each project represents a journey of learning,
              innovation, and problem-solving.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
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
                    transition={{ duration: 0.8 }}
                  >
                    <div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg text-gray-500 font-medium italic">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                        Tech Stack
                      </h3>
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
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      {/* Regular img tag for testing */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          console.error("Failed to load image:", project.image);
                          e.currentTarget.style.backgroundColor = "#f3f4f6";
                          e.currentTarget.style.display = "flex";
                          e.currentTarget.style.alignItems = "center";
                          e.currentTarget.style.justifyContent = "center";
                          e.currentTarget.innerHTML = `<span style="color: #6b7280;">Image not found: ${project.title}</span>`;
                        }}
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
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-white py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Want to collaborate?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm always interested in new opportunities and exciting projects.
            Let's build something amazing together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
