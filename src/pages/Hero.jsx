
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative w-full max-w-screen overflow-hidden max-h-[70vh]">
//       {/* 🎥 Background Video/Image */}
//       <video
//         className="w-full h-full max-h-screen object-cover"
//         src="./Untitled design (1).mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         alt="Banner background"
//       />

//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     // The 'flex' class here is what enables side-by-side display
//     <section className="relative w-full max-w-screen overflow-hidden max-h-[70vh] h-[30vh]"> 
      
//       {/* 🎥 Main Background Video (Still takes the largest width) */}
//       <video
//         // Removed h-[70vh] as the parent max-h will constrain it, and added a min-width
//         className="object-cover flex-1 min-w-[50%]" 
//         src="./Untitled design (1).mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         alt="Banner background"
//       />

//       {/* 🖼️ Additional Image 1 (Wider image, now visible on all screens) */}
//       <img
//         // ❌ REMOVED: hidden 
//         // We keep 'sm:block' to ensure it displays as a block, and is visible starting from 'sm'.
//         // If you want it visible on all screens including mobile, change 'sm:block' to 'block'
//         className=" w-1/5 object-cover sm:block" 
//         src="./yntra2-removebg-preview.png" 
//         alt="Astrology sidebar image 1"
//       />

//       {/* 🖼️ Additional Image 2 (Narrower image, now visible on medium screens and up) */}
//       <img
//         // ❌ REMOVED: hidden
//         // We keep 'md:block' to ensure it displays as a block, and is visible starting from 'md'.
//         // If you want it visible on all screens including mobile, change 'md:block' to 'block'
//         className=" w-[15%] object-cover md:block" 
//         src="./service-bannner.jpg" 
//         alt="Astrology sidebar image 2"
//       />

//       {/* 🌟 Text Overlay */}
//       <div className="absolute inset-0 bg-opacity-30 flex justify-center items-center">
//         <motion.h1 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg text-center p-4"
//         >
//           Explore the Cosmos
//         </motion.h1>
//       </div>
      
//     </section>
//   );
// };

// export default Hero;




// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // Note: To make the slide look continuous, you will typically need to
// // duplicate the content inside the animation wrapper.

// const Hero = () => {
//   const containerRef = useRef(null);

//   return (
//     // Height maintained at h-[30vh]
//     <section 
//       ref={containerRef}
//       className="relative w-full max-w-screen overflow-hidden max-h-[70vh] h-[30vh]"
//     > 
      
//       {/* 🔮 Animation Wrapper for Sliding Effect */}
//       <motion.div
//         className="flex h-full"
//         // Keyframing for continuous leftward movement
//         animate={{ x: ['0%', '-100%'] }} 
//         // Transition settings for smooth, infinite loop
//         transition={{ 
//           x: {
//             repeat: Infinity,
//             duration: 30, // Adjust duration for faster/slower speed (30s is slow)
//             ease: "linear",
//           },
//         }}
//       >
//         {/* -------------------- START: Media Group (Original + Duplicate) -------------------- */}

//         {/* ➡️ Media Group 1: Original Content */}
//         <div className="flex flex-shrink-0 w-full h-full">
//             {/* 🎥 Main Background Video */}
//             <video
//                 className="h-full object-cover flex-1 min-w-0" // Using h-full now
//                 src="./Untitled design (1).mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 alt="Banner background"
//             />

//             {/* 🖼️ Additional Image 1 */}
//             <img
//                 className="h-full w-1/5 object-cover sm:block" // Using h-full now
//                 src="./yntra2-removebg-preview.png" 
//                 alt="Astrology sidebar image 1"
//             />

//             {/* 🖼️ Additional Image 2 */}
//             <img
//                 className="h-full w-[15%] object-cover md:block" // Using h-full now
//                 src="./service-bannner.jpg" 
//                 alt="Astrology sidebar image 2"
//             />
//         </div>

//         {/* ➡️ Media Group 2: DUPLICATE Content (Needed for seamless loop transition) */}
//         <div className="flex flex-shrink-0 w-full h-full">
//             {/* 🎥 Duplicate Video */}
//             <video
//                 className="h-full object-cover flex-1 min-w-0"
//                 src="./Untitled design (1).mp4"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 alt="Banner background"
//             />

//             {/* 🖼️ Duplicate Image 1 */}
//             <img
//                 className="h-full w-1/5 object-cover sm:block"
//                 src="./yntra2-removebg-preview.png" 
//                 alt="Astrology sidebar image 1"
//             />

//             {/* 🖼️ Duplicate Image 2 */}
//             <img
//                 className="h-full w-[15%] object-cover md:block"
//                 src="./service-bannner.jpg" 
//                 alt="Astrology sidebar image 2"
//             />
//         </div>

//         {/* -------------------- END: Media Group -------------------- */}

//       </motion.div>


