// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, ScrollText, Landmark } from "lucide-react"; // Updated icons for Purana/Itihas
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" 
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';
// // Detailed 3-Month Curriculum for PURANA & ITIHAS
// const fullCourseCurriculum = [
//   {
//     monthTitle: "📜 Month 1: Foundations of Itihasa & Purana",
//     icon: <ScrollText className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Vedic Literature Structure",
//         details: [
//           "Classification of texts: Śruti (Vedas) vs. Smṛti (Puranas, Itihasas).",
//           "Understanding the Hindu Concept of Time: Yugas, Manvantaras, and Kalpas.",
//           "The role of Vyāsa as the compiler and narrator of Puranic knowledge.",
//           "Geographical and cultural context of the narratives.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Defining Purana and the Pañca-Lakṣaṇa",
//         details: [
//           "Etymology and significance of the term 'Purana' (ancient narrative).",
//           "The Five Characteristics (Pañca-Lakṣaṇa): Sarga (creation), Pratisarga (re-creation).",
//           "Vamsha (genealogies of gods/sages) and Manvantara (Ages of Manus).",
//           "Vamshanucharita (Dynastic histories) - the fifth feature and its historical value.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: The Itihasa - Rāmāyaṇa",
//         details: [
//           "Valmiki and the structure of the Adikāvya (First Epic).",
//           "Dharma and Ideal Kingship: The character and actions of Rama.",
//           "Detailed analysis of major Kands (Bālakāṇḍa, Ayodhyākāṇḍa, Yuddhakāṇḍa).",
//           "Comparing different regional versions of the Ramayana.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The Itihasa - Mahābhārata (Part I)",
//         details: [
//           "Vyāsa and the scale of the world's longest epic.",
//           "Core narrative: Kuru Dynasty, Pandavas and Kauravas.",
//           "The critical role of the **Bhagavad Gītā** (its context and core message).",
//           "Understanding the complexities of Dharma, Duty, and Fate in the epic.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔱 Month 2: The Core Mahāpurāṇas and Deities",
//     icon: <Landmark className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Vaishnava Puranas (Vishnu & Bhagavata)",
//         details: [
//           "Focus on Vishnu Purana: Cosmology, Vedic hymns, and the nature of Vishnu.",
//           "The **Bhāgavata Purāṇa** and the emphasis on Bhakti (Devotion).",
//           "Detailed study of the Daśāvatāra (Ten Incarnations) of Vishnu.",
//           "The life and significance of Krishna as portrayed in the Bhagavata.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Shaiva Puranas (Shiva & Skanda)",
//         details: [
//           "The nature of Shiva: Destroyer, Ascetic, and Great Yogi.",
//           "Stories of Shiva's family: Parvati, Ganesha, Kartikeya.",
//           "The significance of the Lingam and Shaiva temple architecture.",
//           "The *Skanda Purana* and its focus on sacred places (Tirthas) and pilgrimage.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Shakta Puranas (Devi Bhagavata, Markandeya)",
//         details: [
//           "Shakti and the concept of Divine Feminine energy.",
//           "The **Devi Māhātmyam** within the Markandeya Purana: The battles of Durga.",
//           "The importance of the Goddess in various forms (Lakshmi, Saraswati, Kali).",
//           "Practices and rituals associated with Shaktism.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Mahābhārata (Part II) and Philosophical Sections",
//         details: [
//           "Detailed analysis of the **Santiparva** (Peace) and **Anushasanaparva** (Instruction).",
//           "Concepts of Moksha (liberation) and the Four Goals of Life (Puruṣārthas).",
//           "The great war (Kurukshetra) as an allegory for internal conflict.",
//           "Study of the social and ethical dilemmas presented in the epic.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "⏳ Month 3: Chronology, Philosophy & Cultural Impact",
//     icon: <Clock className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Puranic Geography and Tirthas (Pilgrimage)",
//         details: [
//           "Mapping the sacred geography: Jambudvīpa and Bharatavarsha.",
//           "The concept of Tirthas (holy crossings) and their significance.",
//           "Case studies of major Tirthas mentioned in the Puranas (Varanasi, Gaya, Prayag).",
//           "Interpreting mythological sites through modern geographical data.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Integrating Darśanas (Philosophical Schools)",
//         details: [
//           "The integration of Sankhya and Yoga philosophy into Puranic narratives.",
//           "The roles of Karma, Rebirth (Samsara), and the pursuit of Moksha.",
//           "Exploring the Advaita Vedanta themes present in select Purana passages.",
//           "How Puranas simplify complex philosophical ideas for the masses.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Puranic Influence on Social and Political Dharma",
//         details: [
//           "Understanding the Varna and Ashrama systems as outlined in the Smritis.",
//           "Rajadharma: Duties and responsibilities of the King (as seen in Mahabharata).",
//           "The concept of *Dharma-Sankata* (Moral Crisis) in Puranic stories.",
//           "Analyzing the evolution of social customs through Puranic commentary.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Cultural Legacy & Final Project",
//         details: [
//           "Influence of Puranas on Classical Indian Art, Dance, and Literature.",
//           "Puranic myths as sources for Temple Iconography and Architecture.",
//           "Modern relevance: Applying Puranic ethical lessons to contemporary life.",
//           "Final assessment: Comparative Study Project of two Puranic narratives or characters.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "Complete Chronological Chart of Yugas and Manvantaras",
//     "Ebook: 108 Key Narratives from the Mahāpurāṇas",
//     "Lifetime Access to our Sanskrit Pronunciation Guide",
// ];

