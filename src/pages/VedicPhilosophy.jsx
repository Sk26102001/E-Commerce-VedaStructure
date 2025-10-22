// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, Sunrise } from "lucide-react"; // Replaced Hand with Sunrise (Vedic Symbol)
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" // Assuming this component is general enough
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';
// // Detailed 3-Month Curriculum for VEDIC PHILOSOPHY (Sanatana Dharma)
// const fullCourseCurriculum = [
//   {
//     monthTitle: "🕉️ Month 1: The Foundations (Śruti & Smṛti)",
//     icon: <Sunrise className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to the Vedas and Upanishads",
//         details: [
//           "Classification of the Vedas (Rk, Yajur, Sama, Atharva) and their components (Samhitas, Brahmanas, Aranyakas).",
//           "The role of the Upanishads (Vedanta) as the philosophical culmination.",
//           "Understanding Śruti (revealed truth) and Smṛti (remembered tradition).",
//           "The importance of Guru-Shishya Parampara (lineage).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Core Metaphysical Concepts",
//         details: [
//           "Detailed study of **Brahman** (Absolute Reality) - Nirguna vs. Saguna.",
//           "**Atman** (The Individual Self) - its nature and relationship with Brahman ('Tat Tvam Asi').",
//           "The concept of **Māyā** (Illusion) and the phenomenal world (Jagat).",
//           "Exploring the nature of existence: Sat, Chit, Ananda (Truth, Consciousness, Bliss).",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Karma, Dharma, and Samsara",
//         details: [
//           "The immutable Law of **Karma**: Action, reaction, and residual impressions (Samskaras).",
//           "Understanding the Four Goals of Human Life (**Purusharthas**): Dharma, Artha, Kama, Moksha.",
//           "The cycle of birth and death (**Samsara**) and the path to liberation (**Moksha**).",
//           "The principles of *Rta* (cosmic order) and *Satya* (truth).",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The Gunas and Psychological Dynamics",
//         details: [
//           "Detailed analysis of the Three Gunas: **Sattva** (goodness), **Rajas** (passion), **Tamas** (inertia).",
//           "How the Gunas influence personality, mindset, diet, and action.",
//           "Applying Guna theory for self-improvement and spiritual elevation.",
//           "Vedic cosmology: Understanding the Lokas (planes of existence).",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "📚 Month 2: The Six Darśanas (Schools of Thought)",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Nyaya (Logic) and Vaisheshika (Atomism)",
//         details: [
//           "Nyaya: The path to knowledge (**Pramanas** - perception, inference, comparison, testimony).",
//           "Vaisheshika: The nature of reality through six categories (**Padarthas**).",
//           "Understanding causality and the concept of *dharma* in these schools.",
//           "Critical comparison of Western logic with Nyaya's structure.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Samkhya (Dualism) and Classical Yoga",
//         details: [
//           "Samkhya philosophy: The dualism of **Purusha** (Consciousness) and **Prakriti** (Matter).",
//           "The 24 Tattvas (categories of reality) in Samkhya.",
//           "Yoga Darshana: Patanjali's integration of Samkhya's theory.",
//           "The psychological framework: Citta, Buddhi, Ahamkara (Mind, Intellect, Ego).",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: The Path of Practice: Ashtanga Yoga",
//         details: [
//           "Detailed study of the Eight Limbs: **Yama** (restraints) and **Niyama** (observances).",
//           "The physical and energetic practices: Asana, Pranayama, and Pratyahara (Sense Withdrawal).",
//           "The internal path: Dharana (Concentration), Dhyana (Meditation), and **Samadhi** (Blissful Absorption).",
//           "Practical techniques for integrating Yoga Sutras into daily mental life.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Mimamsa (Duty) and Schools of Vedanta",
//         details: [
//           "Purva Mimamsa: Focus on *Dharma* and the authority of Vedic ritual (Yajna).",
//           "Uttara Mimamsa (Vedanta): Overview of the three major Bhashyas (Commentaries).",
//           "Introduction to **Advaita** (Non-Dualism) of Shankaracharya.",
//           "Introduction to Vishishtadvaita (Qualified Non-Dualism) and Dvaita (Dualism).",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "✨ Month 3: Practical Vedanta (The Bhagavad Gita)",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Karma Yoga: The Yoga of Action",
//         details: [
//           "Context of the Gita: Arjuna's dilemma and the importance of appropriate action.",
//           "The principle of **Nishkama Karma** (Action without attachment to results).",
//           "Defining *Svadharma* (one's own duty) in modern life.",
//           "Overcoming lethargy and distraction (Tamas and Rajas) through purposeful work.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Bhakti Yoga: The Yoga of Devotion",
//         details: [
//           "The nature of *Ishvara* (The Supreme Lord) as described by Krishna.",
//           "Understanding the various forms of devotion and their goal.",
//           "The qualities of a true devotee (**Bhakta**).",
//           "Practical devotional practices for integrating the Divine into daily life.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Jnana Yoga: The Yoga of Knowledge",
//         details: [
//           "The methodology of Self-Inquiry (**Vichara**).",
//           "The state of the **Stitha-prajna** (Man of Steady Wisdom).",
//           "Analysis of the Self (Atman) as distinct from the body, mind, and intellect.",
//           "Techniques of *Sravana, Manana, Nididhyasana* (Hearing, Reflection, Meditation).",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Synthesis and Modern Living",
//         details: [
//           "The harmony of Karma, Bhakti, and Jnana Yogas (The Triple Path).",
//           "Applying Vedic ethical principles (Ahimsa, Satya, Asteya) to contemporary challenges.",
//           "The Vedic view on wealth, relationships, and success (Artha and Kama).",
//           "Final assessment: Integrating the Six Darshanas and the Gita's teachings for a realized life.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "PDF of 108 Essential Sanskrit Mantras with Meanings",
//     "Complete Bhagavad Gita Verse-by-Verse Ebook (Translation & Commentary)",
//     "Lifetime Q&A Access in the Vedanta Study Circle",
// ];

