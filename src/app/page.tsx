import Hero from "./home/hero";
import StatsSection from "./home/statsSection";
import Technology from "./home/technology";
import RecentProjects from "./home/recentProject";

export const metadata = {
  title: "Home - Someth Phay Portfolio",
  description:
    "Welcome to Someth Phay's portfolio. Explore my projects, skills, and experience as a passionate web developer and designer.",
  icons: {
    icon: "/somethphay_logo.png",
    shortcut: "/somethphay_logo.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <Technology />
      <RecentProjects />
    </div>
  );
}
