

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Play,
//   CheckCircle2,
//   ChevronDown,
//   ChevronUp,
//   Star,
//   BookOpen,
//   Clock,
//   Gift,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// // --- Configuration ---
// const PRIMARY_COLOR = "bg-red-600"; // Changed to deep red for devotional theme
// const ACCENT_COLOR = "text-yellow-400"; // Golden accent
// const HOVER_COLOR = "hover:bg-gradient-to-r from-red-700 to-orange-500";


// // Detailed 12-Week (3-Month) Curriculum Plan
// const pujaCourseCurriculum = [
//   {
//     monthTitle: "🕉️ Month 1 (Weeks 1-4): Foundational Sadhana",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Preparation & Sacred Space (Sthana)",
//         details: [
//           "The spiritual significance and benefits of daily worship (Puja and Homa).",
//           "**Achamana** (purification) and setting a clear **Sankalpa** (Intention).",
//           "Creating and maintaining a beautiful and powerful Puja Sthana (altar).",
//           "Choosing and preparing essential materials (water, incense, flowers, lamp).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Core Upacharas (Offerings) & Prana Pratishta",
//         details: [
//           "Understanding the **Panchopachara** (5-fold) and **Shodashopachara** (16-fold) methods.",
//           "Techniques for offering Asana, Padya, Arghya, and Snana.",
//           "The correct placement and lighting of Dhoop (incense) and Deep (lamp).",
//           "Mantra for offering Naivedyam (food) and Tambulam (betel).",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Mantra Japa & Dhyana Practice",
//         details: [
//           "**Guru Vandana** and introductory **Ganesh Puja** (Vighnesha removal).",
//           "In-depth practice of the **Gayatri Mantra** and **Mahamrityunjaya Mantra**.",
//           "The science of Japa Mala (rosary) and various mudras for concentration.",
//           "Simple, effective **Dhyana** (Meditation) techniques for daily practice.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Concluding Rituals & Integration",
//         details: [
//           "Performing a heartfelt **Arati** (waving of light) and associated chants.",
//           "**Pradakshina** (circumambulation) and its deeper meaning.",
//           "**Visarjana** (Concluding the ritual) and transferring the fruits of the Puja (Phala Samarpanam).",
//           "How to seamlessly integrate 15-minute sadhana into a busy modern lifestyle.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "✨ Month 2 (Weeks 5-8): Advanced Deity Worship & Bhakti Yoga",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Ishta Devata Sadhana & Personal Mantras",
//         details: [
//           "Guidelines for choosing your **Ishta Devata** (personal favorite deity).",
//           "Understanding the iconography and symbolism of Vishnu, Shiva, and Shakti.",
//           "Learning the core Bijakshara (seed) Mantras for major deities.",
//           "Advanced use of **Nyasa** (ritual placement of mantras) for divine protection.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Detailed Shodashopachara Mastery",
//         details: [
//           "Practice of the full **16 Upacharas** with Sanskrit chanting (e.g., Vastra, Abharana, Gandha).",
//           "The importance of **Mantra Pushpam** (flower offering with Vedic chants).",
//           "Techniques for elaborate **Abhishekam** (ritual bathing) using milk, yogurt, and honey.",
//           "Handling and offering **Tulasi** (for Vishnu) and **Belpatra** (for Shiva).",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Aartis, Hymns, and Stotrams",
//         details: [
//           "Learning the structure and significance of singing **Aarti** (hymns of light).",
//           "Memorizing and understanding popular **Stotrams** (devotional hymns) like the Hanuman Chalisa.",
//           "The practice of **Kirtan** (call-and-response chanting) and its effect on the mind.",
//           "Using **Bhajans** to elevate emotional devotion (Bhakti Rasa).",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: The Path of Bhakti Yoga",
//         details: [
//           "In-depth study of the nine forms of devotion (**Navavidha Bhakti**).",
//           "The role of faith (**Shraddha**) and surrender (**Prapatti**) in daily life.",
//           "The tradition of devotional storytelling (**Katha**) as a form of worship.",
//           "Cultivating **Divine Love (Prema)** and seeing the Divine in all beings.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "📅 Month 3 (Weeks 9-12): Rites, Festivals & Spiritual Integration",
//     icon: <Clock className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Simple Homa (Fire Ritual) Fundamentals",
//         details: [
//           "Introduction to **Agnihotra** and the sacred significance of the fire altar (**Homa Kunda**).",
//           "Setting up a small, safe home Homa for purifying the environment.",
//           "Learning the core **Swaha** and **Idam Na Mama** mantras for offering.",
//           "The spiritual and environmental benefits of a daily fire ritual.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Festival (Utsava) & Vrata (Vow) Practice",
//         details: [
//           "Understanding the Lunar Calendar (**Panchang**) and auspicious days (Tithis).",
//           "Customizing Puja for major festivals (e.g., Diwali, Shivaratri, Janmashtami).",
//           "The methodology and benefits of taking spiritual vows (**Vrata**).",
//           "Performing a simple **Tarpanam** (offering to ancestors and Rishis) for completion.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Sacred Geometry: Yantra, Mandala, and Kalasha",
//         details: [
//           "The power of **Yantra** (sacred geometry) and how to worship it (Yantra Puja).",
//           "Techniques for drawing a **Mandala** or **Rangoli** as an offering.",
//           "The ritual of **Kalasha Sthapana** (installing a sacred pot) for invoking cosmic energy.",
//           "Understanding **Murti Prana Pratishtha** (energizing an idol) for personal worship.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Lifetime Sadhana & Seva",
//         details: [
//           "Creating a **personalized 1-year sadhana roadmap** based on your life goals.",
//           "The concept and practice of **Seva** (selfless service) as the highest form of worship.",
//           "Dealing with challenges: breaking the routine, travel, and illness.",
//           "Review and advanced Dhyana techniques for deep communion with the Divine.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Lecture Videos ---
// const lectureVideos = [
//   {
//     title: "The Power of Sankalpa",
//     thumbnail: "https://placehold.co/400x200/FEE600/7F0000?text=Sankalpa+Video",
//     link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
//   },
//   {
//     title: "Understanding Dhoop and Deep",
//     thumbnail: "https://placehold.co/400x200/FFD700/8B0000?text=Dhoop+and+Deep+Video",
//     link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
//   },
//   {
//     title: "Gayatri Mantra Japa Practice",
//     thumbnail: "https://placehold.co/400x200/F5DEB3/800000?text=Mantra+Japa+Video",
//     link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
//   },
// ];


