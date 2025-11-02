



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Gift,
  Sun,
  Target,
  BarChart2,
  Hash, // Icon for Numerology/Numbers
  Heart, // Icon for Compatibility
  Briefcase, // Icon for Career
  MessageSquare, // Icon for Testimonials (NEW)
  Mail, // Icon for Contact (NEW)
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration ---
// Color Code: Light Yellow (Accents/Background) and Orange (Primary Action/Highlight)
const PRIMARY_COLOR = "bg-orange-500"; // Deep Orange/Brown for dark contrast sections
const ACCENT_COLOR = "text-yellow-400"; // Light Yellow for highlights
const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-900 to-amber-700";
const BUTTON_COLOR =
  "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-orange-900"; // Orange/Yellow Gradient Button

// --- Testimonial Data (NEW) ---
const testimonials = [
  {
    quote: "I've been calculating numbers for years, but this course showed me how to *read* the subtle energy behind them. The forecasting section alone was worth the investment!",
    name: "Samira K.",
    title: "Spiritual Life Coach",
  },
  {
    quote: "The structure is phenomenal. From core numbers to business numerology, everything is explained with clarity. I feel ready to start my own consulting practice.",
    name: "Dev M.",
    title: "Certified Numerologist",
  },
  {
    quote: "It totally transformed how I view my life path and personal year cycles. No more guessing, only guided action. Thank you for this master-level training!",
    name: "Lisa H.",
    title: "E-commerce Entrepreneur",
  },
];

