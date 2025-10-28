



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
//   Mic, // New Icon for sound/chanting
//   Feather, // New Icon for writing/Sūtras
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Configuration: Updated Colors to Yellow/Orange/Maroon ---
// const PRIMARY_COLOR = "bg-red-800"; // Deep Maroon/Red for main contrast
// const ACCENT_COLOR = "text-yellow-400"; // Bright Yellow for accents
// const HOVER_COLOR = "hover:bg-gradient-to-r from-red-900 to-amber-700";
// const BUTTON_COLOR =
//   "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"; // Orange and Red for CTA

// // --- Curriculum: Updated for Sanskrit Vedas ---
// const vedasCurriculum = [
//   {
//     monthTitle: "☀️ Month 1: Foundation - Śruti, Saṁhitā, and Phonetics",
//     icon: <Sun className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Vedas (Śruti) & Mukhya Saṁhitās",
//         details: [
//           "Defining **Veda** (Knowledge), **Śruti** (Revealed Text), and their four-fold division.",
//           "Overview of the **Four Saṁhitās** (Rig, Yajur, Sāma, Atharva) and their focus.",
//           "Understanding the structure: Saṁhitā, Brāhmaṇa, Āraṇyaka, and Upaniṣad.",
//           "Practical exercise: Identifying the *Rishi* (Seer), *Chandas* (Meter), and *Devatā* (Deity).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: Vedic Phonetics (Śikṣā) and Svara",
//         details: [
//           "In-depth study of **Vedic pronunciation** and the role of the **Prātiśākhyas**.",
//           "Mastering the **three Svaras** (accents): Udātta, Anudātta, and Svarita.",
//           "Understanding the rules for Sandhi (joining) in the continuous Vedic text (*Saṁhitā Pāṭha*).",
//           "Practice: Chanting *Upadeśa* sections with correct Svara markings.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: Agni Sūkta (Rigveda I.1) Analysis",
//         details: [
//           "Detailed word-by-word (Pada Pāṭha) and continuous text (Saṁhitā Pāṭha) breakdown.",
//           "Grammatical analysis of key Vedic verb forms (Dhātu-rūpa) and nominal forms (Subanta).",
//           "Exploring Sāyaṇa’s and other traditional commentaries on the Sūkta.",
//           "Memorization practice of the first few verses with proper articulation.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: Puruṣa Sūkta (RV X.90) and Cosmology",
//         details: [
//           "Study of the **Puruṣa Sūkta** and its philosophical significance.",
//           "The Vedic concept of creation and the origin of the Varṇas.",
//           "Revision of Vedic meter (Chandas) – **Gāyatrī** and **Triṣṭubh**.",
//           "Timed assessment: Identifying the Veda and Svara for given verses.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🎯 Month 2: Applied Mantras, Karma, and Ritual",
//     icon: <Target className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Rudram and Śatarudrīya (Yajurveda)",
//         details: [
//           "Introduction to the **Yajurveda** and its division into *Śukla* and *Kṛṣṇa* branches.",
//           "Word-by-word meaning and application of the Śatarudrīya Stotram.",
//           "Understanding the concept of **Yajña** (Sacrifice) and the role of the *Adhvaryu* priest.",
//           "Learning the specific **Mantra recitation** style of the Yajurveda.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Gāyatrī Mantra & Daily Sandhyā Upāsanā",
//         details: [
//           "The profound meaning and structure of the **Gāyatrī Mantra**.",
//           "Protocol and timing for **Sandhyā Upāsanā** (daily twilight worship).",
//           "The importance of **Upaniṣad** (seated near) as the end of Veda (Vedānta).",
//           "Practical steps for incorporating mantra recitation into daily life.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Sāma Veda & Vedic Music (Gāna)",
//         details: [
//           "The role of the **Sāma Veda** and its significance in musical chanting.",
//           "Understanding **Sāma-gāna** notation and the different modes (*grāmas*).",
//           "Analysis of key Sāma chants used during Soma rituals.",
//           "Listening session: Comparing *Rik* and *Sāman* recitations.",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Atharva Veda & Practical Life Applications",
//         details: [
//           "Focus on the **Atharva Veda** and its content on healing, protection, and community.",
//           "Study of selected **Oṣadhi Sūktas** (herbal hymns) and their purpose.",
//           "Integrated review of all four Vedas and their associated Brāhmaṇas.",
//           "Monthly Project: Preparing a short presentation on a chosen Vedic ritual.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔱 Month 3: Advanced Concepts - Vedāṅgas and Upaniṣads",
//     icon: <Feather className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Jyotiṣa (Vedic Astronomy) and Kalpa (Ritual)",
//         details: [
//           "Introduction to the six **Vedāṅgas** (limbs of Veda).",
//           "Role of **Jyotiṣa** (Astronomy/Astrology) in fixing sacrificial times (Muhūrta).",
//           "The **Kalpa Vedāṅga**—Śrauta, Gṛhya, Dharma Sūtras—governing public and domestic rites.",
//           "Study of key concepts from the *Gṛhya Sūtras* (domestic rites).",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Nirukta (Etymology) and Chandas (Prosody)",
//         details: [
//           "Yāska's **Nirukta** and the method of deriving word meanings from roots.",
//           "Deep dive into **Chandas**—Prastāra, Naṣṭam, and Uddiṣṭam.",
//           "The concept of *Akṣara* (imperishable) in Vedic thought.",
//           "Exercise: Etymological breakdown of common Vedic terms like *Indra* and *Vāyu*.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: The Iśā Upaniṣad (Mantra Pāṭha)",
//         details: [
//           "Full textual study and commentary on the **Iśā Upaniṣad**.",
//           "Key philosophical concepts: **Īśa Vāsyam** (All is pervaded by the Lord).",
//           "Reconciling *Karma* (action) and *Jñāna* (knowledge) as presented in the Upaniṣad.",
//           "Case Studies: Application of Upaniṣadic principles in modern life.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Veda Adhyayana - Lineage and Preservation",
//         details: [
//           "The importance of the **Guru-Śiṣya Paramparā** (teacher-student lineage).",
//           "Methods of Veda preservation: **Vikṛtis** (modified recitations) like Ghana Pāṭha.",
//           "The ethics of Vedic study and propagation.",
//           "Final Oral Recitation and Written Assessment.",
//         ],
//       },
//     ],
//   },
// ];

