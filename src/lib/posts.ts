import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
  contentHtml?: string;
  category: string;
  readTime: string;
};

export type Project = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  links: { type: "Article" | "Source" | "Demo"; href: string }[];
  // We need slug to link to internal page. 
  // Since we don't have it in the type definition in the original file, 
  // we should add it or derive it. 
  // Let's add it to the type and the return value.
  slug: string;
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
        category: data.category as string,
        readTime: data.readTime as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

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
    contentHtml,
    category: data.category as string,
    readTime: data.readTime as string,
  };
}

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
    data,
  };
}

// --- GET ALL PROJECTS WITH PROPER TYPING ---
export function getAllProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), "content", "projects");
  const files = fs.readdirSync(projectsDir);

  const projects: Project[] = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(projectsDir, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(source);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: data.tags || [], // If data.tags is missing, default to an empty array
        links: data.links || [], // If data.links is missing, default to an empty array
      };
    })
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project & { contentHtml: string } | null> {
  const projectsDir = path.join(process.cwd(), "content", "projects");
  const fullPath = path.join(projectsDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: data.tags || [],
    links: data.links || [],
    contentHtml,
  };
}