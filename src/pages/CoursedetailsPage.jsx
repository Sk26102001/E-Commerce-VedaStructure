// import React, { useState } from "react";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star } from "lucide-react";
// import Footer from "../components/Footer";

// // Accordion for Curriculum
// const AccordionItem = ({ title, content }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-orange-200">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-4 text-left font-medium text-orange-700"
//       >
//         {title}
//         {open ? <ChevronUp /> : <ChevronDown />}
//       </button>
//       {open && <div className="pb-4 text-gray-700">{content}</div>}
//     </div>
//   );
// };

// export default function CoursedetailsPage() {
//   return (
//     <div className="font-sans text-gray-800 bg-white">
//       {/* Navbar */}
//       {/* <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-100 to-orange-100 shadow-md">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//           <h1 className="text-2xl font-bold text-orange-700">🪔 Vedic Academy</h1>
//           <nav className="hidden md:flex gap-6 font-medium text-gray-700">
//             <a href="#home" className="hover:text-orange-600">Home</a>
//             <a href="#courses" className="hover:text-orange-600">All Courses</a>
//             <a href="#community" className="hover:text-orange-600">Community</a>
//             <a href="#blog" className="hover:text-orange-600">Blog</a>
//             <a href="#contact" className="hover:text-orange-600">Contact</a>
//           </nav>
//           <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-medium">
//             Enroll Now
//           </button>
//         </div>
//       </header> */}

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative overflow-hidden bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-100 py-24 px-6 text-center"
//       >
//         {/* Zodiac Wheel Background */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border-[12px] border-orange-300/40 animate-spin-slow"></div>
//         </div>

//         {/* Floating Planets */}
//         <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full shadow-lg animate-float"></div>
//         <div className="absolute bottom-20 right-20 w-20 h-20 bg-orange-300 rounded-full shadow-lg animate-float-delayed"></div>

//         <div className="relative max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-serif text-orange-800 mb-4 drop-shadow-md">
//            Unlock Your Destiny with Ancient Vedic Wisdom
//           </h2>
//           <p className="text-lg md:text-xl text-gray-700 mb-6">
//             Learn Vedic Astrology through Scriptures, Practical Guidance & Intuitive Tools.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-lg">
//               👉 Join the Course Now
//             </button>
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-orange-800 px-6 py-3 rounded-full font-medium shadow-lg flex items-center gap-2">
//               <Play size={18} /> Free Preview
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* What You Will Learn */}
//       <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8">
//             📘 What You Will Learn
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6 text-left">
//             {[
//               "Deep dive into planetary combinations, nakshatras, houses",
//               "Practical usage with real-life examples",
//               "Shlokas with meaning",
//               "Remedies, Upayas & case studies",
//             ].map((item, i) => (
//               <div key={i} className="flex gap-3 items-start">
//                 <CheckCircle2 className="text-orange-600 mt-1" />
//                 <p>{item}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Course Overview */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8">
//             🎓 Course Overview
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6 text-left">
//             <div className="p-6 bg-yellow-50 shadow rounded-xl">
//               <h3 className="font-semibold text-orange-700">Duration</h3>
//               <p>4 to 12 weeks</p>
//             </div>
//             <div className="p-6 bg-yellow-50 shadow rounded-xl">
//               <h3 className="font-semibold text-orange-700">Format</h3>
//               <p>Video lectures + PDFs + Live Doubt Sessions</p>
//             </div>
//             <div className="p-6 bg-yellow-50 shadow rounded-xl">
//               <h3 className="font-semibold text-orange-700">Assignments</h3>
//               <p>Quizzes, practice charts & final project</p>
//             </div>
//             <div className="p-6 bg-yellow-50 shadow rounded-xl">
//               <h3 className="font-semibold text-orange-700">Certificate</h3>
//               <p>Vedic Certified Practitioner (PDF + NFT badge)</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-16 px-6 bg-gradient-to-b from-orange-50 to-yellow-50">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8 text-center">
//             📚 Curriculum Snapshot
//           </h2>
//           <div className="bg-white shadow rounded-xl">
//             <AccordionItem title="Module 1: Introduction to Vedic Astrology" content="Basics of Jyotish, history, importance, and scope." />
//             <AccordionItem title="Module 2: Scriptural Base" content="Core shlokas, Rashis, Planets, and Houses with meaning." />
//             <AccordionItem title="Module 3: Practical Application" content="Case studies, kundali analysis, real examples." />
//             <AccordionItem title="Module 4: Spiritual Integration" content="Karma, remedies, meditation with astrology." />
//             <AccordionItem title="Module 5: Advanced Mastery" content="Yogas, Dashas, Nakshatras in depth." />
//             <AccordionItem title="Bonus: Live Ritual Guidance" content="Special live sessions on mahurats & pujas." />
//           </div>
//         </div>
//       </section>

