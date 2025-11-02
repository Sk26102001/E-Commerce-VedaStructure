
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Gift,
  Sun, // Used for the Sun/Foundation
  Target, // Used for Goal/Applied
  BarChart2, // Used for Advanced/Predictive
  MessageSquare, // New Icon for the Form
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration ---
const PRIMARY_COLOR = "bg-sky-700";
const ACCENT_COLOR = "text-amber-400";
const HOVER_COLOR = "hover:bg-gradient-to-r from-sky-800 to-indigo-600";
const BUTTON_COLOR =
  "bg-gradient-to-r from-amber-500 to-sky-600 hover:from-amber-600 hover:to-sky-700";

// --- Curriculum ---
const muhurtasCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundation of Timing & Panchang",
    icon: <Sun className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: The Five Limbs of Time (Panchang) - Tithi & Vara",
        details: [
          "Introduction to the concept of Muhurta and its importance in Vedic tradition.",
          "Detailed study of Tithi (Lunar Day) and identifying auspicious and inauspicious Tithis.",
          "Understanding Vara (Week Day) and its ruling planets and deities.",
          "Practical exercise: Calculating Tithi and Vara for any given date.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Nakshatra (Lunar Mansion) & Yoga",
        details: [
          "In-depth analysis of the 27 Nakshatras and their characteristics.",
          "Matching Nakshatras for compatibility (e.g., marriage, partnership).",
          "Understanding Yoga (Planetary Combinations) and their effects on Muhurta selection.",
          "Identifying Gandanta and other malefic Nakshatra/Yoga junctions.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Karana & The Malefic Timings",
        details: [
          "Study of Karana (Half Tithi) and its specific applications for actions.",
          "Mastering the Visha Ghati (Poisonous Time) and Rahu Kalam calculations.",
          "Understanding Yama Ganda and Dur Muhurta - times to strictly avoid.",
          "The role of Abhijit Muhurta - the universal auspicious time.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Revision and Monthly Practical Application",
        details: [
          "Integrated analysis of Panchang components for a holistic Muhurta view.",
          "Case studies on simple Muhurta selection.",
          "Timed assessment on Panchang calculations.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: Applied Muhurta - Key Life Events",
    icon: <Target className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Vivāha Muhurta (Marriage Timing)",
        details: [
          "Rules for selecting auspicious marriage Muhurtas.",
          "Identifying doshas (afflictions) in charts.",
          "Role of Moon and 8th house in Vivāha.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Gṛha Praveśa & Bhumi Pūjana",
        details: [
          "Choosing the perfect time for house inauguration.",
          "Auspicious months and Tithis for construction.",
          "Avoiding Vastu Doshas via correct timing.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Business & Career Muhurtas",
        details: [
          "Choosing Lagna for starting business ventures.",
          "Timing interviews, contracts, and launches.",
          "Financial investment and debt repayment Muhurtas.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Naming, Education, and Healing Muhurtas",
        details: [
          "Timing the Nāma-Karaṇa ceremony.",
          "Selecting Muhurtas for Vidyārambha (education).",
          "Choosing times for wearing gemstones.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔭 Month 3: Advanced Techniques & Predictive Timing",
    icon: <BarChart2 className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Hora & Chou Ghadi Analysis",
        details: [
          "Understanding planetary Horas for daily timing.",
          "Using Chou Ghadi for micro-muhurta analysis.",
          "Integrating micro-timings with Panchang.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Tāra Bala & Chandra Bala Deep Dive",
        details: [
          "Advanced calculation of Tāra Bala.",
          "Remedies for weak Chandra Bala.",
          "Using transits and Ashtakavarga in Muhurta.",
          "Remedies for weak Chandra Bala.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Case Studies & Exceptions",
        details: [
          "Analyzing complex client Muhurtas.",
          "Handling exceptions and compromises.",
          "Combining all knowledge into synthesis.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Certification & Ethics",
        details: [
          "Final client project Muhurta selection.",
          "Ethics in consultation and communication.",
          "Continuing learning and research.",
        ],
      },
    ],
  },
];

// --- Video Section ---
const muhurtasVideos = [
  {
    title: "The Power of Panchang: A 5-Step Guide",
    thumbnail: "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Panchang+Video+Demo",
    link: "#",
  },
  {
    title: "Vivāha Muhurta: Avoiding the Fatal Flaws",
    thumbnail: "https://placehold.co/400x200/5C6BC0/FFFFFF?text=Marriage+Timing+Video",
    link: "#",
  },
  {
    title: "Daily Timing: Using Hora and Rahu Kalam",
    thumbnail: "https://placehold.co/400x200/FFB300/1A237E?text=Daily+Muhurta+Tips",
    link: "#",
  },
];

// --- Bonus Section ---
const muhurtasBonus = [
  "High-Resolution Panchang & Tithi Chart",
  "Ready-Reckoner for Malefic Timings",
  "Lifetime Access to Muhurta Software",
];

// --- Pricing Plans ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Panchang Foundation",
    price: 1499,
    features: [
      "Months 1 & 2 Modules (Foundation & Key Events)",
      "Recorded Video Lectures",
      "Module-wise Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Muhurta Master",
    price: 2999,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Software Access",
      "4 Live Q&A Sessions",
      "Final Project Review",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Professional Consultant",
    price: 4999,
    features: [
      "All Muhurta Master Features",
      "4 x 1:1 Personalized Sessions",
      "Professional Ethics Module",
      "Dedicated Telegram Support",
    ],
    isPopular: false,
  },
];

// --- Accordion Component ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-sky-100">
      <motion.button
        className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left text-lg">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-amber-200 rounded-b-xl"
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

// --- Pricing Card Component ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-sky-800 text-white border-4 border-amber-300"
        : "bg-white text-gray-800 border-2 border-sky-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-amber-400 text-sky-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
    <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-amber-300" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <motion.button
      onClick={() => onEnroll(plan)}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
        plan.isPopular
          ? "bg-amber-300 text-sky-800 hover:bg-amber-400"
          : "bg-sky-100 text-sky-700 hover:bg-sky-200"
      }`}
    >
      Master with {plan.name}
    </motion.button>
  </motion.div>
);

// --- Testimonial Data ---
const testimonials = [
  {
    name: "Shikha V., Mumbai",
    text: "The deep dive into Nakshatras for marriage timing was invaluable. I now feel confident recommending precise dates to clients.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Rajesh K., Delhi",
    text: "As a practicing astrologer, this course filled crucial gaps in my Muhurta selection process, especially for business launches. Worth every penny!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Priya S., Pune",
    text: "The clear explanation of Rahu Kalam and Visha Ghati changed how I plan my daily activities. My productivity has visibly improved.",
    rating: "⭐⭐⭐⭐⭐",
  },
];


// --- COMPACT ENQUIRE FORM COMPONENT (SUBJECT REMOVED) ---
const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", // Subject field is now removed from state
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
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section id="enquire" className="py-12 px-6 bg-gradient-to-b from-blue-50 to-sky-100">
      <div className="max-w-xl mx-auto p-5 bg-white rounded-xl shadow-2xl border-t-4 border-sky-600">
        <h2 className="text-2xl font-serif text-sky-700 mb-4 text-center font-bold flex items-center justify-center">
          <MessageSquare className="w-6 h-6 mr-2 text-sky-600" />
          Course <span className={ACCENT_COLOR}>Enquiry Form</span>
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Have a specific question about the modules or live sessions? Send us a message!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 text-sm"
            />
          </div>
          {/* REMOVED SUBJECT FIELD HERE */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Question/Message</label>
            <textarea
              name="message"
              id="message"
              rows="3" 
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 text-sm"
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full mt-3 ${BUTTON_COLOR} text-white font-semibold py-2.5 px-4 rounded-lg shadow-lg transition-transform text-sm`}
          >
            Submit Enquiry
          </motion.button>
        </form>
      </div>
    </section>
  );
};
// --- END COMPACT ENQUIRE FORM COMPONENT ---


// --- Main Page Component ---
export default function MuhurtasCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    navigate(`/enrollnows?courseId=muhurtas&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-sky-50 to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100">
        <h1 className="text-5xl md:text-6xl font-serif text-sky-800 leading-snug">
          The Cosmic Clock: <br />
          <span className="text-sky-600">Science of Shub Muhurta</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Learn to harness the power of planetary positions for perfect timing.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            navigate(
              `/enrollnows?courseId=muhurtas&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Muhurta Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-sky-700 mb-10">
            🎥 Foundational Timing Concepts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {muhurtasVideos.map((video, i) => (
              <motion.a
                href={video.link}
                target="_blank"
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Video+Placeholder";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14 bg-sky-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-sky-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-sky-700 mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Muhurta Curriculum</span>
          </h2>
          {muhurtasCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              <div className="flex items-center mb-4 border-b-2 border-sky-300 pb-2">
                {month.icon}
                <h3 className="text-2xl font-bold text-gray-700 flex justify-between w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-sky-500 bg-sky-100 px-3 py-1 rounded-full">
                    {month.duration}
                  </span>
                </h3>
              </div>
              {month.modules.map((module) => (
                <CourseAccordionItem
                  key={module.id}
                  title={`Module ${module.id}: ${module.title}`}
                  details={module.details}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-sky-300 rounded-3xl bg-amber-50">
          <h2 className="text-4xl font-serif text-sky-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-sky-600 animate-bounce" /> 🎁 Bonuses Included
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {muhurtasBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-sky-100 flex items-center justify-center text-center"
              >
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-100 via-sky-50 to-amber-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-sky-700 mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Auspicious Path</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-sky-700 mb-10">
            🌟 Success Stories: Master of Muhurta
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-sky-50 rounded-xl shadow-lg border border-sky-100 flex flex-col items-center"
              >
                <p className="text-4xl mb-3 text-amber-500">“</p>
                <p className="text-gray-800 italic flex-grow">“{t.text}”</p>
                <p className="mt-4 text-sky-700 font-semibold">{t.rating} — {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire Form - Now Compact and Subject-less */}
      <EnquireForm />

    </div>
  );
}