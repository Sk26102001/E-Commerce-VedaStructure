


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
  BookA, // Icon for alphabet/grammar
  Mic2, // Icon for chanting/pronunciation
  Feather, // Icon for writing/texts
  Quote, // Icon for testimonials (NEW)
  Mail, // Icon for contact (NEW)
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration: Updated Colors to Yellow/Orange/BRIGHT Red ---
const LIGHT_RED_COLOR = "bg-red-500"; // Brighter Red for contrast headers/buttons
const ACCENT_COLOR = "text-orange-600"; // Vibrant Orange for accents
const HOVER_COLOR = "hover:bg-red-600";
const BUTTON_COLOR =
  "bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600"; // Bright Orange and Yellow for CTA

// --- Testimonial Data (NEW) ---
const testimonials = [
  {
    name: "Priya S., Mumbai",
    text: "The metrical chanting sessions completely changed my recitation practice. I can now read the Bhagavad Gītā fluently in Devanāgarī!",
    rating: 5,
  },
  {
    name: "George H., Germany",
    text: "Mastering Sandhi and compound words felt impossible before. The step-by-step method here is brilliant and very clear.",
    rating: 4.5,
  },
  {
    name: "Anil V., Pune",
    text: "The focus on correct pronunciation (Uccāraṇa) is unmatched. I feel much more connected to the sound of the language.",
    rating: 5,
  },
];

