"use client";

import { usePathname } from 'next/navigation';

export const BreadcrumbSchema = () => {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    // Base breadcrumb (Home)
    const items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mugunthanpackers.com"
        }
    ];

    // Build sub-paths
    paths.forEach((path, index) => {
        const url = `https://mugunthanpackers.com/${paths.slice(0, index + 1).join('/')}`;
        // Prettify name
        const name = path
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        items.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": name,
            "item": url
        });
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};