// // --- Bonus Items ---
// const bonusItems = [
//   "Printable Step-by-Step Puja Chart (12 Weeks)",
//   "Advanced Deity-Specific Mantra Audio Guide",
//   "Lifetime Sadhana Community & Q&A Access",
// ];

// // --- Pricing Plans ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Sankalpa Starter (1-Month)",
//     price: 1499,
//     features: [
//       "Month 1 (Weeks 1-4) Modules",
//       "Recorded Lectures",
//       "Basic Q&A Forum Access",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Sadhana Master (3-Month Full)",
//     price: 1999, // Price updated for 3-month curriculum
//     features: [
//       "All 3 Months (12 Weeks) Curriculum",
//       "Lifetime Course Access",
//       "Free Bonuses (All 3)",
//       "4 Live Q&A Guidance Sessions",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Purohit Mentor (3-Month + 1:1)",
//     price: 2999, // Price updated for 3-month curriculum
//     features: [
//       "All Sadhana Master Features",
//       "1:1 Mentorship Sessions (6)", // Increased sessions for 3 months
//       "Custom Muhurta & Vrata Planning",
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


// export default function CourseDetailsPage() {
//   const navigate = useNavigate();
//   const courseTitle = "Daily Puja Sadhana Course";

//   const handleEnrollClick = (plan) => {
//     navigate(`/enrollnows?courseId=daily-puja&plan=${plan.key}#enrollment-section`);
//   };

//   // The default enroll button links to the popular plan
//   const defaultPlanKey = pricingPlans.find(p => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden">
//       {/* Hero */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
//           Master the Art of Daily Puja: <br />
//           <span className="text-red-600">Connect with the Divine</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           A practical, step-by-step guide to establishing a powerful, transformative **3-Month** daily spiritual practice.
//         </p>

//         <motion.button
//           onClick={() =>
//             navigate(`/enrollnows?courseId=daily-puja&plan=${defaultPlanKey}#enrollment-section`)
//           }
//           whileHover={{ scale: 1.05 }}
//           className="mt-8 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
//         >
//           👉 Begin Your Sadhana Today
//         </motion.button>
//       </section>

