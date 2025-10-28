





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
//   Globe, // Icon for cosmology
//   Quote, // Icon for testimonials
//   Mail, // Icon for contact
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration: Updated Colors to Yellow/Orange/Teal (Bright & Light) ---
// const PRIMARY_COLOR = "bg-teal-800"; // Deep Teal/Blue for contrast headers
// const ACCENT_COLOR = "text-orange-500"; // Vibrant Orange for accents
// const HOVER_COLOR = "hover:bg-gradient-to-r from-teal-900 to-teal-700"; // Teal hover for contrast buttons
// const BUTTON_COLOR_BRIGHT =
//   "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"; // Bright Yellow/Orange CTA

// // --- Testimonial Data (NEW) ---
// const testimonials = [
//   {
//     name: "Aarav S., Delhi",
//     text: "The breakdown of the Pañca Lakṣaṇa made the Purāṇas accessible. I finally grasp the true scale of Vedic cosmology.",
//     rating: 5,
//   },
//   {
//     name: "Leela K., London",
//     text: "The philosophical mentoring helped me understand the Bhagavad Gītā's Karma Yoga in a modern context. Truly transformative.",
//     rating: 5,
//   },
//   {
//     name: "David T., US",
//     text: "Analyzing Rāmāyaṇa's Dharma through the different Kāṇḍas was profound. The course structure is excellent.",
//     rating: 4.5,
//   },
// ];

// // --- Curriculum: Updated for Puranas & Itihasa (Data structure kept for context) ---
// const puranaItihasaCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation of Purāṇa & Cosmic Lore",
//     icon: <Globe className="w-5 h-5 mr-3 text-teal-600" />,
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
//     icon: <ScrollText className="w-5 h-5 mr-3 text-teal-600" />,
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
//     icon: <BarChart2 className="w-5 h-5 mr-3 text-teal-600" />,
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

// // --- Accordion Component (Color changed to Teal for contrast) ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Using Teal for the button contrast
//   const accordionPrimaryColor = "bg-teal-700"; // Moderate Teal
//   const accordionHoverColor = "hover:bg-teal-800";

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

// // --- Pricing Card Component (Colors changed to Teal/Orange/Yellow) ---
// const PricingCard = ({ plan, onEnroll }) => (
//   <motion.div
//     whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
//     className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
//       plan.isPopular
//         ? "bg-teal-700 text-white border-4 border-orange-400" // Popular: Teal with Bright Orange border
//         : "bg-white text-gray-800 border-2 border-yellow-200" // Standard: White with Light Yellow border
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-orange-400 text-teal-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
//         ✨ MOST POPULAR
//       </div>
//     )}

//     <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
//     <p
//       className={`text-5xl font-extrabold mb-6 ${
//         plan.isPopular ? "text-yellow-400" : "text-orange-600"
//       }`}
//     >
//       ₹{plan.price.toLocaleString()}
//     </p>

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
//           ? "bg-yellow-400 text-teal-800 hover:bg-yellow-500" // Popular button: Yellow/Teal
//           : "bg-orange-100 text-teal-700 hover:bg-orange-200" // Standard button: Light Orange/Teal
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Testimonial Card Component (NEW) ---
// const TestimonialCard = ({ name, text, rating }) => {
//   const fullStars = Math.floor(rating);
//   const halfStar = rating % 1 !== 0;

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 165, 0, 0.2)" }}
//       className="p-8 bg-white rounded-xl shadow-lg border border-orange-200 flex flex-col items-center text-center"
//     >
//       <Quote className="w-8 h-8 mb-4 text-teal-500" />
//       <p className="text-gray-700 italic flex-grow">“{text}”</p>
//       <div className="flex my-3 text-orange-500">
//         {[...Array(fullStars)].map((_, i) => (
//           <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//         ))}
//         {halfStar && (
//           <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//             <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21l6.18-3.72V2z" />
//           </svg>
//         )}
//       </div>
//       <p className="mt-2 font-semibold text-teal-700">— {name}</p>
//     </motion.div>
//   );
// };


