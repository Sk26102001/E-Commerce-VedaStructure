// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, Headset } from "lucide-react"; // Changed Hand to Headset and kept BookOpen
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" // Assuming this component is general enough
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum for SANSKRIT (Reading + Chanting)
// const fullCourseCurriculum = [
//   {
//     monthTitle: "🔠 Month 1: Devanagari Script & Foundations",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Devavāṇī (The Divine Language)",
//         details: [
//           "History, significance, and spiritual value of Sanskrit.",
//           "Overview of the **Devanagari script** and its scientific structure.",
//           "Proper sitting posture and breathing techniques for chanting (Prāṇāyāma basics).",
//           "Introduction to basic chanting rules and intonation.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Mastery of Vowels (Svaras)",
//         details: [
//           "Learning all **short (Hrasva) and long (Dīrgha) vowels**.",
//           "Practice writing and recognizing vowel signs (Mātrās).",
//           "Understanding **Anusvāra (ं)** and **Visarga (ः)**.",
//           "Pronunciation practice for perfect phonetic accuracy.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Consonants (Vyañjanas) - Part I",
//         details: [
//           "Detailed study of the first three Varga-s (Ka, Ca, Ṭa groups).",
//           "Understanding the five places of articulation (mouth, throat, palate, etc.).",
//           "Introduction to the concept of **Mahāprāṇa** (aspirated) and **Alpaprāṇa** (unaspirated) sounds.",
//           "Reading and writing simple 2-letter words.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Consonants & Conjuncts (Samyuktākṣaras)",
//         details: [
//           "Detailed study of the remaining Varga-s (Ta, Pa groups) and unclassified consonants.",
//           "Mastering **Samyuktākṣaras** (conjuncts): The building blocks of Sanskrit reading (e.g., kṣa, jña, tra).",
//           "Extensive practice reading complex words and short sentences.",
//           "Recitation of the full Varna-Mala (Alphabet) with correct accent.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎶 Month 2: Basic Grammar & Chanting Fundamentals",
//     icon: <Headset className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Noun Declensions (Śabda Rūpa) - Masculine",
//         details: [
//           "Introduction to **Linga (Gender)** and **Vachana (Number)**.",
//           "The eight **Vibhakti-s (Cases)** and their function.",
//           "Declining the common **'Deva' (god)** and **'Bāla' (boy)** roots in all cases.",
//           "Practice constructing basic sentences using case endings.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Noun Declensions - Feminine & Neuter",
//         details: [
//           "Declining feminine 'Rāmā' (Goddess) and neuter 'Phala' (fruit) roots.",
//           "Introduction to the use of **Pronouns (Sarvanāma)**: Aham, Tvam, Saḥ/Sā/Tat.",
//           "Understanding the role of **Avyayas (Indeclinables)** like Cha (and), Api (also).",
//           "Reading simple moral verses (Subhāṣitas).",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Verb Conjugation (Kriyā Rūpa) - Present Tense",
//         details: [
//           "The concept of **Lakāras (Tenses/Moods)**.",
//           "Mastering the **Laṭ Lakāra (Present Tense)** for both Parasmaipada and Ātmanepada verbs (e.g., Bhū, Gam, Paṭh).",
//           "Understanding **Puruṣa (Person)** and its usage in sentences.",
//           "Proper rhythmic chanting of verb tables.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Sandhi (Phonetic Combination) - Svara & Vyañjana",
//         details: [
//           "Detailed study of **Svara Sandhi (Vowel Combination)** rules (e.g., Dīrgha, Guṇa, Vṛddhi).",
//           "Introduction to **Vyañjana Sandhi (Consonant Combination)** (e.g., First Varna change).",
//           "Identifying and breaking down Sandhi in written text.",
//           "Chanting practice focusing on smooth, Sandhi-adhering transitions.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🕉️ Month 3: Classical Texts & Advanced Chanting",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Visarga Sandhi & Shloka Structure",
//         details: [
//           "Mastery of **Visarga Sandhi** rules and their exceptions.",
//           "Introduction to **Padapāṭha (word-by-word break)** and **Saṃhitāpāṭha (combined text)**.",
//           "Understanding the structure of a typical Sanskrit verse (**Śloka**).",
//           "Practice reciting the first chapter of a simple text (e.g., Śrīmad Bhagavad Gītā).",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Introduction to Chandas (Meters)",
//         details: [
//           "Understanding the concept of **Laghu (Short)** and **Guru (Long)** syllables.",
//           "Detailed study of the most common meter: **Anuṣṭup Chandas** (The Meter of the Epics).",
//           "Practice reciting verses from the Rāmāyaṇa/Mahābhārata with metrical precision.",
//           "Introduction to other simple meters (Upajāti, Indravajra).",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Deconstruction & Translation",
//         details: [
//           "Techniques for deconstructing complex Sanskrit sentences (Anvaya).",
//           "Translating 10 selected verses from the Bhagavad Gita or a famous Stotra.",
//           "Exploring the roots of Vedic chanting (**Udatta/Anudatta/Svarita**).",
//           "Practice chanting with proper Vedic accent markings (optional).",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Final Recitation Project & Linguistic Depth",
//         details: [
//           "Final assessment: Full recitation and reading of a chosen text section.",
//           "Introduction to **Kārakas (Syntactic Roles)** for deeper reading comprehension.",
//           "Discussion on the practical application of Sanskrit in Yoga and Āyurveda.",
//           "Ethics of chanting and preserving the purity of the Veda Mārga.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "Complete Devanagari Practice Workbook (PDF)",
//     "30 Essential Sanskrit Mantras with Audio Guides",
//     "Annotated Digital Copy of *Hitopadesha* (Beginner Text)",
// ];

