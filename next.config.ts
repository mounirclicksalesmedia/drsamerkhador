import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization - test if this causes loops
  },
  reactStrictMode: false,
  compress: false, // Disable compression
  poweredByHeader: false,
};

export default nextConfig;
