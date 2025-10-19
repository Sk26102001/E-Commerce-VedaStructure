
import React, { useState, useEffect } from "react";
import { CheckCircle2, Award, Zap } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";

import { Briefcase, Heart, Gem, BookOpen, Activity, Building2, Wallet, Sparkles } from "lucide-react";

import FAQPage from "./FAQPage";
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


const AstrologyCourses = () => {

  //   const [lang, setLang] = useState("en");
  // const t = translations[lang];
  const [lang, setLang] = useState("en");
  const [currentBanner, setCurrentBanner] = useState(0);
  const [direction, setDirection] = useState(1);

  const banners = [
    {
      video: "./Hailuo_Video_generate a videos of Astrology_433373022180130822.mp4",
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
      image: "https://static.tumblr.com/c69840c1f2dd84d71e56e34fc6a13cbd/j1olzmp/1OVoo6lkz/tumblr_static_13a40ubawm6oc8ok4g84cgowo_2048_v2.png",
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

<section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden bg-black">
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
        ease: [0.45, 0, 0.55, 1], // smoother Bezier curve
      }}
      className="absolute inset-0 bg-center bg-cover will-change-transform"
    >
      {/* Video/Image loader */}
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

      {/* Smooth overlay gradient (no black flash) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 transition-opacity duration-700" />
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
    className="relative z-10 text-left max-w-2xl p-4 sm:px-8 lg:px-10 ml-10"
  >
    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl leading-snug">
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

    <p className="mt-4 text-lg md:text-xl text-yellow-100 drop-shadow-md">
      {current.subtitle[lang]}
    </p>

    {current.subtitles && (
      <p className="mt-3 text-lg md:text-xl text-yellow-100 drop-shadow-md">
        {current.subtitles[lang]}
      </p>
    )}

    <div className="mt-6 flex flex-wrap gap-4">
      {/* Button 1 */}
      <Link to="/enrollnow">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform"
        >
          {current.button1[lang]}
        </motion.button>
      </Link>

      {/* Button 2 */}
      <Link to="/CoursedetailsPage">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-xl shadow-2xl transition-transform"
        >
          {current.button2[lang]}
        </motion.button>
      </Link>

      {/* Button 3 (Optional) */}
      {current.button3 && (
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform"
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


{/* ===== About Section ===== */}
<section className="relative bg-white py-20 px-8 md:px-24 mt-5  shadow-sm overflow-hidden ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* 🎥 Video Block with Flip Animation */}
    {/* <motion.div
      className="relative group rounded-3xl overflow-hidden shadow-2xl"
      initial={{ rotateY: -90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeInOut' }} */}
    {/* > */}
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-700"></div> */}

      {/* Video */}
      {/* <img
      src="./ChatGPT Image Oct 9, 2025, 01_01_48 PM.png"
        autoPlay
        loop
        muted
        playsInline
        className=" h-[200px] object-cover object-[center_top] rounded-3xl"
      />
    </motion.div> */}


     {/* 🎥 Image Block with Flip Animation */}
    <motion.div
      className="relative group rounded-3xl overflow-hidden shadow-2xl w-full "
      initial={{ rotateY: -90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-700"></div>

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
      <div className="relative inline-block mb-2">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          About Us
        </h2>

        {/* 🪷 Decorative Line Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=""
        >
          <img
            src="./border.png"
            alt="decorative line"
            className="w-[240px] md:w-[200px] object-contain"
          />
        </motion.div>
      </div>

      <p className="text-gray-700 mb-10 leading-relaxed text-lg">
        Our Astrology Course blends <b>ancient wisdom</b> with <b>modern guidance</b>.  
        Learn from certified experts and gain practical knowledge to interpret  
        <b>planetary alignments</b>, understand <b>karma</b>, and apply <b>Lal Kitab principles</b>.  
        This isn’t just learning — it’s a transformational journey to awaken your cosmic intuition.
      </p>

      {/* ✨ Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
        <div className="flex items-start gap-4">
          <Award className="text-orange-500 w-7 h-7 mt-1" />
          <div>
            <h4 className="text-xl font-semibold text-gray-900">
              Certified Expert Team
            </h4>
            <p className="text-gray-600">
              Learn from award-winning astrologers with over 20 years of proven experience.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Zap className="text-orange-500 w-7 h-7 mt-1" />
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

      {/* 🧿 Key Learnings */}
      <ul className="space-y-4 mb-10">
        {[
          "Master complete Vedic & Lal Kitab fundamentals",
          "Interpret planetary effects and karmic influences",
          "Practice with real-life charts under expert guidance",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
            <CheckCircle2 className="text-yellow-500 w-5 h-5" />
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



{/* {new image buddha} */}

<section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="./Copilot_20251013_185828.png"
      alt="Astrology Banner"
      className="w-full h-full object-contain object-center opacity-75"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 " />
  </div>

  {/* Bottom Buttons */}
  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pb-20">
    {/* Gradient Button */}
    <Link to="/EnrollNow"
      className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
                 text-white font-bold text-lg rounded-xl shadow-2xl
                 hover:from-orange-500 hover:to-yellow-400
                 transition-all duration-300 transform hover:scale-105"
    >
      Enroll Now
    </Link>

    {/* Outline Button */}
    <Link to="/CoursedetailsPage"
      className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
                 text-white font-bold text-lg rounded-xl shadow-2xl
                 hover:from-orange-500 hover:to-yellow-400
                 transition-all duration-300 transform hover:scale-105"
    >
      Preview
    </Link>
  </div>
</section>



{/* {Why should join us} */}
<section className="relative py-20 bg-gradient-to-r from-white to-yellow-50 ">
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

    {/* -------- GRID -------- */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-30 items-center">
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

      {/* Center Chakra with Glow Aura */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 blur-2xl opacity-70 animate-spin-slow"></div>
          <img
            src="./chakra.png"
            alt="Chakra"
            className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] object-contain animate-spin-slow drop-shadow-xl animate-none md:animate-spin ..."
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

    {/* -------- CTA BUTTON -------- */}
    <div className="mt-10">
      <Link to="/enrollnow">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500  text-black font-semibold rounded-xl shadow-2xl hover:bg-yellow-400 transition cursor-pointer inline-block"
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

{/* 
{admission process} */}
<section className="py-20 bg-yellow-100 ">
  {/* Header Section */}
  <div className="text-center max-w-4xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
      Admission <span className="text-black">Procedure</span>
    </h2>
    <p className="text-xl text-gray-600 mb-12">
      Follow these simple steps to enroll and begin your journey.
    </p>
  </div>

  {/* Divider (Optional - I've kept a simple one) */}
  {/* <div className="flex justify-center mb-12">
    <img
      src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
      alt="divider"
      className="w-48 md:w-64 opacity-50"
    />
  </div> */}

  {/* Steps Grid */}
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl mx-auto px-6 mb-10">
    {stepss.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="bg-gradient-to-r from-yellow-300 to-orange-200  p-8 pt-12 rounded-xl shadow-lg border-t-4 border-transparent 
                   hover:border-orange-600 hover:shadow-2xl 
                   transform transition-all duration-500 relative"
      >
        {/* Step Number Badge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-12 h-12 flex items-center justify-center 
                        bg-orange-600 text-white text-xl font-extrabold rounded-full shadow-lg">
          {index + 1}
        </div>

        {/* Image (Using standard Tailwind sizing) */}
        <div className="flex justify-center mb-4 mt-4">
          <img
            src={item.img}
            alt={item.title}
            className="w-30 h-30 object-contain text-blue-600 text-red-500"
          />
        </div>

        <h4 className="text-2xl font-bold mb-2 text-gray-900 text-center">{item.title}</h4>
        <p className="text-gray-600 text-base leading-relaxed text-center">{item.desc}</p>
      </motion.div>
    ))}
  </div>
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



<FAQPage/>





    </div>
  );
};

export default AstrologyCourses;
















// import React, { useState, useEffect } from "react";
// import { CheckCircle2, Award, Zap } from "lucide-react";
// import { motion,AnimatePresence } from "framer-motion";

// import { Briefcase, Heart, Gem, BookOpen, Activity, Building2, Wallet, Sparkles } from "lucide-react";

// import FAQPage from "./FAQPage";
// import Testimonials from "../components/Testimonials";

// import { Link } from "react-router-dom";

// import { FileText, Phone, Rocket, SearchCheck, IdCard } from "lucide-react";










// const aspects = [
//   {
//     title: "Learn from Expert Astrologers",
//     desc: "Get trained directly by experienced and certified Vedic astrologers.",
//     icon: <Briefcase className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Comprehensive Curriculum",
//     desc: "Covers everything from basic astrology principles to advanced predictive techniques.",
//     icon: <Heart className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Interactive & Practical Learning",
//     desc: "Engage in live sessions, real chart analysis, and hands-on assignments.",
//     icon: <Gem className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Authentic Vedic Knowledge",
//     desc: "Learn astrology rooted in ancient Vedic wisdom with a modern approach.",
//     icon: <BookOpen className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Flexible Online Learning",
//     desc: "Study anytime, anywhere with lifetime access to course materials.",
//     icon: <Activity className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Certification & Recognition",
//     desc: "Earn an industry-recognized certificate to enhance your professional credibility.",
//     icon: <Building2 className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Supportive Astrology Community",
//     desc: "Connect, share, and grow with a global community of astrology enthusiasts.",
//     icon: <Wallet className="w-16 h-16 text-orange-500" />,
//   },
//   {
//     title: "Transform Your Life & Others’",
//     desc: "Use astrology to understand yourself and guide others toward clarity and success.",
//     icon: <Sparkles className="w-16 h-16 text-orange-500" />,
//   },
// ];


// // ---------- TESTIMONIALS ----------
// const testimonials = [
//   { name: "Anjali S.", review: "The astrology course helped me understand my career path and personal growth. Highly recommended!" },
//   { name: "Rohit K.", review: "I learned practical remedies and insights for health and wealth. This course is truly life-changing!" },
//   { name: "Priya M.", review: "The teachings are precise and easy to apply. It helped me make better decisions with confidence." },
// ];


// // {Admission process} - UPDATED STRUCTURE
// const stepss = [
//   {
//     step: "Step 1",
//     title: "Basic Information & Profile",
//     desc: "Submit your name, contact details, and a brief statement of purpose for joining the course.",
//     // Use Luicde icons for better integration
//     icon: <IdCard className="w-full h-10 text-orange-600"/>,
//   },
//   {
//     step: "Step 2",
//     title: "Document & Fee Submission",
//     desc: "Complete the initial fee payment and upload any required documents (e.g., ID proof, prior qualifications).",
//     icon: <FileText className="w-full h-10 text-orange-600"/>,
//   },
//   {
//     step: "Step 3",
//     title: "Confirmation & Orientation",
//     desc: "You will receive a confirmation email. Our team will contact you within 24 hours for orientation and batch allocation.",
//     icon: <SearchCheck className="w-full h-10 text-orange-600"/>,
//   },
// ];


// const AstrologyCourses = () => {

//   //   const [lang, setLang] = useState("en");
//   // const t = translations[lang];
//   const [lang, setLang] = useState("en");
//   const [currentBanner, setCurrentBanner] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const banners = [
//     {
//       video: "./Hailuo_Video_generate a videos of Astrology_433373022180130822.mp4",
//       title: {
//         en: "Unlock Your Destiny with",
//         hi: "आपकी किस्मत, सुलझाई गई – वैदिक पर्सनलाइज्ड कुंडली",
//       },
//       subtitle: {
//         // en: "Discover the power of Vedic Astrology and transform your life with our Professional Astrology Course taught by certified gurus",
//         hi: "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
//       },
//         subtitles: {
//         en: "🌟 Learn from experts & award-winning astrologers with 20+ years of experience.",
//         hi: "अपने जीवन का छुपा हुआ ब्लूप्रिंट खोजें, 99% सटीक वैदिक ज्योतिष के साथ।",
//       },
//       button1: { en: "Enroll Now", hi: "" },
//       button2: { en: "Know More", hi: "" },
//       button3: { en: "Conatact Us", hi: "" },

//      
//     },
//     {
//       image: "https://static.tumblr.com/c69840c1f2dd84d71e56e34fc6a13cbd/j1olzmp/1OVoo6lkz/tumblr_static_13a40ubawm6oc8ok4g84cgowo_2048_v2.png",
//       title: {
//         en: " Learn Astrology through Scriptures & Intuitive Tools.",
//         hi: "अपने करियर और धन के रहस्य जानें",
//       },
//       subtitle: {
//         en: "Your journey from curiosity to cosmic clarity begins here.",
//         hi: "सटीक भविष्यवाणियाँ जो आपके पेशेवर और वित्तीय मार्गदर्शन करें।",
//       },
//       button1: { en: "Join the Course Now", hi: "अब देखें" },
//       button2: { en: "Learn More", hi: "और जानें" },
//     },
//     {
//       image: "https://templeofhope.in/cdn/shop/articles/the-lal-kitab-remedy-that-even-tantriks-fear-to-reveal.png?v=1757616902",
//       title: {
//         en: "Master Lal Kitab Astrology from Scratch",
//         hi: "वैदिक और लाल किताब से व्यक्तिगत उपाय",
//       },
//       subtitle: {
//         en: "Learn the logic behind planetary remedies with real-life examples.",
//         hi: "स्वास्थ्य, रिश्तों और आध्यात्मिक विकास के लिए व्यक्तिगत उपाय पाएं।",
//       },
//       button1: { en: "View Remedies", hi: "उपाय देखें" },
//       button2: { en: "Start Now", hi: "शुरू करें" },
//     },

//   ];

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const current = banners[currentBanner];


// // {// Why should join us}
// const [index, setIndex] = useState(0);

//   // Auto change testimonial every 5 sec
//   useEffect(() => {
//     const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
//     return () => clearInterval(timer);
//   }, []);



//   return (
//     <div className="">

// <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden bg-black">
//   {/* Sliding banners */}
//   <AnimatePresence initial={false} custom={direction}>
//     <motion.div
//       key={currentBanner}
//       custom={direction}
//       initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 1.03 }}
//       animate={{ opacity: 1, x: 0, scale: 1 }}
//       exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 1.02 }}
//       transition={{
//         duration: 1.2,
//         ease: [0.45, 0, 0.55, 1], // smoother Bezier curve
//       }}
//       className="absolute inset-0 bg-center bg-cover will-change-transform"
//     >
//       {/* Video/Image loader */}
//       <div className="absolute inset-0 bg-black/0 transition-opacity duration-700">
//         {current.video ? (
//           <video
//             key={current.video}
//             src={current.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="auto"
//             className="w-full h-full object-cover"
//             onLoadedData={(e) =>
//               e.target.closest("video").classList.add("opacity-100")
//             }
//           />
//         ) : (
//           <motion.div
//             key={current.image}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 bg-center bg-cover"
//             style={{ backgroundImage: `url(${current.image})` }}
//           />
//         )}
//       </div>

//       {/* Smooth overlay gradient (no black flash) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 transition-opacity duration-700" />
//     </motion.div>
//   </AnimatePresence>

//   {/* Hero Content */}
//   <motion.div
//     key={currentBanner + "-text"}
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -40 }}
//     transition={{
//       duration: 1,
//       delay: 0.8,
//       ease: [0.4, 0, 0.2, 1],
//     }}
//     className="relative z-10 text-left max-w-2xl p-4 sm:px-8 lg:px-10 ml-10"
//   >
//     <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl leading-snug">
//       {currentBanner === 0 ? (
//         <>
//           Unlock Your Destiny with{" "}
//           <span className="text-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
//             Ancient Vedic Wisdom
//           </span>
//         </>
//       ) : (
//         current.title[lang]
//       )}
//     </h1>

//     <p className="mt-4 text-lg md:text-xl text-yellow-100 drop-shadow-md">
//       {current.subtitle[lang]}
//     </p>

//     {current.subtitles && (
//       <p className="mt-3 text-lg md:text-xl text-yellow-100 drop-shadow-md">
//         {current.subtitles[lang]}
//       </p>
//     )}

//     <div className="mt-6 flex flex-wrap gap-4">
//       {/* Button 1 */}
//       <Link to="/enrollnow">
//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.96 }}
//           className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform"
//         >
//           {current.button1[lang]}
//         </motion.button>
//       </Link>

//       {/* Button 2 */}
//       <Link to="/CoursedetailsPage">
//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.96 }}
//           className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-xl shadow-2xl transition-transform"
//         >
//           {current.button2[lang]}
//         </motion.button>
//       </Link>

//       {/* Button 3 (Optional) */}
//       {current.button3 && (
//         <Link to="/contact">
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.96 }}
//             className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-2xl transition-transform"
//           >
//             {current.button3[lang]}
//           </motion.button>
//         </Link>
//       )}
//     </div>
//   </motion.div>
// </section>


