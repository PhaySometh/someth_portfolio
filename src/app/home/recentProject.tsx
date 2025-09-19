import React from "react";
import Image from "next/image";

export default function RecentProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      image: "/1.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      image: "/2.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
      tech: ["React", "Chart.js", "Weather API", "Tailwind"],
      image: "/3.png",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 px-8 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            A showcase of my latest work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <figure className="px-4 pt-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl mb-2">{project.title}</h3>
                <p className="text-base-content/70 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="badge badge-outline badge-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <a href={project.github} className="btn btn-outline btn-sm">
                    GitHub
                  </a>
                  <a href={project.demo} className="btn btn-primary btn-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg">View All Projects</button>
        </div>
      </div>
    </section>
  );
}
