/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
            
        remotePatterns:[
            {
                hostname:"aceternity.com"
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                
              },
            
        ]
    }
};

export default nextConfig;
