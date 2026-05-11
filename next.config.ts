import type { NextConfig } from "next";

/** NEXT_PUBLIC_MEDIA_BASE tam URL ise (https://...) next/image için remotePatterns üret */
const remotePatternsFromMediaBase = (): NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
> => {
  const raw = process.env.NEXT_PUBLIC_MEDIA_BASE?.trim();
  if (!raw || raw.startsWith("/") || !/^https?:\/\//i.test(raw)) {
    return [];
  }
  try {
    const u = new URL(raw);
    const basePath = u.pathname.replace(/\/+$/, "");
    const pathname = basePath ? `${basePath}/**` : "/**";
    return [
      {
        protocol: u.protocol.replace(":", "") as "http" | "https",
        hostname: u.hostname,
        ...(u.port ? { port: u.port } : {}),
        pathname,
      },
    ];
  } catch {
    return [];
  }
};

const nextConfig: NextConfig = {
  /** Statik site → `out/` klasörü (FTP / statik hosting) */
  output: "export",
  images: {
    /** Büyük JPG’lerde optimizasyon zaman aşımı riskine karşı */
    unoptimized: true,
    /**
     * next/image dış URL’leri — burada olmayan host/path’ler build/runtime’da reddedilir.
     * - MinIO: galeri / File *.jpg (lib/media.ts)
     * - jsDelivr: public/ (cdn.ts, NEXT_PUBLIC_CDN_GH_REF ile her dal)
     */
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '72.60.17.107',
        port: '9000',
        pathname: '/miospizza/**',
      },
      {
        protocol: 'https',
        hostname: 'media-alyamgar.tech',
        pathname: '/miospizza/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        /** @main, @master veya başka dal — tek kalıp */
        pathname: '/gh/yamaanburakk/**',
      },
      ...remotePatternsFromMediaBase(),
    ],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
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
