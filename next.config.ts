import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.56.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logospng.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
