import React from "react";

export default function Technology() {
  const technologies = [
    { name: "React", icon: "⚛️", level: "Advanced" },
    { name: "Next.js", icon: "🔺", level: "Advanced" },
    { name: "TypeScript", icon: "📘", level: "Advanced" },
    { name: "Node.js", icon: "🟢", level: "Intermediate" },
    { name: "Python", icon: "🐍", level: "Intermediate" },
    { name: "Tailwind CSS", icon: "🎨", level: "Advanced" },
    { name: "MongoDB", icon: "🍃", level: "Intermediate" },
    { name: "PostgreSQL", icon: "🐘", level: "Intermediate" },
  ];

  return (
    <section className="py-20 px-8 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies & Skills
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center text-center p-6">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <h3 className="card-title text-lg">{tech.name}</h3>
                <div className="badge badge-primary badge-sm">{tech.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
