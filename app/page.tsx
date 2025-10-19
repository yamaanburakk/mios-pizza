"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ImageWithLoader from "@/components/ImageWithLoader";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 sm:pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/DSC03890.JPG"
          >
            <source src="/videos/pizza-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-pizza-red/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-pizza-green/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block sm:inline">Lezzet</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-white">
                  Menümüz
                </span>
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-4xl mx-auto font-light text-white px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block sm:inline">İtalyan mutfağının en seçkin tatları</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0">
              <span className="text-white font-medium">Taze • Özel • Unutulmaz</span>
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "50+", label: "Çeşit Pizza" },
              { number: "15+", label: "Yıllık Deneyim" },
              { number: "100%", label: "Taze Malzeme" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* PDF Menu Viewer */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 sm:px-6 py-2 bg-pizza-red/10 rounded-full text-pizza-red font-semibold text-xs sm:text-sm mb-4 sm:mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              MENÜMÜZ
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6">
              Tam <span className="text-gray-800">Menü</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto"></div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden overflow-x-auto">
              {/* PDF Content */}
              <div className="relative overflow-x-auto">
                <iframe
                  src="/MENU.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                  className="w-full h-[500px] sm:h-[650px] lg:h-[750px] min-w-[600px]"
                  title="Mios Pizza Menü"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 sm:px-12 py-10 sm:py-12 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pizza-red/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pizza-green/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-pizza-red/10 rounded-full mb-6">
                    <div className="w-2 h-2 bg-pizza-red rounded-full animate-pulse"></div>
                    <span className="text-pizza-red font-semibold text-sm">SİPARİŞ VER</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Hemen Sipariş Verin!
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                    Lezzetli pizzalarımızı denemek için hemen sipariş verin
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <motion.a
                      href="tel:02169995057"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-pizza-red text-white rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Telefon Sipariş
                      </span>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/905313455800"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-whatsapp text-white rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        WhatsApp Sipariş
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
