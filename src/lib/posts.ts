import fs from "fs";
import path from "path";
import matter from "gray-matter";
// --- ADD THESE TWO IMPORTS ---
import { remark } from "remark";
import html from "remark-html";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
  // --- ADD THIS NEW PROPERTY ---
  contentHtml?: string;
};

const contentDir = path.join(process.cwd(), "content", "blog");

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(contentDir, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(source);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title as string,
        date: data.date as string,
        description: data.description as string | undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

// --- REPLACE THE ENTIRE getBlogPostBySlug FUNCTION WITH THIS ASYNC VERSION ---
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const fullPath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  // Process markdown into HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string | undefined,
    content,
    contentHtml, // Add the processed HTML
  };
}

// --- ADD THIS NEW FUNCTION ---

// A generic function to get content for a single page (like 'about')
export async function getPageContent(fileName: string) {
  const pagesDir = path.join(process.cwd(), "content", "pages");
  const fullPath = path.join(pagesDir, `${fileName}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Page not found: ${fileName}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title as string,
    contentHtml,
  };
}

// --- ADD THIS NEW FUNCTION ---
export function getAllProjects() {
  const projectsDir = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(projectsDir);

  const projects = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(projectsDir, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(source);

      return {
        title: data.title as string,
        description: data.description as string,
        href: data.href as string,
        date: data.date as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // Newest first

  return projects;
}