// const pricingPlans = [
//     {
//         name: "Tattva Beginner",
//         price: "₹2,999",
//         features: ["Month 1 Modules (Foundations)", "Recorded Lectures & Slides", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Darśana Scholar",
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Vedanta Study Sessions"],
//         isPopular: true,
//     },
//     {
//         name: "Vedanta Master",
//         price: "₹9,999",
//         features: ["All Darśana Scholar Features", "1:1 Mentorship Sessions (4)", "Advanced Upanishadic Texts", "Priority Support & Certification"],
//         isPopular: false,
//     },
// ];

// /**
//  * Collapsible Accordion component for the "What You Will Learn" section.
//  * Uses Framer Motion for the sliding animation.
//  * (Retained from original code structure)
//  */
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-purple-100">
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-purple-200 rounded-b-xl"
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


// // Component for the pricing card
// const PricingCard = ({ plan }) => (
//     <motion.div
//         whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//         className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//           ${plan.isPopular ? 'bg-purple-600 text-white border-4 border-amber-300' : 'bg-white text-gray-800 border-2 border-purple-100'} 
//           h-full flex flex-col`}
//     >
//         {plan.isPopular && (
//             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-amber-400 text-purple-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//                 ✨ MOST POPULAR
//             </div>
//         )}
//         <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-indigo-700'}`}>
//             {plan.name}
//         </h3>
//         <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-amber-300' : 'text-indigo-800'}`}>
//             {plan.price}
//         </p>

//         <ul className="space-y-3 flex-grow mb-8">
//             {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                     <CheckCircle2 
//                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-amber-300' : 'text-indigo-600'}`} 
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
//                       ? 'bg-amber-300 text-purple-800 hover:bg-amber-400' 
//                       : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
//                   }`}
//             >
//                 Choose Plan
//             </motion.button>
//         </Link>
//     </motion.div>
// );


