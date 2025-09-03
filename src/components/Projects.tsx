import { useState } from "react";
import Heading from "./Heading";
import MouseScroll from "./MouseScroll";
const projects = [
  {
    title: "Zootopia - A hub for wildlife and pet purchases",
    description: "Zootopia is a mobile marketplace that connects animal suppliers, whether domestic or wildlife, with buyers like zoos and pet lovers. The platform supports three types of users:\n\nSuppliers who upload animals for sale\n\nZoos who can purchase any animal\n\nPet owners who are limited to domestic animal purchases\n\n💡 Impact\nLocal zoos using the platform now source wildlife more easily and securely, with verified payments and direct supplier access.",
    image: "/images/projects/zootopia.png",
    tech: ["React Native", "Supabase", "Expo", "Mobile UI Design"],
    github: "#",
    demo: "#",
  },
  {
    title: "Meditation Morning",
    description: "Meditation Morning is a calming mobile app designed to guide users through peaceful meditation sessions. It allows users to choose from a range of relaxing sounds, set timers, and track their practice habits. The clean interface and simple experience were built to encourage focus, consistency, and calm.",
    image: "/images/projects/meditation.png",
    tech: ["Expo", "React Native", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Bibliory – E-Resource Web app",
    description: "Bibliory is a university-level e-resource portal designed to host and manage digital content and resources for thousands of users. It supports four user roles: Super-admin, Editor, Staff, and Student — each with different levels of access and capabilities. The platform centralizes materials, e-books, and research papers, while providing usage analytics and overall access control to the super-admin team.",
    image: "/images/projects/bibliory.png",
    tech: ["Node.js", "React", "MongoDB", "JavaScript", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real Scout – Real Estate Discovery App",
    description: "RealScout is a mobile application designed to help users discover rental and sale properties with ease. Built as part of a real estate learning initiative, the app connects landlords and agents with potential tenants and buyers. Each listing includes rich media, detailed descriptions, and contact options, allowing for a seamless property discovery experience.    ",
    image: "/images/projects/realscout.png",
    tech: [ "React Native", "Firebase", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Alpax - Architecture & Engineering Consultancy Website",
    description: "This is the official website of Alpax, an architecture and engineering consultancy firm. It serves as their digital portfolio and communication hub — showcasing their completed and ongoing projects, listing their services, sharing client testimonials, and offering background on the team and company history. The site is built to establish credibility, attract new clients, and provide a simple yet informative browsing experience.",
    image: "/images/projects/alpax.png",
    tech: ["React", "Node.js", "JavaScript", "SEO-based Website"],
    github: "#",
    demo: "#",
  },
  // ...add more
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="p-10 bg-bg">
      <div className="flex flex-col items-center w-full md:px-[5rem]">
        <MouseScroll />
        <Heading
          title="Projects"
          subtitle="I had the pleasure to work on these awesome projects"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="cursor-pointer bg-bg2 text-white rounded-2xl shadow-md overflow-hidden 
                       transform transition-transform duration-300 hover:scale-105 
                       hover:shadow-xl"
          >
            {/* Thumbnail */}
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-52">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-3 whitespace-pre-line">{p.description}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          style={{ background: "rgba(0,0,0,0.7)" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-bg2 rounded-2xl p-6 max-w-lg w-[90%] text-white relative shadow-xl"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-semibold mt-4">{selectedProject.title}</h2>
            <p className="text-gray-300 mt-2 whitespace-pre-line">{selectedProject.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* <div className="flex gap-4 mt-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
                >
                  GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-sm"
                >
                  Live Demo
                </a>
              )}
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
}