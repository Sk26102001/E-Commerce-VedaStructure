

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, // Changed Play to BookOpen for learning
  CheckCircle2,
  ChevronDown,
  Gift,
  Sun, // Used Sun and other icons with new meanings
  Target,
  BarChart2,
  Tornado, // New Icon for a strong visual
  Users, // New Icon for community/discussion
  Quote, // New Icon for Testimonials
  Mail, // New Icon for Contact
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration: Updated Colors to Yellow/Orange/Purple ---
const PRIMARY_COLOR = "bg-amber-600"; // Deep Orange/Amber for main elements
const ACCENT_COLOR = "text-yellow-400"; // Bright Yellow for accents
const HOVER_COLOR = "hover:bg-gradient-to-r from-amber-700 to-orange-500";
// Re-coloring the button for a bright, aggressive look (Orange/Amber dominant)
const BUTTON_COLOR =
  "bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white"; // Bright Orange/Amber Gradient Button

// --- Testimonial Data (NEW) ---
const vyakaranaTestimonials = [
    {
      quote: "Before this course, Pāṇini seemed inaccessible. Now, I can confidently break down Sūtras and see the logic! The Sandhi section was pure gold.",
      name: "Anjali D.",
      title: "Vedic Scholar & Teacher",
    },
    {
      quote: "The structure is phenomenal. Months 1 and 2 built the perfect foundation for the compound words in Month 3. My reading speed has doubled.",
      name: "Ravi S.",
      title: "Sanskrit Ph.D. Student",
    },
    {
      quote: "Finally, a course that focuses on application, not just rote memorization. I can now analyze *Bhagavad Gītā* verses grammatically. Highly recommended!",
      name: "Elara M.",
      title: "Yoga & Philosophy Teacher",
    },
];

