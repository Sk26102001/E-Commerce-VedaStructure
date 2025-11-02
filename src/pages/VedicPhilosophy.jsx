


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
  FlaskConical, // Icon for Logic/Nyaya
  Brain, // Icon for Consciousness/Vedanta
  Sigma, // Icon for Synthesis/Mimamsa
  MessageSquare, // Icon for Testimonials (NEW)
  Mail, // Icon for Contact (NEW)
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration ---
// Color Code: Light Yellow (Accents/Background) and Orange (Primary Action/Highlight)
const PRIMARY_COLOR = "bg-orange-500"; // Deep Orange/Brown for dark contrast sections
const ACCENT_COLOR = "text-yellow-400"; // Light Yellow for highlights
const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-500 to-amber-500";
const BUTTON_COLOR =
  "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-orange-900"; // Orange/Yellow Gradient Button

// --- Testimonial Data (NEW) ---
const testimonials = [
  {
    quote: "The deep dive into Nyāya logic fundamentally changed how I structure arguments. It's not just philosophy, it's practical mental training.",
    name: "Dr. Anjali Sharma",
    title: "Philosophy Researcher",
  },
  {
    quote: "As a Yoga teacher, the Sāṃkhya and Yoga modules brought a new level of depth to my personal practice and teaching. Truly enlightening.",
    name: "Vikram Reddy",
    title: "Certified Yoga Instructor",
  },
  {
    quote: "I finally grasped the subtle differences between Advaita, Viśiṣṭādvaita, and Dvaita. The systematic approach and scholarly resources are unmatched.",
    name: "Priya Varma",
    title: "Spiritual Seeker",
  },
];