// // --- Video Section: Updated for Vedas ---
// const vedasVideos = [
//   {
//     title: "Vedic Chanting Basics: Svara Markers",
//     thumbnail: "https://placehold.co/400x200/B22222/FFD700?text=Vedic+Svara+Video",
//     link: "#",
//   },
//   {
//     title: "The Four Vedas in a Nutshell",
//     thumbnail: "https://placehold.co/400x200/D4AF37/B22222?text=Vedas+Overview",
//     link: "#",
//   },
//   {
//     title: "Understanding Agni Sūkta (RV I.1)",
//     thumbnail: "https://placehold.co/400x200/FF8C00/B22222?text=Agni+Sūkta+Analysis",
//     link: "#",
//   },
// ];

// // --- Bonus Section: Updated for Vedas ---
// const vedasBonus = [
//   "High-Resolution Svara & Mantra Pāṭha Chart",
//   "PDF Guide to Vedic Deities and Attributes",
//   "Access to Digital Chanting Library (Audio)",
// ];

// // --- Pricing Plans: Updated for Vedas ---
// const pricingPlans = [
//   {
//     id: 1,
//     key: "starter",
//     name: "Śruti Foundation",
//     price: 3999,
//     features: [
//       "Months 1 & 2 Modules (Saṁhitā & Applied Mantras)",
//       "Recorded Video & Audio Lectures",
//       "Module-wise Quizzes and Reading Materials",
//     ],
//     isPopular: false,
//   },
//   {
//     id: 2,
//     key: "master",
//     name: "Veda Master",
//     price: 6999,
//     features: [
//       "All 3 Months Curriculum (Full Mastery)",
//       "Digital Chanting Library Access",
//       "4 Live Pāṭha Correction Sessions",
//       "Final Project & Certification",
//     ],
//     isPopular: true,
//   },
//   {
//     id: 3,
//     key: "mentor",
//     name: "Vedāṅga Scholar",
//     price: 8999,
//     features: [
//       "All Veda Master Features",
//       "4 x 1:1 Personalized Recitation Checks",
//       "Advanced Vedāṅga Sūtra Module",
//       "Dedicated Scholar Community Access",
//     ],
//     isPopular: false,
//   },
// ];

