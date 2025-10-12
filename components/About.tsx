"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🍕",
    title: "Taze Malzemeler",
    description: "Her gün taze olarak tedarik ettiğimiz premium kalite malzemelerle, lezzetin en doğal halini sofranıza getiriyoruz.",
    color: "from-pizza-red to-pizza-red-dark",
  },
  {
    icon: "👨‍🍳",
    title: "Usta Eller",
    description: "Deneyimli pizzacılarımız, İtalyan geleneğine sadık kalarak her pizzayı özenle hazırlıyor.",
    color: "from-pizza-green to-pizza-green-dark",
  },
  {
    icon: "🔥",
    title: "Taş Fırın",
    description: "Geleneksel taş fırınımızda, yüksek ısıda pişen pizzalarımız eşsiz bir lezzet ve doku kazanıyor.",
    color: "from-pizza-yellow to-orange-500",
  },
  {
    icon: "❤️",
    title: "Sevgiyle Yapıldı",
    description: "Her pizza, tutkuyla ve özenle hazırlanıyor. Müşteri memnuniyeti bizim için her şeyden önce geliyor.",
    color: "from-pink-500 to-red-500",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimizda" className="py-16 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pizza-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pizza-green rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
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
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-pizza-red/10 to-pizza-yellow/10 rounded-full text-pizza-red font-semibold text-xs sm:text-sm">
              HAKKIMIZDA
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Lezzet <span className="gradient-text">Hikayemiz</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
            İtalyan pizza geleneğini İstanbul&apos;un kalbine taşıyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/DSC03925.JPG"
                alt="Pizza yapım süreci"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Yıllık Deneyim</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="relative bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex items-start gap-3 sm:gap-4 lg:gap-6">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.color} rounded-xl lg:rounded-2xl flex items-center justify-center text-xl sm:text-2xl lg:text-3xl shadow-lg flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:gradient-text transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-transparent to-gray-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-pizza-red/10 via-pizza-yellow/10 to-pizza-green/10 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12">
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700 mb-4 sm:mb-6">
              &quot;Her lokmada <span className="font-bold gradient-text">İtalya&apos;nın</span> sıcaklığını hissedin&quot;
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {["Taze", "Lezzetli", "Özel", "Kaliteli"].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
