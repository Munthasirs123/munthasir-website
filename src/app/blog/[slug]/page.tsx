import { getBlogPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// This function generates metadata for each post page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="font-sans text-3xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-foreground/60">
          Published on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      {/* Post Content - THIS IS THE MAGIC PART */}
      <div
        className="prose dark:prose-invert max-w-prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
      />
    </article>
  );
}