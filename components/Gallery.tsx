"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ImageWithLoader from "./ImageWithLoader";
import { GALLERY_IMAGE_URLS } from "@/lib/media";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
          {GALLERY_IMAGE_URLS.map((image, index) => (
            <motion.div
              key={image}
              className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.25, delay: Math.min(index * 0.015, 0.2) }}
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
              aria-label="Galeri görseli — büyütmek için tıklayın"
            >
              <ImageWithLoader
                src={image}
                alt="Mio's Pizza galeri fotoğrafı"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority={index < 6}
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
            </motion.div>
          ))}
        </div>
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
