/**
 * jsDelivr → GitHub `public/` klasörü.
 * Görseller yüklenmiyorsa: GitHub’da varsayılan dal `main` ise `.env.local` içine
 * `NEXT_PUBLIC_CDN_GH_REF=main` yazın ve next.config `remotePatterns` ile dalı eşleştirin.
 */
const GH_REF = process.env.NEXT_PUBLIC_CDN_GH_REF ?? 'master';

export const CDN_PUBLIC_BASE = `https://cdn.jsdelivr.net/gh/yamaanburakk/mios-pizza@${GH_REF}/public`;

/**
 * public/ altındaki dosya yolu (başında / olmadan).
 * @example cdnAsset('images/pizza_mios_logo.jpg')
 * @example cdnAsset('videos/pizza-hero.mp4')
 */
export const cdnAsset = (relativePublicPath: string): string => {
  const path = relativePublicPath.replace(/^\/+/, '');
  return `${CDN_PUBLIC_BASE}/${path}`;
};
