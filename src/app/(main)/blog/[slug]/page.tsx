import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Tell Next.js which blog post pages to pre-build
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// In Next 15, params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for each blog post page
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params; // ✅ await the Promise
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

// Main blog post page
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // ✅ await the Promise
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12 md:py-24 px-4 md:px-6">
      <header className="mb-12 space-y-4">

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground">
          Published on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {/* Render the HTML generated from the Markdown file */}
      <div
        className="prose dark:prose-invert max-w-none font-sans"
        dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
      />
    </article>
  );
}
