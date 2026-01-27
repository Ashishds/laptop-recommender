import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pickmylaptop.in";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"], // Don't index API routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
