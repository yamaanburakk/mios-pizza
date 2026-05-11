"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { QR_MENU_URL } from "@/lib/qrmenu";

const BRANCH_MODAL_IMAGE = "/images/branch-erenkoy-announcement.png";

const branchModalImageAlt =
  "Mio's Pizza 2. şubesiyle Erenköy'de. Caddebostan Mahallesi, Kantarcı Rıza Sokak 5/B. Telefon: 0216 759 54 34, 0533 558 54 34";

export const BranchAnnouncementModal = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
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

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-6">
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
            className="relative z-[101] w-full max-w-[min(100vw-1.5rem,34rem)] overflow-hidden rounded-2xl border border-cream-dark/50 bg-cream shadow-2xl ring-1 ring-terracotta/10"
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
              <div className="relative w-full">
                <Image
                  src={BRANCH_MODAL_IMAGE}
                  alt={branchModalImageAlt}
                  width={1000}
                  height={1024}
                  className="h-auto w-full object-contain"
                  priority
                  sizes="(max-width: 480px) 100vw, 544px"
                />
                <a
                  href={QR_MENU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Menümüz için tıklayın, QR menü yeni sekmede açılır"
                  className="absolute right-1 top-11 z-[9] flex h-[8rem] w-[8rem] origin-center flex-col items-center justify-center gap-1.5 rounded-full border-[3px] border-dashed border-white/50 bg-pizza-green px-2.5 py-3 text-center text-[11px] font-bold leading-snug text-white shadow-[0_4px_18px_rgba(0,0,0,0.35),inset_0_2px_10px_rgba(0,0,0,0.15)] ring-2 ring-black/10 transition-all duration-200 ease-out hover:scale-110 hover:-rotate-1 hover:bg-pizza-green-dark hover:shadow-[0_8px_28px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pizza-green active:scale-105 sm:right-2 sm:top-14 sm:h-[8.75rem] sm:w-[8.75rem] sm:text-xs"
                >
                  <span className="px-1 py-1 text-lg leading-none drop-shadow-sm">Menümüz için tıklayın.</span>
                  <svg
                    className="h-7 w-7 shrink-0 text-white drop-shadow-sm"
                    viewBox="0 -960 960 960"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      fill="currentColor"
                      d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
};
