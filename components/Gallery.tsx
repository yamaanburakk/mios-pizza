"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ImageWithLoader from "./ImageWithLoader";
import { ALL_FILE_IMAGE_URLS } from "@/lib/media";

const PAGE_SIZE = 6;
const TOTAL_IMAGES = ALL_FILE_IMAGE_URLS.length;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMoreSentinelRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visibleImages = ALL_FILE_IMAGE_URLS.slice(0, visibleCount);
  const hasMore = visibleCount < TOTAL_IMAGES;

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    let raf = 0;
    const loadNextIfNearViewport = () => {
      const el = loadMoreSentinelRef.current;
      if (!el) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const preloadPx = Math.min(window.innerHeight * 0.45, 520);
      if (rect.top > window.innerHeight + preloadPx) {
        return;
      }
      setVisibleCount((c) => {
        if (c >= TOTAL_IMAGES) {
          return c;
        }
        return Math.min(c + PAGE_SIZE, TOTAL_IMAGES);
      });
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loadNextIfNearViewport);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    requestAnimationFrame(() => {
      requestAnimationFrame(loadNextIfNearViewport);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [hasMore]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeri" className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-x-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pizza-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pizza-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-4 sm:px-6 py-2 glass rounded-full text-white font-semibold text-xs sm:text-sm">
              GALERİ
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">
            Lezzetli <span className="text-white">Anlar</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-2 bg-dark-green rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            Usta ellerle hazırlanan lezzetlerimizden özel kareler
          </p>
        </motion.div>

        <div className="px-4 mb-4">
          <p className="text-center text-sm text-gray-400" aria-live="polite">
            {visibleCount} / {TOTAL_IMAGES} görsel
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
          {visibleImages.map((image, index) => {
            const fileNo = index + 3;
            return (
              <motion.div
                key={image}
                className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.35) }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                onClick={() => handleImageClick(image)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleImageClick(image);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Galeri görseli File ${fileNo} — büyütmek için tıklayın`}
              >
                <ImageWithLoader
                  src={image}
                  alt={`Mio's Pizza galeri File ${fileNo}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 flex items-end justify-center p-3 sm:p-4"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                    >
                      <p className="text-white font-semibold text-xs sm:text-sm">Büyütmek için tıklayın</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute top-2 right-2 glass rounded-full px-2 py-1 text-[10px] sm:text-xs font-bold opacity-90">
                  File {fileNo}
                </div>
              </motion.div>
            );
          })}
        </div>

        {hasMore && (
          <div
            ref={loadMoreSentinelRef}
            className="flex min-h-[4rem] items-center justify-center px-4 py-6"
            aria-hidden="true"
          >
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-pizza-red" />
          </div>
        )}

        <motion.div
          className="text-center py-12 sm:py-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="/galeri"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pizza-red to-pizza-red-dark text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-xl overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Tüm Fotoğrafları Gör
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pizza-red-dark to-pizza-red transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                handleCloseModal();
              }
            }}
            role="dialog"
            aria-modal="true"
            tabIndex={0}
          >
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={handleCloseModal}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Kapat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              className="relative w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Galeri"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