// export default function VedicPhilosophy() { // Component Name Change
//   // Updated video content for Vedic Philosophy
//   const lectureVideos = [
//     {
//       title: "Brahman, Atman, Maya: The Three Pillars of Vedanta",
//       thumbnail: "https://images.unsplash.com/photo-1549487922-8356c9a29d95?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of a meditative statue or OM symbol
//       link: "https://www.youtube.com/watch?v=vedanta-pillars-intro", // Placeholder link
//     },
//     {
//       title: "Understanding the Gunas (Sattva, Rajas, Tamas) in Daily Life",
//       thumbnail: "https://images.unsplash.com/photo-1512402927289-e1e488d0526e?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of a balanced stone stack or nature
//       link: "https://www.youtube.com/watch?v=vedanta-gunas-practical", // Placeholder link
//     },
//     {
//       title: "The Eight Limbs of Yoga (Ashtanga Yoga) Explained",
//       thumbnail: "https://images.unsplash.com/photo-1544367520-2c700947d79b?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image of a person in meditation/yoga pose
//       link: "https://www.youtube.com/watch?v=vedanta-ashtanga-yoga", // Placeholder link
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-indigo-50 to-purple-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-purple-200 via-indigo-100 to-purple-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-indigo-800 drop-shadow-md leading-snug">
//             Awakening to Truth: The Complete <br />
//             <span className="text-purple-600">Vedic Philosophy Course</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Dive into the Upanishads, Bhagavad Gita, and the Six Darshanas to master the art of living.
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
//               className="bg-amber-300 hover:bg-amber-500 text-indigo-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background - Updated Colors */}
//         <div className="absolute w-[600px] h-[600px] bg-purple-300/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-amber-200/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">🎥 Essential Teachings Preview</h2>
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
//                   <Play className="text-white w-14 h-14 bg-purple-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-indigo-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
//     
//       {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-purple-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-indigo-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Curriculum</span>
//           </h2>

//           {fullCourseCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Month Header - Updated colors */}
//               <div className="flex items-center mb-4 border-b-2 border-purple-300 pb-2">
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

//           {/* Optional: Download Button - Updated colors */}
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


//       {/* Bonus Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-purple-300 rounded-3xl bg-indigo-50">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-6 flex justify-center items-center gap-3">
//                 <Gift className="w-8 h-8 text-purple-600 animate-bounce"/> 
//                 🕉️ <span className="font-bold">Bonus Section</span> – Limited Time!
//             </h2>
//             <p className="text-2xl font-bold text-purple-800 mb-6">
//                 🎁 Free Resources Worth ₹2,000:
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//                 {bonusItems.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1, duration: 0.5 }}
//                         className="p-4 bg-white rounded-xl shadow-lg border border-purple-100 flex items-center justify-center text-center"
//                     >
//                         <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                         <span className="font-medium text-gray-700">{item}</span>
//                     </motion.div>
//                 ))}
//             </div>
//             <p className="mt-8 text-lg text-red-500 font-semibold">
//                 *Enroll in the 'Darśana Scholar' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-purple-100 via-indigo-50 to-purple-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Path to Moksha</span>
//             </h2>
//             <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//                 {pricingPlans.map((plan, index) => (
//                     <PricingCard key={index} plan={plan} />
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Anjali, Bengaluru", text: "The study of the Darśanas brought incredible clarity. I finally understood the *why* behind Karma Yoga." },
//               { name: "David, London", text: "The modules on Brahman and Atman are profound. This course is essential for anyone interested in true self-knowledge." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-purple-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-purple-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-purple-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">📩 Contact / Help</h2>
//           <p>💌 Email: support@vedantaacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             💡 Book Free Consultation
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
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   BookOpen,
//   Gift,
//   Sun,
//   Target,
//   BarChart2,
//   FlaskConical, // Icon for Logic/Nyaya
//   Brain, // Icon for Consciousness/Vedanta
//   Sigma, // Icon for Synthesis/Mimamsa
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration ---
// // Color Code: Light Yellow (Accents/Background) and Orange (Primary Action/Highlight)
// const PRIMARY_COLOR = "bg-orange-800"; // Deep Orange/Brown for dark contrast sections
// const ACCENT_COLOR = "text-yellow-400"; // Light Yellow for highlights
// const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-900 to-amber-700";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-orange-900"; // Orange/Yellow Gradient Button

