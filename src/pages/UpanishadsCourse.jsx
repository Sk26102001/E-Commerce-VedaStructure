// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift } from "lucide-react"; 
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" 
// import { Link,useNavigate  } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// // Updated colors to a spiritual/Vedanta theme (Indigo/Amber)
// // const PRIMARY_COLOR = 'bg-indigo-600'; 
// // const ACCENT_COLOR = 'text-amber-400';
// // const HOVER_COLOR = 'hover:bg-gradient-to-r from-indigo-600 to-purple-700';
// // const BORDER_COLOR = 'border-purple-300';
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum for the Upanishads (Vedanta)
// const fullCourseCurriculum = [
//     {
//         monthTitle: "🧘 Month 1: The Foundation of Shruti",
//         icon: <BookOpen className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 1,
//                 title: "Week 1: Introduction to Vedanta",
//                 details: [
//                     "Meaning of *Upanishad* and its place in the Vedas (Shruti).",
//                     "The *Mahavakyas* (Great Utterances) and their significance.",
//                     "Core concepts: *Brahman* (Ultimate Reality) and *Atman* (The Self).",
//                     "Historical context and the concept of *Advaita* (Non-Duality).",
//                 ],
//             },
//             {
//                 id: 2,
//                 title: "Week 2: The Ishopanishad (Isha Upanishad)",
//                 details: [
//                     "Detailed study of the first principal Upanishad.",
//                     "Harmony of Action (*Karma*) and Knowledge (*Jnana*).",
//                     "The principle of *Tyaga* (Renunciation) and living in the world.",
//                     "Mantra-by-mantra analysis of the text.",
//                 ],
//             },
//             {
//                 id: 3,
//                 title: "Week 3: Kena Upanishad: The Ultimate Controller",
//                 details: [
//                     "Inquiry into the source of mind, speech, sight, and hearing.",
//                     "The story of the Devas and the Yaksha (The Spirit).",
//                     "Understanding Brahman as the power behind all phenomenal powers.",
//                     "The nature of perception vs. transcendental knowledge.",
//                 ],
//             },
//             {
//                 id: 4,
//                 title: "Week 4: Katha Upanishad (Part I): Nachiketa's Quest",
//                 details: [
//                     "The story of Nachiketa and Yama, the Lord of Death.",
//                     "The three boons sought by Nachiketa.",
//                     "Inquiry into the nature of the Self (*Atman*) after death.",
//                     "The difference between *Shreya* (Good) and *Preya* (Pleasant).",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "🕉️ Month 2: Deep Dive into the Principal Texts",
//         icon: <Star className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 5,
//                 title: "Week 5: Katha Upanishad (Part II): The Chariot Analogy",
//                 details: [
//                     "The Chariot Analogy: Atman as the Master, Intellect as the Driver, Mind as the Reins.",
//                     "Control of the senses for spiritual realization.",
//                     "The hierarchy of existence: Senses to the Unmanifest.",
//                     "Method to attain the state of Yoga.",
//                 ],
//             },
//             {
//                 id: 6,
//                 title: "Week 6: Mundaka Upanishad: Higher vs. Lower Knowledge",
//                 details: [
//                     "*Para Vidya* (Higher Knowledge of Brahman) and *Apara Vidya* (Lower Knowledge of Vedas).",
//                     "The futility of rituals without self-knowledge.",
//                     "The allegory of the two birds in the same tree (Jivatman and Paramatman).",
//                     "The path to immortality through truth and austerity.",
//                 ],
//             },
//             {
//                 id: 7,
//                 title: "Week 7: Mandukya Upanishad: States of Awareness",
//                 details: [
//                     "Detailed study of the three states: Waking (*Jagrat*), Dream (*Swapna*), and Deep Sleep (*Sushupti*).",
//                     "The Fourth State (*Turiya*): Pure Consciousness.",
//                     "Analysis of the sacred syllable *Om* and its correlation with the four states.",
//                     "Significance of the Mandukya in the Advaita tradition.",
//                 ],
//             },
//             {
//                 id: 8,
//                 title: "Week 8: Prashna Upanishad: Six Core Questions",
//                 details: [
//                     "Study of the six disciples' questions to Pippalada.",
//                     "The origin of Creation (*Prajapati*) and the material world.",
//                     "The nature and importance of *Prana* (Life-Force).",
//                     "Understanding the final question on the Supreme Person.",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "✨ Month 3: Synthesis & Practical Vedanta",
//         icon: <Clock className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 9,
//                 title: "Week 9: Taittiriya Upanishad: The Five Sheaths (*Koshas*)",
//                 details: [
//                     "Analysis of the five layers of human existence: Annamaya to Anandamaya.",
//                     "The method of progressing from the gross body to the bliss body.",
//                     "The importance of food, mind, and wisdom.",
//                     "Teaching on the nature of Brahman as Truth, Knowledge, and Infinity.",
//                 ],
//             },
//             {
//                 id: 10,
//                 title: "Week 10: The Philosophy of Advaita",
//                 details: [
//                     "In-depth analysis of the four great *Mahavakyas* (e.g., *Aham Brahmasmi*).",
//                     "Introduction to Adi Shankara's foundational commentaries (*Bhashyas*).",
//                     "Understanding the concept of *Maya* (Illusion) and the world's reality.",
//                     "The path of *Neti Neti* (Not this, Not this).",
//                 ],
//             },
//             {
//                 id: 11,
//                 title: "Week 11: Sadhana Chatushtaya and Practice",
//                 details: [
//                     "The Fourfold Means to Liberation: *Viveka*, *Vairagya*, *Shatsampat*, and *Mumukshutva*.",
//                     "Practical self-enquiry (*Atma Vichara*) techniques.",
//                     "Role of the Guru and the tradition (*Sampradaya*).",
//                     "Meditation practices based on the Upanishadic truths.",
//                 ],
//             },
//             {
//                 id: 12,
//                 title: "Week 12: Applied Wisdom & Final Project",
//                 details: [
//                     "Integrating Upanishadic wisdom into daily professional and personal life.",
//                     "Ethical living, social responsibility, and the vision of oneness.",
//                     "Final assessment: Comprehensive project on a Principal Upanishad.",
//                     "Certification and path to further Vedanta studies.",
//                 ],
//             },
//         ],
//     },
// ];

