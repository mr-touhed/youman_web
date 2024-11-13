/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
            
        remotePatterns:[
            {
                hostname:"i.ibb.co.com"
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                
              },
            {
                protocol: 'https',
                hostname: 'blogger.googleusercontent.com',
                
              },
            
        ]
    }
};

export default nextConfig;
