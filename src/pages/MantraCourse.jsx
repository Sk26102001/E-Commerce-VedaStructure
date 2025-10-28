// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // Updated icons to be relevant for Mantra Healing: Volume2 (Sound), Target (Chakra), Zap (Energy)
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, Volume2, Target, Zap } from "lucide-react"; 
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" 
// import { Link } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// // Using colors relevant to spiritual/sacred sounds (Red/Saffron/Amber)
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum for MANTRA HEALING (Mantra Chikitsa)
// const fullCourseCurriculum = [
//     {
//         monthTitle: "🎶 Month 1: Foundations of Nada & Beej Mantras",
//         icon: <Volume2 className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 1,
//                 title: "Week 1: Introduction to Nada Yoga and Sound Healing",
//                 details: [
//                     "The science of sound (Nada Yoga) in Vedic tradition.",
//                     "Understanding vibration, resonance, and frequency.",
//                     "Prana and its connection to the spoken word (Vaikhari, Madhyama, Pashyanti, Para Vani).",
//                     "The role of intent (Sankalpa) in Mantra practice.",
//                 ],
//             },
//             {
//                 id: 2,
//                 title: "Week 2: Sanskrit and the Alphabet of Power",
//                 details: [
//                     "The importance of accurate pronunciation (Shuddhi) in Sanskrit.",
//                     "Understanding the 50 letters (Matrikas) as energy centres.",
//                     "Anatomy of the mouth and tongue for effective Japa.",
//                     "The power of 'Om' (Pranava Mantra) and its variations.",
//                 ],
//             },
//             {
//                 id: 3,
//                 title: "Week 3: The Beej (Seed) Mantras",
//                 details: [
//                     "Detailed study of the fundamental Beej Mantras (e.g., Lam, Vam, Ram, Yam, Ham, Om).",
//                     "How Beej Mantras activate specific energy centres (Chakras).",
//                     "Connecting Beej Mantras to the five elements (Pancha Mahabhuta).",
//                     "Practical application of seed sounds for immediate energy shift.",
//                 ],
//             },
//             {
//                 id: 4,
//                 title: "Week 4: Japa Mala and Counting Techniques",
//                 details: [
//                     "Selecting and purifying your Japa Mala (Rudraksha, Tulsi, Crystal).",
//                     "Proper posture (Asana) and hand position (Mudra) for Japa.",
//                     "The method of 108 repetitions and the significance of the Meru.",
//                     "Different Japa speeds: slow, medium, and fast (Upanshu, Vachik, Manasic).",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "🎯 Month 2: Chakra & Planetary Healing Mantras",
//         icon: <Target className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 5,
//                 title: "Week 5: Mantras for the Lower Chakras",
//                 details: [
//                     "Mantra Sadhanas for Muladhara (grounding, security) and its Beej Mantra 'Lam'.",
//                     "Mantra Sadhanas for Swadhisthana (creativity, emotion) and its Beej Mantra 'Vam'.",
//                     "Mantra Sadhanas for Manipura (power, metabolism) and its Beej Mantra 'Ram'.",
//                     "Combining breathwork (Pranayama) with these Mantras.",
//                 ],
//             },
//             {
//                 id: 6,
//                 title: "Week 6: Mantras for the Upper Chakras",
//                 details: [
//                     "Mantra Sadhanas for Anahata (love, compassion) and its Beej Mantra 'Yam'.",
//                     "Mantra Sadhanas for Vishuddha (communication, truth) and its Beej Mantra 'Ham'.",
//                     "Mantra Sadhanas for Ajna (intuition, awareness) and its Beej Mantra 'Om'.",
//                     "Techniques for internal visualization during Chakra Japa.",
//                 ],
//             },
//             {
//                 id: 7,
//                 title: "Week 7: Navagraha (Planetary) Mantras",
//                 details: [
//                     "Understanding the link between Mantras and Vedic Astrology (Jyotish).",
//                     "Mantras for Sun (Surya) and Moon (Chandra) for vitality and emotion.",
//                     "Mantras for Mars, Mercury, Jupiter, Venus, Saturn (Shani), Rahu, and Ketu.",
//                     "Prescribing planetary Mantras for specific life challenges.",
//                 ],
//             },
//             {
//                 id: 8,
//                 title: "Week 8: Protection and Cleansing Mantras",
//                 details: [
//                     "Powerful defensive Mantras: The Mahamrityunjaya Mantra for protection and health.",
//                     "Bhairava and Narasimha Mantras for removing fear and obstacles.",
//                     "Mantra Sadhanas for space cleansing (Griha Shuddhi).",
//                     "Using water (Jala) and food (Anna) as energized with Mantras.",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "⚡ Month 3: Advanced Applications & Healing Protocols",
//         icon: <Zap className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 9,
//                 title: "Week 9: Deity-Specific Healing Mantras (Shakti)",
//                 details: [
//                     "Goddess Mantras for abundance, knowledge, and courage (Lakshmi, Saraswati, Durga).",
//                     "Ganesha Mantras for starting new ventures and removing obstacles.",
//                     "Healing protocols using Dhanvantari and other specialized Mantras.",
//                     "Understanding the concept of Purascharana (extended, focused Japa).",
//                 ],
//             },
//             {
//                 id: 10,
//                 title: "Week 10: Tailored Mantra Healing Protocols (Chikitsa)",
//                 details: [
//                     "Creating personalized Mantra prescriptions for emotional trauma (Anxiety, Depression).",
//                     "Mantra combinations for improving relationships and career.",
//                     "Identifying the root cause (Mula) of an issue for targeted Mantra therapy.",
//                     "The process of transferring Mantra energy (Shakti Sanchar).",
//                 ],
//             },
//             {
//                 id: 11,
//                 title: "Week 11: Advanced Siddhi and Spiritual Practice",
//                 details: [
//                     "Introduction to advanced Bija combinations and secret formulations.",
//                     "Integrating Mantra with Meditation (Dhyana) and contemplation.",
//                     "The role of fasting (Vrata) and purity in Mantra Siddhi.",
//                     "Exploring different traditions: Buddhist, Jain, and Sikh Mantra practices.",
//                 ],
//             },
//             {
//                 id: 12,
//                 title: "Week 12: Ethics, Consultation, and Certification",
//                 details: [
//                     "Ethical considerations in energy healing and client responsibility.",
//                     "How to structure a professional Mantra consultation and charge.",
//                     "Building a private practice as a certified Mantra Healer.",
//                     "Final assessment: Developing a complete 7-day healing protocol for a case study.",
//                 ],
//             },
//         ],
//     },
// ];

// const bonusItems = [
//     "Sanskrit Pronunciation Audio Guide (50 Matrikas)",
//     "Printable 108 Mantra Quick-Reference Guide",
//     "Lifetime Access to 'Mantra Healing Community' Group",
// ];