//       {/* Who This Course is For */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8">
//             🙏 Who This Course is For
//           </h2>
//           <div className="space-y-4 text-left">
//             {[
//               "✅ Beginners seeking structured Vedic learning",
//               "✅ Intermediate practitioners wanting certification",
//               "✅ Seekers & healers integrating astrology/puja into life",
//             ].map((item, i) => (
//               <p key={i} className="text-lg">{item}</p>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Instructor */}
//       <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6">
//           <img
//             src="https://i.ibb.co/z7qvFJj/teacher.jpg"
//             alt="Instructor"
//             className="w-40 h-40 rounded-full border-4 border-orange-400 shadow-lg"
//           />
//           <div className="text-left">
//             <h3 className="text-2xl font-semibold text-orange-700">
//               🙏 Acharya Vishal Bhardwaj
//             </h3>
//             <p className="text-gray-700">
//               Lineage of traditional Jyotish, 15+ years experience, guiding seekers with clarity 
//               & spiritual depth. Featured in national & international forums.
//             </p>
//             <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full">
//               🎥 Watch Intro Video
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8">
//             🌟 Student Testimonials
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-6 bg-yellow-50 shadow rounded-xl">
//               <p>“This course changed how I understand karma and destiny.”</p>
//               <p className="mt-2 font-semibold">⭐⭐⭐⭐⭐ — Pooja, Mumbai</p>
//             </div>
//             <div className="p-6 bg-yellow-50 shadow rounded-xl">
//               <p>“Now I can read charts with confidence & help others.”</p>
//               <p className="mt-2 font-semibold">⭐⭐⭐⭐⭐ — Rajiv, Dubai</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bonus Features */}
//       <section className="py-16 px-6 bg-gradient-to-b from-orange-50 to-yellow-50">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8">
//             🎁 Bonus Features
//           </h2>
//           <ul className="space-y-3 text-lg text-left">
//             <li>🔮 Free Panchang PDF</li>
//             <li>📿 Mantra Audio Collection</li>
//             <li>🧘‍♂ Access to Spiritual Community WhatsApp/Forum</li>
//             <li>📅 Live Ritual Sessions on Mahurats</li>
//           </ul>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-16 px-6 bg-white">
//         <div className="max-w-lg mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-4">
//             💸 Course Pricing
//           </h2>
//           <p className="text-2xl font-bold text-orange-800 mb-2">₹2,999 / ₹5,999 / ₹9,999</p>
//           <p className="mb-6">Installment Option | Lifetime Access | Free E-books included</p>
//           <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
//             🔔 Enroll Now
//           </button>
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8 text-center">
//             ❓ FAQs
//           </h2>
//           <div className="space-y-4 text-gray-700">
//             <p><strong>Do I need Sanskrit knowledge?</strong> – No, everything will be explained clearly in simple language.</p>
//             <p><strong>Will I get certified?</strong> – Yes, you will receive a certificate upon completion.</p>
//             <p><strong>How much time do I need weekly?</strong> – 3–5 hours recommended.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-16 px-6 bg-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-orange-700 mb-8">
//             📩 Contact / Help
//           </h2>
//           <p>💌 Email: support@vedicacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full">
//             🧭 Book Free Consultation
//           </button>
//         </div>
//       </section>


//       <Footer/>

//       {/* Custom Animations */}
//       <style jsx>{`
//         .animate-spin-slow {
//           animation: spin 40s linear infinite;
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 7s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//       `}</style>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star } from "lucide-react";
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama"
// import { Link } from "react-router-dom";

// // Accordion for Curriculum
// const AccordionItem = ({ title, content }) => {
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
//       {open && <div className="pb-4 px-6 text-gray-700">{content}</div>}
//     </div>
//   );
// };

// export default function CoursedetailsPage() {
//   const lectureVideos = [
//     {
//       title: "Introduction to Vedic Astrology",
//       thumbnail: "https://img.youtube.com/vi/G3JZGR1p6w8/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
//     },
//     {
//       title: "Understanding Houses & Planets",
//       thumbnail: "https://img.youtube.com/vi/ycPt9k8x8zA/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
//     },
//     {
//       title: "Remedies and Upayas",
//       thumbnail: "https://img.youtube.com/vi/8FJbb2Pbqsk/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
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
//             Unlock Your Destiny with <br />
//             <span className="text-orange-600">Ancient Vedic Wisdom</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Learn Vedic Astrology through Scriptures, Practical Guidance & Spiritual Integration.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-yellow-400 hover:bg-yellow-500 text-orange-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
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
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Course Lecture Videos</h2>
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
    

//       {/* What You Will Learn */}
//        <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">📘 What You’ll Learn</h2>
//           <div className="grid md:grid-cols-2 gap-6 text-left">
//             {[
//               "Deep dive into planetary combinations, nakshatras, houses",
//               "Practical usage with real-life examples",
//               "Understanding Shlokas & their meanings",
//               "Remedies, Upayas & spiritual integration",
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.02 }}
//                 className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm"
//               >
//                 <CheckCircle2 className="text-orange-600 mt-1" />
//                 <p>{item}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section> 





//       {/* What You’ll Learn */}
// <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="max-w-6xl mx-auto text-center"
//   >
//     <h2 className="text-4xl font-serif text-orange-700 mb-14">
//       📘 What You’ll Learn
//     </h2>

//     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         {
//           title: "Understand the Planets & Houses",
//           desc: "Learn how planets and houses shape destiny and daily life.",
//           icon: "🪐",
//         },
//         {
//           title: "Decode Birth Charts",
//           desc: "Master the art of reading Kundalis through real examples.",
//           icon: "📜",
//         },
//         {
//           title: "Remedies & Upayas",
//           desc: "Explore authentic Vedic solutions for life’s challenges.",
//           icon: "🕉️",
//         },
//         {
//           title: "Nakshatras & Yogas",
//           desc: "Uncover the secret meanings behind Nakshatras and Yogas.",
//           icon: "✨",
//         },
//         {
//           title: "Spiritual Integration",
//           desc: "Combine astrology with meditation and self-growth practices.",
//           icon: "🧘‍♂️",
//         },
//         {
//           title: "Real-Life Case Studies",
//           desc: "Analyze real charts and understand practical applications.",
//           icon: "📖",
//         },
//       ].map((item, i) => (
//         <motion.div
//           key={i}
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 200, damping: 15 }}
//           className="group bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200 hover:from-orange-100 hover:to-yellow-50 rounded-2xl shadow-lg p-8 text-left border border-orange-100 hover:shadow-xl transition-all duration-300"
//         >
//           <div className="text-5xl mb-4">{item.icon}</div>
//           <h3 className="text-xl font-semibold text-orange-800 mb-2 group-hover:text-orange-700">
//             {item.title}
//           </h3>
//           <p className="text-gray-700 leading-relaxed">{item.desc}</p>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// </section>


