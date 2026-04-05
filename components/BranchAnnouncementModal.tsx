"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ADDRESS_CADDEBOSTAN } from "@/lib/addresses";

const STORAGE_KEY = "mios-caddebostan-branch-modal-dismissed";

export const BranchAnnouncementModal = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, [mounted]);

  const handleClose = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleBackdropClick = () => {
    handleClose();
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Duyuruyu kapat"
            className="absolute inset-0 bg-dark-green/35 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="branch-modal-title"
            aria-describedby="branch-modal-desc"
            className="relative z-[101] w-full max-w-lg rounded-2xl border border-cream-dark/80 bg-gradient-to-br from-cream via-cream to-cream-dark/90 p-6 sm:p-8 shadow-2xl shadow-dark-green/10 ring-1 ring-terracotta/15"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-terracotta/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-dark-green/12 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/35 bg-white/70 px-3 py-1.5 shadow-sm shadow-terracotta/10">
                <span
                  className="h-2 w-2 animate-pulse rounded-full bg-terracotta"
                  aria-hidden
                />
                <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
                  Yeni şube
                </span>
              </div>

              <h2
                id="branch-modal-title"
                className="text-2xl font-bold leading-tight text-dark-green sm:text-3xl"
              >
                Yeni şubemiz yolda
              </h2>

              <p
                id="branch-modal-desc"
                className="mt-3 text-sm leading-relaxed text-dark-green/75 sm:text-base"
              >
                Caddebostan&apos;da açılacak yeni şubemiz için hazırlıklarımız
                sürüyor. Adresimiz aşağıda; yakında sizleri ağırlamaktan
                mutluluk duyacağız.
              </p>

              <div className="mt-6 flex gap-3 rounded-xl border border-dark-green/15 bg-white/85 p-4 shadow-inner shadow-cream-dark/30">
                <div
                  className="mt-0.5 shrink-0 text-terracotta-dark"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5"
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
                </div>
                <address className="not-italic text-sm leading-relaxed text-dark-green/90 sm:text-base">
                  {ADDRESS_CADDEBOSTAN}
                </address>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-terracotta px-5 py-3 text-sm font-semibold text-cream shadow-lg shadow-terracotta/25 transition-colors hover:bg-terracotta-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
                >
                  Anladım
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
