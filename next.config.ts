import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
    unoptimized: false, // Keep Vercel optimization
  },
  reactStrictMode: false, // Disable strict mode to prevent double renders
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
