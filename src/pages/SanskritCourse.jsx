// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // Replaced Hand with ScrollText, a more relevant icon for ancient texts/grammar
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, ScrollText } from "lucide-react"; 
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" 
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules (Updated for Sanskrit Theme: Deep Red/Saffron) ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';
// // Detailed 3-Month Curriculum for SANSKRIT VYAKARANA (Grammar)
// const fullCourseCurriculum = [
//   {
//     monthTitle: "📜 Month 1: Varna, Sandhi, and Fundamental Principles",
//     icon: <ScrollText className="w-5 h-5 mr-3" />, // Updated icon
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Sanskrit & Devanagari Script",
//         details: [
//           "The significance of Sanskrit and its structure (Varna, Pada, Vakya).",
//           "Devanagari script: Vowels (Svara) and Consonants (Vyanjana).",
//           "Māheśvara Sūtrāṇi: The 14 Aphorisms of Pāṇini.",
//           "Concept of Pratyāhāra (Abbreviated Designations).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Varna Vicāra (Phonetics & Pronunciation)",
//         details: [
//           "Detailed study of Sthāna (Place of Articulation) and Prayatna (Effort).",
//           "Udatta, Anudatta, Svarita (Vedic Accents) and their role.",
//           "Correct pronunciation and orthography practice (ś vs ṣ vs s).",
//           "Introduction to Padapāṭha (word-by-word text) rules.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Sandhi (Euphonic Combination) - Swara Sandhi",
//         details: [
//           "Aṣṭādhyāyī's basic structure and the concept of Sūtra.",
//           "The core rules of Savarṇa Dīrgha, Guṇa, Vṛddhi, and Yaṇ Sandhi.",
//           "The rules of Ayādi Sandhi (E/O/Ai/Au) and practice drills.",
//           "Exceptions and special rules in Vowel Sandhi.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Sandhi - Vyanjana & Visarga Sandhi",
//         details: [
//           "Detailed study of Jhatva, Chartva, and Anusvāra Sandhi rules.",
//           "Interpretation of Visarga (ḥ) changes (Rū, S/Ś/Ṣ, Lop).",
//           "Practical application: Breaking down compounded sentences (Vākyāntara).",
//           "Review and complete assessment on all three types of Sandhi.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "📘 Month 2: Subanta Prakarana (The Nominal System)",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Ajanta (Vowel-Ending) Nouns - Masculine & Feminine",
//         details: [
//           "Understanding the Vibhakti (Case) system and its 8 Kāraka relations.",
//           "Mastering declensions of 'Rāma' (a-kārānta) and 'Muni' (i-kārānta).",
//           "Feminine declensions: 'Latā' (ā-kārānta) and 'Mati' (i-kārānta).",
//           "Introduction to numerical adjectives (Eka, Dvi, Tri).",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Ajanta Nouns - Neuter & Irregular Forms",
//         details: [
//           "Declensions of Neuter Nouns: 'Phala' (a-kārānta) and 'Vāri' (i-kārānta).",
//           "The complexities of u-kārānta and ṛ-kārānta nominal forms (e.g., Guru, Pitṛ).",
//           "Sankhyāvācaka: Counting and expressing numbers in Sanskrit.",
//           "Practice: Identifying gender, case, and number in complex texts.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Halanta (Consonant-Ending) Nouns & Pronouns",
//         details: [
//           "Declensions of important Halanta nouns (e.g., Marut, Bhāgavat, Rājān).",
//           "Sanskrit Pronouns (Sarvanāma): 'Asmad' (I), 'Yuṣmad' (You), and 'Tat' (That).",
//           "The role of Avyayas (Indeclinables) in sentence construction.",
//           "Reading comprehension with mixed Subanta forms.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Samāsa (Compound Words) Introduction",
//         details: [
//           "Definition, necessity, and structure of Samāsa.",
//           "Tatpuruṣa Samāsa: Detailed study of Vibhakti and Upapada types.",
//           "Dvigu and Karmadhāraya Samāsa: Understanding qualifying compounds.",
//           "Practice: Resolving (Vigraha) and compounding (Samāsana) nominal forms.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎓 Month 3: Tiṅanta, Kāraka, and Sentence Construction",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Dhatu Rupa (The Verbal System)",
//         details: [
//           "The concept of Gaṇas (Verbal Conjugation Classes).",
//           "Parasmaipada and Ātmanepada (Active and Middle Voices).",
//           "Introduction to Vikaraṇas (Class Signs).",
//           "Mastering the conjugation of Pāṭh (read) and Bhū (be) in all persons/numbers.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: The First Four Lakāras (Tenses/Moods)",
//         details: [
//           "Lat Laḵāra (Present Tense) - Usage and forms.",
//           "Lriṭ Laḵāra (Simple Future Tense) - Formation rules and exceptions.",
//           "Loṭ Laḵāra (Imperative Mood - Commands and blessings).",
//           "Liṅ Laḵāra (Potential Mood - Should/May).",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Past Tenses and Kṛt Pratyayas (Participles)",
//         details: [
//           "Laṅ Laḵāra (Imperfect Past Tense).",
//           "Introduction to Kṛt Pratyayas: KTVA (Absolutive), TUMUN (Infinitive), KTA/KTAVAT (Past Participles).",
//           "Passive Voice (Karmavācya) and Impersonal Voice (Bhāvavācya) construction.",
//           "Practical sentence transformation: Active to Passive.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Kāraka (Syntax) & Pāṇinian Synthesis",
//         details: [
//           "Detailed study of the six Kāraka relations (Kartā, Karma, Karaṇa, Sampradāna, Apādāna, Adhikaraṇa).",
//           "Vākya-racanā: Constructing simple and complex Sanskrit sentences.",
//           "Reciting and understanding core Pāṇini Sūtras for quick recall.",
//           "Final assessment: Translating and analyzing a short Sanskrit passage.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//   "Comprehensive Sanskrit Verbs (Dhatu) Quick-Reference Chart",
//   "50 Essential Noun Declensions (Shabda Rupa) Ebook",
//   "Lifetime WhatsApp Q&A Group Access for Doubt Clearing",
// ];