//       {/* Bottom Highlight with Seamless Animation */}
// <div className="bg-orange-500 text-white py-2 font-semibold text-base md:text-lg overflow-hidden relative">
//   <motion.div
//     className="flex whitespace-nowrap"
//     animate={{ x: ["0%", "-100%"] }}
//     transition={{
//       repeat: Infinity,
//       duration: 28, // slower, smoother continuous motion
//       ease: "linear",
//     }}
//   >
//     {/* 🔮 English + Hindi alternating messages for rich feel */}
//     <span className="mx-8">🌟 100% Authentic Vedic Astrology | Learn from Certified Gurus 🌟</span>
//     <span className="mx-8">🌟 १००% प्रामाणिक वैदिक ज्योतिष | प्रमाणित गुरुओं से सीखें 🌟</span>
//     <span className="mx-8">🌙 Decode Your Horoscope & Unlock Hidden Opportunities 🌙</span>
//     <span className="mx-8">🌙 अपनी कुंडली के रहस्यों को जानें और सफलता के द्वार खोलें 🌙</span>
//     <span className="mx-8">🔮 Learn Lal Kitab Remedies, Predictions & Planetary Secrets 🔮</span>
//     <span className="mx-8">🔮 लाल किताब के उपाय, भविष्यवाणियाँ और ग्रहों के रहस्य जानें 🔮</span>
//     <span className="mx-8">🌞 Transform Your Life with Ancient Vedic Wisdom 🌞</span>
//     <span className="mx-8">🌞 प्राचीन वैदिक ज्ञान से अपने जीवन को नया आयाम दें 🌞</span>
//     <span className="mx-8">🌠 Build a Career in Astrology with Professional Certification 🌠</span>
//     <span className="mx-8">🌠 प्रोफेशनल सर्टिफिकेशन के साथ ज्योतिष में करियर बनाएं 🌠</span>
//     <span className="mx-8">🕉️ Practical Learning | Real-Life Case Studies | Expert Mentorship 🕉️</span>
//     <span className="mx-8">🕉️ व्यवहारिक शिक्षा | वास्तविक केस स्टडीज़ | अनुभवी मार्गदर्शन 🕉️</span>
//     <span className="mx-8">✨ Join Thousands of Successful Astrology Learners Today ✨</span>
//     <span className="mx-8">✨ आज ही हजारों सफल विद्यार्थियों में शामिल हों ✨</span>

