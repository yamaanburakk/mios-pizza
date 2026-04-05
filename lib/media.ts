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

/** `File 3.jpg` … `File 114.jpg` aralığı */
export const FILE_IMAGE_MIN = 3 as const;
export const FILE_IMAGE_MAX = 114 as const;

export const fileImageUrl = (fileNumber: number): string => {
  const n = Math.min(FILE_IMAGE_MAX, Math.max(FILE_IMAGE_MIN, Math.floor(fileNumber)));
  return mediaObjectUrl(`File ${n}.jpg`);
};

/** File 3–114 tüm görseller (sıra sabit) */
export const ALL_FILE_IMAGE_URLS: readonly string[] = Array.from(
  { length: FILE_IMAGE_MAX - FILE_IMAGE_MIN + 1 },
  (_, i) => fileImageUrl(i + FILE_IMAGE_MIN)
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
