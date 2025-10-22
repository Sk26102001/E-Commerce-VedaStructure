// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift } from "lucide-react"; // Removed Hand icon
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" 
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum for SACRED TEXTS READING COURSE
// const fullCourseCurriculum = [
//   {
//     monthTitle: "📜 Month 1: Foundations of Textual Interpretation",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: History, Context, and Canon Formation",
//         details: [
//           "The role of sacred texts across cultures and history.",
//           "Understanding the process of canonization and compilation.",
//           "The critical importance of historical and cultural context (Sitz im Leben).",
//           "Introduction to manuscript tradition and transmission.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Hermeneutics: The Art of Interpretation",
//         details: [
//           "Principles of General and Special Hermeneutics.",
//           "Understanding the 'hermeneutical circle' (whole to part, part to whole).",
//           "The interpreter's presuppositions and biases.",
//           "Applying different schools of thought: Literal, Allegorical, Moral, Anagogical.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Textual Criticism and Source Analysis",
//         details: [
//           "Introduction to Textual Criticism: Identifying and evaluating variant readings.",
//           "Understanding the differences between primary, secondary, and tertiary sources.",
//           "Source Criticism: Identifying distinct authors/documents within a text (e.g., Documentary Hypothesis).",
//           "Using critical apparatuses and scholarly editions.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Genre Studies: Poetry, Law, and Narrative",
//         details: [
//           "Interpreting **Narrative**: Plot, character, setting, and point of view.",
//           "Interpreting **Ancient Law** codes and ethical systems.",
//           "Interpreting **Sacred Poetry/Hymns**: Parallelism, metaphor, and rhetorical devices.",
//           "The specialized reading of Prophecy and Apocalyptic Literature.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔎 Month 2: Advanced Exegesis & Comparative Study",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Linguistic Tools: Etymology and Semantic Fields",
//         details: [
//           "Deep dive into the importance of original languages (Hebrew, Greek, Sanskrit etc.).",
//           "Tracing the **etymology** of key theological/philosophical terms.",
//           "Analyzing **semantic fields** to determine the full range of a word's meaning.",
//           "Understanding idiom, hyperbole, and figurative language in ancient contexts.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Exegesis Techniques: Historical and Literary Methods",
//         details: [
//           "Mastering **Historical-Critical Method** and its limitations.",
//           "Applying **Literary Criticism** (structuralism, narrative criticism) to sacred texts.",
//           "Form Criticism: Identifying the original setting/function of a text unit.",
//           "Redaction Criticism: Analyzing the editor's theological purpose.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Intertextuality and Typological Reading",
//         details: [
//           "Defining and applying **Intertextuality**: How texts reference and reshape each other.",
//           "Typology: Identifying patterns, precursors, and fulfillment across texts.",
//           "The concept of **Canonical Context**: Reading a text within its entire collected tradition.",
//           "Case study: Analyzing the development of a core theme (e.g., salvation, dharma) across a tradition.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Comparative Study of Wisdom Traditions",
//         details: [
//           "Comparing creation myths, flood narratives, and ethical mandates across traditions (e.g., Vedic, Abrahamic, Taoist).",
//           "The role of the 'sage' and wisdom literature globally.",
//           "Identifying universal themes and cultural distinctives in sacred literature.",
//           "Methodologies for respectful and critical comparative religious scholarship.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "💡 Month 3: Spiritual Practice & Ethical Application",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: The Contemplative Reading (Lectio Divina)",
//         details: [
//           "Moving from academic analysis to spiritual engagement (meditation, prayer).",
//           "The four stages of Lectio Divina: Reading, Meditation, Prayer, Contemplation.",
//           "Practicing mindfulness and deep memorization of key passages.",
//           "Techniques for internalizing the text's message for personal transformation.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Systematic Theology/Philosophy of the Text",
//         details: [
//           "Synthesizing disparate texts into a coherent system of belief (Systematic Theology/Philosophy).",
//           "Defining core doctrinal/philosophical concepts (e.g., God, self, cosmos, liberation).",
//           "Addressing internal contradictions and paradoxes within the text.",
//           "Developing a personal statement of faith or philosophical credo based on your reading.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Ethical Decision-Making and Application (Praxis)",
//         details: [
//           "Applying ancient ethical mandates to modern moral dilemmas.",
//           "The process of deriving principles (e.g., justice, compassion) from narratives and laws.",
//           "Social and political implications of sacred texts (e.g., social justice, governance).",
//           "Case studies in practical, applied ethics.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Scholarly Presentation & Final Exegesis Project",
//         details: [
//           "Structuring and writing a formal scholarly exegesis paper.",
//           "Techniques for public presentation and teaching of sacred texts.",
//           "Ethics of an Interpreter: Responsibility, intellectual honesty, and humility.",
//           "Final assessment: Comprehensive Exegesis and Application Project.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "Annotated Bibliography of Primary and Secondary Sources",
//     "Comprehensive Glossary of Key Hermeneutical Terms (PDF)",
//     "Lifetime Access to Weekly Scholars' Reading Group", // Changed Q&A to Reading Group
// ];