//       {/* Course Lecture Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">🎥 Course Lecture Videos</h2>
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
//                   // Fallback for image loading issues
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://placehold.co/400x200/FEE600/7F0000?text=Puja+Video";
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
//             📘 Complete <span className={ACCENT_COLOR}>3-Month (12-Week) Curriculum</span>
//           </h2>

//           {pujaCourseCurriculum.map((month, index) => (
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
//               Download Full Puja Ritual Guide
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Bonus Section */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-50">
//           <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-red-600 animate-bounce" /> 🙏{" "}
//             <span className="font-bold">Free Gifts</span> – Limited Time!
//           </h2>
//           <p className="text-2xl font-bold text-red-800 mb-6">
//             🎁 Exclusive Sadhana Tools:
//           </p>
//           <div className="grid md:grid-cols-3 gap-6">
//             {bonusItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
//               >
//                 <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
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
//             ✨ Choose Your <span className={ACCENT_COLOR}>Path to Devotion</span>
//           </h2>

//           <div className="grid lg:grid-cols-3 gap-8 items-stretch">
//             {pricingPlans.map((plan, index) => (
//               <PricingCard key={index} plan={plan} onEnroll={handleEnrollClick} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               { name: "Sneha, Pune", text: "My concentration during meditation has improved drastically and my mind is calmer." },
//               { name: "Arjun, Delhi", text: "The course broke down complex rituals into simple, practical daily steps that I could follow." },
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
//           <p className="text-lg">💌 Email: sadhana@dailypuja.com</p>
//           <p className="text-lg">📱 WhatsApp: +91 91234 56789</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🧭 Book Free Guidance Call
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


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Star,
  BookOpen,
  Clock,
  Gift,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// --- Configuration ---
const PRIMARY_COLOR = "bg-red-600"; // Changed to deep red for devotional theme
const ACCENT_COLOR = "text-yellow-400"; // Golden accent
const HOVER_COLOR = "hover:bg-gradient-to-r from-red-700 to-orange-500";


