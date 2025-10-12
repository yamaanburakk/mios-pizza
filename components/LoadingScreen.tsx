"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-pizza-red/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pizza-green/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pizza-yellow/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
              }}
            >
              {/* Pulsing Glow Ring */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating Border */}
              <motion.div
                className="absolute -inset-4"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border-4 border-transparent border-t-pizza-red border-r-pizza-yellow border-b-pizza-green rounded-full"></div>
              </motion.div>

              {/* Logo */}
              <motion.div
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/pizza_mios_logo.jpg"
                  alt="Mios Pizza"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Mios <span className="gradient-text">Pizza</span>
              </motion.h2>
              <p className="text-sm sm:text-base text-gray-400">Lezzet yükleniyor...</p>
            </motion.div>

            {/* Loading Dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 bg-gradient-to-r from-pizza-red to-pizza-yellow rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-64 sm:w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-pizza-yellow/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

