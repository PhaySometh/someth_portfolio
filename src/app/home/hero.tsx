import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-base-100 to-base-200">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Someth Phay
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-base-content/80">
          Full-Stack Developer & Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-base-content/60 mb-8 max-w-2xl">
          Passionate about creating innovative web solutions and building
          scalable applications that make a difference in people's lives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary btn-lg">View My Work</button>
          <button className="btn btn-outline btn-lg">Get In Touch</button>
        </div>
      </div>
    </section>
  );
}