//     {/* Duplicate for seamless looping */}
//     <span className="mx-8">🌟 100% Authentic Vedic Astrology | Learn from Certified Gurus 🌟</span>
//     <span className="mx-8">🌟 १००% प्रामाणिक वैदिक ज्योतिष | प्रमाणित गुरुओं से सीखें 🌟</span>
//     <span className="mx-8">🌙 Decode Your Horoscope & Unlock Hidden Opportunities 🌙</span>
//     <span className="mx-8">🌙 अपनी कुंडली के रहस्यों को जानें और सफलता के द्वार खोलें 🌙</span>
//     <span className="mx-8">🔮 Learn Lal Kitab Remedies, Predictions & Planetary Secrets 🔮</span>
//     <span className="mx-8">🔮 लाल किताब के उपाय, भविष्यवाणियाँ और ग्रहों के रहस्य जानें 🔮</span>
//     <span className="mx-8">🌞 Transform Your Life with Ancient Vedic Wisdom 🌞</span>
//     <span className="mx-8">🌞 प्राचीन वैदिक ज्ञान से अपने जीवन को नया आयाम दें 🌞</span>
//     <span className="mx-8">🌠 Build a Career in Astrology with Professional Certification 🌠</span>
//     <span className="mx-8">🌠 प्रोफेशनल सर्टिफिकेशन के साथ ज्योतिष में करियर बनाएं 🌠</span>
//     <span className="mx-8">🕉️ Practical Learning | Real-Life Case Studies | Expert Mentorship 🕉️</span>
//     <span className="mx-8">🕉️ व्यवहारिक शिक्षा | वास्तविक केस स्टडीज़ | अनुभवी मार्गदर्शन 🕉️</span>
//     <span className="mx-8">✨ Join Thousands of Successful Astrology Learners Today ✨</span>
//     <span className="mx-8">✨ आज ही हजारों सफल विद्यार्थियों में शामिल हों ✨</span>
//   </motion.div>
// </div>


