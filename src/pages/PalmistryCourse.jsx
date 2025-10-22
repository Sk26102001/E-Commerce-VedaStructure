// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, Hand } from "lucide-react"; // Added Hand icon
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" // Assuming this component is general enough
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum for PALMISTRY (Hastrekha)
// const fullCourseCurriculum = [
//   {
//     monthTitle: "✋ Month 1: Foundations of Hastrekha",
//     icon: <Hand className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Palmistry",
//         details: [
//           "History, philosophy, and spiritual roots of Hastrekha.",
//           "Chirognomy (hand shape, fingers) vs. Chiromancy (lines).",
//           "Active vs. Passive Hand: Reading potential vs. current life.",
//           "Four Hand Shapes (Earth, Air, Fire, Water) and personality.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The Seven Mounts (Parvatas)",
//         details: [
//           "Detailed study of the Mounts: Jupiter, Saturn, Sun, Mercury.",
//           "Mounts of Venus and Mars (Lower and Upper).",
//           "The Mount of Moon: Imagination and travel.",
//           "Analyzing size, texture, and prominence of each Mount.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: The Major Lines (Part I)",
//         details: [
//           "The **Life Line (Ayu Rekha)**: Vigor, health, and major life changes.",
//           "The **Head Line (Mastiṣka Rekha)**: Intellect, mindset, and decision-making.",
//           "Interpretation of length, depth, and starting/ending points.",
//           "Introduction to timing events on the Life and Head lines.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The Major Lines (Part II)",
//         details: [
//           "The **Heart Line (Hṛdaya Rekha)**: Emotional life, love, and relationships.",
//           "The Line of Fate (Bhagya Rekha) and career path.",
//           "Analyzing the relationship between the three major lines.",
//           "Common markings (breaks, islands) on major lines.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔍 Month 2: Advanced Techniques & Minor Lines",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Minor Lines and Rings",
//         details: [
//           "The Sun Line (Apollon): Fame, success, and creativity.",
//           "The Health Line (Mercury/Budh Rekha) and vitality.",
//           "Rings of Saturn, Jupiter, and Apollo.",
//           "Via Lasciva, Girdle of Venus, and Simian Line basics.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: The Thumb, Fingers & Nails",
//         details: [
//           "The importance of the Thumb: Logic, will, and determination.",
//           "Analysis of finger length, setting, and philosophical knots.",
//           "Reading nail shapes and health indicators.",
//           "The Bracelet Lines (Rascettes) and their significance.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Primary Markings (Signs)",
//         details: [
//           "Interpretation of positive marks: Squares, Triangles, Tridents, Stars.",
//           "Interpretation of challenging marks: Grids, Islands, Dots, Chains.",
//           "The significance of the Cross and the Mystic Cross.",
//           "How marks influence the Mounts and Lines they appear on.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Relationship & Family Analysis",
//         details: [
//           "Reading the Marriage Lines (Vivah Rekha) and timing.",
//           "Interpreting Children Lines (Santaan Rekha).",
//           "Lines of Influence: People and support in your life.",
//           "Understanding the family ring and attachment lines.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "✨ Month 3: Predictive & Ethical Consulting",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Predictive Timing Techniques",
//         details: [
//           "Advanced method for dating events on the Life and Head lines.",
//           "Identifying specific age markers on the Fate and Heart lines.",
//           "Analyzing Transverse Lines and their impact on future events.",
//           "Practical exercises in life-timing predictions.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Combining Hand Elements",
//         details: [
//           "The Synthesis: Integrating Lines, Mounts, and Hand Shape for a complete reading.",
//           "Analyzing contradictions and dominant features.",
//           "Predicting Health, Wealth, and Career changes.",
//           "Case studies: Reading for different life aspects.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Remedial Palmistry (Upay)",
//         details: [
//           "Understanding how lines can change over time.",
//           "Suggested Upay (remedies) for line afflictions.",
//           "Psychological remedies and life corrections.",
//           "Meditation and focus techniques to improve lines.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Ethical Practice & Final Project",
//         details: [
//           "Ethics of a Palmistry Practitioner: Responsibility and empathy.",
//           "Structuring a professional consultation.",
//           "Tips for charging and building a clientele.",
//           "Final assessment: Full Hand Reading Project.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "Digital Hand Drawing Template Kit",
//     "Comprehensive Mounts & Lines Quick-Reference Ebook",
//     "Lifetime WhatsApp Q&A Group Access",
// ];

