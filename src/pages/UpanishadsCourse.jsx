


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
  Zap,
  Heart,
  Infinity,
  Send, // Icon for the Contact Form button
  Mail, // Icon for the Contact Form section
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration ---
// Color Code: Light Yellow (Primary Background/Accents) and Orange (Primary Action/Highlight)
const PRIMARY_COLOR = "bg-orange-700"; // Deep Orange/Maroon for dark contrast sections
const ACCENT_COLOR = "text-yellow-400"; // Light Yellow for highlights
const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-800 to-amber-700";
const BUTTON_COLOR =
  "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-orange-900"; // Orange/Yellow Gradient Button

// --- Curriculum (Upanishads Course) ---
const upanishadsCurriculum = [
  {
    monthTitle: "✨ Month 1: Foundational Upanishads & The Core Teachings",
    icon: <Zap className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to the Śruti & Iśa Upaniṣad",
        details: [
          "What are the Upanishads? History, context, and their place in Vedic literature (Vedānta).",
          "Analysis of the Śānti Pāṭha (Peace Invocation).",
          "The central theme of the Iśa Upaniṣad: Renunciation and Action (Karma and Jñāna Yoga).",
          "The concept of 'Iśa' (the Lord) dwelling in everything.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Katha Upaniṣad – The Dialogue with Death",
        details: [
          "The story of Nachiketā and Yama (Death personified).",
          "The 'Chariot Analogy' (Indriyas, Manas, Buddhi, Ātman).",
          "The two paths: Śreyas (the good) and Preyas (the pleasant).",
          "Identifying the nature of the Self (Ātman) – subtler than the subtle.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Kena & Muṇḍaka Upaniṣads – Knowledge & Ignorance",
        details: [
          "Kena: The ungraspable source of all senses and mind ('By whom directed...').",
          "Muṇḍaka: The difference between Higher (Parā) and Lower (Aparā) Knowledge.",
          "The famous 'Satyameva Jayate' (Truth alone triumphs) Manta.",
          "The simile of the two birds in Muṇḍaka: the witness and the enjoyer.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Revision and Foundational Philosophies",
        details: [
          "Synthesizing the concepts of Ātman, Brahman, and Karma.",
          "Introduction to the major schools of Vedānta (Advaita, Viśiṣṭādvaita, Dvaita).",
          "Practical meditation and reflection techniques derived from the texts.",
        ],
      },
    ],
  },
  {
    monthTitle: "💖 Month 2: The Grand Vision of the Self (Ātman)",
    icon: <Heart className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Taittirīya Upaniṣad – The Five Sheaths (Pañca Kośas)",
        details: [
          "Detailed study of the five layers of existence: Annamaya, Prāṇamaya, Manomaya, Vijñānamaya, Ānandamaya.",
          "The path of self-inquiry through the Kośas.",
          "The importance of food (Anna) and the ethical relationship with nature.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Māṇḍūkya Upaniṣad – The States of Consciousness",
        details: [
          "The shortest Upanishad and its profound teaching on the four states.",
          "Waking (Viśva), Dreaming (Taijasa), Deep Sleep (Prājñā), and the Fourth State (Turiya).",
          "The significance of the sacred syllable 'Om' (A-U-M-Silence) as a symbol of the four states.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Praśna Upaniṣad – Six Students, Six Questions",
        details: [
          "The nature of creation (Prāṇa) and how life enters the body.",
          "The power and levels of the vital breath (Prāṇa) and its connection to the senses.",
          "Detailed inquiry into the dream state and the Supreme Being.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Sāṃkhya and Yoga Concepts in the Upanishads",
        details: [
          "Identifying the elements of Prakriti and Puruṣa.",
          "The philosophical bridge between the Upanishads and Patañjali's Yoga Sūtras.",
          "Techniques for controlling the mind (Manas) as taught in these texts.",
        ],
      },
    ],
  },
  {
    monthTitle: "♾️ Month 3: Advanced Texts & The Ultimate Reality (Brahman)",
    icon: <Infinity className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Bṛhadāraṇyaka Upaniṣad – The Forest of Greatness",
        details: [
          "The largest Upanishad: The famous dialogue between Yājñavalkya and Maitreyi on the nature of immortality.",
          "The teaching of 'Neti, Neti' (Not this, Not this).",
          "Understanding the nature of the Self as the witness and light of consciousness.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Chāndogya Upaniṣad – The Great Statements (Mahāvākyas)",
        details: [
          "In-depth study of 'Tat Tvam Asi' (Thou Art That) in the story of Śvetaketu.",
          "The teaching on Śāṇḍilya Vidyā – Brahman as the universe and the inner Self.",
          "The concept of Ākāśa (Ether) and its role in creation.",
        ],
      },
      {
        id: 11,
        title: "Week 11: The Mahāvākyas and Non-Dual Realization",
        details: [
          "Integrated study of all four Mahāvākyas (Prajñānam Brahma, Aham Brahma Asmi, Tat Tvam Asi, Ayam Ātmā Brahma).",
          "The concept of Jīvanmukti (Liberation in this life).",
          "The role of the Guru and the lineage (paramparā) in Vedānta.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Synthesis, Sādhana, and Ethical Living",
        details: [
          "Synthesizing the wisdom of the Principal Upanishads.",
          "Developing a daily Sādhana (spiritual practice) based on Upanishadic principles.",
          "Final thesis project on a selected Upanishadic theme.",
        ],
      },
    ],
  },
];

// --- Video Section ---
const upanishadsVideos = [
  {
    title: "Tat Tvam Asi: The Single Sentence of Self-Realization",
    thumbnail: "https://placehold.co/400x200/D97706/FFFBEB?text=Tat+Tvam+Asi+Video",
    link: "#",
  },
  {
    title: "The Chariot Analogy in Katha Upaniṣad",
    thumbnail: "https://placehold.co/400x200/F59E0B/451A03?text=Katha+Chariot+Video",
    link: "#",
  },
  {
    title: "Decoding OM: The Four States of Consciousness",
    thumbnail: "https://placehold.co/400x200/FBBF24/78350F?text=OM+Māṇḍūkya+Video",
    link: "#",
  },
];

// --- Bonus Section ---
const upanishadsBonus = [
  "Digital Library of Śaṅkara's Commentaries",
  "Daily Guided Meditations on the Mahāvākyas",
  "Lifetime Access to the Upanishadic Chant Library",
];

// --- Pricing Plans ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Basic Plan",
    price: 4999,
    features: [
      "Months 1 & 2 Modules (Foundations & Grand Vision)",
      "Recorded Lectures with Subtitles",
      "Chapter-wise Comprehension Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Master Plan",
    price: 5999,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Exclusive Digital Commentaries",
      "4 Live Vedānta Discussion Sessions",
      "Final Thesis Project Review",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Expert Plan",
    price: 6999,
    features: [
      "All Jñāni Features",
      "4 x 1:1 Personalized Philosophical Mentoring",
      "Sanskrit Pronunciation for Chanting Module",
      "Dedicated Sādhanā Accountability Group",
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
        className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 bg-yellow-400 hover:bg-gradient-to-r from-orange-400 to-yellow-500`}
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
        ? "bg-orange-500 text-white border-4 border-yellow-300" // Orange-800 for most popular background
        : "bg-white text-gray-800 border-2 border-yellow-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-orange-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3 className="text-3xl text-red-800 font-bold mb-4 ">{plan.name}</h3>
    <p className="text-5xl font-extrabold mb-6 text-yellow-400">
      ₹{plan.price.toLocaleString()}
    </p>

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
      Start with {plan.name}
    </motion.button>
  </motion.div>
);

// --- New Contact Us Form Component ---
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", // Subject removed
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server API endpoint.
    console.log("Form Data Submitted:", formData);

    // Simulate successful submission and reset form after a delay
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 5000);
  };

  const InputField = ({ label, name, type = "text", required = true }) => (
    <div className="mb-3"> {/* Reduced margin-bottom */}
      <label htmlFor={name} className="block text-left text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-1.5 border border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800" // Reduced padding and border radius
        aria-label={label}
      />
    </div>
  );

  const TextAreaField = ({ label, name, required = true }) => (
    <div className="mb-4"> {/* Reduced margin-bottom */}
      <label htmlFor={name} className="block text-left text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        rows="3" // Reduced rows for smaller height
        required={required}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800" // Reduced padding and border radius
        aria-label={label}
      ></textarea>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-yellow-50 rounded-xl shadow-xl border-2 border-orange-300"> {/* Reduced padding and border size */}
      <h3 className="text-2xl font-serif text-orange-700 mb-4 text-center flex items-center justify-center"> {/* Smaller heading */}
        <Mail className="w-6 h-6 mr-2 text-orange-600" /> Send Us an Enquiry
      </h3>
      <p className="text-gray-600 mb-5 text-center text-sm"> {/* Smaller text and margin */}
        Have questions about the course, curriculum, or enrollment? Please reach out!
      </p>

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center p-4 bg-green-100 text-green-800 rounded-lg border-2 border-green-300"
          >
            <CheckCircle2 className="w-7 h-7 mx-auto text-green-600 mb-2" />
            <p className="font-bold text-base">Thank you for your enquiry, {formData.name}!</p>
            <p className="text-xs">We have received your message and will get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-3" // Reduced spacing
          >
            <InputField label="Your Full Name" name="name" />
            <InputField label="Email Address" name="email" type="email" />
            {/* Subject field removed */}
            <TextAreaField label="Your Message or Specific Question" name="message" />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center py-2 rounded-full font-semibold text-base shadow-lg ${BUTTON_COLOR} text-orange-900`} // Reduced padding and font size
            >
              <Send className="w-4 h-4 mr-2" /> Send Message
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---
export default function UpanishadsCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // Update navigate to reflect Upanishads
    navigate(
      `/enrollnows?courseId=upanishads&plan=${plan.key}#enrollment-section`
    );
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
          The Essence of Vedānta: <br />
          <span className="text-orange-600">
            A Deep Dive into the Principal Upaniṣads
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Uncover the direct path to self-knowledge and liberation from the
          ancient wisdom texts.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            navigate(
              `/enrollnows?courseId=upanishads&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
        >
          👉 Begin Your Journey to Jñāna (Knowledge)
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-orange-700 mb-10">
            🎥 Key Concepts from the Texts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upanishadsVideos.map((video, i) => (
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
                <p className="mt-3 font-medium text-orange-800">
                  {video.title}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
            📘 Complete{" "}
            <span className="text-orange-400">3-Month Upanishad Curriculum</span>
          </h2>
          {upanishadsCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-2xl font-bold text-gray-700 flex justify-between w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
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
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁
            Sādhanā Resources Included
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upanishadsBonus.map((item, index) => (
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
            ✨ Choose Your <span className={ACCENT_COLOR}>Path to Jīvanmukti</span>
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
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🌟 “Voices of Wisdom — Experiences Inspired by the Upanishads”
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Rajesh, Delhi",
                text: "The Upanishads course opened my eyes to the depth of self-awareness and inner peace. I’ve started seeing life beyond material pursuits — it truly feels like awakening from within.",
              },
              {
                name: "Sangeeta, Pune",
                text: "Studying the Upanishads helped me find balance between my professional life and spiritual journey. The ancient wisdom is so relevant even in today’s fast-paced world.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-orange-50 rounded-xl shadow-md"
              >
                <p className="text-gray-800 italic">“{t.text}”</p>
                <p className="mt-3 text-red-700 font-semibold">
                  ⭐⭐⭐⭐⭐ — {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form (Replaces old Contact section) */}
      <section id="contact" className="py-12 px-6 bg-gradient-to-b from-yellow-50 to-amber-50"> {/* Reduced padding (py-12) */}
        <ContactUsForm />
        <div className="max-w-xl mx-auto text-center mt-6"> {/* Reduced margin-top */}
          <p className="text-lg text-gray-700 mb-2">
            **Prefer Direct Contact?**
          </p>
          <p className="text-md text-gray-600">
            💌 Email: **upanishads@vastuscience.com** | 📱 WhatsApp: **+91 91234 56789**
          </p>

        </div>
      </section>
    </div>
  );
}