// const pricingPlans = [
//     {
//         name: "Foundational Scholar", // Changed from Basic Reader
//         price: "₹2,999",
//         features: ["Month 1 Modules", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Textual Master", // Changed from Hastrekha Master
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Textual Analysis Workshops"], // Changed practicals to workshops
//         isPopular: true,
//     },
//     {
//         name: "Exegesis Expert", // Changed from Chirognomy Expert
//         price: "₹9,999",
//         features: ["All Textual Master Features", "1:1 Mentorship Sessions (4)", "Advanced Critical Theory Application", "Priority Support"], // Changed advanced techniques
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
//       whileHover={{ scale: plan.isPopular ? 1.05 : 1.03, zIndex: 10 }}
//       className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 
//         ${plan.isPopular ? 'bg-orange-500 text-white border-4 border-yellow-300' : 'bg-white text-gray-800 border-2 border-orange-100'} 
//         h-full flex flex-col`}
//     >
//       {plan.isPopular && (
//           <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-orange-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//               ✨ MOST POPULAR
//           </div>
//       )}
//       <h3 className={`text-3xl font-bold font-serif mb-4 ${plan.isPopular ? 'text-white' : 'text-orange-700'}`}>
//           {plan.name}
//       </h3>
//       <p className={`text-5xl font-extrabold mb-6 ${plan.isPopular ? 'text-yellow-300' : 'text-orange-800'}`}>
//           {plan.price}
//       </p>

//       <ul className="space-y-3 flex-grow mb-8">
//           {plan.features.map((feature, index) => (
//               <li key={index} className="flex items-start">
//                   <CheckCircle2 
//                       className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-yellow-300' : 'text-orange-600'}`} 
//                   />
//                   <span className={`${plan.isPopular ? 'text-white/90' : 'text-gray-700'}`}>{feature}</span>
//               </li>
//           ))}
//       </ul>

//       <Link to="/enrollnow" className="mt-auto ">
//           <motion.button
//               whileTap={{ scale: 0.98 }}
//               className={` w-full py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-md
//                 ${plan.isPopular 
//                     ? 'bg-yellow-300 text-orange-800 hover:bg-yellow-400' 
//                     : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
//                 }`}
//           >
//               Choose Plan
//           </motion.button>
//       </Link>
//     </motion.div>
// );


