


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift, Compass, Home } from "lucide-react"; // Replaced Hand with Compass and added Home
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" // Assuming this component is general enough
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';
// // Detailed 3-Month Curriculum for VASTU SHASTRA
// const fullCourseCurriculum = [
//   {
//     monthTitle: "🧭 Month 1: Foundations & The Energy Grid",
//     icon: <Compass className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: History & Panchamahabhutas (5 Elements)",
//         details: [
//           "Origin of Vastu Shastra and its link to Vedic texts.",
//           "Understanding the cosmic forces: Earth, Water, Fire, Air, and Space.",
//           "The relationship between the human body (Microcosm) and the building (Macrocosm).",
//           "Site Selection: Analyzing land slope, soil quality, and shape.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The 16 Vastu Zones (Directional Energy)",
//         details: [
//           "Detailed study of the 4 Cardinal and 12 Intercardinal directions.",
//           "Associated Deities, Colors, and Attributes for all 16 Zones (e.g., ENE for Joy, WSW for Education).",
//           "Using the Vastu Compass (Chakra) to precisely plot zones.",
//           "The importance of North (Kuber) and North-East (Ishanya).",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Vastu Purusha Mandala & Energy Flow",
//         details: [
//           "The Vastu Purusha Mandala: The energetic blueprint of the dwelling.",
//           "The *Brahmasthan*: The central energy field and its crucial role.",
//           "Analyzing extensions, cuts, and depressions in the floor plan.",
//           "Calculation of Aya, Vyaya, Yoni for energy matching.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Main Entrance (Mukhya Dwar) Vastu",
//         details: [
//           "Identification of 32 possible *Padas* (segments) on the entrance periphery.",
//           "Selection of the most auspicious *Padas* for wealth, health, and happiness.",
//           "Door orientation, materials, and size recommendations.",
//           "Analyzing defects (Doshas) near the entrance (pillars, obstacles, shadows).",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🏠 Month 2: Zonal Placement & Practical Application",
//     icon: <Home className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Kitchen Vastu (Agni Kone)",
//         details: [
//           "Ideal placement in the South-East (Fire element) and alternative zones.",
//           "Precise positioning of the gas stove (Fire) and water sink (Water).",
//           "Storage placement, color schemes, and balancing the fire element.",
//           "Vastu for appliances: Fridge, Microwave, and Exhaust.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Master Bedroom & Relationship Harmony",
//         details: [
//           "Ideal direction for the Master Bedroom (South-West) and children's rooms.",
//           "Optimal bed placement for sound sleep and health.",
//           "Mirror placement rules and why they are critical.",
//           "Vastu for wealth storage: Safe/Locker placement and direction.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Toilets, Bathrooms & Septic Tanks",
//         details: [
//           "Identifying and neutralising the 'extraction zones' (WNW, SSW).",
//           "Correct placement of commode, drainage, and water outlets.",
//           "Harmful placements: Toilet in NE or Brahmasthan and their severe effects.",
//           "Vastu tips for washing machines and laundry areas.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Pooja Room, Study Room & Office Vastu",
//         details: [
//           "Ideal directions for meditation and spiritual practice (NE, E).",
//           "Vastu for student focus: Desk direction, colors, and storage.",
//           "Home Office Vastu: Seating direction for productivity and success.",
//           "Staircase Vastu: Direction, rotation, and number of steps for stability.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "✨ Month 3: Remedies, Energy Balancing & Consulting",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Vastu Defects (Dosha) Analysis",
//         details: [
//           "Deep dive into identifying Doshas related to incorrect functional placement (e.g., Water tank in SE).",
//           "Analyzing the impact of external environment (T-junctions, electric poles, temples).",
//           "How to prioritize and grade Doshas based on their severity.",
//           "Case studies on residential and commercial property Vastu.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Remedial Vastu (Upay) - Practical Tools",
//         details: [
//           "Advanced use of *Metal Strips* for neutralising extensions and entrances.",
//           "Balancing zones using the 5-Element Color Theory (e.g., Blue for North).",
//           "Power of *Pyramid Yantras* and crystals for energy enhancement.",
//           "Suggested Vastu remedies for common issues like financial blockages and poor health.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Geopathic Stress & Earth Energies",
//         details: [
//           "Introduction to Geopathic Stress: Hartmann, Curry, and Benker Grids.",
//           "Practical dowsing techniques to identify negative earth energy lines.",
//           "Remedies for neutralizing Geopathic stress (copper rods, salt lamps).",
//           "Aura and Chakra Cleansing for Vastu practitioners.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Ethical Consulting & Final Project",
//         details: [
//           "The ethics of a professional Vastu Consultant: Responsibility and boundaries.",
//           "Structuring a professional Vastu report and client presentation.",
//           "Marketing tips for building a Vastu clientele.",
//           "Final assessment: Full Property Vastu Analysis Project (Residential/Commercial).",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "Digital 16-Zone Vastu Compass Template",
//     "Quick-Reference Ebook: Remedial Vastu for 16 Zones",
//     "Lifetime WhatsApp Q&A Group Access",
// ];