// {/* ===== About Section ===== */}
// <section className="relative bg-white py-20 px-8 md:px-24 mt-5  shadow-sm overflow-hidden ">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

//     
//      {/* 🎥 Image Block with Flip Animation */}
//     <motion.div
//       className="relative group rounded-3xl overflow-hidden shadow-2xl w-full "
//       initial={{ rotateY: -90, opacity: 0 }}
//       whileInView={{ rotateY: 0, opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1.2, ease: 'easeInOut' }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-700"></div>

//       {/* Full-width Responsive Image */}
//       <img
//         src="./ChatGPT Image Oct 9, 2025, 01_01_48 PM.png"
//         alt="About Astrology"
//         className="w-full h-[380px] md:h-[500px] lg:h-[520px] object-cover object-center rounded-3xl transition-all duration-500 group-hover:scale-105 mr-10"
//       />
//     </motion.div>

//     {/* 🪶 Content Section */}
//     <motion.div
//       initial={{ opacity: 0, x: 60 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//     >
//       <div className="relative inline-block mb-2">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//           About Us
//         </h2>

//         {/* 🪷 Decorative Line Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className=""
//         >
//           <img
//             src="./border.png"
//             alt="decorative line"
//             className="w-[240px] md:w-[200px] object-contain"
//           />
//         </motion.div>
//       </div>