// // --- Accordion Component ---
// const CourseAccordionItem = ({ title, details }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Using Maroon for the button contrast
//   const accordionPrimaryColor = "bg-red-800"; 
//   const accordionHoverColor = "hover:bg-red-900";

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
//             className="overflow-hidden bg-yellow-50 p-4 border-l-4 border-b-4 border-r-4 border-amber-300 rounded-b-xl" // Light Yellow/Amber inner background
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
//         ? "bg-red-800 text-white border-4 border-yellow-400" // Popular: Maroon with Bright Yellow border
//         : "bg-white text-gray-800 border-2 border-orange-200" // Standard: White with Light Orange border
//     } flex flex-col h-full`}
//   >
//     {plan.isPopular && (
//       <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
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
//               plan.isPopular ? "text-yellow-400" : "text-orange-500"
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
//           ? "bg-yellow-400 text-red-800 hover:bg-yellow-500" // Popular button: Yellow/Maroon
//           : "bg-orange-100 text-orange-700 hover:bg-orange-200" // Standard button: Light Orange/Orange
//       }`}
//     >
//       Master with {plan.name}
//     </motion.button>
//   </motion.div>
// );

// // --- Main Page Component ---
// export default function VedasCourse() {
//   const navigate = useNavigate();

//   const handleEnrollClick = (plan) => {
//     // Note: navigate function is mocked as it relies on 'react-router-dom'
//     // console.log(
//     //   `Navigating to enrollment for course: vedas, plan: ${plan.key}`
//     // );
//     navigate(`/enrollnows?courseId=vedas&plan=${plan.key}#enrollment-section`);
//   };

//   const defaultPlanKey =
//     pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <h1 className="text-5xl md:text-6xl font-serif text-red-800 leading-snug">
//           The Immutable Sound: <br />
//           <span className="text-orange-600">Sanskrit Vedas Recitation & Meaning</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mt-4">
//           Learn the *Śruti* tradition, master Vedic Svara, and unlock the deepest
//           insights of the four Vedas.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={() =>
//             handleEnrollClick(
//               pricingPlans.find((p) => p.key === defaultPlanKey)
//             )
//           }
//           className={`mt-8 ${BUTTON_COLOR} text-white px-8 py-3 rounded-full font-semibold shadow-xl`}
//         >
//           👉 Enroll in the Veda Master Plan
//         </motion.button>
//       </section>

