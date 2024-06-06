// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
        },
        {
          protocol: 'https',
          hostname: 'fjtzozbsdgjfsbmjbqio.supabase.co',   // hostname came from error fjtzoz or URL. . .
        },
      ],
    },
  };
  
  export default nextConfig;
