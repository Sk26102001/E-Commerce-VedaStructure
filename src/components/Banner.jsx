


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const slides = [
  {
    title: "Your One Stop for Pooja Services & Astrology Solutions",
    desc: "From booking sacred Vedic poojas to shopping trusted astrology products and getting personalized reports — Veda Structure brings spiritual convenience to your fingertips. Experience divine guidance, all in one place.",
    background1: "./meditation_2_1645444217570_1645444231020.png",
    background2: "./bracelets-removebg-preview.png",
    background3: "./yntra2-removebg-preview.png",
    background4: "RudrakshaBeads-removebg-preview.png",
    background5: "./bracelets2-removebg-preview.png",
    background6: "./gems3-removebg-preview.png",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div
      className="relative w-full h-[420px] sm:h-[520px] lg:h-[650px] flex items-center overflow-hidden bg-blend-soft-light"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)),
          url(${slide.background1})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating images */}
      <div className="absolute flex gap-3 sm:gap-4 flex-wrap md:flex-col md:gap-8 
                      bottom-3 sm:bottom-4 left-3 sm:left-4 
                      md:bottom-auto md:left-auto md:top-4 md:right-6 z-10">
        {[slide.background2, slide.background5, slide.background4, slide.background6].map(
          (img, idx) => (
            <motion.img
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              src={img}
              alt={`Decor ${idx}`}
              className="w-12 sm:w-16 md:w-24 lg:w-32 
                         object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]"
            />
          )
        )}
      </div>

      {/* Text with glass effect */}
      <motion.div
        key={slide.title}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 
                   w-[90%] sm:w-[75%] md:w-1/2 
                   mx-auto md:mx-0 
                   px-3 sm:px-5 lg:px-16"
      >
        <div className="bg-white/20 backdrop-blur-md 
                        p-3 sm:p-5 lg:p-6 rounded-lg shadow-lg">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl 
                         font-bold text-white leading-snug mb-3 sm:mb-4">
            {slide.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg 
                        text-white mb-4 sm:mb-6 leading-relaxed">
            {slide.desc}
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 
                             active:bg-yellow-400 
                             text-black font-semibold 
                             px-3 sm:px-5 py-1.5 sm:py-2 
                             rounded-lg shadow-lg 
                             transition transform hover:scale-105 active:scale-95">
            Book Puja →
          </button>
        </div>
      </motion.div>

  {/* Navigation buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
                   bg-white/70 hover:bg-yellow-400 active:bg-yellow-500
                   text-black rounded-full p-3 sm:p-4
                   transition-colors duration-300 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
                   bg-white/70 hover:bg-yellow-400 active:bg-yellow-500
                   text-black rounded-full p-3 sm:p-4
                   transition-colors duration-300 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const slides = [
//   {
//     id: 1,
//     title: "Your Perfect Journey",
//     description: "Discover amazing destinations with comfort and style.",
//     image: "/banner1.jpg",
//     floatingImage: "/float1.png",
//   },
//   {
//     id: 2,
//     title: "Unforgettable Adventures",
//     description: "Create memories that last a lifetime.",
//     image: "/banner2.jpg",
//     floatingImage: "/float2.png",
//   },
//   {
//     id: 3,
//     title: "Luxury & Comfort",
//     description: "Experience travel like never before.",
//     image: "/banner3.jpg",
//     floatingImage: "/float3.png",
//   },
// ];

// export default function BannerCarousel() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[650px] overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={slides[current].id}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{
//             backgroundImage: `url(${slides[current].image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />

//           {/* Content */}
//           <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//             <motion.h1
//               className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold max-w-[90%] sm:max-w-[80%] md:max-w-[60%] leading-snug"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               {slides[current].title}
//             </motion.h1>

//             <motion.p
//               className="text-white mt-4 text-base sm:text-lg lg:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[55%] leading-relaxed"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               {slides[current].description}
//             </motion.p>

//             <motion.button
//               className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 active:bg-yellow-600 transition"
//               whileTap={{ scale: 0.95 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               Explore Now
//             </motion.button>
//           </div>

//           {/* Floating Decorative Image */}
//           <motion.img
//             src={slides[current].floatingImage}
//             alt="decor"
//             className="absolute bottom-8 right-6 w-20 sm:w-28 md:w-36"
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-400 active:bg-yellow-500 text-black rounded-full p-3 sm:p-4 shadow-md"
//       >
//         <FaArrowLeft />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-400 active:bg-yellow-500 text-black rounded-full p-3 sm:p-4 shadow-md"
//       >
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     title: "Your One Stop for Pooja Services & Astrology Solutions",
//     desc: "From booking sacred Vedic poojas to shopping trusted astrology products and getting personalized reports — Veda Structure brings spiritual convenience to your fingertips. Experience divine guidance, all in one place.",
//     background1: "./meditation_2_1645444217570_1645444231020.png",
//     background2: "./bracelets-removebg-preview.png",
//     background3: "./yntra2-removebg-preview.png",
//     background4: "./RudrakshaBeads-removebg-preview.png",
//     background5: "./bracelets2-removebg-preview.png",
//     background6: "./gems3-removebg-preview.png",
//   },
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setCurrent((prev) => (prev + 1) % slides.length),
//       5000
//     );
//     return () => clearInterval(timer);
//   }, []);

//   const slide = slides[current];

//   return (
//     <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[650px] flex items-center overflow-hidden">
//       {/* Background with fade */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slide.background1}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)),
//               url(${slide.background1})
//             `,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </AnimatePresence>

//       {/* Floating images */}
//       <div
//         className="absolute flex gap-3 sm:gap-4 flex-wrap md:flex-col md:gap-8
//                     bottom-3 sm:bottom-4 left-3 sm:left-4
//                     md:bottom-auto md:left-auto md:top-4 md:right-6 z-10"
//       >
//         {[slide.background2, slide.background5, slide.background4, slide.background6].map(
//           (img, idx) => (
//             <motion.img
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: [0, -5, 0] }}
//               transition={{
//                 duration: 0.8,
//                 delay: idx * 0.2,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//               src={img}
//               alt={`Decor ${idx}`}
//               className="w-12 sm:w-16 md:w-24 lg:w-32 
//                          object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]"
//             />
//           )
//         )}
//       </div>