// const pricingPlans = [
//     {    id: 1,
//     key: "starter",
//         name: "Nada Foundation",
//         price: 3499,
//         features: ["Month 1 Modules", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {   id: 2,
//     key: "master",
//         name: "Mantra Chikitsa Master",
//         price: 7999,
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Mantra Protocol Practicals"],
//         isPopular: true,
//     },
//     {   id: 3,
//     key: "mentor",
//         name: "Siddhi Expert",
//         price: 12999,
//         features: ["All Chikitsa Master Features", "1:1 Mentorship Sessions (4)", "Advanced Siddhi Mantras", "Priority Support"],
//         isPopular: false,
//     },
// ];

// /**
//  * Collapsible Accordion component for the "What You Will Learn" section.
//  * Uses Framer Motion for the sliding animation.
//  */
// const CourseAccordionItem = ({ title, details }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-red-100">
//             {/* Accordion Header */}
//             <motion.button
//                 // Corrected template literal usage
//                 className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-expanded={isOpen}
//             >
//                 <span className="text-left text-lg">{title}</span>
//                 <motion.div
//                     animate={{ rotate: isOpen ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     <ChevronDown className="w-6 h-6" />
//                 </motion.div>
//             </motion.button>

//             {/* Accordion Content (The sliding part) */}
//             <AnimatePresence initial={false}>
//                 {isOpen && (
//                     <motion.div
//                         key="content"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         // Tweaked transition for a smoother, less bouncy feel
//                         transition={{ type: "spring", stiffness: 200, damping: 25 }}
//                         className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-red-200 rounded-b-xl"
//                     >
//                         <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                             {details.map((item, index) => (
//                                 <li key={index} className="text-base font-medium">
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };


// // Refactored Curriculum Snapshot Accordion for smooth animation
// const CurriculumAccordionItem = ({ title, content }) => {
//     const [open, setOpen] = useState(false);
//     return (
//         <div className="border-b border-red-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//             <button
//                 onClick={() => setOpen(!open)}
//                 className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-red-700 hover:text-red-800"
//             >
//                 {title}
//                 {open ? <ChevronUp /> : <ChevronDown />}
//             </button>
//             {/* Added AnimatePresence and motion.div for smooth collapse/expand */}
//             <AnimatePresence initial={false}>
//                 {open && (
//                     <motion.div
//                         key="curriculum-content"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         // Using the same smooth spring transition
//                         transition={{ type: "spring", stiffness: 200, damping: 25 }}
//                         className="overflow-hidden"
//                     >
//                         <div className="pb-4 px-6 text-gray-700">{content}</div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// // Component for the pricing card
// // const PricingCard = ({ plan }) => (
// //     <motion.div
// //         whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
// //         className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
// //           ${plan.isPopular ? 'bg-red-600 text-white border-4 border-amber-300' : 'bg-white text-gray-800 border-2 border-red-100'} 
// //           h-full flex flex-col`}
// //     >
// //         {plan.isPopular && (
// //             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-amber-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
// //                 ✨ MOST POPULAR
// //             </div>
// //         )}
// //         <h3 
// //             // Corrected template literal usage
// //             className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-red-700'}`}
// //         >
// //             {plan.name}
// //         </h3>
// //         <p 
// //             // Corrected template literal usage
// //             className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-amber-300' : 'text-red-800'}`}
// //         >
// //             {plan.price}
// //         </p>

// //         <ul className="space-y-3 flex-grow mb-8">
// //             {plan.features.map((feature, index) => (
// //                 <li key={index} className="flex items-start">
// //                     <CheckCircle2 
// //                         // Corrected template literal usage
// //                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-amber-300' : 'text-red-600'}`} 
// //                     />
// //                     {/* Corrected template literal usage */}
// //                     <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
// //                 </li>
// //             ))}
// //         </ul>

// //         <Link to="/enrollnow" className="mt-auto ">
// //             <motion.button
// //                 whileTap={{ scale: 0.98 }}
// //                 // Corrected template literal usage
// //                 className={` w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
// //                   ${plan.isPopular 
// //                       ? 'bg-amber-300 text-red-800 hover:bg-amber-400' 
// //                       : 'bg-red-100 text-red-700 hover:bg-red-200'
// //                   }`}
// //             >
// //                 Choose Plan
// //             </motion.button>
// //         </Link>
// //     </motion.div>
// // );   


// // --- Pricing Card Component (Reused with new styling) ---

// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-red-700 text-white border-4 border-yellow-300"
//         : "bg-white text-gray-800 border-2 border-red-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3
//       className={`text-3xl font-bold mb-4 ${
//         plan.isPopular ? "text-white" : "text-red-700"
//       }`}
//     >
//       {plan.name}
//     </h3>
//     <p
//       className={`text-5xl font-extrabold mb-6 ${
//         plan.isPopular ? "text-yellow-300" : "text-red-800"
//       }`}
//     >
//       ₹{plan.price}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${
//               plan.isPopular ? "text-yellow-300" : "text-red-600"
//             }`}
//           />
//           <span
//             className={`${
//               plan.isPopular ? "text-white/90" : "text-gray-700"
//             }`}
//           >
//             {feature}
//           </span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md ${
//         plan.isPopular
//           ? "bg-yellow-300 text-red-800 hover:bg-yellow-400"
//           : "bg-red-100 text-red-700 hover:bg-red-200"
//       }`}
//     >
//       Enroll in {plan.name}
//     </motion.button>
//   </motion.div>
// );



// export default function MantraCourse() {
//      const navigate = useNavigate();
//       const courseTitle = "Mantra Healing";
//           const handleEnrollClick = (plan) => {
//   navigate(`/enrollnows?courseId=daily-puja&plan=${plan.key}#enrollment-section`);
//     // The default enroll button links to the popular plan
//   const defaultPlanKey = pricingPlans.find(p => p.isPopular)?.key || pricingPlans[0].key;
// };
//     // Updated video content for Mantra Healing
//     const lectureVideos = [
//         {
//             title: "The Science of OM and its Vibration",
//             thumbnail: "https://i.ytimg.com/vi/S-gUjJt1k-8/maxresdefault.jpg", 
//             link: "https://www.youtube.com/watch?v=mantra-om-science", 
//         },
//         {
//             title: "Mastering Japa: Posture, Mala, and Pronunciation",
//             thumbnail: "https://c0.wallpaperflare.com/preview/261/334/728/japa-mala-prayer-beads-meditation-hinduism.jpg", 
//             link: "https://www.youtube.com/watch?v=mantra-japa-technique", 
//         },
//         {
//             title: "Beej Mantras: Activating Your 7 Chakras",
//             thumbnail: "https://i.pinimg.com/736x/8f/d7/81/8fd781e626154625b6d917f8a7f96e1b.jpg", 
//             link: "https://www.youtube.com/watch?v=mantra-chakra-beej", 
//         },
//     ];
    
