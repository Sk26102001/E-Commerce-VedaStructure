// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // Changed Hand icon to Clock for a time/Muhurtas theme
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift } from "lucide-react"; 
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama" 
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum for MUHURTAS (Auspicious Timing)
// const fullCourseCurriculum = [
//     {
//         monthTitle: "⏰ Month 1: Foundations of Muhurta Shastra",
//         icon: <Clock className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 1,
//                 title: "Week 1: Introduction to Panchang & Timing",
//                 details: [
//                     "History, philosophy, and importance of Muhurtas in Vedic tradition.",
//                     "Detailed study of the **Five Limbs of Panchang**: Tithi, Vaar, Nakshatra, Yoga, Karana.",
//                     "Understanding sunrise, sunset, and local time correction (Iṣṭa Kāla).",
//                     "The role of Abhijit Muhurta and its usage.",
//                 ],
//             },
//             {
//                 id: 2,
//                 title: "Week 2: Grahas (Planets) and Rasis (Signs) in Muhurta",
//                 details: [
//                     "Analyzing the strength and disposition of the 9 Grahas (Planets).",
//                     "Rasi (Sign) analysis: Chara, Sthira, Dwishabhava signs for various tasks.",
//                     "Understanding **Tara Bala** (Star Strength) and Chandra Bala (Lunar Strength).",
//                     "Identifying auspicious and inauspicious directions for travel (Diśa Śūla).",
//                 ],
//             },
//             {
//                 id: 3,
//                 title: "Week 3: Identifying and Avoiding Major Doshas (Afflictions)",
//                 details: [
//                     "The concept of **Pañcaka Dosha** and its calculation (Mrityu, Roga, etc.).",
//                     "Identifying **Latta Dosha** and its effects on the Nakshatra.",
//                     "Understanding **Kaala Sarpa Dosha** and its mitigation in Muhurta.",
//                     "Avoiding **Dagdhā Tithi, Viṣa Ghātī,** and **Yamaghanta**.",
//                 ],
//             },
//             {
//                 id: 4,
//                 title: "Week 4: Muhurtas for General Daily Activities",
//                 details: [
//                     "Selecting timings based on **Horā Shuddhi** (Planetary Hours).",
//                     "Using **Choghadiya** and **Rāhu Kaal** for daily routines.",
//                     "Muhurtas for starting studies, debt repayment, and giving/taking loans.",
//                     "Practical exercise: Creating a daily Muhurta chart for a client.",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "🗓️ Month 2: Core Life Event Muhurtas",
//         icon: <BookOpen className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 5,
//                 title: "Week 5: Marriage Muhurta (Vivah)",
//                 details: [
//                     "Detailed procedure for calculating **Vivah Muhurta**.",
//                     "Importance of **Guru-Shukra Bala** and **Vakri Grahas**.",
//                     "Checking for **Kuṇḍa Maṇḍala** and auspicious/inauspicious month selection.",
//                     "Avoiding major doshas like **Vaṇi Dosha** and **Vedha Dosha**.",
//                 ],
//             },
//             {
//                 id: 6,
//                 title: "Week 6: House & Property Muhurtas (Griha)",
//                 details: [
//                     "Selecting **Grihaarambh** (Foundation Laying) Muhurta: Essential Tithi and Nakshatras.",
//                     "Rules for **Griha Pravesh** (House Warming): Checking Lagna and Navamsha Shuddhi.",
//                     "Muhurtas for buying and selling property or vehicles.",
//                     "Analyzing the **Digbala** (Directional Strength) of the planets for new homes.",
//                 ],
//             },
//             {
//                 id: 7,
//                 title: "Week 7: Child-Related & Educational Muhurtas",
//                 details: [
//                     "Selecting the **Namakaran** (Naming Ceremony) Muhurta.",
//                     "Muhurta for **Annaprashan** (First Feeding) and **Chaula/Mundan** (Hair Cutting).",
//                     "Timings for starting new education (Vidyarambh) or enrolling in a course.",
//                     "Understanding the role of the 5th and 9th houses in educational Muhurtas.",
//                 ],
//             },
//             {
//                 id: 8,
//                 title: "Week 8: Financial & Business Muhurtas",
//                 details: [
//                     "Muhurta for starting a new business venture (Udghāṭan).",
//                     "Auspicious timings for major investments or opening a bank account.",
//                     "Selecting the right time for signing contracts and legal documents.",
//                     "Muhurtas for interviews and starting a new job.",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "🌟 Month 3: Advanced Applications & Remedial Measures",
//         icon: <Star className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 9,
//                 title: "Week 9: Muhurtas for Health and Surgery",
//                 details: [
//                     "Selecting the most suitable time for surgery or medical procedures.",
//                     "Muhurtas for starting a new medication regimen or healing therapy.",
//                     "Analyzing the influence of the 6th and 8th houses on health Muhurtas.",
//                     "Remedial measures for unavoidable inauspicious timings.",
//                 ],
//             },
//             {
//                 id: 10,
//                 title: "Week 10: Advanced Muhurta Calculation Techniques",
//                 details: [
//                     "The **Hoṛā Lagna** technique for precise timing.",
//                     "Using **Daśā Sandhi** and **Antar Daśā** for final Muhurta confirmation.",
//                     "The role of **Māsa Shuddhi** (Lunar Months) in long-term projects.",
//                     "Case studies: Finding the best Muhurta when multiple factors conflict.",
//                 ],
//             },
//             {
//                 id: 11,
//                 title: "Week 11: Integrating Muhurta with Natal Charts",
//                 details: [
//                     "How to select a Muhurta based on the native's **Janam Kuṇḍalī** (Birth Chart).",
//                     "Checking for **Aṣṭama Shuddhi** (8th house purification) relative to the birth Moon.",
//                     "Selecting a Muhurta that strengthens the native's weak or afflicted planets.",
//                     "The concept of **Siddha Yoga** and its application.",
//                 ],
//             },
//             {
//                 id: 12,
//                 title: "Week 12: Professional Practice & Certification",
//                 details: [
//                     "Ethical considerations in Muhurta consultation.",
//                     "Practical guide to using astrological software for Muhurta calculation.",
//                     "Structuring a professional Muhurta consultation report.",
//                     "Final assessment: Comprehensive Muhurta selection project and certification.",
//                 ],
//             },
//         ],
//     },
// ];

// const bonusItems = [
//     "Digital Panchang Calculation Software Starter Pack", // Updated
//     "Muhurta Shastra Quick-Reference Chart (PDF)", // Updated
//     "Lifetime WhatsApp Q&A Group Access", // Kept general
// ];

// const pricingPlans = [
//     {
//         name: "Panchang Practitioner", // Updated name
//         price: "₹2,999",
//         features: ["Month 1 Modules", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Muhurta Master", // Updated name
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Muhurta Case Study Practicals"], // Updated feature
//         isPopular: true,
//     },
//     {
//         name: "Kalagnana Expert", // Updated name (Knower of Time)
//         price: "₹9,999",
//         features: ["All Muhurta Master Features", "1:1 Mentorship Sessions (4)", "Advanced Astrological Integration", "Priority Support"], // Updated feature
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
//         <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-orange-100">
//             {/* Accordion Header */}
//             <motion.button
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
//                         className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-200 rounded-b-xl"
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
//         <div className="border-b border-orange-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
//             <button
//                 onClick={() => setOpen(!open)}
//                 className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-orange-700 hover:text-orange-800"
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