// --- Curriculum: Updated for Sanskrit (Reading + Chanting) (Data structure kept for context) ---
const sanskritCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundation of Sound & Script (Varna & Svara)",
    icon: <BookA className="w-5 h-5 mr-3 text-red-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: The Devanāgarī Script & Vowels (Svara)",
        details: [
          "Introduction to **Devanāgarī**—the script of the Gods—and its logic.",
          "Mastering all **vowels (Svara)**, including short and long sounds (Hrasva & Dīrgha).",
          "Correct pronunciation practice (Uccāraṇa) for perfect sound fidelity.",
          "Writing practice: Basic alphabet drills and stroke order.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Consonants (Vyañjana) & Articulation Points",
        details: [
          "In-depth study of **consonants (Vyañjana)** based on their articulation points (Kaṇṭha, Tālu, etc.).",
          "Understanding the role of **Aspirates** and **Retroflex** sounds unique to Sanskrit.",
          "Introduction to **Anusvāra** (M) and **Visarga** (H) and their rules.",
          "Chanting practice: Basic mantras for sound vibration.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Compound Letters (Saṃyuktākṣara) & Sandhi Rules (Part 1)",
        details: [
          "Decoding **compound letters** (conjuncts) for accurate reading of complex words.",
          "Introduction to **Sandhi** (euphonic combination) at the basic level.",
          "Practicing simple **Vowel Sandhi** for smoother reading flow.",
          "Reading Practice: Basic Subhāṣitas (good sayings) and simple ślokas.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Basic Declensions & Noun Cases (Vibhakti)",
        details: [
          "Introduction to the concept of **Gender (Liṅga)**: Masculine, Feminine, Neuter.",
          "Understanding the **eight Vibhaktis** (cases) and their roles (e.g., Nominative, Accusative).",
          "Revision of script and pronunciation with a timed reading assessment.",
          "Chanting Project: Memorization and chanting of a simple Gāyatrī Mantra.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: Applied Reading & Metrical Chanting (Chandas)",
    icon: <Mic2 className="w-5 h-5 mr-3 text-red-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Verbal Roots (Dhātu) and Basic Tenses",
        details: [
          "Introduction to the **Dhātu** (verbal root) system—the heart of Sanskrit vocabulary.",
          "Conjugation of basic verbs in **Lat Laṭ** (Present Tense).",
          "Understanding **Paraasmaipada** and **Ātmanepada** verb forms.",
          "Translation Exercise: Simple sentences using Nouns and Verbs.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Introduction to Vedic/Chanting Metrics (Chandas)",
        details: [
          "Understanding the importance of **Svara** (accent/tone) in chanting.",
          "Introduction to **Anuṣṭubh Chandas** (the most common meter for Epics/Purāṇas).",
          "Practical session on maintaining **rhythm and meter** while chanting.",
          "Chanting Practice: Chapters 1-2 of the Bhagavad Gītā in *Anuṣṭubh*.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Advanced Sandhi (Part 2) & Reading Skills",
        details: [
          "Mastering complex **Viṣarga Sandhi** (visarga euphony).",
          "Techniques for mentally separating Sandhi compounds during reading.",
          "Reading from original texts without transliteration for faster comprehension.",
          "Live Group Reading: The first sarga (chapter) of the Vālmīki Rāmāyaṇa.",
        ],
      },
      {
        id: 8,
        title: "Week 8: The Power of Compound Words (Samāsa)",
        details: [
          "Introduction to **Samāsa** (compound words) and their types (e.g., Dvandva, Tatpuruṣa).",
          "Strategies for breaking down long Sanskrit compounds into meaningful parts.",
          "Reading Practice: Selected verses from the *Hitopadeśa* (fables).",
          "Chanting Project: The *Śiva Maṅgala Aṣṭaka* (in simple meter).",
        ],
      },
    ],
  },
  {
    monthTitle: "🔭 Month 3: Reading Classical Texts & Advanced Chanting",
    icon: <Feather className="w-5 h-5 mr-3 text-red-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Decoding Famous Texts—Bhagavad Gītā",
        details: [
          "Applying all reading rules to chapters 3-4 of the **Bhagavad Gītā**.",
          "Word-for-word analysis (Padaccheda) and basic sentence structure (Anvaya).",
          "Advanced chanting techniques for Gītā recitation.",
          "Discussion on philosophical terms: *Karma, Jñāna, Bhakti*.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Reading from the Vedas & Upaniṣads",
        details: [
          "Introduction to the **Udatta, Anudatta, and Svarita** Vedic accents (tonal markings).",
          "Reading and chanting selected verses from the *Isha Upaniṣad*.",
          "Understanding the specific sound texture (Dhivani) of Vedic chanting.",
          "Comparative study: Classical Sanskrit vs. Vedic Sanskrit differences.",
        ],
      },
      {
        id: 11,
        title: "Week 11: The Fundamentals of Verse Composition",
        details: [
          "Overview of major meters: **Indravajrā, Upendravajrā, Śārdūlavikrīḍita**.",
          "Analyzing the relationship between meter, rhythm, and emotional expression (Rasa).",
          "Case Study: Reading and appreciating Kālidāsa’s *Meghadūtam*.",
          "Review: Open Q&A on all aspects of Grammar and Sandhi.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Capstone Project & Fluent Recitation",
        details: [
          "Final Project: Recording a flawless, metrically correct recitation of a chosen text (e.g., Gītā Chapter 15).",
          "Self-Correction techniques for reading and chanting errors.",
          "Resources and path for lifelong Sanskrit study (e.g., Pāṇini).",
          "Final assessment and certification ceremony.",
        ],
      },
    ],
  },
];

// --- Video Section: Updated for Sanskrit ---
const sanskritVideos = [
  {
    title: "How to Pronounce the Rarest Sanskrit Sounds",
    thumbnail: "https://placehold.co/400x200/F56565/FFFFFF?text=Sanskrit+Pronunciation",
    link: "#",
  },
  {
    title: "The Logic of Devanāgarī Compound Letters",
    thumbnail: "https://placehold.co/400x200/F6AD55/FFFFFF?text=Devanagari+Script",
    link: "#",
  },
  {
    title: "Chanting the Anuṣṭubh Meter: A Step-by-Step Guide",
    thumbnail: "https://placehold.co/400x200/FBBF24/60A5FA?text=Chanting+Practice",
    link: "#",
  },
];

// --- Bonus Section: Updated for Sanskrit ---
const sanskritBonus = [
  "High-Resolution Devanāgarī Varna-Mala Chart",
  "Audio Dictionary of 100 Key Nouns and Verbs",
  "Lifetime Access to Chanting Meter Guide",
];

// --- Pricing Plans: Updated for Sanskrit ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Śloka Reader",
    price: 1499,
    features: [
      "Months 1 & 2 Modules (Foundation & Applied Reading)",
      "Recorded Video Lectures & PDFs",
      "Module-wise Quizzes and Reading Materials",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Sanskrit Master",
    price: 2299,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Audio Dictionary & Chanting Guide Access",
      "4 Live Chanting Correction Sessions",
      "Final Recitation Project Review",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Vedic Chanter",
    price: 4499,
    features: [
      "All Sanskrit Master Features",
      "4 x 1:1 Personalized Accent & Tone Sessions",
      "Advanced Vedic Accent Module",
      "Access to Sanskrit Scholars Forum",
    ],
    isPopular: false,
  },
];

// --- Accordion Component (Updated to brighter colors) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Using a brighter red (red-500) for contrast
  const accordionPrimaryColor = "bg-red-500";
  const accordionHoverColor = "hover:bg-red-600";

  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
      <motion.button
        className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${accordionPrimaryColor} ${accordionHoverColor}`}
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
            className="overflow-hidden bg-yellow-50 p-4 border-l-4 border-b-4 border-r-4 border-orange-300 rounded-b-xl" // Light Yellow/Orange inner background
          >
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
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

// --- Pricing Card Component (Updated to brighter colors) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-orange-500 text-white border-4 border-orange-400" // Popular: Bright Red with Bright Orange border
        : "bg-white text-gray-800 border-2 border-yellow-200" // Standard: White with Light Yellow border
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-orange-400 text-red-700 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-300" : "text-orange-600"
      }`}
    >
      ₹{plan.price.toLocaleString()}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-orange-300" : "text-yellow-600"
            }`}
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    <motion.button
      onClick={() => onEnroll(plan)}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
        plan.isPopular
          ? "bg-yellow-300 text-red-700 hover:bg-yellow-400" // Popular button: Yellow/Bright Red
          : "bg-orange-100 text-red-600 hover:bg-orange-200" // Standard button: Light Orange/Bright Red
      }`}
    >
      Master with {plan.name}
    </motion.button>
  </motion.div>
);

