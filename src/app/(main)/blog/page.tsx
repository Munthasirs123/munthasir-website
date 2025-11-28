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
          I consolidate my most impactful learnings here!
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Stay tuned!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => {
            // Look up the color for the post's category, defaulting to a neutral color if not found
            const categoryColor = categoryColorMap[post.category] || 'bg-cream';

            // Determine border and shadow colors based on category
            let borderColor = 'dark:border-cream';
            let shadowColor = 'dark:shadow-[8px_8px_0px_#F0E7DB]'; // Default cream shadow

            if (post.category === 'Tech') {
              borderColor = 'dark:border-pink';
              shadowColor = 'dark:shadow-[8px_8px_0px_#F8B195]';
            } else if (post.category === 'Career') {
              borderColor = 'dark:border-teal';
              shadowColor = 'dark:shadow-[8px_8px_0px_#00A0A0]';
            } else if (post.category === 'Design') {
              borderColor = 'dark:border-mustard';
              shadowColor = 'dark:shadow-[8px_8px_0px_#E8AF00]';
            } else if (post.category === 'Life') {
              borderColor = 'dark:border-tangerine';
              shadowColor = 'dark:shadow-[8px_8px_0px_#F08080]';
            }

            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                {/* The main container with the brutalist style */}
                <div className={`border-2 border-blackish ${borderColor} shadow-[8px_8px_0px_#1A1A1A] ${shadowColor} rounded-lg bg-cream dark:bg-blackish flex group-hover:-translate-y-1 transition-transform`}>
                  {/* The colored vertical bar on the left */}
                  <div className={`w-2 ${categoryColor} rounded-l-md`}></div>

                  <div className="p-6 w-full">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground dark:text-cream/70 mb-2">
                      <Badge className={`${categoryColor} border-2 border-blackish text-blackish`}>{post.category.toUpperCase()}</Badge>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 dark:text-cream">{post.title}</h2>
                    <p className="text-muted-foreground dark:text-cream/80 mb-4">{post.description}</p>
                    <div className="flex items-center font-semibold text-sm dark:text-cream">
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