// const pricingPlans = [
//     {
//         name: "Basic Reader",
//         price: "₹2,999",
//         features: ["Month 1 Modules", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Hastrekha Master",
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Hand Reading Practicals"],
//         isPopular: true,
//     },
//     {
//         name: "Chirognomy Expert",
//         price: "₹9,999",
//         features: ["All Hastrekha Master Features", "1:1 Mentorship Sessions (4)", "Advanced Predictive Techniques", "Priority Support"],
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
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-orange-100">
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-200 rounded-b-xl"
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
//     <div className="border-b border-orange-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-orange-700 hover:text-orange-800"
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
//           ${plan.isPopular ? 'bg-orange-500 text-white border-4 border-yellow-300' : 'bg-white text-gray-800 border-2 border-orange-100'} 
//           h-full flex flex-col`}
//     >
//         {plan.isPopular && (
//             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-orange-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//                 ✨ MOST POPULAR
//             </div>
//         )}
//         <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-orange-700'}`}>
//             {plan.name}
//         </h3>
//         <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-yellow-300' : 'text-orange-800'}`}>
//             {plan.price}
//         </p>

//         <ul className="space-y-3 flex-grow mb-8">
//             {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                     <CheckCircle2 
//                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-yellow-300' : 'text-orange-600'}`} 
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
//                       ? 'bg-yellow-300 text-orange-800 hover:bg-yellow-400' 
//                       : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
//                   }`}
//             >
//                 Choose Plan
//             </motion.button>
//         </Link>
//     </motion.div>
// );


// export default function PalmistryCourse() {
//   // Updated video content for Palmistry
//   const lectureVideos = [
//     {
//       title: "Basics: The 7 Mounts and Their Meaning",
//       thumbnail: "https://t3.ftcdn.net/jpg/01/21/53/78/360_F_121537841_XN448XoM61gN0kYgC1r13T2Xh52Y4zX1.jpg",
//       link: "https://www.youtube.com/watch?v=palmistry-mounts-intro", // Placeholder link
//     },
//     {
//       title: "Reading the Major 3 Lines: Life, Head, Heart",
//       thumbnail: "https://img.freepik.com/premium-photo/close-up-palm-hand-with-clear-lines-focus-palmistry-concept_1033481-1188.jpg",
//       link: "https://www.youtube.com/watch?v=palmistry-major-lines", // Placeholder link
//     },
//     {
//       title: "Timing Events on the Hand (Predictive Palmistry)",
//       thumbnail: "https://media.istockphoto.com/id/1151606775/photo/close-up-of-a-mans-hand-showing-palm-lines.jpg?s=612x612&w=0&k=20&c=M05i_N7338_21Xo-D5Y3n1e831V5i2G1p1H_Ym0Q-6c=",
//       link: "https://www.youtube.com/watch?v=palmistry-timing", // Placeholder link
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-orange-800 drop-shadow-md leading-snug">
//             Unlock Your Life's Blueprint with <br />
//             <span className="text-orange-600">Ancient Palmistry (Hastrekha)</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Learn Palmistry through Classical Texts, Hand Reading Techniques & Predictive Analysis.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-yellow-300 hover:bg-yellow-500 text-orange-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background */}
//         <div className="absolute w-[600px] h-[600px] bg-orange-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-yellow-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Palmistry Lecture Videos</h2>
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
//                   <Play className="text-white w-14 h-14 bg-orange-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-orange-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
    
//       {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-orange-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Curriculum</span>
//           </h2>

