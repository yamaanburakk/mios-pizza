"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

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
  "/images/DSC03925.JPG",
  "/images/DSC03926.JPG",
  "/images/DSC03927.JPG",
  "/images/DSC03928.JPG",
];

const restaurantImages = [
  "/images/DSC03960.JPG",
  "/images/DSC03961.JPG",
  "/images/DSC03963.JPG",
  "/images/DSC03965.JPG",
  "/images/DSCF0202.JPG",
  "/images/DSCF0203.JPG",
  "/images/DSCF0204.JPG",
  "/images/DSCF0205.JPG",
];

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"pizzalar" | "restoran">("pizzalar");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentImages = activeTab === "pizzalar" ? pizzaImages : restaurantImages;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
                GALERİ
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Fotoğraf <span className="gradient-text">Galerisi</span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light mb-8">
              Lezzetlerimiz ve mekanımızdan özel kareler
            </p>
            
            {/* Back Button */}
            <Link href="/#galeri">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana Sayfaya Dön
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("pizzalar")}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                activeTab === "pizzalar"
                  ? "bg-gradient-to-r from-pizza-yellow to-pizza-red text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              🍕 Lezzetlerimiz ({pizzaImages.length})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("restoran")}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
                activeTab === "restoran"
                  ? "bg-gradient-to-r from-pizza-red to-pizza-green text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              🏪 Restoranımız ({restaurantImages.length})
            </motion.button>
          </div>

          {/* Images Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden cursor-pointer group h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${activeTab === "pizzalar" ? "Pizza" : "Restoran"} ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                    <p className="text-gray-800 font-semibold text-sm">
                      {activeTab === "pizzalar" ? "Pizza" : "Restoran"} #{index + 1}
                    </p>
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Pizza"
                fill
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

