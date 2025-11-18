import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This function tells Next.js which pages to pre-build. It is the key to fixing the 404.
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Define the shape of the props for clarity and type safety
type Props = {
  params: Promise<{ slug: string }>;
};

// This function generates the metadata (e.g., the browser tab title) for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

// This is the main component for the page
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12 md:py-24 px-4 md:px-6">
      <header className="mb-12 space-y-4">
        <Link href="/blog">
          <Button variant="outline" className="border-2 border-blackish bg-cream shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_#1A1A1A]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
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

      {/* This div will render the HTML from your Markdown file */}
      <div
        className="prose dark:prose-invert max-w-none font-sans"
        dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
      />
    </article>
  );
}