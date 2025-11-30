import { getAllBlogPosts } from "@/lib/posts";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, BookOpen, PenSquare, Sparkles, Github, Twitter, Linkedin, Mail, Download } from "lucide-react";
import { UserAvatar } from "@/components/user-avatar";

export default function HomePage() {
  const allPosts = getAllBlogPosts();
  const latestPost = allPosts[0];
  const recentPosts = allPosts.slice(0, 4);

  // Helper object to map a category string to a specific Tailwind CSS background color class
  const categoryColorMap: { [key: string]: string } = {
    'Tech': 'bg-pink',
    'Career': 'bg-teal',
    'Design': 'bg-mustard',
    'Life': 'bg-tangerine',
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="container px-4 md:px-6 pt-16 md:pt-24 pb-20">
        {/* The `max-w-2xl` was removed to allow the text to fill more space */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hey I’m Shiraz!
            </h1>
            <div className="space-y-4 text-muted-foreground md:text-xl max-w-3xl">
              <p>
                Welcome to my digital garden! A space for self-expression, ideas, scribbles & experiments.
              </p>
              <p>
                Everything on this site is written by me, not AI 🙂
              </p>
            </div>

            {/* Mobile-only: Resume & Socials */}
            <div className="flex flex-col items-center md:items-start gap-6 mt-8 lg:hidden">
              <div className="flex items-center gap-6">
                <a href="https://github.com/Munthasirs123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://x.com/MunthasirShiraz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/munthasirshiraz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:munthasirshiraz@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <UserAvatar className="w-40 h-40 md:w-56 md:h-56" />
        </div>
      </section >

      {/* --- CARD GRID SECTION (v0-style layout) --- */}
      <section className="container px-4 md:px-6 pb-12" >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN: ABOUT (stretches to match right column height) */}
          <Link href="/about">
            <Card className="border-2 border-blackish dark:border-mustard bg-mustard shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#E8AF00] p-8 rounded-lg hover:-translate-y-1 transition-transform cursor-pointer h-full flex flex-col gap-6 dark:bg-blackish">
              <div className="flex items-start gap-3">
                <Badge variant="mustard" className="border-2 border-blackish">
                  <User className="mr-2 h-4 w-4" />
                  ABOUT ME
                </Badge>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 dark:text-mustard">
                  Building meaningful tools that add value!
                </h2>
                <p className="text-lg leading-relaxed dark:text-cream/90 mb-4">
                  As a product lead, I've always loved solving problems through technology!
                </p>
                <p className="text-lg leading-relaxed dark:text-cream/90">
                  Now with the rise of AI, that love continues to grow and further my passion to build and ship solutions that add genuine value.
                </p>
              </div>

              <div className="flex items-center font-bold mt-auto dark:text-mustard">
                MORE ABOUT ME <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Card>
          </Link>

          {/* RIGHT COLUMN: PROJECTS & BLOG (Stacked) */}
          <div className="grid gap-8 lg:gap-12">
            {/* Projects card */}
            <Link href="/projects">
              <Card className="border-2 border-blackish dark:border-teal bg-teal shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#00A0A0] p-8 rounded-lg hover:-translate-y-1 transition-transform cursor-pointer dark:bg-blackish">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="teal" className="border-2 border-blackish">
                    PROJECTS
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-teal">Recent Work</h3>
                <p className="mb-4 dark:text-cream/90">
                  Check out my latest experiments, apps & projects
                </p>
                <div className="flex items-center font-bold text-sm dark:text-teal">
                  VIEW PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>

            {/* Blog card */}
            {latestPost && (
              <Link href="/blog">
                <Card className="border-2 border-blackish dark:border-tangerine bg-tangerine shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#F08080] p-8 rounded-lg hover:-translate-y-1 transition-transform cursor-pointer dark:bg-blackish">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="tangerine" className="border-2 border-blackish">
                      BLOG
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-tangerine">Latest Thoughts</h3>
                  <p className="mb-4 dark:text-cream/90">
                    Scribbles on what I feel strongly about!
                  </p>
                  <div className="flex items-center font-bold text-sm dark:text-tangerine">
                    READ ARTICLES <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section >

      {/* --- THE CANVAS PORTAL --- */}
      < section className="container px-4 md:px-6 py-12" >
        <div className="flex flex-col items-center gap-8">
          <div className="w-full border-4 border-blackish dark:border-cream bg-blackish p-2 rounded-xl shadow-[12px_12px_0px_#1A1A1A] dark:shadow-[12px_12px_0px_#F0E7DB] overflow-hidden">

            <div className="relative w-full h-[600px] bg-white dark:bg-blackish">
              <iframe
                src="/canvas-embed"
                className="w-full h-full border-none"
                title="The Canvas"
                scrolling="yes"
              />
            </div>
          </div>

          <Link href="/canvas">
            <Button className="bg-purple text-cream hover:bg-purple/80 dark:bg-blackish dark:text-purple dark:border-purple dark:hover:bg-blackish/80 text-lg px-8 py-6 rounded-full border-2 border-blackish hover:scale-105 transition-transform shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[4px_4px_0px_#A855F7]">
              Explore The Canvas <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section >

      {/* RECENT POSTS SECTION */}
      < section className="container px-4 md:px-6 mt-12 pb-20" >
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">Recent Posts</h2>
            <p className="text-muted-foreground">Thoughts on AI, new tools, learnings and everything in between</p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden sm:flex border-2 border-blackish shadow-[4px_4px_0px_#1A1A1A] hover:translate-y-1 hover:shadow-none transition-all">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          {recentPosts.map((post) => {
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

                    <h3 className="text-2xl font-bold mb-2 dark:text-cream">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground dark:text-cream/80 mb-4">
                      {post.description}
                    </p>

                    <div className="flex items-center font-semibold text-sm dark:text-cream">
                      READ ARTICLE <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/blog" className="w-full">
            <Button variant="outline" className="w-full border-2 border-blackish shadow-[4px_4px_0px_#1A1A1A]">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section >
    </>
  );
}


