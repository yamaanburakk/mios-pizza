"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const ImageWithLoader = ({ 
  src, 
  alt, 
  fill, 
  width, 
  height, 
  className, 
  sizes,
  priority = false 
}: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {/* Loading Skeleton */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Mini Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/pizza_mios_logo.jpg"
                  alt="Loading"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Spinning Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-24 h-24 border-4 border-transparent border-t-pizza-red border-r-pizza-yellow border-b-pizza-green rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithLoader;