// const pricingPlans = [
//     {
//         name: "Vastu Foundation",
//         price: "₹2,999",
//         features: ["Month 1 Modules", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Vastu Acharya",
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Property Analysis Practicals"],
//         isPopular: true,
//     },
//     {
//         name: "Vastu Consultant",
//         price: "₹9,999",
//         features: ["All Vastu Acharya Features", "1:1 Mentorship Sessions (4)", "Advanced Remedial Vastu Techniques", "Priority Support"],
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
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-amber-100">
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-amber-200 rounded-b-xl" // Changed border color
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


// // Refactored Curriculum Snapshot Accordion for smooth animation
// const CurriculumAccordionItem = ({ title, content }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-amber-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-orange-700 hover:text-orange-800" // Changed text color
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

// // Component for the pricing card
// const PricingCard = ({ plan }) => (
//     <motion.div
//         whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//         className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//           ${plan.isPopular ? 'bg-orange-600 text-white border-4 border-yellow-300' : 'bg-white text-gray-800 border-2 border-amber-100'} 
//           h-full flex flex-col`}
//     >
//         {plan.isPopular && (
//             <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-orange-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//                 ✨ MOST POPULAR
//             </div>
//         )}
//         <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-orange-700'}`}>
//             {plan.name}
//         </h3>
//         <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-yellow-300' : 'text-orange-800'}`}>
//             {plan.price}
//         </p>

//         <ul className="space-y-3 flex-grow mb-8">
//             {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                     <CheckCircle2 
//                         className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-yellow-300' : 'text-orange-600'}`} 
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
//                       ? 'bg-yellow-300 text-orange-800 hover:bg-yellow-400' 
//                       : 'bg-amber-100 text-orange-700 hover:bg-amber-200' // Changed normal button colors
//                   }`}
//             >
//                 Choose Plan
//             </motion.button>
//         </Link>
//     </motion.div>
// );


// export default function VastuCourse() {
//   // Updated video content for Vastu Shastra
//   const lectureVideos = [
//     {
//       title: "Vastu Fundamentals: The 5 Elements and 16 Zones",
//       thumbnail: "https://t4.ftcdn.net/jpg/05/73/46/74/360_F_573467475_O4Y0Xy4q9iN9k3yM4lK5j7V1Z3f9W5t3.jpg", // Placeholder for Vastu blueprint
//       link: "https://www.youtube.com/watch?v=vastu-fundamentals", // Placeholder link
//     },
//     {
//       title: "Main Entrance Vastu: Placement, Padas, and Energy Flow",
//       thumbnail: "https://img.freepik.com/premium-photo/architectural-plan-compass-with-pencil_1033481-1209.jpg", // Placeholder for entrance/compass
//       link: "https://www.youtube.com/watch?v=vastu-main-entrance", // Placeholder link
//     },
//     {
//       title: "Effective Vastu Remedies: Using Colors, Metals & Objects",
//       thumbnail: "https://media.istockphoto.com/id/1173615560/photo/pyramids-and-crystals.jpg?s=612x612&w=0&k=20&c=X7wEw0V7v1O0Q-4c8O2v0qS9F5G1p3K1sR7Z8Yj8O6c=", // Placeholder for remedies/pyramids
//       link: "https://www.youtube.com/watch?v=vastu-remedies", // Placeholder link
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-serif text-orange-800 drop-shadow-md leading-snug">
//             Harmonize Your Home & Life with <br />
//             <span className="text-orange-600">Ancient Vastu Shastra</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Master the Science of Vedic Architecture, Energy Balancing & Remedial Techniques.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-yellow-300 hover:bg-yellow-500 text-orange-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//             >
//               <Play size={18} /> Watch Preview
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Soft Glowing Orb Background */}
//         <div className="absolute w-[600px] h-[600px] bg-amber-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-orange-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-amber-700 mb-8">🎥 Vastu Shastra Lecture Videos</h2>
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
//                   <Play className="text-white w-14 h-14 bg-orange-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-orange-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
//     
//       {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-amber-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Curriculum</span>
//           </h2>