// const pricingPlans = [
//     {
//         name: "Akshara Reader",
//         price: "₹2,999",
//         features: ["Month 1 Modules (Reading Focus)", "Recorded Lectures", "Devanagari Practice Sheets"],
//         isPopular: false,
//     },
//     {
//         name: "Mantra Master",
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "4 Live Chanting Correction Sessions"],
//         isPopular: true,
//     },
//     {
//         name: "Vedic Scholar",
//         price: "₹9,999",
//         features: ["All Mantra Master Features", "1:1 Grammar Mentorship (4 Sessions)", "Advanced Vedic Accent Guide", "Priority Support"],
//         isPopular: false,
//     },
// ];

// /**
//  * Collapsible Accordion component for the "What You Will Learn" section.
//  * Uses Framer Motion for the sliding animation.
//  */
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-purple-100">
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-purple-200 rounded-b-xl"
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


// // Refactored Curriculum Snapshot Accordion for smooth animation
// const CurriculumAccordionItem = ({ title, content }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-purple-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-purple-700 hover:text-purple-800"
//       >
//         {title}
//         {open ? <ChevronUp /> : <ChevronDown />}
//       </button>
//       {/* Added AnimatePresence and motion.div for smooth collapse/expand */}
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             key="curriculum-content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             // Using the same smooth spring transition
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="overflow-hidden"
//           >
//             <div className="pb-4 px-6 text-gray-700">{content}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // Component for the pricing card
// const PricingCard = ({ plan }) => (
//     <motion.div
//         whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//         className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//           ${plan.isPopular ? 'bg-indigo-600 text-white border-4 border-purple-300' : 'bg-white text-gray-800 border-2 border-purple-100'} 
//           h-full flex flex-col`}
//     >
//         {plan.isPopular && (
//             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-purple-400 text-indigo-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//                 ✨ MOST POPULAR
//             </div>
//         )}
//         <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-indigo-700'}`}>
//             {plan.name}
//         </h3>
//         <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-purple-300' : 'text-indigo-800'}`}>
//             {plan.price}
//         </p>

//         <ul className="space-y-3 flex-grow mb-8">
//             {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                     <CheckCircle2 
//                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-purple-300' : 'text-indigo-600'}`} 
//                     />
//                     <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
//                 </li>
//             ))}
//         </ul>

//         <Link to="/enrollnow" className="mt-auto ">
//             <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 className={` w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
//                   ${plan.isPopular 
//                       ? 'bg-purple-300 text-indigo-800 hover:bg-purple-400' 
//                       : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
//                   }`}
//             >
//                 Choose Plan
//             </motion.button>
//         </Link>
//     </motion.div>
// );


