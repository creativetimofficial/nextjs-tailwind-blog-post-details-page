/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  assetPrefix: "/nextjs-tailwind-blog-post-details-page/",
  basePath: "/nextjs-tailwind-blog-post-details-page",
};

module.exports = nextConfig;
