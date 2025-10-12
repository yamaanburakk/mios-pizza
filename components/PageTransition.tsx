"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;

