export const ADDRESS_CADDEBOSTAN =
  "Caddebostan Mahallesi Kantarcı Rıza sokak Numara 5/b Kadıköy/İstanbul";

export const ADDRESS_CADDEBOSTAN_STREET =
  "Caddebostan Mahallesi Kantarcı Rıza sokak Numara 5/b";
export const ADDRESS_CADDEBOSTAN_CITY = "Kadıköy / İstanbul";

export const ADDRESS_KOZYATAGI_STREET = "Kozyatağı Mahallesi, Kadıpaşa Sokak";
export const ADDRESS_KOZYATAGI_CITY = "No:28/C Kadıköy, İstanbul";

const kozyatagiFull = `${ADDRESS_KOZYATAGI_STREET} ${ADDRESS_KOZYATAGI_CITY}`;

export type LocationTabId = "kozyatagi" | "erenkoy";

export type LocationDefinition = {
  id: LocationTabId;
  label: string;
  street: string;
  cityLine: string;
  fullAddressForMaps: string;
  tabActiveClass: string;
};

export const LOCATIONS: LocationDefinition[] = [
  {
    id: "kozyatagi",
    label: "Kozyatağı şubesi",
    street: ADDRESS_KOZYATAGI_STREET,
    cityLine: ADDRESS_KOZYATAGI_CITY,
    fullAddressForMaps: kozyatagiFull,
    tabActiveClass:
      "bg-white text-gray-900 shadow-md ring-2 ring-terracotta/35 ring-offset-2 ring-offset-cream/80",
  },
  {
    id: "erenkoy",
    label: "Erenköy şubesi",
    street: ADDRESS_CADDEBOSTAN_STREET,
    cityLine: ADDRESS_CADDEBOSTAN_CITY,
    fullAddressForMaps: ADDRESS_CADDEBOSTAN,
    tabActiveClass:
      "bg-white text-gray-900 shadow-md ring-2 ring-dark-green/30 ring-offset-2 ring-offset-cream/80",
  },
];

export const googleMapsEmbedSrc = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=tr`;

export const googleMapsDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
