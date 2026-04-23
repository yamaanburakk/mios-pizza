"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const BRANCH_MODAL_IMAGE = "/images/branch-erenkoy-announcement.png";

/** Yeni görselde içerik değişince anahtarı artır; eski “kapatıldı” tercihini sıfırlar */
const STORAGE_KEY = "mios-branch-modal-erenkoy-2026-dismissed";

const branchModalImageAlt =
  "Mio's Pizza 2. şubesiyle Erenköy'de. Caddebostan Mahallesi, Kantarcı Rıza Sokak 5/B, 0 216 759 54 34";

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <motion.button
            type="button"
            aria-label="Duyuruyu kapat"
            className="absolute inset-0 bg-dark-green/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={branchModalImageAlt}
            className="relative z-[101] w-full max-w-[min(100vw-1.5rem,28.5rem)] overflow-hidden rounded-2xl border border-cream-dark/50 bg-cream shadow-2xl ring-1 ring-terracotta/10"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-dark-green/85 text-white shadow-lg ring-1 ring-white/20 transition hover:bg-dark-green"
              aria-label="Kapat"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-h-[min(85vh,920px)] w-full overflow-auto p-1 sm:p-2">
              <Image
                src={BRANCH_MODAL_IMAGE}
                alt={branchModalImageAlt}
                width={819}
                height={1024}
                className="h-auto w-full object-contain"
                priority
                sizes="(max-width: 480px) 100vw, 456px"
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