//       <p className="text-gray-700 mb-10 leading-relaxed text-lg">
//         Our Astrology Course blends <b>ancient wisdom</b> with <b>modern guidance</b>.  
//         Learn from certified experts and gain practical knowledge to interpret  
//         <b>planetary alignments</b>, understand <b>karma</b>, and apply <b>Lal Kitab principles</b>.  
//         This isn’t just learning — it’s a transformational journey to awaken your cosmic intuition.
//       </p>

//       {/* ✨ Feature Highlights */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
//         <div className="flex items-start gap-4">
//           <Award className="text-orange-500 w-7 h-7 mt-1" />
//           <div>
//             <h4 className="text-xl font-semibold text-gray-900">
//               Certified Expert Team
//             </h4>
//             <p className="text-gray-600">
//               Learn from award-winning astrologers with over 20 years of proven experience.
//             </p>
//           </div>
//         </div>

//         <div className="flex items-start gap-4">
//           <Zap className="text-orange-500 w-7 h-7 mt-1" />
//           <div>
//             <h4 className="text-xl font-semibold text-gray-900">
//               Practical & Intuitive Training
//             </h4>
//             <p className="text-gray-600">
//               Gain confidence through live sessions, real-life case studies, and spiritual mentorship.
//             </p>
//           </div>
//           </div>
//         </div>