// const pricingPlans = [
//   {
//     name: "Shabdik (Basic Learner)",
//     price: "₹2,999",
//     features: ["Month 1 Modules (Varna & Sandhi)", "Recorded Lectures", "Basic Q&A Forum Access"],
//     isPopular: false,
//   },
//   {
//     name: "Vyakarana Acharya (Master)",
//     price: "₹5,999",
//     features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "4 Live Translation Practicals"],
//     isPopular: true,
//   },
//   {
//     name: "Pāṇini Scholar (Expert)",
//     price: "₹9,999",
//     features: ["All Acharya Features", "1:1 Mentorship Sessions (4)", "Advanced Aṣṭādhyāyī Methods", "Priority Support"],
//     isPopular: false,
//   },
// ];

// /**
//  * Collapsible Accordion component for the "What You Will Learn" section.
//  * Uses Framer Motion for the sliding animation.
//  */
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-red-100">
//       {/* Accordion Header */}
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </motion.button>

//       {/* Accordion Content (The sliding part) */}
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             // Tweaked transition for a smoother, less bouncy feel
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-red-200 rounded-b-xl"
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

// // Component for the pricing card
// const PricingCard = ({ plan }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//         ${plan.isPopular ? 'bg-red-700 text-white border-4 border-yellow-300' : 'bg-white text-gray-800 border-2 border-red-100'} 
//         h-full flex flex-col`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}
//     <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-red-700'}`}>
//       {plan.name}
//     </h3>
//     <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-yellow-300' : 'text-red-800'}`}>
//       {plan.price}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-yellow-300' : 'text-red-600'}`}
//           />
//           <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
//         </li>
//       ))}
//     </ul>

//     <Link to="/enrollnow" className="mt-auto ">
//       <motion.button
//         whileTap={{ scale: 0.98 }}
//         className={` w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
//             ${plan.isPopular
//               ? 'bg-yellow-300 text-red-800 hover:bg-yellow-400'
//               : 'bg-red-100 text-red-700 hover:bg-red-200'
//             }`}
//       >
//         Choose Plan
//       </motion.button>
//     </Link>
//   </motion.div>
// );


