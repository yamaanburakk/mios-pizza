"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getContactIcon } from "./ContactIcons";

const contactMethods: Array<{
  icon: string;
  title: string;
  value: string;
  href?: string;
  subtitle?: string;
  color: string;
  iconBg?: string;
  description: string;
}> = [
  {
    icon: "📞",
    title: "Telefon Sipariş",
    value: "0216 999 50 57",
    href: "tel:02169995057",
    color: "from-pizza-red to-pizza-red-dark",
    description: "Anında sipariş için arayın",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    value: "0531 345 58 00",
    href: "https://wa.me/905313455800",
    color: "from-whatsapp to-whatsapp-dark",
    description: "Hızlı mesajlaşma",
  },
  {
    icon: "📱",
    title: "Instagram",
    value: "@pizzamios",
    href: "https://instagram.com/pizzamios",
    color: "from-instagram to-instagram-dark",
    description: "Bizi takip edin",
  },
  {
    icon: "maps",
    title: "Adres",
    value: "Kozyatağı Mahallesi, Kadıpaşa Sokak",
    subtitle: "No:28/C Kadıköy, İstanbul",
    color: "from-blue-500 to-blue-600",
    iconBg: "from-white to-white",
    description: "Bizi ziyaret edin",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="iletisim" className="py-12 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pizza-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pizza-green rounded-full blur-3xl"></div>
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
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-pizza-red/10 to-pizza-green/10 rounded-full text-pizza-red font-semibold text-xs sm:text-sm">
              İLETİŞİM
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Bize <span className="text-gray-800">Ulaşın</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light px-4">
            Sipariş vermek veya bilgi almak için bize ulaşın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto px-4">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* E-posta Kartı - Özel Tasarım */}
            <motion.a
              href="mailto:info@miospizza.com.tr"
              className="block group"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 10 }}
            >
              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* İkon Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0 relative overflow-hidden">
                    <div className="w-full h-full relative">
                      {getContactIcon("mail")}
                    </div>
                  </div>
                  
                  {/* İçerik */}
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Bize yazın</div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                      E-posta
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
                      info@miospizza.com.tr
                    </p>
                  </div>
                  
                  {/* Ok İkonu */}
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>

            {/* Diğer İletişim Kartları */}
            {contactMethods.map((method, index) => (
              method.href ? (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                    
                    <div className="relative flex items-center gap-4 sm:gap-6">
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${method.iconBg || method.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10">
                          {getContactIcon(method.icon)}
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{method.description}</div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                          {method.title}
                        </h3>
                        <p className={`text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                          {method.value}
                        </p>
                        {method.subtitle && (
                          <p className="text-sm sm:text-base text-gray-600 mt-1">{method.subtitle}</p>
                        )}
                      </div>
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  className="block group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    
                    <div className="relative flex items-center gap-6">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${method.iconBg || method.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {getContactIcon(method.icon)}
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">{method.description}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {method.title}
                        </h3>
                        <p className={`text-xl font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                          {method.value}
                        </p>
                        {method.subtitle && (
                          <p className="text-gray-600 mt-1">{method.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>

          {/* Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="sticky top-12 sm:top-24 bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-100">
              <div className="aspect-[2/1] sm:aspect-[2/1] rounded-xl sm:rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2!2d29.0752!3d40.9829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac86b3b3b3b3b%3A0x0!2zS296eWF0YcSfxLEgTWFoYWxsZXNpLCBLYWTEsXBhxZ9hIFNrLiBObzoyOC9DLCAzNDc0MiBLYWTEsWvDtnkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1697000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mios Pizza Konum"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Bizi Ziyaret Edin</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Kozyatağı Mahallesi, Kadıpaşa Sokak<br />
                  No:28/C Kadıköy, İstanbul
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Kozyatağı+Mahallesi+Kadıpaşa+Sokak+No:28/C+Kadıköy+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pizza-red to-pizza-red-dark text-white rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Yol Tarifi Al
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
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
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Hemen Sipariş Verin!
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Taze ve sıcak pizzanızı kapınızda teslim alalım
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
  );
};

export default Contact;