// export default function SanskritReadingCourse() {
//   // Updated video content for Sanskrit
//   const lectureVideos = [
//     {
//       title: "Vowels and Consonants: The Perfect Pronunciation",
//       thumbnail: "https://t3.ftcdn.net/jpg/05/29/73/19/360_F_529731972_Ym27xJ0f1w1x3c7z3g5j34d9t6v5d4r6.jpg", // Placeholder image for Sanskrit/Devanagari
//       link: "https://www.youtube.com/watch?v=sanskrit-akshara-mala", // Placeholder link
//     },
//     {
//       title: "The Magic of Sandhi: Joining Words for Fluid Chanting",
//       thumbnail: "https://img.freepik.com/premium-photo/close-up-manuscript-sanskrit-writing_1033481-1188.jpg", // Placeholder image
//       link: "https://www.youtube.com/watch?v=sanskrit-sandhi", // Placeholder link
//     },
//     {
//       title: "Recitation Practice: Bhagavad Gita Chapter 1 Shlokas",
//       thumbnail: "https://media.istockphoto.com/id/1151606775/photo/ancient-indian-vedic-scripts.jpg?s=612x612&w=0&k=20&c=M05i_N7338_21Xo-D5Y3n1e831V5i2G1p1H_Ym0Q-6c=", // Placeholder image
//       link: "https://www.youtube.com/watch?v=sanskrit-gita-chanting", // Placeholder link
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-purple-50 to-indigo-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-purple-200 via-indigo-100 to-purple-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-indigo-800 drop-shadow-md leading-snug">
//             Master the <span className="text-purple-600">Devavāṇī</span>: <br />
//             The Sanskrit (Reading + Chanting) Course
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Learn to Read the Devanagari Script, Grasp Basic Grammar, and Chant Mantras with Perfect Pronunciation.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-purple-300 hover:bg-purple-500 text-indigo-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Listen to Preview Chant
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background */}
//         <div className="absolute w-[600px] h-[600px] bg-indigo-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-purple-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">📖 Sanskrit Learning Videos</h2>
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
//                   <Play className="text-white w-14 h-14 bg-indigo-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-indigo-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
    
//       {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-indigo-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-indigo-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Curriculum</span>
//           </h2>

//           {fullCourseCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Month Header */}
//               <div className="flex items-center mb-4 border-b-2 border-indigo-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
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

//           {/* Optional: Download Button */}
//           <div className="text-center mt-10">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-indigo-500 to-purple-500 active:scale-95`}
//             >
//               Download Full Curriculum PDF
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>


//       {/* Bonus Section (New Addition) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-indigo-300 rounded-3xl bg-purple-50">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-6 flex justify-center items-center gap-3">
//                 <Gift className="w-8 h-8 text-indigo-600 animate-bounce"/> 
//                 📜 <span className="font-bold">Bonus Section</span> – Limited Time Offer!
//             </h2>
//             <p className="text-2xl font-bold text-indigo-800 mb-6">
//                 🎁 Free Resources Worth ₹2,000:
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//                 {bonusItems.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1, duration: 0.5 }}
//                         className="p-4 bg-white rounded-xl shadow-lg border border-purple-100 flex items-center justify-center text-center"
//                     >
//                         <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                         <span className="font-medium text-gray-700">{item}</span>
//                     </motion.div>
//                 ))}
//             </div>
//             <p className="mt-8 text-lg text-red-500 font-semibold">
//                 *Enroll in the 'Mantra Master' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-purple-100 via-indigo-50 to-purple-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Sanskrit Learning Path</span>
//             </h2>
//             <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//                 {pricingPlans.map((plan, index) => (
//                     <PricingCard key={index} plan={plan} />
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Priya, Delhi", text: "I can now read the Bhagavad Gita Shlokas on my own. The pronunciation guide is flawless!" },
//               { name: "Arjun, USA", text: "The deep dive into Sandhi and the grammar basics made the language structure clear. A truly amazing course." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-purple-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-indigo-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-indigo-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">📩 Contact / Help</h2>
//           <p>💌 Email: support@sanskritgurukul.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             📜 Book Free Course Consultation
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
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   BookOpen,
//   Gift,
//   Sun,
//   Target,
//   BarChart2,
//   BookA, // Icon for alphabet/grammar
//   Mic2, // Icon for chanting/pronunciation
//   Feather, // Icon for writing/texts
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration: Updated Colors to Yellow/Orange/Maroon ---
// const PRIMARY_COLOR = "bg-red-800"; // Deep Maroon/Red for strong contrast
// const ACCENT_COLOR = "text-orange-500"; // Vibrant Orange for accents
// const HOVER_COLOR = "hover:bg-red-900";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700"; // Orange and Yellow for CTA