// export default function SacredTextsCourse() { // Renamed Component
//   // Updated video content for Sacred Texts
//   const lectureVideos = [
//     {
//       title: "Introduction to Hermeneutics: The Interpreter's Task",
//       thumbnail: "https://t3.ftcdn.net/jpg/01/21/53/78/360_F_121537841_XN448XoM61gN0kYgC1r13T2Xh52Y4zX1.jpg", // Generic thumbnail
//       link: "https://www.youtube.com/watch?v=sacred-texts-hermeneutics", // Placeholder link
//     },
//     {
//       title: "Genre Study: Reading Ancient Law and Narrative",
//       thumbnail: "https://img.freepik.com/premium-photo/close-up-palm-hand-with-clear-lines-focus-palmistry-concept_1033481-1188.jpg", // Generic thumbnail
//       link: "https://www.youtube.com/watch?v=sacred-texts-genre", // Placeholder link
//     },
//     {
//       title: "Comparative Analysis: Texts from East and West",
//       thumbnail: "https://media.istockphoto.com/id/1151606775/photo/close-up-of-a-mans-hand-showing-palm-lines.jpg?s=612x612&w=0&k=20&c=M05i_N7338_21Xo-D5Y3n1e831V5i2G1p1H_Ym0Q-6c=", // Generic thumbnail
//       link: "https://www.youtube.com/watch?v=sacred-texts-comparative", // Placeholder link
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
//             Unlock Ancient Wisdom with a Profound <br />
//             <span className="text-orange-600">Sacred Texts Reading Course</span> {/* Updated Title */}
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Master **Hermeneutics**, **Exegesis**, and **Comparative Study** of Global Holy Writings. {/* Updated Subtitle */}
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
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Exegesis Lecture Videos</h2> {/* Updated Title */}
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
//                 📜 <span className="font-bold">Bonus Section</span> – Limited Time! {/* Updated Icon */}
//             </h2>
//             <p className="text-2xl font-bold text-orange-800 mb-6">
//                 🎁 Free Resources Worth ₹2,000:
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
//                 *Enroll in the 'Textual Master' tier or above to claim these bonuses instantly! {/* Updated tier name */}
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Scholarship Tier</span> {/* Updated Title */}
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
//               { name: "Pooja, Mumbai", text: "I can now analyze difficult philosophical texts with clarity. This course is transformative!" }, // Updated text
//               { name: "Rajiv, Dubai", text: "The Exegesis techniques are a game-changer. Excellent scholarly approach." }, // Updated text
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
//           <p>💌 Email: support@sacredtextacademy.com</p> {/* Updated Email */}
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             📜 Book Free Consultation {/* Updated Text/Icon */}
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
//   BookOpen, // Used for the core book/text study
//   Gift,
//   Sun, // Used for the first month's foundation (dawn of knowledge)
//   Target, // Used for the second month's application/focus
//   BarChart2, // Used for the third month's advanced analysis
//   Feather, // New icon for authorship/writing
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration: Updated Colors to Yellow/Orange/Saffron-Maroon ---
// const PRIMARY_COLOR = "bg-red-900"; // Deep Saffron/Maroon for strong contrast
// const ACCENT_COLOR = "text-orange-600"; // Vibrant Orange for accents
// const HOVER_COLOR = "hover:bg-red-800";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700"; // Orange and Yellow for CTA

