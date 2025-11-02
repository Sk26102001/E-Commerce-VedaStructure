

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🌟 Media Items (Banners)
const mediaItems = [
  { id: 1, src: "./Untitled design (1).mp4", type: 'video', alt: "Astrology video background" },
  { id: 2, src: "./yntra2-removebg-preview.png", type: 'image', alt: "Yantra symbol image" }, 
  { id: 3, src: "./service-bannner.jpg", type: 'image', alt: "Astrology services banner" }, 
];

// --- Static Content Data (for the text overlay) ---
const HERO_CONTENT = {
    title: "Unlock Your Destiny with Ancient Vedic Wisdom",
    subtitle: "Navigate life with clarity through personalized Vedic Astrology readings.",
    button1: { text: "🔮 Enroll Now", to: "/enrollnow" },
    button2: { text: "✨ Course Details", to: "/CoursedetailsPage" },
    button3: { text: "📞 Contact Us", to: "/contact" },
};

// 🎨 PREMIUM Animation variants for the banner transition
const bannerVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%', // Use percentage for better responsiveness
    opacity: 0.5, // Start slightly visible for a better fade-in
    scale: 1.1, // Start slightly zoomed in for a push-in effect
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%', // Exit smoothly in the opposite direction
    opacity: 0,
    scale: 0.9, // Shrink slightly on exit
  })
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  
  const currentIndex = page % mediaItems.length;
  const currentMedia = mediaItems[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]); // Transition in positive direction
    }, 6000); // ⏱️ Increased duration to 6 seconds for a more relaxed, premium pace
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full max-w-screen overflow-hidden max-h-[70vh] h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]" // Responsive height adjustments
    >
      
      {/* 🔮 Animated Media Carousel Wrapper */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={bannerVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 150, damping: 20 }, // Smoother, less "snappy" spring
            opacity: { duration: 0.8, ease: "easeInOut" }, // Longer fade with smooth ease
            scale: { duration: 1.2, ease: [0.45, 0, 0.55, 1] } // Custom cubic-bezier for sophisticated scale
          }}
          className="absolute inset-0 w-full h-full"
        >
          {currentMedia.type === 'video' ? (
            <video
              className="w-full h-full object-cover"
              src={currentMedia.src}
              autoPlay
              loop
              muted
              playsInline
              alt={currentMedia.alt}
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={currentMedia.src}
              alt={currentMedia.alt}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Increased opacity */}

      {/* ✨ Text Overlay and Buttons - ADJUSTED FOR SMALL SCREENS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Slightly more pronounced initial Y offset
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2, // Slightly longer transition for premium feel
          delay: 1, // Longer delay for text to appear after banner transitions
          ease: [0.4, 0, 0.2, 1],
        }}
        className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center p-4" // Removed `w-full sm:p-6` as p-4 is default
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 drop-shadow-2xl leading-tight sm:leading-snug max-w-4xl">
            {HERO_CONTENT.title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-100 mb-4 drop-shadow-md font-medium max-w-2xl px-2"> {/* Added px-2 for small screens */}
            {HERO_CONTENT.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6"> {/* Adjusted gap and mt for small screens */}
            {/* Button 1 */}
            <motion.button
                whileHover={{ scale: 1.08 }} // Slightly more pronounced hover effect
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform text-sm sm:text-base"
            >
                {HERO_CONTENT.button1.text}
            </motion.button>
            
            {/* Button 2 */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-xl shadow-2xl transition-transform text-sm sm:text-base border border-orange-500"
            >
                {HERO_CONTENT.button2.text}
            </motion.button>

            {/* Button 3 */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform text-sm sm:text-base"
            >
                {HERO_CONTENT.button3.text}
            </motion.button>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;