//       {/* Videos */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-serif text-red-700 mb-10">
//             🎙️ Foundational Recitation & Pāṭha
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vedasVideos.map((video, i) => (
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
//                       "https://placehold.co/400x200/B22222/FFD700?text=Video+Placeholder";
//                   }}
//                   className="w-full h-52 object-cover group-hover:brightness-75 transition"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <Mic className="text-white w-14 h-14 bg-red-600 p-3 rounded-full shadow-lg" />
//                 </div>
//                 <p className="mt-3 font-medium text-red-800">{video.title}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
//             📘 Complete <span className="text-orange-600">3-Month Vedic Curriculum</span>
//           </h2>
//           {vedasCurriculum.map((month, index) => (
//             <div className="mb-10" key={index}>
//               <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
//                 {month.icon}
//                 <h3 className="text-2xl font-bold text-gray-800 flex justify-between w-full">
//                   <span>{month.monthTitle}</span>
//                   <span className="text-sm font-medium text-red-700 bg-yellow-200 px-3 py-1 rounded-full">
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
//         <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-red-300 rounded-3xl bg-yellow-100">
//           <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
//             <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Ādi Grantha Companion Pack
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {vedasBonus.map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
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
//           <h2 className="text-4xl font-serif text-red-700 mb-12 text-center">
//             ✨ Choose Your <span className="text-orange-600">Path to Śruti</span>
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
  Mic,
  Feather,
  Quote, // New icon for testimonials
  Mail, // New icon for contact
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Configuration: Updated Colors to BRIGHTER Yellow/Orange/Light Red ---
const PRIMARY_COLOR_LIGHT = "bg-orange-500"; // Light Orange for main CTA
const ACCENT_COLOR_LIGHT = "text-orange-600"; // Bright Orange for accents
const CONTRAST_COLOR = "bg-red-700"; // Moderate Red for headings/contrast buttons
const HOVER_COLOR_LIGHT = "hover:bg-orange-600";
const BUTTON_COLOR_BRIGHT =
  "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"; // Bright Yellow/Orange CTA

// --- Curriculum: Updated for Sanskrit Vedas (Data remains the same for structure) ---
const vedasCurriculum = [
  {
    monthTitle: "☀️ Month 1: Foundation - Śruti, Saṁhitā, and Phonetics",
    icon: <Sun className="w-5 h-5 mr-3 text-orange-500" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to Vedas (Śruti) & Mukhya Saṁhitās",
        details: [
          "Defining **Veda** (Knowledge), **Śruti** (Revealed Text), and their four-fold division.",
          "Overview of the **Four Saṁhitās** (Rig, Yajur, Sāma, Atharva) and their focus.",
          "Understanding the structure: Saṁhitā, Brāhmaṇa, Āraṇyaka, and Upaniṣad.",
          "Practical exercise: Identifying the *Rishi* (Seer), *Chandas* (Meter), and *Devatā* (Deity).",
        ],
      },
      {
        id: 2,
        title: "Week 2: Vedic Phonetics (Śikṣā) and Svara",
        details: [
          "In-depth study of **Vedic pronunciation** and the role of the **Prātiśākhyas**.",
          "Mastering the **three Svaras** (accents): Udātta, Anudātta, and Svarita.",
          "Understanding the rules for Sandhi (joining) in the continuous Vedic text (*Saṁhitā Pāṭha*).",
          "Practice: Chanting *Upadeśa* sections with correct Svara markings.",
        ],
      },
      {
        id: 3,
        title: "Week 3: Agni Sūkta (Rigveda I.1) Analysis",
        details: [
          "Detailed word-by-word (Pada Pāṭha) and continuous text (Saṁhitā Pāṭha) breakdown.",
          "Grammatical analysis of key Vedic verb forms (Dhātu-rūpa) and nominal forms (Subanta).",
          "Exploring Sāyaṇa’s and other traditional commentaries on the Sūkta.",
          "Memorization practice of the first few verses with proper articulation.",
        ],
      },
      {
        id: 4,
        title: "Week 4: Puruṣa Sūkta (RV X.90) and Cosmology",
        details: [
          "Study of the **Puruṣa Sūkta** and its philosophical significance.",
          "The Vedic concept of creation and the origin of the Varṇas.",
          "Revision of Vedic meter (Chandas) – **Gāyatrī** and **Triṣṭubh**.",
          "Timed assessment: Identifying the Veda and Svara for given verses.",
        ],
      },
    ],
  },
  {
    monthTitle: "🎯 Month 2: Applied Mantras, Karma, and Ritual",
    icon: <Target className="w-5 h-5 mr-3 text-orange-500" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Rudram and Śatarudrīya (Yajurveda)",
        details: [
          "Introduction to the **Yajurveda** and its division into *Śukla* and *Kṛṣṇa* branches.",
          "Word-by-word meaning and application of the Śatarudrīya Stotram.",
          "Understanding the concept of **Yajña** (Sacrifice) and the role of the *Adhvaryu* priest.",
          "Learning the specific **Mantra recitation** style of the Yajurveda.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Gāyatrī Mantra & Daily Sandhyā Upāsanā",
        details: [
          "The profound meaning and structure of the **Gāyatrī Mantra**.",
          "Protocol and timing for **Sandhyā Upāsanā** (daily twilight worship).",
          "The importance of **Upaniṣad** (seated near) as the end of Veda (Vedānta).",
          "Practical steps for incorporating mantra recitation into daily life.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Sāma Veda & Vedic Music (Gāna)",
        details: [
          "The role of the **Sāma Veda** and its significance in musical chanting.",
          "Understanding **Sāma-gāna** notation and the different modes (*grāmas*).",
          "Analysis of key Sāma chants used during Soma rituals.",
          "Listening session: Comparing *Rik* and *Sāman* recitations.",
        ],
      },
      {
        id: 8,
        title: "Week 8: Atharva Veda & Practical Life Applications",
        details: [
          "Focus on the **Atharva Veda** and its content on healing, protection, and community.",
          "Study of selected **Oṣadhi Sūktas** (herbal hymns) and their purpose.",
          "Integrated review of all four Vedas and their associated Brāhmaṇas.",
          "Monthly Project: Preparing a short presentation on a chosen Vedic ritual.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔱 Month 3: Advanced Concepts - Vedāṅgas and Upaniṣads",
    icon: <Feather className="w-5 h-5 mr-3 text-orange-500" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Jyotiṣa (Vedic Astronomy) and Kalpa (Ritual)",
        details: [
          "Introduction to the six **Vedāṅgas** (limbs of Veda).",
          "Role of **Jyotiṣa** (Astronomy/Astrology) in fixing sacrificial times (Muhūrta).",
          "The **Kalpa Vedāṅga**—Śrauta, Gṛhya, Dharma Sūtras—governing public and domestic rites.",
          "Study of key concepts from the *Gṛhya Sūtras* (domestic rites).",
        ],
      },
      {
        id: 10,
        title: "Week 10: Nirukta (Etymology) and Chandas (Prosody)",
        details: [
          "Yāska's **Nirukta** and the method of deriving word meanings from roots.",
          "Deep dive into **Chandas**—Prastāra, Naṣṭam, and Uddiṣṭam.",
          "The concept of *Akṣara* (imperishable) in Vedic thought.",
          "Exercise: Etymological breakdown of common Vedic terms like *Indra* and *Vāyu*.",
        ],
      },
      {
        id: 11,
        title: "Week 11: The Iśā Upaniṣad (Mantra Pāṭha)",
        details: [
          "Full textual study and commentary on the **Iśā Upaniṣad**.",
          "Key philosophical concepts: **Īśa Vāsyam** (All is pervaded by the Lord).",
          "Reconciling *Karma* (action) and *Jñāna* (knowledge) as presented in the Upaniṣad.",
          "Case Studies: Application of Upaniṣadic principles in modern life.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Veda Adhyayana - Lineage and Preservation",
        details: [
          "The importance of the **Guru-Śiṣya Paramparā** (teacher-student lineage).",
          "Methods of Veda preservation: **Vikṛtis** (modified recitations) like Ghana Pāṭha.",
          "The ethics of Vedic study and propagation.",
          "Final Oral Recitation and Written Assessment.",
        ],
      },
    ],
  },
];

// --- Testimonial Data ---
const testimonials = [
  {
    name: "Arun K., Chennai",
    text: "Mastering the Svara was a game changer. The meticulous focus on phonetics made the recitation authentic and immensely satisfying. I finally understand the *sound* of the Veda.",
    rating: 5,
  },
  {
    name: "Priya V., Mumbai",
    text: "The breakdown of the Vedangas in Month 3 provided a comprehensive framework. It moved beyond chanting to truly understanding the holistic knowledge system. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vikram S., US",
    text: "As a beginner, I was worried, but the progression from Rigveda basics to Upaniṣads was smooth and logical. The live correction sessions were invaluable for my Pāṭha.",
    rating: 4.5,
  },
];


// --- Video Section: Updated for Vedas ---
const vedasVideos = [
  {
    title: "Vedic Chanting Basics: Svara Markers",
    thumbnail: "https://placehold.co/400x200/FFD700/D20000?text=Vedic+Svara+Video",
    link: "#",
  },
  {
    title: "The Four Vedas in a Nutshell",
    thumbnail: "https://placehold.co/400x200/FF8C00/D20000?text=Vedas+Overview",
    link: "#",
  },
  {
    title: "Understanding Agni Sūkta (RV I.1)",
    thumbnail: "https://placehold.co/400x200/FFA500/D20000?text=Agni+Sūkta+Analysis",
    link: "#",
  },
];

// --- Bonus Section: Updated for Vedas ---
const vedasBonus = [
  "High-Resolution Svara & Mantra Pāṭha Chart",
  "PDF Guide to Vedic Deities and Attributes",
  "Access to Digital Chanting Library (Audio)",
];

// --- Pricing Plans: Updated for Vedas ---
const pricingPlans = [
  {
    id: 1,
    key: "starter",
    name: "Śruti Foundation",
    price: 3999,
    features: [
      "Months 1 & 2 Modules (Saṁhitā & Applied Mantras)",
      "Recorded Video & Audio Lectures",
      "Module-wise Quizzes and Reading Materials",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master",
    name: "Veda Master",
    price: 6999,
    features: [
      "All 3 Months Curriculum (Full Mastery)",
      "Digital Chanting Library Access",
      "4 Live Pāṭha Correction Sessions",
      "Final Project & Certification",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor",
    name: "Vedāṅga Scholar",
    price: 8999,
    features: [
      "All Veda Master Features",
      "4 x 1:1 Personalized Recitation Checks",
      "Advanced Vedāṅga Sūtra Module",
      "Dedicated Scholar Community Access",
    ],
    isPopular: false,
  },
];

// --- Accordion Component ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Using CONTRAST_COLOR (Moderate Red) for the button contrast
  const accordionPrimaryColor = "bg-red-700";
  const accordionHoverColor = "hover:bg-red-800";

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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-300 rounded-b-xl" // Light inner background with Orange border
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

// --- Pricing Card Component ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-orange-500 text-white border-4 border-yellow-400" // Popular: Moderate Red with Bright Yellow border
        : "bg-white text-gray-800 border-2 border-orange-200" // Standard: White with Light Orange border
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-red-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
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
              plan.isPopular ? "text-yellow-400" : "text-orange-500"
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
          ? "bg-yellow-400 text-red-700 hover:bg-yellow-500" // Popular button: Yellow/Moderate Red
          : "bg-orange-100 text-orange-700 hover:bg-orange-200" // Standard button: Light Orange/Orange
      }`}
    >
      Master with {plan.name}
    </motion.button>
  </motion.div>
);

// --- Testimonial Card Component ---
const TestimonialCard = ({ name, text, rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 140, 0, 0.2)" }}
      className="p-8 bg-white rounded-xl shadow-lg border border-yellow-200 flex flex-col items-center text-center"
    >
      <Quote className="w-8 h-8 mb-4 text-orange-500" />
      <p className="text-gray-700 italic flex-grow">“{text}”</p>
      <div className="flex my-3 text-yellow-500">
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
      <p className="mt-2 font-semibold text-orange-700">— {name}</p>
    </motion.div>
  );
};


// --- Main Page Component ---
export default function VedasCourse() {
  const navigate = useNavigate();

  const handleEnrollClick = (plan) => {
    // console.log(`Navigating to enrollment for course: vedas, plan: ${plan.key}`);
    navigate(`/enrollnows?courseId=vedas&plan=${plan.key}#enrollment-section`);
  };

  const defaultPlanKey =
    pricingPlans.find((p) => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-red-800 leading-snug">
          The Immutable Sound: <br />
          <span className="text-orange-600">Sanskrit Vedas Recitation & Meaning</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Learn the *Śruti* tradition, master Vedic Svara, and unlock the deepest
          insights of the four Vedas.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            handleEnrollClick(
              pricingPlans.find((p) => p.key === defaultPlanKey)
            )
          }
          className={`mt-8 ${BUTTON_COLOR_BRIGHT} text-red-800 px-8 py-3 rounded-full font-bold shadow-xl`}
        >
          👉 Enroll in the Veda Master Plan
        </motion.button>
      </section>

      {/* Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif text-red-700 mb-10">
            🎙️ Foundational Recitation & Pāṭha
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedasVideos.map((video, i) => (
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
                      "https://placehold.co/400x200/FFD700/D20000?text=Video+Placeholder";
                  }}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Mic className="text-white w-14 h-14 bg-red-700 p-3 rounded-full shadow-lg" />
                </div>
                <p className="mt-3 font-medium text-red-800">{video.title}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-red-700 mb-10 text-center">
            📘 Complete <span className="text-orange-600">3-Month Vedic Curriculum</span>
          </h2>
          {vedasCurriculum.map((month, index) => (
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

      {/* Testimonials Section (NEW) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-red-700 mb-12">
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
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-white shadow-inner">
          <h2 className="text-4xl font-serif text-red-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🎁 Ādi Grantha Companion Pack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {vedasBonus.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-yellow-100 rounded-xl shadow-md border border-orange-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
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
            ✨ Choose Your <span className="text-orange-600">Path to Śruti</span>
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
        <div className="max-w-3xl mx-auto text-center p-8 border-4 border-solid border-orange-400 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-red-700 mb-8 flex justify-center items-center gap-3">
            <Mail className="w-8 h-8 text-orange-600" /> Need Guidance?
          </h2>
          <p className="text-xl font-medium text-gray-700 mb-6">
            We are here to help you begin your Vedic journey. Reach out with any questions.
          </p>
          <p className="text-lg font-semibold text-orange-800">
            📧 Email: <a href="mailto:scholarship@vedaschool.com" className="text-red-700 hover:underline">scholarship@vedaschool.com</a>
          </p>
          <p className="text-lg font-semibold text-orange-800 mt-2">
            📞 Call/WhatsApp: +91 98765 43210
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            className={`mt-8 ${BUTTON_COLOR_BRIGHT} text-red-800 px-8 py-3 rounded-full font-bold shadow-lg`}
          >
            Ask a Question
          </motion.button> */}
        </div>
      </section>

    </div>
  );
}