//     // Updated testimonials for Mantra Healing
//     const testimonials = [
//         { name: "Pooja, Mumbai", text: "The Beej Mantras alone have brought a sense of calm and focused energy to my daily life. Truly transformative!" },
//         { name: "Rajiv, Dubai", text: "The tailored healing protocols for emotional trauma were highly effective. I now feel empowered to heal myself and others." },
//     ];


//     return (
//         <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-amber-50 overflow-hidden">
//             {/* Hero Section */}
//             <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-200 via-amber-100 to-red-100">
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="relative z-10 max-w-3xl"
//                 >
//                     <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
//                         Harness the Power of Sound with <br />
//                         <span className="text-amber-600">Ancient Mantra Healing (Mantra Chikitsa)</span>
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-700 mt-4">
//                         Learn **Mantra Healing** through Vedic Science, Japa Techniques, & Personalized Healing Protocols.
//                     </p>
//                     <div className="flex gap-4 justify-center mt-8">
//                         <Link to="/enrollnow">
//                         <motion.div 
//                             whileHover={{ scale: 1.05 }}
//                             className="bg-gradient-to-r from-red-500 to-amber-500 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//                         >
//                             👉 Enroll Now
//                         </motion.div>
//                         </Link>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             className="bg-amber-300 hover:bg-amber-500 text-red-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//                         >
//                             <Play size={18} /> Watch Preview
//                         </motion.button>
//                     </div>
//                 </motion.div>

//                 {/* Soft Glowing Orb Background */}
//                 <div className="absolute w-[600px] h-[600px] bg-red-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//                 <div className="absolute w-[500px] h-[500px] bg-amber-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//             </section>

//             {/* Course Lecture Section */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h2 className="text-4xl font-serif text-red-700 mb-8">🎥 Mantra Healing Lecture Videos</h2>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         {lectureVideos.map((video, i) => (
//                             <motion.a
//                                 href={video.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 key={i}
//                                 whileHover={{ scale: 1.03 }}
//                                 className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer"
//                             >
//                                 <img
//                                     src={video.thumbnail}
//                                     alt={video.title}
//                                     className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                                 />
//                                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                                     <Play className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
//                                 </div>
//                                 <p className="mt-3 font-medium text-red-800">{video.title}</p>
//                             </motion.a>
//                         ))}
//                     </div>
//                 </div>
//             </section>
            
//             {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//             <section className="py-20 px-6 bg-gradient-to-b from-red-50 to-amber-50">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="max-w-4xl mx-auto"
//                 >
//                     <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
//                         📘 Complete <span className={ACCENT_COLOR}>3-Month Mantra Healing Curriculum</span>
//                     </h2>

//                     {fullCourseCurriculum.map((month, index) => (
//                         <div className="mb-10" key={index}>
//                             {/* Month Header */}
//                             <div className="flex items-center mb-4 border-b-2 border-red-300 pb-2">
//                                 {month.icon}
//                                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                                     <span>{month.monthTitle}</span>
//                                     <span className="text-sm font-medium text-red-500 bg-red-100 px-3 py-1 rounded-full">
//                                         {month.duration}
//                                     </span>
//                                 </h3>
//                             </div>
//                             <div className="space-y-3">
//                                 {month.modules.map((module) => (
//                                     <CourseAccordionItem
//                                         key={module.id}
//                                         title={module.title}
//                                         details={module.details}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     ))}

//                     {/* Optional: Download Button */}
//                     <div className="text-center mt-10">
//                         <motion.button 
//                             whileHover={{ scale: 1.05 }}
//                             // Corrected template literal usage and updated colors
//                             className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-yellow-500 to-orange-400 active:scale-95`}
//                         >
//                             Download Full Curriculum PDF
//                         </motion.button>
//                     </div>
//                 </motion.div>
//             </section>


//             {/* Bonus Section (New Addition) */}
//             <section className="py-20 px-6 bg-white">
//                 <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-amber-50">
//                     <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//                         <Gift className="w-8 h-8 text-amber-600 animate-bounce"/> 
//                         🎶 <span className="font-bold">Bonus Section</span> – Limited Time!
//                     </h2>
//                     <p className="text-2xl font-bold text-red-800 mb-6">
//                         🎁 Free Bonuses Worth ₹3,000:
//                     </p>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         {bonusItems.map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                                 className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
//                             >
//                                 <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                                 <span className="font-medium text-gray-700">{item}</span>
//                             </motion.div>
//                         ))}
//                     </div>
//                     <p className="mt-8 text-lg text-red-500 font-semibold">
//                         *Enroll in the '**Mantra Chikitsa Master**' tier or above to claim these bonuses instantly!
//                     </p>
//                 </div>
//             </section>


