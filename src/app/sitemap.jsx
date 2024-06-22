export default async function sitemap() {
    return [
        {
            url: "/",
            lastmod: new Date().toISOString(),
        },
    ];
}