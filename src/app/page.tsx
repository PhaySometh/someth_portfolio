

export const metadata = {
  title: "Someth Phay Portfolio",
  description: "Showcasing the projects, skills, and experience of Someth Phay, a passionate web developer and designer.",
  icons: {
    icon: "/somethphay_logo.png",
    shortcut: "/somethphay_logo.png"
  },
};

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold mb-4">Someth Phay Portfolio</h1>
        <p className="text-lg text-gray-600">
          Explore my projects, skills, and experiences in web development and design.
        </p>
      </main>
    </div>
  );
}