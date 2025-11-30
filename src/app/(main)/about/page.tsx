import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPageContent } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Munthasir Shiraz's career timeline and journey.",
};

// Structure for timeline data
type TimelineEvent = {
  year: string;
  title: string;
  company: string;
  duration: string;
  description: string;
};

type BadgeData = {
  text: string;
  variant: "default" | "mustard" | "teal" | "tangerine";
};

export default async function AboutPage() {
  const { title, contentHtml, data } = await getPageContent("about");
  const timelineEvents = (data.timeline || []) as TimelineEvent[];
  const badges = (data.badges || []) as BadgeData[];

  return (
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <header className="mb-12 space-y-8">

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h1>
        <div
          className="max-w-[700px] text-muted-foreground md:text-xl space-y-4 prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="flex flex-wrap gap-4">
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant} className="border-2 border-blackish">
              {badge.text}
            </Badge>
          ))}
        </div>
      </header>

      {/* --- TIMELINE SECTION --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter">Timeline</h2>
        <div className="relative flex flex-col gap-8">
          {/* Vertical line down the timeline */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-blackish" />

          {timelineEvents.map((event) => (
            <div key={event.title} className="relative flex items-start gap-8">
              {/* Dot + year */}
              <div className="flex h-8 w-auto min-w-[2rem] px-2 items-center justify-center rounded-full bg-mustard border-2 border-blackish z-10 mt-1">
                <span className="text-xs font-bold">{event.year}</span>
              </div>

              {/* Card with event content */}
              <Card className="flex-1 border-2 border-blackish dark:border-mustard shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#E8AF00] bg-cream dark:bg-blackish">
                <CardHeader>
                  <h3 className="text-xl font-bold dark:text-mustard">{event.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground dark:text-cream/80">
                    <span>{event.company}</span>
                    <span>{event.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-cream">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
