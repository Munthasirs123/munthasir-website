import { getProjectBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-12 md:py-24 px-4 md:px-6 max-w-3xl mx-auto">
            <Link href="/projects">
                <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-muted-foreground">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Button>
            </Link>

            <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="default" className="bg-blackish/5 border border-blackish/20 text-xs px-2 py-1 rounded-md dark:bg-teal/10 dark:border-teal/30 dark:text-teal">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4 dark:text-teal">
                    {project.title}
                </h1>
                <p className="text-xl text-muted-foreground dark:text-cream/80">
                    {project.description}
                </p>

                <div className="flex gap-4 mt-6">
                    {project.links.map((link) => {
                        if (link.type === 'Article') return null; // Don't show article link on the article page

                        return (
                            <a
                                key={link.type}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" className="border-2 border-blackish shadow-[4px_4px_0px_#1A1A1A] hover:translate-y-1 hover:shadow-none transition-all">
                                    {link.type === 'Source' ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                                    {link.type}
                                </Button>
                            </a>
                        );
                    })}
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
            </div>
        </div>
    );
}
