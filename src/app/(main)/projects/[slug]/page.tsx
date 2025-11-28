import { getProjectBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="container py-12 md:py-24 px-4 md:px-6">
            <header className="mb-12 space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    {project.title}
                </h1>
                <p className="text-muted-foreground">
                    Published on{" "}
                    {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </header>

            {/* Render the HTML generated from the Markdown file */}
            <div
                className="prose dark:prose-invert max-w-none font-sans"
                dangerouslySetInnerHTML={{ __html: project.contentHtml }}
            />
        </article>
    );
}
