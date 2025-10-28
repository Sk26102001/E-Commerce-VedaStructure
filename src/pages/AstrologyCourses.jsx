

import React, { useState, useEffect } from "react";
import { CheckCircle2, Award, Zap } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";

import { Briefcase, Heart, Gem, BookOpen, Activity, Building2, Wallet, Sparkles } from "lucide-react";

import FAQPage from "./FAQPage";
import Hero from "./Hero"
import Faculty from "./Faculty";

import AdmissionProcess from "./AdmissionProcess";
import Testimonials from "../components/Testimonials";

import { Link } from "react-router-dom";

import { FileText, Phone, Rocket, SearchCheck, IdCard } from "lucide-react";










const aspects = [
  {
    title: "Learn from Expert Astrologers",
    desc: "Get trained directly by experienced and certified Vedic astrologers.",
    icon: <Briefcase className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Comprehensive Curriculum",
    desc: "Covers everything from basic astrology principles to advanced predictive techniques.",
    icon: <Heart className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Interactive & Practical Learning",
    desc: "Engage in live sessions, real chart analysis, and hands-on assignments.",
    icon: <Gem className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Authentic Vedic Knowledge",
    desc: "Learn astrology rooted in ancient Vedic wisdom with a modern approach.",
    icon: <BookOpen className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Flexible Online Learning",
    desc: "Study anytime, anywhere with lifetime access to course materials.",
    icon: <Activity className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Certification & Recognition",
    desc: "Earn an industry-recognized certificate to enhance your professional credibility.",
    icon: <Building2 className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Supportive Astrology Community",
    desc: "Connect, share, and grow with a global community of astrology enthusiasts.",
    icon: <Wallet className="w-16 h-16 text-orange-500" />,
  },
  {
    title: "Transform Your Life & Others’",
    desc: "Use astrology to understand yourself and guide others toward clarity and success.",
    icon: <Sparkles className="w-16 h-16 text-orange-500" />,
  },
];


// ---------- TESTIMONIALS ----------
const testimonials = [
  { name: "Anjali S.", review: "The astrology course helped me understand my career path and personal growth. Highly recommended!" },
  { name: "Rohit K.", review: "I learned practical remedies and insights for health and wealth. This course is truly life-changing!" },
  { name: "Priya M.", review: "The teachings are precise and easy to apply. It helped me make better decisions with confidence." },
];


// {Admission process}
const stepss = [
  {
    step: "Step 1",
    title: "Submit Application",
    desc: "Fill out the application form to start your journey.",
    img: "https://www.vedastructure.in/front/img/icon/admission-1.png", // 🖼️ Replace with your actual image path
  },
  {
    step: "Step 2",
    title: "Application Review",
    desc: "Our team will review your application & verify the details.",
    img: "https://www.vedastructure.in/front/img/icon/admission-2.png",
  },
  {
    step: "Step 3",
    title: "Get Admission",
    desc: "Get confirmed and start learning with us!",
    img: "https://www.vedastructure.in/front/img/icon/admission-3.png",
  },
];



// --- New Data: TOP COURSES GRID ---
const topCourses = [
  {
    name: "Vedic Astrology Master Course",
    video: "./Vedic_Astrology_Course_Instructor.mp4", // 🖼️ UPDATE THIS PATH
    link: "/CoursedetailsPage", // 🔗 UPDATE THIS LINK
  },
  {
    name: "Palmistry",
    image: "https://i.ytimg.com/vi/NODpGnZnLNY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBD1YPfB5KPLk5CqpiTnPdiyXW1Uw", // 🖼️ UPDATE THIS PATH
    link: "/palmistry", // 🔗 UPDATE THIS LINK
  },
  {
    name: "Upanishads",
    image: "https://www.esamskriti.com/essays/docfile/918.jpg", // 🖼️ UPDATE THIS PATH
    link: "/upanishads", // 🔗 UPDATE THIS LINK
  },
  {
    name: " Numerology",
    image: "https://schoolofoccultscience.com/uploads/1720718433_Numerology%20Grid.png", // 🖼️ UPDATE THIS PATH
    link: "/numerology", // 🔗 UPDATE THIS LINK
  },
];