// export default function Muhurtas() { // Component Name Changed
//     // Updated video content for Muhurtas
//     const lectureVideos = [
//         {
//             title: "Basics: The Five Limbs of Panchang (Tithi, Vaar, etc.)", // Updated
//             thumbnail: "https://images.unsplash.com/photo-1549488667-2d449622d057?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHByZWRpY3RpdmUgYXN0cm9sb2d5fGVufDB8fHx8fA%3D%3D", // Placeholder link
//             link: "https://www.youtube.com/watch?v=muhurtas-panchang", // Placeholder link
//         },
//         {
//             title: "Calculating Shubh Vivah Muhurta (Marriage Timing)", // Updated
//             thumbnail: "https://plus.unsplash.com/premium_photo-1661765870020-f5b211ec189c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVkaWMlMjBhc3Ryb2xvZ3l8ZW58MHx8MHx8fDA%3D", // Placeholder link
//             link: "https://www.youtube.com/watch?v=muhurtas-marriage", // Placeholder link
//         },
//         {
//             title: "Avoiding Major Doshas: Panchaka, Latta, and Rahu Kaal", // Updated
//             thumbnail: "https://images.unsplash.com/photo-1601672322581-229ef5e0e0a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx2ZWRpYyUyMGFzdHJvbG9neXxlbnwwfHx8fHww", // Placeholder link
//             link: "https://www.youtube.com/watch?v=muhurtas-doshas", // Placeholder link
//         },
//     ];

//     return (
//         <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//             {/* Hero Section */}
//             <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-100">
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="relative z-10 max-w-3xl"
//                 >
//                     <h1 className="text-5xl md:text-6xl font-serif text-orange-800 drop-shadow-md leading-snug">
//                         Master the Art of <br />
//                         <span className="text-orange-600">Shubh Muhurtas (Auspicious Timing)</span> {/* Updated Title */}
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-700 mt-4">
//                         Learn Muhurta Shastra through Classical Texts, Panchang Calculation & Precise Timing Selection. {/* Updated Description */}
//                     </p>
//                     <div className="flex gap-4 justify-center mt-8">
//                         <Link to="/enrollnow">
//                             <motion.div
//                                 whileHover={{ scale: 1.05 }}
//                                 className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//                             >
//                                 👉 Enroll Now
//                             </motion.div>
//                         </Link>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             className="bg-yellow-300 hover:bg-yellow-500 text-orange-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//                         >
//                             <Play size={18} /> Watch Preview
//                         </motion.button>
//                     </div>
//                 </motion.div>

//                 {/* Soft Glowing Orb Background */}
//                 <div className="absolute w-[600px] h-[600px] bg-orange-200/40 blur-3xl rounded-full top-20 left-20 animate-pulse"></div>
//                 <div className="absolute w-[500px] h-[500px] bg-yellow-300/40 blur-3xl rounded-full bottom-10 right-20 animate-pulse-slow"></div>
//             </section>

//             {/* Course Lecture Section */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Muhurta Lecture Videos</h2> {/* Updated Title */}
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
//                                     <Play className="text-white w-14 h-14 bg-orange-600 p-3 rounded-full shadow-lg" />
//                                 </div>
//                                 <p className="mt-3 font-medium text-orange-800">{video.title}</p>
//                             </motion.a>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
//             <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="max-w-4xl mx-auto"
//                 >
//                     <h2 className="text-4xl font-serif text-orange-700 mb-10 text-center">
//                         📘 Complete <span className={ACCENT_COLOR}>3-Month Muhurta Curriculum</span> {/* Updated Title */}
//                     </h2>

//                     {fullCourseCurriculum.map((month, index) => (
//                         <div className="mb-10" key={index}>
//                             {/* Month Header */}
//                             <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                                 {month.icon}
//                                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                                     <span>{month.monthTitle}</span>
//                                     <span className="text-sm font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
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
//                             className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-yellow-500 to-orange-500 active:scale-95`}
//                         >
//                             Download Full Curriculum PDF
//                         </motion.button>
//                     </div>
//                 </motion.div>
//             </section>


//             {/* Bonus Section (New Addition) */}
//             <section className="py-20 px-6 bg-white">
//                 <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
//                     <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
//                         <Gift className="w-8 h-8 text-orange-600 animate-bounce"/>
//                         ⏰ <span className="font-bold">Bonus Section</span> – Limited Time! {/* Updated Icon */}
//                     </h2>
//                     <p className="text-2xl font-bold text-orange-800 mb-6">
//                         🎁 Free Bonuses Worth ₹2,000:
//                     </p>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         {bonusItems.map((item, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                                 className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
//                             >
//                                 <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
//                                 <span className="font-medium text-gray-700">{item}</span>
//                             </motion.div>
//                         ))}
//                     </div>
//                     <p className="mt-8 text-lg text-red-500 font-semibold">
//                         *Enroll in the 'Muhurta Master' tier or above to claim these bonuses instantly! {/* Updated tier name */}
//                     </p>
//                 </div>
//             </section>