//       {/* Curriculum */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-serif text-orange-700 mb-8 text-center">
//             📚 Curriculum Snapshot
//           </h2>
//           <AccordionItem title="Module 1: Introduction to Vedic Astrology" content="Basics of Jyotish, history, importance, and scope." />
//           <AccordionItem title="Module 2: Scriptural Base" content="Core shlokas, Rashis, Planets, and Houses with meaning." />
//           <AccordionItem title="Module 3: Practical Application" content="Case studies, kundali analysis, real examples." />
//           <AccordionItem title="Module 4: Remedies and Upayas" content="Learn astrological solutions and daily practices." />
//           <AccordionItem title="Module 5: Advanced Mastery" content="Yogas, Dashas, and Nakshatras in depth." />
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-lg mx-auto text-center p-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-orange-200">
//           <h2 className="text-4xl font-serif text-orange-700 mb-3">💸 Course Pricing</h2>
//           <p className="text-3xl font-bold text-orange-800 mb-2">₹2,999 / ₹5,999 / ₹9,999</p>
//           <p className="text-gray-700 mb-6">Installments • Lifetime Access • Free PDFs</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🔔 Enroll Now
//           </motion.button>
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
//               { name: "Pooja, Mumbai", text: "This course changed how I understand karma and destiny." },
//               { name: "Rajiv, Dubai", text: "Now I can read charts confidently and help others too." },
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
//           <p>💌 Email: support@vedicacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
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
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock } from "lucide-react";
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama"
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-orange-600';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-orange-700';
// const BORDER_COLOR = 'border-orange-200';

// // NEW: Detailed 3-Month Curriculum from User Request
// const fullCourseCurriculum = [
//   {
//     monthTitle: "🪔 Month 1: Foundations of Vedic Astrology",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Jyotish",
//         details: [
//           "What is Vedic Astrology? Its spiritual and scientific roots.",
//           "Branches of Jyotish (Hora, Samhita, Siddhanta).",
//           "Karma theory and role of planets.",
//           "Structure of a Kundali (birth chart).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The 9 Grahas (Navagraha)",
//         details: [
//           "Surya to Ketu: Nature, symbolism, mythology.",
//           "Functional benefic/malefic classification.",
//           "Planetary aspects (Drishti) basics.",
//           "Shlokas & mantras related to planets.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: The 12 Rashis (Zodiac Signs)",
//         details: [
//           "Character traits of each Rashi.",
//           "Rashi elements (fire, water, air, earth).",
//           "Gender, modality (moveable/fixed/dual).",
//           "Connection with psychology and behavior.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The 12 Bhavas (Houses)",
//         details: [
//           "Meaning and significance of each house.",
//           "Karaka planets for each house.",
//           "Lagna (Ascendant) and its importance.",
//           "Case examples of Bhava influence.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🧭 Month 2: Deeper Chart Understanding",
//     icon: <Clock className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Nakshatras and their Secrets",
//         details: [
//           "27 Nakshatras: Traits, lords, categories.",
//           "Pada divisions and application.",
//           "Birth Nakshatra influence (Janma Nakshatra).",
//           "Mythological stories of Nakshatras.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Planetary Dignities & States",
//         details: [
//           "Exaltation, Debilitation, Own sign, Mooltrikona.",
//           "Combust, retrograde, aspects explained.",
//           "Natural vs functional benefics/malefics.",
//           "Yogas (basic level): Gajakesari, Budhaditya, Raj Yoga.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Panchang Basics in Astrology",
//         details: [
//           "Tithi, Vara (weekday), Nakshatra, Yoga, Karana.",
//           "How Panchang affects birth and muhurta.",
//           "Auspiciousness (Shubh-Ashubh).",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Divisional Charts (Introduction)",
//         details: [
//           "Navamsa (D9): Marriage and Dharma.",
//           "Drekkana (D3), Chaturthamsa (D4), etc.",
//           "Concept of Dasha-Varga.",
//           "Strength of planets across charts.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔮 Month 3: Practical Chart Reading",
//     icon: <Star className="w-5 h-5 mr-3" />, // Reusing Star for visualization
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Lagna Kundali Reading (Step-by-Step)",
//         details: [
//           "How to approach a chart.",
//           "Lagna, Moon Lagna, Sun Lagna significance.",
//           "Understanding planetary positions.",
//           "Identifying strengths & weaknesses.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Mahadasha and Antardasha (Vimshottari Dasha)",
//         details: [
//           "What is a Dasha system?",
//           "How time periods affect life.",
//           "Starting point: Moon Nakshatra.",
//           "Case studies on Dasha periods.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Transits (Gochar) Basics",
//         details: [
//           "Importance of planetary movement.",
//           "Saturn (Shani), Jupiter (Guru) transits.",
//           "Rahu-Ketu transits and their impact.",
//           "Daily planetary transit observation practice.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Remedies, Ethics & Final Project",
//         details: [
//           "Types of Upay (Mantra, Gem, Puja, Daana).",
//           "Do’s and Don’ts of a Jyotish practitioner.",
//           "Small remedy suggestions for common afflictions.",
//           "Final assessment: Reading a sample Kundali.",
//         ],
//       },
//     ],
//   },
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
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
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


// // Renamed existing Accordion for Curriculum Snapshot to avoid conflict
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
//       {open && <div className="pb-4 px-6 text-gray-700">{content}</div>}
//     </div>
//   );
// };

// export default function CoursedetailsPage() {
//   const lectureVideos = [
//     {
//       title: "Introduction to Vedic Astrology",
//       thumbnail: "https://img.youtube.com/vi/G3JZGR1p6w8/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
//     },
//     {
//       title: "Understanding Houses & Planets",
//       thumbnail: "https://img.youtube.com/vi/ycPt9k8x8zA/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
//     },
//     {
//       title: "Remedies and Upayas",
//       thumbnail: "https://img.youtube.com/vi/8FJbb2Pbqsk/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
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
//             Unlock Your Destiny with <br />
//             <span className="text-orange-600">Ancient Vedic Wisdom</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Learn Vedic Astrology through Scriptures, Practical Guidance & Spiritual Integration.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-yellow-400 hover:bg-yellow-500 text-orange-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
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
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Course Lecture Videos</h2>
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
//               className={`px-8 py-3 text-lg font-medium text-white rounded-full shadow-xl transition-transform transform ${PRIMARY_COLOR} ${HOVER_COLOR} active:scale-95`}
//             >
//               Download Full Curriculum PDF
//             </motion.button>
//           </div>
//         </motion.div>
//       </section>