//           {fullCourseCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Month Header */}
//               <div className="flex items-center mb-4 border-b-2 border-amber-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-orange-500 bg-yellow-100 px-3 py-1 rounded-full">
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
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-orange-600 to-red-600 active:scale-95`}
//             >
//               Download Full Curriculum PDF
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>


//       {/* Bonus Section (New Addition) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-amber-300 rounded-3xl bg-yellow-50">
//             <h2 className="text-4xl font-serif text-amber-700 mb-6 flex justify-center items-center gap-3">
//                 <Gift className="w-8 h-8 text-orange-600 animate-bounce"/> 
//                 🏠 <span className="font-bold">Bonus Section</span> – Limited Time!
//             </h2>
//             <p className="text-2xl font-bold text-orange-800 mb-6">
//                 🎁 Free Vastu Tools Worth ₹2,000:
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//                 {bonusItems.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1, duration: 0.5 }}
//                         className="p-4 bg-white rounded-xl shadow-lg border border-amber-100 flex items-center justify-center text-center"
//                     >
//                         <CheckCircle2 className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0" />
//                         <span className="font-medium text-gray-700">{item}</span>
//                     </motion.div>
//                 ))}
//             </div>
//             <p className="mt-8 text-lg text-red-500 font-semibold">
//                 *Enroll in the 'Vastu Acharya' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-amber-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Vastu Path</span>
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
//           <h2 className="text-4xl font-serif text-amber-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Priya, Delhi", text: "I fixed the placement of my kitchen and saw immediate positive changes in my family's health. The course is phenomenal!" },
//               { name: "Akash, Bengaluru", text: "The 16-Zone balancing techniques are a game-changer. I now consult professionally for small offices." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-yellow-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-orange-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-amber-700 mb-8">📩 Contact / Help</h2>
//           <p>💌 Email: support@vastuvedic.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🧭 Book Free Vastu Analysis
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





import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Gift,
  // Updated Lucide icons for Vastu theme
  Sun, // Using Sun for Vastu Energy/Light
  Maximize, // Using Maximize for Space/Direction
  Feather, // Re-using for bonuses/lightness
  Send, // Added for the form button
  Mail, // Added for the form header
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// --- Configuration: FIXED and COMPLETED with Yellow/Orange/Amber theme ---
const PRIMARY_COLOR = "bg-orange-700"; // Main color for buttons/accents (deep orange)
const ACCENT_COLOR = "text-red-600"; // Light yellow highlight color
const HOVER_COLOR = "hover:bg-gradient-to-r from-yellow-500 to-orange-400"; // Hover state for primary color
const BUTTON_COLOR =
  "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-500"; // Main CTA gradient
const HEADING_COLOR = "text-black"; // Darker orange for text contrast
const BACKGROUND_GRADIENT = "bg-yellow-100"; // Light yellow and orange background

// Detailed 3-Month Curriculum for Vastu Shastra
const vastuShastraCurriculum = [
  {
    monthTitle: "Month 1: 🧭 Foundations & Directions (4 Weeks)",
    icon: <Maximize className="w-5 h-5 mr-3" />,
    duration: "Foundational Vastu",
    modules: [
      {
        id: 1,
        title: "Week 1: History, Core Principles (Panchbhuta) & Energy",
        details: [
          "Historical origins of Vastu and its connection to Vedic texts.",
          "Mastering the five elements (Panchbhuta: Earth, Water, Fire, Air, Space) and their balance.",
          "Understanding the vital energy flow—Prana—within buildings and plots.",
        ],
      },
      {
        id: 2,
        title: "Week 2: The 16 Directions (Zones) & Deities",
        details: [
          "In-depth study of the 8 major directions and 8 sub-directions (16 Vastu Zones).",
          "Learning the significance of each Dikpala (Guardian Deity) for health, wealth, and relationships.",
          "Practical use of a compass to determine exact energy zones.",
        ],
      },
      {
        id: 3,
        title: "Week 3: The Vastu Purusha Mandala & Site Analysis",
        details: [
          "Deciphering the Vastu Purusha Mandala—the cosmic man in the plot.",
          "Analysis of plot shapes, slopes, and the impact of neighboring structures.",
          "Determining the most auspicious place for boring and water bodies (Northeast).",
        ],
      },
      {
        id: 4,
        title: "Week 4: Entrance and Main Gate Placement (32 Padas)",
        details: [
          "Detailed study of the 32 Padas (segments) of the main entrance.",
          "Identifying the most auspicious entry points for positive flow (Subh-Dwar).",
          "Remedies and corrections for incorrectly positioned main doors.",
        ],
      },
    ],
  },
  {
    monthTitle: "Month 2: 🏠 Core Zones & Practical Applications (4 Weeks)",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "Residential Mastery",
    modules: [
      {
        id: 5,
        title: "Week 5: Kitchen (Fire Zone) & Dining Vastu",
        details: [
          "Placement of the fireplace (Agni) and storage in the South-East zone.",
          "Correct positioning of sink, refrigerator, and gas stove to avoid water-fire conflict.",
          "Designing a balanced Dining Area for health and family cohesion.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Master Bedroom, Toilets & Bathrooms",
        details: [
          "Ensuring strong support: Master Bedroom placement (South-West) for stability and prosperity.",
          "Vastu principles for children's bedrooms, study desks, and guest rooms.",
          "Strategic placement and non-destructive remedial measures for toilets (energy disposal).",
        ],
      },
      {
        id: 7,
        title: "Week 7: Living Room, Puja Room & Staircases",
        details: [
          "Optimizing the Living Room (North/East zones) for social energy and fame.",
          "The ideal direction and layout for the sacred Puja (Worship) Room.",
          "Vastu rules for internal and external staircases (rotation, steps count, location).",
        ],
      },
      {
        id: 8,
        title: "Week 8: Interior Element Balancing (Color, Light, Objects)",
        details: [
          "The psychology of Vastu-recommended colors for each of the 16 zones.",
          "Using light sources (Natural & Artificial) to manipulate zone energies.",
          "Correct placement of mirrors, statues, paintings, and plants.",
        ],
      },
    ],
  },
  {
    monthTitle: "Month 3: 🔨 Remedies & Professional Consulting (4 Weeks)",
    icon: <Sun className="w-5 h-5 mr-3" />,
    duration: "Consultancy & Remedies",
    modules: [
      {
        id: 9,
        title: "Week 9: Non-Destructive Remedial Techniques",
        details: [
          "Implementing Pyramids, Yantras, and specific metals (Copper, Brass) for energy correction.",
          "Use of salt, specific crystal grids, and aromatic plants (Aroma Vastu) to neutralize defects.",
          "Simple, budget-friendly remedies that do not require demolition.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Commercial Vastu (Office, Shops, Factories)",
        details: [
          "Vastu principles for business growth: Cash counter, owner's seat, and product display.",
          "Layouts for offices: staff seating arrangement and desk directions.",
          "Vastu for factories: machinery placement and raw material storage areas.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Agricultural Vastu & Project Development",
        details: [
          "Vastu for farming: well placement, crop direction, and cattle shed location.",
          "Review of project design: applying Vastu from blueprint stage.",
          "Understanding and correcting road hits (Vedha Dosha).",
        ],
      },
      {
        id: 12,
        title: "Week 12: Professional Vastu Audit and Certification",
        details: [
          "Mastering the steps for a professional Vastu audit and client report generation.",
          "Review of complex, real-world case studies and their solutions.",
          "Ethics, marketing, and final Vastu Consultant Certification.",
        ],
      },
    ],
  },
];

// --- Lecture Videos (Vastu themed) ---
const vastuVideos = [
  {
    title: "Understanding the 16 Vastu Zones",
    thumbnail: "https://placehold.co/400x200/FFA500/8B4513?text=Vastu+Zones",
    link: "https://www.youtube.com/watch?v=vastu_zones_placeholder",
  },
  {
    title: "How to Correctly Read the Vastu Compass",
    thumbnail: "https://placehold.co/400x200/FFD700/8B4513?text=Vastu+Compass",
    link: "https://www.youtube.com/watch?v=vastu_compass_placeholder",
  },
  {
    title: "Kitchen Placement: Fire Element Balance",
    thumbnail: "https://placehold.co/400x200/FF8C00/8B4513?text=Vastu+Kitchen",
    link: "https://www.youtube.com/watch?v=vastu_kitchen_placeholder",
  },
];


// --- Bonus Items (Vastu themed) ---
const vastuBonus = [
  "Comprehensive Vastu Audit Checklist (Printable PDF)",
  "Digital Vastu Purusha Mandala Template",
  "Color & Element Quick Reference Chart",
];

// --- Pricing Plans (Vastu themed) ---
const vastuPricing = [
  {
    id: 1,
    key: "starter",
    name: "Basic Plan",
    price: 3499,
    features: [
      "Month 1 Modules (Foundations)",
      "Recorded Lectures Access",
      "Vastu Audit Checklist",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Vastu Consultant",
    price: 5999,
    features: [
      "All 3 Months Curriculum",
      "Lifetime Course Access",
      "Free Bonuses (All 3)",
      "2 Live Site Analysis Group Sessions",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Professional Plan",
    price: 6999,
    features: [
      "All Vastu Consultant Features",
      "4 x 1:1 Vastu Case Study Reviews",
      "Custom Vastu Report Template",
      "Priority WhatsApp Consulting",
    ],
    isPopular: false,
  },
];

// --- Accordion for Modules (Color Updated) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-orange-100">
      <motion.button
        className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 bg-yellow-500 ${HOVER_COLOR}`}
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-yellow-300 rounded-b-xl"
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