//           {fullCourseCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Month Header */}
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
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
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-yellow-500 to-orange-500 active:scale-95`}
//             >
//               Download Full Curriculum PDF
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>


//       {/* Bonus Section (New Addition) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
//             <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
//                 <Gift className="w-8 h-8 text-orange-600 animate-bounce"/> 
//                 ✋ <span className="font-bold">Bonus Section</span> – Limited Time!
//             </h2>
//             <p className="text-2xl font-bold text-orange-800 mb-6">
//                 🎁 Free Bonuses Worth ₹2,000:
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//                 {bonusItems.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1, duration: 0.5 }}
//                         className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
//                     >
//                         <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                         <span className="font-medium text-gray-700">{item}</span>
//                     </motion.div>
//                 ))}
//             </div>
//             <p className="mt-8 text-lg text-red-500 font-semibold">
//                 *Enroll in the 'Hastrekha Master' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Palmistry Path</span>
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
//           <h2 className="text-4xl font-serif text-orange-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Pooja, Mumbai", text: "I can now read my family's hands with accuracy. This course is transformative!" },
//               { name: "Rajiv, Dubai", text: "The predictive timing techniques are a game-changer. Excellent practical approach." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-yellow-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-orange-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">📩 Contact / Help</h2>
//           <p>💌 Email: support@palmistryacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             ✋ Book Free Consultation
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






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Gift,
  Target, // For focus/destination (Mastery)
  Map, // For Hand Chart/Guidance
  Star, // For Brilliance/Luck
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// --- Configuration ---
// const PRIMARY_COLOR = "bg-emerald-700"; // Deep Emerald Green for Growth/Mysticism
// const ACCENT_COLOR = "text-amber-400"; // Golden accent for Brilliance
// const HOVER_COLOR = "hover:bg-gradient-to-r from-emerald-800 to-green-600";
const PRIMARY_COLOR = "bg-yellow-400";
const ACCENT_COLOR = "text-orange-600";
const HOVER_COLOR = "hover:bg-gradient-to-r from-yellow-400 to-orange-500";


// Detailed 3-Month Curriculum for Palmistry (Hastrekha)
const palmistryCurriculum = [
  {
    monthTitle: "⭐ Month 1: The Anatomy of Destiny (Foundations)",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction, Hand Shapes & Finger Analysis",
        details: [
          "Understanding the active vs. passive hand and its significance.",
          "Categorizing hand types: Earth, Air, Fire, Water and what they reveal about personality.",
          "The meaning of finger length, shape, and placement (phalanges).",
          "Basic preparation: Taking clear hand prints and maintaining an observation journal.",
        ],
      },
      {
        id: 2,
        title: "Week 2: The Major Lines – Heart, Head, and Life",
        details: [
          "In-depth analysis of the Heart Line (emotions, relationships, health of the heart).",
          "Interpreting the Head Line (intellect, mindset, mental health, career aptitude).",
          "Accurately tracing and timing events on the Life Line (vitality, major life changes).",
          "Recognizing breaks, chains, islands, and forks on the major lines.",
        ],
      },
      {
        id: 3,
        title: "Week 3: The Mounts (Planetary Influences)",
        details: [
          "Understanding the Mounts of Venus (love, vitality), Jupiter (ambition, leadership), and Saturn (discipline, wisdom).",
          "Interpreting the Mounts of Sun (fame, success), Mercury (communication, business), and Mars (courage, energy).",
          "The Moon Mount (imagination, intuition) and Plain of Mars (resilience).",
          "How a prominent or flat Mount influences the corresponding line.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Revision and Predictive Timing Fundamentals",
        details: [
          "Connecting lines and mounts to form a basic personality profile.",
          "Techniques for 'timing' future events on the major lines (e.g., the Life Line grid).",
          "Module 1 assessment: Reading a provided hand chart based on foundational principles.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: The Art of Prediction (Intermediate)",
    icon: <Target className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: The Secondary Lines – Fate and Apollo (Sun)",
        details: [
          "In-depth analysis of the Fate Line (career, life path, financial security).",
          "Interpreting the Apollo (Sun) Line (creativity, recognition, public success).",
          "Using the Fate Line to predict career changes and retirement age.",
          "The significance of a double or broken Fate Line.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Minor Lines, Markings, and Travel",
        details: [
          "Mastering the Line of Mercury (health, intuition) and Line of Union (relationships).",
          "Decoding influence lines, worry lines, and the Bracelets (Rascettes).",
          "The meaning of Grilles, Squares, Triangles, and Crosses on different mounts.",
          "Analyzing the travel lines and their link to the Life Line.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Health, Wealth, and Remedial Palmistry",
        details: [
          "Identifying physical health indicators (e.g., color of the hand, nails, Line of Health).",
          "Predicting financial flow using the Mounts of Jupiter, Sun, and the Fate Line.",
          "Introduction to simple astrological/planetary remedies based on palm weak spots.",
          "Case study practice: Diagnosing health vulnerabilities from the hand.",
        ],
      },
      {
        id: 8,
        title: "Week 8: The Thumb, Intuition, and Advanced Timing",
        details: [
          "The power of the Thumb (willpower, logic) and its three sections.",
          "The Ring of Solomon and other intuitive markings (Girdle of Venus).",
          "Advanced timing techniques for marriage and financial breakthrough on the Mounts.",
        ],
      },
    ],
  },
  {
    monthTitle: "🗺️ Month 3: Professional Mastery & Holistic Reading",
    icon: <Map className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Holistic Synthesis: Integrating All Readings",
        details: [
          "The 3-stage reading process: Observation, Analysis, and Synthesis.",
          "Reading the entire hand as a single narrative, avoiding common contradictions.",
          "Practice: Live reading simulation and peer-to-peer analysis.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Ethics, Consultation, and Report Writing",
        details: [
          "The ethical guidelines for a professional palmist (Hastrekhaacharya).",
          "Client consultation skills: Asking powerful questions, managing expectations, and maintaining confidentiality.",
          "Creating professional, detailed, and actionable hand reading reports.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Professional Case Studies & Marketing",
        details: [
          "In-depth analysis of complex hands (forked lines, rare markings, multi-breaks).",
          "How to start your Palmistry practice: Pricing, services, and online presence.",
          "Using social media for ethical astrology and palmistry promotion.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Final Certification and Master Palmist Exam",
        details: [
          "Comprehensive final exam testing knowledge of all Sutras and lines.",
          "Submitting a final, real-world hand reading for certification.",
          "Accessing the Master Palmist Alumni Network for ongoing support.",
        ],
      },
    ],
  },
];

// --- Lecture Videos ---
const palmistryVideos = [
  {
    title: "Mastering the Life Line: Accurate Timing",
    thumbnail: "https://placehold.co/400x200/065F46/FFFFFF?text=Life+Line+Video",
    link: "https://www.youtube.com/watch?v=lifeline_timing_placeholder",
  },
  {
    title: "The Secrets of the Planetary Mounts",
    thumbnail: "https://placehold.co/400x200/10B981/FFFFFF?text=Planetary+Mounts+Video",
    link: "https://www.youtube.com/watch?v=planetary_mounts_placeholder",
  },
  {
    title: "Decoding The Fate Line (Career)",
    thumbnail: "https://placehold.co/400x200/F59E0B/FFFFFF?text=Fate+Line+Career+Video",
    link: "https://www.youtube.com/watch?v=fate_line_career_placeholder",
  },
];


// --- Bonus Items ---
const palmistryBonus = [
  "Printable High-Resolution Hand Chart and Mount Grid (PDF)",
  "50 Real-World Hand Reading Case Studies (E-Book)",
  "Palmistry Professional Consultation Script",
];

// --- Pricing Plans (Updated for Palmistry Theme) ---
const palmistryPricing = [
  {
    id: 1,
    key: "starter",
    name: "Basic Plan ",
    price: 2499,
    features: [
      "Months 1 & 2 Modules (Foundations & Prediction)",
      "Recorded HD Lectures",
      "Mounts and Lines Practice Quizzes",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Master Plan",
    price: 3599,
    features: [
      "All 3 Months Curriculum (Includes Mastery)",
      "Lifetime Course Access",
      "All 3 Exclusive Bonuses",
      "4 Live Group Hand Reading Workshops",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Expert Plan",
    price: 4599,
    features: [
      "All Master Palmist Features",
      "4 x 1:1 Guided Reading Sessions with Mentor",
      "Custom Remedial Palmistry Plan",
      "Priority Email Support",
    ],
    isPopular: false,
  },
];

// --- Accordion for Modules (Reused with new styling) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-emerald-100">
      <motion.button
        className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-amber-200 rounded-b-xl"
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

// --- Pricing Card Component (Reused with new styling) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-orange-500 text-white border-4 border-yellow-300"
        : "bg-white text-gray-800 border-2 border-yellow-200"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-amber-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3
      className={`text-3xl font-bold mb-4 ${
        plan.isPopular ? "text-white" : "text-orange-500"
      }`}
    >
      {plan.name}
    </h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-amber-300" : "text-red-700"
      }`}
    >
      ₹{plan.price.toLocaleString()}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-yellow-300" : "text-yellow-500"
            }`}
          />
          <span
            className={`${
              plan.isPopular ? "text-white/90" : "text-gray-700"
            }`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <motion.button
      onClick={() => onEnroll(plan)}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md ${
        plan.isPopular
          ? "bg-yellow-300 text-red-800 hover:bg-yellow-400"
          : "bg-yellow-300 text-red-700 hover:bg-yellow-400"
      }`}
    >
      Start with {plan.name} 
    </motion.button>
  </motion.div>
);


