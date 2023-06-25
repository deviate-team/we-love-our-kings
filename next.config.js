/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["localhost"],
  },
  reactStrictMode: true,
  output: "standalone",
};

module.exports = nextConfig;
