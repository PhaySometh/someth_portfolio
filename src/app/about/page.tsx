"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiAward,
  FiBook,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";

export default function About() {
  const personalInfo = {
    name: "Someth Phay",
    title: "Software Engineer & Co-founder",
    location: "Phnom Penh, Cambodia",
    bio: "Passionate software engineer with a love for creating innovative solutions that bridge technology and real-world problems. Currently pursuing my degree in Software Engineering while co-founding SMEAN, an AI-powered platform for Khmer language processing. I believe in the power of technology to transform communities and am committed to contributing to Cambodia's growing tech ecosystem.",
    image: "/somethphay_logo.png",
  };

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Royal University of Phnom Penh (RUPP)",
      period: "2022 - Present",
      description:
        "Comprehensive program covering software development, algorithms, database systems, and project management. Currently maintaining excellent academic performance while working on practical projects.",
      achievements: [
        "Dean's List Student",
        "Active in Tech Communities",
        "Leading Student Projects",
      ],
    },
    {
      degree: "Next Generation Training Program",
      institution: "Sabay Digital Corporation",
      period: "2024",
      description:
        "Intensive 6-month program focused on modern web development, startup methodology, and industry best practices. Graduated as one of the top performers in the cohort.",
      achievements: [
        "Top Graduate",
        "Mentorship Program",
        "Industry Project Experience",
      ],
    },
    {
      degree: "High School Diploma",
      institution: "Local High School",
      period: "2018 - 2022",
      description:
        "Strong foundation in mathematics and sciences, with early exposure to programming and logical thinking.",
      achievements: [
        "Mathematics Excellence",
        "Early Programming Interest",
        "Leadership Activities",
      ],
    },
  ];

  const experience = [
    {
      role: "Co-founder & Lead Developer",
      company: "SMEAN",
      period: "2024 - Present",
      type: "Startup",
      description:
        "Co-founded an AI-powered voice-to-text platform specifically designed for the Khmer language. Leading the technical development while managing a small team of developers and designers.",
      responsibilities: [
        "Product architecture and technical strategy",
        "Full-stack development using Next.js and AI/ML integration",
        "Team leadership and project management",
        "Investor relations and pitch presentations",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      type: "Freelance",
      description:
        "Working on various client projects ranging from small business websites to complex web applications. Focus on modern technologies and user-centered design.",
      responsibilities: [
        "Custom web application development",
        "Client consultation and requirement analysis",
        "Database design and optimization",
        "Deployment and maintenance",
      ],
    },
    {
      role: "Student Developer",
      company: "University Projects",
      period: "2022 - Present",
      type: "Academic",
      description:
        "Leading and contributing to various academic projects, including the KhodKquiz real-time quiz system and other collaborative software development initiatives.",
      responsibilities: [
        "Software engineering best practices",
        "Team collaboration and version control",
        "Database administration",
        "Testing and quality assurance",
      ],
    },
  ];

  const achievements = [
    {
      title: "Turing Hackathon Winner",
      organization: "Turing Institute Cambodia",
      year: "2024",
      description:
        "Won Cycle 8 with the SMEAN AI platform, competing against teams from across Cambodia's tech community.",
    },
    {
      title: "Featured Student Project",
      organization: "Royal University of Phnom Penh",
      year: "2024",
      description:
        "KhodKquiz project selected as exemplary final year project in Software Engineering program.",
    },
    {
      title: "Community Contributor",
      organization: "Cambodia Tech Community",
      year: "2023 - Present",
      description:
        "Active participant in local tech meetups, workshops, and mentoring programs for new developers.",
    },
    {
      title: "Open Source Advocate",
      organization: "GitHub Community",
      year: "2023 - Present",
      description:
        "Regular contributor to open source projects with focus on tools for Southeast Asian languages.",
    },
  ];

  const personalDetails = [
    { label: "Age", value: "22 years old", icon: <FiCalendar /> },
    { label: "Location", value: "Phnom Penh, Cambodia", icon: <FiMapPin /> },
    {
      label: "Languages",
      value: "Khmer (Native), English (Fluent)",
      icon: <FiBook />,
    },
    { label: "Focus", value: "Full-Stack Development & AI", icon: <FiCode /> },
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4">
                About Me
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {personalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-gray-600">{detail.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        {detail.label}
                      </p>
                      <p className="text-gray-800 font-semibold">
                        {detail.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out inline-block text-center"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/project"
                  className="border-2 border-black text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white hover:scale-105 transition-all duration-200 ease-out inline-block text-center"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <Image
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
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
              Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology and
              software engineering.
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 bg-black text-white p-3 rounded-xl">
                    <FiBook className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                      <span className="text-sm md:text-base text-gray-500 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 font-medium mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
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
              Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional experience and practical application of my technical
              skills in real-world projects.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 bg-black text-white p-3 rounded-xl">
                    <FiBriefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">
                          {exp.company} •{" "}
                          <span className="text-sm">{exp.type}</span>
                        </p>
                      </div>
                      <span className="text-sm md:text-base text-gray-500 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map(
                          (responsibility, respIndex) => (
                            <li
                              key={respIndex}
                              className="text-gray-700 text-sm flex items-start"
                            >
                              <span className="text-black mr-2">•</span>
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
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
              Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that highlight my growth and
              contributions to the tech community.
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
                    <FiAward className="w-6 h-6" />
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
            Let&apos;s Connect!
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I&apos;m always excited to discuss new opportunities, collaborate on
            interesting projects, or simply chat about technology and
            innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out inline-block"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