// export default function SanskritCourse() {
//   // Updated video content for Sanskrit Vyakarana
//   const lectureVideos = [
//     {
//       title: "Essential: The Power of Sandhi (Word Connection)",
//       thumbnail: "https://t4.ftcdn.net/jpg/05/27/38/20/360_F_527382062_gYm14WdM9T9vR70s2U67R2k9X4N8HhYh.jpg", // Placeholder image for Sanskrit/text
//       link: "https://www.youtube.com/watch?v=sanskrit-sandhi-intro", // Placeholder link
//     },
//     {
//       title: "Mastering Dhatu-Rupas (Verb Conjugations)",
//       thumbnail: "https://media.istockphoto.com/id/1310165992/photo/indian-ancient-literature-vedas-book.jpg?s=612x612&w=0&k=20&c=jY9c_n6W6b_1vB1g5c4WwA8uG3n8W1A5H3E6J1S6V3o=", // Placeholder image
//       link: "https://www.youtube.com/watch?v=sanskrit-dhatu-rupas", // Placeholder link
//     },
//     {
//       title: "Syntax Simplified: Introduction to Kāraka System",
//       thumbnail: "https://t4.ftcdn.net/jpg/04/85/38/54/360_F_485385412_2hQG27f4d2f1K2q4t3r1HjFm7hK2Q3pS.jpg", // Placeholder image
//       link: "https://www.youtube.com/watch?v=sanskrit-karaka-syntax", // Placeholder link
//     },
//   ];

//   return (
//     // Updated background gradient for Sanskrit theme
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-200 via-yellow-100 to-red-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
//             Decipher the Language of the Gods with <br />
//             <span className="text-red-700">Classical Sanskrit Vyākaraṇa</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Master Sanskrit Grammar through Pāṇinian Principles, Nominal Declensions, and Verbal Conjugations.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 // Updated button color
//                 className="bg-gradient-to-r from-red-600 to-yellow-500 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//               >
//                 👉 Enroll Now
//               </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               // Updated button color
//               className="bg-yellow-300 hover:bg-yellow-400 text-red-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background - Updated colors */}
//         <div className="absolute w-[600px] h-[600px] bg-red-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-yellow-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-red-700 mb-8">🎥 Sanskrit Grammar Lecture Videos</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {lectureVideos.map((video, i) => (
//               <motion.a
//                 href={video.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
//               >
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   {/* Updated play button color */}
//                   <Play className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-red-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//       {/* Updated background gradient for curriculum section */}
//       <section className="py-20 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Vyākaraṇa Curriculum</span>
//           </h2>

//           {fullCourseCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Month Header - Updated colors */}
//               <div className="flex items-center mb-4 border-b-2 border-red-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-red-500 bg-red-100 px-3 py-1 rounded-full">
//                     {month.duration}
//                   </span>
//                 </h3>
//               </div>
//               <div className="space-y-3">
//                 {month.modules.map((module) => (
//                   <CourseAccordionItem
//                     key={module.id}
//                     title={module.title}
//                     details={module.details}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}

//           {/* Optional: Download Button - Updated colors */}
//           <div className="text-center mt-10">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-red-600 to-yellow-500 active:scale-95`}
//             >
//               Download Full Curriculum PDF
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>


//       {/* Bonus Section (New Addition) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-50">
//           <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//             {/* Updated icons/text */}
//             <Gift className="w-8 h-8 text-red-600 animate-bounce" />
//             📜 <span className="font-bold">Bonus Section</span> – Limited Time!
//           </h2>
//           <p className="text-2xl font-bold text-red-800 mb-6">
//             🎁 Free Bonuses Worth ₹2,000:
//           </p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {bonusItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
//               >
//                 <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//           <p className="mt-8 text-lg text-red-500 font-semibold">
//             *Enroll in the 'Vyakarana Acharya' tier or above to claim these bonuses instantly!
//           </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       {/* Updated background gradient */}
//       <section className="py-20 px-6 bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Vyākaraṇa Path</span>
//           </h2>
//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {pricingPlans.map((plan, index) => (
//               <PricingCard key={index} plan={plan} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               // Updated testimonials for Sanskrit
//               { name: "Priya, Delhi", text: "I can now read and analyze complex Sanskrit ślokas. The Kāraka section is amazing!" },
//               { name: "Suresh, Pune", text: "The Pāṇinian approach is intense but incredibly clear. I finally understand Sandhi rules." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-yellow-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-red-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-red-700 mb-8">📩 Contact / Help</h2>
//           <p>💌 Email: support@sanskritacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             // Updated button color
//             className="mt-6 bg-gradient-to-r from-red-600 to-yellow-500 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             📜 Book Free Orientation
//           </motion.button>
//         </div>
//       </section>