// Detailed 12-Week (3-Month) Curriculum Plan
const pujaCourseCurriculum = [
  {
    monthTitle: "🕉️ Month 1 (Weeks 1-4): Foundational Sadhana",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Preparation & Sacred Space (Sthana)",
        details: [
          "The spiritual significance and benefits of daily worship (Puja and Homa).",
          "**Achamana** (purification) and setting a clear **Sankalpa** (Intention).",
          "Creating and maintaining a beautiful and powerful Puja Sthana (altar).",
          "Choosing and preparing essential materials (water, incense, flowers, lamp).",
        ],
      },
      {
        id: 2,
        title: "Week 2: Core Upacharas (Offerings) & Prana Pratishta",
        details: [
          "Understanding the **Panchopachara** (5-fold) and **Shodashopachara** (16-fold) methods.",
          "Techniques for offering Asana, Padya, Arghya, and Snana.",
          "The correct placement and lighting of Dhoop (incense) and Deep (lamp).",
          "Mantra for offering Naivedyam (food) and Tambulam (betel).",
        ],
      },
      {
        id: 3,
        title: "Week 3: Mantra Japa & Dhyana Practice",
        details: [
          "**Guru Vandana** and introductory **Ganesh Puja** (Vighnesha removal).",
          "In-depth practice of the **Gayatri Mantra** and **Mahamrityunjaya Mantra**.",
          "The science of Japa Mala (rosary) and various mudras for concentration.",
          "Simple, effective **Dhyana** (Meditation) techniques for daily practice.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Concluding Rituals & Integration",
        details: [
          "Performing a heartfelt **Arati** (waving of light) and associated chants.",
          "**Pradakshina** (circumambulation) and its deeper meaning.",
          "**Visarjana** (Concluding the ritual) and transferring the fruits of the Puja (Phala Samarpanam).",
          "How to seamlessly integrate 15-minute sadhana into a busy modern lifestyle.",
        ],
      },
    ],
  },
  {
    monthTitle: "✨ Month 2 (Weeks 5-8): Advanced Deity Worship & Bhakti Yoga",
    icon: <Star className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Ishta Devata Sadhana & Personal Mantras",
        details: [
          "Guidelines for choosing your **Ishta Devata** (personal favorite deity).",
          "Understanding the iconography and symbolism of Vishnu, Shiva, and Shakti.",
          "Learning the core Bijakshara (seed) Mantras for major deities.",
          "Advanced use of **Nyasa** (ritual placement of mantras) for divine protection.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Detailed Shodashopachara Mastery",
        details: [
          "Practice of the full **16 Upacharas** with Sanskrit chanting (e.g., Vastra, Abharana, Gandha).",
          "The importance of **Mantra Pushpam** (flower offering with Vedic chants).",
          "Techniques for elaborate **Abhishekam** (ritual bathing) using milk, yogurt, and honey.",
          "Handling and offering **Tulasi** (for Vishnu) and **Belpatra** (for Shiva).",
        ],
      },
      {
        id: 7,
        title: "Week 7: Aartis, Hymns, and Stotrams",
        details: [
          "Learning the structure and significance of singing **Aarti** (hymns of light).",
          "Memorizing and understanding popular **Stotrams** (devotional hymns) like the Hanuman Chalisa.",
          "The practice of **Kirtan** (call-and-response chanting) and its effect on the mind.",
          "Using **Bhajans** to elevate emotional devotion (Bhakti Rasa).",
        ],
      },
      {
        id: 8,
        title: "Week 8: The Path of Bhakti Yoga",
        details: [
          "In-depth study of the nine forms of devotion (**Navavidha Bhakti**).",
          "The role of faith (**Shraddha**) and surrender (**Prapatti**) in daily life.",
          "The tradition of devotional storytelling (**Katha**) as a form of worship.",
          "Cultivating **Divine Love (Prema)** and seeing the Divine in all beings.",
        ],
      },
    ],
  },
  {
    monthTitle: "📅 Month 3 (Weeks 9-12): Rites, Festivals & Spiritual Integration",
    icon: <Clock className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Simple Homa (Fire Ritual) Fundamentals",
        details: [
          "Introduction to **Agnihotra** and the sacred significance of the fire altar (**Homa Kunda**).",
          "Setting up a small, safe home Homa for purifying the environment.",
          "Learning the core **Swaha** and **Idam Na Mama** mantras for offering.",
          "The spiritual and environmental benefits of a daily fire ritual.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Festival (Utsava) & Vrata (Vow) Practice",
        details: [
          "Understanding the Lunar Calendar (**Panchang**) and auspicious days (Tithis).",
          "Customizing Puja for major festivals (e.g., Diwali, Shivaratri, Janmashtami).",
          "The methodology and benefits of taking spiritual vows (**Vrata**).",
          "Performing a simple **Tarpanam** (offering to ancestors and Rishis) for completion.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Sacred Geometry: Yantra, Mandala, and Kalasha",
        details: [
          "The power of **Yantra** (sacred geometry) and how to worship it (Yantra Puja).",
          "Techniques for drawing a **Mandala** or **Rangoli** as an offering.",
          "The ritual of **Kalasha Sthapana** (installing a sacred pot) for invoking cosmic energy.",
          "Understanding **Murti Prana Pratishtha** (energizing an idol) for personal worship.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Lifetime Sadhana & Seva",
        details: [
          "Creating a **personalized 1-year sadhana roadmap** based on your life goals.",
          "The concept and practice of **Seva** (selfless service) as the highest form of worship.",
          "Dealing with challenges: breaking the routine, travel, and illness.",
          "Review and advanced Dhyana techniques for deep communion with the Divine.",
        ],
      },
    ],
  },
];

// --- Lecture Videos ---
const lectureVideos = [
  {
    title: "The Power of Sankalpa",
    thumbnail: "https://placehold.co/400x200/FEE600/7F0000?text=Sankalpa+Video",
    link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
  },
  {
    title: "Understanding Dhoop and Deep",
    thumbnail: "https://placehold.co/400x200/FFD700/8B0000?text=Dhoop+and+Deep+Video",
    link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
  },
  {
    title: "Gayatri Mantra Japa Practice",
    thumbnail: "https://placehold.co/400x200/F5DEB3/800000?text=Mantra+Japa+Video",
    link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
  },
];


