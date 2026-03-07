import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mugunthanpackers.com';

    // Core static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/branches',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // You can extend this to dynamic routes (e.g. specific branches or services) 
    // by fetching from a CMS or database.

    return [...routes];
}
