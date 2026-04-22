/**
 * Menü PDF’i değişince tarayıcı/CDN hâlâ eskiyi gösterebilir; bu yüzden cache-bust query kullanılır.
 * - PDF’i güncelledikten sonra: `NEXT_PUBLIC_MENU_PDF_V` değerini artır (veya aşağıdaki varsayılanı) ve siteyi yeniden build + deploy et.
 * - Sadece cPanel’e `MENU.pdf` atıp JS’i yenilemediyseniz URL aynı kalır — mutlaka v artır + deploy.
 */
const version =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_MENU_PDF_V?.trim()) || '2';

export const MENU_PDF_FILE_URL = `/MENU.pdf?v=${encodeURIComponent(version)}` as const;