// // --- Curriculum: Updated for Sacred Texts Reading Course ---
// const sacredTextsCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundational Literacy and Context",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Vedic Literature & Genres",
//         details: [
//           "Defining 'Sacred Text': Sruti (Revealed) vs. Smriti (Remembered).",
//           "Overview of the **Vedas, Upaniṣads, Purāṇas, and Itihāsas** (Epics).",
//           "Understanding the context (Desa, Kāla, Pātra) of the texts.",
//           "Exercise: Identifying primary authors and their traditions.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Vocabulary and Key Philosophical Concepts",
//         details: [
//           "Mastering the **108 essential Sanskrit terms** (e.g., *Dharma, Karma, Mokṣa*).",
//           "Decoding philosophical dualities (e.g., *Prakṛti* and *Puruṣa*).",
//           "Introduction to the structure of Sanskrit syntax for reading verses (Ślokas).",
//           "Reading Practice: Basic *Subhāṣitas* (Moral Sayings) and simple verses.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Textual Criticism and Line-by-Line Analysis",
//         details: [
//           "Techniques for identifying **Sandhi** (euphonic combinations) to separate words.",
//           "Understanding the role of **Commentaries (Bhāṣyas)** in interpreting texts.",
//           "The importance of different **Recensions (Pāṭha-bhedas)** in text study.",
//           "Practical Reading: Verse-by-verse analysis of the *Isha Upaniṣad*.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The Core Message of the Upaniṣads",
//         details: [
//           "Deep dive into **Māṇḍūkya Upaniṣad** and the concept of *Turīya* (The Fourth State).",
//           "Analyzing the Mahāvākyas (Great Sayings) like *Aham Brahmāsmi*.",
//           "Revision and a textual translation quiz based on the first four weeks' readings.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: Applied Study - The Bhagavad Gītā",
//     icon: <Target className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Gītā's Framework and Sāṅkhya Yoga",
//         details: [
//           "Introduction to the *Mahābhārata* context and the setting of the Gītā.",
//           "Detailed reading of **Chapter 1: Arjuna Viṣāda Yoga** (The anguish).",
//           "In-depth textual study of **Chapter 2: Sāṅkhya Yoga** (Theory of reality).",
//           "Focus: Analyzing the definition of the *Ātman* (Soul) in the text.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Karma Yoga (The Path of Action)",
//         details: [
//           "Verse-by-verse reading of **Chapter 3: Karma Yoga**.",
//           "Understanding *niyataṁ karma* (prescribed action) directly from the Sanskrit.",
//           "Practical Exercise: Comparing different English translations of key *karma* verses.",
//           "Focus: The concept of **Svadharma** (One's own duty) in the text.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Jñāna and Bhakti Yoga",
//         details: [
//           "Textual analysis of **Chapter 4: Jñāna Karma Sannyāsa Yoga** (Knowledge and Renunciation).",
//           "The essence of **Chapter 9: Rāja Vidyā Rāja Guhya Yoga** (Sovereign Secret).",
//           "Reading Practice: Identifying rhetorical devices (Alankāra) used by Vyāsa.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: The Viśvarūpa and The Final Verses",
//         details: [
//           "Critical reading of key verses from **Chapter 11: Viśvarūpa Darśana Yoga** (Universal Form).",
//           "Analysis of **Chapter 18: Mokṣa Sannyāsa Yoga** (Renunciation unto Salvation).",
//           "Final Gītā Project: Presenting a textual reading and interpretation of a chosen chapter.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔭 Month 3: Epic & Purāṇic Literature Reading",
//     icon: <Feather className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Vālmīki's Rāmāyaṇa - Aesthetics and Meter",
//         details: [
//           "Introduction to the Epic **Anuṣṭubh** meter for fluid reading.",
//           "Reading the opening sections (*Bāla Kāṇḍa*)—story of Vālmīki becoming a poet.",
//           "Focus on textual descriptions (*Varṇana*) of nature and characters.",
//           "Reading Assignment: Comparing the text with regional adaptations.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: The Stories of the Purāṇas",
//         details: [
//           "Understanding the Pañca Lakṣaṇa (Five Marks) of Purāṇic literature.",
//           "Textual study of a section from the **Bhāgavata Purāṇa** (e.g., Kr̥ṣṇa's childhood).",
//           "Decoding mythological narratives and their underlying symbolic meanings.",
//           "Focus: Reading the creation account from a selected Purāṇa.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Dharmaśāstras and Ethics",
//         details: [
//           "Reading introductory verses from **Manu Smṛti** (The Law Codes).",
//           "Analyzing the textual description of *Varṇa* and *Āśrama* (Stages of Life).",
//           "Case Study: Examining the textual basis of social ethics in the *Arthaśāstra*.",
//           "Understanding the limitations and context of these texts for modern reading.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Capstone Reading Project & Synthesis",
//         details: [
//           "Independent reading project on a short, student-chosen sacred text/hymn.",
//           "Synthesizing knowledge of context, vocabulary, and textual mechanics.",
//           "Ethics of Interpretation: Responsibility in reading and sharing sacred texts.",
//           "Final certification and reading mastery assessment.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section: Updated for Sacred Texts ---
// const sacredTextsVideos = [
//   {
//     title: "How to Mentally Unpack a Sanskrit Sloka",
//     thumbnail: "https://placehold.co/400x200/991B1B/FBBF24?text=Sloka+Unpacking+Guide",
//     link: "#",
//   },
//   {
//     title: "The Context: Vedas vs. Purāṇas, Explained Simply",
//     thumbnail: "https://placehold.co/400x200/F59E0B/991B1B?text=Textual+Context+Video",
//     link: "#",
//   },
//   {
//     title: "Bhagavad Gītā Chapter 2: The Core Teachings",
//     thumbnail: "https://placehold.co/400x200/991B1B/FBBF24?text=Gita+Reading+Sample",
//     link: "#",
//   },
// ];

