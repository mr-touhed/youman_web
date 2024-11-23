module.exports = {
    siteUrl: 'https://youman.one', // Your site URL (replace with production URL)
    generateRobotsTxt: true, // Automatically generate robots.txt
    sitemapSize: 7000, // Max number of URLs per sitemap file
    changefreq: 'weekly', // Frequency of content updates
    priority: 0.7, // Default priority for pages
    
    // Optional: Exclude specific pages from the sitemap
    exclude: ['/admin', '/login', '/register'],
    
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*', // Apply to all bots
          allow: '/', // Allow crawling all pages
        },
        {
          userAgent: '*', // Apply to all bots
          disallow: '/dashboard', // Disallow crawling the /dashboard page
        },
      ],
    },
  };
  