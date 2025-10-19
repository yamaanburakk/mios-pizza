"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ImageWithLoader from "./ImageWithLoader";

const pizzaImages = [
  "/images/DSCF0136.JPG",
  "/images/DSCF0146.JPG",
  "/images/DSC03913.JPG",
  "/images/DSC03879.JPG",
  "/images/DSC03880.JPG",
  "/images/DSC03881.JPG",
  "/images/DSC03882.JPG",
  "/images/DSC03883.JPG",
  "/images/DSC03884.JPG",
  "/images/DSC03885.JPG",
  "/images/DSC03886.JPG",
  "/images/DSC03890.JPG",
  "/images/DSC03891.JPG",
  "/images/DSC03892.JPG",
  "/images/DSC03893.JPG",
  "/images/DSC03894.JPG",
  "/images/DSC03895.JPG",
  "/images/DSC03897.JPG",
  "/images/DSC03898.JPG",
  "/images/DSC03899.JPG",
  "/images/DSC03900.JPG",
  "/images/DSC03902.JPG",
  "/images/DSC03903.JPG",
  "/images/DSC03925.JPG",
  "/images/DSC03926.JPG",
  "/images/DSC03927.JPG",
  "/images/DSC03928.JPG",
];

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
    <section id="galeri" className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
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
          <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            Usta ellerle hazırlanan lezzetlerimizden özel kareler
          </p>
        </motion.div>

        {/* Masonry Grid - Show only 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
          {pizzaImages.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
              aria-label={`Pizza görseli ${index + 1}`}
            >
              <div className="relative h-64 sm:h-72 lg:h-80">
                <ImageWithLoader
                  src={image}
                  alt={`Pizza ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 flex items-end justify-center p-4 sm:p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <div className="text-center">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                        >
                          <svg
                            className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                            />
                          </svg>
                        </motion.div>
                        <p className="text-white font-semibold text-sm sm:text-base lg:text-lg">Büyütmek için tıklayın</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 glass rounded-full px-4 py-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  #{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
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

      {/* Enhanced Modal */}
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
                alt="Pizza"
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
