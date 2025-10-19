import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
 webpack: (config, { isServer }) => {
    // Fix for canvas module (not needed in browser)
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    
    // Handle pdfjs-dist properly
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
      };
    }

    // Ignore pdfjs worker warnings
    config.infrastructureLogging = {
      level: 'error',
    };

    return config;
  },
};

export default nextConfig;