// --- Curriculum (Vedic Philosophy Course: The Six Schools) ---
const vedicPhilosophyCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundation – Vedas and the Cosmic View",
    icon: <Sun className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to Vedic Texts & Puruṣārthas",
        details: [
          "Defining Darśana (viewpoint) and the authority of the Vedas (Āstika schools).",
          "The Four Goals of Human Life: Dharma (Duty), Artha (Wealth), Kāma (Desire), Mokṣa (Liberation).",
          "Overview of the Upaniṣads as the philosophical foundation (Vedānta).",
        ],
      },
      {
        id: 2,
        title: "Week 2: Sāṃkhya Darśana – The Science of Discrimination",
        details: [
          "Analyzing the Tattvas (categories) and the dualism of Puruṣa (Consciousness) and Prakṛti (Matter).",
          "Detailed study of the three Guṇas (Sattva, Rajas, Tamas) and their manifestation in the universe.",
          "The process of cosmic evolution (Sarga) from the Sāṃkhya perspective.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Yoga Darśana – The Practice of Control",
        details: [
          "In-depth study of Patañjali's Yoga Sūtras and the meaning of Yogah Citta Vr̥tti Nirodhaḥ.",
          "The eight limbs of Yoga (Aṣṭāṅga Yoga) as a pathway to Samādhi (Enlightenment).",
          "Prāṇāyāma and Pratyāhāra: The philosophical and practical control of breath and senses.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Synthesis: Sāṃkhya-Yoga and the Path to Liberation",
        details: [
          "Comparison of the cosmological and psychological models of Sāṃkhya and Yoga.",
          "Understanding the bondage (Bandha) caused by the non-discrimination of Puruṣa and Prakṛti.",
          "Practical exercise: Applying the Yamas and Niyamas in modern ethical dilemmas.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔬 Month 2: Logical and Natural Philosophy (Nyāya & Vaiśeṣika)",
    icon: <FlaskConical className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Nyāya Darśana – The School of Logic",
        details: [
          "The four Pramāṇas (means of valid knowledge): Perception, Inference, Comparison, and Testimony.",
          "The five-limbed structure of Indian syllogism (Nyāya Sūtra) for dialectic argument.",
          "Identifying different types of fallacies (Hetvābhāsa) in reasoning.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Vaiśeṣika Darśana – The School of Particulars",
        details: [
          "The six Padārthas (categories of existence): Substance, Quality, Action, Generality, Particularity, and Inherence.",
          "The atomic theory (Paramāṇuvāda) of Vaiśeṣika and its comparison with modern science.",
          "Understanding the nature of time (Kāla), space (Diś), and mind (Manas) as substances.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Mīmāṃsā Darśana – The Philosophy of Ritual",
        details: [
          "Pūrva Mīmāṃsā: The focus on Dharma through injunctions (Vidhi) and prohibitions (Niṣedha) of the Vedas.",
          "The eternal nature of sound (Śabda-nityatva) and the self-validity of Vedic knowledge (Svataḥ Prāmāṇya).",
          "The doctrine of Apūrva (unseen potency) generated by ritual action (Karma).",
        ],
      },
      {
        id: 8,
        title: "Week 8: Inter-School Debates and Epistemology",
        details: [
          "Case studies on how different schools justify the means of knowledge (Pramāṇas).",
          "Analysis of the arguments of the Nāstika (non-Vedic) schools: Cārvāka, Jainism, Buddhism.",
          "Monthly project: Constructing a logical argument using the Nyāya method.",
        ],
      },
    ],
  },
  {
    monthTitle: "🧠 Month 3: Vedānta – The Ultimate Truth of Consciousness",
    icon: <Brain className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Advaita Vedānta – Non-dualism",
        details: [
          "Śaṅkara's philosophy: The identity of Ātman (Self) and Brahman (Ultimate Reality).",
          "The doctrine of Māyā (Illusion) and the concept of three levels of reality (Satya-traya).",
          "Analysis of the Mahāvākyas (Great Sayings): Tat Tvam Asi, Ahaṁ Brahmāsmi.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Viśiṣṭādvaita & Dvaita – Qualified and Pure Dualism",
        details: [
          "Rāmānuja's Viśiṣṭādvaita: Brahman as qualified by jīvas (souls) and jagat (world).",
          "Madhvācārya's Dvaita: The complete difference between God, soul, and matter.",
          "The role of Bhakti (Devotion) and Karma in achieving Mokṣa across the Vedānta schools.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Applied Philosophy – Ethics and Modernity",
        details: [
          "Integrating the concept of Karma into contemporary ethical frameworks.",
          "Vedic philosophy on environmentalism, social justice, and the collective Dharma.",
          "Comparative analysis: Vedic vs. Western philosophical traditions (e.g., Plato, Kant).",
        ],
      },
      {
        id: 12,
        title: "Week 12: Final Synthesis and Scholarly Presentation",
        details: [
          "Review of all six Darśanas and the common themes: Self, Suffering, and Liberation.",
          "Final research project: A scholarly paper defending a position from one Darśana.",
          "Certification and guidance for future philosophical studies.",
        ],
      },
    ],
  },
];

// --- Video Section ---
const vedicPhilosophyVideos = [
  {
    title: "Sāṃkhya: Puruṣa and the Guṇas Explained",
    thumbnail: "https://placehold.co/400x200/F97316/FFFBEB?text=Sankhya+Gunas+Video",
    link: "#",
  },
  {
    title: "The Power of Nyāya Logic and Syllogism",
    thumbnail: "https://placehold.co/400x200/F59E0B/451A03?text=Nyaya+Logic+Video",
    link: "#",
  },
  {
    title: "Advaita vs. Dvaita: The Debate on Reality",
    thumbnail: "https://placehold.co/400x200/FFBF00/78350F?text=Vedanta+Debate+Clip",
    link: "#",
  },
];

// --- Bonus Section ---
const vedicPhilosophyBonus = [
  "Digital Compendium of Darśana Sūtras (Selections)",
  "Glossary of 100+ Essential Sanskrit Philosophical Terms",
  "Lifetime Access to Scholarly Lectures Archive",
];

// --- Pricing Plans ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "The Seeker (Jijñāsu)",
    price: 1699,
    features: [
      "Months 1 & 2 Modules (Sāṃkhya, Yoga, Logic, Mīmāṃsā)",
      "Recorded Video Lectures",
      "Module-wise Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Philosophy Master (Ācārya)",
    price: 2999,
    features: [
      "All 3 Months Curriculum (Includes Vedānta)",
      "Lifetime Scholarly Access",
      "4 Live Philosophical Discussion Sessions",
      "Final Project Review & Certification",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Professional Guide (Upadeṣṭā)",
    price: 5499,
    features: [
      "All Philosophy Master Features",
      "4 x 1:1 Personalized Mentoring Sessions",
      "Ethics in Teaching Module",
      "Dedicated Academic Support Channel",
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: delay }}
        className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-400 flex flex-col h-full hover:shadow-xl transition duration-300"
    >
        <p className="text-lg italic text-gray-700 mb-6">
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
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-2xl border-t-8 border-orange-500 max-w-lg mx-auto">
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
        </form>
    );
};


// --- Main Page Component ---
export default function VedicPhilosophyCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    navigate(`/enrollnows?courseId=vedic-philosophy&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
          The Six Pillars of Wisdom: <br />
          <span className="text-orange-600">Mastering Vedic Philosophy (Ṣaḍdarśana)</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Explore the profound schools of Hindu thought from Yoga and Logic to the pinnacle of Vedānta.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            navigate(
              `/enrollnows?courseId=vedic-philosophy&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          className={`mt-8 ${BUTTON_COLOR} text-orange-900 px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Philosophy Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-orange-700 mb-10">
            🎥 Foundational Philosophical Concepts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedicPhilosophyVideos.map((video, i) => (
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
            📘 Complete <span className={ACCENT_COLOR}>3-Month Vedic Philosophy Curriculum</span>
          </h2>
          {vedicPhilosophyCurriculum.map((month, index) => (
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
                <MessageSquare className="w-8 h-8 text-orange-600" /> Voices of Our Seekers
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
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Essential Philosophical Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedicPhilosophyBonus.map((item, index) => (
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
            ✨ Choose Your <span className={ACCENT_COLOR}>Path to Philosophical Enlightenment</span>
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
                <Mail className="w-8 h-8 text-orange-600" /> Have Questions? Get in Touch.
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                Reach out to our academic support team for any queries regarding the course content or enrollment plans.
            </p>
            <ContactForm />
        </div>
      </section>
      {/* --- */}
    </div>
  );
}