//       {/* Curriculum Snapshot (Kept for visual break, but content is now redundant) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-serif text-orange-700 mb-8 text-center">
//             ✨ Key Topics At a Glance
//           </h2>
//           {/* Note: This section uses the simplified CurriculumAccordionItem component */}
//           <CurriculumAccordionItem title="Month 1: Foundations (Grahas, Rashis, Bhavas)" content="A comprehensive start covering the 9 planets, 12 zodiac signs, and 12 houses as the core of any birth chart analysis." />
//           <CurriculumAccordionItem title="Month 2: Deeper Techniques (Nakshatras & Varga)" content="Advanced concepts like the 27 Nakshatras, planetary dignities, Panchang, and an introduction to Divisional Charts (Varga)." />
//           <CurriculumAccordionItem title="Month 3: Practical Mastery (Dasha, Gochar, Remedies)" content="Focus on event timing using Vimshottari Dasha, the impact of transits (Gochar), ethical practice, and authentic Vedic remedies (Upay)." />
//           <CurriculumAccordionItem title="Lifetime Access & Community" content="Gain access to recorded lectures, exclusive Q&A sessions, and a private student community forum for continuous learning and support." />
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-lg mx-auto text-center p-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-orange-200">
//           <h2 className="text-4xl font-serif text-orange-700 mb-3">💸 Course Pricing</h2>
//           <p className="text-3xl font-bold text-orange-800 mb-2">₹2,999 / ₹5,999 / ₹9,999</p>
//           <p className="text-gray-700 mb-6">Installments • Lifetime Access • Free PDFs</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🔔 Enroll Now
//           </motion.button>
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
//               { name: "Pooja, Mumbai", text: "This course changed how I understand karma and destiny." },
//               { name: "Rajiv, Dubai", text: "Now I can read charts confidently and help others too." },
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
//           <p>💌 Email: support@vedicacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
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
      
//       {/* Ensure Footer is rendered if it's imported */}
//       {/* <Footer /> */} 
//     </div>
//   );
// }











// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock } from "lucide-react";
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama"
// import { Link } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-orange-600';
// const BORDER_COLOR = 'border-orange-200';

// // Detailed 3-Month Curriculum
// const fullCourseCurriculum = [
//   {
//     monthTitle: "🪔 Month 1: Foundations of Vedic Astrology",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Jyotish",
//         details: [
//           "What is Vedic Astrology? Its spiritual and scientific roots.",
//           "Branches of Jyotish (Hora, Samhita, Siddhanta).",
//           "Karma theory and role of planets.",
//           "Structure of a Kundali (birth chart).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The 9 Grahas (Navagraha)",
//         details: [
//           "Surya to Ketu: Nature, symbolism, mythology.",
//           "Functional benefic/malefic classification.",
//           "Planetary aspects (Drishti) basics.",
//           "Shlokas & mantras related to planets.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: The 12 Rashis (Zodiac Signs)",
//         details: [
//           "Character traits of each Rashi.",
//           "Rashi elements (fire, water, air, earth).",
//           "Gender, modality (moveable/fixed/dual).",
//           "Connection with psychology and behavior.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The 12 Bhavas (Houses)",
//         details: [
//           "Meaning and significance of each house.",
//           "Karaka planets for each house.",
//           "Lagna (Ascendant) and its importance.",
//           "Case examples of Bhava influence.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🧭 Month 2: Deeper Chart Understanding",
//     icon: <Clock className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Nakshatras and their Secrets",
//         details: [
//           "27 Nakshatras: Traits, lords, categories.",
//           "Pada divisions and application.",
//           "Birth Nakshatra influence (Janma Nakshatra).",
//           "Mythological stories of Nakshatras.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Planetary Dignities & States",
//         details: [
//           "Exaltation, Debilitation, Own sign, Mooltrikona.",
//           "Combust, retrograde, aspects explained.",
//           "Natural vs functional benefics/malefics.",
//           "Yogas (basic level): Gajakesari, Budhaditya, Raj Yoga.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Panchang Basics in Astrology",
//         details: [
//           "Tithi, Vara (weekday), Nakshatra, Yoga, Karana.",
//           "How Panchang affects birth and muhurta.",
//           "Auspiciousness (Shubh-Ashubh).",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Divisional Charts (Introduction)",
//         details: [
//           "Navamsa (D9): Marriage and Dharma.",
//           "Drekkana (D3), Chaturthamsa (D4), etc.",
//           "Concept of Dasha-Varga.",
//           "Strength of planets across charts.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔮 Month 3: Practical Chart Reading",
//     icon: <Star className="w-5 h-5 mr-3" />, // Reusing Star for visualization
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Lagna Kundali Reading (Step-by-Step)",
//         details: [
//           "How to approach a chart.",
//           "Lagna, Moon Lagna, Sun Lagna significance.",
//           "Understanding planetary positions.",
//           "Identifying strengths & weaknesses.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Mahadasha and Antardasha (Vimshottari Dasha)",
//         details: [
//           "What is a Dasha system?",
//           "How time periods affect life.",
//           "Starting point: Moon Nakshatra.",
//           "Case studies on Dasha periods.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Transits (Gochar) Basics",
//         details: [
//           "Importance of planetary movement.",
//           "Saturn (Shani), Jupiter (Guru) transits.",
//           "Rahu-Ketu transits and their impact.",
//           "Daily planetary transit observation practice.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Remedies, Ethics & Final Project",
//         details: [
//           "Types of Upay (Mantra, Gem, Puja, Daana).",
//           "Do’s and Don’ts of a Jyotish practitioner.",
//           "Small remedy suggestions for common afflictions.",
//           "Final assessment: Reading a sample Kundali.",
//         ],
//       },
//     ],
//   },
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