// --- Pricing Card Component (Color Updated) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-orange-600 text-white border-4 border-yellow-300"
        : "bg-white text-gray-800 border-2 border-orange-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-orange-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ MOST POPULAR
      </div>
    )}

    <h3
      className={`text-3xl font-bold mb-4 ${
        plan.isPopular ? "text-white" : "text-orange-400"
      }`}
    >
      {plan.name}
    </h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-300" : "text-red-700"
      }`}
    >
      ₹{plan.price}
    </p>

    <ul className="space-y-3 flex-grow mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2
            className={`w-5 h-5 mr-2 flex-shrink-0 ${
              plan.isPopular ? "text-yellow-300" : "text-orange-600"
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
          ? "bg-yellow-300 text-orange-800 hover:bg-yellow-400"
          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
      }`}
    >
      Start with {plan.name}
    </motion.button>
  </motion.div>
);


// --- New Enquire Form Component (Replaces Contact Us) ---
const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        className="mt-1 block w-full px-3 py-1.5 border border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800" // Reduced padding
        aria-label={label}
      />
    </div>
  );

  const TextAreaField = ({ label, name, required = true }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-left text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name="message"
        id="message"
        rows="3" // Reduced rows for smaller height
        required={required}
        value={formData.message}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-800"
        aria-label={label}
      ></textarea>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-yellow-50 rounded-xl shadow-xl border-2 border-orange-300"> {/* Reduced padding and border size */}
      <h3 className="text-2xl font-serif text-orange-700 mb-4 text-center flex items-center justify-center">
        <Mail className="w-6 h-6 mr-2 text-orange-600" /> Course Enquire Form
      </h3>
      <p className="text-gray-600 mb-5 text-center text-sm">
        Have specific questions about the curriculum, certification, or 1:1 mentorship? Send us a message!
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
            <p className="font-bold text-base">Success! Your enquiry has been sent.</p>
            <p className="text-xs">We will contact you at {formData.email} shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <InputField label="Your Full Name" name="name" />
            <InputField label="Email Address" name="email" type="email" />
            {/* Subject field is intentionally removed for brevity */}
            <TextAreaField label="Your Specific Question or Message" name="message" />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center py-2 rounded-full font-semibold text-base shadow-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-400 hover:to-yellow-600`} // Using a white text button color for better contrast
            >
              <Send className="w-4 h-4 mr-2" /> Send Enquiry
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};