// --- Bonus Items ---
const bonusItems = [
  "Printable Step-by-Step Puja Chart (12 Weeks)",
  "Advanced Deity-Specific Mantra Audio Guide",
  "Lifetime Sadhana Community & Q&A Access",
];

// --- Pricing Plans ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Sankalpa Starter ",
    price: 1499,
    features: [
      "Month 1 (Weeks 1-4) Modules",
      "Recorded Lectures",
      "Basic Q&A Forum Access",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Sadhana Master ",
    price: 1999, // Price updated for 3-month curriculum
    features: [
      "All 3 Months (12 Weeks) Curriculum",
      "Lifetime Course Access",
      "Free Bonuses (All 3)",
      "4 Live Q&A Guidance Sessions",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Purohit Mentor ",
    price: 2999, // Price updated for 3-month curriculum
    features: [
      "All Sadhana Master Features",
      "1:1 Mentorship Sessions (6)", // Increased sessions for 3 months
      "Custom Muhurta & Vrata Planning",
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
        ✨ MOST POPULAR
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
      Enroll in {plan.name}
    </motion.button>
  </motion.div>
);


export default function CourseDetailsPage() {
  const navigate = useNavigate();
  const courseTitle = "Daily Puja Sadhana Course";

  const handleEnrollClick = (plan) => {
    navigate(`/enrollnows?courseId=daily-puja&plan=${plan.key}#enrollment-section`);
  };

  // The default enroll button links to the popular plan
  const defaultPlanKey = pricingPlans.find(p => p.isPopular)?.key || pricingPlans[0].key;

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
    alert("Thank you for your enquiry! We will be in touch shortly.");
    // Clear the form fields after submission
    setEnquiryForm({ name: "", email: "", phone: "", query: "" });
  };
  // ----------------------------------------

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-red-50 to-yellow-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-red-100 via-yellow-50 to-red-100">
        <h1 className="text-5xl md:text-6xl font-serif text-red-800 drop-shadow-md leading-snug">
          Master the Art of Daily Puja: <br />
          <span className="text-red-600">Connect with the Divine</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          A practical, step-by-step guide to establishing a powerful, transformative **3-Month** daily spiritual practice.
        </p>

        <motion.button
          onClick={() =>
            navigate(`/enrollnows?courseId=daily-puja&plan=${defaultPlanKey}#enrollment-section`)
          }
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl"
        >
          👉 Begin Your Sadhana Today
        </motion.button>
      </section>

      {/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">🎥 Course Lecture Videos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {lectureVideos.map((video, i) => (
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
                    e.target.src = "https://placehold.co/400x200/FEE600/7F0000?text=Puja+Video";
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
            📘 Complete <span className={ACCENT_COLOR}>3-Month (12-Week) Curriculum</span>
          </h2>

          {pujaCourseCurriculum.map((month, index) => (
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
              Download Full Puja Ritual Guide
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-red-600 animate-bounce" /> 🙏{" "}
            <span className="font-bold">Free Gifts</span> – Limited Time!
          </h2>
          <p className="text-2xl font-bold text-red-800 mb-6">
            🎁 Exclusive Sadhana Tools:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {bonusItems.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-red-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
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
            ✨ Choose Your <span className={ACCENT_COLOR}>Path to Devotion</span>
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
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🌟 Student Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sneha, Pune", text: "My concentration during meditation has improved drastically and my mind is calmer." },
              { name: "Arjun, Delhi", text: "The course broke down complex rituals into simple, practical daily steps that I could follow." },
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

      {/* Enquiry Form Section (Replaces Contact) */}
      <section id="enquiry" className="py-10 px-6 bg-gradient-to-b from-red-50 to-yellow-50">
        <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-2xl border-t-8 border-red-600">
          <h2 className="text-3xl font-serif text-red-700 mb-3 text-center">
            ❓ Have a Question? <span className={ACCENT_COLOR}>Enquire Now</span>
          </h2>
          <p className="text-gray-600 text-sm mb-4 text-center">
            Fill out the form below and our Sadhana Guide will contact you personally.
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
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="Ex: Surya Sharma"
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
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="sadhaka@example.com"
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
                rows="2" // Further reduced rows
                required
                value={enquiryForm.query}
                onChange={handleEnquiryChange}
                className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 text-sm transition duration-150"
                placeholder="E.g., Which plan is best for a beginner? When do the live sessions start?"
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