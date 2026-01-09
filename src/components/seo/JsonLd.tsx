import React from "react";

interface JsonLdProps {
    data: Record<string, any>;
}

/**
 * Component to render JSON-LD structured data for SEO.
 * This is server-safe and can be used in both server and client components.
 */
export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