// const pricingPlans = [
//     {
//         name: "Itihasa Seeker",
//         price: "₹2,999",
//         features: ["Month 1 Modules (Itihasa Foundations)", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Purana Master",
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Interactive Discussion Sessions"],
//         isPopular: true,
//     },
//     {
//         name: "Vedic Voyager",
//         price: "₹9,999",
//         features: ["All Purana Master Features", "1:1 Mentorship Sessions (4)", "Advanced Source Text Analysis (Sanskrit)", "Priority Support"],
//         isPopular: false,
//     },
// ];

// /**
//  * Collapsible Accordion component for the "What You Will Learn" section.
//  * Uses Framer Motion for the sliding animation.
//  */
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-indigo-100">
//       {/* Accordion Header */}
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ChevronDown className="w-6 h-6" />
//         </motion.div>
//       </motion.button>

//       {/* Accordion Content (The sliding part) */}
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             // Tweaked transition for a smoother, less bouncy feel
//             transition={{ type: "spring", stiffness: 200, damping: 25 }} 
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-indigo-200 rounded-b-xl"
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


// // Refactored Curriculum Snapshot Accordion (Keeping original file structure for consistency)
// const CurriculumAccordionItem = ({ title, content }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-indigo-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-indigo-700 hover:text-indigo-800"
//       >
//         {title}
//         {open ? <ChevronUp /> : <ChevronDown />}
//       </button>
//       {/* Added AnimatePresence and motion.div for smooth collapse/expand */}
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             key="curriculum-content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             // Using the same smooth spring transition
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//             className="overflow-hidden"
//           >
//             <div className="pb-4 px-6 text-gray-700">{content}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // Component for the pricing card (Updated colors to new theme)
// const PricingCard = ({ plan }) => (
//     <motion.div
//         whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//         className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//           ${plan.isPopular ? 'bg-indigo-700 text-white border-4 border-yellow-300' : 'bg-white text-gray-800 border-2 border-indigo-100'} 
//           h-full flex flex-col`}
//     >
//         {plan.isPopular && (
//             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-indigo-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//                 ✨ BEST VALUE
//             </div>
//         )}
//         <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-indigo-700'}`}>
//             {plan.name}
//         </h3>
//         <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-yellow-300' : 'text-indigo-800'}`}>
//             {plan.price}
//         </p>

//         <ul className="space-y-3 flex-grow mb-8">
//             {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                     <CheckCircle2 
//                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-yellow-300' : 'text-indigo-600'}`} 
//                     />
//                     <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
//                 </li>
//             ))}
//         </ul>

//         <Link to="/enrollnow" className="mt-auto ">
//             <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 className={` w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
//                   ${plan.isPopular 
//                       ? 'bg-yellow-300 text-indigo-800 hover:bg-yellow-400' 
//                       : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
//                   }`}
//             >
//                 Choose Plan
//             </motion.button>
//         </Link>
//     </motion.div>
// );