//       {/* Custom Animations */}
//       <style jsx>{`
//         .animate-pulse-slow {
//           animation: pulse 8s ease-in-out infinite;
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.8; }
//         }
//       `}</style>

//       {/* <Footer /> */}
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   BookOpen, // Changed Play to BookOpen for learning
//   CheckCircle2,
//   ChevronDown,
//   Gift,
//   Sun, // Used Sun and other icons with new meanings
//   Target,
//   BarChart2,
//   Tornado, // New Icon for a strong visual
//   Users, // New Icon for community/discussion
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration: Updated Colors to Yellow/Orange/Purple ---
// const PRIMARY_COLOR = "bg-amber-600"; // Deep Orange/Amber for main elements
// const ACCENT_COLOR = "text-yellow-400"; // Bright Yellow for accents
// const HOVER_COLOR = "hover:bg-gradient-to-r from-amber-700 to-orange-500";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-purple-700 to-amber-600 hover:from-purple-800 hover:to-amber-700"; // Deep Purple & Orange/Amber for CTA

// // --- Curriculum: Updated for Sanskrit Vyākaraṇa ---
// const vyakaranaCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Primary Foundation - Varṇa, Saṁjñā, and Sandhi",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Varṇa-vicāra (Phonetics) & Maheśvara Sūtrāṇi",
//         details: [
//           "Introduction to Pāṇini's Aṣṭādhyāyī and the tradition of Vyākaraṇa.",
//           "Detailed study of Varṇas (letters), their Sthāna (place) and Prayatna (effort).",
//           "Mastering the **14 Maheśvara Sūtrāṇi** and Pratyāhāras (abbreviations).",
//           "Practical exercise: Correct pronunciation (Śikṣā) and chanting practice.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Saṁjñā-prakaraṇam (Technical Terms)",
//         details: [
//           "Understanding key technical terms: Guru-laghu, Samprasāraṇa, Nīpāta, etc.",
//           "In-depth analysis of **Anubandhas (It-Saṁjñā)** and their function in Sūtras.",
//           "The concepts of Sthānī (substituendum) and Ādeśa (substitute).",
//           "Identifying and applying the major defining rules (Paribhāṣā Sūtras).",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Svara Sandhi (Vowel Combination Rules)",
//         details: [
//           "Detailed rules for **Savaraṇa Dīrgha (homogenous lengthening)** and Guṇa/Vṛddhi Sandhi.",
//           "Understanding the application of **Yaṇ Sandhi** (vowel-to-semivowel change).",
//           "Study of Pūrva-rūpa and Para-rūpa Sandhis and their exceptions.",
//           "Practical exercise: Deconstructing and combining complex Sandhi examples.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Vyañjana & Visarga Sandhi (Consonant & Aspirate Rules)",
//         details: [
//           "Rules for **Ṣṭutva and Naś Sandhi** and changes in consonants.",
//           "Mastering the rules governing Visarga (aspirate) changes (e.g., S-tva, U-tva).",
//           "Integrated revision of all Sandhi rules (Tri-Sandhi practice).",
//           "Timed assessment: Identifying and applying all major Sandhi types.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: Subanta Prakaraṇam (Nominal Stem Inflection)",
//     icon: <Target className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Kāraka (Case Relations) & Vibhakti (Case Endings)",
//         details: [
//           "Defining the six **Kārakas** (agent, object, instrument, etc.) and their importance.",
//           "Study of the **21 Subanta Pratyayas** (case endings) and their forms.",
//           "Rules governing the application of Prathamā and Dvitīyā Vibhakti.",
//           "Understanding Upapada Vibhakti (case dictated by prepositions/adverbs).",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: A-kārānta Puṁliṅga (Masculine Stems Ending in 'a')",
//         details: [
//           "In-depth declension of **Deva (God)** and similar 'a'-ending masculine stems.",
//           "Understanding the role of **Ṇatva (N-to-Ṇ)** and Ṣatva (S-to-Ṣ) rules in declension.",
//           "Rules for Sarvanāma (Pronouns) and their special forms.",
//           "Practical exercise: Declining common masculine nouns in all 7 cases and 3 numbers.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Strīliṅga & Napuṁsakaliṅga (Feminine & Neuter Stems)",
//         details: [
//           "Declension of **Nadī (River)** and other long 'ī' ending feminine stems.",
//           "Declension of **Jagat (World)** and other consonant ending neuter stems.",
//           "Understanding common **feminine suffixes (Ṭāp, 2ṣ, Ṇīp)** and their rules.",
//           "Application: Translating simple Sanskrit sentences focusing on nominal forms.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Sarvanāma & Asaṁjñā (Pronouns and Non-Nouns)",
//         details: [
//           "Detailed analysis of the forms of **Idam, Adas, and Tat (this, that)**.",
//           "Study of Saṁkhyā (Numerals) and their special declension patterns.",
//           "Revision of **Subanta Prakaraṇam** with focus on complex exceptions.",
//           "Monthly Project: Analyzing a short Stotra (hymn) for nominal forms.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔱 Month 3: Tiṅanta & Samāsa (Verbal Inflection & Compounds)",
//     icon: <Tornado className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Tiṅanta Foundation (Verbal Roots & La-kāras)",
//         details: [
//           "Introduction to **Dhātupāṭha (Verbal Root List)** and the 10 Gaṇas (classes).",
//           "Understanding the 10 **La-kāras (Tenses/Moods)** and their usage.",
//           "Mastering forms in Laṭ (Present) and Lṛṭ (Future) La-kāras.",
//           "Application of Parasmaipada and Ātmanepada (Active/Middle Voice).",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Advanced Tiṅanta - Loṭ, Vi-dhi-liṅ, and Luṅ",
//         details: [
//           "Rules for imperative mood (**Loṭ La-kāra**) and optative mood (**Vi-dhi-liṅ**).",
//           "In-depth study of the perfect tense (**Liṭ La-kāra**) and its reduplication rules.",
//           "Forms in the aorist tense (**Luṅ La-kāra**) and the role of the Augment **a**.",
//           "Analyzing the structure of a complete verbal form (Prakṛti, Vikaraṇa, Pratyaya).",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Samāsa Prakaraṇam (Compounds)",
//         details: [
//           "Definition and structure of **Samāsa (Compound)** words in Sanskrit.",
//           "Detailed study of **Tatpuruṣa** and its sub-types (e.g., Dvigu, Nañ).",
//           "Mastering the **Bahuvrīhi (possessive)** and **Dvandva (coordinative)** compounds.",
//           "Practical exercise: Breaking down and forming long compound words.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Kṛt & Taddhita Pratyayas and Vākyānvaya",
//         details: [
//           "Introduction to **Kṛt (primary)** and **Taddhita (secondary) suffixes**.",
//           "Syntax analysis (**Vākyānvaya**) - putting grammar into sentence structure.",
//           "Final synthesis: Applying Vyākaraṇa rules to a verse from the **Bhagavad Gītā**.",
//           "Certification and Review: Final examination and professional ethics.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section: Updated for Vyākaraṇa ---
// const vyakaranaVideos = [
//   {
//     title: "Introduction to Pāṇini's Aṣṭādhyāyī",
//     thumbnail: "https://placehold.co/400x200/5D2F6B/FFFFFF?text=Pāṇini+Video",
//     link: "#",
//   },
//   {
//     title: "Mastering Maheśvara Sūtrāṇi in 10 Minutes",
//     thumbnail: "https://placehold.co/400x200/CC9900/5D2F6B?text=Sūtra+Chant",
//     link: "#",
//   },
//   {
//     title: "The Logic of Sandhi: Vowel Combinations",
//     thumbnail: "https://placehold.co/400x200/D4AF37/5D2F6B?text=Sandhi+Rules",
//     link: "#",
//   },
// ];

