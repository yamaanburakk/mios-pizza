/**
 * MinIO kökü (bucket path dahil: .../miospizza).
 * Varsayılan: HTTPS MinIO. `NEXT_PUBLIC_MEDIA_BASE` ile ezilebilir.
 */
const productionMediaBase = 'https://media-alyamgar.tech/miospizza';

const normalizeMediaBase = (): string => {
  const raw = process.env.NEXT_PUBLIC_MEDIA_BASE?.trim();
  if (raw) {
    return raw.replace(/\/+$/, '');
  }
  return productionMediaBase;
};

export const MEDIA_BASE = normalizeMediaBase();

/** UTF-8 nesne anahtarı → tam URL (boşluk ve Türkçe karakterler güvenli) */
export const mediaObjectUrl = (objectKey: string): string => {
  const segments = objectKey.replace(/^\/+/, '').split('/');
  const path = segments.map((s) => encodeURIComponent(s)).join('/');
  return `${MEDIA_BASE}/${path}`;
};

/** `fileImageUrl` için kısıtlama (tekil görseller: About, Testimonials vb.) */
export const FILE_IMAGE_MIN = 3 as const;
export const FILE_IMAGE_MAX = 114 as const;

export const fileImageUrl = (fileNumber: number): string => {
  const n = Math.min(FILE_IMAGE_MAX, Math.max(FILE_IMAGE_MIN, Math.floor(fileNumber)));
  return mediaObjectUrl(`File ${n}.jpg`);
};

/** Ana sayfa + /galeri grid’inde gösterilen görseller (sıra sabit) */
export const GALLERY_FILE_NUMBERS = [
  6, 12, 17, 23, 32, 38, 41, 44, 60, 68, 86, 90, 95, 102, 104,
] as const;

export const GALLERY_IMAGE_URLS: readonly string[] = GALLERY_FILE_NUMBERS.map((n) =>
  fileImageUrl(n)
);

/** Hero arka plan videoları (MinIO) */
export const HERO_VIDEO_URLS = [
  mediaObjectUrl('2Li 18.09.mp4'),
  mediaObjectUrl('Buratta 18.09.mp4'),
  mediaObjectUrl('Pizza 1 akım 17.09.mp4'),
] as const;

/** OG / paylaşım ve genel varsayılan görsel */
export const DEFAULT_MEDIA_URL = fileImageUrl(FILE_IMAGE_MIN);

/** Eski `mediaUrl` çağrıları — nesne adı ile */
export const mediaUrl = mediaObjectUrl;