// // Renamed and updated the main component
// export default function PuranaCourse() {
//   // Updated video content for Purana & Itihas
//   const lectureVideos = [
//     {
//       title: "Introduction to Mahābhārata: Core Characters & Dharma",
//       thumbnail: "https://t4.ftcdn.net/jpg/05/20/35/33/360_F_520353396_i4v5sHj95Q3bB9yT6f4dD52U7e9m8m7a.jpg", // Placeholder image for epic
//       link: "https://www.youtube.com/watch?v=itihasa-intro", // Placeholder link
//     },
//     {
//       title: "The 5 Lakṣaṇas: Defining the Genre of Purana",
//       thumbnail: "https://t3.ftcdn.net/jpg/04/90/13/46/360_F_490134626_r7V7vD9j9tU2oF6g7gG4g0pL4qG9r6xO.jpg", // Placeholder image for ancient text/scroll
//       link: "https://www.youtube.com/watch?v=purana-lakshana", // Placeholder link
//     },
//     {
//       title: "Dashavatara: The Ten Incarnations of Lord Vishnu",
//       thumbnail: "https://t4.ftcdn.net/jpg/04/00/66/92/360_F_400669274_l8094yD8tG0H4U2vT1Q5L4u2zB4e8X6H.jpg", // Placeholder image for Hindu deity
//       link: "https://www.youtube.com/watch?v=dashavatara-study", // Placeholder link
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-indigo-50 to-purple-50 overflow-hidden">
//       {/* Hero Section (Updated content and colors) */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-indigo-800 drop-shadow-md leading-snug">
//             Master the Epic Narratives of <br />
//             <span className="text-purple-600">Purana & Itihas (Ancient Indian History)</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Delve deep into the Ramayana, Mahabharata, and the Mahāpurāṇas for profound philosophical and cultural knowledge.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-yellow-300 hover:bg-yellow-500 text-indigo-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background */}
//         <div className="absolute w-[600px] h-[600px] bg-purple-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-indigo-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section (Updated content) */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">🎥 Sample Course Videos</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {lectureVideos.map((video, i) => (
//               <motion.a
//                 href={video.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
//               >
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-indigo-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-indigo-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
//     
//       {/* What You Will Learn (Updated Curriculum and Colors) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-purple-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-indigo-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Purana & Itihas Curriculum</span>
//           </h2>

//           {fullCourseCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Month Header */}
//               <div className="flex items-center mb-4 border-b-2 border-indigo-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
//                     {month.duration}
//                   </span>
//                 </h3>
//               </div>
//               <div className="space-y-3">
//                 {month.modules.map((module) => (
//                   <CourseAccordionItem
//                     key={module.id}
//                     title={module.title}
//                     details={module.details}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}

//           {/* Optional: Download Button */}
//           <div className="text-center mt-10">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-indigo-500 to-purple-500 active:scale-95`}
//             >
//               Download Full Curriculum PDF
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>


//       {/* Bonus Section (Updated content and colors) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-indigo-300 rounded-3xl bg-yellow-50">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-6 flex justify-center items-center gap-3">
//                 <Gift className="w-8 h-8 text-indigo-600 animate-bounce"/> 
//                 📜 <span className="font-bold">Bonus Section</span> – Limited Time!
//             </h2>
//             <p className="text-2xl font-bold text-indigo-800 mb-6">
//                 🎁 Free Resources Worth ₹2,000:
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//                 {bonusItems.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1, duration: 0.5 }}
//                         className="p-4 bg-white rounded-xl shadow-lg border border-indigo-100 flex items-center justify-center text-center"
//                     >
//                         <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                         <span className="font-medium text-gray-700">{item}</span>
//                     </motion.div>
//                 ))}
//             </div>
//             <p className="mt-8 text-lg text-red-500 font-semibold">
//                 *Enroll in the 'Purana Master' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Updated content and colors) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Puranic Path</span>
//             </h2>
//             <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//                 {pricingPlans.map((plan, index) => (
//                     <PricingCard key={index} plan={plan} />
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* Testimonials (Updated content) */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Aditya, Delhi", text: "The chronological analysis of Puranas gave me a whole new perspective on Indian history. Truly enlightening!" },
//               { name: "Priya, London", text: "I finally understood the philosophical depth of the Mahabharata. The course structure is excellent and easy to follow." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-indigo-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-purple-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact (Updated content and colors) */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-purple-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">📩 Contact / Help</h2>
//           <p>💌 Email: support@itihasa-purana-academy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             📚 Request Free E-Book
//           </motion.button>
//         </div>
//       </section>

//       {/* Custom Animations */}
//       <style jsx>{`
//         .animate-pulse-slow {
//           animation: pulse 8s ease-in-out infinite;
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.8; }
//         }
//       `}</style>
//       
//       {/* <Footer /> */} 
//     </div>
//   );
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
//   ScrollText, // Icon for epics/texts
//   Globe,      // Icon for cosmology
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration: Updated Colors to Yellow/Orange/Teal ---
// const PRIMARY_COLOR = "bg-teal-800"; // Deep Teal/Blue for contrast
// const ACCENT_COLOR = "text-orange-500"; // Vibrant Orange for accents
// const HOVER_COLOR = "hover:bg-gradient-to-r from-teal-900 to-blue-700";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700"; // Orange and Yellow for CTA