// // --- Curriculum: Updated for Sanskrit (Reading + Chanting) ---
// const sanskritCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation of Sound & Script (Varna & Svara)",
//     icon: <BookA className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: The Devanāgarī Script & Vowels (Svara)",
//         details: [
//           "Introduction to **Devanāgarī**—the script of the Gods—and its logic.",
//           "Mastering all **vowels (Svara)**, including short and long sounds (Hrasva & Dīrgha).",
//           "Correct pronunciation practice (Uccāraṇa) for perfect sound fidelity.",
//           "Writing practice: Basic alphabet drills and stroke order.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Consonants (Vyañjana) & Articulation Points",
//         details: [
//           "In-depth study of **consonants (Vyañjana)** based on their articulation points (Kaṇṭha, Tālu, etc.).",
//           "Understanding the role of **Aspirates** and **Retroflex** sounds unique to Sanskrit.",
//           "Introduction to **Anusvāra** (M) and **Visarga** (H) and their rules.",
//           "Chanting practice: Basic mantras for sound vibration.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Compound Letters (Saṃyuktākṣara) & Sandhi Rules (Part 1)",
//         details: [
//           "Decoding **compound letters** (conjuncts) for accurate reading of complex words.",
//           "Introduction to **Sandhi** (euphonic combination) at the basic level.",
//           "Practicing simple **Vowel Sandhi** for smoother reading flow.",
//           "Reading Practice: Basic Subhāṣitas (good sayings) and simple ślokas.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Basic Declensions & Noun Cases (Vibhakti)",
//         details: [
//           "Introduction to the concept of **Gender (Liṅga)**: Masculine, Feminine, Neuter.",
//           "Understanding the **eight Vibhaktis** (cases) and their roles (e.g., Nominative, Accusative).",
//           "Revision of script and pronunciation with a timed reading assessment.",
//           "Chanting Project: Memorization and chanting of a simple Gāyatrī Mantra.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: Applied Reading & Metrical Chanting (Chandas)",
//     icon: <Mic2 className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Verbal Roots (Dhātu) and Basic Tenses",
//         details: [
//           "Introduction to the **Dhātu** (verbal root) system—the heart of Sanskrit vocabulary.",
//           "Conjugation of basic verbs in **Lat Laṭ** (Present Tense).",
//           "Understanding **Paraasmaipada** and **Ātmanepada** verb forms.",
//           "Translation Exercise: Simple sentences using Nouns and Verbs.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Introduction to Vedic/Chanting Metrics (Chandas)",
//         details: [
//           "Understanding the importance of **Svara** (accent/tone) in chanting.",
//           "Introduction to **Anuṣṭubh Chandas** (the most common meter for Epics/Purāṇas).",
//           "Practical session on maintaining **rhythm and meter** while chanting.",
//           "Chanting Practice: Chapters 1-2 of the Bhagavad Gītā in *Anuṣṭubh*.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Advanced Sandhi (Part 2) & Reading Skills",
//         details: [
//           "Mastering complex **Viṣarga Sandhi** (visarga euphony).",
//           "Techniques for mentally separating Sandhi compounds during reading.",
//           "Reading from original texts without transliteration for faster comprehension.",
//           "Live Group Reading: The first sarga (chapter) of the Vālmīki Rāmāyaṇa.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: The Power of Compound Words (Samāsa)",
//         details: [
//           "Introduction to **Samāsa** (compound words) and their types (e.g., Dvandva, Tatpuruṣa).",
//           "Strategies for breaking down long Sanskrit compounds into meaningful parts.",
//           "Reading Practice: Selected verses from the *Hitopadeśa* (fables).",
//           "Chanting Project: The *Śiva Maṅgala Aṣṭaka* (in simple meter).",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔭 Month 3: Reading Classical Texts & Advanced Chanting",
//     icon: <Feather className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Decoding Famous Texts—Bhagavad Gītā",
//         details: [
//           "Applying all reading rules to chapters 3-4 of the **Bhagavad Gītā**.",
//           "Word-for-word analysis (Padaccheda) and basic sentence structure (Anvaya).",
//           "Advanced chanting techniques for Gītā recitation.",
//           "Discussion on philosophical terms: *Karma, Jñāna, Bhakti*.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Reading from the Vedas & Upaniṣads",
//         details: [
//           "Introduction to the **Udatta, Anudatta, and Svarita** Vedic accents (tonal markings).",
//           "Reading and chanting selected verses from the *Isha Upaniṣad*.",
//           "Understanding the specific sound texture (Dhivani) of Vedic chanting.",
//           "Comparative study: Classical Sanskrit vs. Vedic Sanskrit differences.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: The Fundamentals of Verse Composition",
//         details: [
//           "Overview of major meters: **Indravajrā, Upendravajrā, Śārdūlavikrīḍita**.",
//           "Analyzing the relationship between meter, rhythm, and emotional expression (Rasa).",
//           "Case Study: Reading and appreciating Kālidāsa’s *Meghadūtam*.",
//           "Review: Open Q&A on all aspects of Grammar and Sandhi.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Capstone Project & Fluent Recitation",
//         details: [
//           "Final Project: Recording a flawless, metrically correct recitation of a chosen text (e.g., Gītā Chapter 15).",
//           "Self-Correction techniques for reading and chanting errors.",
//           "Resources and path for lifelong Sanskrit study (e.g., Pāṇini).",
//           "Final assessment and certification ceremony.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section: Updated for Sanskrit ---
// const sanskritVideos = [
//   {
//     title: "How to Pronounce the Rarest Sanskrit Sounds",
//     thumbnail: "https://placehold.co/400x200/991B1B/FBBF24?text=Sanskrit+Pronunciation",
//     link: "#",
//   },
//   {
//     title: "The Logic of Devanāgarī Compound Letters",
//     thumbnail: "https://placehold.co/400x200/F59E0B/991B1B?text=Devanagari+Script",
//     link: "#",
//   },
//   {
//     title: "Chanting the Anuṣṭubh Meter: A Step-by-Step Guide",
//     thumbnail: "https://placehold.co/400x200/991B1B/FBBF24?text=Chanting+Practice",
//     link: "#",
//   },
// ];