//             {/* Pricing (Revamped Multi-Card Layout) */}
//             <section className="py-20 px-6 bg-gradient-to-r from-red-100 via-amber-50 to-red-100">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
//                         ✨ Choose Your <span className={ACCENT_COLOR}>Mantra Healing Path</span>
//                     </h2>
//                     <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//                         {pricingPlans.map((plan, index) => (
//                             <PricingCard key={index} plan={plan} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-5xl mx-auto text-center">
//                     <h2 className="text-4xl font-serif text-red-700 mb-10">
//                         🌟 Student Testimonials
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         {testimonials.map((t, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileHover={{ scale: 1.03 }}
//                                 className="p-6 bg-amber-50 rounded-xl shadow-md"
//                             >
//                                 <p className="text-gray-800 italic">“{t.text}”</p>
//                                 <p className="mt-3 text-red-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Contact */}
//             <section id="contact" className="py-20 px-6 bg-gradient-to-b from-red-50 to-amber-50">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-4xl font-serif text-red-700 mb-8">📩 Contact / Help</h2>
//                     <p>💌 Email: support@mantrahealingacademy.com</p>
//                     <p>📱 WhatsApp: +91 9876543210</p>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         className="mt-6 bg-gradient-to-r from-red-500 to-amber-500 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//                     >
//                         🎶 Book Free Mantra Assessment
//                     </motion.button>
//                 </div>
//             </section>

//             {/* Custom Animations */}
//             <style jsx>{`
//                 .animate-pulse-slow {
//                     animation: pulse 8s ease-in-out infinite;
//                 }
//                 @keyframes pulse {
//                     0%, 100% { opacity: 0.4; }
//                     50% { opacity: 0.8; }
//                 }
//             `}</style>
            
//             {/* <Footer /> */} 
//         </div>
//     );
// }












// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   Star,
//   BookOpen,
//   Gift,
//   Zap, // Using Zap for energy/vibration
//   Feather, // Using Feather for lightness/sound
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// // --- Configuration ---
// const PRIMARY_COLOR = "bg-red-600"; // Deep red for devotional theme
// const ACCENT_COLOR = "text-yellow-400"; // Golden accent
// const HOVER_COLOR = "hover:bg-gradient-to-r from-red-700 to-orange-500";


// // Detailed 4-Week Curriculum for Mantra Healing
// const mantraHealingCurriculum = [
//   {
//     monthTitle: "⚡ 4-Week Vibrational Transformation",
//     icon: <Zap className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks Total",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: The Science of Sound & Intention (Sankalpa)",
//         details: [
//           "Understanding vibration, frequency, and resonance in the human body.",
//           "How to properly sit (Asana) and focus the breath (Pranayama) for Japa.",
//           "The power of a clear Sankalpa (Intention) to direct mantra energy.",
//           "The correct use and significance of a Japa Mala (Mantra Rosary).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Fundamentals of Beej Mantras & Chakras",
//         details: [
//           "Introduction to the primordial Beej (Seed) Mantras (e.g., Om, Kreem, Hreem).",
//           "Sound activation techniques for the 7 Major Chakras (Lam, Vam, Ram, etc.).",
//           "Pronunciation perfection: The importance of 'Svara' (pitch) and 'Varna' (alphabet).",
//           "Silent vs. Audible Japa: When and how to use each method for maximum effect.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Personalized Mantras for Healing & Protection",
//         details: [
//           "In-depth practice of the Mahamrityunjaya Mantra for health and longevity.",
//           "Selecting and dedicating a personal Ishta Devata (Deity) Mantra.",
//           "Mantra applications for specific issues: anxiety, sleep, and abundance.",
//           "The use of 'Nyasa' (placing) techniques to install mantra energy in the body.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Advanced Integration & Sound Therapy",
//         details: [
//           "Introduction to Nada Yoga (Yoga of Sound) and its practices.",
//           "Integrating Binaural Beats and Solfeggio Frequencies with traditional Japa.",
//           "Performing a simple Mantra Havan (Fire Ritual) for purification and manifestation.",
//           "Creating a lifetime healing routine (Sadhana) and transferring the spiritual merit.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Lecture Videos ---
// const mantraHealingVideos = [
//   {
//     title: "The Science of Vibrational Medicine",
//     thumbnail: "https://placehold.co/400x200/520080/FFFFFF?text=Vibration+Science+Video",
//     link: "https://www.youtube.com/watch?v=science_of_vibration_placeholder",
//   },
//   {
//     title: "Perfecting Japa Mala Technique",
//     thumbnail: "https://placehold.co/400x200/008052/FFFFFF?text=Japa+Mala+Video",
//     link: "https://www.youtube.com/watch?v=japa_mala_technique_placeholder",
//   },
//   {
//     title: "Activating the Heart Chakra (Anahata)",
//     thumbnail: "https://placehold.co/400x200/805200/FFFFFF?text=Heart+Chakra+Video",
//     link: "https://www.youtube.com/watch?v=heart_chakra_mantra_placeholder",
//   },
// ];


// // --- Bonus Items ---
// const mantraHealingBonus = [
//   "Personalized Japa Mala Selection Guide (PDF)",
//   "432Hz Healing Frequency Track (Download)",
//   "Beginner Pronunciation Guide & Audio Files",
// ];

// // --- Pricing Plans (Updated for Mantra Healing Theme) ---
// const mantraHealingPricing = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Svara Explorer",
//     price: 3999,
//     features: [
//       "Weeks 1 & 2 Modules (Foundations)",
//       "Recorded Lectures",
//       "Basic Q&A Forum Access",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Vibrational Master",
//     price: 6999,
//     features: [
//       "All 4 Weeks Curriculum",
//       "Lifetime Course Access",
//       "Free Bonuses (All 3)",
//       "2 Live Q&A Group Sessions",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Rishi Mentor",
//     price: 10999,
//     features: [
//       "All Vibrational Master Features",
//       "4 x 1:1 Mantra Mentorship Sessions",
//       "Custom Mantra Prescription",
//       "Priority Email Support",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion for Modules (Reused with new styling) ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-red-100">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-yellow-200 rounded-b-xl"
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

// // --- Pricing Card Component (Reused with new styling) ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-red-700 text-white border-4 border-yellow-300"
//         : "bg-white text-gray-800 border-2 border-red-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ VIBRATION BOOST
//       </div>
//     )}

//     <h3
//       className={`text-3xl font-bold mb-4 ${
//         plan.isPopular ? "text-white" : "text-red-700"
//       }`}
//     >
//       {plan.name}
//     </h3>
//     <p
//       className={`text-5xl font-extrabold mb-6 ${
//         plan.isPopular ? "text-yellow-300" : "text-red-800"
//       }`}
//     >
//       ₹{plan.price}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${
//               plan.isPopular ? "text-yellow-300" : "text-red-600"
//             }`}
//           />
//           <span
//             className={`${
//               plan.isPopular ? "text-white/90" : "text-gray-700"
//             }`}
//           >
//             {feature}
//           </span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md ${
//         plan.isPopular
//           ? "bg-yellow-300 text-red-800 hover:bg-yellow-400"
//           : "bg-red-100 text-red-700 hover:bg-red-200"
//       }`}
//     >
//       Activate {plan.name}
//     </motion.button>
//   </motion.div>
// );


// export default function CourseDetailsPage() {
//   const navigate = useNavigate();
//   const courseTitle = "Mantra Healing Course: Svara & Science";

//   const handleEnrollClick = (plan) => {
//     // Unique courseId for Mantra Healing
//     navigate(`/enrollnows?courseId=mantra-healing&plan=${plan.key}#enrollment-section`);
//   };
  
//   // The default enroll button links to the popular plan
//   const defaultPlanKey = mantraHealingPricing.find(p => p.isPopular)?.key || mantraHealingPricing[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden">
//       {/* Hero */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
//           Mantra Healing Course: <br />
//           <span className="text-red-600">Vibrational Science for Inner Peace</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           A practical, science-backed program to cleanse your aura, balance your chakras, and heal the mind through sound.
//         </p>

//         <motion.button
//           onClick={() =>
//             handleEnrollClick(mantraHealingPricing.find(p => p.isPopular))
//           }
//           whileHover={{ scale: 1.05 }}
//           className="mt-8 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
//         >
//           👉 Start Your Healing Journey
//         </motion.button>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">🎥 Core Healing Lessons</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {mantraHealingVideos.map((video, i) => (
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
//                   // Fallback for image loading issues
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://placehold.co/400x200/520080/FFFFFF?text=Healing+Video";
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
    
//       {/* What You Will Learn (Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>4-Week Mantra Healing Curriculum</span>
//           </h2>

//           {mantraHealingCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Block Header */}
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

//           {/* Download Button */}
//           <div className="text-center mt-10">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-red-600 to-yellow-500 active:scale-95`}
//             >
//               Download Full Vibrational Healing Toolkit
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Bonus Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-50">
//           <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-red-600 animate-bounce" /> 🎁{" "}
//             <span className="font-bold">Sound Healing Bonuses</span> – Transform Your Practice!
//           </h2>
//           <p className="text-2xl font-bold text-red-800 mb-6">
//             Unlock exclusive tools to deepen your mantra practice:
//           </p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {mantraHealingBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
//               >
//                 <Feather className="w-5 h-5 mr-2 text-green-600" />
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-red-50 to-yellow-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Vibrational Pathway</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {mantraHealingPricing.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">
//             🌟 Healing Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Priya, Bangalore", text: "I used to suffer from anxiety, but the Japa techniques taught here have brought a profound sense of inner calm and clarity." },
//               { name: "Kiran, Mumbai", text: "The connection between Beej Mantras and Chakras was clearly explained. I feel energized and my sleep has drastically improved." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-red-50 rounded-xl shadow-md"
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
//           <h2 className="text-4xl font-serif text-red-700 mb-8">📩 Get Support</h2>
//           <p className="text-lg">💌 Email: healing@mantrascience.com</p>
//           <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🧭 Book Free Consultation
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
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   Star,
//   BookOpen,
//   Gift,
//   Zap, // Using Zap for energy/vibration
//   Feather, // Using Feather for lightness/sound
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// // --- Configuration ---
// const PRIMARY_COLOR = "bg-red-600"; // Deep red for devotional theme
// const ACCENT_COLOR = "text-yellow-400"; // Golden accent
// const HOVER_COLOR = "hover:bg-gradient-to-r from-red-700 to-orange-500";


// // Detailed 3-Month Curriculum for Mantra Healing (12 Weeks Total) - UPDATED
// const mantraHealingCurriculum = [
//   {
//     monthTitle: "🌀 Month 1: Foundation of Sound & Sankalpa",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "Weeks 1 - 4",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: The Science of Sound & Intention (Sankalpa)",
//         details: [
//           "Understanding vibration, frequency, and resonance in the human body.",
//           "How to properly sit (Asana) and focus the breath (Pranayama) for Japa.",
//           "The power of a clear Sankalpa (Intention) to direct mantra energy.",
//           "The importance of a consecrated Japa Mala (Mantra Rosary).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Introduction to Beej Mantras & Japa Techniques",
//         details: [
//           "Introduction to the primordial Beej (Seed) Mantras (e.g., Om, Kreem, Hreem).",
//           "Mastering Silent (Manasa) vs. Audible (Vaikhari) Japa techniques.",
//           "Establishing a Sacred Space (Puja Sthana) for daily practice.",
//           "Basic Rituals: Achamana (Purification) and Nyasa (Energy Placement).",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Chakra Activation through Sound",
//         details: [
//           "Detailed study of the 7 Major Chakras and their energetic functions.",
//           "Sound activation techniques using the Luminous Seed Syllables (Lam, Vam, Ram, etc.).",
//           "Diagnosing and balancing energetic blockages using mantra.",
//           "Practical session: Chanting for Muladhara (Root) and Svadhisthana (Sacral).",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Pronunciation Mastery (Svara & Varna)",
//         details: [
//           "The importance of 'Svara' (pitch) and 'Varna' (alphabet) for vibrational purity.",
//           "Mantra mapping: Understanding the source text (e.g., Vedic, Tantric).",
//           "Practice drill: Perfecting the utterance of complex Beej syllables.",
//           "Review and troubleshooting common Japa mistakes and lack of focus.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "✨ Month 2: Deepening Practice & Personalized Healing",
//     icon: <Zap className="w-5 h-5 mr-3" />,
//     duration: "Weeks 5 - 8",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Guru and Deity Mantras",
//         details: [
//           "Understanding the lineage (Parampara) and the role of the Guru Mantra.",
//           "Selecting and dedicating a personal Ishta Devata (Deity) Mantra.",
//           "In-depth: The process of Diksha (Initiation) and Mantra Transmission.",
//           "Connecting the Ishta Devata form with the mantra's vibration.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: The Mahamrityunjaya Mantra Sadhana",
//         details: [
//           "Line-by-line meaning and potency of the Great Death-Conquering Mantra.",
//           "Setting up a dedicated Sadhana (Practice) for health and longevity.",
//           "Mantra for protection: Creating an energetic shield (Kavacha).",
//           "Applying the mantra to chronic physical and mental ailments.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Prosperity, Sleep, and Emotional Healing Mantras",
//         details: [
//           "Mantras for specific applications: Abundance (Lakshmi) and Removing Obstacles (Ganesha).",
//           "Using mantra for deep, restorative sleep and calming the nervous system.",
//           "Techniques for processing and releasing emotional trauma through sound.",
//           "Chanting the Gayatri Mantra for spiritual light and wisdom.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Advanced Practice & Time-Bound Rituals",
//         details: [
//           "Introduction to Purascharana: Completing a prescribed number of repetitions.",
//           "Establishing a daily, weekly, and monthly discipline (Vrata/Sankalpa).",
//           "Mantra Japa and the lunar cycle (Tithis) for increased potency.",
//           "The practice of Upanshu (Whispering) Japa for deeper meditative states.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🌌 Month 3: Nada Yoga & Lifetime Integration",
//     icon: <Feather className="w-5 h-5 mr-3" />,
//     duration: "Weeks 9 - 12",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Principles of Nada Yoga (The Yoga of Sound)",
//         details: [
//           "Understanding Anahata Nada (Unstruck Sound) and its realization.",
//           "Techniques for internalizing sound and meditation on inner silence.",
//           "How to use musical instruments (Singing Bowls, Tanpura) in your practice.",
//           "The connection between Mantra, Chakra, and subtle sound currents (Nadis).",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Integrating Sound Therapy & Modern Science",
//         details: [
//           "Integrating Binaural Beats and Isochronic Tones with traditional Japa.",
//           "How Solfeggio Frequencies (e.g., 528Hz) enhance mantra's healing power.",
//           "The science of mantra's effect on brainwaves (EEG) and heart coherence.",
//           "Designing a 'Vibrational Bath' using multiple sound elements.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Fire Ritual (Havan) for Purification",
//         details: [
//           "The spiritual science and structure of a simple Mantra Havan (Fire Ritual).",
//           "The role of offerings (Ahutis) and their energetic transformation.",
//           "Performing a short, personal Havan for purification and manifestation.",
//           "Learning how to transfer the spiritual merit (Punya) of your practice.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Lifetime Sadhana & Mentorship",
//         details: [
//           "Creating a sustainable, personalized lifetime healing routine (Sadhana).",
//           "Advanced topics: Mantra & Astrology (Graha Shanti).",
//           "The ethical guidelines (Yamas & Niyamas) for a mantra practitioner.",
//           "Final review, Q&A, and certification ceremony.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Lecture Videos ---
// const mantraHealingVideos = [
//   {
//     title: "The Science of Vibrational Medicine",
//     thumbnail: "https://placehold.co/400x200/520080/FFFFFF?text=Vibration+Science+Video",
//     link: "https://www.youtube.com/watch?v=science_of_vibration_placeholder",
//   },
//   {
//     title: "Perfecting Japa Mala Technique",
//     thumbnail: "https://placehold.co/400x200/008052/FFFFFF?text=Japa+Mala+Video",
//     link: "https://www.youtube.com/watch?v=japa_mala_technique_placeholder",
//   },
//   {
//     title: "Activating the Heart Chakra (Anahata)",
//     thumbnail: "https://placehold.co/400x200/805200/FFFFFF?text=Heart+Chakra+Video",
//     link: "https://www.youtube.com/watch?v=heart_chakra_mantra_placeholder",
//   },
// ];


// // --- Bonus Items ---
// const mantraHealingBonus = [
//   "Personalized Japa Mala Selection Guide (PDF)",
//   "432Hz Healing Frequency Track (Download)",
//   "Beginner Pronunciation Guide & Audio Files",
// ];

// // --- Pricing Plans (Updated for 3-Month Curriculum) ---
// const mantraHealingPricing = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Svara Explorer",
//     price: 3999,
//     features: [
//       "Month 1 Modules (Foundation - Weeks 1-4)", // UPDATED
//       "Recorded Lectures",
//       "Basic Q&A Forum Access",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Vibrational Master",
//     price: 6999,
//     features: [
//       "All 3 Months / 12 Weeks Curriculum", // UPDATED
//       "Lifetime Course Access",
//       "Free Bonuses (All 3)",
//       "4 Live Q&A Group Sessions (1 per month)", // Added sessions for 3 months
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Rishi Mentor",
//     price: 10999,
//     features: [
//       "All Vibrational Master Features",
//       "8 x 1:1 Mantra Mentorship Sessions", // Increased mentorship sessions
//       "Custom Mantra Prescription & Sadhana Plan", // Enhanced feature description
//       "Priority Email Support",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion for Modules (Reused with new styling) ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-red-100">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-left text-lg">{title}</span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-yellow-200 rounded-b-xl"
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

// // --- Pricing Card Component (Reused with new styling) ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-red-700 text-white border-4 border-yellow-300"
//         : "bg-white text-gray-800 border-2 border-red-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ VIBRATION BOOST
//       </div>
//     )}

//     <h3
//       className={`text-3xl font-bold mb-4 ${
//         plan.isPopular ? "text-white" : "text-red-700"
//       }`}
//     >
//       {plan.name}
//       
//     </h3>
//     <p
//       className={`text-5xl font-extrabold mb-6 ${
//         plan.isPopular ? "text-yellow-300" : "text-red-800"
//       }`}
//     >
//       ₹{plan.price}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${
//               plan.isPopular ? "text-yellow-300" : "text-red-600"
//             }`}
//           />
//           <span
//             className={`${
//               plan.isPopular ? "text-white/90" : "text-gray-700"
//             }`}
//           >
//             {feature}
//           </span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md ${
//         plan.isPopular
//           ? "bg-yellow-300 text-red-800 hover:bg-yellow-400"
//           : "bg-red-100 text-red-700 hover:bg-red-200"
//       }`}
//     >
//       Activate {plan.name}
//     </motion.button>
//   </motion.div>
// );


// export default function CourseDetailsPage() {
//   const navigate = useNavigate();
//   const courseTitle = "Mantra Healing Course: Svara & Science";

//   const handleEnrollClick = (plan) => {
//     // Unique courseId for Mantra Healing
//     navigate(`/enrollnows?courseId=mantra-healing&plan=${plan.key}#enrollment-section`);
//   };
//   
//   // The default enroll button links to the popular plan
//   const defaultPlanKey = mantraHealingPricing.find(p => p.isPopular)?.key || mantraHealingPricing[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden">
//       {/* Hero */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
//           Mantra Healing Course: <br />
//           <span className="text-red-600">Vibrational Science for Inner Peace</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           A practical, science-backed program to cleanse your aura, balance your chakras, and heal the mind through sound.
//         </p>

//         <motion.button
//           onClick={() =>
//             handleEnrollClick(mantraHealingPricing.find(p => p.isPopular))
//           }
//           whileHover={{ scale: 1.05 }}
//           className="mt-8 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
//         >
//           👉 Start Your Healing Journey
//         </motion.button>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">🎥 Core Healing Lessons</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {mantraHealingVideos.map((video, i) => (
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
//                   // Fallback for image loading issues
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://placehold.co/400x200/520080/FFFFFF?text=Healing+Video";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-red-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
//     
//       {/* What You Will Learn (Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Mantra Healing Curriculum (12 Weeks)</span> {/* UPDATED TEXT */}
//           </h2>

//           {mantraHealingCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Block Header */}
//               <div className="flex items-center mb-4 border-b-2 border-red-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-red-500 bg-red-100 px-3 py-1 rounded-full">
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

//           {/* Download Button */}
//           <div className="text-center mt-10">
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-red-600 to-yellow-500 active:scale-95`}
//             >
//               Download Full Vibrational Healing Toolkit
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Bonus Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-50">
//           <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-red-600 animate-bounce" /> 🎁{" "}
//             <span className="font-bold">Sound Healing Bonuses</span> – Transform Your Practice!
//           </h2>
//           <p className="text-2xl font-bold text-red-800 mb-6">
//             Unlock exclusive tools to deepen your mantra practice:
//           </p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {mantraHealingBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
//               >
//                 <Feather className="w-5 h-5 mr-2 text-green-600" />
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//         </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-red-50 to-yellow-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Vibrational Pathway</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {mantraHealingPricing.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">
//             🌟 Healing Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Priya, Bangalore", text: "I used to suffer from anxiety, but the Japa techniques taught here have brought a profound sense of inner calm and clarity." },
//               { name: "Kiran, Mumbai", text: "The connection between Beej Mantras and Chakras was clearly explained. I feel energized and my sleep has drastically improved." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-red-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-red-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-red-700 mb-8">📩 Get Support</h2>
//           <p className="text-lg">💌 Email: healing@mantrascience.com</p>
//           <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🧭 Book Free Consultation
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
//     </div>
//   );
// }





import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  Star,
  BookOpen,
  Gift,
  Zap, // Using Zap for energy/vibration
  Feather, // Using Feather for lightness/sound
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// --- Configuration ---
const PRIMARY_COLOR = "bg-red-600"; // Deep red for devotional theme
const ACCENT_COLOR = "text-yellow-400"; // Golden accent
const HOVER_COLOR = "hover:bg-gradient-to-r from-red-700 to-orange-500";


// Detailed 3-Month Curriculum for Mantra Healing (12 Weeks Total) - UPDATED
const mantraHealingCurriculum = [
  {
    monthTitle: "🌀 Month 1: Foundation of Sound & Sankalpa",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "Weeks 1 - 4",
    modules: [
      {
        id: 1,
        title: "Week 1: The Science of Sound & Intention (Sankalpa)",
        details: [
          "Understanding vibration, frequency, and resonance in the human body.",
          "How to properly sit (Asana) and focus the breath (Pranayama) for Japa.",
          "The power of a clear Sankalpa (Intention) to direct mantra energy.",
          "The importance of a consecrated Japa Mala (Mantra Rosary).",
        ],
      },
      {
        id: 2,
        title: "Week 2: Introduction to Beej Mantras & Japa Techniques",
        details: [
          "Introduction to the primordial Beej (Seed) Mantras (e.g., Om, Kreem, Hreem).",
          "Mastering Silent (Manasa) vs. Audible (Vaikhari) Japa techniques.",
          "Establishing a Sacred Space (Puja Sthana) for daily practice.",
          "Basic Rituals: Achamana (Purification) and Nyasa (Energy Placement).",
        ],
      },
      {
        id: 3,
        title: "Week 3: Chakra Activation through Sound",
        details: [
          "Detailed study of the 7 Major Chakras and their energetic functions.",
          "Sound activation techniques using the Luminous Seed Syllables (Lam, Vam, Ram, etc.).",
          "Diagnosing and balancing energetic blockages using mantra.",
          "Practical session: Chanting for Muladhara (Root) and Svadhisthana (Sacral).",
        ],
      },
      {
        id: 4,
        title: "Week 4: Pronunciation Mastery (Svara & Varna)",
        details: [
          "The importance of 'Svara' (pitch) and 'Varna' (alphabet) for vibrational purity.",
          "Mantra mapping: Understanding the source text (e.g., Vedic, Tantric).",
          "Practice drill: Perfecting the utterance of complex Beej syllables.",
          "Review and troubleshooting common Japa mistakes and lack of focus.",
        ],
      },
    ],
  },
  {
    monthTitle: "✨ Month 2: Deepening Practice & Personalized Healing",
    icon: <Zap className="w-5 h-5 mr-3" />,
    duration: "Weeks 5 - 8",
    modules: [
      {
        id: 5,
        title: "Week 5: Guru and Deity Mantras",
        details: [
          "Understanding the lineage (Parampara) and the role of the Guru Mantra.",
          "Selecting and dedicating a personal Ishta Devata (Deity) Mantra.",
          "In-depth: The process of Diksha (Initiation) and Mantra Transmission.",
          "Connecting the Ishta Devata form with the mantra's vibration.",
        ],
      },
      {
        id: 6,
        title: "Week 6: The Mahamrityunjaya Mantra Sadhana",
        details: [
          "Line-by-line meaning and potency of the Great Death-Conquering Mantra.",
          "Setting up a dedicated Sadhana (Practice) for health and longevity.",
          "Mantra for protection: Creating an energetic shield (Kavacha).",
          "Applying the mantra to chronic physical and mental ailments.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Prosperity, Sleep, and Emotional Healing Mantras",
        details: [
          "Mantras for specific applications: Abundance (Lakshmi) and Removing Obstacles (Ganesha).",
          "Using mantra for deep, restorative sleep and calming the nervous system.",
          "Techniques for processing and releasing emotional trauma through sound.",
          "Chanting the Gayatri Mantra for spiritual light and wisdom.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Advanced Practice & Time-Bound Rituals",
        details: [
          "Introduction to Purascharana: Completing a prescribed number of repetitions.",
          "Establishing a daily, weekly, and monthly discipline (Vrata/Sankalpa).",
          "Mantra Japa and the lunar cycle (Tithis) for increased potency.",
          "The practice of Upanshu (Whispering) Japa for deeper meditative states.",
        ],
      },
    ],
  },
  {
    monthTitle: "🌌 Month 3: Nada Yoga & Lifetime Integration",
    icon: <Feather className="w-5 h-5 mr-3" />,
    duration: "Weeks 9 - 12",
    modules: [
      {
        id: 9,
        title: "Week 9: Principles of Nada Yoga (The Yoga of Sound)",
        details: [
          "Understanding Anahata Nada (Unstruck Sound) and its realization.",
          "Techniques for internalizing sound and meditation on inner silence.",
          "How to use musical instruments (Singing Bowls, Tanpura) in your practice.",
          "The connection between Mantra, Chakra, and subtle sound currents (Nadis).",
        ],
      },
      {
        id: 10,
        title: "Week 10: Integrating Sound Therapy & Modern Science",
        details: [
          "Integrating Binaural Beats and Isochronic Tones with traditional Japa.",
          "How Solfeggio Frequencies (e.g., 528Hz) enhance mantra's healing power.",
          "The science of mantra's effect on brainwaves (EEG) and heart coherence.",
          "Designing a 'Vibrational Bath' using multiple sound elements.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Fire Ritual (Havan) for Purification",
        details: [
          "The spiritual science and structure of a simple Mantra Havan (Fire Ritual).",
          "The role of offerings (Ahutis) and their energetic transformation.",
          "Performing a short, personal Havan for purification and manifestation.",
          "Learning how to transfer the spiritual merit (Punya) of your practice.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Lifetime Sadhana & Mentorship",
        details: [
          "Creating a sustainable, personalized lifetime healing routine (Sadhana).",
          "Advanced topics: Mantra & Astrology (Graha Shanti).",
          "The ethical guidelines (Yamas & Niyamas) for a mantra practitioner.",
          "Final review, Q&A, and certification ceremony.",
        ],
      },
    ],
  },
];

// --- Lecture Videos ---
const mantraHealingVideos = [
  {
    title: "The Science of Vibrational Medicine",
    thumbnail: "https://placehold.co/400x200/520080/FFFFFF?text=Vibration+Science+Video",
    link: "https://www.youtube.com/watch?v=science_of_vibration_placeholder",
  },
  {
    title: "Perfecting Japa Mala Technique",
    thumbnail: "https://placehold.co/400x200/008052/FFFFFF?text=Japa+Mala+Video",
    link: "https://www.youtube.com/watch?v=japa_mala_technique_placeholder",
  },
  {
    title: "Activating the Heart Chakra (Anahata)",
    thumbnail: "https://placehold.co/400x200/805200/FFFFFF?text=Heart+Chakra+Video",
    link: "https://www.youtube.com/watch?v=heart_chakra_mantra_placeholder",
  },
];


// --- Bonus Items ---
const mantraHealingBonus = [
  "Personalized Japa Mala Selection Guide (PDF)",
  "432Hz Healing Frequency Track (Download)",
  "Beginner Pronunciation Guide & Audio Files",
];

// --- Pricing Plans (Updated for 3-Month Curriculum) ---
const mantraHealingPricing = [
  {
    id: 1,
    key: "starter",
    name: "Svara Explorer",
    price: 3999,
    features: [
      "Month 1 Modules (Foundation - Weeks 1-4)", // UPDATED
      "Recorded Lectures",
      "Basic Q&A Forum Access",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Vibrational Master",
    price: 6999,
    features: [
      "All 3 Months / 12 Weeks Curriculum", // UPDATED
      "Lifetime Course Access",
      "Free Bonuses (All 3)",
      "4 Live Q&A Group Sessions (1 per month)", // Added sessions for 3 months
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Rishi Mentor",
    price: 10999,
    features: [
      "All Vibrational Master Features",
      "8 x 1:1 Mantra Mentorship Sessions", // Increased mentorship sessions
      "Custom Mantra Prescription & Sadhana Plan", // Enhanced feature description
      "Priority Email Support",
    ],
    isPopular: false,
  },
];

// --- Accordion for Modules (Reused with new styling) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-red-100">
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-yellow-200 rounded-b-xl"
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
        ? "bg-red-700 text-white border-4 border-yellow-300"
        : "bg-white text-gray-800 border-2 border-red-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ VIBRATION BOOST
      </div>
    )}

    <h3
      className={`text-3xl font-bold mb-4 ${
        plan.isPopular ? "text-white" : "text-red-700"
      }`}
    >
      {plan.name}
      
    </h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-300" : "text-red-800"
      }`}
    >
      ₹{plan.price}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-yellow-300" : "text-red-600"
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
          : "bg-red-100 text-red-700 hover:bg-red-200"
      }`}
    >
      Activate {plan.name}
    </motion.button>
  </motion.div>
);


export default function CourseDetailsPage() {
  const navigate = useNavigate();
  const courseTitle = "Mantra Healing Course: Svara & Science";

  const handleEnrollClick = (plan) => {
    // Unique courseId for Mantra Healing
    navigate(`/enrollnows?courseId=mantra-healing&plan=${plan.key}#enrollment-section`);
  };
  
  // The default enroll button links to the popular plan
  const defaultPlanKey = mantraHealingPricing.find(p => p.isPopular)?.key || mantraHealingPricing[0].key;

  // --- Enquiry Form State and Handlers ---
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleEnquiryChange = (e) => {
    setEnquiryForm({ ...enquiryForm, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", enquiryForm);
    alert("Thank you for your enquiry! Our Vibrational Guide will contact you shortly.");
    // Clear the form fields after submission
    setEnquiryForm({ name: "", email: "", phone: "", query: "" });
  };
  // ----------------------------------------

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
        <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
          Mantra Healing Course: <br />
          <span className="text-red-600">Vibrational Science for Inner Peace</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          A practical, science-backed program to cleanse your aura, balance your chakras, and heal the mind through sound.
        </p>

        <motion.button
          onClick={() =>
            handleEnrollClick(mantraHealingPricing.find(p => p.isPopular))
          }
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
        >
          👉 Start Your Healing Journey
        </motion.button>
      </section>

      {/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">🎥 Core Healing Lessons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mantraHealingVideos.map((video, i) => (
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
                    e.target.src = "https://placehold.co/400x200/520080/FFFFFF?text=Healing+Video";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Play className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-red-800">{video.title}</p>
              </motion.a>
            ))}
        </div>
</div>
      </section>
    
      {/* What You Will Learn (Curriculum) */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Mantra Healing Curriculum (12 Weeks)</span>
          </h2>

          {mantraHealingCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              {/* Block Header */}
              <div className="flex items-center mb-4 border-b-2 border-red-300 pb-2">
                {month.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-red-500 bg-red-100 px-3 py-1 rounded-full">
                    {month.duration}
                  </span>
                </h3>
              </div>
              <div className="space-y-3">
                {month.modules.map((module) => (
                  <CourseAccordionItem
                    key={module.id}
                    title={module.title}
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
              className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-red-600 to-yellow-500 active:scale-95`}
            >
              Download Full Vibrational Healing Toolkit
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-red-600 animate-bounce" /> 🎁{" "}
            <span className="font-bold">Sound Healing Bonuses</span> – Transform Your Practice!
          </h2>
          <p className="text-2xl font-bold text-red-800 mb-6">
            Unlock exclusive tools to deepen your mantra practice:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {mantraHealingBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
              >
                <Feather className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
        </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-red-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Vibrational Pathway</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {mantraHealingPricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🌟 Healing Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Priya, Bangalore", text: "I used to suffer from anxiety, but the Japa techniques taught here have brought a profound sense of inner calm and clarity." },
              { name: "Kiran, Mumbai", text: "The connection between Beej Mantras and Chakras was clearly explained. I feel energized and my sleep has drastically improved." },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-red-50 rounded-xl shadow-md"
              >
                <p className="text-gray-800 italic">“{t.text}”</p>
                <p className="mt-3 text-red-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section (Replaces Contact, Compacted) */}
      <section id="enquiry" className="py-10 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
        <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-2xl border-t-8 border-red-600">
          <h2 className="text-3xl font-serif text-red-700 mb-3 text-center">
            ❓ Have a Question? <span className={ACCENT_COLOR}>Enquire Now</span>
          </h2>
          <p className="text-gray-600 text-sm mb-4 text-center">
            Fill out the form below and our Vibrational Guide will contact you personally.
          </p>
          <form onSubmit={handleEnquirySubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-0.5">
                Your Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={enquiryForm.name}
                onChange={handleEnquiryChange}
                // Compact style: py-1
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="Ex: Anahata Sharma"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-0.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={enquiryForm.email}
                onChange={handleEnquiryChange}
                // Compact style: py-1
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="sadhaka@vibrations.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-0.5">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={enquiryForm.phone}
                onChange={handleEnquiryChange}
                // Compact style: py-1
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="+91 99887 76655 (For quick support)"
              />
            </div>
            <div>
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-0.5">
                Your Enquiry Details
              </label>
              <textarea
                name="query"
                id="query"
                rows="2" // Compact style: rows="2"
                required
                value={enquiryForm.query}
                onChange={handleEnquiryChange}
                // Compact style: py-1
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="E.g., Which plan covers Mahamrityunjaya Japa? What is the refund policy?"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-transform transform bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 active:scale-95`}
            >
              Submit Enquiry
            </motion.button>
          </form>
        </div>
      </section>

      {/* Custom Animations - REMOVED 'jsx' keyword for standard React compatibility */}
      <style>{`
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