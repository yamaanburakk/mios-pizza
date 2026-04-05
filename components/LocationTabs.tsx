"use client";

import { motion } from "framer-motion";
import { useCallback, useId, useState, type KeyboardEvent } from "react";
import {
  LOCATIONS,
  type LocationTabId,
  googleMapsDirectionsUrl,
  googleMapsEmbedSrc,
} from "@/lib/addresses";

type LocationTabsProps = {
  isInView: boolean;
};

export const LocationTabs = ({ isInView }: LocationTabsProps) => {
  const baseId = useId();
  const [active, setActive] = useState<LocationTabId>("kozyatagi");

  const activeLocation = LOCATIONS.find((l) => l.id === active) ?? LOCATIONS[0];

  const handleTabKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, id: LocationTabId) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(id);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const idx = LOCATIONS.findIndex((l) => l.id === active);
        const next =
          e.key === "ArrowRight"
            ? (idx + 1) % LOCATIONS.length
            : (idx - 1 + LOCATIONS.length) % LOCATIONS.length;
        setActive(LOCATIONS[next].id);
      }
    },
    [active],
  );

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="sticky top-12 sm:top-24 overflow-hidden rounded-2xl border border-cream-dark/90 bg-gradient-to-br from-cream via-white to-cream-dark/50 p-4 shadow-2xl shadow-dark-green/10 sm:p-6">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-terracotta/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-dark-green/10 blur-3xl" aria-hidden />

        <div className="relative z-10">
          <div className="mb-5 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-dark">
              Şubelerimiz
            </p>
            <h3 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
              Konum &amp; yol tarifi
            </h3>
          </div>

          <div
            className="mb-6 flex rounded-2xl border border-dark-green/10 bg-cream-dark/60 p-1.5 shadow-inner"
            role="tablist"
            aria-label="Şube seçin"
          >
            {LOCATIONS.map((loc) => {
              const isSelected = active === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${loc.id}`}
                  aria-selected={isSelected}
                  aria-controls={`${baseId}-panel-${loc.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActive(loc.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, loc.id)}
                  className={`relative flex-1 rounded-xl px-2 py-3 text-center text-xs font-semibold leading-tight transition-all duration-300 sm:px-4 sm:text-sm md:text-base ${
                    isSelected
                      ? loc.tabActiveClass
                      : "text-dark-green/80 hover:bg-white/70 hover:text-dark-green"
                  }`}
                >
                  {loc.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel-${activeLocation.id}`}
            aria-labelledby={`${baseId}-tab-${activeLocation.id}`}
            className="space-y-5"
          >
            <div
              className={`rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:p-5 ${
                activeLocation.id === "erenkoy"
                  ? "ring-1 ring-dark-green/15"
                  : "ring-1 ring-terracotta/15"
              }`}
            >
              <p className="mb-3 text-lg font-bold leading-tight text-gray-900">
                {activeLocation.label}
              </p>
              <p className="text-base font-semibold leading-snug text-gray-800 sm:text-lg">
                {activeLocation.street}
              </p>
              {activeLocation.cityLine ? (
                <p className="mt-2 text-sm font-medium leading-relaxed text-gray-700 sm:text-base">
                  {activeLocation.cityLine}
                </p>
              ) : null}
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-dark-green/10 bg-cream-dark/40 shadow-inner sm:aspect-[16/10]">
              <iframe
                key={activeLocation.id}
                title={`${activeLocation.label} harita`}
                src={googleMapsEmbedSrc(activeLocation.fullAddressForMaps)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
              />
            </div>

            <motion.a
              href={googleMapsDirectionsUrl(activeLocation.fullAddressForMaps)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex w-full items-center justify-center gap-2 rounded-2xl border-2 px-5 py-4 text-center text-sm font-bold text-white shadow-lg transition sm:text-base ${
                activeLocation.id === "kozyatagi"
                  ? "border-terracotta-dark/50 bg-terracotta hover:bg-terracotta-dark active:bg-terracotta-dark"
                  : "border-dark-green-dark/50 bg-dark-green hover:bg-dark-green-dark active:bg-dark-green-dark"
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <svg
                className="h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Yol tarifi al — {activeLocation.label}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
