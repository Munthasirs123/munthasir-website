import type { Metadata } from "next";
import { getAllProjects } from "@/lib/posts";
import type { Project } from "@/lib/posts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          Experiments, apps & projects I've had a ton of fun building!
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.title} href={`/projects/${project.slug}`}>
            <Card
              className="border-2 border-blackish dark:border-teal shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#00A0A0] flex flex-col bg-cream dark:bg-blackish h-full hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-teal leading-tight">{project.title}</h2>
                  <span className="text-xs font-bold text-muted-foreground dark:text-teal/80 whitespace-nowrap ml-4">{new Date(project.date).getFullYear()}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="bg-blackish/5 border border-blackish/20 text-[10px] px-2 py-1 rounded-md hover:bg-blackish hover:text-cream transition-colors dark:bg-teal/10 dark:border-teal/30 dark:text-teal dark:hover:bg-teal/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-sm text-foreground dark:text-cream/90 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-blackish shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_#1A1A1A] active:shadow-[1px_1px_0px_#1A1A1A] transition-all font-bold text-xs h-8 bg-pink/10 hover:bg-pink/20 dark:bg-pink/20 dark:hover:bg-pink/30 dark:text-pink dark:border-pink"
                  >
                    Article
                  </Button>
                  {project.links
                    .filter(link => link.type === 'Source' || link.type === 'Demo')
                    .map((link) => (
                      <a
                        key={link.type}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-blackish shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_#1A1A1A] active:shadow-[1px_1px_0px_#1A1A1A] transition-all font-bold text-xs h-8 bg-cream hover:bg-blackish/5 dark:bg-blackish dark:hover:bg-teal/10 dark:text-teal dark:border-teal"
                        >
                          {link.type}
                        </Button>
                      </a>
                    ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}