// export default function CoursedetailsPage() {
//   const lectureVideos = [
//     {
//       title: "Introduction to Vedic Astrology",
//       thumbnail: "https://img.youtube.com/vi/G3JZGR1p6w8/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
//     },
//     {
//       title: "Understanding Houses & Planets",
//       thumbnail: "https://img.youtube.com/vi/ycPt9k8x8zA/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
//     },
//     {
//       title: "Remedies and Upayas",
//       thumbnail: "https://img.youtube.com/vi/8FJbb2Pbqsk/hqdefault.jpg",
//       link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
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
//             Unlock Your Destiny with <br />
//             <span className="text-orange-600">Ancient Vedic Wisdom</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Learn Vedic Astrology through Scriptures, Practical Guidance & Spiritual Integration.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-yellow-400 hover:bg-yellow-500 text-orange-800 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
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
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Course Lecture Videos</h2>
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


//       {/* Curriculum Snapshot (Kept for visual break, but content is now redundant) */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-serif text-orange-700 mb-8 text-center">
//             ✨ Key Topics At a Glance
//           </h2>
//           {/* Note: This section now uses the refactored CurriculumAccordionItem component with smooth animation */}
//           <CurriculumAccordionItem title="Month 1: Foundations (Grahas, Rashis, Bhavas)" content="A comprehensive start covering the 9 planets, 12 zodiac signs, and 12 houses as the core of any birth chart analysis." />
//           <CurriculumAccordionItem title="Month 2: Deeper Techniques (Nakshatras & Varga)" content="Advanced concepts like the 27 Nakshatras, planetary dignities, Panchang, and an introduction to Divisional Charts (Varga)." />
//           <CurriculumAccordionItem title="Month 3: Practical Mastery (Dasha, Gochar, Remedies)" content="Focus on event timing using Vimshottari Dasha, the impact of transits (Gochar), ethical practice, and authentic Vedic remedies (Upay)." />
//           <CurriculumAccordionItem title="Lifetime Access & Community" content="Gain access to recorded lectures, exclusive Q&A sessions, and a private student community forum for continuous learning and support." />
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-lg mx-auto text-center p-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-orange-200">
//           <h2 className="text-4xl font-serif text-orange-700 mb-3">💸 Course Pricing</h2>
//           <p className="text-3xl font-bold text-orange-800 mb-2">₹2,999 / ₹5,999 / ₹9,999</p>
//           <p className="text-gray-700 mb-6">Installments • Lifetime Access • Free PDFs</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//           >
//             🔔 Enroll Now
//           </motion.button>
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
//               { name: "Pooja, Mumbai", text: "This course changed how I understand karma and destiny." },
//               { name: "Rajiv, Dubai", text: "Now I can read charts confidently and help others too." },
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
//           <p>💌 Email: support@vedicacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
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
      
//       {/* Ensure Footer is rendered if it's imported */}
//       {/* <Footer /> */} 
//     </div>
//   );
// }









// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, CheckCircle2, ChevronDown, ChevronUp, Star, BookOpen, Clock, Gift } from "lucide-react";
// import Footer from "../components/Footer";
// import LifePanorama from "./LifePanorama"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // --- Configuration for Collapsible Course Modules ---
// const PRIMARY_COLOR = 'bg-yellow-400';
// const ACCENT_COLOR = 'text-orange-600';
// const HOVER_COLOR = 'hover:bg-gradient-to-r from-yellow-400 to-orange-500';
// const BORDER_COLOR = 'border-orange-300';

// // Detailed 3-Month Curriculum
// const fullCourseCurriculum = [
//   {
//     monthTitle: "🪔 Month 1: Foundations of Vedic Astrology",
//     icon: <BookOpen className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 1,
//         title: "Week 1: Introduction to Jyotish",
//         details: [
//           "What is Vedic Astrology? Its spiritual and scientific roots.",
//           "Branches of Jyotish (Hora, Samhita, Siddhanta).",
//           "Karma theory and role of planets.",
//           "Structure of a Kundali (birth chart).",
//         ],
//       },
//       {
//         id: 2,
//         title: "Week 2: The 9 Grahas (Navagraha)",
//         details: [
//           "Surya to Ketu: Nature, symbolism, mythology.",
//           "Functional benefic/malefic classification.",
//           "Planetary aspects (Drishti) basics.",
//           "Shlokas & mantras related to planets.",
//         ],
//       },
//       {
//         id: 3,
//         title: "Week 3: The 12 Rashis (Zodiac Signs)",
//         details: [
//           "Character traits of each Rashi.",
//           "Rashi elements (fire, water, air, earth).",
//           "Gender, modality (moveable/fixed/dual).",
//           "Connection with psychology and behavior.",
//         ],
//       },
//       {
//         id: 4,
//         title: "Week 4: The 12 Bhavas (Houses)",
//         details: [
//           "Meaning and significance of each house.",
//           "Karaka planets for each house.",
//           "Lagna (Ascendant) and its importance.",
//           "Case examples of Bhava influence.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🧭 Month 2: Deeper Chart Understanding",
//     icon: <Clock className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 5,
//         title: "Week 5: Nakshatras and their Secrets",
//         details: [
//           "27 Nakshatras: Traits, lords, categories.",
//           "Pada divisions and application.",
//           "Birth Nakshatra influence (Janma Nakshatra).",
//           "Mythological stories of Nakshatras.",
//         ],
//       },
//       {
//         id: 6,
//         title: "Week 6: Planetary Dignities & States",
//         details: [
//           "Exaltation, Debilitation, Own sign, Mooltrikona.",
//           "Combust, retrograde, aspects explained.",
//           "Natural vs functional benefics/malefics.",
//           "Yogas (basic level): Gajakesari, Budhaditya, Raj Yoga.",
//         ],
//       },
//       {
//         id: 7,
//         title: "Week 7: Panchang Basics in Astrology",
//         details: [
//           "Tithi, Vara (weekday), Nakshatra, Yoga, Karana.",
//           "How Panchang affects birth and muhurta.",
//           "Auspiciousness (Shubh-Ashubh).",
//         ],
//       },
//       {
//         id: 8,
//         title: "Week 8: Divisional Charts (Introduction)",
//         details: [
//           "Navamsa (D9): Marriage and Dharma.",
//           "Drekkana (D3), Chaturthamsa (D4), etc.",
//           "Concept of Dasha-Varga.",
//           "Strength of planets across charts.",
//         ],
//       },
//     ],
//   },
//   {
//     monthTitle: "🔮 Month 3: Practical Chart Reading",
//     icon: <Star className="w-5 h-5 mr-3" />,
//     duration: "4 Weeks",
//     modules: [
//       {
//         id: 9,
//         title: "Week 9: Lagna Kundali Reading (Step-by-Step)",
//         details: [
//           "How to approach a chart.",
//           "Lagna, Moon Lagna, Sun Lagna significance.",
//           "Understanding planetary positions.",
//           "Identifying strengths & weaknesses.",
//         ],
//       },
//       {
//         id: 10,
//         title: "Week 10: Mahadasha and Antardasha (Vimshottari Dasha)",
//         details: [
//           "What is a Dasha system?",
//           "How time periods affect life.",
//           "Starting point: Moon Nakshatra.",
//           "Case studies on Dasha periods.",
//         ],
//       },
//       {
//         id: 11,
//         title: "Week 11: Transits (Gochar) Basics",
//         details: [
//           "Importance of planetary movement.",
//           "Saturn (Shani), Jupiter (Guru) transits.",
//           "Rahu-Ketu transits and their impact.",
//           "Daily planetary transit observation practice.",
//         ],
//       },
//       {
//         id: 12,
//         title: "Week 12: Remedies, Ethics & Final Project",
//         details: [
//           "Types of Upay (Mantra, Gem, Puja, Daana).",
//           "Do’s and Don’ts of a Jyotish practitioner.",
//           "Small remedy suggestions for common afflictions.",
//           "Final assessment: Reading a sample Kundali.",
//         ],
//       },
//     ],
//   },
// ];