const AstrologyCourses = () => {

  //   const [lang, setLang] = useState("en");
  // const t = translations[lang];
  const [lang, setLang] = useState("en");
  const [currentBanner, setCurrentBanner] = useState(0);
  const [direction, setDirection] = useState(1);

  const banners = [
    {
      video: "./Untitled design (1).mp4",
      title: {
        en: "Unlock Your Destiny with",
        hi: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
      },
      subtitle: {
        // en: "Discover the power of Vedic Astrology and transform your life with our Professional Astrology Course taught by certified gurus",
        hi: "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
      },
        subtitles: {
        en: "🌟 Learn from experts & award-winning astrologers with 20+ years of experience.",
        hi: "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
      },
      button1: { en: "Enroll Now", hi: "" },
      button2: { en: "Know More", hi: "" },
      button3: { en: "Conatact Us", hi: "" },

     
    },
    {
      // image: "https://static.tumblr.com/c69840c1f2dd84d71e56e34fc6a13cbd/j1olzmp/1OVoo6lkz/tumblr_static_13a40ubawm6oc8ok4g84cgowo_2048_v2.png",
      video: "./Untitled design (2).mp4",
      title: {
        en: " Learn Astrology through Scriptures & Intuitive Tools.",
        hi: "अपने करियर और धन के रहस्य जानें",
      },
      subtitle: {
        en: "Your journey from curiosity to cosmic clarity begins here.",
        hi: "सटीक भविष्यवाणियाँ जो आपके पेशेवर और वित्तीय मार्गदर्शन करें।",
      },
      button1: { en: "Join the Course Now", hi: "अब देखें" },
      button2: { en: "Learn More", hi: "और जानें" },
    },
    {
      image: "https://templeofhope.in/cdn/shop/articles/the-lal-kitab-remedy-that-even-tantriks-fear-to-reveal.png?v=1757616902",
      title: {
        en: "Master Lal Kitab Astrology from Scratch",
        hi: "वैदिक और लाल किताब से व्यक्तिगत उपाय",
      },
      subtitle: {
        en: "Learn the logic behind planetary remedies with real-life examples.",
        hi: "स्वास्थ्य, रिश्तों और आध्यात्मिक विकास के लिए व्यक्तिगत उपाय पाएं।",
      },
      button1: { en: "View Remedies", hi: "उपाय देखें" },
      button2: { en: "Start Now", hi: "शुरू करें" },
    },

  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = banners[currentBanner];


// {// Why should join us}
const [index, setIndex] = useState(0);

  // Auto change testimonial every 5 sec
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="">
   
<section className="relative w-full overflow-hidden h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[85vh] flex items-center bg-black">
  {/* Sliding banners */}
  <AnimatePresence initial={false} custom={direction}>
    <motion.div
      key={currentBanner}
      custom={direction}
      initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 1.03 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 1.02 }}
      transition={{
        duration: 1.2,
        ease: [0.45, 0, 0.55, 1],
      }}
      className="absolute inset-0 bg-center bg-cover will-change-transform"
    >
      <div className="absolute inset-0 bg-black/0 transition-opacity duration-700">
        {current.video ? (
          <video
            key={current.video}
            src={current.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onLoadedData={(e) =>
              e.target.closest("video").classList.add("opacity-100")
            }
          />
        ) : (
          <motion.div
            key={current.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${current.image})` }}
          />
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
    </motion.div>
  </AnimatePresence>

  {/* Hero Content */}
  <motion.div
    key={currentBanner + "-text"}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{
      duration: 1,
      delay: 0.8,
      ease: [0.4, 0, 0.2, 1],
    }}
    className="relative z-10 text-left max-w-2xl p-6 sm:p-8 lg:p-10 ml-6 sm:ml-12"
  >
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-snug drop-shadow-2xl">
      {currentBanner === 0 ? (
        <>
          Unlock Your Destiny with{" "}
          <span className="text-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
            Ancient Vedic Wisdom
          </span>
        </>
      ) : (
        current.title[lang]
      )}
    </h1>

    <p className="mt-3 text-sm sm:text-base md:text-lg text-yellow-100 drop-shadow-md max-w-xl">
      {current.subtitle[lang]}
    </p>

    {current.subtitles && (
      <p className="mt-2 text-sm sm:text-base md:text-lg text-yellow-100 drop-shadow-md max-w-xl">
        {current.subtitles[lang]}
      </p>
    )}

    {/* Buttons */}
    <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
      <Link to="/enrollnow">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-xl"
        >
          {current.button1[lang]}
        </motion.button>
      </Link>

      <Link to="/CoursedetailsPage">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-xl"
        >
          {current.button2[lang]}
        </motion.button>
      </Link>

      {current.button3 && (
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-xl"
          >
            {current.button3[lang]}
          </motion.button>
        </Link>
      )}
    </div>
  </motion.div>
</section>


      {/* Bottom Highlight with Seamless Animation */}
<div className="bg-orange-500 text-white py-2 font-semibold text-base md:text-lg overflow-hidden relative">
  <motion.div
    className="flex whitespace-nowrap"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 28, // slower, smoother continuous motion
      ease: "linear",
    }}
  >
    {/* 🔮 English + Hindi alternating messages for rich feel */}
    <span className="mx-8">🌟 100% Authentic Vedic Astrology | Learn from Certified Gurus 🌟</span>
    <span className="mx-8">🌟 १००% प्रामाणिक वैदिक ज्योतिष | प्रमाणित गुरुओं से सीखें 🌟</span>
    <span className="mx-8">🌙 Decode Your Horoscope & Unlock Hidden Opportunities 🌙</span>
    <span className="mx-8">🌙 अपनी कुंडली के रहस्यों को जानें और सफलता के द्वार खोलें 🌙</span>
    <span className="mx-8">🔮 Learn Lal Kitab Remedies, Predictions & Planetary Secrets 🔮</span>
    <span className="mx-8">🔮 लाल किताब के उपाय, भविष्यवाणियाँ और ग्रहों के रहस्य जानें 🔮</span>
    <span className="mx-8">🌞 Transform Your Life with Ancient Vedic Wisdom 🌞</span>
    <span className="mx-8">🌞 प्राचीन वैदिक ज्ञान से अपने जीवन को नया आयाम दें 🌞</span>
    <span className="mx-8">🌠 Build a Career in Astrology with Professional Certification 🌠</span>
    <span className="mx-8">🌠 प्रोफेशनल सर्टिफिकेशन के साथ ज्योतिष में करियर बनाएं 🌠</span>
    <span className="mx-8">🕉️ Practical Learning | Real-Life Case Studies | Expert Mentorship 🕉️</span>
    <span className="mx-8">🕉️ व्यवहारिक शिक्षा | वास्तविक केस स्टडीज़ | अनुभवी मार्गदर्शन 🕉️</span>
    <span className="mx-8">✨ Join Thousands of Successful Astrology Learners Today ✨</span>
    <span className="mx-8">✨ आज ही हजारों सफल विद्यार्थियों में शामिल हों ✨</span>

    {/* Duplicate for seamless looping */}
    <span className="mx-8">🌟 100% Authentic Vedic Astrology | Learn from Certified Gurus 🌟</span>
    <span className="mx-8">🌟 १००% प्रामाणिक वैदिक ज्योतिष | प्रमाणित गुरुओं से सीखें 🌟</span>
    <span className="mx-8">🌙 Decode Your Horoscope & Unlock Hidden Opportunities 🌙</span>
    <span className="mx-8">🌙 अपनी कुंडली के रहस्यों को जानें और सफलता के द्वार खोलें 🌙</span>
    <span className="mx-8">🔮 Learn Lal Kitab Remedies, Predictions & Planetary Secrets 🔮</span>
    <span className="mx-8">🔮 लाल किताब के उपाय, भविष्यवाणियाँ और ग्रहों के रहस्य जानें 🔮</span>
    <span className="mx-8">🌞 Transform Your Life with Ancient Vedic Wisdom 🌞</span>
    <span className="mx-8">🌞 प्राचीन वैदिक ज्ञान से अपने जीवन को नया आयाम दें 🌞</span>
    <span className="mx-8">🌠 Build a Career in Astrology with Professional Certification 🌠</span>
    <span className="mx-8">🌠 प्रोफेशनल सर्टिफिकेशन के साथ ज्योतिष में करियर बनाएं 🌠</span>
    <span className="mx-8">🕉️ Practical Learning | Real-Life Case Studies | Expert Mentorship 🕉️</span>
    <span className="mx-8">🕉️ व्यवहारिक शिक्षा | वास्तविक केस स्टडीज़ | अनुभवी मार्गदर्शन 🕉️</span>
    <span className="mx-8">✨ Join Thousands of Successful Astrology Learners Today ✨</span>
    <span className="mx-8">✨ आज ही हजारों सफल विद्यार्थियों में शामिल हों ✨</span>
  </motion.div>
</div>




{/* ===== About Section - Gold & Orange Premium Design ===== */}
<section className="relative bg-white py-24 px-8 md:px-24 mt-5 shadow-2xl overflow-hidden ">
  
  {/* 🌌 Subtle Background Accent (Warm Gold Glow) */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
    
    {/* 🎥 Image Block with Flip Animation */}
    <motion.div
      className="relative group rounded-3xl overflow-hidden shadow-2xl w-full "
      initial={{ rotateY: -90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Richer Gradient Overlay: Deep Gold-Orange to Transparent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-700/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-700"></div>

      {/* Full-width Responsive Image */}
      <img
        src="./ChatGPT Image Oct 9, 2025, 01_01_48 PM.png"
        alt="About Astrology"
        className="w-full h-[380px] md:h-[500px] lg:h-[520px] object-cover object-center rounded-3xl transition-all duration-500 group-hover:scale-105 mr-10"
      />
    </motion.div>

    {/* 🪶 Content Section */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="relative mb-6">
        {/* Title Color: Deepest Gray/Near Black for contrast and premium feel */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug tracking-tight">
          About Us
        </h2>

        {/* Enhanced Decorative Line: Rich Gold-Orange */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-1 w-45 bg-yellow-600 mt-2 rounded-full"
        >
          {/* Using the Tailwind element for a cleaner look */}
        </motion.div>
      </div>

      {/* Paragraph text remains neutral for readability, key words accented with deep orange */}
      <p className="text-gray-700 mb-12 leading-relaxed text-lg">
        Our Astrology Course blends <b className="text-orange-700">ancient wisdom</b> with <b className="text-orange-700">modern guidance</b>. 
        Learn from certified experts and gain practical knowledge to interpret 
        <b className="text-orange-700">planetary alignments</b>, understand <b className="text-orange-700">karma</b>, and apply <b className="text-orange-700">Lal Kitab principles</b>. 
        This isn’t just learning — it’s a transformational journey to awaken your cosmic intuition.
      </p>

      {/* ✨ Feature Highlights - Enhanced Cards with Hover Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        
        {/* Card 1 */}
        <div className="flex items-start gap-4 p-5 rounded-xl transition duration-500 hover:shadow-xl hover:shadow-orange-300/30 hover:bg-yellow-50/50 bg-white shadow-lg border border-gray-100 hover:scale-[1.02]">
          {/* Icon Color: Rich Gold-Yellow */}
          <Award className="text-yellow-600 w-7 h-7 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-semibold text-gray-900">
              Certified Expert Team
            </h4>
            <p className="text-gray-600">
              Learn from award-winning astrologers with over 20 years of proven experience.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 p-5 rounded-xl transition duration-500 hover:shadow-xl hover:shadow-orange-300/30 hover:bg-yellow-50/50 bg-white shadow-lg border border-gray-100 hover:scale-[1.02]">
          {/* Icon Color: Rich Gold-Yellow */}
          <Zap className="text-yellow-600 w-7 h-7 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-semibold text-gray-900">
              Practical & Intuitive Training
            </h4>
            <p className="text-gray-600">
              Gain confidence through live sessions, real-life case studies, and spiritual mentorship.
            </p>
          </div>
        </div>
      </div>

      {/* 🧿 Key Learnings - Checkmark color changed */}
      <ul className="space-y-4 mb-12">
        {[
          "Master complete Vedic & Lal Kitab fundamentals",
          "Interpret planetary effects and karmic influences",
          "Practice with real-life charts under expert guidance",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
            {/* Checkmark Color: Deep Orange Accent */}
            <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link to="/enrollnow">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500  text-white font-semibold text-lg shadow-lg hover:bg-orange-700 transition"
      >
        Explore All Courses
      </motion.button>
      </Link>

    </motion.div>
  </div>
</section>




{/* NEW: TOP COURSES GRID SECTION          */}
<section className="relative py-15 bg-gradient-to-b from-yellow-50 via-white to-orange-50 overflow-hidden ">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    
    {/* === Animated Heading === */}
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="mb-16"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight"
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: "200%" }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #f59e0b, #f97316, #facc15, #f59e0b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "200%",
        }}
      >
        ✨ Our Most Popular Courses
      </motion.h2>

      <p className="text-lg md:text-xl text-orange-600 font-medium">
        Discover the divine knowledge designed for your spiritual journey.
      </p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex justify-center mt-3"
      >
        <img src="./border.png" alt="decorative line" className="w-[180px]" />
      </motion.div>
    </motion.div>

    {/* === Premium Animated Grid === */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {topCourses.map((course, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 80,
            rotateY: index % 2 === 0 ? 10 : -10,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            // ⚡️ CHANGE: Reduced duration for faster animation
            duration: 0.6, 
            // ⚡️ CHANGE: Reduced delay for faster stagger effect
            delay: index * 0.08, 
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-[0_25px_50px_rgba(255,165,0,0.25)] transition-all duration-700 group hover:scale-[1.05]"
        >
          {/* Shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* Image / Video */}
          <Link to={course.link} className="block overflow-hidden h-52 group">
            {course.video ? (
              <video
                src={course.video}
                alt={course.name}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            )}
          </Link>

          {/* Card Content */}
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 tracking-tight">
              {course.name}
            </h3>

            <Link to={course.link}>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 25px rgba(255,140,0,0.4)",
                }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-white font-semibold text-sm md:text-base shadow-md transition-all duration-300"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

    {/* === View All Button === */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="mt-20"
    >
      <Link to="/enrollnow">
        <motion.button
          whileHover={{
            scale: 1.1,
            background:
              "linear-gradient(90deg, #f97316, #facc15, #f97316)",
            color: "#fff",
            boxShadow: "0 0 35px rgba(255,165,0,0.5)",
          }}
          whileTap={{ scale: 0.96 }}
          className="px-10 py-3 rounded-full border-2 border-orange-500 text-orange-600 font-bold text-lg shadow-md transition-all duration-500"
        >
          Explore All Programs →
        </motion.button>
      </Link>
    </motion.div>
  </div>
</section>



{/* {Why should join us} */}
<section className="relative py-10 bg-gradient-to-r from-white to-yellow-50 ">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Heading */}
    <motion.h2
      className="text-3xl md:text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      Who Should Join This Course?
    </motion.h2>

    {/* Wave Border Image */}
    <div className="flex justify-center mb-6">
      <img
        src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
        alt="wave border"
        className="w-48 md:w-64 lg:w-72"
      />
    </div>

    {/* Subtext with icons on left & right */}
    <motion.div
      className="text-yellow-100 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium flex items-center justify-center gap-3 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {/* <span className="text-2xl md:text-3xl text-yellow-400">✨</span>
      <p className="mx-2 text-yellow-400">
        Whether you are a{" "}
        <span className="font-semibold text-yellow-400">complete beginner</span> or
        already a <span className="font-semibold text-yellow-400">spiritual guide</span>,
        this course is designed to{" "}
        <span className="italic text-yellow-400">elevate your journey with astrology</span>.
      </p>
      <span className="text-2xl md:text-3xl text-yellow-400">✨</span> */}
    </motion.div>

    {/* -------- UPDATED GRID FOR REDUCED GAP & LARGER SMALL-SCREEN IMAGE -------- */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 items-center">
      {/* Left Grid */}
      <div className="space-y-6">
        {aspects.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className={`group p-6 rounded-2xl bg-white shadow-lg hover:scale-105 transition-all duration-300 border border-orange-500`}
          >
            <div className="flex items-center gap-4 ">
              {item.icon}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-sm opacity-90 text-gray-500">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Center Chakra with Glow Aura (Small-screen size increased, padding removed) */}
      {/* py-6 is removed to tighten vertical spacing on small screens */}
      <div className="flex justify-center items-center md:py-0"> 
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-70 animate-spin-slow"></div>
          <img
            src="./GoldenPisces.png"
            alt="Chakra"
            // BASE SIZE INCREASED FROM w-72 h-72 TO w-80 h-80 FOR SMALL SCREENS
            className="relative w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-spin-slow animate-none md:animate-spin ..."
          />
        </div>
      </div>

      {/* Right Grid */}
      <div className="space-y-6">
        {aspects.slice(4).map((item, i) => (
          <div
            key={i}
            className={`group p-6 rounded-2xl bg-white shadow-lg hover:scale-105 transition-all duration-300 border border-orange-500`}
          >
            <div className="flex items-center gap-4">
              {item.icon}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-sm opacity-90 text-gray-500">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* -------- END OF UPDATED GRID -------- */}

    {/* -------- CTA BUTTON -------- */}
    <div className="mt-10">
      <Link to="/enrollnow">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-xl shadow-2xl hover:bg-yellow-400 transition cursor-pointer inline-block"
        >
          Explore All Courses
        </motion.div>
      </Link>
    </div>
  </div>

  {/* Custom Slow Spin Animation */}
  <style>
    {`
      .animate-spin-slow {
        animation: spin 40s linear infinite;
      }
    `}
  </style>
</section>


<section className=" bg-gray-50">
  <AdmissionProcess />
</section>





{/* ===== Features Section with Premium Star Animation ===== */}
<section className="relative py-12 overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-800 ">
  {/* Starry Background */}
  <div className="absolute inset-0 z-0">
    {[...Array(120)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-80"
        style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          backgroundColor: `hsl(45, 100%, ${Math.random() * 30 + 50}%)`, // soft yellow stars
          animation: `drift ${Math.random() * 60 + 40}s linear infinite`,
          animationDelay: `${Math.random() * 20}s`,
        }}
      />
    ))}
  </div>

  {/* Top Border */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move z-10"></div>
  {/* Bottom Border */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move z-10"></div>

  {/* Feature Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white px-6 relative z-20">
    {[
      {
        icon: "https://vedastructure.in/front/img/icon/d-1.png",
        title: "Professional",
        subtitle: "Certification",
      },
      {
        icon: "https://vedastructure.in/front/img/icon/d-2.png",
        title: "100% Live",
        subtitle: "Online Classes",
      },
      {
        icon: "https://vedastructure.in/front/img/icon/d-3.png",
        title: "100% Placement",
        subtitle: "Support",
      },
      {
        icon: "https://vedastructure.in/front/img/icon/d-4.png",
        title: "1 on 1",
        subtitle: "Mentorship",
      },
    ].map((feature, i) => (
      <motion.div
        key={i}
        className="flex flex-col items-center p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
      >
        <img src={feature.icon} alt={feature.title} className="w-28 h-28 mb-4" />
        <h3 className="text-2xl font-bold text-yellow-300">{feature.title}</h3>
        <p className="text-lg mt-2 text-yellow-100">{feature.subtitle}</p>
      </motion.div>
    ))}
  </div>

  <style>{`
    @keyframes drift {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-2000px); }
    }
  `}</style>
</section>










<Testimonials/>


{/* Certificate Section */}
<section className="relative bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-16 px-6 overflow-hidden">
  {/* Decorative Astrology Background */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat"></div>
  </div>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
    
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
        🌟 Professional Astrology Training with Certification
      </h2>
      <p className="text-gray-700 mb-4">
        Join our professionally designed astrology course and earn a recognized 
        certificate that validates your skills and knowledge in astrological science.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li>✨ Learn the ancient art of astrology for career opportunities</li>
        <li>✨ Covers natal charts, predictive techniques, & cosmic analysis</li>
        <li>✨ Lifetime access, expert guidance & completion certificate</li>
        <li>✨ Gain credibility as a professional astrologer</li>
        <li>✨ Beautifully designed certificate as proof of expertise</li>
      </ul>
 <Link
  to="/enrollnow"
  className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all"
>
  Enroll Now & Get Certified
</Link>

    </div>

    {/* Right Certificate Image */}
    <div className="flex justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-4 transform hover:scale-105 transition-all">
        <img
          src="https://www.vedastructure.in/front/img/certifcate.jpg"
          alt="Certificate"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>


</section>


<Faculty/>
<FAQPage/>





    </div>
  );
};

export default AstrologyCourses;