// // --- Bonus Section: Updated for Sacred Texts ---
// const sacredTextsBonus = [
//   "Comprehensive Glossary of 200 Key Terms",
//   "Guide to Sanskrit Metre (Chandas) for Recitation",
//   "Digital Library of Referenced Texts & Commentaries",
// ];

// // --- Pricing Plans: Updated for Sacred Texts ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Textual Reader",
//     price: 999,
//     features: [
//       "Months 1 & 2 Modules (Foundation & Gītā Study)",
//       "Recorded Video Lectures & PDFs",
//       "Module-wise Quizzes and Reading Materials",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Śāstra Master",
//     price: 2199,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Digital Library Access & Glossary",
//       "4 Live Interpretation Q&A Sessions",
//       "Final Reading Project Review",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Traditional Scholar",
//     price: 3999,
//     features: [
//       "All Śāstra Master Features",
//       "4 x 1:1 Mentorship Sessions on Textual Interpretation",
//       "Module on Advanced Comparative Philosophy",
//       "Dedicated Scholar Community Forum",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Using Maroon for the button contrast
//   const accordionPrimaryColor = "bg-red-900";
//   const accordionHoverColor = "hover:bg-red-800";

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
//         ? "bg-red-900 text-white border-4 border-orange-400" // Popular: Maroon with Bright Orange border
//         : "bg-white text-gray-800 border-2 border-yellow-200" // Standard: White with Light Yellow border
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-orange-400 text-red-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
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
//           ? "bg-orange-400 text-red-900 hover:bg-orange-500" // Popular button: Orange/Maroon
//           : "bg-yellow-100 text-orange-700 hover:bg-yellow-200" // Standard button: Light Yellow/Orange
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function SacredTextsCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Note: navigate function is mocked as it relies on 'react-router-dom'
//     // console.log(
//     //   `Navigating to enrollment for course: sacred-texts-reading, plan: ${plan.key}`
//     // );
//     navigate(`/enrollnows?courseId=sacred-texts-reading&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-red-900 leading-snug">
//           The Inner Library: <br />
//           <span className="text-orange-600">Sacred Texts Reading & Interpretation</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Go beyond translations. Learn the mechanics, vocabulary, and context to **read and interpret**
//           the *Bhagavad Gītā*, *Upaniṣads*, and Epics in their original form.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             handleEnrollClick(
//               pricingPlans.find((p) => p.key === defaultPlanKey)
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-red-900 px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Śāstra Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-900 mb-10">
//             🎥 Essential Textual Skills
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {sacredTextsVideos.map((video, i) => (
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
//                   <Play className="text-white w-14 h-14 bg-red-800 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-red-900">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-red-900 mb-10 text-center">
//             📘 Complete <span className="text-orange-600">3-Month Sacred Texts Curriculum</span>
//           </h2>
//           {sacredTextsCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-red-800 bg-yellow-200 px-3 py-1 rounded-full">
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
//           <h2 className="text-4xl font-serif text-red-900 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Scholar's Toolkit
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {sacredTextsBonus.map((item, index) => (
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
//           <h2 className="text-4xl font-serif text-red-900 mb-12 text-center">
//             ✨ Choose Your <span className="text-orange-600">Path to Textual Mastery</span>
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
  Sun, // Used for the first month's foundation (dawn of knowledge)
  Target, // Used for the second month's application/focus
  Feather, // Icon for authorship/writing
  Gift,
  Quote, // Icon for testimonials (NEW)
  Mail, // Icon for contact (NEW)
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration: Updated Colors to Yellow/Orange/BRIGHT Red ---
const BRIGHT_RED = "bg-red-600"; // Brighter Red for contrast headers/buttons
const ACCENT_COLOR = "text-orange-600"; // Vibrant Orange for accents
const HOVER_COLOR = "hover:bg-red-700";
const BUTTON_COLOR =
  "bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600"; // Bright Orange and Yellow for CTA

// --- Testimonial Data (NEW) ---
const testimonials = [
  {
    name: "Aarti M., London",
    text: "Going beyond the translations gave me an entirely new depth of understanding. The Sandhi techniques alone were worth the fee!",
    rating: 5,
  },
  {
    name: "David K., New York",
    text: "The methodical breakdown of the Bhagavad Gītā was incredibly insightful. I now read Chapter 2 with confidence.",
    rating: 4.5,
  },
  {
    name: "Shyam V., Bengaluru",
    text: "The course material is pristine. It truly helped me connect the Upaniṣads, Gītā, and Epics into one cohesive thread.",
    rating: 5,
  },
];

// --- Curriculum: Updated for Sacred Texts Reading Course (Data structure kept for context) ---
const sacredTextsCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundational Literacy and Context",
    icon: <Sun className="w-5 h-5 mr-3 text-red-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to Vedic Literature & Genres",
        details: [
          "Defining 'Sacred Text': Sruti (Revealed) vs. Smriti (Remembered).",
          "Overview of the **Vedas, Upaniṣads, Purāṇas, and Itihāsas** (Epics).",
          "Understanding the context (Desa, Kāla, Pātra) of the texts.",
          "Exercise: Identifying primary authors and their traditions.",
        ],
      },
      {
        id: 2,
        title: "Week 2: Vocabulary and Key Philosophical Concepts",
        details: [
          "Mastering the **108 essential Sanskrit terms** (e.g., *Dharma, Karma, Mokṣa*).",
          "Decoding philosophical dualities (e.g., *Prakṛti* and *Puruṣa*).",
          "Introduction to the structure of Sanskrit syntax for reading verses (Ślokas).",
          "Reading Practice: Basic *Subhāṣitas* (Moral Sayings) and simple verses.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Textual Criticism and Line-by-Line Analysis",
        details: [
          "Techniques for identifying **Sandhi** (euphonic combinations) to separate words.",
          "Understanding the role of **Commentaries (Bhāṣyas)** in interpreting texts.",
          "The importance of different **Recensions (Pāṭha-bhedas)** in text study.",
          "Practical Reading: Verse-by-verse analysis of the *Isha Upaniṣad*.",
        ],
      },
      {
        id: 4,
        title: "Week 4: The Core Message of the Upaniṣads",
        details: [
          "Deep dive into **Māṇḍūkya Upaniṣad** and the concept of *Turīya* (The Fourth State).",
          "Analyzing the Mahāvākyas (Great Sayings) like *Aham Brahmāsmi*.",
          "Revision and a textual translation quiz based on the first four weeks' readings.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: Applied Study - The Bhagavad Gītā",
    icon: <Target className="w-5 h-5 mr-3 text-red-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Gītā's Framework and Sāṅkhya Yoga",
        details: [
          "Introduction to the *Mahābhārata* context and the setting of the Gītā.",
          "Detailed reading of **Chapter 1: Arjuna Viṣāda Yoga** (The anguish).",
          "In-depth textual study of **Chapter 2: Sāṅkhya Yoga** (Theory of reality).",
          "Focus: Analyzing the definition of the *Ātman* (Soul) in the text.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Karma Yoga (The Path of Action)",
        details: [
          "Verse-by-verse reading of **Chapter 3: Karma Yoga**.",
          "Understanding *niyataṁ karma* (prescribed action) directly from the Sanskrit.",
          "Practical Exercise: Comparing different English translations of key *karma* verses.",
          "Focus: The concept of **Svadharma** (One's own duty) in the text.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Jñāna and Bhakti Yoga",
        details: [
          "Textual analysis of **Chapter 4: Jñāna Karma Sannyāsa Yoga** (Knowledge and Renunciation).",
          "The essence of **Chapter 9: Rāja Vidyā Rāja Guhya Yoga** (Sovereign Secret).",
          "Reading Practice: Identifying rhetorical devices (Alankāra) used by Vyāsa.",
        ],
      },
      {
        id: 8,
        title: "Week 8: The Viśvarūpa and The Final Verses",
        details: [
          "Critical reading of key verses from **Chapter 11: Viśvarūpa Darśana Yoga** (Universal Form).",
          "Analysis of **Chapter 18: Mokṣa Sannyāsa Yoga** (Renunciation unto Salvation).",
          "Final Gītā Project: Presenting a textual reading and interpretation of a chosen chapter.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔭 Month 3: Epic & Purāṇic Literature Reading",
    icon: <Feather className="w-5 h-5 mr-3 text-red-600" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Vālmīki's Rāmāyaṇa - Aesthetics and Meter",
        details: [
          "Introduction to the Epic **Anuṣṭubh** meter for fluid reading.",
          "Reading the opening sections (*Bāla Kāṇḍa*)—story of Vālmīki becoming a poet.",
          "Focus on textual descriptions (*Varṇana*) of nature and characters.",
          "Reading Assignment: Comparing the text with regional adaptations.",
        ],
      },
      {
        id: 10,
        title: "Week 10: The Stories of the Purāṇas",
        details: [
          "Understanding the Pañca Lakṣaṇa (Five Marks) of Purāṇic literature.",
          "Textual study of a section from the **Bhāgavata Purāṇa** (e.g., Kr̥ṣṇa's childhood).",
          "Decoding mythological narratives and their underlying symbolic meanings.",
          "Focus: Reading the creation account from a selected Purāṇa.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Dharmaśāstras and Ethics",
        details: [
          "Reading introductory verses from **Manu Smṛti** (The Law Codes).",
          "Analyzing the textual description of *Varṇa* and *Āśrama* (Stages of Life).",
          "Case Study: Examining the textual basis of social ethics in the *Arthaśāstra*.",
          "Understanding the limitations and context of these texts for modern reading.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Capstone Reading Project & Synthesis",
        details: [
          "Independent reading project on a short, student-chosen sacred text/hymn.",
          "Synthesizing knowledge of context, vocabulary, and textual mechanics.",
          "Ethics of Interpretation: Responsibility in reading and sharing sacred texts.",
          "Final certification and reading mastery assessment.",
        ],
      },
    ],
  },
];

// --- Video Section: Updated for Sacred Texts ---
const sacredTextsVideos = [
  {
    title: "How to Mentally Unpack a Sanskrit Sloka",
    thumbnail: "https://placehold.co/400x200/F56565/FFFFFF?text=Sloka+Unpacking+Guide",
    link: "#",
  },
  {
    title: "The Context: Vedas vs. Purāṇas, Explained Simply",
    thumbnail: "https://placehold.co/400x200/F6AD55/FFFFFF?text=Textual+Context+Video",
    link: "#",
  },
  {
    title: "Bhagavad Gītā Chapter 2: The Core Teachings",
    thumbnail: "https://placehold.co/400x200/FBBF24/60A5FA?text=Gita+Reading+Sample",
    link: "#",
  },
];

// --- Bonus Section: Updated for Sacred Texts ---
const sacredTextsBonus = [
  "Comprehensive Glossary of 200 Key Terms",
  "Guide to Sanskrit Metre (Chandas) for Recitation",
  "Digital Library of Referenced Texts & Commentaries",
];

// --- Pricing Plans: Updated for Sacred Texts ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Textual Reader",
    price: 999,
    features: [
      "Months 1 & 2 Modules (Foundation & Gītā Study)",
      "Recorded Video Lectures & PDFs",
      "Module-wise Quizzes and Reading Materials",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Śāstra Master",
    price: 2199,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Digital Library Access & Glossary",
      "4 Live Interpretation Q&A Sessions",
      "Final Reading Project Review",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Traditional Scholar",
    price: 3999,
    features: [
      "All Śāstra Master Features",
      "4 x 1:1 Mentorship Sessions on Textual Interpretation",
      "Module on Advanced Comparative Philosophy",
      "Dedicated Scholar Community Forum",
    ],
    isPopular: false,
  },
];

// --- Accordion Component (Colors Updated) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Using a brighter red (red-600) for contrast
  const accordionPrimaryColor = BRIGHT_RED;
  const accordionHoverColor = HOVER_COLOR;

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

// --- Pricing Card Component (Colors Updated) ---
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
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(248, 113, 133, 0.2)" }} // Pink-Red shadow
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
export default function SacredTextsCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    navigate(`/enrollnows?courseId=sacred-texts-reading&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-red-700 leading-snug">
          The Inner Library: <br />
          <span className="text-orange-600">Sacred Texts Reading & Interpretation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Go beyond translations. Learn the mechanics, vocabulary, and context to **read and interpret**
          the *Bhagavad Gītā*, *Upaniṣads*, and Epics in their original form.
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
          👉 Enroll in the Śāstra Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🎥 Essential Textual Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sacredTextsVideos.map((video, i) => (
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
                  <Play className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
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
            📘 Complete <span className="text-orange-600">3-Month Sacred Texts Curriculum</span>
          </h2>
          {sacredTextsCurriculum.map((month, index) => (
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
      
      {/* --- Testimonials Section (NEW) --- */}
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
      {/* ----------------------------------- */}

      {/* Bonuses */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-orange-50">
          <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Scholar's Toolkit
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sacredTextsBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-yellow-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-red-600 flex-shrink-0" />
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
            ✨ Choose Your <span className="text-orange-600">Path to Textual Mastery</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Contact Us Section (NEW) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center p-8 border-4 border-solid border-red-400 rounded-3xl bg-yellow-50 shadow-xl">
          <h2 className="text-4xl font-serif text-red-700 mb-8 flex justify-center items-center gap-3">
            <Mail className="w-8 h-8 text-orange-600" /> Get in Touch
          </h2>
          <p className="text-xl font-medium text-gray-700 mb-6">
            Have questions about the syllabus, textual mechanics, or need help choosing a plan?
          </p>
          <p className="text-lg font-semibold text-red-700">
            📧 Email Us: <a href="mailto:shastramastery@example.com" className="text-orange-600 hover:underline">shastramastery@example.com</a>
          </p>
          <p className="text-lg font-semibold text-red-700 mt-2">
            📞 Call or WhatsApp Support: +91 99887 76655
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            className={`mt-8 ${BUTTON_COLOR} text-red-700 px-8 py-3 rounded-full font-bold shadow-lg`}
          >
            Send Your Inquiry
          </motion.button> */}
        </div>
      </section>
      {/* ---------------------------------- */}
    </div>
  );
}