// const bonusItems = [
//     "Planetary Mantra Audio Set",
//     "Daily Panchang Guide eBook",
//     "Lifetime WhatsApp Q&A Group Access",
// ];

// const pricingPlans = [
//     {
//         name: "Foundation Tier",
//         price: "₹2,999",
//         features: ["Month 1 Modules", "Recorded Lectures", "Basic Q&A Forum Access"],
//         isPopular: false,
//     },
//     {
//         name: "Jyotish Master",
//         price: "₹5,999",
//         features: ["All 3 Months Curriculum", "Lifetime Course Access", "Free Bonuses", "2 Live Chart Readings"],
//         isPopular: true,
//     },
//     {
//         name: "Vipra Guide",
//         price: "₹9,999",
//         features: ["All Jyotish Master Features", "1:1 Mentorship Sessions (4)", "Advanced Remedial Techniques", "Priority Support"],
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
//                 ✨ POPULAR
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

//         <Link to="/enrollnows" className="mt-auto ">
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


// export default function CoursedetailsPage() {
//    const navigate = useNavigate();
//   const lectureVideos = [
//     {
//       title: "Introduction to Vedic Astrology",
//       thumbnail: "https://www.cosmicinsightsshop.com/cdn/shop/products/11_2cf1e575-6de4-411c-9f40-9dbe70f8542b_1024x1024.jpg?v=1604389052",
    
//       link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
//     },
//     {
//       title: "Understanding Houses & Planets",
//       thumbnail: "https://static.wixstatic.com/media/2ee1b0_f2f85c50831b4875b0310ddd7042650f~mv2.jpg/v1/fit/w_448,h_412,lg_1,q_80,usm_0.66_1.00_0.01,enc_auto/2ee1b0_f2f85c50831b4875b0310ddd7042650f~mv2.jpg",
//       link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
//     },
//     {
//       title: "Remedies and Upayas",
//       thumbnail: "https://storage.googleapis.com/astrolok/store/1/oldblog/2021/11/aatam-gandhi-12-nov.jpg",
//       link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
//     },
//   ];

//   const handleEnrollClick = () => {
//   // You can replace these with real course data later
//   const courseTitle = encodeURIComponent("Vedic Astrology Mastery Course");
//   const coursePrice = 5999;
 
//   // Navigate to enrollnow page and scroll to enrollment section
//   navigate(`/enrollnows?title=${courseTitle}&price=${coursePrice}#enrollment-section`);
// };
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
//             Unlock Your Destiny with <br />
//             <span className="text-orange-600">Ancient Vedic Wisdom</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 mt-4">
//             Learn Vedic Astrology through Scriptures, Practical Guidance & Spiritual Integration.
//           </p>
//           <div className="flex gap-4 justify-center mt-8">
//             {/* <Link to="/enrollnow">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
//             >
//               👉 Enroll Now
//             </motion.div>
//             </Link> */}

//             <motion.button
//   onClick={handleEnrollClick}
//   whileHover={{ scale: 1.05 }}
//   className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
// >
//   👉 Enroll Now
// </motion.button>


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
//           <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Course Lecture Videos</h2>
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
//                 🧘 <span className="font-bold">Bonus Section</span> – Limited Time!
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
//                 *Enroll in the 'Jyotish Master' tier or above to claim these bonuses instantly!
//             </p>
//         </div>
//       </section>


//       {/* Pricing (Revamped Multi-Card Layout) */}
//       <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
//         <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
//                 ✨ Choose Your <span className={ACCENT_COLOR}>Astrology Path</span>
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
//               { name: "Pooja, Mumbai", text: "This course changed how I understand karma and destiny." },
//               { name: "Rajiv, Dubai", text: "Now I can read charts confidently and help others too." },
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
//           <p>💌 Email: support@vedicacademy.com</p>
//           <p>📱 WhatsApp: +91 9876543210</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
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
      
//       {/* Ensure Footer is rendered if it's imported */}
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
  ChevronUp,
  Star,
  BookOpen,
  Clock,
  Gift,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// --- Configuration ---
const PRIMARY_COLOR = "bg-yellow-400";
const ACCENT_COLOR = "text-orange-600";
const HOVER_COLOR = "hover:bg-gradient-to-r from-yellow-400 to-orange-500";


