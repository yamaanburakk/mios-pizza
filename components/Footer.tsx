"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hizli: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Hakkımızda", href: "#hakkimizda" },
      { label: "Menülerimiz", href: "/menuler" },
      { label: "Galeri", href: "#galeri" },
      { label: "İletişim", href: "#iletisim" },
    ],
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <motion.div
            className="sm:col-span-2 lg:col-span-2"
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
              Taze malzemeler, usta eller ve taş fırınımızla lezzetin zirvesini keşfedin.
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
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gradient-text">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.hizli.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-pizza-red rounded-full group-hover:w-2 transition-all"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gradient-text">İletişim</h3>
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