// const bonusItems = [
//     "Sanskrit & Philosophical Terms Glossary Ebook",
//     "Annotated PDF of the Ten Principal Upanishads",
//     "Guided Meditation Series for Turiya State Practice",
// ];

// const pricingPlans = [
//     {id: 1,
//     key: "starter",
//         name: "The Seeker",
//         price: 3999,
//         features: ["Month 1 Modules (Foundations)", "Recorded Lectures & Transcripts", "Basic Forum Access"],
//         isPopular: false,
//     },
//     { id: 2,
//     key: "master",
//         name: "Vedanta Scholar",
//         price: 4999,
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "4 Live Q&A Sessions with Scholar"],
//         isPopular: true,
//     },
//     {  id: 3,
//     key: "mentor",
//         name: "Moksha Master",
//         price: 5999,
//         features: ["All Vedanta Scholar Features", "1:1 Private Mentorship Sessions (6)", "Advanced Shankara's Bhashyas Study", "Priority Support"],
//         isPopular: false,
//     },
// ];

// const lectureVideos = [
//     {
//       title: "Introduction: Brahman, Atman, and the Mahavakyas",
//       thumbnail: "https://media.istockphoto.com/id/1324749323/photo/buddhist-statue-and-books-on-the-desk.jpg?s=612x612&w=0&k=20&c=L1P74L1bV0d-2rR8Ew1Yl8Qv-5e5r6j9s7dJ9d6gA2k=", // Placeholder image
//       link: "https://www.youtube.com/watch?v=vedanta-intro", // Placeholder link
//     },
//     {
//       title: "Key Teachings of the Katha Upanishad (Chariot Analogy)",
//       thumbnail: "https://t3.ftcdn.net/jpg/05/27/72/06/360_F_527720680_R3d516N6K4791L0x7rQk2c15gY5Z9t7O.jpg", // Placeholder image
//       link: "https://www.www.youtube.com/watch?v=katha-upanishad", // Placeholder link
//     },
//     {
//       title: "Understanding the 4 States of Consciousness (Mandukya)",
//       thumbnail: "https://media.istockphoto.com/id/1148197775/photo/man-doing-padmasana-or-lotus-pose-and-meditating.jpg?s=612x612&w=0&k=20&c=w6tL-9V_Xk11E7e3p3M82p1x9h6bL6_s4d5cR2E0eL4=", // Placeholder image
//       link: "https://www.youtube.com/watch?v=mandukya-states", // Placeholder link
//     },
//   ];

// const testimonials = [
//     { name: "Priya, Bengaluru", text: "The systematic breakdown of the *Koshas* was enlightening. This course is a true path to self-discovery!" },
//     { name: "Suresh, Delhi", text: "I finally understood the profound meaning of the *Mahavakyas*. The structure is perfect for beginners and advanced students." },
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


// // Refactored Curriculum Snapshot Accordion for smooth animation (kept for structure)
// const CurriculumAccordionItem = ({ title, content }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-purple-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-indigo-700 hover:text-indigo-800"
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
//           ${plan.isPopular ? 'bg-indigo-600 text-white border-4 border-amber-400' : 'bg-white text-gray-800 border-2 border-purple-100'}
//           h-full flex flex-col`}
//     >
//         {plan.isPopular && (
//             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-amber-400 text-indigo-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//                 ✨ MOKSHA PATH
//             </div>
//         )}
//         <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-indigo-700'}`}>
//             {plan.name}
//         </h3>
//         {/* <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-amber-400' : 'text-indigo-800'}`}>
//             {plan.price}
//         </p> */}
//          <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

