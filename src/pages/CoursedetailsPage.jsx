
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Star,
  BookOpen,
  Clock,
  Gift,
  Mail, // Added for email icon
  Phone, // Added for phone icon
  MapPin, // Added for address icon
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// --- Configuration ---
const PRIMARY_COLOR = "bg-yellow-400";
const ACCENT_COLOR = "text-orange-600";
const HOVER_COLOR = "hover:bg-gradient-to-r from-yellow-400 to-orange-500";


// Detailed 3-Month Curriculum (Retained for completeness)
const fullCourseCurriculum = [
  {
    monthTitle: "🪔 Month 1: Foundations of Vedic Astrology",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to Jyotish",
        details: [
          "What is Vedic Astrology? Its spiritual and scientific roots.",
          "Branches of Jyotish (Hora, Samhita, Siddhanta).",
          "Karma theory and role of planets.",
          "Structure of a Kundali (birth chart).",
        ],
      },
      {
        id: 2,
        title: "Week 2: The 9 Grahas (Navagraha)",
        details: [
          "Surya to Ketu: Nature, symbolism, mythology.",
          "Functional benefic/malefic classification.",
          "Planetary aspects (Drishti) basics.",
          "Shlokas & mantras related to planets.",
        ],
      },
      {
        id: 3,
        title: "Week 3: The 12 Rashis (Zodiac Signs)",
        details: [
          "Character traits of each Rashi.",
          "Rashi elements (fire, water, air, earth).",
          "Gender, modality (moveable/fixed/dual).",
          "Connection with psychology and behavior.",
        ],
      },
      {
        id: 4,
        title: "Week 4: The 12 Bhavas (Houses)",
        details: [
          "Meaning and significance of each house.",
          "Karaka planets for each house.",
          "Lagna (Ascendant) and its importance.",
          "Case examples of Bhava influence.",
        ],
      },
    ],
  },
  {
    monthTitle: "🧭 Month 2: Deeper Chart Understanding",
    icon: <Clock className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Nakshatras and their Secrets",
        details: [
          "27 Nakshatras: Traits, lords, categories.",
          "Pada divisions and application.",
          "Birth Nakshatra influence (Janma Nakshatra).",
          "Mythological stories of Nakshatras.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Planetary Dignities & States",
        details: [
          "Exaltation, Debilitation, Own sign, Mooltrikona.",
          "Combust, retrograde, aspects explained.",
          "Natural vs functional benefics/malefics.",
          "Yogas (basic level): Gajakesari, Budhaditya, Raj Yoga.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Panchang Basics in Astrology",
        details: [
          "Tithi, Vara (weekday), Nakshatra, Yoga, Karana.",
          "How Panchang affects birth and muhurta.",
          "Auspiciousness (Shubh-Ashubh).",
          "Shlokas & mantras for planetary peace.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Divisional Charts (Introduction)",
        details: [
          "Navamsa (D9): Marriage and Dharma.",
          "Drekkana (D3), Chaturthamsa (D4), etc.",
          "Concept of Dasha-Varga.",
          "Strength of planets across charts.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔮 Month 3: Practical Chart Reading",
    icon: <Star className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Lagna Kundali Reading (Step-by-Step)",
        details: [
          "How to approach a chart.",
          "Lagna, Moon Lagna, Sun Lagna significance.",
          "Understanding planetary positions.",
          "Identifying strengths & weaknesses.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Mahadasha and Antardasha (Vimshottari Dasha)",
        details: [
          "What is a Dasha system?",
          "How time periods affect life.",
          "Starting point: Moon Nakshatra.",
          "Case studies on Dasha periods.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Transits (Gochar) Basics",
        details: [
          "Importance of planetary movement.",
          "Saturn (Shani), Jupiter (Guru) transits.",
          "Rahu-Ketu transits and their impact.",
          "Daily planetary transit observation practice.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Remedies, Ethics & Final Project",
        details: [
          "Types of Upay (Mantra, Gem, Puja, Daana).",
          "Do’s and Don’ts of a Jyotish practitioner.",
          "Small remedy suggestions for common afflictions.",
          "Final assessment: Reading a sample Kundali.",
        ],
      },
    ],
  },
];

const bonusItems = [
    "Planetary Mantra Audio Set",
    "Daily Panchang Guide eBook",
    "Lifetime WhatsApp Q&A Group Access",
];

const pricingPlans = [
  {
    id: 1,
    key: "starter", 
    name: "Basic Plan",
    price: 5999, 
    features: [
      "Month 1 Modules",
      "Recorded Lectures",
      "Basic Q&A Forum Access",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master", 
    name: "Master Plan",
    price: 8999, 
    features: [
      "All 3 Months Curriculum",
      "Lifetime Course Access",
      "Free Bonuses",
      "2 Live Chart Readings",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor", 
    name: "Expert Plan",
    price: 12999, 
    features: [
      "All Jyotish Master Features",
      "1:1 Mentorship Sessions (4)",
      "Advanced Remedial Techniques",
      "Priority Support",
    ],
    isPopular: false,
  },
];


// --- Accordion for Modules (Unchanged) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-orange-100">
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-200 rounded-b-xl"
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


// Refactored Curriculum Snapshot Accordion for smooth animation (Unchanged)
const CurriculumAccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-orange-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-orange-700 hover:text-orange-800"
      >
        {title}
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="curriculum-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-6 text-gray-700">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



// --- Pricing Card Component (Unchanged) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-orange-500 text-white border-4 border-yellow-300"
        : "bg-white text-gray-800 border-2 border-orange-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-orange-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ POPULAR
      </div>
    )}

    <h3
      className={`text-3xl font-bold mb-4 ${
        plan.isPopular ? "text-white" : "text-orange-700"
      }`}
    >
      {plan.name}
    </h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-300" : "text-orange-800"
      }`}
    >
      ₹{plan.price}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-yellow-300" : "text-orange-600"
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
          ? "bg-yellow-300 text-orange-800 hover:bg-yellow-400"
          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
      }`}
    >
      Start with {plan.name}
    </motion.button>
  </motion.div>
);


// --- FURTHER REDUCED ENQUIRE FORM SECTION ---
const EnquireFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const ACCENT_COLOR = "text-orange-600"; // Re-using local variable definition

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    // 1. Reduced vertical padding further from py-12 (previous step) to py-8
    <section id="contact" className="py-8 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // 2. Reduced internal padding from p-6 to p-4
        className="max-w-5xl mx-auto p-4 bg-white rounded-2xl shadow-2xl border-t-4 border-orange-500"
      >
        {/* 3. Reduced title size from 4xl to 3xl, and removed the descriptive paragraph */}
        <h2 className="text-3xl font-serif text-orange-700 mb-4 text-center flex items-center justify-center gap-2"> {/* Reduced mb and gap */}
          <Mail className="w-6 h-6 text-orange-600" /> {/* Reduced icon size */}
          Connect with Our <span className={ACCENT_COLOR}>Academic Team</span>
        </h2>
        {/* Removed descriptive paragraph to save vertical space */}

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-3 mb-4 text-green-800 bg-green-100 rounded-lg flex items-center justify-center text-sm font-medium"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Your enquiry has been successfully submitted!
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Reduced gap from 8 to 4 */}
        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Left Column: Send Us a Direct Query Form */}
          {/* 4. Reduced padding p-6 to p-4 */}
          <div className="bg-yellow-50 p-4 rounded-xl shadow-inner border border-orange-100"> 
            {/* 5. Reduced title size from 2xl to xl, reduced margin */}
            <h3 className="text-xl font-serif text-orange-700 mb-3">Send Us a Direct Query</h3> 
            {/* 6. Reduced space-y from 4 to 2 */}
            <form onSubmit={handleSubmit} className="space-y-2"> 
              
              {/* Input Group */}
              <div>
                {/* Reduced font size */}
                <label htmlFor="name" className="block text-lg font-serif text-gray-700 mb-0.5">
                  Your Full Name
                </label>
                {/* 7. Reduced input padding/font size */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-1.5 border border-orange-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition duration-150 text-sm"
                />
              </div>

              {/* Email Address Input */}
              <div>
                <label htmlFor="email" className="block text-lg font-serif text-gray-700 mb-0.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-3 py-1.5 border border-orange-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition duration-150 text-sm"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-lg font-serif text-gray-700 mb-0.5">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3" // Kept at 3 rows
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your question about the course..."
                  className="w-full px-3 py-1.5 border border-orange-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition duration-150 text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // Reduced padding and font size
                className={`w-full flex items-center justify-center py-1.5 text-base rounded-lg font-semibold text-white shadow-md transition-transform transform bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-red-500`}
              >
                Submit Inquiry
              </motion.button>
            </form>
          </div>

          {/* Right Column: Reach Out to Our Support */}
          {/* 4. Reduced padding p-6 to p-4 */}
          <div className="bg-yellow-50 p-4 rounded-xl shadow-inner border border-orange-100 flex flex-col justify-between">
            <div>
              {/* 5. Reduced title size from 2xl to xl, reduced margin */}
              <h3 className="text-xl font-serif text-orange-700 mb-3">Reach Out to Our Support</h3>
              {/* 8. Reduced space-y from 4 to 2, reduced font size */}
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-orange-600 flex-shrink-0" /> {/* Reduced icon size */}
                  <div>
                    <p className="text-lg font-serif">Email Support</p> {/* Reduced font size */}
                    <a href="mailto:support@vedicscience.edu" className="text-orange-600 hover:underline text-sm">
                      support@vedicscience.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-orange-600 flex-shrink-0" /> {/* Reduced icon size */}
                  <div>
                    <p className="text-lg font-serif">Phone & WhatsApp</p> {/* Reduced font size */}
                    <a href="tel:+919876543210" className="text-orange-600 hover:underline text-sm">
                      +91 98765 43210 (Mon-Fri, 9am-5pm IST)
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-orange-600 mt-1 flex-shrink-0" /> {/* Reduced icon size */}
                  <div>
                    <p className="text-lg font-serif">Vedic Research Headquarters</p> {/* Reduced font size */}
                    <p className="leading-snug">Ancient Wisdom Center, Block A, Varanasi, UP, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default function CourseDetailsPage() {
  const navigate = useNavigate();
  const lectureVideos = [
    {
      title: "Introduction to Vedic Astrology",
      thumbnail: "https://www.cosmicinsightsshop.com/cdn/shop/products/11_2cf1e575-6de4-411c-9f40-9dbe70f8542b_1024x1024.jpg?v=1604389052",
      link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
    },
    {
      title: "Understanding Houses & Planets",
      thumbnail: "https://static.wixstatic.com/media/2ee1b0_f2f85c50831b4875b0310ddd7042650f~mv2.jpg/v1/fit/w_448,h_412,lg_1,q_80,usm_0.66_1.00_0.01,enc_auto/2ee1b0_f2f85c50831b4875b0310ddd7042650f~mv2.jpg",
      link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
    },
    {
      title: "Remedies and Upayas",
      thumbnail: "https://storage.googleapis.com/astrolok/store/1/oldblog/2021/11/aatam-gandhi-12-nov.jpg",
      link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
    },
  ];

  const handleEnrollClick = (plan) => {
    const courseTitle = "Vedic Astrology Mastery Course";
    navigate(`/enrollnows?title=${encodeURIComponent(courseTitle)}&plan=${plan.key}#enrollment-section`);
  };
  
  const defaultPlanKey = pricingPlans.find(p => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-800 drop-shadow-md leading-snug">
          Unlock Your Destiny with <br />
          <span className="text-orange-600">Ancient Vedic Wisdom</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Learn Vedic Astrology through Scriptures, Practical Guidance & Spiritual Integration.
        </p>

        <motion.button
          onClick={() =>
            navigate(
              `/enrollnows?title=${encodeURIComponent(
                "Vedic Astrology Mastery Course"
              )}&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          👉 Enroll Now
        </motion.button>
      </section>

{/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Course Lecture Videos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {lectureVideos.map((video, i) => (
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
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14 bg-orange-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-orange-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    
      {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-orange-700 mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Curriculum</span>
          </h2>

          {fullCourseCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              {/* Month Header */}
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
                    {month.duration}
                  </span>
                </h3>
              </div>
              <div className="space-y-3">
                {month.modules.map((module) => (
                  <CourseAccordionItem
                    key={module.id}
                    title={module.title}
                    details={module.details}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Optional: Download Button */}
          <div className="text-center mt-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-yellow-500 to-orange-500 active:scale-95`}
            >
              Download Full Curriculum PDF
            </motion.button>
          </div>
        </motion.div>
      </section>




      {/* --- */}

        {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🧘{" "}
            <span className="font-bold">Bonus Section</span> – Limited Time!
          </h2>
          <p className="text-2xl font-bold text-orange-800 mb-6">
            🎁 Free Bonuses Worth ₹2,000:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {bonusItems.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Astrology Path</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>


{/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-orange-700 mb-10">
            🌟 Student Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Pooja, Mumbai", text: "This course changed how I understand karma and destiny." },
              { name: "Rajiv, Dubai", text: "Now I can read charts confidently and help others too." },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-yellow-50 rounded-xl shadow-md"
              >
                <p className="text-gray-800 italic">“{t.text}”</p>
                <p className="mt-3 text-orange-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The new, compact Enquire Form */}
      <EnquireFormSection />
 

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