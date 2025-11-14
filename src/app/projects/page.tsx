import type { Metadata } from "next";
import { getAllProjects } from "@/lib/posts"; // Import our new function

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects by Munthasir Shiraz.",
};

export default function ProjectsPage() {
  // Fetch the projects from the content directory
  const projects = getAllProjects();

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-12">
        <h1 className="font-sans text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="font-serif text-lg text-foreground/80 mt-4">
          Here are a few things I've built and worked on. Some were for clients,
          some for fun, and some just to learn something new.
        </p>
      </header>

      {/* Project List */}
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h2 className="font-sans text-xl font-semibold tracking-tight group-hover:text-accent">
                {project.title}
              </h2>
              <p className="mt-2 font-serif text-foreground/80">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}