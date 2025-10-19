"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    iletisim: [
      { label: "0216 999 50 57", href: "tel:02169995057", icon: "📞" },
      { label: "0531 345 58 00", href: "https://wa.me/905313455800", icon: "💬" },
      { label: "@pizzamios", href: "https://instagram.com/pizzamios", icon: "📱" },
      { label: "info@miospizza.com.tr", href: "mailto:info@miospizza.com.tr", icon: "✉️" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pizza-red rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pizza-green rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/pizza_mios_logo.jpg"
                  alt="Mios Pizza Logo"
                  width={56}
                  height={56}
                  className="rounded-xl sm:rounded-2xl shadow-xl"
                />
              </motion.div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold block">Mios Pizza</span>
                <span className="text-xs sm:text-sm text-gray-400">İtalyan Lezzetleri</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md">
              Mios Pizza Restoran İşletmeciliği Ltd. Şti. - İtalyan pizza geleneğini İstanbul&apos;un kalbine taşıyoruz. 
              Taze malzemeler ve usta ellerle lezzetin zirvesini keşfedin.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="https://instagram.com/pizzamios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-instagram to-instagram-dark rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                whileHover={{ y: -5 }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://wa.me/905313455800"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-whatsapp to-whatsapp-dark rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                whileHover={{ y: -5 }}
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Çalışma Saatleri</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center text-sm sm:text-base text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pizza-red rounded-full"></span>
                  Pazartesi - Cumartesi
                </span>
                <span className="font-medium">11:00 - 22:45</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pizza-yellow rounded-full"></span>
                  Pazar
                </span>
                <span className="font-medium">12:00 - 22:45</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-pizza-red/10 to-pizza-green/10 rounded-lg border border-pizza-red/20">
              <p className="text-xs sm:text-sm text-gray-300 text-center">
                <span className="font-semibold text-pizza-red">🚚</span> Teslimat saatleri: 11:00 - 22:30
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">İletişim</h3>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.iletisim.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2 sm:gap-3 group"
                  >
                    <span className="text-lg sm:text-xl">{link.icon}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="text-sm sm:text-base text-gray-400 flex items-start gap-2 sm:gap-3 mt-3 sm:mt-4">
                <span className="text-lg sm:text-xl">📍</span>
                <span className="text-xs sm:text-sm">
                  Kozyatağı mh. Kadıpaşa sk.<br />
                  No:28/C Kadıköy, İstanbul
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <motion.p
              className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} Mios Pizza Restoran İşletmeciliği Ltd. Şti. Tüm hakları saklıdır.
            </motion.p>
            <motion.div
              className="flex gap-4 sm:gap-6 text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green"></div>
    </footer>
  );
};

export default Footer;