// --- Curriculum: Updated for Sanskrit Vyākaraṇa ---
const vyakaranaCurriculum = [
  {
    monthTitle: "☀️ Month 1: Primary Foundation - Varṇa, Saṁjñā, and Sandhi",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Varṇa-vicāra (Phonetics) & Maheśvara Sūtrāṇi",
        details: [
          "Introduction to Pāṇini's Aṣṭādhyāyī and the tradition of Vyākaraṇa.",
          "Detailed study of Varṇas (letters), their Sthāna (place) and Prayatna (effort).",
          "Mastering the **14 Maheśvara Sūtrāṇi** and Pratyāhāras (abbreviations).",
          "Practical exercise: Correct pronunciation (Śikṣā) and chanting practice.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Saṁjñā-prakaraṇam (Technical Terms)",
        details: [
          "Understanding key technical terms: Guru-laghu, Samprasāraṇa, Nīpāta, etc.",
          "In-depth analysis of **Anubandhas (It-Saṁjñā)** and their function in Sūtras.",
          "The concepts of Sthānī (substituendum) and Ādeśa (substitute).",
          "Identifying and applying the major defining rules (Paribhāṣā Sūtras).",
        ],
      },
      {
        id: 3,
        title: "Week 3: Svara Sandhi (Vowel Combination Rules)",
        details: [
          "Detailed rules for **Savaraṇa Dīrgha (homogenous lengthening)** and Guṇa/Vṛddhi Sandhi.",
          "Understanding the application of **Yaṇ Sandhi** (vowel-to-semivowel change).",
          "Study of Pūrva-rūpa and Para-rūpa Sandhis and their exceptions.",
          "Practical exercise: Deconstructing and combining complex Sandhi examples.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Vyañjana & Visarga Sandhi (Consonant & Aspirate Rules)",
        details: [
          "Rules for **Ṣṭutva and Naś Sandhi** and changes in consonants.",
          "Mastering the rules governing Visarga (aspirate) changes (e.g., S-tva, U-tva).",
          "Integrated revision of all Sandhi rules (Tri-Sandhi practice).",
          "Timed assessment: Identifying and applying all major Sandhi types.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: Subanta Prakaraṇam (Nominal Stem Inflection)",
    icon: <Target className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Kāraka (Case Relations) & Vibhakti (Case Endings)",
        details: [
          "Defining the six **Kārakas** (agent, object, instrument, etc.) and their importance.",
          "Study of the **21 Subanta Pratyayas** (case endings) and their forms.",
          "Rules governing the application of Prathamā and Dvitīyā Vibhakti.",
          "Understanding Upapada Vibhakti (case dictated by prepositions/adverbs).",
        ],
      },
      {
        id: 6,
        title: "Week 6: A-kārānta Puṁliṅga (Masculine Stems Ending in 'a')",
        details: [
          "In-depth declension of **Deva (God)** and similar 'a'-ending masculine stems.",
          "Understanding the role of **Ṇatva (N-to-Ṇ)** and Ṣatva (S-to-Ṣ) rules in declension.",
          "Rules for Sarvanāma (Pronouns) and their special forms.",
          "Practical exercise: Declining common masculine nouns in all 7 cases and 3 numbers.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Strīliṅga & Napuṁsakaliṅga (Feminine & Neuter Stems)",
        details: [
          "Declension of **Nadī (River)** and other long 'ī' ending feminine stems.",
          "Declension of **Jagat (World)** and other consonant ending neuter stems.",
          "Understanding common **feminine suffixes (Ṭāp, 2ṣ, Ṇīp)** and their rules.",
          "Application: Translating simple Sanskrit sentences focusing on nominal forms.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Sarvanāma & Asaṁjñā (Pronouns and Non-Nouns)",
        details: [
          "Detailed analysis of the forms of **Idam, Adas, and Tat (this, that)**.",
          "Study of Saṁkhyā (Numerals) and their special declension patterns.",
          "Revision of **Subanta Prakaraṇam** with focus on complex exceptions.",
          "Monthly Project: Analyzing a short Stotra (hymn) for nominal forms.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔱 Month 3: Tiṅanta & Samāsa (Verbal Inflection & Compounds)",
    icon: <Tornado className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Tiṅanta Foundation (Verbal Roots & La-kāras)",
        details: [
          "Introduction to **Dhātupāṭha (Verbal Root List)** and the 10 Gaṇas (classes).",
          "Understanding the 10 **La-kāras (Tenses/Moods)** and their usage.",
          "Mastering forms in Laṭ (Present) and Lṛṭ (Future) La-kāras.",
          "Application of Parasmaipada and Ātmanepada (Active/Middle Voice).",
        ],
      },
      {
        id: 10,
        title: "Week 10: Advanced Tiṅanta - Loṭ, Vi-dhi-liṅ, and Luṅ",
        details: [
          "Rules for imperative mood (**Loṭ La-kāra**) and optative mood (**Vi-dhi-liṅ**).",
          "In-depth study of the perfect tense (**Liṭ La-kāra**) and its reduplication rules.",
          "Forms in the aorist tense (**Luṅ La-kāra**) and the role of the Augment **a**.",
          "Analyzing the structure of a complete verbal form (Prakṛti, Vikaraṇa, Pratyaya).",
        ],
      },
      {
        id: 11,
        title: "Week 11: Samāsa Prakaraṇam (Compounds)",
        details: [
          "Definition and structure of **Samāsa (Compound)** words in Sanskrit.",
          "Detailed study of **Tatpuruṣa** and its sub-types (e.g., Dvigu, Nañ).",
          "Mastering the **Bahuvrīhi (possessive)** and **Dvandva (coordinative)** compounds.",
          "Practical exercise: Breaking down and forming long compound words.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Kṛt & Taddhita Pratyayas and Vākyānvaya",
        details: [
          "Introduction to **Kṛt (primary)** and **Taddhita (secondary) suffixes**.",
          "Syntax analysis (**Vākyānvaya**) - putting grammar into sentence structure.",
          "Final synthesis: Applying Vyākaraṇa rules to a verse from the **Bhagavad Gītā**.",
          "Certification and Review: Final examination and professional ethics.",
        ],
      },
    ],
  },
];

// --- Video Section: Updated for Vyākaraṇa ---
const vyakaranaVideos = [
  {
    title: "Introduction to Pāṇini's Aṣṭādhyāyī",
    thumbnail: "https://placehold.co/400x200/5D2F6B/FFFFFF?text=Pāṇini+Video",
    link: "#",
  },
  {
    title: "Mastering Maheśvara Sūtrāṇi in 10 Minutes",
    thumbnail: "https://placehold.co/400x200/CC9900/5D2F6B?text=Sūtra+Chant",
    link: "#",
  },
  {
    title: "The Logic of Sandhi: Vowel Combinations",
    thumbnail: "https://placehold.co/400x200/D4AF37/5D2F6B?text=Sandhi+Rules",
    link: "#",
  },
];

// --- Bonus Section: Updated for Vyākaraṇa ---
const vyakaranaBonus = [
  "High-Resolution Maheśvara Sūtrāṇi Chart",
  "Ready-Reckoner for Kāraka & Vibhakti",
  "Lifetime Access to Pāṇini Sūtra Indexer",
];

// --- Pricing Plans: Updated for Vyākaraṇa ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Sūtra Foundation",
    price: 999,
    features: [
      "Months 1 & 2 Modules (Sandhi & Subanta)",
      "Recorded Video Lectures",
      "Module-wise Quizzes & Exercises",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Vyākaraṇa Master",
    price: 1899,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Sūtra Indexer Software Access",
      "4 Live Pāṭha & Discussion Sessions",
      "Final Project Review (Gītā Verse)",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Śāstra Scholar",
    price: 3999,
    features: [
      "All Vyākaraṇa Master Features",
      "4 x 1:1 Personalized Doubt-Clearing",
      "Advanced Kāraka & Samāsa Module",
      "Dedicated Telegram Community Support",
    ],
    isPopular: false,
  },
];

// --- Accordion Component ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Color adjustment for Accordion button
  const accordionPrimaryColor = "bg-amber-600"; // Changed to Amber/Orange
  const accordionHoverColor = "hover:bg-amber-700";

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
            className="overflow-hidden bg-yellow-50 p-4 border-l-4 border-b-4 border-r-4 border-amber-300 rounded-b-xl" // Light Yellow background
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

// --- Pricing Card Component ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-amber-600 text-white border-4 border-yellow-400" // Popular card: Deep Amber and Bright Yellow border
        : "bg-white text-gray-800 border-2 border-amber-200" // Standard card: White and Light Orange border
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-amber-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
    <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-yellow-400" : "text-amber-500"
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
          ? "bg-yellow-400 text-amber-800 hover:bg-yellow-500"
          : "bg-amber-100 text-amber-700 hover:bg-amber-200"
      }`}
    >
      Master with {plan.name}
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
        className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-amber-400 flex flex-col h-full hover:shadow-2xl transition duration-300"
    >
        <Quote className="w-8 h-8 text-amber-500 mb-4" />
        <p className="text-lg italic text-gray-700 mb-6 flex-grow">
            {quote}
        </p>
        <div className="mt-auto pt-4 border-t border-yellow-100">
            <p className="font-bold text-amber-700 text-lg">{name}</p>
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
            <h3 className="text-3xl font-serif text-amber-700 mb-6 text-center">Ask a Question</h3>
            
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
                    placeholder="Your question about the Vyākaraṇa course..."
                ></textarea>
            </div>
            
            <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                disabled={status === "submitting"}
                className={`w-full py-3 rounded-full font-semibold text-lg shadow-lg transition duration-300 
                    ${BUTTON_COLOR} text-white ${status === "submitting" ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </motion.button>

            {status === "success" && (
                <p className="mt-4 text-center text-green-600 font-medium">✅ Success! We've received your query.</p>
            )}
        </motion.form>
    );
};


// --- Main Page Component ---
export default function VyakaranaCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // Note: navigate function is mocked as it relies on 'react-router-dom'
    // console.log(
    //   `Navigating to enrollment for course: vyakarana, plan: ${plan.key}`
    // );
    navigate(`/enrollnows?courseId=sanskrit-vyakarana&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-amber-800 leading-snug">
          The Grammar of the Gods: <br />
          <span className="text-orange-600">Sanskrit Vyākaraṇa Mastery</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Unlock Pāṇini's *Aṣṭādhyāyī* and learn the perfect structure of the
          language.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            navigate(
              `/enrollnows?courseId=sanskrit-vyakarana&plan=${defaultPlanKey}#enrollment-section`
          )
          }
          className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Vyākaraṇa Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-amber-700 mb-10">
            📚 Introductory Lectures & Pāṭha
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vyakaranaVideos.map((video, i) => (
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
                      "https://placehold.co/400x200/5D2F6B/FFFFFF?text=Video+Placeholder";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <BookOpen className="text-white w-14 h-14 bg-amber-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-amber-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-amber-700 mb-10 text-center">
            📘 Complete <span className="text-orange-600">3-Month Vyākaraṇa Curriculum</span>
          </h2>
          {vyakaranaCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-amber-700 bg-yellow-200 px-3 py-1 rounded-full">
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
            <h2 className="text-4xl font-serif text-amber-700 mb-12 flex justify-center items-center gap-3">
                <Users className="w-8 h-8 text-orange-600" /> Voices from Our Śāstra Students
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {vyakaranaTestimonials.map((t, index) => (
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
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-100">
          <h2 className="text-4xl font-serif text-amber-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Śāstra Companion Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vyakaranaBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-amber-100 flex items-center justify-center text-center"
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
          <h2 className="text-4xl font-serif text-amber-700 mb-12 text-center">
            ✨ Choose Your <span className="text-orange-600">Learning Path</span>
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
                <Mail className="w-8 h-8 text-amber-600" /> Have Questions? Let's Talk!
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                Our advisors are here to help you choose the right path. Send us your query about the curriculum, schedule, or prerequisites.
            </p>
            <ContactForm />
        </div>
      </section>
      {/* --- */}
    </div>
  );
}