import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on programming, design, and life.",
};

// Helper object to map a category string to a specific Tailwind CSS background color class
const categoryColorMap: { [key: string]: string } = {
  'Tech': 'bg-pink',
  'Career': 'bg-teal',
  'Design': 'bg-mustard',
  'Life': 'bg-tangerine',
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Essays, tutorials, and thoughts on web development, design, and the creative process. Updated regularly with new ideas and experiments.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Stay tuned!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => {
            // Look up the color for the post's category, defaulting to a neutral color if not found
            const categoryColor = categoryColorMap[post.category] || 'bg-cream';
            
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                {/* The main container with the brutalist style */}
                <div className="border-2 border-blackish shadow-[8px_8px_0px_#1A1A1A] rounded-lg bg-cream flex group-hover:-translate-y-1 transition-transform">
                  {/* The colored vertical bar on the left */}
                  <div className={`w-2 ${categoryColor} rounded-l-md`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <Badge className={`${categoryColor} border-2 border-blackish text-blackish`}>{post.category.toUpperCase()}</Badge>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex items-center font-semibold text-sm">
                      READ ARTICLE <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}