//         {/* 🧿 Key Learnings */}
//         <ul className="space-y-4 mb-10">
//           {[
//             "Master complete Vedic & Lal Kitab fundamentals",
//             "Interpret planetary effects and karmic influences",
//             "Practice with real-life charts under expert guidance",
//           ].map((item, i) => (
//             <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
//               <CheckCircle2 className="text-yellow-500 w-5 h-5" />
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <Link to="/enrollnow">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500  text-white font-semibold text-lg shadow-lg hover:bg-orange-700 transition"
//         >
//           Explore All Courses
//         </motion.button>
//         </Link>
//       </motion.div>
//     </div>
// </section>



// {/* {new image buddha} */}

// <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end">
//   {/* Background Image */}
//   <div className="absolute inset-0">
//     <img
//       src="./Copilot_20251013_185828.png"
//       alt="Astrology Banner"
//       className="w-full h-full object-contain object-center opacity-75"
//     />
//     {/* Dark Overlay */}
//     <div className="absolute inset-0 " />
//   </div>

//   {/* Bottom Buttons */}
//   <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pb-20">
//     {/* Gradient Button */}
//     <Link to="/EnrollNow"
//       className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
//                  text-white font-bold text-lg rounded-xl shadow-2xl
//                  hover:from-orange-500 hover:to-yellow-400
//                  transition-all duration-300 transform hover:scale-105"
//     >
//       Enroll Now
//     </Link>

//     {/* Outline Button */}
//     <Link to="/CoursedetailsPage"
//       className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
//                  text-white font-bold text-lg rounded-xl shadow-2xl
//                  hover:from-orange-500 hover:to-yellow-400
//                  transition-all duration-300 transform hover:scale-105"
//     >
//       Preview
//     </Link>
//   </div>
// </section>



// {/* {Why should join us} */}
// <section className="relative py-20 bg-gradient-to-r from-white to-yellow-50 ">
//   <div className="max-w-7xl mx-auto px-6 text-center">
//     {/* Heading */}
//     <motion.h2
//       className="text-3xl md:text-4xl font-bold mb-4"
//       initial={{ opacity: 0, y: -30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       Who Should Join This Course?
//     </motion.h2>

//     {/* Wave Border Image */}
//     <div className="flex justify-center mb-6">
//       <img
//         src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//         alt="wave border"
//         className="w-48 md:w-64 lg:w-72"
//       />
//     </div>