// --- Testimonial Card Component (NEW) ---
const TestimonialCard = ({ name, text, rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(245, 101, 101, 0.2)" }} // Light red shadow
      className="p-8 bg-white rounded-xl shadow-lg border border-yellow-200 flex flex-col items-center text-center"
    >
      <Quote className="w-8 h-8 mb-4 text-orange-500" />
      <p className="text-gray-700 italic flex-grow">“{text}”</p>
      <div className="flex my-3 text-red-500">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStar && (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21l6.18-3.72V2z" />
          </svg>
        )}
      </div>
      <p className="mt-2 font-semibold text-red-600">— {name}</p>
    </motion.div>
  );
};


// --- Main Page Component ---
export default function SanskritCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    navigate(`/enrollnows?courseId=sanskrit-chanting&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-red-700 leading-snug">
          The Language of the Gods: <br />
          <span className="text-orange-600">Sanskrit Reading & Chanting Mastery</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Learn to flawlessly read **Devanāgarī** and master the **metrical chanting (Chandas)** of
          the Bhagavad Gītā, Upaniṣads, and classic texts.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleEnrollClick(
              pricingPlans.find((p) => p.key === defaultPlanKey)
            )
          }
          className={`mt-8 ${BUTTON_COLOR} text-red-700 px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Sanskrit Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🎥 Foundational Practice & Sound Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sanskritVideos.map((video, i) => (
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
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x200/F56565/FFFFFF?text=Video+Placeholder";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14 bg-red-500 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-red-700">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
            📘 Complete <span className="text-orange-600">3-Month Sanskrit Curriculum</span>
          </h2>
          {sanskritCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-red-700 bg-yellow-200 px-3 py-1 rounded-full">
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
      
      {/* Testimonials Section (NEW) */}
      <section className="py-20 px-6 bg-yellow-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-red-700 mb-12">
            🌟 Hear From Our <span className="text-orange-600">Successful Students</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                name={t.name}
                text={t.text}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-orange-50">
          <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Essential Sanskrit Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sanskritBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-yellow-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-red-600" /> 
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
            ✨ Choose Your <span className="text-orange-600">Path to Fluent Recitation</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Us Section (NEW) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center p-8 border-4 border-solid border-red-400 rounded-3xl bg-yellow-50 shadow-xl">
          <h2 className="text-4xl font-serif text-red-700 mb-8 flex justify-center items-center gap-3">
            <Mail className="w-8 h-8 text-orange-600" /> Get in Touch
          </h2>
          <p className="text-xl font-medium text-gray-700 mb-6">
            Have questions about **Devanāgarī**, the chanting modules, or need help choosing a plan?
          </p>
          <p className="text-lg font-semibold text-red-700">
            📧 Email Us: <a href="mailto:sanskritpath@example.com" className="text-orange-600 hover:underline">sanskritpath@example.com</a>
          </p>
          <p className="text-lg font-semibold text-red-700 mt-2">
            📞 Call or WhatsApp Support: +91 99887 76655
          </p>

        </div>
      </section>
    </div>
  );
}