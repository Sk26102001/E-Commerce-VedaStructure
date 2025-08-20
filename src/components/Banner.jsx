

import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDE_TIME = 5000;
const AUTOPLAY = false; 
const LOOP = false;     

const slides = [
  {
    title: "Your One Stop for Pooja Services & Astrology Solutions",
    desc:
      "From booking sacred Vedic poojas to shopping trusted astrology products and getting personalized reports — Veda Structure brings spiritual convenience to your fingertips. Experience divine guidance, all in one place.",
    background: "./meditation_2_1645444217570_1645444231020.png",
    floating: [
      "./bracelets-removebg-preview.png",
      "./bracelets2-removebg-preview.png",
      "./RudrakshaBeads-removebg-preview.png",
      "./gems3-removebg-preview.png",
    ],
  },
  {
    title: "Divine Arti Services at Your Home",
    desc:
      "Book personalized Arti services and spiritual guidance with trusted Vedic experts. Bring positivity and blessings into your life today.",
    video:
      "https://scontent.xx.fbcdn.net/o1/v/t2/f2/m69/AQMf3AGSiM7g1HH8fNVmaXiCDErynnI9-vUWz9Zye1gZevek1J5y8Aebl-_lujVyyArymeyveC0ouu5qKWBYbxMv.mp4?strext=1&_nc_cat=108&_nc_oc=AdkG9xCMnnAicl5KPYLDsODq3HW8mGO2MDut2lJ_0yqtndC3lzJwW6CiR5HL6K2zzH1usO4LZ7xR8mdCdeaj8mJG&_nc_sid=8bf8fe&_nc_ht=video.fvns6-1.fna.fbcdn.net&_nc_ohc=0bGeZJXYJjsQ7kNvwHp56d0&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMjQwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6OTM0MjcxNjU0MjgyODM1LCJhc3NldF9hZ2VfZGF5cyI6ODkyLCJ2aV91c2VjYXNlX2lkIjoxMDEyMCwiZHVyYXRpb25fcyI6MTQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=WBDuBpH2xhH4-hrgNZY4Gg&_nc_zt=28&oh=00_AfW1nSX3AlRv28fq0OSIPibtiGRqp9t1T2jNSEv3i-krJw&oe=68A90FFE&bitrate=225120&tag=sve_sd",
  },
  {
    title: "Rudraksha Bracelet With OM Bead",
    desc:
      "The Rudraksha beads used in this bracelet are sourced from the Himalayas, ensuring their purity and potency. Each bead is carefully selected and strung together to create a piece that is not only beautiful but also spiritually significant. The 5 Mukhi Rudraksha is known for its properties in Hindu mythology, believed to be the tears of Lord Shiva.",
    background: "./baner3....jpg",
    rightSide: true,   // 👈 Mark this slide to align text right + remove blur
  },
];

const textVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const atStart = current === 0;
  const atEnd = current === slides.length - 1;

  const goTo = useCallback(
    (index, dir = 1) => {
      setDirection(dir);
      if (LOOP) {
        setCurrent((index + slides.length) % slides.length);
      } else {
        setCurrent(Math.max(0, Math.min(index, slides.length - 1)));
      }
    },
    []
  );

  const next = useCallback(() => {
    if (LOOP || !atEnd) goTo(current + 1, 1);
  }, [current, atEnd, goTo]);

  const prev = useCallback(() => {
    if (LOOP || !atStart) goTo(current - 1, -1);
  }, [current, atStart, goTo]);

  useEffect(() => {
    if (!AUTOPLAY || paused) return;
    const id = setTimeout(() => next(), SLIDE_TIME);
    return () => clearTimeout(id);
  }, [current, paused, next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div
      role="region"
      aria-label="Promotional banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full h-[420px] sm:h-[520px] lg:h-[650px] flex items-center overflow-hidden"
    >
      {/* Background (video or image) */}
      <div className="absolute inset-0 -z-10 w-full h-[550px] sm:h-[650px] lg:h-[700px] overflow-hidden">
        {slide.video ? (
          <video
            className="w-full h-full object-cover"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          />
        )}
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating images */}
      {slide.floating?.length > 0 && (
        <div
          className="absolute flex gap-3 sm:gap-4 flex-wrap md:flex-col md:gap-8 
                     bottom-3 sm:bottom-4 left-3 sm:left-4 
                     md:bottom-auto md:left-auto md:top-4 md:right-6 z-10"
        >
          {slide.floating.map((img, idx) => (
            <motion.img
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              src={img}
              alt={`Decor ${idx + 1}`}
              className="w-12 sm:w-16 md:w-24 lg:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.7)]"
              loading="lazy"
            />
          ))}
        </div>
      )}

      {/* Text content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35 }}
          className={`relative z-20 w-[90%] sm:w-[75%] md:w-1/2 px-3 sm:px-5 lg:px-16 
            ${slide.rightSide ? "ml-auto text-right" : "mx-auto md:mx-0"}`}
        >
          {/* If rightSide true → no blur box */}
          <div
            className={`${
              slide.rightSide
                ? ""
                : "bg-white/20 backdrop-blur-md p-3 sm:p-5 lg:p-6 rounded-lg shadow-lg"
            }`}
          >
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-snug mb-3 sm:mb-4">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-4 sm:mb-6 leading-relaxed">
              {slide.desc}
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-500 text-black font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg shadow-lg transition transform hover:scale-105 active:scale-95">
              Book Puja →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

{/* //       {/* Left = Previous (no wrap if LOOP=false) */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        disabled={!LOOP && atStart}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
                   bg-white/70 hover:bg-yellow-400 active:bg-yellow-500
                   text-black rounded-full p-3 sm:p-4 transition-colors duration-300 z-30
                   disabled:opacity-50 disabled:pointer-events-none"
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

      {/* Right = Next (no wrap if LOOP=false) */}
      <button
        aria-label="Next slide"
        onClick={next}
        disabled={!LOOP && atEnd}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
                   bg-white/70 hover:bg-yellow-400 active:bg-yellow-500
                   text-black rounded-full p-3 sm:p-4 transition-colors duration-300 z-30
                   disabled:opacity-50 disabled:pointer-events-none"
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
      </button> *


      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === i ? "w-6 bg-yellow-400" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