// // --- Curriculum (Vedic Philosophy Course: The Six Schools) ---
// const vedicPhilosophyCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation – Vedas and the Cosmic View",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Vedic Texts & Puruṣārthas",
//         details: [
//           "Defining Darśana (viewpoint) and the authority of the Vedas (Āstika schools).",
//           "The Four Goals of Human Life: Dharma (Duty), Artha (Wealth), Kāma (Desire), Mokṣa (Liberation).",
//           "Overview of the Upaniṣads as the philosophical foundation (Vedānta).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Sāṃkhya Darśana – The Science of Discrimination",
//         details: [
//           "Analyzing the Tattvas (categories) and the dualism of Puruṣa (Consciousness) and Prakṛti (Matter).",
//           "Detailed study of the three Guṇas (Sattva, Rajas, Tamas) and their manifestation in the universe.",
//           "The process of cosmic evolution (Sarga) from the Sāṃkhya perspective.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Yoga Darśana – The Practice of Control",
//         details: [
//           "In-depth study of Patañjali's Yoga Sūtras and the meaning of Yogah Citta Vr̥tti Nirodhaḥ.",
//           "The eight limbs of Yoga (Aṣṭāṅga Yoga) as a pathway to Samādhi (Enlightenment).",
//           "Prāṇāyāma and Pratyāhāra: The philosophical and practical control of breath and senses.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Synthesis: Sāṃkhya-Yoga and the Path to Liberation",
//         details: [
//           "Comparison of the cosmological and psychological models of Sāṃkhya and Yoga.",
//           "Understanding the bondage (Bandha) caused by the non-discrimination of Puruṣa and Prakṛti.",
//           "Practical exercise: Applying the Yamas and Niyamas in modern ethical dilemmas.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔬 Month 2: Logical and Natural Philosophy (Nyāya & Vaiśeṣika)",
//     icon: <FlaskConical className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Nyāya Darśana – The School of Logic",
//         details: [
//           "The four Pramāṇas (means of valid knowledge): Perception, Inference, Comparison, and Testimony.",
//           "The five-limbed structure of Indian syllogism (Nyāya Sūtra) for dialectic argument.",
//           "Identifying different types of fallacies (Hetvābhāsa) in reasoning.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Vaiśeṣika Darśana – The School of Particulars",
//         details: [
//           "The six Padārthas (categories of existence): Substance, Quality, Action, Generality, Particularity, and Inherence.",
//           "The atomic theory (Paramāṇuvāda) of Vaiśeṣika and its comparison with modern science.",
//           "Understanding the nature of time (Kāla), space (Diś), and mind (Manas) as substances.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Mīmāṃsā Darśana – The Philosophy of Ritual",
//         details: [
//           "Pūrva Mīmāṃsā: The focus on Dharma through injunctions (Vidhi) and prohibitions (Niṣedha) of the Vedas.",
//           "The eternal nature of sound (Śabda-nityatva) and the self-validity of Vedic knowledge (Svataḥ Prāmāṇya).",
//           "The doctrine of Apūrva (unseen potency) generated by ritual action (Karma).",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Inter-School Debates and Epistemology",
//         details: [
//           "Case studies on how different schools justify the means of knowledge (Pramāṇas).",
//           "Analysis of the arguments of the Nāstika (non-Vedic) schools: Cārvāka, Jainism, Buddhism.",
//           "Monthly project: Constructing a logical argument using the Nyāya method.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🧠 Month 3: Vedānta – The Ultimate Truth of Consciousness",
//     icon: <Brain className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Advaita Vedānta – Non-dualism",
//         details: [
//           "Śaṅkara's philosophy: The identity of Ātman (Self) and Brahman (Ultimate Reality).",
//           "The doctrine of Māyā (Illusion) and the concept of three levels of reality (Satya-traya).",
//           "Analysis of the Mahāvākyas (Great Sayings): Tat Tvam Asi, Ahaṁ Brahmāsmi.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Viśiṣṭādvaita & Dvaita – Qualified and Pure Dualism",
//         details: [
//           "Rāmānuja's Viśiṣṭādvaita: Brahman as qualified by jīvas (souls) and jagat (world).",
//           "Madhvācārya's Dvaita: The complete difference between God, soul, and matter.",
//           "The role of Bhakti (Devotion) and Karma in achieving Mokṣa across the Vedānta schools.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Applied Philosophy – Ethics and Modernity",
//         details: [
//           "Integrating the concept of Karma into contemporary ethical frameworks.",
//           "Vedic philosophy on environmentalism, social justice, and the collective Dharma.",
//           "Comparative analysis: Vedic vs. Western philosophical traditions (e.g., Plato, Kant).",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Final Synthesis and Scholarly Presentation",
//         details: [
//           "Review of all six Darśanas and the common themes: Self, Suffering, and Liberation.",
//           "Final research project: A scholarly paper defending a position from one Darśana.",
//           "Certification and guidance for future philosophical studies.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section ---
// const vedicPhilosophyVideos = [
//   {
//     title: "Sāṃkhya: Puruṣa and the Guṇas Explained",
//     thumbnail: "https://placehold.co/400x200/F97316/FFFBEB?text=Sankhya+Gunas+Video",
//     link: "#",
//   },
//   {
//     title: "The Power of Nyāya Logic and Syllogism",
//     thumbnail: "https://placehold.co/400x200/F59E0B/451A03?text=Nyaya+Logic+Video",
//     link: "#",
//   },
//   {
//     title: "Advaita vs. Dvaita: The Debate on Reality",
//     thumbnail: "https://placehold.co/400x200/FFBF00/78350F?text=Vedanta+Debate+Clip",
//     link: "#",
//   },
// ];

