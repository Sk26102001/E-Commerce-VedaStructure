

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Play,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Gift,
  Zap, // For Speed/Energy
  BarChart2, // For Growth/Exams
  Target, // For Goal/Mastery
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";


// --- Configuration ---
const PRIMARY_COLOR = "bg-indigo-600"; // Deep Indigo for Knowledge
const ACCENT_COLOR = "text-yellow-400"; // Golden accent for Brilliance
const HOVER_COLOR = "hover:bg-gradient-to-r from-indigo-700 to-blue-500";


// Detailed 3-Month Curriculum for Vedic Mathematics
const vedicMathematicsCurriculum = [
  {
    monthTitle: "🚀 Month 1: Foundations & First Principles",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to 16 Sutras & Urdhva Tiryagbhyām (Multiplication)",
        details: [
          "Historical overview and power of the 16 Sutras and 13 Upa-Sutras.",
          "Mastering the *Urdhva Tiryagbhyām* (Vertically and Crosswise) for 2x2 and 3x3 digit multiplication.",
          "Mental math drills: Speed practice for basic multiplication tables.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Nikhilam Sutra (Base Method) for Large Numbers",
        details: [
          "Applying *Nikhilam Navataścaramaṁ Daśataḥ* (All from 9 and the last from 10) for subtraction from powers of 10.",
          "Multiplication near bases (100, 1000, etc.) for super-fast calculation.",
          "Techniques for multiplying numbers above and below the base simultaneously.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Sub-Sutra Techniques & Divisibility",
        details: [
          "Mastering the *Sutra Ekādhikena Purvena* (One more than the previous one) for special multiplication cases.",
          "Applying *Vilōkanam* (By mere observation) to instantly check divisibility rules.",
          "Solving linear equations using the concept of Vēṣṭanam (encircling).",
        ],
      },
      {
        id: 4,
        title: "Week 4: Revision and Module 1 Assessment",
        details: [
          "Integrated speed drills covering all Sutras learned in Month 1.",
          "Troubleshooting common mistakes and refining mental calculation processes.",
          "Timed assessment for foundational speed and accuracy.",
        ],
      },
    ],
  },
  {
    monthTitle: "⚡ Month 2: Speed Techniques for Complex Arithmetic",
    icon: <Zap className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Parāvartya Yōjayēt (Division without long division)",
        details: [
          "The revolutionary *Parāvartya Yōjayēt* (Transpose and adjust) method for complex division.",
          "Applying the Sutra when the divisor is greater than the base (e.g., dividing by 113).",
          "Advanced remainder and quotient derivation techniques.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Squaring & Cubing using Dwandwa Yoga (Duplex)",
        details: [
          "Mastering the *Dwandwa Yoga* (Duplex) combination technique for finding squares instantly.",
          "The *Yāvadūnam Tāvadūnī Krutya Vargañca Yojayet* technique for squaring numbers near a base.",
          "Instantaneous calculation of cube roots by observation.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Fractions, Decimals, and Ratios",
        details: [
          "Converting complex fractions to decimals using *Patnī-Sūtra* (Wife’s Sutra).",
          "Speed techniques for solving ratios and proportions problems.",
          "The role of *Ānurūpyeṇa* (Proportionality) in complex algebra.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Geometric Applications & Area Calculation",
        details: [
          "Vedic methods for finding the area of simple and complex geometric shapes.",
          "Applying Sutras to Pythagorean triplets and other geometric relations.",
          "Introduction to solving coordinate geometry problems the Vedic way.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 3: Exam Mastery & Final Acceleration",
    icon: <BarChart2 className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Algebraic Simplification & Factorization",
        details: [
          "Using *Śūnyaṁ Sāmyasamuccayē* (When the sum is the same, that sum is zero) to solve quadratic and cubic equations instantly.",
          "Vedic factorization and solving simultaneous linear equations.",
          "General techniques for algebraic fractions and partial fractions.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Competition Exam Strategy & Application",
        details: [
          "Mock test drills focusing on CAT, GRE, GMAT, and other high-stakes math exams.",
          "Time management strategies and error reduction using the *Pūraṇāpuranābhyām* technique.",
          "Advanced data interpretation and graph-based problem-solving.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Final Review & Custom Doubt Clearing",
        details: [
          "Review of the most difficult Sutras and personalized practice sessions.",
          "One-on-one session with a mentor to clarify remaining doubts.",
          "Mastering the art of 'digit sum' check for quick verification.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Certification and Lifetime Access Strategy",
        details: [
          "Final intensive speed and accuracy test (Certificate requirement).",
          "Plan for integrating Vedic Maths into daily life and career.",
          "Accessing the Alumni network and continuous learning resources.",
        ],
      },
    ],
  },
];

// --- Lecture Videos ---
const vedicMathematicsVideos = [
  {
    title: "Mastering the Base-10 Multiplication",
    thumbnail: "https://placehold.co/400x200/2C5282/FFFFFF?text=Base10+Multiply+Video",
    link: "https://www.youtube.com/watch?v=vedic_multiply_placeholder",
  },
  {
    title: "Division in a Single Line: Paravartya",
    thumbnail: "https://placehold.co/400x200/38A169/FFFFFF?text=Division+Speed+Video",
    link: "https://www.youtube.com/watch?v=vedic_division_placeholder",
  },
  {
    title: "Instant Squares and Cubes using Duplex",
    thumbnail: "https://placehold.co/400x200/9F7AEA/FFFFFF?text=Squares+Cubes+Video",
    link: "https://www.youtube.com/watch?v=vedic_powers_placeholder",
  },
];


// --- Bonus Items ---
const vedicMathematicsBonus = [
  "Vedic Maths Sutra Chart (High-Resolution PDF)",
  "200+ Practice Question Workbook (Downloadable)",
  "Exclusive Speed Test Timer Software Access",
];

// --- Pricing Plans ---
const vedicMathematicsPricing = [
  {
    id: 1,
    key: "starter",
    name: "Sutra Scholar",
    price: 999, // Course-specific price
    features: [
      "Months 1 & 2 Modules (Foundations & Speed)",
      "Recorded Video Lectures",
      "Module-wise Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Speed Master",
    price: 1999, // Course-specific price
    features: [
      "All 3 Months Curriculum",
      "Lifetime Course Access",
      "All 3 Free Bonuses",
      "4 Live Doubt-Clearing Group Sessions",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Exam Accelerator",
    price:2999, // Course-specific price
    features: [
      "All Speed Master Features",
      "4 x 1:1 Personalized Coaching Sessions",
      "Final Exam Strategy Blueprint",
      "Dedicated Whatsapp Support",
    ],
    isPopular: false,
  },
];

// --- Accordion for Modules (Reused with new styling) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-indigo-100">
      <motion.button
        className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-yellow-200 rounded-b-xl"
          >
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {details.map((item, index) => (
                <li key={index} className="text-base font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Pricing Card Component (Reused with new styling) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-indigo-700 text-white border-4 border-yellow-300"
        : "bg-white text-gray-800 border-2 border-indigo-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-indigo-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        🔥 SPEED ACCELERATOR
      </div>
    )}

    <h3
      className={`text-3xl font-bold mb-4 ${
        plan.isPopular ? "text-white" : "text-indigo-700"
      }`}
    >
      {plan.name}
    </h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-300" : "text-indigo-800"
      }`}
    >
      {/* Use getPriceDisplay for formatting the price */}
      ₹{plan.price.toLocaleString()}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-yellow-300" : "text-indigo-600"
            }`}
          />
          <span
            className={`${
              plan.isPopular ? "text-white/90" : "text-gray-700"
            }`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <motion.button
      onClick={() => onEnroll(plan)}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md ${
        plan.isPopular
          ? "bg-yellow-300 text-indigo-800 hover:bg-yellow-400"
          : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
      }`}
    >
      Accelerate with {plan.name}
    </motion.button>
  </motion.div>
);


// --- NEW ENQUIRE FORM COMPONENT (Compact) ---
const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Enquiry Form Submitted:", formData);
    alert(`Thank you for your enquiry, ${formData.name}! We will be in touch shortly.`);
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    // Reduced py-20 to py-12 for smaller vertical section padding
    <section id="enquire" className="py-12 px-6 bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* max-w-xl is used to keep the form compact. Reduced p-8 to p-6 for smaller inner padding. */}
      <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-2xl border-t-4 border-indigo-600">
        <h2 className="text-3xl font-serif text-indigo-700 mb-4 text-center font-bold"> {/* Reduced mb-6 to mb-4 */}
          Have a Question? <span className={ACCENT_COLOR}>Enquire Now!</span>
        </h2>
        
        {/* Reduced space-y-4 to space-y-3 */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              // Reduced py-2 to py-1.5 for smaller field height
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
               // Reduced py-2 to py-1.5 for smaller field height
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
               // Reduced py-2 to py-1.5 for smaller field height
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Enquiry</label>
            <textarea
              name="message"
              id="message"
              rows="2" // Reduced rows from 3 to 2 for compactness
              required
              value={formData.message}
              onChange={handleChange}
              // Reduced py-2 to py-1.5 for smaller field height
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-lg transition-transform"
          >
            Submit Enquiry
          </motion.button>
        </form>
      </div>
    </section>
  );
};
// --- END NEW ENQUIRE FORM COMPONENT ---



export default function VedicMathematicsCourseDetails() {
  const navigate = useNavigate();
  const courseTitle = "Vedic Mathematics Speed Mastery";
  const COURSE_ID = "vedic-mathematics"; // Unique Course ID

  const handleEnrollClick = (plan) => {
    // Navigating to the EnrollNows component with the correct courseId and plan
    navigate(`/enrollnows?courseId=${COURSE_ID}&plan=${plan.key}#enrollment-section`);
  };
  
  // The default enroll button links to the popular plan
  const popularPlan = vedicMathematicsPricing.find(p => p.isPopular);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-blue-50 to-indigo-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-indigo-100 via-blue-50 to-indigo-100">
        <h1 className="text-5xl md:text-6xl font-serif text-indigo-800 drop-shadow-md leading-snug">
          Vedic Mathematics Course: <br />
          <span className="text-indigo-600">The Art of Calculation in a Single Line</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Unlock your brain's full potential and become a human calculator using ancient Sutras. Cut calculation time by 80%.
        </p>

        <motion.button
          onClick={() => handleEnrollClick(popularPlan)}
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-yellow-500 to-indigo-600 hover:from-yellow-600 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
        >
          👉 Enroll in the Speed Master Plan
        </motion.button>
      </section>

      {/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-indigo-700 mb-10">🎥 Core Calculation Demos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedicMathematicsVideos.map((video, i) => (
              <motion.a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  // Fallback for image loading issues
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x200/2C5282/FFFFFF?text=Math+Video+Placeholder";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14 bg-indigo-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-indigo-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    
      {/* What You Will Learn (Curriculum) */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-indigo-700 mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Vedic Math Curriculum</span>
          </h2>

          {vedicMathematicsCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              {/* Block Header */}
              <div className="flex items-center mb-4 border-b-2 border-indigo-300 pb-2">
                {month.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full">
                    {month.duration}
                  </span>
                </h3>
              </div>
              <div className="space-y-3">
                {month.modules.map((module) => (
                  <CourseAccordionItem
                    key={module.id}
                    title={`Module ${module.id}: ${module.title}`}
                    details={module.details}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Download Button */}
          <div className="text-center mt-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-indigo-600 to-yellow-500 active:scale-95`}
            >
              Download Full Vedic Sutra Handbook
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-indigo-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-indigo-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-indigo-600 animate-bounce" /> 🎁{" "}
            <span className="font-bold">Speed Master Bonuses</span> – Exclusive Tools Included!
          </h2>
          <p className="text-2xl font-bold text-indigo-800 mb-6">
            Get these valuable resources instantly upon enrollment:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {vedicMathematicsBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-indigo-100 flex items-center justify-center text-center"
              >
                <Target className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-indigo-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-indigo-700 mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Acceleration Plan</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {vedicMathematicsPricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-indigo-700 mb-10">
            🌟 Student Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Anand, Delhi", text: "I used to dread long division, but now I can solve 4-digit division problems in my head faster than I could type them into a calculator!" },
              { name: "Meena, Pune", text: "The techniques are pure magic. My confidence for competitive exams has skyrocketed after mastering the squaring and cubing methods." },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-indigo-50 rounded-xl shadow-md"
              >
                <p className="text-gray-800 italic">“{t.text}”</p>
                <p className="mt-3 text-indigo-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire Form - Replaces the old contact section and is now more compact */}
      <EnquireForm />

      {/* Custom Animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}