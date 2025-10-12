"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/#hakkimizda", label: "Hakkımızda" },
    { href: "/menuler", label: "Menülerimiz" },
    { href: "/galeri", label: "Galeri" },
    { href: "/#iletisim", label: "İletişim" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-2xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="/images/pizza_mios_logo.jpg"
                alt="Mios Pizza Logo"
                width={48}
                height={48}
                className="rounded-xl sm:rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pizza-red/20 to-pizza-green/20 rounded-xl sm:rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-medium transition-all relative group ${
                    scrolled ? 'text-white hover:text-pizza-yellow' : 'text-white hover:text-pizza-yellow drop-shadow-lg'
                  }`}
                >
                  {item.label}
                  <span className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform"></span>
                </Link>
              </motion.div>
            ))}
            
            <motion.a
              href="tel:02169995057"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative ml-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pizza-red to-pizza-red-dark text-white rounded-full font-semibold text-sm sm:text-base shadow-xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">Sipariş Ver</span>
                <span className="sm:hidden">Sipariş</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pizza-red-dark to-pizza-red transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleMenu}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-white' : 'text-white'
            }`}
            aria-label="Menü"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-dark rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                      onClick={handleToggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  href="tel:02169995057"
                  className="block px-6 py-3 bg-gradient-to-r from-pizza-red to-pizza-red-dark text-white rounded-xl text-center font-semibold text-sm sm:text-base shadow-lg"
                >
                  📞 Sipariş Ver
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
