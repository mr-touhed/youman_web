export default async function blogPosts() {
    const BLOGGER_API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY; // Store your API key in an .env file
    const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID; // Replace with your blog ID
    
    try {
        const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}`, {cache:"no-store"}
        );
        const data = await response.json();
       
        // Extract image from post content
        function extractImage(content) {
            const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
            return imgTagMatch ? imgTagMatch[1] : null;
        }

         // Function to get the first 30 words from the content
         function extractSnippet(content) {
            const textOnly = content
            .replace(/<[^>]+>/g, '') // Remove HTML tags
                .replace(/&nbsp;/g, '') // Remove &nbsp;
                .replace(/&[a-zA-Z]+;/g, ''); // Remove other HTML entities
            
            const words = textOnly.split(/\s+/); // Split content into words
            return words.slice(0, 30).join(' ') + '...'; // Join the first 30 words and add ellipsis
        }


        // Return only essential data
        const posts = data.items?.map(post => ({
            id: post.id,
            title: post.title,
            image: extractImage(post.content), // Extracted image URL
            snippet: post.content.replace(/<[^>]+>/g, '').slice(0, 100) + '...', // Strip HTML tags and limit length
            url: post.url,
            published: post.published,
            content:extractSnippet(post.content),
            labels:post.labels
        }));

        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return []; // Return an empty array if there's an error
    }
}