export default function PalmistryCourseDetails() {
  const navigate = useNavigate();
  const courseTitle = "Palmistry (Hastrekha) Master Course";
  const COURSE_ID = "palmistry"; // Unique Course ID for Palmistry

  const handleEnrollClick = (plan) => {
    // Unique courseId for Palmistry
    navigate(`/enrollnows?courseId=${COURSE_ID}&plan=${plan.key}#enrollment-section`);
  };
  
  // The default enroll button links to the popular plan
  const popularPlan = palmistryPricing.find(p => p.isPopular);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-green-50 to-amber-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-200 via-white to-orange-200">
        <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
          Palmistry (Hastrekha) Master Course: <br />
          <span className="text-orange-500">Decode Your Destiny, Line by Line</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          A comprehensive 3-month program to master the ancient Vedic science of hand analysis for powerful self-discovery and accurate prediction.
        </p>

        <motion.button
          onClick={() => handleEnrollClick(popularPlan)}
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
        >
          👉 Start Your Reading Mastery
        </motion.button>
      </section>

      {/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">🎥 Hand Reading Demonstrations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {palmistryVideos.map((video, i) => (
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
                  // Fallback for image loading issues
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x200/065F46/FFFFFF?text=Palmistry+Video";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14 bg-emerald-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-red-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    
      {/* What You Will Learn (Curriculum) */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-amber-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-black mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Palmistry Curriculum</span>
          </h2>

          {palmistryCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              {/* Block Header */}
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-orange-500 bg-orange-200 px-3 py-1 rounded-full">
                    {month.duration}
                  </span>
                </h3>
              </div>
              <div className="space-y-3">
                {month.modules.map((module) => (
                  <CourseAccordionItem
                    key={module.id}
                    title={`Module ${module.id}: ${module.title}`}
                    details={module.details}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Download Button */}
          <div className="text-center mt-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-yellow-500 to-orange-500 active:scale-95`}
            >
              Download Full Curriculum PDF
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-amber-50">
          <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁{" "}
            <span className="font-bold">Master Palmist Bonuses</span> – Essential Tools!
          </h2>
          <p className="text-2xl font-bold text-red-900 mb-6">
            Unlock exclusive tools to launch your professional practice:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {palmistryBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-emerald-100 flex items-center justify-center text-center"
              >
                <Star className="w-5 h-5 mr-2 text-yellow-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-white to-orange-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-black mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Destiny Decoding Plan</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {palmistryPricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🌟 Professional Palmist Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Neha, Mumbai", text: "The timing techniques are revolutionary. I can now pinpoint major life changes with incredible accuracy, which has delighted my clients." },
              { name: "Ravi, Pune", text: "Before this course, I only knew the major lines. Now, I understand the subtle language of the Mounts and minor markings to give truly holistic readings." },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-yellow-50 rounded-xl shadow-md"
              >
                <p className="text-gray-800 italic">“{t.text}”</p>
                <p className="mt-3 text-orange-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-yellow-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-red-700 mb-8">📩 Get Support</h2>
          <p className="text-lg">💌 Email: oracle@palmistrymastery.com</p>
          <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            🧭 Book Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}