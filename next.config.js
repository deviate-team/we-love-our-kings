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
  experimental: {
    appDir: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
