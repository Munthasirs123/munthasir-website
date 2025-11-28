import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type CanvasContent = {
    focus: string;
    focus_description?: string;
    tags?: string[];
    quote: {
        text: string;
        author: string;
    };
    moodboard: string[];
    micro_wins: string[];
    thoughts: (string | { type: 'sticky' | 'text'; content: string })[];
    latest_reads?: (string | { title: string; url: string })[];
    visual_inspiration?: Array<{
        color: string;
        label: string;
    }>;
};

export function getCanvasContent(): CanvasContent {
    const contentDir = path.join(process.cwd(), "content", "canvas");
    const fullPath = path.join(contentDir, "index.md");

    if (!fs.existsSync(fullPath)) {
        throw new Error("Canvas content file not found at content/canvas/index.md");
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
        focus: data.focus,
        focus_description: data.focus_description,
        tags: data.tags || [],
        quote: data.quote,
        moodboard: data.moodboard || [],
        micro_wins: data.micro_wins || [],
        thoughts: data.thoughts || [],
        latest_reads: data.latest_reads || [],
        visual_inspiration: data.visual_inspiration || [],
    };
}
