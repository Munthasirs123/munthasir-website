import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Munthasir Shiraz's career timeline and journey.",
};

// 1. Define the structure for our timeline data
type TimelineEvent = {
  year: string;
  title: string;
  company: string;
  duration: string;
  description: string;
};

// 2. Create an array of your career events. You can easily edit this!
const timelineEvents: TimelineEvent[] = [
  {
    year: "2023",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    duration: "February 2023 - Present",
    description: "Leading development of next-gen web applications. Building scalable systems with React, Next.js, and Node.js. Mentoring junior developers and contributing to open-source projects.",
  },
  {
    year: "2021",
    title: "Product Engineer",
    company: "StartupCo",
    duration: "July 2021 - 2023",
    description: "Built core product features from the ground up. Collaborated with design and product teams to ship user-centric experiences. Grew the platform from 1K to 50K users.",
  },
  {
    year: "2020",
    title: "Launched Personal Blog",
    company: "Side Project",
    duration: "2020 - Present",
    description: "Started writing about web development, design systems, and the creative process. Published 50+ articles reaching 100K+ readers. Built a community of fellow creators.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <header className="mb-12 space-y-4">
        <Link href="/">
          <Button variant="outline" className="border-2 border-blackish bg-cream shadow-[4px_4px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_#1A1A1A]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Hi there! I'm based in Brooklyn, NY and currently work as a Senior Full-Stack Developer at TechCorp. I build things for curious and playful folks who love the web.
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default" className="border-2 border-blackish">Brooklyn, NY</Badge>
          <Badge variant="mustard" className="border-2 border-blackish">Always up for coffee!</Badge>
        </div>
      </header>

      {/* --- TIMELINE SECTION --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter">Timeline</h2>
        <div className="relative flex flex-col gap-8">
          {/* The vertical line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-blackish" />
          
          {timelineEvents.map((event) => (
            <div key={event.title} className="relative flex items-start gap-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mustard border-2 border-blackish z-10 mt-1">
                {/* Year Icon */}
              </div>
              <Card className="flex-1 border-2 border-blackish shadow-[8px_8px_0px_#1A1A1A]">
                <CardHeader>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{event.company}</span>
                    <span>{event.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}