//             {/* Pricing (Revamped Multi-Card Layout) */}
//             <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
//                         ✨ Choose Your <span className={ACCENT_COLOR}>Muhurta Path</span> {/* Updated Title */}
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
//                     <h2 className="text-4xl font-serif text-orange-700 mb-10">
//                         🌟 Student Testimonials
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         {[
//                             { name: "Pooja, Mumbai", text: "I can now select the perfect Muhurta for any event, from marriage to moving house. The course is a blessing!" }, // Updated testimonial
//                             { name: "Rajiv, Dubai", text: "The techniques for avoiding Panchaka and Rahu Kaal are excellent. Now I feel confident advising clients." }, // Updated testimonial
//                         ].map((t, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileHover={{ scale: 1.03 }}
//                                 className="p-6 bg-yellow-50 rounded-xl shadow-md"
//                             >
//                                 <p className="text-gray-800 italic">“{t.text}”</p>
//                                 <p className="mt-3 text-orange-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Contact */}
//             <section id="contact" className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-4xl font-serif text-orange-700 mb-8">📩 Contact / Help</h2>
//                     <p>💌 Email: support@muhurtasacademy.com</p> {/* Updated Email */}
//                     <p>📱 WhatsApp: +91 9876543210</p>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//                     >
//                         ⏰ Book Free Consultation {/* Updated button text */}
//                     </motion.button>
//                 </div>
//             </section>

//             {/* Custom Animations */}
//             <style jsx>{`
//               .animate-pulse-slow {
//                 animation: pulse 8s ease-in-out infinite;
//               }
//               @keyframes pulse {
//                 0%, 100% { opacity: 0.4; }
//                 50% { opacity: 0.8; }
//               }
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
//   BookOpen, // For Foundation
//   Gift,
//   Sun, // For Time/Muhurat/Auspiciousness (Replaces Zap)
//   Target, // For Goal/Mastery (Replaces BarChart2)
//   GanttChart, // For Calculation/Planning (Replaces Target)
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// // --- Configuration (Updated to Light Yellow, Orange, and Related Colors) ---
// const PRIMARY_COLOR = "bg-amber-700"; // Deep Amber/Saffron for Auspiciousness
// const ACCENT_COLOR = "text-yellow-400"; // Golden accent for Brilliance
// const HOVER_COLOR = "hover:bg-gradient-to-r from-orange-800 to-amber-600";


// // Detailed 3-Month Curriculum for Muhurat Mastery
// const muhuratMasteryCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation - Mastering the Panchang",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Time & The Five Limbs (Panchang)",
//         details: [
//           "Understanding the concept of **Kala**, **Desha**, and **Patra** in Muhurat Shastra.",
//           "Mastering **Vara (Day)** and **Tithi (Lunar Day)** and their influence (Nanda, Bhadra, etc.).",
//           "Identifying the 16 classical **Shubh-Ashubh** Muhurats.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Nakshatra and its Usage (Tara Bala)",
//         details: [
//           "Detailed study of the **27 Nakshatras** and their properties (Fixed, Fierce, Gentle, etc.).",
//           "Calculating and applying **Tara Bala** (Star Strength) for individual compatibility.",
//           "Techniques for instantly identifying a suitable Nakshatra for any event.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Karana, Yoga, and Core Avoidance Timings",
//         details: [
//           "Understanding **Karana** and **Yoga** and their influence on Muhurat success.",
//           "Mastering the avoidance timings: **Rahu Kaal, Yama Ghanta, and Gulika Kaal**.",
//           "Identifying and calculating the precise duration of **Vishti Karana (Bhadra)** for critical tasks.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Basic Muhurat Selection & Month 1 Assessment",
//         details: [
//           "Integrated practice: Selecting the best Muhurat for **daily activities** (meetings, short travel).",
//           "Troubleshooting common Panchang errors and quick reference guides.",
//           "Timed assessment for foundational Panchang accuracy and *Shuddhi*.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔥 Month 2: Advanced Factors - Lagna & Planetary Strength",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Personalized Strength: Chandra Bala and Lagna Shuddhi",
//         details: [
//           "Calculating and purifying the **Ascendant (Lagna Shuddhi)**, the most crucial factor.",
//           "Applying **Chandra Bala** (Moon Strength) based on birth sign to ensure emotional success.",
//           "Identifying strong and weak *Lagnas* for specific Muhurats (e.g., Fixed Lagna for house entry).",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Planetary Hours (Hora) and Directional Strength",
//         details: [
//           "Mastering the **Hora** system for fine-tuning the exact moment of an event.",
//           "Understanding **Dig Bala** (Directional Strength) and *Kendras/Trikonas* houses.",
//           "The *Vēdha* concept (Obstruction) and how to avoid it in Nakshatra selection.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Detailed Avoidance: Panchaka and Graha-Drishti",
//         details: [
//           "In-depth calculation of **Panchaka** (Five Sources of Energy) and the 5 types of *Agnī*.",
//           "Understanding **Graha-Drishti** (Planetary Aspect) and its positive/negative influence on the Ascendant.",
//           "Muhurat for long-distance travel and avoiding *Yātrā Dosha*.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Muhurat Calculation Drills & Complex Scenarios",
//         details: [
//           "Advanced Muhurat selection using the concept of *Gochara* (Planetary Transit).",
//           "Techniques for selecting a **Prashna (Query) Muhurat** for immediate answers.",
//           "Case studies: Integrated Muhurat for the most complex scenarios.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 3: Application - Life Events & Business Mastery",
//     icon: <Target className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Muhurats for Wealth & Career",
//         details: [
//           "Selecting the perfect time for **Business/Office Launch** (Sthāpanā).",
//           "Auspicious timings for investments, taking loans, or starting a new job.",
//           "Using **Chaturvimshati Pramanas** (24 factors) for high-stakes business decisions.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Special Life Event Muhurats (Vivaha, Griha Pravesh)",
//         details: [
//           "In-depth selection process for **Vivaha Muhurat** (Marriage) and the 10 Dosh-Nivarana.",
//           "Muhurat for **Griha Pravesh** (House Warming) and avoiding *Vāstu Dosha*.",
//           "Identifying and purifying *Ugra* and *Tīkshna* Muhurats for destructive activities.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Remedial Measures & Consultation Strategies",
//         details: [
//           "Implementing **simple *Upayas* (Remedies)** when a perfect Muhurat is not available.",
//           "Review of the most difficult Muhurat factors and personalized doubt clearing.",
//           "Mastering the art of **Digit Sum (Mūlānka)** check for quick verification of planetary alignment.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Certification and Lifetime Consulting Strategy",
//         details: [
//           "Final comprehensive Muhurat selection and consultation test (Certificate requirement).",
//           "Plan for integrating Muhurat Shastra into daily life and professional consulting practice.",
//           "Accessing the Alumni network and continuous Muhurat research resources.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Lecture Videos (Updated) ---
// const muhuratMasteryVideos = [
//   {
//     title: "The Power of Panchang: Vara & Tithi Explained",
//     thumbnail: "https://placehold.co/400x200/FFB347/4B3621?text=Panchang+Video",
//     link: "https://www.youtube.com/watch?v=muhurat_panchang_placeholder",
//   },
//   {
//     title: "Lagna Shuddhi: The Secret to Perfect Muhurat",
//     thumbnail: "https://placehold.co/400x200/F5C04A/4B3621?text=Lagna+Shuddhi+Video",
//     link: "https://www.youtube.com/watch?v=muhurat_lagna_placeholder",
//   },
//   {
//     title: "Avoiding Rahu Kaal & Gulika Kaal Instantly",
//     thumbnail: "https://placehold.co/400x200/FF9966/4B3621?text=Avoidance+Video",
//     link: "https://www.youtube.com/watch?v=muhurat_avoid_placeholder",
//   },
// ];


// // --- Bonus Items (Updated) ---
// const muhuratMasteryBonus = [
//   "High-Resolution Panchang & Muhurat Sutra Chart (PDF)",
//   "150+ Practical Muhurat Case Study Workbook (Downloadable)",
//   "Exclusive Muhurat Planner App Access (1-Year)",
// ];

// // --- Pricing Plans (Updated to reflect Muhurat theme) ---
// const muhuratMasteryPricing = [
//   {
//     id: 1,
//     key: "scholar",
//     name: "Panchang Scholar",
//     price: 999, // Course-specific price
//     features: [
//       "Months 1 & 2 Modules (Foundation & Advanced Factors)",
//       "Recorded Video Lectures",
//       "Module-wise Quizzes",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Muhurat Master",
//     price: 1999, // Course-specific price
//     features: [
//       "All 3 Months Curriculum",
//       "Lifetime Course Access",
//       "All 3 Free Bonuses",
//       "4 Live Q&A Group Sessions",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "consultant",
//     name: "Consultation Accelerator",
//     price: 2999, // Course-specific price
//     features: [
//       "All Muhurat Master Features",
//       "4 x 1:1 Personalized Coaching Sessions",
//       "Final Consultation Strategy Blueprint",
//       "Dedicated Whatsapp Support",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion for Modules (Modified for Color) ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-orange-100">
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

// // --- Pricing Card Component (Modified for Color) ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-amber-700 text-white border-4 border-yellow-300"
//         : "bg-white text-gray-800 border-2 border-orange-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-amber-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         🔥 AUSPICIOUS CHOICE
//       </div>
//     )}

//     <h3
//       className={`text-3xl font-bold mb-4 ${
//         plan.isPopular ? "text-white" : "text-amber-700"
//       }`}
//     >
//       {plan.name}
//     </h3>
//     <p
//       className={`text-5xl font-extrabold mb-6 ${
//         plan.isPopular ? "text-yellow-300" : "text-amber-800"
//       }`}
//     >
//       ₹{plan.price.toLocaleString()}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${
//               plan.isPopular ? "text-yellow-300" : "text-orange-600"
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
//           ? "bg-yellow-300 text-amber-800 hover:bg-yellow-400"
//           : "bg-orange-100 text-amber-700 hover:bg-orange-200"
//       }`}
//     >
//       Accelerate with {plan.name}
//     </motion.button>
//   </motion.div>
// );


// export default function MuhuratMasteryCourseDetails() {
//   const navigate = useNavigate();
//   const courseTitle = "Muhurat Mastery: The Art of Auspicious Timing";
//   const COURSE_ID = "muhurat-mastery"; // Unique Course ID

//   const handleEnrollClick = (plan) => {
//     // Navigating to the EnrollNows component with the correct courseId and plan
//     navigate(`/enrollnows?courseId=${COURSE_ID}&plan=${plan.key}#enrollment-section`);
//   };
  
//   // The default enroll button links to the popular plan
//   const popularPlan = muhuratMasteryPricing.find(p => p.isPopular);

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-amber-800 drop-shadow-md leading-snug">
//           Muhurat Mastery Course: <br />
//           <span className="text-orange-600">The Art of Auspicious Timing</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Learn to calculate the most potent moments for success in life, career, and spiritual pursuits using Vedic principles.
//         </p>

//         <motion.button
//           onClick={() => handleEnrollClick(popularPlan)}
//           whileHover={{ scale: 1.05 }}
//           className="mt-8 bg-gradient-to-r from-orange-500 to-amber-700 hover:from-orange-600 hover:to-amber-800 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
//         >
//           👉 Enroll in the Muhurat Master Plan
//         </motion.button>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-amber-700 mb-10">🎥 Core Muhurat Calculation Demos</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhuratMasteryVideos.map((video, i) => (
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
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://placehold.co/400x200/FF9966/4B3621?text=Auspicious+Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-amber-700 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-amber-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
    
//       {/* What You Will Learn (Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-amber-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Muhurat Curriculum</span>
//           </h2>

//           {muhuratMasteryCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Block Header */}
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-amber-600 bg-yellow-100 px-3 py-1 rounded-full">
//                     {month.duration}
//                   </span>
//                 </h3>
//               </div>
//               <div className="space-y-3">
//                 {month.modules.map((module) => (
//                   <CourseAccordionItem
//                     key={module.id}
//                     title={`Module ${module.id}: ${module.title}`}
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
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform bg-gradient-to-r from-amber-700 to-orange-500 active:scale-95`}
//             >
//               Download Full Muhurat Calculation Handbook
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Bonus Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
//           <h2 className="text-4xl font-serif text-amber-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁{" "}
//             <span className="font-bold">Muhurat Master Bonuses</span> – Exclusive Tools Included!
//           </h2>
//           <p className="text-2xl font-bold text-amber-800 mb-6">
//             Get these valuable resources instantly upon enrollment:
//           </p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhuratMasteryBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
//               >
//                 <GanttChart className="w-5 h-5 mr-2 text-green-600" />
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-amber-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Auspicious Plan</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {muhuratMasteryPricing.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-amber-700 mb-10">
//             🌟 Consultant Success Stories
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Anand, Delhi", text: "I used to make basic mistakes, but now I can calculate Lagna Shuddhi for marriages with professional confidence. Clients are amazed!" },
//               { name: "Meena, Pune", text: "The techniques for business Muhurats are pure gold. My consulting income has doubled since applying the advanced Hora and Panchaka lessons." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-yellow-100 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-amber-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-amber-700 mb-8">📩 Get in Touch</h2>
//           <p className="text-lg">💌 Email: muhuratsolutions@vedicscience.com</p>
//           <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-orange-500 to-amber-700 hover:from-orange-600 hover:to-amber-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             📞 Book Free Guidance Call
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
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   BookOpen,
//   Gift,
//   Sun, // For Foundation
//   Target, // For Applied Muhurta
//   BarChart2, // For Advanced Analysis
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";


// // NOTE: Link and useNavigate imports are kept for potential routing, assuming this is part of a larger application.

// // --- Configuration ---
// const PRIMARY_COLOR = "bg-sky-700"; // Deep Sky Blue for Cosmos
// const ACCENT_COLOR = "text-amber-400"; // Golden accent for Auspiciousness
// const HOVER_COLOR = "hover:bg-gradient-to-r from-sky-800 to-indigo-600";
// const BUTTON_COLOR = "bg-gradient-to-r from-amber-500 to-sky-600 hover:from-amber-600 hover:to-sky-700";

// // Detailed 3-Month Curriculum for Muhurta
// const muhurtasCurriculum = [
//     {
//         monthTitle: "☀️ Month 1: Foundation of Timing & Panchang",
//         icon: <Sun className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 1,
//                 title: "Week 1: The Five Limbs of Time (Panchang) - Tithi & Vara",
//                 details: [
//                     "Introduction to the concept of Muhurta and its importance in Vedic tradition.",
//                     "Detailed study of Tithi (Lunar Day) and identifying auspicious and inauspicious Tithis.",
//                     "Understanding Vara (Week Day) and its ruling planets and deities.",
//                     "Practical exercise: Calculating Tithi and Vara for any given date.",
//                 ],
//             },
//             {
//                 id: 2,
//                 title: "Week 2: Nakshatra (Lunar Mansion) & Yoga",
//                 details: [
//                     "In-depth analysis of the 27 Nakshatras and their characteristics (nature, direction, quality).",
//                     "Matching Nakshatras for compatibility (e.g., marriage, partnership).",
//                     "Understanding Yoga (Planetary Combinations) and their effects on Muhurta selection.",
//                     "Identifying Gandanta and other malefic Nakshatra/Yoga junctions.",
//                 ],
//             },
//             {
//                 id: 3,
//                 title: "Week 3: Karana & The Malefic Timings",
//                 details: [
//                     "Study of Karana (Half Tithi) and its specific applications for actions.",
//                     "Mastering the *Visha Ghati* (Poisonous Time) and *Rāhu Kālam* (Rahu's Period) calculations.",
//                     "Understanding *Yama Ganda* and *Dur Muhurta* - times to strictly avoid.",
//                     "The role of *Abhijit Muhurta* - the universal auspicious time.",
//                 ],
//             },
//             {
//                 id: 4,
//                 title: "Week 4: Revision and Monthly Practical Application",
//                 details: [
//                     "Integrated analysis of Panchang components for a holistic Muhurta view.",
//                     "Case studies on simple Muhurta selection (e.g., travel, starting studies).",
//                     "Timed assessment on Panchang calculations and malefic timings identification.",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "🎯 Month 2: Applied Muhurta - Key Life Events",
//         icon: <Target className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 5,
//                 title: "Week 5: Vivāha Muhurta (Marriage Timing)",
//                 details: [
//                     "Detailed rules for selecting the best date and time for a wedding (Chandra Bala, Tara Bala).",
//                     "Identifying major doshas (afflictions) in marriage charts and remedial Muhurtas.",
//                     "The importance of the 8th house and the role of the Moon in Vivāha.",
//                 ],
//             },
//             {
//                 id: 6,
//                 title: "Week 6: Gṛha Praveśa & Bhumi Pūjana (House & Land)",
//                 details: [
//                     "Selecting the perfect time for house inauguration (Gṛha Praveśa) and foundation laying (Bhumi Pūjana).",
//                     "Auspicious months, Tithis, and days for construction activities.",
//                     "Avoiding *Vastu Doshas* through correct timing of entry.",
//                 ],
//             },
//             {
//                 id: 7,
//                 title: "Week 7: Business & Career Muhurtas (Lagna & Dasha)",
//                 details: [
//                     "Choosing the optimal *Lagna* (Ascendant) for starting a new business venture.",
//                     "Muhurtas for interviews, signing contracts, and launching products/services.",
//                     "Timing financial investments and debt repayment (Rṇa Moksha).",
//                 ],
//             },
//             {
//                 id: 8,
//                 title: "Week 8: Naming, Education, and Healing Muhurtas",
//                 details: [
//                     "Timing the *Nāma-Karaṇa* (Naming Ceremony) based on the Janma Nakshatra.",
//                     "Muhurtas for starting formal education (Vidyārambha) and undergoing medical treatments.",
//                     "Selecting times for wearing gemstones and performing rituals.",
//                 ],
//             },
//         ],
//     },
//     {
//         monthTitle: "🔭 Month 3: Advanced Techniques & Predictive Timing",
//         icon: <BarChart2 className="w-5 h-5 mr-3" />,
//         duration: "4 Weeks",
//         modules: [
//             {
//                 id: 9,
//                 title: "Week 9: Hora & Chou Ghadi Analysis (Micro-Muhurta)",
//                 details: [
//                     "Mastering the use of planetary *Horas* (Hourly periods) for daily timing decisions.",
//                     "Using *Chou Ghadi* for short-duration travel and simple errands.",
//                     "Integrating micro-timings with the broader Panchang for maximum benefit.",
//                 ],
//             },
//             {
//                 id: 10,
//                 title: "Week 10: Tāra Bala & Chandra Bala Deep Dive",
//                 details: [
//                     "Advanced calculation and interpretation of *Tāra Bala* (Star Strength).",
//                     "Practical methods for remediation when Tāra/Chandra Bala is weak.",
//                     "Utilizing *Gōchara* (Transits) and *Aṣṭakavarga* principles in Muhurta.",
//                 ],
//             },
//             {
//                 id: 11,
//                 title: "Week 11: Case Studies, Exception Rules, and Synthesis",
//                 details: [
//                     "Analyzing complex real-world Muhurta charts for clients.",
//                     "Reviewing exceptions and permissible compromises in Muhurta selection.",
//                     "Synthesis: Combining all three months' knowledge for complete Muhurta generation.",
//                 ],
//             },
//             {
//                 id: 12,
//                 title: "Week 12: Certification, Ethical Practice, and Research",
//                 details: [
//                     "Final project: Selecting the perfect Muhurta for a major client event (graded).",
//                     "Ethics in Muhurta consultation and client communication.",
//                     "Continuous learning and access to advanced research materials.",
//                 ],
//             },
//         ],
//     },
// ];

// const muhurtasVideos = [
//     {
//         title: "The Power of Panchang: A 5-Step Guide",
//         thumbnail: "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Panchang+Video+Demo",
//         link: "https://www.youtube.com/watch?v=muhurta_panchang_placeholder",
//     },
//     {
//         title: "Vivāha Muhurta: Avoiding the Fatal Flaws",
//         thumbnail: "https://placehold.co/400x200/5C6BC0/FFFFFF?text=Marriage+Timing+Video",
//         link: "https://www.youtube.com/watch?v=muhurta_marriage_placeholder",
//     },
//     {
//         title: "Daily Timing: Using Hora and Rahu Kalam",
//         thumbnail: "https://placehold.co/400x200/FFB300/1A237E?text=Daily+Muhurta+Tips",
//         link: "https://www.youtube.com/watch?v=muhurta_daily_placeholder",
//     },
// ];

// const muhurtasBonus = [
//     "High-Resolution Panchang & Tithi Chart",
//     "Ready-Reckoner for Malefic Timings (Visha Ghati, Rahu Kalam)",
//     "Lifetime Access to Muhurta Calculation Software (Proprietary Tool)",
// ];

// const muhurtasPricing = [
//     {
//         id: 1,
//         key: "foundation",
//         name: "Panchang Foundation",
//         price: 1499,
//         features: [
//             "Months 1 & 2 Modules (Foundation & Key Events)",
//             "Recorded Video Lectures",
//             "Module-wise Quizzes",
//         ],
//         isPopular: false,
//     },
//     {
//         id: 2,
//         key: "master",
//         name: "Muhurta Master",
//         price: 2999,
//         features: [
//             "All 3 Months Curriculum (Full Mastery)",
//             "Proprietary Muhurta Software Access",
//             "4 Live Q&A Group Sessions",
//             "Final Muhurta Selection Project Review",
//         ],
//         isPopular: true,
//     },
//     {
//         id: 3,
//         key: "consultant",
//         name: "Professional Consultant",
//         price: 4999,
//         features: [
//             "All Muhurta Master Features",
//             "4 x 1:1 Personalized Client Case Study Reviews",
//             "Professional Ethics & Client Communication Module",
//             "Dedicated Support via Telegram/WhatsApp",
//         ],
//         isPopular: false,
//     },
// ];


// // --- Accordion for Modules ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-sky-100">
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-amber-200 rounded-b-xl"
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


// // --- Pricing Card Component ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-sky-800 text-white border-4 border-amber-300"
//         : "bg-white text-gray-800 border-2 border-sky-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-amber-400 text-sky-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3
//       className={`text-3xl font-bold mb-4 ${
//         plan.isPopular ? "text-white" : "text-sky-700"
//       }`}
//     >
//       {plan.name}
//     </h3>
//     <p
//       className={`text-5xl font-extrabold mb-6 ${
//         plan.isPopular ? "text-amber-300" : "text-sky-800"
//       }`}
//     >
//       ₹{plan.price.toLocaleString()}
//     </p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2
//             className={`w-5 h-5 mr-2 flex-shrink-0 ${
//               plan.isPopular ? "text-amber-300" : "text-sky-600"
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
//           ? "bg-amber-300 text-sky-800 hover:bg-amber-400"
//           : "bg-sky-100 text-sky-700 hover:bg-sky-200"
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );


// export default function MuhurtasCourse() {
//   // NOTE: Assuming Link and useNavigate are available in the running environment, 
//   // but commenting them out for a self-contained JSX file without external package dependency issues.
//   const navigate = useNavigate();

//   const courseTitle = "Science of Shub Muhurta (Auspicious Timing)";
//   const COURSE_ID = "muhurtas"; // Unique Course ID

//   // Simple mock of navigate for the button click
// //   const handleEnrollClick = (plan) => {
//     // In a real environment with react-router-dom:
//     // navigate(`/enrollnows?courseId=muhurtas&plan${plan.key}#enrollment-section`);
//     // console.log(`Enrolling in ${courseTitle} with plan: ${plan.name} (₹${plan.price})`);
//     // For demonstration, you might display a simple message
//     // window.alert(`You selected the ${plan.name} plan! Redirecting to enrollment...`);
// //   };
//     const handleEnrollClick = (plan) => {
//   navigate(`/enrollnows?courseId=muhurtas&plan=${plan.key}#enrollment-section`);
// };
  
//   // The default enroll button links to the popular plan
//   const defaultPlanKey = muhurtasPricing.find(p => p.isPopular)?.key || muhurtasPricing[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-sky-50 to-blue-50 overflow-hidden">
//       {/* Hero */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-sky-800 drop-shadow-md leading-snug">
//           The Cosmic Clock: <br />
//           <span className="text-sky-600">Science of Shub Muhurta (Auspicious Timing)</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Learn to harness the power of planetary positions to select the perfect moment for life's biggest events.
//         </p>

//         <motion.button
//         //   onClick={() => handleEnrollClick(popularPlan)}
//         //   whileHover={{ scale: 1.05 }}
//         //   className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
//         onClick={() =>
//              navigate(`/enrollnows?courseId=muhurtas&plan=${defaultPlanKey}#enrollment-section`)

//         }
//         >
//           👉 Enroll in the Muhurta Master Plan
//         </motion.button>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10">🎥 Foundational Timing Concepts</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhurtasVideos.map((video, i) => (
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
//                     e.target.src = "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Timing+Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-sky-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-sky-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
    
//       {/* What You Will Learn (Curriculum) */}
//       <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-blue-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif text-sky-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Muhurta Consultant Curriculum</span>
//           </h2>

//           {muhurtasCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               {/* Block Header */}
//               <div className="flex items-center mb-4 border-b-2 border-sky-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-sky-500 bg-sky-100 px-3 py-1 rounded-full">
//                     {month.duration}
//                   </span>
//                 </h3>
//               </div>
//               <div className="space-y-3">
//                 {month.modules.map((module) => (
//                   <CourseAccordionItem
//                     key={module.id}
//                     title={`Module ${module.id}: ${module.title}`}
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
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform ${BUTTON_COLOR} active:scale-95`}
//             >
//               Download Full Course Syllabus
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Bonus Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-sky-300 rounded-3xl bg-amber-50">
//           <h2 className="text-4xl font-serif text-sky-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-sky-600 animate-bounce" /> 🎁{" "}
//             <span className="font-bold">Muhurta Master Bonuses</span> – Essential Tools Included!
//           </h2>
//           <p className="text-2xl font-bold text-sky-800 mb-6">
//             Access these professional-grade resources immediately upon enrollment:
//           </p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhurtasBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-sky-100 flex items-center justify-center text-center"
//               >
//                 <Target className="w-5 h-5 mr-2 text-green-600" />
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-6 bg-gradient-to-r from-amber-100 via-sky-50 to-amber-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-sky-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Auspicious Path</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {muhurtasPricing.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10">
//             🌟 Consultant Success Stories
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Priya, Mumbai", text: "I used the techniques to select the exact moment for my business launch. Within a year, my revenue tripled. This course is a game-changer for karmic planning." },
//               { name: "Sanjay, Bangalore", text: "The deep dive into Vivāha Muhurta was invaluable. I now confidently advise clients on their most important life decisions. The Rahu Kalam understanding is crucial." },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-sky-50 rounded-xl shadow-md"
//               >
//                 <p className="text-gray-800 italic">“{t.text}”</p>
//                 <p className="mt-3 text-sky-700 font-semibold">⭐⭐⭐⭐⭐ — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-sky-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-sky-700 mb-8">📩 Seek Guidance</h2>
//           <p className="text-lg">💌 Email: astrology@vedicscience.com</p>
//           <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className={`mt-6 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-lg`}
//           >
//             📞 Book Free Consultation Overview
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
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   BookOpen,
//   Gift,
//   Sun,
//   Target,
//   BarChart2,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration ---
// const PRIMARY_COLOR = "bg-sky-700";
// const ACCENT_COLOR = "text-amber-400";
// const HOVER_COLOR = "hover:bg-gradient-to-r from-sky-800 to-indigo-600";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-amber-500 to-sky-600 hover:from-amber-600 hover:to-sky-700";

// // --- Curriculum ---
// const muhurtasCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation of Timing & Panchang",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: The Five Limbs of Time (Panchang) - Tithi & Vara",
//         details: [
//           "Introduction to the concept of Muhurta and its importance in Vedic tradition.",
//           "Detailed study of Tithi (Lunar Day) and identifying auspicious and inauspicious Tithis.",
//           "Understanding Vara (Week Day) and its ruling planets and deities.",
//           "Practical exercise: Calculating Tithi and Vara for any given date.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Nakshatra (Lunar Mansion) & Yoga",
//         details: [
//           "In-depth analysis of the 27 Nakshatras and their characteristics.",
//           "Matching Nakshatras for compatibility (e.g., marriage, partnership).",
//           "Understanding Yoga (Planetary Combinations) and their effects on Muhurta selection.",
//           "Identifying Gandanta and other malefic Nakshatra/Yoga junctions.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Karana & The Malefic Timings",
//         details: [
//           "Study of Karana (Half Tithi) and its specific applications for actions.",
//           "Mastering the Visha Ghati (Poisonous Time) and Rahu Kalam calculations.",
//           "Understanding Yama Ganda and Dur Muhurta - times to strictly avoid.",
//           "The role of Abhijit Muhurta - the universal auspicious time.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Revision and Monthly Practical Application",
//         details: [
//           "Integrated analysis of Panchang components for a holistic Muhurta view.",
//           "Case studies on simple Muhurta selection.",
//           "Timed assessment on Panchang calculations.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: Applied Muhurta - Key Life Events",
//     icon: <Target className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Vivāha Muhurta (Marriage Timing)",
//         details: [
//           "Rules for selecting auspicious marriage Muhurtas.",
//           "Identifying doshas (afflictions) in charts.",
//           "Role of Moon and 8th house in Vivāha.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Gṛha Praveśa & Bhumi Pūjana",
//         details: [
//           "Choosing the perfect time for house inauguration.",
//           "Auspicious months and Tithis for construction.",
//           "Avoiding Vastu Doshas via correct timing.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Business & Career Muhurtas",
//         details: [
//           "Choosing Lagna for starting business ventures.",
//           "Timing interviews, contracts, and launches.",
//           "Financial investment and debt repayment Muhurtas.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Naming, Education, and Healing Muhurtas",
//         details: [
//           "Timing the Nāma-Karaṇa ceremony.",
//           "Selecting Muhurtas for Vidyārambha (education).",
//           "Choosing times for wearing gemstones.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔭 Month 3: Advanced Techniques & Predictive Timing",
//     icon: <BarChart2 className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Hora & Chou Ghadi Analysis",
//         details: [
//           "Understanding planetary Horas for daily timing.",
//           "Using Chou Ghadi for micro-muhurta analysis.",
//           "Integrating micro-timings with Panchang.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Tāra Bala & Chandra Bala Deep Dive",
//         details: [
//           "Advanced calculation of Tāra Bala.",
//           "Remedies for weak Chandra Bala.",
//           "Using transits and Ashtakavarga in Muhurta.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Case Studies & Exceptions",
//         details: [
//           "Analyzing complex client Muhurtas.",
//           "Handling exceptions and compromises.",
//           "Combining all knowledge into synthesis.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Certification & Ethics",
//         details: [
//           "Final client project Muhurta selection.",
//           "Ethics in consultation and communication.",
//           "Continuing learning and research.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section ---
// const muhurtasVideos = [
//   {
//     title: "The Power of Panchang: A 5-Step Guide",
//     thumbnail: "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Panchang+Video+Demo",
//     link: "#",
//   },
//   {
//     title: "Vivāha Muhurta: Avoiding the Fatal Flaws",
//     thumbnail: "https://placehold.co/400x200/5C6BC0/FFFFFF?text=Marriage+Timing+Video",
//     link: "#",
//   },
//   {
//     title: "Daily Timing: Using Hora and Rahu Kalam",
//     thumbnail: "https://placehold.co/400x200/FFB300/1A237E?text=Daily+Muhurta+Tips",
//     link: "#",
//   },
// ];

// // --- Bonus Section ---
// const muhurtasBonus = [
//   "High-Resolution Panchang & Tithi Chart",
//   "Ready-Reckoner for Malefic Timings",
//   "Lifetime Access to Muhurta Software",
// ];

// // --- Pricing Plans ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Panchang Foundation",
//     price: 1499,
//     features: [
//       "Months 1 & 2 Modules (Foundation & Key Events)",
//       "Recorded Video Lectures",
//       "Module-wise Quizzes",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Muhurta Master",
//     price: 2999,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Software Access",
//       "4 Live Q&A Sessions",
//       "Final Project Review",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Professional Consultant",
//     price: 4999,
//     features: [
//       "All Muhurta Master Features",
//       "4 x 1:1 Personalized Sessions",
//       "Professional Ethics Module",
//       "Dedicated Telegram Support",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-sky-100">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-amber-200 rounded-b-xl"
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

// // --- Pricing Card Component ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-sky-800 text-white border-4 border-amber-300"
//         : "bg-white text-gray-800 border-2 border-sky-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-amber-400 text-sky-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
//     <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-amber-300" />
//           <span>{feature}</span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
//         plan.isPopular
//           ? "bg-amber-300 text-sky-800 hover:bg-amber-400"
//           : "bg-sky-100 text-sky-700 hover:bg-sky-200"
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function MuhurtasCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     navigate(`/enrollnows?courseId=muhurtas&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-sky-50 to-blue-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-sky-800 leading-snug">
//           The Cosmic Clock: <br />
//           <span className="text-sky-600">Science of Shub Muhurta</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Learn to harness the power of planetary positions for perfect timing.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             navigate(
//               `/enrollnows?courseId=muhurtas&plan=${defaultPlanKey}#enrollment-section`
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Muhurta Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10">
//             🎥 Foundational Timing Concepts
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhurtasVideos.map((video, i) => (
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
//                       "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-sky-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-sky-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-blue-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Muhurta Curriculum</span>
//           </h2>
//           {muhurtasCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-sky-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-700 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-sky-500 bg-sky-100 px-3 py-1 rounded-full">
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
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-sky-300 rounded-3xl bg-amber-50">
//           <h2 className="text-4xl font-serif text-sky-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-sky-600 animate-bounce" /> 🎁 Bonuses Included
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhurtasBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-sky-100 flex items-center justify-center text-center"
//               >
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-amber-100 via-sky-50 to-amber-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-sky-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Auspicious Path</span>
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
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration ---
// const PRIMARY_COLOR = "bg-sky-700";
// const ACCENT_COLOR = "text-amber-400";
// const HOVER_COLOR = "hover:bg-gradient-to-r from-sky-800 to-indigo-600";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-amber-500 to-sky-600 hover:from-amber-600 hover:to-sky-700";

// // --- Curriculum ---
// const muhurtasCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation of Timing & Panchang",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: The Five Limbs of Time (Panchang) - Tithi & Vara",
//         details: [
//           "Introduction to the concept of Muhurta and its importance in Vedic tradition.",
//           "Detailed study of Tithi (Lunar Day) and identifying auspicious and inauspicious Tithis.",
//           "Understanding Vara (Week Day) and its ruling planets and deities.",
//           "Practical exercise: Calculating Tithi and Vara for any given date.",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Nakshatra (Lunar Mansion) & Yoga",
//         details: [
//           "In-depth analysis of the 27 Nakshatras and their characteristics.",
//           "Matching Nakshatras for compatibility (e.g., marriage, partnership).",
//           "Understanding Yoga (Planetary Combinations) and their effects on Muhurta selection.",
//           "Identifying Gandanta and other malefic Nakshatra/Yoga junctions.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Karana & The Malefic Timings",
//         details: [
//           "Study of Karana (Half Tithi) and its specific applications for actions.",
//           "Mastering the Visha Ghati (Poisonous Time) and Rahu Kalam calculations.",
//           "Understanding Yama Ganda and Dur Muhurta - times to strictly avoid.",
//           "The role of Abhijit Muhurta - the universal auspicious time.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Revision and Monthly Practical Application",
//         details: [
//           "Integrated analysis of Panchang components for a holistic Muhurta view.",
//           "Case studies on simple Muhurta selection.",
//           "Timed assessment on Panchang calculations.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: Applied Muhurta - Key Life Events",
//     icon: <Target className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Vivāha Muhurta (Marriage Timing)",
//         details: [
//           "Rules for selecting auspicious marriage Muhurtas.",
//           "Identifying doshas (afflictions) in charts.",
//           "Role of Moon and 8th house in Vivāha.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Gṛha Praveśa & Bhumi Pūjana",
//         details: [
//           "Choosing the perfect time for house inauguration.",
//           "Auspicious months and Tithis for construction.",
//           "Avoiding Vastu Doshas via correct timing.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Business & Career Muhurtas",
//         details: [
//           "Choosing Lagna for starting business ventures.",
//           "Timing interviews, contracts, and launches.",
//           "Financial investment and debt repayment Muhurtas.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Naming, Education, and Healing Muhurtas",
//         details: [
//           "Timing the Nāma-Karaṇa ceremony.",
//           "Selecting Muhurtas for Vidyārambha (education).",
//           "Choosing times for wearing gemstones.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔭 Month 3: Advanced Techniques & Predictive Timing",
//     icon: <BarChart2 className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Hora & Chou Ghadi Analysis",
//         details: [
//           "Understanding planetary Horas for daily timing.",
//           "Using Chou Ghadi for micro-muhurta analysis.",
//           "Integrating micro-timings with Panchang.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Tāra Bala & Chandra Bala Deep Dive",
//         details: [
//           "Advanced calculation of Tāra Bala.",
//           "Remedies for weak Chandra Bala.",
//           "Using transits and Ashtakavarga in Muhurta.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Case Studies & Exceptions",
//         details: [
//           "Analyzing complex client Muhurtas.",
//           "Handling exceptions and compromises.",
//           "Combining all knowledge into synthesis.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Certification & Ethics",
//         details: [
//           "Final client project Muhurta selection.",
//           "Ethics in consultation and communication.",
//           "Continuing learning and research.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section ---
// const muhurtasVideos = [
//   {
//     title: "The Power of Panchang: A 5-Step Guide",
//     thumbnail: "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Panchang+Video+Demo",
//     link: "#",
//   },
//   {
//     title: "Vivāha Muhurta: Avoiding the Fatal Flaws",
//     thumbnail: "https://placehold.co/400x200/5C6BC0/FFFFFF?text=Marriage+Timing+Video",
//     link: "#",
//   },
//   {
//     title: "Daily Timing: Using Hora and Rahu Kalam",
//     thumbnail: "https://placehold.co/400x200/FFB300/1A237E?text=Daily+Muhurta+Tips",
//     link: "#",
//   },
// ];

// // --- Bonus Section ---
// const muhurtasBonus = [
//   "High-Resolution Panchang & Tithi Chart",
//   "Ready-Reckoner for Malefic Timings",
//   "Lifetime Access to Muhurta Software",
// ];

// // --- Pricing Plans ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Panchang Foundation",
//     price: 1499,
//     features: [
//       "Months 1 & 2 Modules (Foundation & Key Events)",
//       "Recorded Video Lectures",
//       "Module-wise Quizzes",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Muhurta Master",
//     price: 2999,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Software Access",
//       "4 Live Q&A Sessions",
//       "Final Project Review",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Professional Consultant",
//     price: 4999,
//     features: [
//       "All Muhurta Master Features",
//       "4 x 1:1 Personalized Sessions",
//       "Professional Ethics Module",
//       "Dedicated Telegram Support",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-sky-100">
//       <motion.button
//         className={`w-full flex justify-between items-center p-4 text-white font-semibold rounded-xl transition-all duration-300 ${PRIMARY_COLOR} ${HOVER_COLOR}`}
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
//             className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-amber-200 rounded-b-xl"
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
//         ? "bg-sky-800 text-white border-4 border-amber-300"
//         : "bg-white text-gray-800 border-2 border-sky-100"
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-amber-400 text-sky-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
//     <p className="text-5xl font-extrabold mb-6">₹{plan.price.toLocaleString()}</p>

//     <ul className="space-y-3 flex-grow mb-8">
//       {plan.features.map((feature, index) => (
//         <li key={index} className="flex items-start">
//           <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-amber-300" />
//           <span>{feature}</span>
//         </li>
//       ))}
//     </ul>

//     <motion.button
//       onClick={() => onEnroll(plan)}
//       whileTap={{ scale: 0.98 }}
//       className={`w-full py-3 rounded-full font-semibold text-lg shadow-md ${
//         plan.isPopular
//           ? "bg-amber-300 text-sky-800 hover:bg-amber-400"
//           : "bg-sky-100 text-sky-700 hover:bg-sky-200"
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Testimonial Data ---
// const testimonials = [
//   {
//     name: "Shikha V., Mumbai",
//     text: "The deep dive into Nakshatras for marriage timing was invaluable. I now feel confident recommending precise dates to clients.",
//     rating: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Rajesh K., Delhi",
//     text: "As a practicing astrologer, this course filled crucial gaps in my Muhurta selection process, especially for business launches. Worth every penny!",
//     rating: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Priya S., Pune",
//     text: "The clear explanation of Rahu Kalam and Visha Ghati changed how I plan my daily activities. My productivity has visibly improved.",
//     rating: "⭐⭐⭐⭐⭐",
//   },
// ];

// // --- Main Page Component ---
// export default function MuhurtasCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     navigate(`/enrollnows?courseId=muhurtas&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-sky-50 to-blue-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-sky-800 leading-snug">
//           The Cosmic Clock: <br />
//           <span className="text-sky-600">Science of Shub Muhurta</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Learn to harness the power of planetary positions for perfect timing.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             navigate(
//               `/enrollnows?courseId=muhurtas&plan=${defaultPlanKey}#enrollment-section`
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Muhurta Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10">
//             🎥 Foundational Timing Concepts
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhurtasVideos.map((video, i) => (
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
//                       "https://placehold.co/400x200/0B5E8F/FFFFFF?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Play className="text-white w-14 h-14 bg-sky-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-sky-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-blue-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10 text-center">
//             📘 Complete <span className={ACCENT_COLOR}>3-Month Muhurta Curriculum</span>
//           </h2>
//           {muhurtasCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-sky-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-700 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-sky-500 bg-sky-100 px-3 py-1 rounded-full">
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
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-sky-300 rounded-3xl bg-amber-50">
//           <h2 className="text-4xl font-serif text-sky-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-sky-600 animate-bounce" /> 🎁 Bonuses Included
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {muhurtasBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-sky-100 flex items-center justify-center text-center"
//               >
//                 <span className="font-medium text-gray-700">{item}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-amber-100 via-sky-50 to-amber-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-sky-700 mb-12 text-center">
//             ✨ Choose Your <span className={ACCENT_COLOR}>Auspicious Path</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {pricingPlans.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Testimonials Section - NEW */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-sky-700 mb-10">
//             🌟 Success Stories: Master of Muhurta
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.03 }}
//                 className="p-6 bg-sky-50 rounded-xl shadow-lg border border-sky-100 flex flex-col items-center"
//               >
//                 <p className="text-4xl mb-3 text-amber-500">“</p>
//                 <p className="text-gray-800 italic flex-grow">“{t.text}”</p>
//                 <p className="mt-4 text-sky-700 font-semibold">{t.rating} — {t.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section - NEW */}
//       <section id="contact" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-sky-50">
//         <div className="max-w-3xl mx-auto text-center p-8 rounded-xl shadow-2xl bg-white border-t-4 border-sky-600">
//           <h2 className="text-4xl font-serif text-sky-700 mb-8">📞 Contact the Cosmic Timing Team</h2>
//           <p className="text-lg text-gray-700 mb-4">
//             Have questions about the curriculum or enrollment? Reach out to us directly!
//           </p>
//           <p className="text-xl font-bold text-sky-800">
//             📧 Email: <a href="mailto:support@muhurtamastery.com" className="text-amber-600 hover:underline">support@muhurtamastery.com</a>
//           </p>
//           <p className="text-xl font-bold text-sky-800 mt-2">
//             📱 Phone/WhatsApp: +91 98765 43210
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-lg`}
//           >
//             📝 Send Us a Message
//           </motion.button>
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
    details: "", // Renamed from 'query' to 'details' for clarity
  });

  const handleEnquiryChange = (e) => {
    setEnquiryForm({ ...enquiryForm, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", enquiryForm);
    alert("Thank you for your enquiry! Our Vibrational Guide will contact you shortly.");
    // Clear the form fields after submission
    setEnquiryForm({ name: "", email: "", phone: "", details: "" });
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
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-0.5">
                Your Enquiry / Details 
              </label>
              <textarea
                name="details" // Changed from 'query'
                id="details"
                rows="2" // Compact style: rows="2"
                required
                value={enquiryForm.details}
                onChange={handleEnquiryChange}
                // Compact style: py-1
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="E.g., Which plan covers Mahamrityunjaya Japa? What is the refund policy? I need help choosing the right plan."
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