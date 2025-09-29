
import React, { useState } from "react";
import { CheckCircle2, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import FAQPage from "./FAQPage";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { FileText, Phone,  Rocket } from "lucide-react";

const translations = {
  en: {
    bannerTitle: "Unlock Your Destiny with",
    bannerSubtitle:
      "Discover the power of Vedic Astrology and transform your life with our Professional Astrology Course taught by certified gurus.",
    bannerHighlight:
      "🌟 Learn from experts & award-winning astrologers with 20+ years of experience.",
    enrollNow: "Enroll Now",
    knowMore: "Know More",
    contactUs: "Contact Us",
    aboutTitle: "About Our Astrology Course",
    aboutDesc:
      "Our astrology course blends ancient wisdom with modern insights. Learn from certified experts and gain practical skills to guide lives with confidence and clarity. This is not just a course — it’s a journey to discover cosmic truths.",
    feature1Title: "Certified Expert & Team",
    feature1Text:
      "Learn directly from award-winning astrologers with 20+ years of expertise.",
    feature2Title: "Fast & Reliable Guidance",
    feature2Text:
      "Practical teachings to deliver accurate insights with clarity and speed.",
    checklist: [
      "Learn complete Vedic Astrology fundamentals",
      "Understand planetary influences in daily life",
      "Practical case studies & personalized mentorship",
    ],
    exploreCourses: "Explore All Courses",
  },
  hi: {
    bannerTitle: "अपनी किस्मत को खोलें",
    bannerSubtitle:
      "वैदिक ज्योतिष की शक्ति को जानें और अपने जीवन को हमारे प्रोफेशनल ज्योतिष पाठ्यक्रम के साथ बदलें, जिसे प्रमाणित गुरुओं द्वारा सिखाया जाता है।",
    bannerHighlight:
      "🌟 विशेषज्ञों और पुरस्कार विजेता ज्योतिषियों से सीखें जिनके पास 20+ वर्षों का अनुभव है।",
    enrollNow: "अभी नामांकन करें",
    knowMore: "और जानें",
    contactUs: "संपर्क करें",
    aboutTitle: "हमारे ज्योतिष पाठ्यक्रम के बारे में",
    aboutDesc:
      "हमारा ज्योतिष पाठ्यक्रम प्राचीन ज्ञान और आधुनिक दृष्टिकोण को जोड़ता है। प्रमाणित विशेषज्ञों से सीखें और आत्मविश्वास के साथ जीवन को मार्गदर्शन करने के व्यावहारिक कौशल प्राप्त करें। यह केवल एक पाठ्यक्रम नहीं है — यह ब्रह्मांडीय सत्यों की खोज की यात्रा है।",
    feature1Title: "प्रमाणित विशेषज्ञ और टीम",
    feature1Text:
      "20+ वर्षों के अनुभव वाले पुरस्कार विजेता ज्योतिषियों से सीधे सीखें।",
    feature2Title: "तेज़ और विश्वसनीय मार्गदर्शन",
    feature2Text:
      "स्पष्टता और गति के साथ सटीक अंतर्दृष्टि प्रदान करने के लिए व्यावहारिक शिक्षण।",
    checklist: [
      "पूर्ण वैदिक ज्योतिष की बुनियादी बातें सीखें",
      "दैनिक जीवन में ग्रहों के प्रभाव को समझें",
      "व्यावहारिक केस स्टडीज़ और व्यक्तिगत परामर्श",
    ],
    exploreCourses: "सभी पाठ्यक्रम देखें",
  },
};

const AstrologyCourses = () => {

    const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="">

      {/* ===== Language Toggle ===== */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-l-full border ${
            lang === "en" ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang("hi")}
          className={`px-4 py-2 rounded-r-full border ${
            lang === "hi" ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
        >
          हिंदी
        </button>
      </div>

      {/* ===== Banner Section ===== */}
      <div className="relative bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 text-white overflow-hidden  ">
        {/* Custom Animations */}
        <style>
          {`
            @keyframes pulse-slow {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.95; transform: scale(1.03); }
            }
            .animate-pulse-slow {
              animation: pulse-slow 6s ease-in-out infinite;
            }
            .soft-mask {
              -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
              -webkit-mask-repeat: no-repeat;
              -webkit-mask-position: center;
              -webkit-mask-size: contain;
              mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
              mask-repeat: no-repeat;
              mask-position: center;
              mask-size: contain;
            }
          `}
        </style>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

        {/* Banner Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
             <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
               {t.bannerTitle}{" "}
              <span className="text-orange-500">Astrology</span>
            </h1>
            <p className="mt-3 text-base md:text-lg text-yellow-100">
                {t.bannerSubtitle}
            </p>
            <p className="mt-2 text-sm md:text-lg font-medium text-yellow-50">
              🌟 Learn from experts & award-winning astrologers with{" "}
              <b>20+ years of experience</b>.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start flex-wrap">
       
              <Link
  to="/enrollnow"
  className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-red-500 transition duration-300"
>
  Enroll Now
</Link>

              <button className="border-2 border-white px-5 py-2 rounded-full hover:bg-white hover:text-orange-600 transition duration-300">
                Know More
              </button>
              <Link
              to="/contact" 
               className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-yellow-100 transition duration-300">
                Contact Us
              </Link>

            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[9rem] h-[9rem] rounded-full bg-yellow-400 opacity-40 blur-3xl animate-pulse-slow"></div>
            </div>
            <div className="relative">
              <img
                src="./vastusastra-removebg-preview.png"
                alt="Astrology Course"
                className="w-52 md:w-[310px] drop-shadow-2xl animate-pulse-slow soft-mask rounded-2xl"
              />
            </div>
          </div>
        </div>
 
{/* Bottom Highlight with Seamless Animation */}
<div className="bg-orange-500 text-white py-2 font-semibold text-base md:text-lg overflow-hidden relative">
  <motion.div
    className="flex whitespace-nowrap"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 13, // slower & smoother (adjust as you like)
      ease: "linear",
    }}
  >
    {/* 1st set of messages */}
    <span className="mx-8">
      🌟 100% Authentic Vedic Astrology | Learn from Certified Gurus 🌟
    </span>
    <span className="mx-8">
      🌟 १००% प्रामाणिक वैदिक ज्योतिष | प्रमाणित गुरुओं से सीखें 🌟
    </span>
    <span className="mx-8">
      🌟 Transform Your Life with Astrology 🌟
    </span>
    <span className="mx-8">
      🌟 ज्योतिष से अपने जीवन को बदलें 🌟
    </span>

    {/* Duplicate set for seamless looping */}
    <span className="mx-8">
      🌟 100% Authentic Vedic Astrology | Learn from Certified Gurus 🌟
    </span>
    <span className="mx-8">
      🌟 १००% प्रामाणिक वैदिक ज्योतिष | प्रमाणित गुरुओं से सीखें 🌟
    </span>
    <span className="mx-8">
      🌟 Transform Your Life with Astrology 🌟
    </span>
    <span className="mx-8">
      🌟 ज्योतिष से अपने जीवन को बदलें 🌟
    </span>
  </motion.div>
</div>



      </div> 

      {/* ===== About Section ===== */}
      <section className="relative bg-white  mt-20 p-8 md:p-12     ml-28 mt-5 mr-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with Page Flip Effect */}
          <motion.div
            className="relative group perspective"
            initial={{ rotateY: -90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            whileHover={{ rotateY: 10 }}
          >
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-yellow-300 to-orange-400 blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <motion.img
              src=".\about.webp"
              alt="Astrology Book"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative z-10">
                About Our <span className="text-orange-600">Astrology Course</span>
              </h2>
              {/* Decorative Wave Border */}
              <img
                src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
                alt="decorative border"
                className="absolute left-8 bottom-[-22px] w-[220px] md:w-[420px] opacity-80"
              />
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed mt-6">
              Our astrology course blends ancient wisdom with modern insights.
              Learn from <b>certified experts</b> and gain practical skills to
              guide lives with confidence and clarity. This is not just a course — 
              it’s a journey to discover cosmic truths.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <Award className="text-orange-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Certified Expert & Team
                  </h4>
                  <p className="text-gray-600 ">
                    Learn directly from award-winning astrologers with 20+ years
                    of expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-orange-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Fast & Reliable Guidance
                  </h4>
                  <p className="text-gray-600 ">
                    Practical teachings to deliver accurate insights with clarity
                    and speed.
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              {[
                "Learn complete Vedic Astrology fundamentals",
                "Understand planetary influences in daily life",
                "Practical case studies & personalized mentorship",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="text-yellow-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
              <button className=" font-semibold border-2 border-white px-5 py-2 rounded-full bg-orange-500 text-white transition duration-300 mt-3">
                Explore All Courses
              </button>
          </motion.div>

           
        </div>
      </section>

      {/* ===== Types of Courses Section ===== */}
<section className="relative bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-50 py-16 px-6 md:px-20">
  {/* Heading */}
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-center text-[#7b1b1b] mb-4"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Types of Courses
  </motion.h2>

  {/* Decorative Border */}
  <div className="flex justify-center mb-10">
    <img
      src="https://astroarunpandit.org/wp-content/uploads/2023/11/400x0_cda34c0de8482409b1983a7314e072fe.png"
      alt="decorative border"
      className="w-48 md:w-64 lg:w-72"
    />
  </div>

  {/* Advanced Courses */}
  <h3 className="text-2xl font-bold text-orange-600 text-center mb-8">
    Advanced Courses
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    {[
      {
        title: "Advance Numerology Mentorship Program",
        image: "/images/advanced-numerology.jpg",
        author: "Astro Arun Panditji",
      },
      {
        title: "Advanced Astrology Mentorship Program",
        image: "/images/advanced-astrology.jpg",
        author: "Astro Arun Panditji",
      },
      {
        title: "Advanced Vastu Course",
        image: "/images/advanced-vastu.jpg",
        author: "Astro Arun Panditji",
      },
    ].map((course, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-[#7b1b1b] mb-2">
            {course.title}
          </h4>
          <p className="text-gray-600 mb-3">by {course.author}</p>
          <Link
            to="/enrollnow"
            className="bg-[#7b1b1b] text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            Know More
          </Link>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Basic Courses */}
  <h3 className="text-2xl font-bold text-orange-600 text-center mb-8">
    Basic Courses
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Basic Numerology Course",
        image: "/images/basic-numerology.jpg",
        author: "Astro Arun Panditji",
      },
      {
        title: "The Ultimate Astrology Course",
        image: "/images/basic-astrology.jpg",
        author: "Astro Arun Panditji",
      },
      {
        title: "Rudraksha Crash Course",
        image: "/images/rudraksha-crash.jpg",
        author: "Astro Arun Panditji",
      },
    ].map((course, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h4 className="text-lg font-semibold text-[#7b1b1b] mb-2">
            {course.title}
          </h4>
          <p className="text-gray-600 mb-3">by {course.author}</p>
          <Link
            to="/enrollnow"
            className="bg-[#7b1b1b] text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            {course.title.includes("Rudraksha") ? "Enroll Now" : "Know More"}
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>



{/* ===== Who Should Join Section ===== */}
<section className="relative w-full bg-orange-500 py-15 mt-20 text-center text-white overflow-hidden">
  {/* Top & Bottom Shimmer Borders */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move"></div>
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move"></div>

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
  <span className="text-2xl md:text-3xl text-yellow-300">✨</span>
  <p className="mx-2">
    Whether you are a{" "}
    <span className="font-semibold text-yellow-300">complete beginner</span> or
    already a <span className="font-semibold text-yellow-300">spiritual guide</span>, 
    this course is designed to{" "}
    <span className="italic text-yellow-200">elevate your journey with astrology</span>.
  </p>
  <span className="text-2xl md:text-3xl text-yellow-300">✨</span>
</motion.div>


  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
    {[
      {
        title: "Beginners Curious About Astrology",
        text: "If you’ve always been fascinated by horoscopes, zodiac signs, or planetary influences and want to learn from scratch, this course is perfect for you.",
      },
      {
        title: "Aspiring Professional Astrologers",
        text: "Individuals who want to build a career in astrology, offer consultations, or start their own practice will gain a strong foundation and certification.",
      },
      {
        title: "Spiritual Seekers & Healers",
        text: "Those involved in healing, energy work, tarot, or other spiritual practices can add astrology to their skill set to offer deeper insights.",
      },
      {
        title: "Life Coaches & Counselors",
        text: "Enhance your guidance methods with astrological tools to better understand client personalities, life paths, and challenges.",
      },
      {
        title: "Students of Vedic or Western Philosophy",
        text: "Those studying Indian or Western philosophy, mythology, or metaphysics will find this course a meaningful addition to their knowledge.",
      },
      {
        title: "Anyone Looking for Personal Growth",
        text: "Astrology can be a powerful tool for self-awareness, personal development, and understanding your life’s direction.",
      },
      {
        title: "Parents and Educators",
        text: "Learn how planetary influences affect behavior, learning styles, and emotional patterns to better guide children or students.",
      },
      {
        title: "Yoga Practitioners & Wellness Coaches",
        text: "Combine astrology with holistic health practices to support physical, emotional, and spiritual well-being.",
      },
    ].map((card, i) => (
      <motion.div
        key={i}
        className="relative p-6 rounded-xl shadow-lg overflow-hidden bg-yellow-300 text-[#7b1b1b] transition-transform duration-200 ease-out"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <h4 className="font-semibold mb-3 text-lg md:text-xl leading-snug flex items-center gap-6">
          <span className="text-xl">➜</span>
          {card.title}
        </h4>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          {card.text}
        </p>

        {/* Shimmer Borders */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer"></div>
      </motion.div>
    ))}
  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes move {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: 200px 0;
      }
    }
    .animate-move {
      background-size: 400% 100%;
      animation: move 6s linear infinite;
    }

    @keyframes shimmer {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: 200px 0;
      }
    }
    .animate-shimmer {
      background-size: 200% 100%;
      animation: shimmer 3s linear infinite;
    }
  `}</style>
</section>


{/* ===== Admission Process Section ===== */}
<section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-20 text-center overflow-hidden">
  {/* Heading */}
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-[#7b1b1b] mb-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Admission Process
  </motion.h2>

  {/* Decorative Border */}
  <div className="flex justify-center mb-12">
    <img
      src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
      alt="decorative border"
      className="w-48 md:w-64 lg:w-72"
    />
  </div>

  {/* Process Infographic */}
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0 px-6">
    {[
      {
        step: "Step 1",
        title: "Fill Application Form",
        text: "Submit your details online through our easy registration form.",
        icon: <FileText size={36} />,
      },
      {
        step: "Step 2",
        title: "Counseling Session",
        text: "Our team will connect with you to guide and answer queries.",
        icon: <Phone size={36} />,
      },
      {
        step: "Step 3",
        title: "Confirm Admission",
        text: "Secure your seat by completing admission formalities.",
        icon: <CheckCircle2 size={36} />,
      },
      {
        step: "Step 4",
        title: "Start Your Journey",
        text: "Begin learning with our experts and unlock your destiny.",
        icon: <Rocket size={36} />,
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="relative flex flex-col items-center text-center w-56"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.8 }}
      >
        {/* Step Circle with Pulse Glow */}
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6, // stagger glow
          }}
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center shadow-2xl relative">
            {/* Glow Ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-40 blur-2xl animate-pulse"></span>

            {/* Inner Circle with Icon */}
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg relative z-10">
              <span className="text-orange-500">{item.icon}</span>
            </div>
          </div>
        </motion.div>

        {/* Step Info */}
        <h4 className="text-lg md:text-xl font-bold text-orange-600 mt-4">
          {item.step}
        </h4>
        <h5 className="text-md font-semibold text-gray-800 mt-1">
          {item.title}
        </h5>
        <p className="text-gray-600 text-sm mt-2">{item.text}</p>

        {/* Sequential Connector Glow */}
        {i < 3 && (
          <motion.svg
            className="hidden md:block absolute top-20 right-[-140px] w-[280px] h-[120px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: (i + 1) * 0.8 }} // step by step
          >
            <motion.path
              d={
                i % 2 === 0
                  ? "M0,60 C140,-40 140,160 280,60"
                  : "M0,60 C140,160 140,-40 280,60"
              }
              stroke="url(#gradAnimated)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="12 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: (i + 1) * 0.8 }}
            />
            <defs>
              <linearGradient
                id="gradAnimated"
                x1="0"
                y1="0"
                x2="280"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="1" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </motion.svg>
        )}
      </motion.div>
    ))}
  </div>
</section>

{/* ===== Features Section ===== */}
<section className="relative bg-yellow-400 py-12 overflow-hidden">
  {/* Top Border */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move"></div>
  {/* Bottom Border */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-move"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white px-6 relative z-10">
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
        className="flex flex-col items-center bg-orange-500 rounded-2xl p-6 shadow-lg"
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
  className="mt-8 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all"
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

