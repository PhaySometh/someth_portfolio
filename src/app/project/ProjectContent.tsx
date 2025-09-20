"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiX,
  FiExternalLink,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaFacebook, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiStyledcomponents,
  SiStorybook,
} from "react-icons/si";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "School" | "Personal" | "Company" | "Hobby";
  description: string;
  fullDescription: string;
  demo?: string;
  facebook?: string;
  source?: string;
  image: string;
  tech: string[];
  contributors: string[];
}

export default function ProjectContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Technology icon mapping
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      "Next.js": <SiNextdotjs className="w-5 h-5" />,
      React: <FaReact className="w-5 h-5" />,
      TypeScript: <SiTypescript className="w-5 h-5" />,
      Tailwind: <SiTailwindcss className="w-5 h-5" />,
      Firebase: <SiFirebase className="w-5 h-5" />,
      "Node.js": <FaNodeJs className="w-5 h-5" />,
      Express: <SiExpress className="w-5 h-5" />,
      PostgreSQL: <SiPostgresql className="w-5 h-5" />,
      MongoDB: <SiMongodb className="w-5 h-5" />,
      JavaScript: <SiJavascript className="w-5 h-5" />,
      HTML5: <SiHtml5 className="w-5 h-5" />,
      CSS3: <SiCss3 className="w-5 h-5" />,
      Bootstrap: <SiBootstrap className="w-5 h-5" />,
      "Styled Components": <SiStyledcomponents className="w-5 h-5" />,
      Storybook: <SiStorybook className="w-5 h-5" />,
      APIs: <FiExternalLink className="w-5 h-5" />,
      "Chart.js": (
        <div className="w-5 h-5 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">
          C
        </div>
      ),
      "AI/ML Integration": (
        <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
          AI
        </div>
      ),
      JWT: (
        <div className="w-5 h-5 bg-gray-500 rounded flex items-center justify-center text-white text-xs font-bold">
          J
        </div>
      ),
      Sequelize: (
        <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
          S
        </div>
      ),
      "CSS Modules": <SiCss3 className="w-5 h-5" />,
      "React DnD": <FaReact className="w-5 h-5" />,
      "Styled System": <SiStyledcomponents className="w-5 h-5" />,
    };
    return (
      iconMap[tech] || (
        <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-bold">
          {tech.charAt(0)}
        </div>
      )
    );
  };

  const scrollHorizontal = (category: string, direction: "left" | "right") => {
    const container = scrollRefs.current[category];
    if (container) {
      // Calculate exact card width (320px card + 24px gap = 344px total)
      const cardWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap; // One complete card + gap

      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Calculate which card we're currently viewing
      const currentCardIndex = Math.round(currentScroll / scrollAmount);

      let targetCardIndex;
      let newScrollLeft;

      if (direction === "left") {
        targetCardIndex = Math.max(0, currentCardIndex - 1);
        newScrollLeft = targetCardIndex * scrollAmount;
      } else {
        targetCardIndex = currentCardIndex + 1;
        newScrollLeft = targetCardIndex * scrollAmount;

        // If this would go beyond maxScroll, set to maxScroll to show last card fully
        if (newScrollLeft >= maxScroll) {
          newScrollLeft = maxScroll;
        }
      }

      // Check boundaries and apply bouncing effect
      if (direction === "left" && currentCardIndex === 0) {
        // At the beginning - bounce to the right slightly then back to 0
        container.scrollTo({ left: -50, behavior: "smooth" });
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 150);
      } else if (direction === "right" && currentScroll >= maxScroll) {
        // At the end - bounce to the left slightly then back to max
        const overshoot = maxScroll + 50;
        container.scrollTo({ left: overshoot, behavior: "smooth" });
        setTimeout(() => {
          container.scrollTo({ left: maxScroll, behavior: "smooth" });
        }, 150);
      } else {
        // Normal scroll - move to exact position
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const projects: Project[] = [
    {
      id: "smean",
      title: "SMEAN - ស្មៀន",
      subtitle: "AI-Powered Voice Platform",
      category: "Company",
      description:
        "A Khmer-language voice-to-text and summarization platform, built to help professionals transcribe and summarize recordings.",
      fullDescription:
        "SMEAN is an innovative AI-powered platform designed specifically for the Khmer language. It provides advanced voice-to-text transcription capabilities and intelligent summarization features. The platform helps professionals, students, and businesses efficiently process audio content, making it accessible and actionable. Winner of Turing Hackathon Cycle 8, this project represents cutting-edge AI technology adapted for Southeast Asian languages.",
      demo: "https://www.smean-ai.com/",
      facebook: "https://web.facebook.com/profile.php?id=61577486514113",
      image: "/smean_thumbnail.png",
      tech: ["Next.js", "React", "Tailwind", "AI/ML Integration", "Node.js"],
      contributors: ["Someth Phay", "AI Research Team", "UX Designers"],
    },
    {
      id: "phsar-design",
      title: "Phsar Design",
      subtitle: "Freelancer Marketplace",
      category: "School",
      description:
        "A platform connecting freelance artists with clients who want to hire them for design services.",
      fullDescription:
        "Phsar Design is a comprehensive marketplace platform built as part of Next Generation training program. It serves as a bridge between talented freelance designers and clients seeking creative services. The platform features user authentication, project management, portfolio showcases, and secure payment integration. It includes advanced search and filtering capabilities, real-time messaging, and a review system to ensure quality service delivery.",
      demo: "https://phsardesign.vercel.app/",
      facebook: "https://web.facebook.com/profile.php?id=61567582710788",
      image: "/phsardesign_thumbnail.png",
      tech: ["Next.js", "React", "Tailwind", "Firebase", "TypeScript"],
      contributors: ["Someth Phay", "Design Team", "Mentors"],
    },
    {
      id: "khodkquiz",
      title: "KhodKquiz",
      subtitle: "Real-time Quiz System",
      category: "School",
      description:
        "A real-time, gamified web quiz system built for Software Engineering and Database Administration courses.",
      fullDescription:
        "KhodKquiz is a comprehensive real-time quiz platform developed as a final project for Software Engineering Year 2. The system supports multiple question types, real-time multiplayer functionality, detailed analytics, and automated grading. Built with a robust backend using Node.js and Express, with PostgreSQL for data persistence and React for an interactive frontend. The platform includes admin panels, student dashboards, and comprehensive reporting features.",
      source: "https://github.com/PhaySometh/KhodKquiz",
      image: "/khodkquiz_thumbnail.png",
      tech: ["Node.js", "Express", "Sequelize", "PostgreSQL", "React"],
      contributors: ["Someth Phay", "Team Members", "Academic Supervisors"],
    },
    // Mock projects for demonstration
    {
      id: "portfolio-v1",
      title: "Portfolio Website v1",
      subtitle: "Personal Brand Identity",
      category: "Personal",
      description:
        "First iteration of personal portfolio showcasing projects and skills.",
      fullDescription:
        "This was my first attempt at creating a professional portfolio website. Built with vanilla HTML, CSS, and JavaScript, it served as a learning platform for web development fundamentals. The project helped me understand responsive design principles, CSS animations, and basic JavaScript interactivity. While simple, it laid the foundation for future, more complex projects and taught me the importance of clean, semantic code.",
      source: "https://github.com/example/portfolio-v1",
      image: "/1.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      contributors: ["Someth Phay"],
    },
    {
      id: "task-manager",
      title: "Task Manager App",
      subtitle: "Productivity Tool",
      category: "Personal",
      description:
        "A simple task management application with drag-and-drop functionality.",
      fullDescription:
        "A personal productivity application built to explore React's component architecture and state management. Features include task creation, editing, deletion, drag-and-drop reordering, and local storage persistence. The project helped me understand React hooks, context API, and modern JavaScript patterns. It includes a clean, intuitive interface with smooth animations and responsive design for mobile and desktop use.",
      source: "https://github.com/example/task-manager",
      image: "/2.png",
      tech: ["React", "TypeScript", "CSS Modules", "React DnD"],
      contributors: ["Someth Phay"],
    },
    {
      id: "weather-app",
      title: "Weather Dashboard",
      subtitle: "Real-time Weather Data",
      category: "Hobby",
      description:
        "A weather application displaying real-time weather information with beautiful UI.",
      fullDescription:
        "A hobby project exploring API integration and data visualization. The weather dashboard provides current weather conditions, 5-day forecasts, and interactive maps. Built with React and integrated with OpenWeatherMap API, it features geolocation support, city search functionality, and animated weather icons. The project demonstrates API consumption, error handling, and responsive design principles while maintaining an aesthetically pleasing interface.",
      source: "https://github.com/example/weather-dashboard",
      image: "/3.png",
      tech: ["React", "APIs", "Chart.js", "Styled Components"],
      contributors: ["Someth Phay"],
    },
    {
      id: "blog-platform",
      title: "Blog Platform",
      subtitle: "Content Management System",
      category: "Hobby",
      description:
        "A full-stack blog platform with user authentication and content management.",
      fullDescription:
        "A comprehensive blogging platform built as a weekend project to explore full-stack development. Features include user registration and authentication, rich text editing, comment systems, and admin functionality. The backend is built with Node.js and Express, using MongoDB for data storage. The frontend utilizes React with a clean, medium-inspired design. The project includes features like post scheduling, categories, tags, and social sharing.",
      source: "https://github.com/example/blog-platform",
      image: "/4.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      contributors: ["Someth Phay"],
    },
    {
      id: "ecommerce-ui",
      title: "E-commerce UI Kit",
      subtitle: "Component Library",
      category: "Company",
      description:
        "A reusable UI component library for e-commerce applications.",
      fullDescription:
        "A comprehensive UI component library developed for company projects, focusing on e-commerce applications. The kit includes over 50 reusable components such as product cards, shopping carts, checkout forms, and user dashboards. Built with React and TypeScript, it follows atomic design principles and includes comprehensive documentation. The library features customizable themes, accessibility compliance, and extensive testing coverage for production use.",
      image: "/5.png",
      tech: ["React", "TypeScript", "Storybook", "Styled System"],
      contributors: ["Someth Phay", "Frontend Team", "Design System Team"],
    },
    // Additional School Projects
    {
      id: "student-portal",
      title: "Student Management Portal",
      subtitle: "Academic Information System",
      category: "School",
      description:
        "A comprehensive student portal for managing academic records and course enrollment.",
      fullDescription:
        "Built as a group project for Database Design course, this portal allows students to view grades, enroll in courses, and manage their academic profile. Features include real-time grade tracking, course recommendations, and administrative tools for faculty.",
      image: "/6.png",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      contributors: ["Someth Phay", "Database Team", "Academic Advisor"],
    },
    {
      id: "library-system",
      title: "Digital Library System",
      subtitle: "Book Management Platform",
      category: "School",
      description:
        "A digital library management system with book tracking and user management.",
      fullDescription:
        "Developed for Software Engineering course, this system manages book inventory, user registrations, and borrowing records. Includes features like book search, reservation system, and overdue notifications.",
      image: "/7.png",
      tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      contributors: ["Someth Phay", "SE Team", "Library Staff"],
    },
    {
      id: "grade-calculator",
      title: "GPA Calculator App",
      subtitle: "Academic Performance Tracker",
      category: "School",
      description:
        "A mobile app for calculating GPA and tracking academic performance.",
      fullDescription:
        "Created for Mobile Development course, this app helps students calculate their GPA, track semester performance, and set academic goals. Features include grade input, GPA calculation, and performance analytics.",
      image: "/1.png",
      tech: ["React Native", "SQLite", "Chart.js"],
      contributors: ["Someth Phay", "Mobile Dev Team"],
    },
    // Additional Personal Projects
    {
      id: "budget-tracker",
      title: "Personal Budget Tracker",
      subtitle: "Financial Management Tool",
      category: "Personal",
      description:
        "A personal finance application for tracking expenses and managing budgets.",
      fullDescription:
        "Built to learn React and financial APIs, this app helps track daily expenses, categorize spending, and visualize financial habits. Features include expense categorization, budget alerts, and spending analytics.",
      image: "/2.png",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      contributors: ["Someth Phay"],
    },
    {
      id: "recipe-finder",
      title: "Recipe Discovery App",
      subtitle: "Culinary Exploration Platform",
      category: "Personal",
      description:
        "A recipe finder app with ingredient-based search and meal planning.",
      fullDescription:
        "A hobby project that uses recipe APIs to help users find recipes based on available ingredients. Features include recipe search, meal planning, shopping list generation, and nutritional information.",
      image: "/3.png",
      tech: ["Vue.js", "APIs", "Vuex", "CSS3"],
      contributors: ["Someth Phay"],
    },
    {
      id: "fitness-tracker",
      title: "Fitness Progress Tracker",
      subtitle: "Health & Wellness App",
      category: "Personal",
      description:
        "A fitness tracking application for monitoring workouts and progress.",
      fullDescription:
        "Personal project to explore health data visualization. Tracks workout sessions, monitors progress over time, and provides insights into fitness goals. Features include exercise logging, progress charts, and goal setting.",
      image: "/4.png",
      tech: ["React", "D3.js", "LocalStorage", "PWA"],
      contributors: ["Someth Phay"],
    },
    {
      id: "photo-gallery",
      title: "Photo Gallery Manager",
      subtitle: "Image Organization Tool",
      category: "Personal",
      description:
        "A photo management application with tagging and organization features.",
      fullDescription:
        "Built to organize personal photo collections with smart tagging and search capabilities. Features include photo upload, automatic tagging, album creation, and advanced search filters.",
      image: "/5.png",
      tech: ["React", "Firebase", "AI/ML Integration", "CSS3"],
      contributors: ["Someth Phay"],
    },
    // Additional Company Projects
    {
      id: "dashboard-analytics",
      title: "Business Analytics Dashboard",
      subtitle: "Data Visualization Platform",
      category: "Company",
      description:
        "A comprehensive analytics dashboard for business intelligence and reporting.",
      fullDescription:
        "Developed for company's internal use, this dashboard provides real-time business metrics, sales analytics, and performance tracking. Features include interactive charts, data filtering, and automated reporting.",
      image: "/6.png",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      contributors: ["Someth Phay", "Data Team", "Business Analysts"],
    },
    {
      id: "crm-system",
      title: "Customer Relationship Management",
      subtitle: "Client Management Platform",
      category: "Company",
      description:
        "A CRM system for managing customer relationships and sales pipeline.",
      fullDescription:
        "Enterprise-level CRM system for tracking customer interactions, managing sales pipeline, and analyzing customer data. Features include contact management, sales tracking, and customer analytics.",
      image: "/7.png",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Redis"],
      contributors: ["Someth Phay", "Backend Team", "Sales Team"],
    },
    {
      id: "inventory-management",
      title: "Inventory Management System",
      subtitle: "Supply Chain Platform",
      category: "Company",
      description:
        "An inventory management system for tracking products and supply chain.",
      fullDescription:
        "Comprehensive inventory management solution for tracking stock levels, managing suppliers, and optimizing supply chain operations. Features include real-time inventory tracking, automated reordering, and supplier management.",
      image: "/1.png",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
      contributors: ["Someth Phay", "Supply Chain Team", "Operations"],
    },
    // Additional Hobby Projects
    {
      id: "music-player",
      title: "Custom Music Player",
      subtitle: "Audio Streaming App",
      category: "Hobby",
      description:
        "A custom music player with playlist management and audio visualization.",
      fullDescription:
        "Weekend project exploring Web Audio APIs and music visualization. Features include playlist creation, audio visualization, equalizer controls, and music library management.",
      image: "/2.png",
      tech: ["JavaScript", "Web Audio API", "Canvas", "CSS3"],
      contributors: ["Someth Phay"],
    },
    {
      id: "game-collection",
      title: "Retro Game Collection",
      subtitle: "Browser Game Platform",
      category: "Hobby",
      description:
        "A collection of classic browser games built with vanilla JavaScript.",
      fullDescription:
        "Fun project recreating classic games like Snake, Tetris, and Pong using vanilla JavaScript and Canvas API. Features include high score tracking, multiple game modes, and responsive controls.",
      image: "/3.png",
      tech: ["JavaScript", "Canvas", "HTML5", "CSS3"],
      contributors: ["Someth Phay"],
    },
    {
      id: "chatbot-ai",
      title: "AI Chatbot Assistant",
      subtitle: "Conversational AI Platform",
      category: "Hobby",
      description:
        "An AI-powered chatbot for answering questions and providing assistance.",
      fullDescription:
        "Experimental project exploring natural language processing and AI integration. Features include contextual conversations, knowledge base integration, and personality customization.",
      image: "/4.png",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      contributors: ["Someth Phay"],
    },
    {
      id: "3d-portfolio",
      title: "3D Interactive Portfolio",
      subtitle: "Immersive Web Experience",
      category: "Hobby",
      description:
        "An experimental 3D portfolio website with interactive elements.",
      fullDescription:
        "Creative experiment with Three.js to create an immersive 3D portfolio experience. Features include 3D animations, interactive objects, and responsive 3D environments.",
      image: "/5.png",
      tech: ["Three.js", "WebGL", "React", "GLSL"],
      contributors: ["Someth Phay"],
    },
  ];

  const categories = ["School", "Personal", "Company", "Hobby"];

  const getProjectsByCategory = (category: string) => {
    return projects.filter((project) => project.category === category);
  };

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

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
              A comprehensive showcase of my work across different domains -
              from academic projects to personal experiments and professional
              contributions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Projects by Category */}
      <motion.section
        className="bg-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => {
            const categoryProjects = getProjectsByCategory(category);
            if (categoryProjects.length === 0) return null;

            return (
              <motion.div
                key={category}
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                    {category} Projects
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => scrollHorizontal(category, "left")}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Scroll left"
                    >
                      <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => scrollHorizontal(category, "right")}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Scroll right"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scrollable Projects */}
                <div className="relative">
                  <div
                    ref={(el) => {
                      scrollRefs.current[category] = el;
                    }}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {categoryProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className="group relative flex-shrink-0 w-80 cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onClick={() => openProjectDetail(project)}
                      >
                        <div className="relative w-full h-48 overflow-hidden rounded-2xl shadow-lg">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                          />
                          {/* Hover overlay with project name */}
                          <div className="absolute inset-0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center z-10">
                            <h3 className="text-white text-lg md:text-xl font-bold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 backdrop-brightness-75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating X Button */}
              <button
                className="absolute top-4 right-6 cursor-pointer bg-white bg-opacity-90 hover:bg-opacity-100 hover:scale-110 hover:shadow-xl rounded-full p-2 transition-all duration-300 z-20 shadow-lg"
                onClick={closeProjectDetail}
              >
                <FiX className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Scrollable Content */}
              <div className="max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        selectedProject.category === "School"
                          ? "bg-blue-100 text-blue-800"
                          : selectedProject.category === "Personal"
                          ? "bg-green-100 text-green-800"
                          : selectedProject.category === "Company"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {selectedProject.category} Project
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6">
                    {selectedProject.subtitle}
                  </p>

                  <div className="prose max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">🛠️</span>
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contributors */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FiUsers className="mr-2" />
                      Contributors
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.contributors.map(
                        (contributor, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {contributor}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}

                    {selectedProject.source && (
                      <a
                        href={selectedProject.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Source Code
                      </a>
                    )}

                    {selectedProject.facebook && (
                      <a
                        href={selectedProject.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <FaFacebook className="w-4 h-4" />
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <motion.section
        className="bg-gray-50 py-20"
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
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s build something amazing together!
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
