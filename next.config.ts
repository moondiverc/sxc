import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: [
      "logo.clearbit.com",
      "upload.wikimedia.org",
      "logospng.org",
      "wallpapercave.com",
    ],
  },
};

export default nextConfig;