// // --- Bonus Section: Updated for Vyākaraṇa ---
// const vyakaranaBonus = [
//   "High-Resolution Maheśvara Sūtrāṇi Chart",
//   "Ready-Reckoner for Kāraka & Vibhakti",
//   "Lifetime Access to Pāṇini Sūtra Indexer",
// ];

// // --- Pricing Plans: Updated for Vyākaraṇa ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "foundation",
//     name: "Sūtra Foundation",
//     price: 999,
//     features: [
//       "Months 1 & 2 Modules (Sandhi & Subanta)",
//       "Recorded Video Lectures",
//       "Module-wise Quizzes & Exercises",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Vyākaraṇa Master",
//     price: 1899,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Sūtra Indexer Software Access",
//       "4 Live Pāṭha & Discussion Sessions",
//       "Final Project Review (Gītā Verse)",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Śāstra Scholar",
//     price: 3999,
//     features: [
//       "All Vyākaraṇa Master Features",
//       "4 x 1:1 Personalized Doubt-Clearing",
//       "Advanced Kāraka & Samāsa Module",
//       "Dedicated Telegram Community Support",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Color adjustment for Accordion button
//   const accordionPrimaryColor = "bg-purple-700"; // Deep purple for contrast
//   const accordionHoverColor = "hover:bg-purple-800";

