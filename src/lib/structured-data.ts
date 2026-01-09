import { siteConfig } from "@/config/site";

/**
 * Generate Person schema for Munthasir Shiraz.
 * This should only be rendered once on the homepage.
 */
export function getPersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.author.name,
        givenName: siteConfig.author.givenName,
        familyName: siteConfig.author.familyName,
        alternateName: ["Shiraz", "Munthasir"],
        url: siteConfig.url,
        image: `${siteConfig.url}/avatar-placeholder.png`,
        jobTitle: siteConfig.author.jobTitle,
        description: siteConfig.author.bio,
        email: siteConfig.author.email,
        sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
            siteConfig.links.github,
        ],
        knowsAbout: [
            "Product Strategy",
            "AI Tools",
            "Web Development",
            "Data Analytics",
            "Digital Products",
        ],
        worksFor: {
            "@type": "Organization",
            name: "CVS Health",
        },
    };
}

/**
 * Generate Website schema.
 * This should be rendered on the homepage.
 */
export function getWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
            "@type": "Person",
            name: siteConfig.author.name,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

/**
 * Generate WebPage schema for generic pages.
 */
export function getWebPageSchema(params: {
    name: string;
    description: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: params.name,
        description: params.description,
        url: params.url,
        author: {
            "@type": "Person",
            name: siteConfig.author.name,
        },
        publisher: {
            "@type": "Person",
            name: siteConfig.author.name,
        },
    };
}

/**
 * Generate BlogPosting schema for blog posts.
 */
export function getBlogPostingSchema(params: {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    category?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: params.headline,
        description: params.description,
        url: params.url,
        datePublished: params.datePublished,
        dateModified: params.dateModified || params.datePublished,
        author: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.url,
        },
        publisher: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.url,
        },
        image: params.image || `${siteConfig.url}${siteConfig.ogImage}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": params.url,
        },
        ...(params.category && { articleSection: params.category }),
    };
}

/**
 * Generate BreadcrumbList schema for navigation.
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Generate Article schema for project pages.
 */
export function getArticleSchema(params: {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    keywords?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: params.headline,
        description: params.description,
        url: params.url,
        datePublished: params.datePublished,
        dateModified: params.dateModified || params.datePublished,
        author: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.url,
        },
        publisher: {
            "@type": "Person",
            name: siteConfig.author.name,
            url: siteConfig.url,
        },
        image: params.image || `${siteConfig.url}${siteConfig.ogImage}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": params.url,
        },
        ...(params.keywords && { keywords: params.keywords }),
    };
}
