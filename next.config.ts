import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Harici CDN (jsDelivr) görselleri Next optimizasyonundan geçirme; çoklu büyük JPG’de zaman aşımı / kısmi yüklenme oluyordu */
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/yamaanburakk/mios-pizza@master/public/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/yamaanburakk/mios-pizza@main/public/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  transpilePackages: ["react-pdf", "pdfjs-dist"],
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
        fs: false,
      };
    }

    return config;
  },
};

export default nextConfig;
