/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.giphy.com'], // Add any other domains you need
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.giphy.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
