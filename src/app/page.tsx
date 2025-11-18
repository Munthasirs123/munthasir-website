import { getAllBlogPosts } from "@/lib/posts";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User, BookOpen, PenSquare } from 'lucide-react';

export default function HomePage() {
  const latestPost = getAllBlogPosts()[0];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="container px-4 md:px-6 py-24 md:py-32 lg:py-40">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hey, I'm Munthasir!
          </h1>
          <p className="text-muted-foreground md:text-xl">
            I'm a software developer, designer, and creative tinkerer. I love building things that live on the internet and sharing what I learn along the way.
          </p>
        </div>
      </section>

      {/* --- ASYMMETRICAL CARD GRID --- */}
      <section className="container px-4 md:px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
          {/* Left Column: Large "About Me" Card */}
          <Link href="/about" className="block">
            <Card className="border-2 border-blackish bg-mustard shadow-[8px_8px_0px_#1A1A1A] h-full flex flex-col justify-between p-8 hover:-translate-y-1 transition-transform">
              <div>
                <Badge variant="mustard" className="mb-4">
                  <User className="mr-2 h-4 w-4" />
                  ABOUT
                </Badge>
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                <p className="text-lg">
                  My journey through tech, design, and everything in between. From startups to side projects.
                </p>
              </div>
              <div className="flex items-center font-semibold mt-6">
                VIEW CAREER TIMELINE <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </Card>
          </Link>

          {/* Right Column: Two smaller stacked cards */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Projects Card */}
            <Link href="/projects" className="block">
              <Card className="border-2 border-blackish bg-teal shadow-[8px_8px_0px_#1A1A1A] p-8 hover:-translate-y-1 transition-transform">
                <Badge variant="teal" className="mb-4">
                  <BookOpen className="mr-2 h-4 w-4" />
                  PROJECTS
                </Badge>
                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                <p>Open-source work, experiments, and side projects built with curiosity.</p>
              </Card>
            </Link>

            {/* Blog Card */}
            {latestPost && (
              <Link href={`/blog/${latestPost.slug}`} className="block">
                <Card className="border-2 border-blackish bg-tangerine shadow-[8px_8px_0px_#1A1A1A] p-8 hover:-translate-y-1 transition-transform">
                  <Badge variant="tangerine" className="mb-4">
                    <PenSquare className="mr-2 h-4 w-4" />
                    BLOG
                  </Badge>
                  <h2 className="text-2xl font-bold mb-2">From the Blog</h2>
                  <p className="truncate">"{latestPost.title}"</p>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}