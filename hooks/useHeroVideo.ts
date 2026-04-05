"use client";

import { useEffect, useState } from "react";
import { HERO_VIDEO_URLS } from "@/lib/media";

/** İlk render sabit (hydration); mount sonrası 3 videodan biri rastgele */
export const useHeroVideoSrc = (): string => {
  const [src, setSrc] = useState<string>(HERO_VIDEO_URLS[0]);

  useEffect(() => {
    const i = Math.floor(Math.random() * HERO_VIDEO_URLS.length);
    setSrc(HERO_VIDEO_URLS[i]);
  }, []);

  return src;
};