// // --- Curriculum: Updated for Puranas & Itihasa (Epics) ---
// const puranaItihasaCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation of Purāṇa & Cosmic Lore",
//     icon: <Globe className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Defining Purāṇa & Itihāsa (History)",
//         details: [
//           "Introduction to the two pillars of post-Vedic tradition: Purāṇa and Itihāsa.",
//           "Understanding the **Pañca Lakṣaṇa** (five characteristics) of a Purāṇa: Sarga, Pratisarga, Vaṁśa, Manvantara, and Vaṁśānucarita.",
//           "The difference between **Śruti** (Vedas), **Smṛti** (Law Texts), and **Itihāsa** (Epics).",
//           "Overview of the major deities and their roles in Puranic lore (Trimūrti).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The 18 Mahāpurāṇas and Tāmasic/Sāttvic Division",
//         details: [
//           "Detailed study of the **18 Mahāpurāṇas** (e.g., Viṣṇu, Bhāgavata, Śiva, Skanda).",
//           "Understanding the traditional classification based on the three Guṇas (Sattva, Rajas, Tamas) and their presiding deities.",
//           "Analysis of the **Brahman, Vaiṣṇava, and Śaiva** Puranic traditions.",
//           "Reading Exercise: Key excerpts from the *Viṣṇu Purāṇa* on creation.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Vedic Cosmology (Sarga & Pratisarga)",
//         details: [
//           "The concept of **Kalpa** (A Day of Brahmā) and **Manvantara** (Age of Manu).",
//           "Detailed study of cosmic cycles: creation (Sarga) and dissolution (Pratisarga).",
//           "Understanding the structure of the **14 Worlds** (Loka) and their inhabitants.",
//           "The four Yugas (Kṛta, Tretā, Dvāpara, Kali) and their characteristics.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Vaṁśa and Vaṁśānucarita (Genealogy)",
//         details: [
//           "Tracing the **Solar (Sūrya Vaṁśa)** and **Lunar (Candra Vaṁśa)** dynasties.",
//           "Significance of key Puranic figures: Manu, Ikṣvāku, Pūru, and Yadu.",
//           "Revision of Puranic literary style and narrative techniques.",
//           "Monthly Project: Charting a major dynastic lineage from a chosen Purāṇa.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: The Great Epic (Rāmāyaṇa)",
//     icon: <ScrollText className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: The Ādikāvya—Vālmīki Rāmāyaṇa: Structure and Dharma",
//         details: [
//           "Introduction to the **Rāmāyaṇa** as the **Ādikāvya** (First Poem).",
//           "Analysis of its **seven Kāṇḍas** (Books) and narrative flow.",
//           "Deep dive into the character of **Rāma** as the embodiment of *Dharma* (Duty).",
//           "Studying the ethical dilemmas presented in the **Ayodhyā Kāṇḍa**.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Character Analysis and Bhakti (Devotion)",
//         details: [
//           "In-depth focus on **Sītā** as a symbol of sacrifice and purity.",
//           "The role of **Hanumān** and the development of the *Bhakti* tradition.",
//           "Comparative study of Rāvaṇa and Kumbhakarṇa's complexities.",
//           "Exploring regional variations and retellings of the Rāmāyaṇa.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: The Philosophy of the Mahābhārata (Part 1)",
//         details: [
//           "Introduction to the **Mahābhārata** as an encyclopedia of *Dharma, Artha, Kāma, and Mokṣa*.",
//           "Overview of the major **Parvas** (Sections) and the Kurukṣetra War setup.",
//           "Analysis of the characters: **Vyāsa, Bhīṣma, Dhṛtarāṣṭra**.",
//           "The political and moral context leading to the great conflict.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: The Philosophy of the Mahābhārata (Part 2)",
//         details: [
//           "Detailed study of the **Pāṇḍavas and Kauravas** and their moral choices.",
//           "The central role of **Draupadī** and the concept of 'strī-dharma' (woman's duty).",
//           "Introduction to the **Bhagavad Gītā** (context within the Bhīṣma Parva).",
//           "Group Discussion: The concept of **Kṣatriya Dharma** in the epic.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔭 Month 3: Advanced Puranic Philosophy & Application",
//     icon: <BarChart2 className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: The Bhagavad Gītā—Karma Yoga",
//         details: [
//           "In-depth analysis of the Gītā's core message: **Karma Yoga** (The Path of Action).",
//           "Understanding **Sāṅkhya** philosophy and its role in Kṛṣṇa’s discourse.",
//           "The definition of *Sthitaprajña* (The Steady Mind) in the second chapter.",
//           "Recitation and meaning of key Gītā verses on non-attachment.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Bhakti Yoga and The Bhāgavata Purāṇa",
//         details: [
//           "Focus on **Bhakti Yoga** (The Path of Devotion) in the Gītā and Purāṇas.",
//           "Study of the **Śrīmad Bhāgavata Mahāpurāṇa** and the life of Kṛṣṇa.",
//           "The significance of the **Rāsa Līlā** and its philosophical interpretation.",
//           "Comparative analysis of Narada Bhakti Sūtras and Puranic devotion.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Puranic Cults, Tīrthas (Pilgrimages) & Festivals",
//         details: [
//           "The study of various Puranic cults: **Gāṇapatya, Saurya, Skanda**.",
//           "The importance of **Tīrthas** (Sacred Places) and their Puranic origins.",
//           "Understanding the context of major festivals (e.g., Shivaratri, Janmashtami) as described in the texts.",
//           "Puranic basis of temple culture and iconography.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Synthesis and Modern Relevance",
//         details: [
//           "Integrating the lessons of Dharma, ethics, and spirituality from the Epics and Purāṇas.",
//           "Discussing the role of these texts in shaping Indian culture and identity.",
//           "Final presentation: Applying a Puranic or Itihāsa ethical lesson to a contemporary problem.",
//           "Comprehensive written and oral assessment.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section: Updated for Puranas & Itihasa ---
// const puranaItihasaVideos = [
//   {
//     title: "The 5 Marks of a Purāṇa: Explained",
//     thumbnail: "https://placehold.co/400x200/008080/FFD700?text=Pancha+Lakshana+Video",
//     link: "#",
//   },
//   {
//     title: "Why the Mahābhārata is an Encyclopedia",
//     thumbnail: "https://placehold.co/400x200/D2691E/FFFFFF?text=Mahabharata+Dharma",
//     link: "#",
//   },
//   {
//     title: "Rāma's Journey: The Sītā Principle",
//     thumbnail: "https://placehold.co/400x200/FFCC00/008080?text=Ramayana+Ethos",
//     link: "#",
//   },
// ];