//       {/* ✨ Text Overlay (Positioned outside the animation wrapper) */}
//       <div className="absolute inset-0 bg-opacity-30 flex justify-center items-center pointer-events-none">
//         <motion.h1 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg text-center p-4"
//         >
//           Explore the Cosmos
//         </motion.h1>
//       </div>
      
//     </section>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // 🌟 1. Define all media items (Banners)
// const mediaItems = [
//   // Item 1: The main video (takes up 100% of the banner space when shown)
//   { id: 1, src: "./Untitled design (1).mp4", type: 'video', alt: "Astrology video background" },
//   // Item 2: The yantra image
//   { id: 2, src: "./yntra2-removebg-preview.png", type: 'image', alt: "Yantra symbol image" }, 
//   // Item 3: The service banner image
//   { id: 3, src: "./service-bannner.jpg", type: 'image', alt: "Astrology services banner" }, 
// ];

// // --- Static Content Data (for the text overlay) ---
// const HERO_CONTENT = {
//     title: "Unlock Your Destiny with Ancient Vedic Wisdom",
//     subtitle: "Navigate life with clarity through personalized Vedic Astrology readings.",
//     button1: { text: "🔮 Enroll Now", to: "/enrollnow" },
//     button2: { text: "✨ Course Details", to: "/CoursedetailsPage" },
//     button3: { text: "📞 Contact Us", to: "/contact" },
// };

// // 🎨 Animation variants for the banner transition (Slide and Fade)
// const bannerVariants = {
//   enter: (direction) => ({
//     // Starts off-screen (right or left based on direction) and slightly scaled
//     x: direction > 0 ? 1000 : -1000,
//     opacity: 0,
//     scale: 1.05
//   }),
//   center: {
//     // Moves to the center (visible)
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     scale: 1
//   },
//   exit: (direction) => ({
//     // Exits off-screen (left or right) and fades out
//     zIndex: 0,
//     x: direction < 0 ? 1000 : -1000,
//     opacity: 0,
//     scale: 1.05
//   })
// };

// const Hero = () => {
//   // 2. State to manage the current index and transition direction
//   const [[page, direction], setPage] = useState([0, 0]);
  
//   // Get the current media item
//   const currentIndex = page % mediaItems.length;
//   const currentMedia = mediaItems[currentIndex];

//   // 3. Auto-transition logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Moves to the next index (positive direction)
//       setPage(([prevPage]) => [prevPage + 1, 1]); 
//     }, 5000); // Transition every 5 seconds
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     // Height constraint maintained: max-h-[70vh] and h-[30vh]
//     <section 
//       className="relative w-full max-w-screen overflow-hidden max-h-[70vh] h-[30vh]"
//     >
      
//       {/* 🔮 Animated Media Carousel Wrapper */}
//       <AnimatePresence initial={false} custom={direction} mode="wait">
//         <motion.div
//           key={page} // Key must change to trigger the exit/enter animation
//           custom={direction}
//           variants={bannerVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 }, // Smooth sliding effect
//             opacity: { duration: 0.5 }, // Fade effect
//             scale: { duration: 1.2, ease: [0.45, 0, 0.55, 1] }
//           }}
//           className="absolute inset-0 w-full h-full"
//         >
//           {/* Dynamically render video or image, filling 100% of the container */}
//           {currentMedia.type === 'video' ? (
//             <video
//               className="w-full h-full object-cover"
//               src={currentMedia.src}
//               autoPlay
//               loop
//               muted
//               playsInline
//               alt={currentMedia.alt}
//             />
//           ) : (
//             <img
//               className="w-full h-full object-cover"
//               src={currentMedia.src}
//               alt={currentMedia.alt}
//             />
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* overlay for better text contrast */}
//       <div className="absolute inset-0 bg-black bg-opacity-40" />

//       {/* ✨ Advanced Text Overlay and Buttons (Text stays static over transitions) */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 1,
//           delay: 0.8,
//           ease: [0.4, 0, 0.2, 1],
//         }}
//         className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center w-full p-4 sm:p-6"
//       >
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight sm:leading-snug max-w-4xl">
//             {HERO_CONTENT.title}
//         </h1>

//         <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-yellow-100 drop-shadow-md font-medium max-w-2xl">
//             {HERO_CONTENT.subtitle}
//         </p>

//         <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
//             {/* Button 1 */}
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform text-sm sm:text-base"
//             >
//                 {HERO_CONTENT.button1.text}
//             </motion.button>
            
//             {/* Button 2 */}
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-5 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-xl shadow-2xl transition-transform text-sm sm:text-base border border-orange-500"
//             >
//                 {HERO_CONTENT.button2.text}
//             </motion.button>

//             {/* Button 3 */}
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform text-sm sm:text-base"
//             >
//                 {HERO_CONTENT.button3.text}
//             </motion.button>
//         </div>
//       </motion.div>
      
//     </section>
//   );
// };


// export default Hero;



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