// // --- Bonus Section ---
// const vedicPhilosophyBonus = [
//   "Digital Compendium of Darśana Sūtras (Selections)",
//   "Glossary of 100+ Essential Sanskrit Philosophical Terms",
//   "Lifetime Access to Scholarly Lectures Archive",
// ];

// // --- Pricing Plans ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "The Seeker (Jijñāsu)",
//     price: 1699,
//     features: [
//       "Months 1 & 2 Modules (Sāṃkhya, Yoga, Logic, Mīmāṃsā)",
//       "Recorded Video Lectures",
//       "Module-wise Quizzes",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Philosophy Master (Ācārya)",
//     price: 2999,
//     features: [
//       "All 3 Months Curriculum (Includes Vedānta)",
//       "Lifetime Scholarly Access",
//       "4 Live Philosophical Discussion Sessions",
//       "Final Project Review & Certification",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Professional Guide (Upadeṣṭā)",
//     price: 5499,
//     features: [
//       "All Philosophy Master Features",
//       "4 x 1:1 Personalized Mentoring Sessions",
//       "Ethics in Teaching Module",
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
// export default function VedicPhilosophyCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Update navigate URL to reflect Vedic Philosophy Course
//     navigate(`/enrollnows?courseId=vedic-philosophy&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
//           The Six Pillars of Wisdom: <br />
//           <span className="text-orange-600">Mastering Vedic Philosophy (Ṣaḍdarśana)</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Explore the profound schools of Hindu thought from Yoga and Logic to the pinnacle of Vedānta.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             navigate(
//               `/enrollnows?courseId=vedic-philosophy&plan=${defaultPlanKey}#enrollment-section`
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-orange-900 px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Philosophy Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-orange-700 mb-10">
//             🎥 Foundational Philosophical Concepts
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vedicPhilosophyVideos.map((video, i) => (
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
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Vedic Philosophy Curriculum</span>
//           </h2>
//           {vedicPhilosophyCurriculum.map((month, index) => (
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
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Essential Philosophical Resources
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vedicPhilosophyBonus.map((item, index) => (
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
//             ✨ Choose Your <span className={ACCENT_COLOR}>Path to Philosophical Enlightenment</span>
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