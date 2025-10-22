// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   Star,
//   BookOpen,
//   Gift,
//   Shield,
//   Sun,
// } from "lucide-react"; // Only used icons
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // ====================================================================
// // VEDIC SCIENCE COURSE CONTENT
// // ====================================================================

// const vedicCourseCurriculum = [
//   {
//     monthTitle: "⭐ Month 1: Foundations of Jyotish (Vedic Astrology)",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Vedic Cosmology",
//         details: [
//           "Philosophy of Karma, Rebirth, and Dharma in the context of Jyotish.",
//           "The difference between Sidereal (Vedic) and Tropical (Western) zodiacs.",
//           "Understanding the Tattvas (Five Great Elements).",
//           "Basic layout of the North Indian and South Indian chart styles.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The 9 Planets (Grahas) and 12 Houses (Bhavas)",
//         details: [
//           "Detailed characteristics and significations of the 7 major planets (Sun to Saturn).",
//           "Understanding the shadowy planets: Rahu (North Node) and Ketu (South Node).",
//           "Significations of the 12 houses (Dharma, Artha, Kama, Moksha) in depth.",
//           "Concepts of planetary exaltation (Ucha) and debilitation (Neecha).",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Zodiac Signs (Rasis) and Naksatras",
//         details: [
//           "In-depth analysis of the 12 Rasis (Aries to Pisces) and their ruling planets.",
//           "Understanding the elemental and quality nature of each Rasi.",
//           "Introduction to the 27 Nakshatras (Lunar Mansions) and their deities.",
//           "Calculating the Lagna (Ascendant) and its pivotal importance.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Planetary Dignity and Relationship",
//         details: [
//           "Analyzing planetary friendships, enmities, and neutral relationships.",
//           "Yogas (Combinations): Introduction to Raja Yogas (power) and Dhana Yogas (wealth).",
//           "Detailed reading of the strength of a planet based on placement and aspect.",
//           "Analyzing combust (Asta) and retrograde (Vakra) planets.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🌿 Month 2: Principles of Ayurveda & Wholistic Health",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: The Three Doshas (Tridosha Theory)",
//         details: [
//           "Fundamental principles and history of Ayurveda.",
//           "Detailed study of Vata (Air/Ether): characteristics, signs of imbalance, and remedies.",
//           "Detailed study of Pitta (Fire/Water): characteristics, signs of imbalance, and remedies.",
//           "Detailed study of Kapha (Earth/Water): characteristics, signs of imbalance, and remedies.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Diagnosis and Constitutional Assessment",
//         details: [
//           "Identifying your Prakriti (birth constitution) vs. Vikriti (current imbalance).",
//           "Pulse Diagnosis (Nadi Vigyan) and Tongue/Nail observation basics.",
//           "Understanding the seven Dhatus (bodily tissues) and their nourishment.",
//           "The importance of Agni (digestive fire) and Ama (toxins).",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Ayurvedic Lifestyle & Dinacharya",
//         details: [
//           "Implementing Dinacharya (daily routine) for optimal Dosha balance.",
//           "Ritucharya (seasonal routine) and diet adjustments.",
//           "Foundations of Ayurvedic nutrition and the six tastes (Rasas).",
//           "Common kitchen herbs and their basic therapeutic uses.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Introduction to Vastu Shastra",
//         details: [
//           "Basic principles of Vastu Purusha Mandala.",
//           "Directional energies and their correlation with planetary forces.",
//           "Vastu remedies for common household problems.",
//           "Integrating home and personal energy for prosperity and health.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔱 Month 3: Predictive Integration & Professional Practice",
//     icon: <Shield className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Predictive Timing (Vimshottari Dasha)",
//         details: [
//           "The Vimshottari Dasha system: Calculation and sequence of planetary periods.",
//           "Interpreting the effects of Maha Dasha and Antar Dasha.",
//           "Translating Dasha events into life predictions (Career, Marriage, Health).",
//           "Introduction to Transit (Gochar) analysis.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Vedic Remedial Measures (Upay)",
//         details: [
//           "Planetary remedies: Gemstones (Ratna), Mantras, and Yantras.",
//           "Ayurvedic remedies for Dosha imbalance indicated by the birth chart.",
//           "Daan (Charity) and its effect on alleviating planetary stress.",
//           "Ethical considerations when recommending Upay.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: The Wholistic Consultation",
//         details: [
//           "Synthesizing the Jyotish chart, Ayurvedic constitution, and Vastu principles.",
//           "Techniques for structuring a comprehensive Vedic Science consultation.",
//           "Advanced case studies integrating all three disciplines.",
//           "Identifying the client's core life lesson (Dharma) from their chart.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Ethical Practice & Final Project",
//         details: [
//           "Ethics of a Vedic Science Practitioner: Responsibility and spiritual maturity.",
//           "Building credibility and marketing your wholistic services.",
//           "Legal and practical aspects of starting a practice.",
//           "Final assessment: Integrated Jyotish-Ayurveda Case Analysis.",
//         ],
//       },
//     ],
//   },
// ];