//     {/* Subtext with icons on left & right */}
//     <motion.div
//       className="text-yellow-100 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium flex items-center justify-center gap-3 text-center"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1, delay: 0.2 }}
//     >
//       {/* <span className="text-2xl md:text-3xl text-yellow-400">✨</span>
//       <p className="mx-2 text-yellow-400">
//         Whether you are a{" "}
//         <span className="font-semibold text-yellow-400">complete beginner</span> or
//         already a <span className="font-semibold text-yellow-400">spiritual guide</span>,
//         this course is designed to{" "}
//         <span className="italic text-yellow-400">elevate your journey with astrology</span>.
//       </p>
//       <span className="text-2xl md:text-3xl text-yellow-400">✨</span> */}
//     </motion.div>

//     {/* -------- GRID -------- */}
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-30 items-center">
//       {/* Left Grid */}
//       <div className="space-y-6">
//         {aspects.slice(0, 4).map((item, i) => (
//           <div
//             key={i}
//             className={`group p-6 rounded-2xl bg-white shadow-lg hover:scale-105 transition-all duration-300 border border-orange-500`}
//           >
//             <div className="flex items-center gap-4 ">
//               {item.icon}
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                 <p className="text-sm opacity-90 text-gray-500">{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Center Chakra with Glow Aura */}
//       <div className="flex justify-center items-center">
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 blur-2xl opacity-70 animate-spin-slow"></div>
//           <img
//             src="./chakra.png"
//             alt="Chakra"
//             className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] object-contain animate-spin-slow drop-shadow-xl "
//           />
//         </div>
//       </div>

//       {/* Right Grid */}
//       <div className="space-y-6">
//         {aspects.slice(4).map((item, i) => (
//           <div
//             key={i}
//             className={`group p-6 rounded-2xl bg-white shadow-lg hover:scale-105 transition-all duration-300 border border-orange-500`}
//           >
//             <div className="flex items-center gap-4">
//               {item.icon}
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                 <p className="text-sm opacity-90 text-gray-500">{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* -------- CTA BUTTON -------- */}
//     <div className="mt-10">
//       <Link to="/enrollnow">
//         <motion.div
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.96 }}
//           className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500  text-black font-semibold rounded-xl shadow-2xl hover:bg-yellow-400 transition cursor-pointer inline-block"
//         >
//           Explore All Courses
//         </motion.div>
//       </Link>
//     </div>
//   </div>


// </section>

// {/* {admission process} */}
// <section className="py-20 bg-yellow-100 ">
//   {/* Header Section */}
//   <div className="text-center max-w-4xl mx-auto px-6">
//     <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
//       Simple <span className="text-orange-600">3-Step</span> Admission
//     </h2>
//     <p className="text-xl text-gray-600 mb-12">
//       Follow these easy steps to secure your spot. Our team handles the final confirmation!
//     </p>
//   </div>

//   {/* Steps Grid */}
//   <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 mb-10">
//     {stepss.map((item, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6, delay: index * 0.15 }}
//         className="bg-white p-8 pt-12 rounded-xl shadow-lg border-t-4 border-transparent 
//                    hover:border-orange-600 hover:shadow-2xl 
//                    transform transition-all duration-500 relative flex flex-col items-center text-center"
//       >
//         {/* Step Number Badge */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//                         w-12 h-12 flex items-center justify-center 
//                         bg-orange-600 text-white text-xl font-extrabold rounded-full shadow-lg">
//           {index + 1}
//         </div>

//         {/* Icon (Using Lucide Icon) - Replaced the static image src */}
//         <div className="flex justify-center mb-6 mt-4 w-16 h-16">
//           {item.icon}
//         </div>

//         <h4 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h4>
//         <p className="text-gray-600 text-base leading-relaxed flex-grow">{item.desc}</p>
//         
//         {/* Arrow Indicator between steps (Only for steps 1 and 2) */}
//         {index < stepss.length - 1 && (
//           <div className="absolute right-0 top-1/2 hidden md:block transform translate-x-1/2 -translate-y-1/2">
//             <Rocket className="w-8 h-8 text-orange-400 rotate-90 md:rotate-0" />
//           </div>
//         )}
//       </motion.div>
//     ))}
//   </div>