// Detailed 3-Month Curriculum
const fullCourseCurriculum = [
  {
    monthTitle: "🪔 Month 1: Foundations of Vedic Astrology",
    icon: <BookOpen className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 1,
        title: "Week 1: Introduction to Jyotish",
        details: [
          "What is Vedic Astrology? Its spiritual and scientific roots.",
          "Branches of Jyotish (Hora, Samhita, Siddhanta).",
          "Karma theory and role of planets.",
          "Structure of a Kundali (birth chart).",
        ],
      },
      {
        id: 2,
        title: "Week 2: The 9 Grahas (Navagraha)",
        details: [
          "Surya to Ketu: Nature, symbolism, mythology.",
          "Functional benefic/malefic classification.",
          "Planetary aspects (Drishti) basics.",
          "Shlokas & mantras related to planets.",
        ],
      },
      {
        id: 3,
        title: "Week 3: The 12 Rashis (Zodiac Signs)",
        details: [
          "Character traits of each Rashi.",
          "Rashi elements (fire, water, air, earth).",
          "Gender, modality (moveable/fixed/dual).",
          "Connection with psychology and behavior.",
        ],
      },
      {
        id: 4,
        title: "Week 4: The 12 Bhavas (Houses)",
        details: [
          "Meaning and significance of each house.",
          "Karaka planets for each house.",
          "Lagna (Ascendant) and its importance.",
          "Case examples of Bhava influence.",
        ],
      },
    ],
  },
  {
    monthTitle: "🧭 Month 2: Deeper Chart Understanding",
    icon: <Clock className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 5,
        title: "Week 5: Nakshatras and their Secrets",
        details: [
          "27 Nakshatras: Traits, lords, categories.",
          "Pada divisions and application.",
          "Birth Nakshatra influence (Janma Nakshatra).",
          "Mythological stories of Nakshatras.",
        ],
      },
      {
        id: 6,
        title: "Week 6: Planetary Dignities & States",
        details: [
          "Exaltation, Debilitation, Own sign, Mooltrikona.",
          "Combust, retrograde, aspects explained.",
          "Natural vs functional benefics/malefics.",
          "Yogas (basic level): Gajakesari, Budhaditya, Raj Yoga.",
        ],
      },
      {
        id: 7,
        title: "Week 7: Panchang Basics in Astrology",
        details: [
          "Tithi, Vara (weekday), Nakshatra, Yoga, Karana.",
          "How Panchang affects birth and muhurta.",
          "Auspiciousness (Shubh-Ashubh).",
        ],
      },
      {
        id: 8,
        title: "Week 8: Divisional Charts (Introduction)",
        details: [
          "Navamsa (D9): Marriage and Dharma.",
          "Drekkana (D3), Chaturthamsa (D4), etc.",
          "Concept of Dasha-Varga.",
          "Strength of planets across charts.",
        ],
      },
    ],
  },
  {
    monthTitle: "🔮 Month 3: Practical Chart Reading",
    icon: <Star className="w-5 h-5 mr-3" />,
    duration: "4 Weeks",
    modules: [
      {
        id: 9,
        title: "Week 9: Lagna Kundali Reading (Step-by-Step)",
        details: [
          "How to approach a chart.",
          "Lagna, Moon Lagna, Sun Lagna significance.",
          "Understanding planetary positions.",
          "Identifying strengths & weaknesses.",
        ],
      },
      {
        id: 10,
        title: "Week 10: Mahadasha and Antardasha (Vimshottari Dasha)",
        details: [
          "What is a Dasha system?",
          "How time periods affect life.",
          "Starting point: Moon Nakshatra.",
          "Case studies on Dasha periods.",
        ],
      },
      {
        id: 11,
        title: "Week 11: Transits (Gochar) Basics",
        details: [
          "Importance of planetary movement.",
          "Saturn (Shani), Jupiter (Guru) transits.",
          "Rahu-Ketu transits and their impact.",
          "Daily planetary transit observation practice.",
        ],
      },
      {
        id: 12,
        title: "Week 12: Remedies, Ethics & Final Project",
        details: [
          "Types of Upay (Mantra, Gem, Puja, Daana).",
          "Do’s and Don’ts of a Jyotish practitioner.",
          "Small remedy suggestions for common afflictions.",
          "Final assessment: Reading a sample Kundali.",
        ],
      },
    ],
  },
];

const bonusItems = [
    "Planetary Mantra Audio Set",
    "Daily Panchang Guide eBook",
    "Lifetime WhatsApp Q&A Group Access",
];

// --- Pricing Plans ---
// NOTE: I added a 'key' property to map to the plan names in EnrollNows.js
const pricingPlans = [
  {
    id: 1,
    key: "starter", // Mapped to the 'basic' key in EnrollNows  Foundation Tier
    name: "Basic Plan",
    price: 5999, // Matching the 'basic' price in EnrollNows
    features: [
      "Month 1 Modules",
      "Recorded Lectures",
      "Basic Q&A Forum Access",
    ],
    isPopular: false,
  },
  {
    id: 2,
    key: "master", // Mapped to the 'pro' key in EnrollNows
    name: "Master Plan",
    price: 8999, // Matching the 'pro' price in EnrollNows
    features: [
      "All 3 Months Curriculum",
      "Lifetime Course Access",
      "Free Bonuses",
      "2 Live Chart Readings",
    ],
    isPopular: true,
  },
  {
    id: 3,
    key: "mentor", // Mapped to the 'premium' key in EnrollNows
    name: "Expert Plan",
    price: 12999, // Matching the 'premium' price in EnrollNows
    features: [
      "All Jyotish Master Features",
      "1:1 Mentorship Sessions (4)",
      "Advanced Remedial Techniques",
      "Priority Support",
    ],
    isPopular: false,
  },
];

// --- Bonus Items ---
// const bonusItems = [
//   "Planetary Mantra Audio Set",
//   "Daily Panchang Guide eBook",
//   "Lifetime WhatsApp Q&A Group Access",
// ];