// // --- Bonus Section: Updated for Puranas & Itihasa ---
// const puranaItihasaBonus = [
//   "Genealogy Charts of Sūrya & Candra Vaṁśa",
//   "PDF Guide to Major Puranic Deities & Iconography",
//   "Audio Library of Key Epic Narratives",
// ];

// // --- Pricing Plans: Updated for Puranas & Itihasa ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Purāṇa Explorer",
//     price: 1999,
//     features: [
//       "Months 1 & 2 Modules (Foundation & Epics)",
//       "Recorded Video & Text Lectures",
//       "Module-wise Quizzes and Reading Materials",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Itihāsa Master",
//     price: 3499,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Epic Audio Library Access",
//       "4 Live Discussion & Q&A Sessions",
//       "Final Project & Certification",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Vedaṅga Scholar", // Name changed to reflect higher level study
//     price: 5499,
//     features: [
//       "All Itihāsa Master Features",
//       "4 x 1:1 Personalized Philosophical Mentoring",
//       "Advanced Comparative Mythology Module",
//       "Dedicated Scholar Community Access",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Using Teal for the button contrast
//   const accordionPrimaryColor = "bg-teal-800";
//   const accordionHoverColor = "hover:bg-teal-900";

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
//         ? "bg-teal-800 text-white border-4 border-orange-400" // Popular: Teal with Bright Orange border
//         : "bg-white text-gray-800 border-2 border-yellow-200" // Standard: White with Light Yellow border
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-orange-400 text-teal-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
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
//           ? "bg-orange-400 text-teal-800 hover:bg-orange-500" // Popular button: Orange/Teal
//           : "bg-yellow-100 text-orange-700 hover:bg-yellow-200" // Standard button: Light Yellow/Orange
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function PuranasItihasaCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Note: navigate function is mocked as it relies on 'react-router-dom'
//     // console.log(
//     //   `Navigating to enrollment for course: purana-itihasa, plan: ${plan.key}`
//     // );
//     navigate(`/enrollnows?courseId=purana-itihas&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-teal-800 leading-snug">
//           The Sagas of Existence: <br />
//           <span className="text-orange-600">Purāṇa and Itihāsa Mastery</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Unravel the cosmic histories, ethical dilemmas, and timeless wisdom of the Rāmāyaṇa,
//           Mahābhārata, and the 18 Mahāpurāṇas.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             handleEnrollClick(
//               pricingPlans.find((p) => p.key === defaultPlanKey)
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-teal-800 px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Itihāsa Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-teal-700 mb-10">
//             📚 Insights on Cosmic Lore & Epics
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {puranaItihasaVideos.map((video, i) => (
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
//                       "https://placehold.co/400x200/008080/FFD700?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <BookOpen className="text-white w-14 h-14 bg-teal-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-teal-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-teal-700 mb-10 text-center">
//             📘 Complete <span className="text-orange-600">3-Month Purāṇa & Itihāsa Curriculum</span>
//           </h2>
//           {puranaItihasaCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-teal-700 bg-yellow-200 px-3 py-1 rounded-full">
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
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-teal-300 rounded-3xl bg-orange-50">
//           <h2 className="text-4xl font-serif text-teal-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Epic Companion Resources
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {puranaItihasaBonus.map((item, index) => (
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
//           <h2 className="text-4xl font-serif text-teal-700 mb-12 text-center">
//             ✨ Choose Your <span className="text-orange-600">Path to Ancient Wisdom</span>
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
  ScrollText, // Icon for epics/texts
  Globe, // Icon for cosmology
  Quote, // Icon for testimonials
  Mail, // Icon for contact
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration: Updated Colors to Yellow/Orange/Teal (Bright & Light) ---
const PRIMARY_COLOR = "bg-teal-800"; // Deep Teal/Blue for contrast headers
const ACCENT_COLOR = "text-orange-500"; // Vibrant Orange for accents
const HOVER_COLOR = "hover:bg-gradient-to-r from-teal-900 to-teal-700"; // Teal hover for contrast buttons
const BUTTON_COLOR_BRIGHT =
  "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"; // Bright Yellow/Orange CTA

// --- Testimonial Data (NEW) ---
const testimonials = [
  {
    name: "Aarav S., Delhi",
    text: "The breakdown of the Pañca Lakṣaṇa made the Purāṇas accessible. I finally grasp the true scale of Vedic cosmology.",
    rating: 5,
  },
  {
    name: "Leela K., London",
    text: "The philosophical mentoring helped me understand the Bhagavad Gītā's Karma Yoga in a modern context. Truly transformative.",
    rating: 5,
  },
  {
    name: "David T., US",
    text: "Analyzing Rāmāyaṇa's Dharma through the different Kāṇḍas was profound. The course structure is excellent.",
    rating: 4.5,
  },
];

// --- Curriculum: Updated for Puranas & Itihasa (Data structure kept for context) ---
const puranaItihasaCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundation of Purāṇa & Cosmic Lore",
    icon: <Globe className="w-5 h-5 mr-3 text-teal-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Defining Purāṇa & Itihāsa (History)",
        details: [
          "Introduction to the two pillars of post-Vedic tradition: Purāṇa and Itihāsa.",
          "Understanding the **Pañca Lakṣaṇa** (five characteristics) of a Purāṇa: Sarga, Pratisarga, Vaṁśa, Manvantara, and Vaṁśānucarita.",
          "The difference between **Śruti** (Vedas), **Smṛti** (Law Texts), and **Itihāsa** (Epics).",
          "Overview of the major deities and their roles in Puranic lore (Trimūrti).",
        ],
      },
      {
        id: 2,
        title: "Week 2: The 18 Mahāpurāṇas and Tāmasic/Sāttvic Division",
        details: [
          "Detailed study of the **18 Mahāpurāṇas** (e.g., Viṣṇu, Bhāgavata, Śiva, Skanda).",
          "Understanding the traditional classification based on the three Guṇas (Sattva, Rajas, Tamas) and their presiding deities.",
          "Analysis of the **Brahman, Vaiṣṇava, and Śaiva** Puranic traditions.",
          "Reading Exercise: Key excerpts from the *Viṣṇu Purāṇa* on creation.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Vedic Cosmology (Sarga & Pratisarga)",
        details: [
          "The concept of **Kalpa** (A Day of Brahmā) and **Manvantara** (Age of Manu).",
          "Detailed study of cosmic cycles: creation (Sarga) and dissolution (Pratisarga).",
          "Understanding the structure of the **14 Worlds** (Loka) and their inhabitants.",
          "The four Yugas (Kṛta, Tretā, Dvāpara, Kali) and their characteristics.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Vaṁśa and Vaṁśānucarita (Genealogy)",
        details: [
          "Tracing the **Solar (Sūrya Vaṁśa)** and **Lunar (Candra Vaṁśa)** dynasties.",
          "Significance of key Puranic figures: Manu, Ikṣvāku, Pūru, and Yadu.",
          "Revision of Puranic literary style and narrative techniques.",
          "Monthly Project: Charting a major dynastic lineage from a chosen Purāṇa.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: The Great Epic (Rāmāyaṇa)",
    icon: <ScrollText className="w-5 h-5 mr-3 text-teal-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: The Ādikāvya—Vālmīki Rāmāyaṇa: Structure and Dharma",
        details: [
          "Introduction to the **Rāmāyaṇa** as the **Ādikāvya** (First Poem).",
          "Analysis of its **seven Kāṇḍas** (Books) and narrative flow.",
          "Deep dive into the character of **Rāma** as the embodiment of *Dharma* (Duty).",
          "Studying the ethical dilemmas presented in the **Ayodhyā Kāṇḍa**.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Character Analysis and Bhakti (Devotion)",
        details: [
          "In-depth focus on **Sītā** as a symbol of sacrifice and purity.",
          "The role of **Hanumān** and the development of the *Bhakti* tradition.",
          "Comparative study of Rāvaṇa and Kumbhakarṇa's complexities.",
          "Exploring regional variations and retellings of the Rāmāyaṇa.",
        ],
      },
      {
        id: 7,
        title: "Week 7: The Philosophy of the Mahābhārata (Part 1)",
        details: [
          "Introduction to the **Mahābhārata** as an encyclopedia of *Dharma, Artha, Kāma, and Mokṣa*.",
          "Overview of the major **Parvas** (Sections) and the Kurukṣetra War setup.",
          "Analysis of the characters: **Vyāsa, Bhīṣma, Dhṛtarāṣṭra**.",
          "The political and moral context leading to the great conflict.",
        ],
      },
      {
        id: 8,
        title: "Week 8: The Philosophy of the Mahābhārata (Part 2)",
        details: [
          "Detailed study of the **Pāṇḍavas and Kauravas** and their moral choices.",
          "The central role of **Draupadī** and the concept of 'strī-dharma' (woman's duty).",
          "Introduction to the **Bhagavad Gītā** (context within the Bhīṣma Parva).",
          "Group Discussion: The concept of **Kṣatriya Dharma** in the epic.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔭 Month 3: Advanced Puranic Philosophy & Application",
    icon: <BarChart2 className="w-5 h-5 mr-3 text-teal-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: The Bhagavad Gītā—Karma Yoga",
        details: [
          "In-depth analysis of the Gītā's core message: **Karma Yoga** (The Path of Action).",
          "Understanding **Sāṅkhya** philosophy and its role in Kṛṣṇa’s discourse.",
          "The definition of *Sthitaprajña* (The Steady Mind) in the second chapter.",
          "Recitation and meaning of key Gītā verses on non-attachment.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Bhakti Yoga and The Bhāgavata Purāṇa",
        details: [
          "Focus on **Bhakti Yoga** (The Path of Devotion) in the Gītā and Purāṇas.",
          "Study of the **Śrīmad Bhāgavata Mahāpurāṇa** and the life of Kṛṣṇa.",
          "The significance of the **Rāsa Līlā** and its philosophical interpretation.",
          "Comparative analysis of Narada Bhakti Sūtras and Puranic devotion.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Puranic Cults, Tīrthas (Pilgrimages) & Festivals",
        details: [
          "The study of various Puranic cults: **Gāṇapatya, Saurya, Skanda**.",
          "The importance of **Tīrthas** (Sacred Places) and their Puranic origins.",
          "Understanding the context of major festivals (e.g., Shivaratri, Janmashtami) as described in the texts.",
          "Puranic basis of temple culture and iconography.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Synthesis and Modern Relevance",
        details: [
          "Integrating the lessons of Dharma, ethics, and spirituality from the Epics and Purāṇas.",
          "Discussing the role of these texts in shaping Indian culture and identity.",
          "Final presentation: Applying a Puranic or Itihāsa ethical lesson to a contemporary problem.",
          "Comprehensive written and oral assessment.",
        ],
      },
    ],
  },
];

// --- Video Section: Updated for Puranas & Itihasa ---
const puranaItihasaVideos = [
  {
    title: "The 5 Marks of a Purāṇa: Explained",
    thumbnail: "https://placehold.co/400x200/008080/FFD700?text=Pancha+Lakshana+Video",
    link: "#",
  },
  {
    title: "Why the Mahābhārata is an Encyclopedia",
    thumbnail: "https://placehold.co/400x200/D2691E/FFFFFF?text=Mahabharata+Dharma",
    link: "#",
  },
  {
    title: "Rāma's Journey: The Sītā Principle",
    thumbnail: "https://placehold.co/400x200/FFCC00/008080?text=Ramayana+Ethos",
    link: "#",
  },
];

// --- Bonus Section: Updated for Puranas & Itihasa ---
const puranaItihasaBonus = [
  "Genealogy Charts of Sūrya & Candra Vaṁśa",
  "PDF Guide to Major Puranic Deities & Iconography",
  "Audio Library of Key Epic Narratives",
];

// --- Pricing Plans: Updated for Puranas & Itihasa ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Purāṇa Explorer",
    price: 1999,
    features: [
      "Months 1 & 2 Modules (Foundation & Epics)",
      "Recorded Video & Text Lectures",
      "Module-wise Quizzes and Reading Materials",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Itihāsa Master",
    price: 3499,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Epic Audio Library Access",
      "4 Live Discussion & Q&A Sessions",
      "Final Project & Certification",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Vedaṅga Scholar", // Name changed to reflect higher level study
    price: 5499,
    features: [
      "All Itihāsa Master Features",
      "4 x 1:1 Personalized Philosophical Mentoring",
      "Advanced Comparative Mythology Module",
      "Dedicated Scholar Community Access",
    ],
    isPopular: false,
  },
];

// --- Accordion Component (Color changed to Teal for contrast) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Using Teal for the button contrast
  const accordionPrimaryColor = "bg-teal-700"; // Moderate Teal
  const accordionHoverColor = "hover:bg-teal-800";

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

// --- Pricing Card Component (Colors changed to Teal/Orange/Yellow) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-teal-700 text-white border-4 border-orange-400" // Popular: Teal with Bright Orange border
        : "bg-white text-gray-800 border-2 border-yellow-200" // Standard: White with Light Yellow border
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-orange-400 text-teal-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-400" : "text-orange-600"
      }`}
    >
      ₹{plan.price.toLocaleString()}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-orange-400" : "text-yellow-600"
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
          ? "bg-yellow-400 text-teal-800 hover:bg-yellow-500" // Popular button: Yellow/Teal
          : "bg-orange-100 text-teal-700 hover:bg-orange-200" // Standard button: Light Orange/Teal
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
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 165, 0, 0.2)" }}
      className="p-8 bg-white rounded-xl shadow-lg border border-orange-200 flex flex-col items-center text-center"
    >
      <Quote className="w-8 h-8 mb-4 text-teal-500" />
      <p className="text-gray-700 italic flex-grow">“{text}”</p>
      <div className="flex my-3 text-orange-500">
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
      <p className="mt-2 font-semibold text-teal-700">— {name}</p>
    </motion.div>
  );
};


// --- Main Page Component ---
export default function PuranasItihasaCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // Note: navigate function is mocked as it relies on 'react-router-dom'
    // console.log(
    // 	 `Navigating to enrollment for course: purana-itihasa, plan: ${plan.key}`
    // );
    navigate(`/enrollnows?courseId=purana-itihas&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-teal-800 leading-snug">
          The Sagas of Existence: <br />
          <span className="text-orange-600">Purāṇa and Itihāsa Mastery</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Unravel the cosmic histories, ethical dilemmas, and timeless wisdom of the Rāmāyaṇa,
          Mahābhārata, and the 18 Mahāpurāṇas.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleEnrollClick(
              pricingPlans.find((p) => p.key === defaultPlanKey)
            )
          }
          className={`mt-8 ${BUTTON_COLOR_BRIGHT} text-teal-800 px-8 py-3 rounded-full font-semibold shadow-xl`}
        >
          👉 Enroll in the Itihāsa Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-teal-700 mb-10">
            📚 Insights on Cosmic Lore & Epics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {puranaItihasaVideos.map((video, i) => (
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
                      "https://placehold.co/400x200/008080/FFD700?text=Video+Placeholder";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <BookOpen className="text-white w-14 h-14 bg-teal-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-teal-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-teal-700 mb-10 text-center">
            📘 Complete <span className="text-orange-600">3-Month Purāṇa & Itihāsa Curriculum</span>
          </h2>
          {puranaItihasaCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-teal-700 bg-yellow-200 px-3 py-1 rounded-full">
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
          <h2 className="text-4xl font-serif text-teal-700 mb-12">
            🌟 Hear From Our <span className="text-orange-600">Scholars</span>
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
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-teal-300 rounded-3xl bg-orange-50">
          <h2 className="text-4xl font-serif text-teal-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Epic Companion Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {puranaItihasaBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-yellow-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-teal-600" /> {/* Changed to Teal */}
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-teal-700 mb-12 text-center">
            ✨ Choose Your <span className="text-orange-600">Path to Ancient Wisdom</span>
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
        <div className="max-w-3xl mx-auto text-center p-8 border-4 border-solid border-teal-400 rounded-3xl bg-yellow-50 shadow-xl">
          <h2 className="text-4xl font-serif text-teal-700 mb-8 flex justify-center items-center gap-3">
            <Mail className="w-8 h-8 text-orange-600" /> Get in Touch
          </h2>
          <p className="text-xl font-medium text-gray-700 mb-6">
            Have questions about the Puranic concepts, course structure, or philosophical mentoring?
          </p>
          <p className="text-lg font-semibold text-teal-800">
            📧 Email Us: <a href="mailto:itihasaschool@example.com" className="text-orange-700 hover:underline">itihasaschool@example.com</a>
          </p>
          <p className="text-lg font-semibold text-teal-800 mt-2">
            📞 WhatsApp Support: +91 98765 43210
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`mt-8 ${BUTTON_COLOR_BRIGHT} text-teal-800 px-8 py-3 rounded-full font-bold shadow-lg`}
          >
            Send Your Inquiry
          </motion.button>
        </div>
      </section>

    </div>
  );
}