//         <ul className="space-y-3 flex-grow mb-8">
//             {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                     <CheckCircle2
//                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-amber-400' : 'text-indigo-600'}`}
//                     />
//                     <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
//                 </li>
//             ))}
//         </ul>

//         {/* <Link to="/enrollnow" className="mt-auto ">
//             <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 className={` w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
//                   ${plan.isPopular
//                       ? 'bg-amber-400 text-indigo-800 hover:bg-amber-500'
//                       : 'bg-purple-100 text-indigo-700 hover:bg-purple-200'
//                   }`}
//             >
//                 Choose Plan
//             </motion.button>
//         </Link> */}
//             <motion.button
//               onClick={() => onEnroll(plan)}
//               whileTap={{ scale: 0.98 }}
//               className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
//                 plan.isPopular
//                   ? "bg-amber-300 text-sky-800 hover:bg-amber-400"
//                   : "bg-sky-100 text-sky-700 hover:bg-sky-200"
//               }`}
//             >
//               Master with {plan.name}
//             </motion.button>
//     </motion.div>
// );


// export default function UpnishadsCourse() {
//     const navigate = useNavigate();
  
//     const handleEnrollClick = (plan) => {
//       navigate(`/enrollnows?courseId=upanishads&plan=${plan.key}#enrollment-section`);
//     };
  
//     const defaultPlanKey =
//       pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;
  
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
//             Discover the Ultimate Truth: A Deep Study of the <br />
//             <span className="text-amber-500">Upanishads (Vedanta)</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Systematic Course on the Core 10 Upanishads, Brahman-Atman Philosophy & Practical Application.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             {/* <Link to="/enrollnow">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-amber-500 to-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link> */}
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       onClick={() =>
//                         navigate(
//                           `/enrollnows?courseId=upanishads&plan=${defaultPlanKey}#enrollment-section`
//                         )
//                       }
//                       className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
//                     >
//                       👉 Enroll Now
//                     </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-amber-300 hover:bg-amber-500 text-indigo-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background - Updated Colors */}
//         <div className="absolute w-[600px] h-[600px] bg-indigo-300/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-purple-400/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-indigo-700 mb-8">🎥 Essential Vedanta Lecture Videos</h2>
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
//               <div className="flex items-center mb-4 border-b-2 border-purple-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full">
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
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-amber-500 to-indigo-600 active:scale-95`}
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
//                 <Gift className="w-8 h-8 text-amber-500 animate-bounce"/>
//                 🕉️ <span className="font-bold">Bonus Section</span> – Limited Time!
//             </h2>
//             <p className="text-2xl font-bold text-indigo-800 mb-6">
//                 🎁 Free Bonuses Worth ₹4,000:
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
//                 *Enroll in the 'Vedanta Scholar' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-purple-100 via-indigo-50 to-purple-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-indigo-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Vedanta Path</span>
//             </h2>
//             <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//                 {/* {pricingPlans.map((plan, index) => (
//                     <PricingCard key={index} plan={plan} />
//                 ))} */}
//                      {pricingPlans.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
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
//             {testimonials.map((t, i) => (
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
//           <p>💌 Email: support@vedanta-path.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-amber-500 to-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🧘 Book Free Consultation
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
  Sun,
  Target,
  BarChart2,
  Zap, // New icon for 'Light'
  Heart, // New icon for 'Self'
  Infinity, // New icon for 'Ultimate Reality'
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
    <p className="text-5xl font-extrabold mb-6 text-yellow-400">₹{plan.price.toLocaleString()}</p>

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

// --- Main Page Component ---
export default function UpanishadsCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // Update navigate to reflect Upanishads
    navigate(`/enrollnows?courseId=upanishads&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-amber-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-900 leading-snug">
          The Essence of Vedānta: <br />
          <span className="text-orange-600">A Deep Dive into the Principal Upaniṣads</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Uncover the direct path to self-knowledge and liberation from the ancient wisdom texts.
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
                <p className="mt-3 font-medium text-orange-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
            📘 Complete <span className="text-orange-400">3-Month Upanishad Curriculum</span>
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
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Sādhanā Resources Included
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
          <h2 className="text-4xl font-serif text-red-700  mb-10">
            🌟 “Voices of Wisdom — Experiences Inspired by the Upanishads”
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Rajesh, Delhi", text: "The Upanishads course opened my eyes to the depth of self-awareness and inner peace. I’ve started seeing life beyond material pursuits — it truly feels like awakening from within." },
              { name: "Sangeeta, Pune", text: "Studying the Upanishads helped me find balance between my professional life and spiritual journey. The ancient wisdom is so relevant even in today’s fast-paced world."},
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-orange-50 rounded-xl shadow-md"
              >
                <p className="text-gray-800 italic">“{t.text}”</p>
                <p className="mt-3 text-red-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 ">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-red-700 mb-8">📩 Get Support</h2>
          <p className="text-lg">💌 Email: upanishads@vastuscience.com</p>
          <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-orange-400 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            🧭 Book Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
}