/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export so the site can be hosted on GitHub Pages (static files only).
  // `next build` writes the site to ./out.
  output: "export",

  // GitHub Pages serves each route as its own directory (/calculator/index.html),
  // which avoids 404s on direct navigation / refresh.
  trailingSlash: true,

  images: {
    // Pages has no image-optimization server, so images are served as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
