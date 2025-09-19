import React from "react";
import ProjectContent from "./ProjectContent";

export const metadata = {
  title: "Projects - Someth Phay Portfolio",
  description:
    "Explore Someth Phay's comprehensive project portfolio, featuring SMEAN, Phsar Design, KhodKquiz, and other innovative web development projects.",
  icons: {
    icon: "/somethphay_logo.png",
    shortcut: "/somethphay_logo.png",
  },
};

export default function ProjectPage() {
  return <ProjectContent />;
}
