import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on programming, design, and life.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-sans text-3xl font-bold tracking-tight mb-8">
        Writing
      </h1>

      {posts.length === 0 ? (
        <p className="text-foreground/80">No posts yet. Stay tuned!</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="font-sans text-xl font-semibold tracking-tight group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-foreground/60">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {post.description && (
                  <p className="mt-2 font-serif text-foreground/80">
                    {post.description}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}