export default function VastuShastraCourseDetails() {
  const navigate = useNavigate();
  
  const handleEnrollClick = (plan) => {
    // Unique courseId for Vastu Shastra
    navigate(`/enrollnows?courseId=vastu-shastra&plan=${plan.key}#enrollment-section`);
  };
  
  // The default enroll button links to the popular plan
  const popularPlan = vastuPricing.find(p => p.isPopular);

  return (
    <div className={`font-sans text-gray-800 ${BACKGROUND_GRADIENT} overflow-hidden`}>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-800 drop-shadow-md leading-snug">
          Vastu Shastra Course: <br />
          <span className={HEADING_COLOR}>Master the Science of Space & Energy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          A comprehensive 3-month program to balance the five elements, apply practical remedies, and become a certified Vastu consultant.
        </p>

        <motion.button
          onClick={() => handleEnrollClick(popularPlan)}
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-400 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
        >
          👉 Start Your Vastu Mastery
        </motion.button>
      </section>

      {/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className={`text-4xl font-serif ${HEADING_COLOR} mb-10`}>🎥 Practical Vastu Lessons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vastuVideos.map((video, i) => (
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
                    e.target.src = "https://placehold.co/400x200/FF8C00/FFFFFF?text=Vastu+Video";
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
      
      {/* What You Will Learn (Curriculum) */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl font-serif ${HEADING_COLOR} mb-10 text-center`}>
            📘 Complete <span className={ACCENT_COLOR}>3-Month Vastu Shastra Curriculum</span>
          </h2>

          {vastuShastraCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              {/* Block Header */}
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
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
              className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-orange-600 to-yellow-500 active:scale-95`}
            >
              Download Full Curriculam PDF
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-orange-600 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁{" "}
            <span className="font-bold text-red-700">Essential Vastu Bonuses</span> – Secure Your Space!
          </h2>
          <p className="text-2xl font-bold text-orange-800 mb-6">
            Unlock exclusive tools to perfect your Vastu application:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {vastuBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
              >
                <Feather className="w-5 h-5 mr-2 text-orange-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-serif ${HEADING_COLOR} mb-12 text-center`}>
            ✨ Choose Your <span className={ACCENT_COLOR}>Vastu Pathway</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {vastuPricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700  mb-10">
            🌟 Vastu Transformation Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Rajesh, Delhi", text: "After applying the kitchen and entrance remedies, my business saw a significant boost in revenue within 3 months. The course is very practical." },
              { name: "Sangeeta, Pune", text: "I was able to fix the Vastu dosha in my bedroom without any demolition using the suggested color and object placements. My sleep and family peace have improved greatly." },
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

      {/* Enquire Form Section (Replaced old Contact) */}
      <section id="contact" className={`py-12 px-6 ${BACKGROUND_GRADIENT}`}> {/* Reduced padding (py-12) for compactness */}
        <EnquireForm />
        <div className="max-w-xl mx-auto text-center mt-6"> {/* Added supporting contact details */}
          <p className="text-lg text-gray-700 mb-2 font-semibold">
            **Or Contact Us Directly**
          </p>
          <p className="text-md text-gray-600">
            💌 Email: **vastu@vastuscience.com** | 📱 WhatsApp: **+91 91234 56789**
          </p>

        </div>
      </section>
    </div>
  );
}