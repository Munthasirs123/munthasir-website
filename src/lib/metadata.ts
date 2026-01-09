import { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generate metadata for a generic page with Open Graph and Twitter cards.
 */
export function generatePageMetadata(params: {
    title: string;
    description: string;
    path: string;
    image?: string;
    keywords?: string[];
}): Metadata {
    const url = `${siteConfig.url}${params.path}`;
    const image = params.image || siteConfig.ogImage;
    const fullImageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

    return {
        title: params.title,
        description: params.description,
        keywords: params.keywords || [
            "Munthasir Shiraz",
            "Shiraz",
            "Munthasir",
            "Product Strategist",
            "Indie Developer",
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "website",
            url,
            title: params.title,
            description: params.description,
            siteName: siteConfig.name,
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: params.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: siteConfig.socials.twitter.handle,
            creator: siteConfig.socials.twitter.handle,
            title: params.title,
            description: params.description,
            images: [fullImageUrl],
        },
    };
}

/**
 * Generate metadata for a blog post with article-specific Open Graph.
 */
export function generateBlogPostMetadata(params: {
    title: string;
    description: string;
    slug: string;
    publishedTime: string;
    modifiedTime?: string;
    image?: string;
    category?: string;
    keywords?: string[];
}): Metadata {
    const url = `${siteConfig.url}/blog/${params.slug}`;
    const image = params.image || siteConfig.ogImage;
    const fullImageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

    return {
        title: params.title,
        description: params.description,
        keywords: params.keywords || [
            "Munthasir Shiraz",
            "Shiraz",
            params.category || "Blog",
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "article",
            url,
            title: params.title,
            description: params.description,
            siteName: siteConfig.name,
            publishedTime: params.publishedTime,
            modifiedTime: params.modifiedTime || params.publishedTime,
            authors: [siteConfig.author.name],
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: params.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: siteConfig.socials.twitter.handle,
            creator: siteConfig.socials.twitter.handle,
            title: params.title,
            description: params.description,
            images: [fullImageUrl],
        },
    };
}

/**
 * Generate metadata for a project page with article-specific Open Graph.
 */
export function generateProjectMetadata(params: {
    title: string;
    description: string;
    slug: string;
    publishedTime: string;
    image?: string;
    tags?: string[];
}): Metadata {
    const url = `${siteConfig.url}/projects/${params.slug}`;
    const image = params.image || siteConfig.ogImage;
    const fullImageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

    return {
        title: params.title,
        description: params.description,
        keywords: [
            "Munthasir Shiraz",
            "Shiraz",
            "Projects",
            ...(params.tags || []),
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "article",
            url,
            title: params.title,
            description: params.description,
            siteName: siteConfig.name,
            publishedTime: params.publishedTime,
            authors: [siteConfig.author.name],
            images: [
                {
                    url: fullImageUrl,
                    width: 1200,
                    height: 630,
                    alt: params.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: siteConfig.socials.twitter.handle,
            creator: siteConfig.socials.twitter.handle,
            title: params.title,
            description: params.description,
            images: [fullImageUrl],
        },
    };
}
