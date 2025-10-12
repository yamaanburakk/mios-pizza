"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    role: "Düzenli Müşteri",
    comment: "Malzemelerin tazeliği gerçekten müthiş! Her lokmada İtalya'yı hissediyorsunuz. Özellikle fıstıklı buratta pizzaları harika. Kadıköy'ün en iyi pizzası.",
    rating: 5,
    date: "2 hafta önce",
    image: "/images/DSC03879.JPG",
  },
  {
    name: "Mehmet Kaya",
    role: "Pizza Tutkunu",
    comment: "Fiyat-performans açısından İstanbul'un en uygun yerlerinden biri. Hem lezzet hem kalite hem de fiyat mükemmel dengede. Taze malzemeler, bol malzemeli pizzalar.",
    rating: 5,
    date: "1 ay önce",
    image: "/images/DSC03882.JPG",
  },
  {
    name: "Sarah Miller",
    role: "Tourist",
    comment: "Authentic Italian taste in the heart of Istanbul! The ingredients are so fresh and the dough is perfect. Best pizza I've had outside of Italy. Highly recommend!",
    rating: 5,
    date: "3 weeks ago",
    image: "/images/DSC03885.JPG",
  },
  {
    name: "Zeynep Demir",
    role: "Yemek Bloggeri",
    comment: "Taş fırında pişen pizzaların o eşsiz aroması... Doğal malzemeler, katkısız lezzetler. Çalışanlar çok ilgili ve profesyonel. Kesinlikle tavsiye ediyorum!",
    rating: 5,
    date: "3 gün önce",
    image: "/images/DSC03890.JPG",
  },
  {
    name: "Marco Rossi",
    role: "Italian Chef",
    comment: "As an Italian, I can say this is real Neapolitan pizza! The quality of ingredients and the traditional preparation method are impressive. Complimenti!",
    rating: 5,
    date: "2 weeks ago",
    image: "/images/DSC03895.JPG",
  },
  {
    name: "Can Öztürk",
    role: "Kadıköy Sakini",
    comment: "Hem ailemle hem arkadaşlarımla sürekli geldiğimiz bir yer. Pizzaların yanı sıra samimi ortam ve güler yüzlü hizmet de artıları. Fiyatlar gayet makul.",
    rating: 5,
    date: "5 gün önce",
    image: "/images/DSC03900.JPG",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-pizza-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pizza-red rounded-full blur-3xl"></div>
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
            <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-pizza-yellow/20 to-pizza-red/20 rounded-full text-pizza-red font-semibold text-xs sm:text-sm">
              MÜŞTERİ YORUMLARI
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Müşterilerimiz <span className="gradient-text">Ne Diyor?</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-pizza-red via-pizza-yellow to-pizza-green rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light px-4">
            Binlerce mutlu müşterimizin deneyimlerini keşfedin
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-full bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pizza-red/5 via-pizza-yellow/5 to-pizza-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 text-pizza-red/10 group-hover:text-pizza-red/20 transition-colors"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>

                <div className="relative">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-pizza-yellow"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg relative z-10">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4 sm:mb-6"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-pizza-red/20 group-hover:ring-pizza-red/40 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-transparent group-hover:border-pizza-red/20 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "4.9", label: "Ortalama Puan", icon: "⭐" },
            { value: "2500+", label: "Mutlu Müşteri", icon: "😊" },
            { value: "98%", label: "Tavsiye Oranı", icon: "👍" },
            { value: "1000+", label: "Olumlu Yorum", icon: "💬" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="text-5xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pizza-red to-pizza-green bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