// // --- Bonus Section: Updated for Sanskrit ---
// const sanskritBonus = [
//   "High-Resolution Devanāgarī Varna-Mala Chart",
//   "Audio Dictionary of 100 Key Nouns and Verbs",
//   "Lifetime Access to Chanting Meter Guide",
// ];

// // --- Pricing Plans: Updated for Sanskrit ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Śloka Reader",
//     price: 1499,
//     features: [
//       "Months 1 & 2 Modules (Foundation & Applied Reading)",
//       "Recorded Video Lectures & PDFs",
//       "Module-wise Quizzes and Reading Materials",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Sanskrit Master",
//     price: 2299,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Audio Dictionary & Chanting Guide Access",
//       "4 Live Chanting Correction Sessions",
//       "Final Recitation Project Review",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Vedic Chanter",
//     price: 4499,
//     features: [
//       "All Sanskrit Master Features",
//       "4 x 1:1 Personalized Accent & Tone Sessions",
//       "Advanced Vedic Accent Module",
//       "Access to Sanskrit Scholars Forum",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Using Maroon for the button contrast
//   const accordionPrimaryColor = "bg-red-800";
//   const accordionHoverColor = "hover:bg-red-900";

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
//             className="overflow-hidden bg-yellow-50 p-4 border-l-4 border-b-4 border-r-4 border-orange-300 rounded-b-xl" // Light Yellow/Orange inner background
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
//         ? "bg-red-800 text-white border-4 border-orange-400" // Popular: Maroon with Bright Orange border
//         : "bg-white text-gray-800 border-2 border-yellow-200" // Standard: White with Light Yellow border
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-orange-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
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
//               plan.isPopular ? "text-orange-400" : "text-yellow-600"
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
//           ? "bg-orange-400 text-red-800 hover:bg-orange-500" // Popular button: Orange/Maroon
//           : "bg-yellow-100 text-orange-700 hover:bg-yellow-200" // Standard button: Light Yellow/Orange
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function SanskritCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Note: navigate function is mocked as it relies on 'react-router-dom'
//     // console.log(
//     //   `Navigating to enrollment for course: sanskrit-reading-chanting, plan: ${plan.key}`
//     // );
//     navigate(`/enrollnows?courseId=sanskrit-chanting&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-red-800 leading-snug">
//           The Language of the Gods: <br />
//           <span className="text-orange-600">Sanskrit Reading & Chanting Mastery</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Learn to flawlessly read **Devanāgarī** and master the **metrical chanting (Chandas)** of
//           the Bhagavad Gītā, Upaniṣads, and classic texts.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             handleEnrollClick(
//               pricingPlans.find((p) => p.key === defaultPlanKey)
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-red-800 px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Sanskrit Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">
//             🎥 Foundational Practice & Sound Guides
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {sanskritVideos.map((video, i) => (
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
//                       "https://placehold.co/400x200/991B1B/FBBF24?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-red-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
//             📘 Complete <span className="text-orange-600">3-Month Sanskrit Curriculum</span>
//           </h2>
//           {sanskritCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-red-700 bg-yellow-200 px-3 py-1 rounded-full">
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
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-orange-50">
//           <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Essential Sanskrit Resources
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {sanskritBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-yellow-100 flex items-center justify-center text-center"
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
//           <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
//             ✨ Choose Your <span className="text-orange-600">Path to Fluent Recitation</span>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`mt-8 ${BUTTON_COLOR} text-red-700 px-8 py-3 rounded-full font-bold shadow-lg`}
          >
            Send Your Inquiry
          </motion.button>
        </div>
      </section>
    </div>
  );
}