//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-yellow-200">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${accordionPrimaryColor} ${accordionHoverColor}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </motion.button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="overflow-hidden bg-yellow-50 p-4 border-l-4 border-b-4 border-r-4 border-amber-300 rounded-b-xl" // Light Yellow background
//           >
//             <ul className="list-disc pl-5 text-gray-800 space-y-2">
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

// // --- Pricing Card Component ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-purple-800 text-white border-4 border-yellow-400" // Popular card: Deep Purple and Bright Yellow border
//         : "bg-white text-gray-800 border-2 border-amber-200" // Standard card: White and Light Orange border
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-purple-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
//     <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${
//               plan.isPopular ? "text-yellow-400" : "text-amber-500"
//             }`}
//           />
//           <span>{feature}</span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
//         plan.isPopular
//           ? "bg-yellow-400 text-purple-800 hover:bg-yellow-500"
//           : "bg-amber-100 text-amber-700 hover:bg-amber-200"
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function VyakaranaCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Note: navigate function is mocked as it relies on 'react-router-dom'
//     // console.log(
//     //   `Navigating to enrollment for course: vyakarana, plan: ${plan.key}`
//     // );
//     navigate(`/enrollnows?courseId=sanskrit-vyakarana&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-purple-800 leading-snug">
//           The Grammar of the Gods: <br />
//           <span className="text-amber-600">Sanskrit Vyākaraṇa Mastery</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Unlock Pāṇini's *Aṣṭādhyāyī* and learn the perfect structure of the
//           language.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             navigate(
//               `/enrollnows?courseId=sanskrit-vyakarana&   plan=${defaultPlanKey}#enrollment-section`
//           )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Vyākaraṇa Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-purple-700 mb-10">
//             📚 Introductory Lectures & Pāṭha
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vyakaranaVideos.map((video, i) => (
//               <motion.a
//                 href={video.link}
//                 target="_blank"
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
//               >
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://placehold.co/400x200/5D2F6B/FFFFFF?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <BookOpen className="text-white w-14 h-14 bg-purple-700 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-purple-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-purple-700 mb-10 text-center">
//             📘 Complete <span className="text-amber-600">3-Month Vyākaraṇa Curriculum</span>
//           </h2>
//           {vyakaranaCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-amber-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-purple-700 bg-yellow-200 px-3 py-1 rounded-full">
//                     {month.duration}
//                   </span>
//                 </h3>
//               </div>
//               {month.modules.map((module) => (
//                 <CourseAccordionItem
//                   key={module.id}
//                   title={`Module ${module.id}: ${module.title}`}
//                   details={module.details}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Bonuses */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-purple-300 rounded-3xl bg-yellow-100">
//           <h2 className="text-4xl font-serif text-purple-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-amber-600 animate-bounce" /> 🎁 Śāstra Companion Resources
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vyakaranaBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-amber-100 flex items-center justify-center text-center"
//               >
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-purple-700 mb-12 text-center">
//             ✨ Choose Your <span className="text-amber-600">Learning Path</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {pricingPlans.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




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