// --- Curriculum (Numerology Course) ---
const numerologyCurriculum = [
  {
    monthTitle: "☀️ Month 1: Core Numbers & Calculations",
    icon: <Sun className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Foundations of Numerology & Life Path Number",
        details: [
          "Introduction to Pythagorean and Chaldean systems and their differences.",
          "Mastering the reduction technique (f-reduction) to single digits.",
          "Detailed calculation and interpretation of the **Life Path Number** (Birth Date).",
          "Understanding the core meanings of the numbers 1-9 in the Life Path.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Expression & Soul Urge Numbers (Name Analysis)",
        details: [
          "Assigning numerical values to letters (Pythagorean Chart).",
          "Calculating the **Expression/Destiny Number** (Full Name).",
          "Calculating the **Soul Urge/Heart's Desire Number** (Vowels in Name).",
          "Interpretation of vowels and consonants: inner desires versus outward abilities.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Personality, Birthday, and Master Numbers",
        details: [
          "Calculating and interpreting the **Personality Number** (Consonants in Name).",
          "Understanding the **Birthday Number** and its unique influence.",
          "In-depth study of the **Master Numbers** (11, 22, 33) and Karmic Debts.",
          "Integrating the five core numbers (Core Blueprint).",
        ],
      },
      {
        id: 4,
        title: "Week 4: Review and Numerical Synthesis",
        details: [
          "Case study: Creating a complete Core Blueprint for a sample chart.",
          "Understanding the balance and conflict between core numbers.",
          "Timed assessment on numerical calculations and basic interpretations.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: Applied Numerology – Forecasting & Relationship",
    icon: <Target className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Personal Year & Monthly Cycles",
        details: [
          "Calculating the **Personal Year Number** (9-Year Cycle) for predictive timing.",
          "Interpreting the energy of each Personal Year (1 through 9).",
          "Calculating and using **Personal Month** and **Personal Day** numbers for planning.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Compatibility and Relationship Analysis",
        details: [
          "Comparing two Life Path Numbers for immediate compatibility assessment.",
          "Deep dive into relationship dynamics using Expression and Soul Urge comparisons.",
          "Identifying **Relationship Challenge Numbers** and how to harmonize them.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Business and Career Numerology",
        details: [
          "Choosing a **Business Name** and calculating its Expression Number for success.",
          "Using the Life Path to determine ideal **Career Paths** and roles.",
          "Optimizing phone numbers, addresses, and important dates.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Pinnacle and Challenge Numbers",
        details: [
          "Calculating the four **Pinnacle Cycles** and their lessons.",
          "Identifying the four **Challenge Numbers** and how they affect growth.",
          "The significance of the **Maturity Number** in the second half of life.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔭 Month 3: Advanced Techniques & Professional Practice",
    icon: <BarChart2 className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Name Changes and Vibrational Shifts",
        details: [
          "Techniques for analyzing the impact of name changes (e.g., marriage, professional).",
          "The process of selecting an optimized name (Elective Numerology).",
          "Understanding the effects of missing numbers and overrepresented numbers.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Advanced Forecasting and Transit Cycles",
        details: [
          "In-depth study of the **Essence** and **Transit Cycles** (letters in the name).",
          "Using transit cycles for highly specific short-term predictions.",
          "Combining the Personal Year with Pinnacle cycles for major life transitions.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Case Studies and Client Consultation",
        details: [
          "Analyzing complex charts with multiple master numbers or karmic debts.",
          "Structuring a professional client reading: from analysis to actionable advice.",
          "Developing personalized remedies and affirmation based on number weaknesses.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Certification, Ethics, and Marketing",
        details: [
          "Final numerology chart analysis and presentation for certification.",
          "Professional ethics, boundaries, and clear client communication.",
          "Strategies for starting a numerology consulting practice and marketing.",
        ],
      },
    ],
  },
];

// --- Video Section ---
const numerologyVideos = [
  {
    title: "The Life Path 3: Creativity and Communication",
    thumbnail: "https://placehold.co/400x200/F97316/FFFBEB?text=Life+Path+Video+Demo",
    link: "#",
  },
  {
    title: "How to Calculate Your Personal Year Cycle",
    thumbnail: "https://placehold.co/400x200/F59E0B/451A03?text=Forecasting+Video",
    link: "#",
  },
  {
    title: "Master Number 11: The Intuitive Messenger",
    thumbnail: "https://placehold.co/400x200/FFBF00/78350F?text=Master+Number+11+Clip",
    link: "#",
  },
];

// --- Bonus Section ---
const numerologyBonus = [
  "High-Resolution Pythagorean & Chaldean Letter Charts",
  "Quick Reference Guide for Personal Year Meanings",
  "Client Consultation Script and Intake Forms",
];

// --- Pricing Plans ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Numerology Novice",
    price: 1999,
    features: [
      "Months 1 & 2 Modules (Core Numbers & Applied Techniques)",
      "Recorded Video Lectures",
      "Module-wise Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Numerology Expert",
    price: 3199,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Professional Charting Software Access",
      "4 Live Q&A Sessions",
      "Final Project Review & Certification",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Certified Consultant",
    price: 5299,
    features: [
      "All Numerology Expert Features",
      "4 x 1:1 Personalized Chart Mentoring",
      "Business Setup & Ethics Module",
      "Dedicated Client Case Support",
    ],
    isPopular: false,
  },
];

// --- Accordion Component ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
      <motion.button
        className={`w-full flex justify-between items-center p-4 text-orange-900 font-semibold rounded-xl transition-all duration-300 bg-yellow-300 hover:bg-yellow-400`}
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-300 rounded-b-xl"
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
        ? `${PRIMARY_COLOR} text-white border-4 border-yellow-300` // Orange-800 for most popular background
        : "bg-white text-gray-800 border-2 border-yellow-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-orange-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
    <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-yellow-300" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <motion.button
      onClick={() => onEnroll(plan)}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
        plan.isPopular
          ? "bg-yellow-300 text-orange-800 hover:bg-yellow-400"
          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
      }`}
    >
      Enroll in the {plan.name} Plan
    </motion.button>
  </motion.div>
);

// --- Testimonial Card Component (NEW) ---
const TestimonialCard = ({ quote, name, title, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: delay }}
        className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400 flex flex-col h-full hover:shadow-2xl transition duration-300"
    >
        <p className="text-lg italic text-gray-700 mb-6 flex-grow">
            <span className="text-3xl font-serif text-orange-600 mr-1 leading-none">“</span>
            {quote}
        </p>
        <div className="mt-auto pt-4 border-t border-yellow-100">
            <p className="font-bold text-orange-700 text-lg">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
        </div>
    </motion.div>
);

// --- Contact Form Component (NEW) ---
const ContactForm = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate form submission
        setTimeout(() => {
            setStatus("success");
            e.target.reset();
        }, 1500);
    };

    return (
        <motion.form 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit} 
            className="p-8 bg-white rounded-xl shadow-2xl border-t-8 border-orange-500 max-w-lg mx-auto"
        >
            <h3 className="text-3xl font-serif text-orange-700 mb-6 text-center">Inquire Now</h3>
            
            <div className="mb-4">
                <input
                    type="text"
                    required
                    className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                    placeholder="Your Full Name"
                />
            </div>
            
            <div className="mb-4">
                <input
                    type="email"
                    required
                    className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                    placeholder="Email Address"
                />
            </div>
            
            <div className="mb-6">
                <textarea
                    rows="3"
                    required
                    className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150"
                    placeholder="Your Question about the course..."
                ></textarea>
            </div>
            
            <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                disabled={status === "submitting"}
                className={`w-full py-3 rounded-full font-semibold text-lg shadow-lg transition duration-300 
                    ${BUTTON_COLOR} text-orange-900 ${status === "submitting" ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </motion.button>

            {status === "success" && (
                <p className="mt-4 text-center text-green-600 font-medium">✅ Message sent! We'll reply soon.</p>
            )}
        </motion.form>
    );
};


// --- Main Page Component ---
export default function NumerologyCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // Update navigate URL to reflect Numerology Course
    navigate(`/enrollnows?courseId=numerology&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
          The Secret Code of Life: <br />
          <span className="text-orange-600">Mastering Advanced Numerology</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Learn to calculate and interpret the numbers that define personality, destiny, and timing.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            navigate(
              `/enrollnows?courseId=numerology&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          className={`mt-8 ${BUTTON_COLOR} text-orange-900 px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Numerology Expert Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-orange-700 mb-10">
            🎥 Key Numerological Concepts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {numerologyVideos.map((video, i) => (
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
                      "https://placehold.co/400x200/F97316/FFFBEB?text=Video+Placeholder";
                  }}
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

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-orange-700 mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Certified Numerology Curriculum</span>
          </h2>
          {numerologyCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-2xl font-bold text-gray-700 flex justify-between w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-orange-600 bg-yellow-200 px-3 py-1 rounded-full">
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

      {/* --- Testimonials Section (NEW) --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-orange-700 mb-12 flex justify-center items-center gap-3">
                <MessageSquare className="w-8 h-8 text-orange-600" /> Success Stories from Our Students
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <TestimonialCard 
                        key={index}
                        quote={t.quote}
                        name={t.name}
                        title={t.title}
                        delay={index * 0.15}
                    />
                ))}
            </div>
        </div>
      </section>
      {/* --- */}

      {/* Bonuses */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Professional Numerology Toolkit
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {numerologyBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-yellow-100 flex items-center justify-center text-center"
              >
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
        </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Vibrational Pathway</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Us Section (NEW) --- */}
      <section className={`py-20 px-6 bg-yellow-50`}>
        <div className="max-w-6xl mx-auto text-center">
            <h2 className={`text-4xl font-serif text-orange-700 mb-10 flex justify-center items-center gap-3`}>
                <Mail className="w-8 h-8 text-orange-600" /> Connect with Our Advisors
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                Have a question about the curriculum, certification, or which plan is right for you? Send us a message!
            </p>
            <ContactForm />
        </div>
      </section>
      {/* --- */}
    </div>
  );
}