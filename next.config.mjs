/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' to allowed domains
    },
  };

export default nextConfig;