//   {/* Final CTA/Contact Message - Added explicitly */}
//   <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
//     <div className="p-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl shadow-2xl">
//       <h3 className="text-3xl font-extrabold mb-2 flex items-center justify-center gap-3">
//         <Phone className="w-8 h-8" /> Next Step: Personal Contact
//       </h3>
//       <p className="text-lg font-medium">
//         Once Step 2 is complete, our **Admission Team will contact you** shortly to confirm your enrollment and provide access to the course platform.
//       </p>
//     </div>
//   </div>
// </section>








// {/* ===== Features Section with Premium Star Animation ===== */}
// <section className="relative py-12 overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-800 ">
//   {/* Starry Background */}
//   <div className="absolute inset-0 z-0">
//     {[...Array(120)].map((_, i) => (
//       <div
//         key={i}
//         className="absolute rounded-full opacity-80"
//         style={{
//           width: `${Math.random() * 2 + 1}px`,
//           height: `${Math.random() * 2 + 1}px`,
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           backgroundColor: `hsl(45, 100%, ${Math.random() * 30 + 50}%)`, // soft yellow stars
//           animation: `drift ${Math.random() * 60 + 40}s linear infinite`,
//           animationDelay: `${Math.random() * 20}s`,
//         }}
//       />
//     ))}
//   </div>

//   {/* Top Border */}
//   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move z-10"></div>
//   {/* Bottom Border */}
//   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move z-10"></div>

//   {/* Feature Cards */}
//   <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white px-6 relative z-20">
//     {[
//       {
//         icon: "https://vedastructure.in/front/img/icon/d-1.png",
//         title: "Professional",
//         subtitle: "Certification",
//       },
//       {
//         icon: "https://vedastructure.in/front/img/icon/d-2.png",
//         title: "100% Live",
//         subtitle: "Online Classes",
//       },
//       {
//         icon: "https://vedastructure.in/front/img/icon/d-3.png",
//         title: "100% Placement",
//         subtitle: "Support",
//       },
//       {
//         icon: "https://vedastructure.in/front/img/icon/d-4.png",
//         title: "1 on 1",
//         subtitle: "Mentorship",
//       },
//     ].map((feature, i) => (
//       <motion.div
//         key={i}
//         className="flex flex-col items-center p-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: i * 0.15 }}
//       >
//         <img src={feature.icon} alt={feature.title} className="w-28 h-28 mb-4" />
//         <h3 className="text-2xl font-bold text-yellow-300">{feature.title}</h3>
//         <p className="text-lg mt-2 text-yellow-100">{feature.subtitle}</p>
//       </motion.div>
//     ))}
//   </div>

//   <style>{`
//     @keyframes drift {
//       0% { transform: translateY(0px); }
//       100% { transform: translateY(-2000px); }
//     }
//   `}</style>
// </section>










// <Testimonials/>


// {/* Certificate Section */}
// <section className="relative bg-gradient-to-r from-yellow-50 via-white to-yellow-50 py-16 px-6 overflow-hidden">
//   {/* Decorative Astrology Background */}
//   <div className="absolute inset-0 opacity-10 pointer-events-none">
//     <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat"></div>
//   </div>

//   <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
//     
//     {/* Left Content */}
//     <div>
//       <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-6">
//         🌟 Professional Astrology Training with Certification
//       </h2>
//       <p className="text-gray-700 mb-4">
//         Join our professionally designed astrology course and earn a recognized 
//         certificate that validates your skills and knowledge in astrological science.
//       </p>
//       <ul className="space-y-3 text-gray-700">
//         <li>✨ Learn the ancient art of astrology for career opportunities</li>
//         <li>✨ Covers natal charts, predictive techniques, & cosmic analysis</li>
//         <li>✨ Lifetime access, expert guidance & completion certificate</li>
//         <li>✨ Gain credibility as a professional astrologer</li>
//         <li>✨ Beautifully designed certificate as proof of expertise</li>
//         </ul>
//  <Link
//   to="/enrollnow"
//   className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all"
// >
//   Enroll Now & Get Certified
// </Link>

//     </div>

//     {/* Right Certificate Image */}
//     <div className="flex justify-center">
//       <div className="bg-white rounded-xl shadow-2xl p-4 transform hover:scale-105 transition-all">
//         <img
//           src="https://www.vedastructure.in/front/img/certifcate.jpg"
//           alt="Certificate"
//           className="rounded-lg"
//         />
//       </div>
//     </div>
//   </div>


// </section>



// <FAQPage/>





//     </div>
//   );
// };

// export default AstrologyCourses;




