// const vedicBonusItems = [
//   "Permanent Access to Jyotish Chart Calculator Software",
//   "Ayurvedic Dosha Balancing Recipe E-book",
//   "Beginner's Guide to Sanskrit Mantra Pronunciation",
// ];

// const vedicPricingPlans = [
//   {
//     name: "Vedic Seeker",
//     price: "₹3,499",
//     features: ["Month 1 Modules (Jyotish)", "Recorded Lectures", "Access to Basic Q&A Forum"],
//     isPopular: false,
//   },
//   {
//     name: "Dharma Guide (Recommended)",
//     price: "₹6,999",
//     features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Chart Reading Practicals"],
//     isPopular: true,
//   },
//   {
//     name: "Maharishi Path",
//     price: "₹10,999",
//     features: ["All Dharma Guide Features", "1:1 Mentorship Sessions (4)", "Advanced Remedial Techniques", "Priority Support"],
//     isPopular: false,
//   },
// ];

// // ====================================================================
// // Collapsible Accordion Component
// // ====================================================================

// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-green-100">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </motion.button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-green-300 rounded-b-xl"
//           >
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               {details.map((item, index) => (
//                 <li key={index} className="text-base font-medium">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // ====================================================================
// // Pricing Card Component
// // ====================================================================

// const PricingCard = ({ plan }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//       ${plan.isPopular ? 'bg-indigo-600 text-white border-4 border-green-300' : 'bg-white text-gray-800 border-2 border-indigo-100'} 
//       h-full flex flex-col`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-green-400 text-indigo-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}
//     <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-indigo-700'}`}>
//       {plan.name}
//     </h3>
//     <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-green-300' : 'text-indigo-800'}`}>
//       {plan.price}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2 className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-green-300' : 'text-indigo-600'}`} />
//           <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
//         </li>
//       ))}
//     </ul>

//     <Link to="/enrollnow" className="mt-auto">
//       <motion.button
//         whileTap={{ scale: 0.98 }}
//         className={`w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
//           ${plan.isPopular ? 'bg-green-300 text-indigo-800 hover:bg-green-400' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}
//       >
//         Choose Plan
//       </motion.button>
//     </Link>
//   </motion.div>
// );

// // ====================================================================
// // Vedic Science Page Component
// // ====================================================================

// export default function VedicScience() {
//   const lectureVideos = [
//     {
//       title: "Basics: The 9 Grahas (Planets) Explained",
//       thumbnail:
//         "https://images.unsplash.com/photo-1542438466-931169a9b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//       link: "https://www.youtube.com/watch?v=vedic-planets-intro",
//     },
//     {
//       title: "Ayurveda: Diagnosing Your Vata, Pitta, Kapha Dosha",
//       thumbnail:
//         "https://images.unsplash.com/photo-1596798033282-1e9b251b5e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//       link: "https://www.youtube.com/watch?v=ayurveda-dosha-test",
//     },
//     {
//       title: "Integrating Jyotish and Health Remedies (Upay)",
//       thumbnail:
//         "https://images.unsplash.com/photo-1627916538053-cf2266858273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//       link: "https://www.youtube.com/watch?v=vedic-remedies",
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-indigo-50 to-green-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-green-200 via-indigo-100 to-green-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-4xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-indigo-800 drop-shadow-md leading-snug">
//             Master the Art of Wholistic Living with <br />
//             <span className="text-green-700">Ancient Vedic Science</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Integrate Jyotish (Astrology), Ayurveda, and Vastu for ultimate self-knowledge and balanced well-being.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-r from-indigo-500 to-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//               >
//                 👉 Enroll Now
//               </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-green-300 hover:bg-green-500 text-indigo-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background */}
//         <div className="absolute w-[600px] h-[600px] bg-indigo-300/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-green-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Other sections remain the same... */}
//       {/* Add the "What You Will Learn", Bonus, Pricing, Testimonials, Contact sections here */}
      
//       {/* Custom Animations */}
//       <style>
//         {`
//           .animate-pulse-slow {
//             animation: pulse 8s ease-in-out infinite;
//           }
//           @keyframes pulse {
//             0%, 100% { opacity: 0.4; }
//             50% { opacity: 0.8; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   BookOpen,
//   Gift,
//   Sun,
//   Target,
//   BarChart2,
//   Cloud, // Icon for Cosmology
//   FlaskConical, // Icon for Applied Science
//   Brain, // Icon for Consciousness
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration ---
// // Color Code: Light Yellow (Primary Background/Accents) and Orange (Primary Action/Highlight)
// const PRIMARY_COLOR = "bg-orange-800"; // Deep Orange/Brown for dark contrast sections
// const ACCENT_COLOR = "text-yellow-400"; // Light Yellow for highlights
// const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-900 to-amber-700";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-orange-900"; // Orange/Yellow Gradient Button

// // --- Curriculum (Vedic Science Course) ---
// const vedicScienceCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation – Vedas, Philosophy, and Cosmology",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to the Vedas and Śruti",
//         details: [
//           "Understanding the structure and dating of the four Vedas (Rig, Yajur, Sama, Atharva).",
//           "The concept of R̥ta (Cosmic Order) and Satya (Truth).",
//           "The philosophical bridge between the Samhitas, Brahmanas, and Upanishads.",
//           "Overview of the Six Schools of Hindu Philosophy (Ṣaḍdarśana).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Vedic Cosmology (Brahmāṇḍa) and Time Cycles",
//         details: [
//           "Study of the Hindu time cycles (Kalpa, Manvantara, Mahāyuga, Yuga).",
//           "The five elements (Pañca Mahābhūtas) as described in Sāṃkhya philosophy.",
//           "Concept of space, dimension, and the structure of the Loka-Traya (Three Worlds).",
//           "Exploring the Nāsadīya Sūkta (Hymn of Creation) from the Rig Veda.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Jyotiṣa (Astronomy) – The Eye of the Veda",
//         details: [
//           "The astronomical basis of the Pañcāṅga (Tithi, Vara, Nakṣatra, Yoga, Karaṇa).",
//           "Calculations of the precession of the equinoxes (Ayanāṁśa).",
//           "Understanding planetary motion (Graha-cāra) and its physical effects.",
//           "Basic introduction to Vedic mathematics and Śulba Sūtras (Geometry).",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Revision and Foundational Terminology",
//         details: [
//           "Integrated review of fundamental concepts: Brahman, Ātman, Mokṣa, and Dharma.",
//           "Comparative study: Vedic cosmology vs. Modern astrophysics.",
//           "Case study: The structure and significance of Vedic Altars (Yajña-vedi).",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔬 Month 2: Applied Sciences – Health, Architecture, and Language",
//     icon: <FlaskConical className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Āyurveda – The Science of Life",
//         details: [
//           "The Tridosha theory (Vāta, Pitta, Kapha) and their cosmic origins.",
//           "Understanding the seven Dhatus (Tissues) and Agni (Digestive Fire).",
//           "Introduction to Dinacarya (Daily Routine) based on Vedic and Ayurvedic principles.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Vāstu Śāstra – Architecture and Energy Flow",
//         details: [
//           "The Vāstupuruṣa Maṇḍala and its application to house and temple design.",
//           "Principles of directional energy (Diśā) and their corresponding elements/deities.",
//           "Practical Vāstu analysis for modern living spaces.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Sanskrit – The Language of Vibration",
//         details: [
//           "The science of Sound (Śabda Brahman) and the structure of Sanskrit grammar (Vyākaraṇa).",
//           "Phonetics (Śikṣā) and the precise vibrational impact of Mantras.",
//           "The relationship between language, thought, and reality (Mīmāṃsā school).",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Dāna and Yajña – The Science of Exchange",
//         details: [
//           "The principle of reciprocity and cosmic give-and-take (R̥ṇa and Yajna).",
//           "The science behind offerings, rituals, and their psychological impact.",
//           "Modern application: The ethics of contribution and spiritual ecology.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🧠 Month 3: Consciousness, Yoga, and Modern Integration",
//     icon: <Brain className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Yoga and Meditation Science",
//         details: [
//           "The Eight Limbs of Patañjali's Yoga and its foundation in Vedic thought.",
//           "Prāṇāyāma (Breath control) as a bridge between body and mind (Kośas).",
//           "Advanced meditation techniques (Dhāraṇā and Dhyāna) for accessing higher states.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Vedānta – The Science of Consciousness",
//         details: [
//           "Māṇḍūkya Upanishad and the four states of consciousness (Turiya).",
//           "The mechanism of Karma and rebirth (Saṃsāra) from a scientific view.",
//           "Exploration of the concept of Māyā (Illusion) and empirical reality.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Bridging Vedic Wisdom and Quantum Physics",
//         details: [
//           "The role of the Observer in Vedic philosophy and modern physics.",
//           "Concepts of non-locality and entanglement through the lens of Brahman.",
//           "Discussing the nature of 'nothingness' (Śūnyatā) in Vedic and Buddhist schools.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Synthesis and Research Methodology",
//         details: [
//           "Integrated synthesis of all three months of Vedic knowledge.",
//           "Guidelines for ethically researching and presenting Vedic sciences.",
//           "Final project: Developing an application of Vedic science to a modern problem.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section ---
// const vedicScienceVideos = [
//   {
//     title: "The Quantum Nature of Om and Sanskrit",
//     thumbnail: "https://placehold.co/400x200/F97316/FFFBEB?text=Om+Quantum+Video",
//     link: "#",
//   },
//   {
//     title: "Vastu Shastra: Harnessing Directional Energy",
//     thumbnail: "https://placehold.co/400x200/F59E0B/451A03?text=Vastu+Energy+Video",
//     link: "#",
//   },
//   {
//     title: "Dinacarya: An Ayurvedic Daily Science",
//     thumbnail: "https://placehold.co/400x200/FFBF00/78350F?text=Ayurveda+Routine+Tips",
//     link: "#",
//   },
// ];

// // --- Bonus Section ---
// const vedicScienceBonus = [
//   "Digital Compendium of Vedic Sūtras",
//   "Ayurvedic Constitution (Doṣa) Self-Assessment Kit",
//   "Lifetime Access to Vedic Science Research Papers",
// ];

// // --- Pricing Plans ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "The Explorer (Ālambana)",
//     price: 1999,
//     features: [
//       "Months 1 & 2 Modules (Foundation & Applied Sciences)",
//       "Recorded Video Lectures",
//       "Module-wise Quizzes",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Vedic Scholar (Vicāra)",
//     price: 4999,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Lifetime Research Access",
//       "4 Live Science Discussion Sessions",
//       "Final Project Review & Feedback",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Vedic Researcher (Anusandhāna)",
//     price: 5199,
//     features: [
//       "All Vedic Scholar Features",
//       "4 x 1:1 Personalized Research Mentoring",
//       "Vedic Sanskrit Primer Module",
//       "Dedicated Academic Support Channel",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-orange-900 font-semibold rounded-xl transition-all duration-300 bg-yellow-300 hover:bg-yellow-400`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </motion.button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-300 rounded-b-xl"
//           >
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               {details.map((item, index) => (
//                 <li key={index} className="text-base font-medium">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- Pricing Card Component ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? `${PRIMARY_COLOR} text-white border-4 border-yellow-300` // Orange-800 for most popular background
//         : "bg-white text-gray-800 border-2 border-yellow-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-orange-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
//     <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-yellow-300" />
//           <span>{feature}</span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
//         plan.isPopular
//           ? "bg-yellow-300 text-orange-800 hover:bg-yellow-400"
//           : "bg-orange-100 text-orange-700 hover:bg-orange-200"
//       }`}
//     >
//       Enroll in the {plan.name} Plan
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function VedicScienceCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Update navigate URL to reflect Vedic Science Course
//     navigate(`/enrollnows?courseId=vedic-science&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
//           The Universal Laws: <br />
//           <span className="text-orange-600">Mastering the Science of the Veda</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Bridge ancient wisdom and modern physics to understand the holistic design of the cosmos and self.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             navigate(
//               `/enrollnows?courseId=vedicscience&plan=${defaultPlanKey}#enrollment-section`
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-orange-900 px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Vedic Scholar Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-orange-700 mb-10">
//             🎥 Scientific Insights from the Vedas
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vedicScienceVideos.map((video, i) => (
//               <motion.a
//                 href={video.link}
//                 target="_blank"
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
//               >
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://placehold.co/400x200/F97316/FFFBEB?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-orange-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-orange-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-amber-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-orange-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Vedic Science Curriculum</span>
//           </h2>
//           {vedicScienceCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-700 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-orange-600 bg-yellow-200 px-3 py-1 rounded-full">
//                     {month.duration}
//                   </span>
//                 </h3>
//               </div>
//               {month.modules.map((module) => (
//                 <CourseAccordionItem
//                   key={module.id}
//                   title={`Module ${module.id}: ${module.title}`}
//                   details={module.details}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Bonuses */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
//           <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Essential Research Resources
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vedicScienceBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-yellow-100 flex items-center justify-center text-center"
//               >
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Path to Vedic Mastery</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {pricingPlans.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





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
  Cloud, // Icon for Cosmology
  FlaskConical, // Icon for Applied Science
  Brain, // Icon for Consciousness
  Quote, // Icon for Testimonials
  Mail, // Icon for Contact
  Phone, // Icon for Contact
  MapPin, // Icon for Contact
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration ---
// Color Code: Light Yellow (Primary Background/Accents) and Orange (Primary Action/Highlight)
const PRIMARY_COLOR = "bg-orange-500"; // Deep Orange/Brown for dark contrast sections
const ACCENT_COLOR = "text-yellow-400"; // Light Yellow for highlights
const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-900 to-amber-700";
const BUTTON_COLOR =
  "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-orange-900"; // Orange/Yellow Gradient Button

// --- Curriculum (Vedic Science Course) ---
const vedicScienceCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundation – Vedas, Philosophy, and Cosmology",
    icon: <Sun className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to the Vedas and Śruti",
        details: [
          "Understanding the structure and dating of the four Vedas (Rig, Yajur, Sama, Atharva).",
          "The concept of R̥ta (Cosmic Order) and Satya (Truth).",
          "The philosophical bridge between the Samhitas, Brahmanas, and Upanishads.",
          "Overview of the Six Schools of Hindu Philosophy (Ṣaḍdarśana).",
        ],
      },
      {
        id: 2,
        title: "Week 2: Vedic Cosmology (Brahmāṇḍa) and Time Cycles",
        details: [
          "Study of the Hindu time cycles (Kalpa, Manvantara, Mahāyuga, Yuga).",
          "The five elements (Pañca Mahābhūtas) as described in Sāṃkhya philosophy.",
          "Concept of space, dimension, and the structure of the Loka-Traya (Three Worlds).",
          "Exploring the Nāsadīya Sūkta (Hymn of Creation) from the Rig Veda.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Jyotiṣa (Astronomy) – The Eye of the Veda",
        details: [
          "The astronomical basis of the Pañcāṅga (Tithi, Vara, Nakṣatra, Yoga, Karaṇa).",
          "Calculations of the precession of the equinoxes (Ayanāṁśa).",
          "Understanding planetary motion (Graha-cāra) and its physical effects.",
          "Basic introduction to Vedic mathematics and Śulba Sūtras (Geometry).",
        ],
      },
      {
        id: 4,
        title: "Week 4: Revision and Foundational Terminology",
        details: [
          "Integrated review of fundamental concepts: Brahman, Ātman, Mokṣa, and Dharma.",
          "Comparative study: Vedic cosmology vs. Modern astrophysics.",
          "Case study: The structure and significance of Vedic Altars (Yajña-vedi).",
        ],
      },
    ],
  },
  {
    monthTitle: "🔬 Month 2: Applied Sciences – Health, Architecture, and Language",
    icon: <FlaskConical className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Āyurveda – The Science of Life",
        details: [
          "The Tridosha theory (Vāta, Pitta, Kapha) and their cosmic origins.",
          "Understanding the seven Dhatus (Tissues) and Agni (Digestive Fire).",
          "Introduction to Dinacarya (Daily Routine) based on Vedic and Ayurvedic principles.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Vāstu Śāstra – Architecture and Energy Flow",
        details: [
          "The Vāstupuruṣa Maṇḍala and its application to house and temple design.",
          "Principles of directional energy (Diśā) and their corresponding elements/deities.",
          "Practical Vāstu analysis for modern living spaces.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Sanskrit – The Language of Vibration",
        details: [
          "The science of Sound (Śabda Brahman) and the structure of Sanskrit grammar (Vyākaraṇa).",
          "Phonetics (Śikṣā) and the precise vibrational impact of Mantras.",
          "The relationship between language, thought, and reality (Mīmāṃsā school).",
        ],
      },
      {
        id: 8,
        title: "Week 8: Dāna and Yajña – The Science of Exchange",
        details: [
          "The principle of reciprocity and cosmic give-and-take (R̥ṇa and Yajna).",
          "The science behind offerings, rituals, and their psychological impact.",
          "Modern application: The ethics of contribution and spiritual ecology.",
        ],
      },
    ],
  },
  {
    monthTitle: "🧠 Month 3: Consciousness, Yoga, and Modern Integration",
    icon: <Brain className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Yoga and Meditation Science",
        details: [
          "The Eight Limbs of Patañjali's Yoga and its foundation in Vedic thought.",
          "Prāṇāyāma (Breath control) as a bridge between body and mind (Kośas).",
          "Advanced meditation techniques (Dhāraṇā and Dhyāna) for accessing higher states.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Vedānta – The Science of Consciousness",
        details: [
          "Māṇḍūkya Upanishad and the four states of consciousness (Turiya).",
          "The mechanism of Karma and rebirth (Saṃsāra) from a scientific view.",
          "Exploration of the concept of Māyā (Illusion) and empirical reality.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Bridging Vedic Wisdom and Quantum Physics",
        details: [
          "The role of the Observer in Vedic philosophy and modern physics.",
          "Concepts of non-locality and entanglement through the lens of Brahman.",
          "Discussing the nature of 'nothingness' (Śūnyatā) in Vedic and Buddhist schools.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Synthesis and Research Methodology",
        details: [
          "Integrated synthesis of all three months of Vedic knowledge.",
          "Guidelines for ethically researching and presenting Vedic sciences.",
          "Final project: Developing an application of Vedic science to a modern problem.",
        ],
      },
    ],
  },
];

// --- Video Section ---
const vedicScienceVideos = [
  {
    title: "The Quantum Nature of Om and Sanskrit",
    thumbnail: "https://placehold.co/400x200/F97316/FFFBEB?text=Om+Quantum+Video",
    link: "#",
  },
  {
    title: "Vastu Shastra: Harnessing Directional Energy",
    thumbnail: "https://placehold.co/400x200/F59E0B/451A03?text=Vastu+Energy+Video",
    link: "#",
  },
  {
    title: "Dinacarya: An Ayurvedic Daily Science",
    thumbnail: "https://placehold.co/400x200/FFBF00/78350F?text=Ayurveda+Routine+Tips",
    link: "#",
  },
];

// --- Testimonial Data ---
const testimonials = [
  {
    quote:
      "This course was a revelation. It successfully bridged the abstract philosophy of the Upanishads with actionable, modern scientific understanding. The module on Quantum Physics and Vedānta was truly mind-expanding.",
    name: "Dr. Kavi Sharma",
    title: "Research Scientist, California",
    avatar: "https://placehold.co/100x100/A0522D/FFFBEB?text=KS",
  },
  {
    quote:
      "The practical application of Vāstu and Āyurveda immediately improved my daily life and living space. It's more than a course; it's a complete paradigm shift.",
    name: "Anya Singh",
    title: "Architect & Designer, London",
    avatar: "https://placehold.co/100x100/78350F/FFFBEB?text=AS",
  },
  {
    quote:
      "The depth of knowledge presented in the Sanskrit and Sabda Brahman module was unparalleled. I now understand the vibrational science behind mantra with incredible clarity.",
    name: "Elias Vance",
    title: "Yoga Instructor, New York",
    avatar: "https://placehold.co/100x100/451A03/FFFBEB?text=EV",
  },
];

// --- Bonus Section ---
const vedicScienceBonus = [
  "Digital Compendium of Vedic Sūtras",
  "Ayurvedic Constitution (Doṣa) Self-Assessment Kit",
  "Lifetime Access to Vedic Science Research Papers",
];

// --- Pricing Plans ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "The Explorer (Ālambana)",
    price: 1999,
    features: [
      "Months 1 & 2 Modules (Foundation & Applied Sciences)",
      "Recorded Video Lectures",
      "Module-wise Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Vedic Scholar (Vicāra)",
    price: 4999,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Lifetime Research Access",
      "4 Live Science Discussion Sessions",
      "Final Project Review & Feedback",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Vedic Researcher (Anusandhāna)",
    price: 5199,
    features: [
      "All Vedic Scholar Features",
      "4 x 1:1 Personalized Research Mentoring",
      "Vedic Sanskrit Primer Module",
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

// --- UPDATED: Testimonial Section Component (Bright Colors) ---
const TestimonialsSection = () => (
  <section className={`bg-amber-100 py-20 px-6 text-gray-800`} id="testimonials">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-serif text-center mb-12 text-orange-700">
        <Quote className={`w-8 h-8 inline mr-3 text-orange-600`} />
        Hear from Our <span className="text-orange-900">Vedic Scholars</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white rounded-2xl shadow-xl flex flex-col h-full border-b-4 border-orange-400 hover:shadow-2xl transition duration-300" // Light background, warm border
          >
            <p className="italic text-lg mb-6 flex-grow text-gray-700">"{testimonial.quote}"</p> {/* Dark text for readability */}
            <div className="flex items-center pt-4 border-t border-yellow-300">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-400" // Orange border on avatar
              />
              <div>
                <p className="font-bold text-orange-800">{testimonial.name}</p> {/* Bold dark orange name */}
                <p className="text-sm text-gray-600">{testimonial.title}</p> {/* Subdued gray title */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- New: Contact Us Section Component ---
const ContactUsSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you for your message! We will get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 bg-white" id="contact-us">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
          <Mail className="w-8 h-8 inline mr-3 text-orange-600" />
          Connect with Our <span className="text-yellow-500">Academic Team</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-yellow-50 rounded-2xl shadow-xl border border-yellow-200"
          >
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Send Us a Direct Query</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${BUTTON_COLOR}`}
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 p-8 bg-orange-50 rounded-2xl shadow-xl border border-orange-200 h-full"
          >
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Reach Out to Our Support</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 flex-shrink-0 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email Support</h4>
                  <p className="text-gray-600">
                    <a href="mailto:support@vedicscience.edu" className="text-orange-700 hover:underline">
                      support@vedicscience.edu
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 flex-shrink-0 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone & WhatsApp</h4>
                  <p className="text-gray-600">+91 98765 43210 (Mon-Fri, 9am-5pm IST)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 flex-shrink-0 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Vedic Research Headquarters</h4>
                  <p className="text-gray-600">
                    Ancient Wisdom Center, Block A, Varanasi, UP, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function VedicScienceCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // Update navigate URL to reflect Vedic Science Course
    navigate(`/enrollnows?courseId=vedic-science&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
          The Universal Laws: <br />
          <span className="text-orange-600">Mastering the Science of the Veda</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Bridge ancient wisdom and modern physics to understand the holistic design of the cosmos and self.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            navigate(
              `/enrollnows?courseId=vedicscience&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          className={`mt-8 ${BUTTON_COLOR} text-orange-900 px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Vedic Scholar Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-orange-700 mb-10">
            🎥 Scientific Insights from the Vedas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedicScienceVideos.map((video, i) => (
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
            📘 Complete <span className={ACCENT_COLOR}>3-Month Vedic Science Curriculum</span>
          </h2>
          {vedicScienceCurriculum.map((month, index) => (
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

      {/* Bonuses */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Essential Research Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedicScienceBonus.map((item, index) => (
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
            ✨ Choose Your <span className={ACCENT_COLOR}>Path to Vedic Mastery</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section (Now Light and Bright) */}
      <TestimonialsSection />

      {/* Contact Us Section */}
      <ContactUsSection />
    </div>
  );
}