// --- Accordion for Modules (Unchanged) ---
const CourseAccordionItem = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl overflow-hidden shadow-lg border border-orange-100">
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
            className="overflow-hidden bg-white p-4 border-l-4 border-b-4 border-r-4 border-orange-200 rounded-b-xl"
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


// Refactored Curriculum Snapshot Accordion for smooth animation
const CurriculumAccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-orange-200 bg-white/60 backdrop-blur-md rounded-lg my-2 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 px-4 text-left font-medium text-orange-700 hover:text-orange-800"
      >
        {title}
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {/* Added AnimatePresence and motion.div for smooth collapse/expand */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="curriculum-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            // Using the same smooth spring transition
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden"
          >
            <div className="pb-4 px-6 text-gray-700">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



// --- Pricing Card Component (Unchanged) ---
const PricingCard = ({ plan, onEnroll }) => (
  <motion.div
    whileHover={{ scale: plan.isPopular ? 1.05 : 1.03 }}
    className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
      plan.isPopular
        ? "bg-orange-500 text-white border-4 border-yellow-300"
        : "bg-white text-gray-800 border-2 border-orange-100"
    } flex flex-col h-full`}
  >
    {plan.isPopular && (
      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-1/4 bg-yellow-400 text-orange-800 text-xs font-bold px-4 py-1 rounded-full shadow-lg rotate-6">
        ✨ POPULAR
      </div>
    )}

    <h3
      className={`text-3xl font-bold mb-4 ${
        plan.isPopular ? "text-white" : "text-orange-700"
      }`}
    >
      {plan.name}
    </h3>
    <p
      className={`text-5xl font-extrabold mb-6 ${
        plan.isPopular ? "text-yellow-300" : "text-orange-800"
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

export default function CourseDetailsPage() {
  const navigate = useNavigate();
 const lectureVideos = [
    {
      title: "Introduction to Vedic Astrology",
      thumbnail: "https://www.cosmicinsightsshop.com/cdn/shop/products/11_2cf1e575-6de4-411c-9f40-9dbe70f8542b_1024x1024.jpg?v=1604389052",
    
      link: "https://www.youtube.com/watch?v=G3JZGR1p6w8",
    },
    {
      title: "Understanding Houses & Planets",
      thumbnail: "https://static.wixstatic.com/media/2ee1b0_f2f85c50831b4875b0310ddd7042650f~mv2.jpg/v1/fit/w_448,h_412,lg_1,q_80,usm_0.66_1.00_0.01,enc_auto/2ee1b0_f2f85c50831b4875b0310ddd7042650f~mv2.jpg",
      link: "https://www.youtube.com/watch?v=ycPt9k8x8zA",
    },
    {
      title: "Remedies and Upayas",
      thumbnail: "https://storage.googleapis.com/astrolok/store/1/oldblog/2021/11/aatam-gandhi-12-nov.jpg",
      link: "https://www.youtube.com/watch?v=8FJbb2Pbqsk",
    },
  ];

  const handleEnrollClick = (plan) => {
    const courseTitle = "Vedic Astrology Mastery Course";
    // NOTE: This now correctly sends the 'key' (basic, pro, premium)
    // which is used to initialize the state in EnrollNows.js
    navigate(`/enrollnows?title=${encodeURIComponent(courseTitle)}&plan=${plan.key}#enrollment-section`);
  };
  
  // NOTE: The default enroll button should link to a default plan (e.g., 'pro')
  const defaultPlanKey = pricingPlans.find(p => p.isPopular)?.key || pricingPlans[0].key;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-100">
        <h1 className="text-5xl md:text-6xl font-serif text-orange-800 drop-shadow-md leading-snug">
          Unlock Your Destiny with <br />
          <span className="text-orange-600">Ancient Vedic Wisdom</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Learn Vedic Astrology through Scriptures, Practical Guidance & Spiritual Integration.
        </p>

        <motion.button
          onClick={() =>
            navigate(
              `/enrollnows?title=${encodeURIComponent(
                "Vedic Astrology Mastery Course"
              )}&plan=${defaultPlanKey}#enrollment-section`
            )
          }
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          👉 Enroll Now
        </motion.button>
      </section>

 {/* Course Lecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-orange-700 mb-8">🎥 Course Lecture Videos</h2>
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
    
      {/* What You Will Learn (UPDATED COLLAPSIBLE SECTION with 3-Month Curriculum) */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif text-orange-700 mb-10 text-center">
            📘 Complete <span className={ACCENT_COLOR}>3-Month Curriculum</span>
          </h2>

          {fullCourseCurriculum.map((month, index) => (
            <div className="mb-10" key={index}>
              {/* Month Header */}
              <div className="flex items-center mb-4 border-b-2 border-orange-300 pb-2">
                {month.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-700 flex justify-between items-center w-full">
                  <span>{month.monthTitle}</span>
                  <span className="text-sm font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
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

          {/* Optional: Download Button */}
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




      {/* --- */}

        {/* Bonus Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 border-4 border-dashed border-orange-300 rounded-3xl bg-yellow-50">
          <h2 className="text-4xl font-serif text-orange-700 mb-6 flex justify-center items-center gap-3">
            <Gift className="w-8 h-8 text-orange-600 animate-bounce" /> 🧘{" "}
            <span className="font-bold">Bonus Section</span> – Limited Time!
          </h2>
          <p className="text-2xl font-bold text-orange-800 mb-6">
            🎁 Free Bonuses Worth ₹2,000:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {bonusItems.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl shadow-lg border border-orange-100 flex items-center justify-center text-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-orange-700 mb-12 text-center">
            ✨ Choose Your <span className={ACCENT_COLOR}>Astrology Path</span>
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-orange-700 mb-10">
            🌟 Student Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Pooja, Mumbai", text: "This course changed how I understand karma and destiny." },
              { name: "Rajiv, Dubai", text: "Now I can read charts confidently and help others too." },
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
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-orange-700 mb-8">📩 Contact / Help</h2>
          <p>💌 Email: support@vedicacademy.com</p>
          <p>📱 WhatsApp: +91 9876543210</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
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
      

      {/* --- */}

    

      {/* --- */}

     
    </div>
  );
}