// // --- Main Page Component ---
// export default function PuranasItihasaCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Note: navigate function is mocked as it relies on 'react-router-dom'
//     // console.log(
//     // 	 `Navigating to enrollment for course: purana-itihasa, plan: ${plan.key}`
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
//           className={`mt-8 ${BUTTON_COLOR_BRIGHT} text-teal-800 px-8 py-3 rounded-full font-semibold shadow-xl`}
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

//       {/* Testimonials Section (NEW) */}
//       <section className="py-20 px-6 bg-yellow-100">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-serif text-teal-700 mb-12">
//             🌟 Hear From Our <span className="text-orange-600">Scholars</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((t, i) => (
//               <TestimonialCard
//                 key={i}
//                 name={t.name}
//                 text={t.text}
//                 rating={t.rating}
//               />
//             ))}
//           </div>
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
//                 <CheckCircle2 className="w-5 h-5 mr-2 text-teal-600" /> {/* Changed to Teal */}
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

//       {/* Contact Us Section (NEW) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-3xl mx-auto text-center p-8 border-4 border-solid border-teal-400 rounded-3xl bg-yellow-50 shadow-xl">
//           <h2 className="text-4xl font-serif text-teal-700 mb-8 flex justify-center items-center gap-3">
//             <Mail className="w-8 h-8 text-orange-600" /> Get in Touch
//           </h2>
//           <p className="text-xl font-medium text-gray-700 mb-6">
//             Have questions about the Puranic concepts, course structure, or philosophical mentoring?
//           </p>
//           <p className="text-lg font-semibold text-teal-800">
//             📧 Email Us: <a href="mailto:itihasaschool@example.com" className="text-orange-700 hover:underline">itihasaschool@example.com</a>
//           </p>
//           <p className="text-lg font-semibold text-teal-800 mt-2">
//             📞 WhatsApp Support: +91 98765 43210
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className={`mt-8 ${BUTTON_COLOR_BRIGHT} text-teal-800 px-8 py-3 rounded-full font-bold shadow-lg`}
//           >
//             Send Your Inquiry
//           </motion.button>
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
  MessageSquare, // Icon for the Form
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


// --- CONTACT FORM COMPONENT (Simple & Compact) ---
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual form submission logic (e.g., API call)
    console.log("Contact Form Submitted:", formData);
    alert(`Thank you for reaching out, ${formData.name}! We will review your message shortly.`);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    // REDUCED VERTICAL PADDING: py-20 -> py-10
    <section id="contact" className="py-10 px-6 bg-yellow-100">
      <div 
        // REDUCED CONTAINER PADDING: p-8 -> p-5
        className="max-w-xl mx-auto p-5 bg-white rounded-3xl shadow-2xl border-t-4 border-orange-500"
      >
        <h2 className="text-3xl font-serif text-teal-700 mb-4 text-center font-bold flex items-center justify-center">
          <MessageSquare className="w-7 h-7 mr-2 text-orange-600" />
          Contact <span className={ACCENT_COLOR}>Our Scholars</span>
        </h2>
        {/* REDUCED MARGIN BOTTOM: mb-6 -> mb-4 */}
        <p className="text-center text-gray-600 mb-4 text-sm">
          Submit your question directly and we will respond within 48 hours.
        </p>

        {/* REDUCED FORM GAP: space-y-4 -> space-y-3 */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              // REDUCED VERTICAL PADDING: py-2 -> py-1.5
              className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              // REDUCED VERTICAL PADDING: py-2 -> py-1.5
              className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Question/Inquiry</label>
            <textarea
              name="message"
              id="message"
              rows="3" // REDUCED TEXTAREA ROWS: 4 -> 3
              required
              value={formData.message}
              onChange={handleChange}
              // REDUCED VERTICAL PADDING: py-2 -> py-1.5
              className="mt-1 block w-full px-4 py-1.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // REDUCED MARGIN TOP: mt-5 -> mt-3, REDUCED VERTICAL PADDING: py-3 -> py-2
            className={`w-full mt-3 ${BUTTON_COLOR_BRIGHT} text-teal-800 font-bold py-2 px-4 rounded-full shadow-lg transition-transform text-base`}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};
// --- END CONTACT FORM COMPONENT ---


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

      {/* Contact Us Section - Now a Compact Form */}
      <ContactForm />

    </div>
  );
}