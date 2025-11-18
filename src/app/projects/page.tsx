import type { Metadata } from "next";
import { getAllProjects } from "@/lib/posts";
import type { Project } from "@/lib/posts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects by Munthasir Shiraz.",
};

export default function ProjectsPage() {
  const projects: Project[] = getAllProjects();

  return (
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Open-source projects I've made over the years, including tools, libraries, frameworks, and experiments.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="border-2 border-blackish shadow-[8px_8px_0px_#1A1A1A] flex flex-col bg-cream hover:-translate-y-1 transition-transform"
          >
            <CardHeader>
              <h2 className="text-2xl font-bold">{project.title}</h2>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 p-6 pt-0">
              <p className="text-muted-foreground flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 my-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default" className="border-2 border-blackish">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto">
                {project.links.map((link) => (
                  <a
                    key={link.type}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-2 border-blackish bg-cream shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_#1A1A1A] active:shadow-[1px_1px_0px_#1A1A1A] transition-all">
                      {link.type.toUpperCase()}
                    </Button>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}