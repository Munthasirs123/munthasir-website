import type { Metadata } from "next";
import Image from "next/image";
import { getPageContent } from "@/lib/posts"; // Import our function to read Markdown

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Munthasir Shiraz.",
};

export default async function AboutPage() {
  // Fetch the content from the 'content/pages/about.md' file
  const page = await getPageContent("about");

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-12">
        <h1 className="font-sans text-3xl font-bold tracking-tight">
          {page.title}
        </h1>
      </header>

      <section className="flex flex-col sm:flex-row items-start gap-8">
        <div className="w-32 h-32 relative flex-shrink-0">
          <Image
            src="/profile.jpg" // Make sure you have this image in your 'public' folder
            alt="Portrait of Munthasir Shiraz"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* This div now renders the HTML from your Markdown file */}
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: page.contentHtml }}
        />
      </section>
    </div>
  );
}