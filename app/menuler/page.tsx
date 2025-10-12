"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ImageWithLoader from "@/components/ImageWithLoader";

const featuredPizzas = [
  {
    name: "Margherita",
    description: "Klasik İtalyan lezzeti: taze domates, mozzarella, fesleğen ve zeytinyağı",
    image: "/images/DSC03891.JPG",
    badge: "Klasik",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Özel Pizza",
    description: "Zengin malzemelerle hazırlanmış özel tarifimiz",
    image: "/images/DSC03892.JPG",
    badge: "Popüler",
    color: "from-pizza-yellow to-orange-600",
  },
  {
    name: "Vejeteryan",
    description: "Taze sebzeler ve otlarla hazırlanmış sağlıklı lezzet",
    image: "/images/DSC03893.JPG",
    badge: "Sağlıklı",
    color: "from-pizza-green to-green-600",
  },
];

const MenuPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [qrHovered, setQrHovered] = useState(false);

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithLoader
            src="/images/DSC03890.JPG"
            alt="Pizza Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </motion.div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-pizza-yellow/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-6 py-2 glass rounded-full text-sm font-semibold mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              MENÜLERIMIZ
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Lezzet <span className="gradient-text">Menümüz</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              İtalyan mutfağının en seçkin tatlarını keşfedin
            </p>
          </motion.div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pizza-red rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10" ref={ref}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="px-6 py-2 glass rounded-full text-white font-semibold text-sm">
                DİJİTAL MENÜ
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              QR ile <span className="gradient-text">Menüye Ulaşın</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto mb-12"></div>
            <p className="text-xl text-gray-400 mb-16">
              QR kodu okutarak dijital menümüze ulaşabilir, tüm ürünlerimizi detaylıca inceleyebilirsiniz
            </p>

            {/* QR Code Card */}
            <motion.div
              className="relative max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              onHoverStart={() => setQrHovered(true)}
              onHoverEnd={() => setQrHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-3xl blur-xl opacity-50"
                animate={{
                  scale: qrHovered ? 1.1 : 1,
                  opacity: qrHovered ? 0.8 : 0.5,
                }}
              />
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-white/10">
                <motion.div
                  className="bg-white p-10 rounded-2xl mb-6"
                  animate={{
                    scale: qrHovered ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/qr-code.svg"
                    alt="Menu QR Code"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </motion.div>
                <p className="text-white text-lg font-medium mb-2">
                  📱 Telefonunuzla QR kodu okutun
                </p>
                <p className="text-gray-400 text-sm">
                  Hızlı ve kolay menü erişimi
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pizza-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pizza-green rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 sm:px-6 py-2 glass rounded-full text-white font-semibold text-xs sm:text-sm mb-4 sm:mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              POPÜLER LEZZETLERİMİZ
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
              En Çok <span className="gradient-text">Sevilenler</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {featuredPizzas.map((pizza, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pizza.color} rounded-2xl lg:rounded-3xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl lg:rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl h-full flex flex-col">
                    {/* Badge */}
                    <motion.div 
                      className={`absolute -top-3 -right-3 px-4 sm:px-5 py-2 bg-gradient-to-r ${pizza.color} rounded-full text-white text-xs sm:text-sm font-bold shadow-xl`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {pizza.badge}
                    </motion.div>

                    {/* Icon/Number */}
                    <motion.div 
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${pizza.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-3xl sm:text-4xl font-bold text-white">
                        {index + 1}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:gradient-text transition-all">
                        {pizza.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                        {pizza.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="flex items-center gap-2 mt-auto">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`h-1 flex-1 rounded-full bg-gradient-to-r ${pizza.color}`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                        />
                      ))}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${pizza.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl lg:rounded-3xl pointer-events-none`}></div>
                    
                    {/* Corner Decoration */}
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green opacity-90"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Hemen Sipariş Verin!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Lezzetli pizzalarımızı denemek için hemen sipariş verin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <motion.a
                href="tel:02169995057"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-pizza-red to-pizza-red-dark text-white rounded-full font-semibold text-base sm:text-lg shadow-2xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="whitespace-nowrap">Telefon Sipariş</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pizza-red-dark to-pizza-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="https://wa.me/905313455800"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white rounded-full font-semibold text-base sm:text-lg shadow-2xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="whitespace-nowrap">WhatsApp Sipariş</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