//       {/* Text with glass effect */}
//       <motion.div
//         key={slide.title}
//         initial={{ opacity: 0, x: -30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-20 
//                    w-[90%] sm:w-[85%] md:w-[60%] lg:w-[50%]
//                    mx-auto md:mx-0 
//                    px-3 sm:px-5 lg:px-16"
//       >
//         <div className="bg-white/20 backdrop-blur-md 
//                         p-3 sm:p-5 lg:p-6 rounded-lg shadow-lg">
//           <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl 
//                          font-bold text-white leading-snug mb-3 sm:mb-4">
//             {slide.title}
//           </h1>
//           <p className="text-xs sm:text-sm md:text-base lg:text-lg 
//                         text-white mb-4 sm:mb-6 leading-relaxed">
//             {slide.desc}
//           </p>
//           <motion.button
//             className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-400 
//                        text-black font-semibold 
//                        px-3 sm:px-5 py-1.5 sm:py-2 
//                        rounded-lg shadow-lg 
//                        transition transform hover:scale-105 active:scale-95"
//             whileTap={{ scale: 0.95 }}
//           >
//             Book Puja →
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Navigation buttons */}
//       <button
//         onClick={() =>
//           setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//         }
//         className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
//                    bg-white/70 hover:bg-yellow-400 active:bg-yellow-500
//                    text-black rounded-full p-3 sm:p-4
//                    transition-colors duration-300 z-30"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 sm:w-5 sm:h-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
//         className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
//                    bg-white/70 hover:bg-yellow-400 active:bg-yellow-500
//                    text-black rounded-full p-3 sm:p-4
//                    transition-colors duration-300 z-30"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 sm:w-5 sm:h-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// }
