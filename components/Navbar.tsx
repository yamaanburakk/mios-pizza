"use client";

import Link from "next/link";
import { cdnAsset } from "@/lib/cdn";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QR_MENU_URL } from "@/lib/qrmenu";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const menuItems: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: QR_MENU_URL, label: "Menü", external: true },
  { href: "/galeri", label: "Galeri" },
  { href: "/#iletisim", label: "İletişim" },
];

const navLinkClassDesktop = (scrolled: boolean) =>
  `px-4 py-2 rounded-xl font-medium transition-all relative group ${
    scrolled
      ? "text-white hover:text-pizza-yellow"
      : "text-white hover:text-pizza-yellow drop-shadow-lg"
  }`;

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

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-2xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={cdnAsset("images/pizza_mios_logo.jpg")}
                alt="Mios Pizza Logo"
                width={48}
                height={48}
                className="rounded-xl sm:rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pizza-red/20 to-pizza-green/20 rounded-xl sm:rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={`${item.label}-${item.href}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${navLinkClassDesktop(scrolled)} relative group inline-block`}
                  >
                    {item.label}
                    <span className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform"></span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`${navLinkClassDesktop(scrolled)} relative group`}
                  >
                    {item.label}
                    <span className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleMenu}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-white" : "text-white"
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
                    key={`${item.label}-${item.href}-m`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                        onClick={handleMobileNavClick}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
                        onClick={handleMobileNavClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
