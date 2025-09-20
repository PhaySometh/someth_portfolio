"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCode, FiTrendingUp } from "react-icons/fi";

export default function Portfolio() {
  const featuredWorks = [
    {
      id: 1,
      title: "SMEAN AI Platform",
      category: "Startup Project",
      description:
        "Revolutionary Khmer voice-to-text platform that won Turing Hackathon Cycle 8",
      image: "/smean_thumbnail.png",
      tags: ["AI/ML", "Next.js", "Startup"],
      achievement: "🏆 Hackathon Winner",
    },
    {
      id: 2,
      title: "Phsar Design Marketplace",
      category: "Academic Project",
      description:
        "Freelance marketplace connecting designers with clients across Cambodia",
      image: "/phsardesign_thumbnail.png",
      tags: ["React", "Firebase", "Marketplace"],
      achievement: "🎓 Featured Project",
    },
    {
      id: 3,
      title: "KhodKquiz Platform",
      category: "University Project",
      description:
        "Real-time quiz system with advanced analytics and gamification",
      image: "/khodkquiz_thumbnail.png",
      tags: ["Node.js", "PostgreSQL", "React"],
      achievement: "🎯 Final Year Project",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Personal Project",
      description:
        "Modern, responsive portfolio showcasing development journey",
      image: "/1.png",
      tags: ["Next.js", "Framer Motion", "Design"],
      achievement: "✨ Personal Brand",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "Side Project",
      description:
        "Beautiful weather application with real-time data visualization",
      image: "/2.png",
      tags: ["React", "APIs", "Chart.js"],
      achievement: "🌤️ Open Source",
    },
    {
      id: 6,
      title: "Task Management App",
      category: "Learning Project",
      description: "Productivity tool with drag-and-drop functionality",
      image: "/3.png",
      tags: ["React", "DnD", "Local Storage"],
      achievement: "📋 Productivity Tool",
    },
  ];

  const skills = [
    { name: "Frontend Development", level: 90, icon: "💻" },
    { name: "Backend Development", level: 85, icon: "⚙️" },
    { name: "UI/UX Design", level: 80, icon: "🎨" },
    { name: "Database Design", level: 75, icon: "🗄️" },
    { name: "DevOps & Deployment", level: 70, icon: "🚀" },
    { name: "Mobile Development", level: 65, icon: "📱" },
  ];

  const achievements = [
    {
      title: "Turing Hackathon Winner",
      organization: "Turing Institute",
      year: "2024",
      description: "Won Cycle 8 with SMEAN AI platform",
      icon: <FiAward className="w-6 h-6" />,
    },
    {
      title: "Next Generation Graduate",
      organization: "Sabay Digital",
      year: "2024",
      description: "Completed intensive tech training program",
      icon: <FiBookOpen className="w-6 h-6" />,
    },
    {
      title: "Software Engineering Student",
      organization: "Royal University of Phnom Penh",
      year: "2022-Present",
      description: "Pursuing Bachelor's in Software Engineering",
      icon: <FiCode className="w-6 h-6" />,
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      year: "2023-Present",
      description: "Active contributor to various projects",
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-gray-50 to-white py-20"
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
              Portfolio
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A curated collection of my best work, achievements, and
              contributions to the tech community. Each piece represents a
              milestone in my journey as a developer and innovator.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Featured Works Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highlighted projects that showcase my technical skills and
              creative problem-solving abilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                      {work.achievement}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500 font-medium">
                      {work.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical capabilities and areas of
              specialization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {skill.name}
                  </h3>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-black h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: index * 0.1 + 0.5,
                      }}
                    />
                  </div>
                  <span className="absolute right-0 -top-8 text-sm font-bold text-gray-700">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones and recognition that mark my growth and contributions
              in the tech industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-black text-white p-3 rounded-xl">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-2">
                      {achievement.organization} • {achievement.year}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let&apos;s discuss how we can bring your ideas to life with
            innovative technology solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out inline-block"
            >
              Get In Touch
            </Link>
            <Link
              href="/project"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 ease-out inline-block"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
