

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const reviews = [
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//     },
//     {
//       name: "Karan Verma",
//       role: "Engineer",
//       text: "The structured modules and assignments made learning easy and fun.",
//       img: "https://randomuser.me/api/portraits/men/33.jpg",
//     },
//     {
//       name: "Simran Kaur",
//       role: "Teacher",
//       text: "The practical approach really helped me connect the concepts to real life.",
//       img: "https://randomuser.me/api/portraits/women/45.jpg",
//     },
//     {
//       name: "Amit Desai",
//       role: "Consultant",
//       text: "The mentors are very knowledgeable. I recommend this to everyone interested in astrology.",
//       img: "https://randomuser.me/api/portraits/men/66.jpg",
//     },
//   ];

//   const handlePrev = () => {
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const handleNext = () => {
//     if (currentIndex < reviews.length - 3) setCurrentIndex(currentIndex + 1);
//   };

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       {/* Heading */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//  <div className="flex justify-center mb-10">
//     <img
//       src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//       alt="decorative border"
//       className="w-48 md:w-64 lg:w-72"
//     />
//   </div>

//       {/* Subtext */}
//       <motion.div
//         className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         Join thousands of{" "}
//         <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
//         who have experienced the{" "}
//         <span className="text-yellow-400">authentic spiritual services</span>{" "}
//         provided by{" "}
//         <span className="italic font-bold text-orange-500">Veda Structure</span>.
//       </motion.div>

//       {/* Testimonials Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 leading-relaxed">“{review.text}”</p>
//           </motion.div>
//         ))}
//       </div>

// {/* Pagination Arrows */}
// <div className="flex justify-center mt-10 gap-6">
//   <button
//     onClick={handlePrev}
//     disabled={currentIndex === 0}
//     className={`p-3 rounded-full shadow-md transition-transform duration-300 
//       ${currentIndex === 0 
//         ? "bg-gray-200 cursor-not-allowed opacity-60" 
//         : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"}`}
//   >
//     <ChevronLeft className="text-[#7b1b1b]" />
//   </button>

//   <button
//     onClick={handleNext}
//     disabled={currentIndex >= reviews.length - 3}
//     className={`p-3 rounded-full shadow-md transition-transform duration-300 
//       ${currentIndex >= reviews.length - 3
//         ? "bg-gray-200 cursor-not-allowed opacity-60" 
//         : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"}`}
//   >
//     <ChevronRight className="text-[#7b1b1b]" />
//   </button>
// </div>

//     </section>
//   );
// };

// export default Testimonials;





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({ name: "", role: "", text: "" });

//   // All testimonials including user feedback
//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//     },
//     {
//       name: "Karan Verma",
//       role: "Engineer",
//       text: "The structured modules and assignments made learning easy and fun.",
//       img: "https://randomuser.me/api/portraits/men/33.jpg",
//     },
//     {
//       name: "Simran Kaur",
//       role: "Teacher",
//       text: "The practical approach really helped me connect the concepts to real life.",
//       img: "https://randomuser.me/api/portraits/women/45.jpg",
//     },
//     {
//       name: "Amit Desai",
//       role: "Consultant",
//       text: "The mentors are very knowledgeable. I recommend this to everyone interested in astrology.",
//       img: "https://randomuser.me/api/portraits/men/66.jpg",
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () =>
//     currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new feedback object (with placeholder image)
//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       img: `https://randomuser.me/api/portraits/lego/${Math.floor(
//         Math.random() * 10
//       )}.jpg`,
//     };

//     // Add new feedback to the start of the list
//     setReviews([newFeedback, ...reviews]);

//     // Reset form and close modal
//     setFeedback({ name: "", role: "", text: "" });
//     setShowModal(false);

//     // Reset to first page so user sees their feedback immediately
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       {/* Heading */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Subtext */}
//       <motion.div
//         className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         Join thousands of{" "}
//         <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
//         who have experienced the{" "}
//         <span className="text-yellow-400">authentic spiritual services</span>{" "}
//         provided by{" "}
//         <span className="italic font-bold text-orange-500">Veda Structure</span>.
//       </motion.div>

//       {/* Testimonials Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 leading-relaxed">“{review.text}”</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//       ${
//         currentIndex === 0
//           ? "bg-gray-200 cursor-not-allowed opacity-60"
//           : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//       }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>

//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//       ${
//         currentIndex >= reviews.length - 3
//           ? "bg-gray-200 cursor-not-allowed opacity-60"
//           : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//       }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Feedback Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>
//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role (e.g., Student, Teacher)"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, role: e.target.value })
//                   }
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, text: e.target.value })
//                   }
//                   required
//                 ></textarea>
//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, MessageSquare, Star } from "lucide-react";

// export default function Testimonials() {
//   const [feedbacks, setFeedbacks] = useState([
//     {
//       name: "Ravi Sharma",
//       role: "Marketing Lead",
//       text: "The platform made our workflow so much smoother! I really liked how responsive the support team is.",
//       img: "https://randomuser.me/api/portraits/men/75.jpg",
//     },
//     {
//       name: "Priya Mehta",
//       role: "UI Designer",
//       text: "Clean design, great performance, and very easy to use!",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [newFeedback, setNewFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     img: "",
//     video: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFeedbacks([newFeedback, ...feedbacks]);
//     setNewFeedback({ name: "", role: "", text: "", img: "", video: "" });
//     setShowForm(false);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewFeedback({ ...newFeedback, img: URL.createObjectURL(file), video: "" });
//     }
//   };

//   const handleVideoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewFeedback({ ...newFeedback, video: URL.createObjectURL(file), img: "" });
//     }
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-100 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto text-center px-4">
//         <h2 className="text-4xl font-bold text-[#7b1b1b] mb-4 flex justify-center items-center gap-2">
//           <MessageSquare size={32} /> What Our Users Say
//         </h2>
//         <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
//           Real feedback from our amazing users who love what we do.
//         </p>

//         {/* Testimonials Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {feedbacks.map((fb, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="bg-white shadow-lg rounded-2xl p-6 text-left border border-yellow-200 hover:shadow-xl transition-all"
//             >
//               <div className="flex items-center mb-4">
//                 {fb.img && (
//                   <img
//                     src={fb.img}
//                     alt={fb.name}
//                     className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
//                   />
//                 )}
//                 <div className="ml-4">
//                   <h3 className="font-semibold text-[#7b1b1b]">{fb.name}</h3>
//                   <p className="text-sm text-gray-500">{fb.role}</p>
//                 </div>
//               </div>
//               {fb.video ? (
//                 <video
//                   src={fb.video}
//                   controls
//                   className="w-full rounded-lg mt-2 mb-4"
//                 />
//               ) : null}
//               <p className="text-gray-700 text-sm">{fb.text}</p>
//               <div className="flex mt-4 text-yellow-500">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={16} fill="currentColor" />
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Add Feedback Button */}
//         <button
//           onClick={() => setShowForm(true)}
//           className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105"
//         >
//           Share Your Feedback
//         </button>
//       </div>

//       {/* Feedback Modal */}
//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-8 rounded-2xl w-full max-w-md shadow-xl relative overflow-y-auto max-h-screen"
//               initial={{ scale: 0.8, opacity: 0, y: 50 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.8, opacity: 0, y: 50 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//                 onClick={() => setShowForm(false)}
//               >
//                 <X size={22} />
//               </button>

//               <h3 className="text-2xl font-semibold text-[#7b1b1b] mb-6 text-center">
//                 Share Your Feedback
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={newFeedback.name}
//                   onChange={(e) =>
//                     setNewFeedback({ ...newFeedback, name: e.target.value })
//                   }
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role (Optional)"
//                   value={newFeedback.role}
//                   onChange={(e) =>
//                     setNewFeedback({ ...newFeedback, role: e.target.value })
//                   }
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
//                 />
//                 <textarea
//                   placeholder="Your Feedback"
//                   value={newFeedback.text}
//                   onChange={(e) =>
//                     setNewFeedback({ ...newFeedback, text: e.target.value })
//                   }
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
//                   required
//                 />

//                 {/* Upload Section */}
//                 <div className="flex flex-col gap-4">
//                   <div className="flex items-center justify-between bg-yellow-50 border border-yellow-300 rounded-lg p-3">
//                     <label className="text-sm font-medium text-gray-600">
//                       Upload Image
//                     </label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       className="cursor-pointer"
//                     />
//                   </div>

//                   {newFeedback.img && (
//                     <img
//                       src={newFeedback.img}
//                       alt="Preview"
//                       className="w-full h-56 object-cover rounded-lg border border-yellow-400"
//                     />
//                   )}

//                   <div className="flex items-center justify-between bg-yellow-50 border border-yellow-300 rounded-lg p-3">
//                     <label className="text-sm font-medium text-gray-600">
//                       Upload Video
//                     </label>
//                     <input
//                       type="file"
//                       accept="video/*"
//                       onChange={handleVideoUpload}
//                       className="cursor-pointer"
//                     />
//                   </div>

//                   {newFeedback.video && (
//                     <video
//                       src={newFeedback.video}
//                       controls
//                       className="w-full rounded-lg mt-2 shadow-sm"
//                     />
//                   )}
//                 </div>




              

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105"
//                 >
//                   Submit Feedback
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Upload } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     img: null,
//     video: null,
//   });

//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () =>
//     currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Upload image & video
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setFeedback({ ...feedback, img: imgURL });
//     }
//   };

//   const handleVideoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const videoURL = URL.createObjectURL(file);
//       setFeedback({ ...feedback, video: videoURL });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       img:
//         feedback.img ||
//         `https://randomuser.me/api/portraits/lego/${Math.floor(
//           Math.random() * 10
//         )}.jpg`,
//       video: feedback.video || null,
//     };

//     setReviews([newFeedback, ...reviews]);
//     setFeedback({ name: "", role: "", text: "", img: null, video: null });
//     setShowModal(false);
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       {/* Heading */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Subtext */}
//       <motion.div
//         className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         Join thousands of{" "}
//         <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
//         who have experienced the{" "}
//         <span className="text-yellow-400">authentic spiritual services</span>{" "}
//         provided by{" "}
//         <span className="italic font-bold text-orange-500">Veda Structure</span>.
//       </motion.div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//             {review.video && (
//               <video
//                 controls
//                 className="w-full rounded-lg border mt-2 shadow-md"
//               >
//                 <source src={review.video} type="video/mp4" />
//               </video>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//           ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>

//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//           ${
//             currentIndex >= reviews.length - 3
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Feedback Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role (e.g., Student, Teacher)"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, role: e.target.value })
//                   }
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, text: e.target.value })
//                   }
//                   required
//                 ></textarea>

//                 {/* Upload Section */}
//                 <div className="flex flex-col gap-4 mt-3">
//                   {/* Image Upload */}
//                   <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 text-center hover:bg-orange-50 transition cursor-pointer">
//                     <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                       <Upload className="text-orange-500 w-6 h-6" />
//                       <span className="font-medium text-sm">
//                         {feedback.img ? "Change Image" : "Upload Image (optional)"}
//                       </span>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />
//                     </label>

//                     {/* Image Preview */}
//                     {feedback.img && (
//                       <img
//                         src={feedback.img}
//                         alt="preview"
//                         className="w-24 h-24 rounded-full mx-auto mt-3 object-cover border-2 border-orange-400"
//                       />
//                     )}
//                   </div>

//                   {/* Video Upload */}
//                   <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 text-center hover:bg-orange-50 transition cursor-pointer">
//                     <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                       <Upload className="text-orange-500 w-6 h-6" />
//                       <span className="font-medium text-sm">
//                         {feedback.video
//                           ? "Change Video"
//                           : "Upload Feedback Video (optional)"}
//                       </span>
//                       <input
//                         type="file"
//                         accept="video/*"
//                         onChange={handleVideoUpload}
//                         className="hidden"
//                       />
//                     </label>

//                     {/* Video Preview */}
//                     {feedback.video && (
//                       <video
//                         controls
//                         className="w-full rounded-lg mt-3 border border-orange-300 shadow-sm"
//                       >
//                         <source src={feedback.video} type="video/mp4" />
//                       </video>
//                     )}
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;








// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Upload, Image, Video } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     img: null,
//     video: null,
//   });

//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () =>
//     currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Upload image & video
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setFeedback({ ...feedback, img: imgURL });
//     }
//   };

//   const handleVideoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const videoURL = URL.createObjectURL(file);
//       setFeedback({ ...feedback, video: videoURL });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       img:
//         feedback.img ||
//         `https://randomuser.me/api/portraits/lego/${Math.floor(
//           Math.random() * 10
//         )}.jpg`,
//       video: feedback.video || null,
//     };

//     setReviews([newFeedback, ...reviews]);
//     setFeedback({ name: "", role: "", text: "", img: null, video: null });
//     setShowModal(false);
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       {/* Heading */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Subtext */}
//       <motion.div
//         className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         Join thousands of{" "}
//         <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
//         who have experienced the{" "}
//         <span className="text-yellow-400">authentic spiritual services</span>{" "}
//         provided by{" "}
//         <span className="italic font-bold text-orange-500">Veda Structure</span>.
//       </motion.div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//             {review.video && (
//               <video
//                 controls
//                 className="w-full rounded-lg border mt-2 shadow-md"
//               >
//                 <source src={review.video} type="video/mp4" />
//               </video>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//           ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>

//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//           ${
//             currentIndex >= reviews.length - 3
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Feedback Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh]"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role (e.g., Student, Teacher)"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, role: e.target.value })
//                   }
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, text: e.target.value })
//                   }
//                   required
//                 ></textarea>

//                 {/* Upload Section */}
//                 <div className="flex flex-col gap-5 mt-3">
//                   {/* Image Upload */}
//                   <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 text-center bg-orange-50 hover:bg-orange-100 transition relative">
//                     <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                       <Image className="text-orange-500 w-7 h-7" />
//                       <span className="font-medium text-sm">
//                         {feedback.img ? "Change Image" : "Upload Image (optional)"}
//                       </span>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />
//                     </label>

//                     {/* Image Preview */}
//                     {feedback.img && (
//                       <div className="relative mt-3">
//                         <img
//                           src={feedback.img}
//                           alt="preview"
//                           className="w-32 h-32 object-cover rounded-lg mx-auto border-2 border-orange-400 shadow-md"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setFeedback({ ...feedback, img: null })}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs hover:bg-red-600"
//                         >
//                           ✕
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Video Upload */}
//                   <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 text-center bg-orange-50 hover:bg-orange-100 transition relative">
//                     <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                       <Video className="text-orange-500 w-7 h-7" />
//                       <span className="font-medium text-sm">
//                         {feedback.video
//                           ? "Change Video"
//                           : "Upload Feedback Video (optional)"}
//                       </span>
//                       <input
//                         type="file"
//                         accept="video/*"
//                         onChange={handleVideoUpload}
//                         className="hidden"
//                       />
//                     </label>

//                     {/* Video Preview */}
//                     {feedback.video && (
//                       <div className="relative mt-3">
//                         <video
//                           controls
//                           className="w-full rounded-lg border border-orange-300 shadow-sm"
//                         >
//                           <source src={feedback.video} type="video/mp4" />
//                         </video>
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setFeedback({ ...feedback, video: null })
//                           }
//                           className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs hover:bg-red-600"
//                         >
//                           ✕
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Upload,
//   Image,
//   Video,
//   UserCircle2,
// } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     avatar: null,
//     feedbackImages: [],
//     feedbackVideos: [],
//   });

//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       avatar: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       avatar: "https://randomuser.me/api/portraits/women/22.jpg",
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () =>
//     currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);

//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Avatar upload
//   const handleAvatarUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setFeedback({ ...feedback, avatar: url });
//     }
//   };

//   // Multiple image upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const imageUrls = files.map((f) => URL.createObjectURL(f));
//     setFeedback({
//       ...feedback,
//       feedbackImages: [...feedback.feedbackImages, ...imageUrls],
//     });
//   };

//   // Multiple video upload
//   const handleVideoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const videoUrls = files.map((f) => URL.createObjectURL(f));
//     setFeedback({
//       ...feedback,
//       feedbackVideos: [...feedback.feedbackVideos, ...videoUrls],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       avatar:
//         feedback.avatar ||
//         `https://randomuser.me/api/portraits/lego/${Math.floor(
//           Math.random() * 10
//         )}.jpg`,
//       feedbackImages: feedback.feedbackImages,
//       feedbackVideos: feedback.feedbackVideos,
//     };

//     setReviews([newFeedback, ...reviews]);
//     setFeedback({
//       name: "",
//       role: "",
//       text: "",
//       avatar: null,
//       feedbackImages: [],
//       feedbackVideos: [],
//     });
//     setShowModal(false);
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       {/* Heading */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Subtext */}
//       <motion.div
//         className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         Join thousands of{" "}
//         <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
//         who have experienced the{" "}
//         <span className="text-yellow-400">authentic spiritual services</span>{" "}
//         provided by{" "}
//         <span className="italic font-bold text-orange-500">Veda Structure</span>.
//       </motion.div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.avatar}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//             {/* Feedback Images */}
//             {review.feedbackImages && review.feedbackImages.length > 0 && (
//               <div className="grid grid-cols-2 gap-3 mt-3">
//                 {review.feedbackImages.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`feedback-${idx}`}
//                     className="w-full h-32 object-cover rounded-lg border border-orange-300 shadow-sm"
//                   />
//                 ))}
//               </div>
//             )}

//             {/* Feedback Videos */}
//             {review.feedbackVideos && review.feedbackVideos.length > 0 && (
//               <div className="mt-3 space-y-3">
//                 {review.feedbackVideos.map((vid, idx) => (
//                   <video
//                     key={idx}
//                     controls
//                     className="w-full rounded-lg border border-orange-300 shadow-sm"
//                   >
//                     <source src={vid} type="video/mp4" />
//                   </video>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//           ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>

//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md transition-transform duration-300 
//           ${
//             currentIndex >= reviews.length - 3
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Feedback Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh]"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, name: e.target.value })
//                   }
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role (e.g., Student, Teacher)"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, role: e.target.value })
//                   }
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) =>
//                     setFeedback({ ...feedback, text: e.target.value })
//                   }
//                   required
//                 ></textarea>

//                 {/* Avatar Upload */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 text-center bg-orange-50 hover:bg-orange-100 transition">
//                   <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                     <UserCircle2 className="text-orange-500 w-7 h-7" />
//                     <span className="font-medium text-sm">
//                       {feedback.avatar ? "Change Avatar" : "Upload Avatar (optional)"}
//                     </span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleAvatarUpload}
//                       className="hidden"
//                     />
//                   </label>
//                   {feedback.avatar && (
//                     <img
//                       src={feedback.avatar}
//                       alt="avatar-preview"
//                       className="w-24 h-24 rounded-full mx-auto mt-3 object-cover border-2 border-orange-400 shadow-md"
//                     />
//                   )}
//                 </div>

//                 {/* Feedback Images Upload */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 text-center bg-orange-50 hover:bg-orange-100 transition">
//                   <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                     <Image className="text-orange-500 w-7 h-7" />
//                     <span className="font-medium text-sm">
//                       Upload Feedback Images (multiple)
//                     </span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       multiple
//                       onChange={handleImageUpload}
//                       className="hidden"
//                     />
//                   </label>
//                   {feedback.feedbackImages.length > 0 && (
//                     <div className="grid grid-cols-3 gap-2 mt-3">
//                       {feedback.feedbackImages.map((img, idx) => (
//                         <div key={idx} className="relative">
//                           <img
//                             src={img}
//                             alt={`feedback-${idx}`}
//                             className="w-24 h-24 object-cover rounded-lg border-2 border-orange-300"
//                           />
//                           <button
//                             type="button"
//                             onClick={() =>
//                               setFeedback({
//                                 ...feedback,
//                                 feedbackImages: feedback.feedbackImages.filter(
//                                   (_, i) => i !== idx
//                                 ),
//                               })
//                             }
//                             className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs"
//                           >
//                             ✕
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Feedback Videos Upload */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 text-center bg-orange-50 hover:bg-orange-100 transition">
//                   <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-700">
//                     <Video className="text-orange-500 w-7 h-7" />
//                     <span className="font-medium text-sm">
//                       Upload Feedback Videos (multiple)
//                     </span>
//                     <input
//                       type="file"
//                       accept="video/*"
//                       multiple
//                       onChange={handleVideoUpload}
//                       className="hidden"
//                     />
//                   </label>
//                   {feedback.feedbackVideos.length > 0 && (
//                     <div className="mt-3 space-y-2">
//                       {feedback.feedbackVideos.map((vid, idx) => (
//                         <div key={idx} className="relative">
//                           <video
//                             controls
//                             className="w-full rounded-lg border border-orange-300"
//                           >
//                             <source src={vid} type="video/mp4" />
//                           </video>
//                           <button
//                             type="button"
//                             onClick={() =>
//                               setFeedback({
//                                 ...feedback,
//                                 feedbackVideos: feedback.feedbackVideos.filter(
//                                   (_, i) => i !== idx
//                                 ),
//                               })
//                             }
//                             className="absolute top-2 right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs"
//                           >
//                             ✕
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Image, Video, UserCircle2, Plus } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//     images: [],
//     videos: [],
//   });

//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () => currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);
//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Handle uploads
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setFeedback({ ...feedback, avatar: URL.createObjectURL(file) });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
//   };

//   const handleVideoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newVideos = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, videos: [...prev.videos, ...newVideos] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       img: feedback.avatar,
//       images: feedback.images,
//       videos: feedback.videos,
//     };
//     setReviews([newFeedback, ...reviews]);
//     setFeedback({
//       name: "",
//       role: "",
//       text: "",
//       avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//       images: [],
//       videos: [],
//     });
//     setShowModal(false);
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//             {review.images?.length > 0 && (
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {review.images.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt="feedback-img"
//                     className="w-20 h-20 object-cover rounded-lg border"
//                   />
//                 ))}
//               </div>
//             )}
//             {review.videos?.length > 0 && (
//               <div className="flex flex-col gap-2 mt-2">
//                 {review.videos.map((vid, idx) => (
//                   <video key={idx} controls className="w-full rounded-lg border shadow-sm">
//                     <source src={vid} type="video/mp4" />
//                   </video>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md ${
//             currentIndex >= reviews.length - 3
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh]"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>

//               {/* Avatar Section */}
//               <div className="flex flex-col items-center gap-3 mb-4">
//                 <img
//                   src={feedback.avatar}
//                   alt="avatar"
//                   className="w-20 h-20 rounded-full border-4 border-yellow-300 object-cover shadow-md"
//                 />
//                 <label className="cursor-pointer text-sm font-medium text-orange-600 hover:underline">
//                   Change Avatar
//                   <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
//                 </label>
//               </div>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) => setFeedback({ ...feedback, role: e.target.value })}
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) => setFeedback({ ...feedback, text: e.target.value })}
//                   required
//                 ></textarea>

//                 {/* Upload Images */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50 hover:bg-orange-100 transition">
//                   <label className="flex flex-col items-center gap-2 cursor-pointer text-gray-700">
//                     <Image className="w-7 h-7 text-orange-500" />
//                     <span className="text-sm font-medium">Add Feedback Images</span>
//                     <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
//                   </label>

//                   {feedback.images.length > 0 && (
//                     <div className="flex flex-wrap gap-2 mt-3 justify-center">
//                       {feedback.images.map((img, i) => (
//                         <img
//                           key={i}
//                           src={img}
//                           alt="upload-preview"
//                           className="w-16 h-16 object-cover rounded-md border shadow-sm"
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Upload Videos */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50 hover:bg-orange-100 transition">
//                   <label className="flex flex-col items-center gap-2 cursor-pointer text-gray-700">
//                     <Video className="w-7 h-7 text-orange-500" />
//                     <span className="text-sm font-medium">Add Feedback Videos</span>
//                     <input type="file" multiple accept="video/*" onChange={handleVideoUpload} className="hidden" />
//                   </label>

//                   {feedback.videos.length > 0 && (
//                     <div className="flex flex-col gap-2 mt-3">
//                       {feedback.videos.map((vid, i) => (
//                         <video key={i} controls className="w-full rounded-md border">
//                           <source src={vid} type="video/mp4" />
//                         </video>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;








// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Image, Video, Plus } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//     images: [],
//     videos: [],
//   });

//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//       images: [],
//       videos: [],
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//       images: [],
//       videos: [],
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//       images: [],
//       videos: [],
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () => currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);
//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Avatar Upload
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setFeedback({ ...feedback, avatar: URL.createObjectURL(file) });
//   };

//   // Image Upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
//   };

//   // Video Upload
//   const handleVideoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newVideos = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, videos: [...prev.videos, ...newVideos] }));
//   };

//   // Remove image
//   const removeImage = (index) => {
//     setFeedback((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//   };

//   // Remove video
//   const removeVideo = (index) => {
//     setFeedback((prev) => ({
//       ...prev,
//       videos: prev.videos.filter((_, i) => i !== index),
//     }));
//   };

//   // Submit Feedback
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       img: feedback.avatar,
//       images: feedback.images,
//       videos: feedback.videos,
//     };
//     setReviews([newFeedback, ...reviews]);
//     setFeedback({
//       name: "",
//       role: "",
//       text: "",
//       avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//       images: [],
//       videos: [],
//     });
//     setShowModal(false);
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => {
//           const dynamicHeight =
//             review.images.length > 0 || review.videos.length > 0 ? "auto" : "360px";

//           return (
//             <motion.div
//               key={i}
//               className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition-all duration-300"
//               style={{ minHeight: dynamicHeight, alignSelf: "start" }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//             >
//               {/* Profile */}
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={review.img}
//                   alt={review.name}
//                   className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                   <p className="text-sm text-gray-500">{review.role}</p>
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//               {/* Images */}
//               {review.images?.length > 0 && (
//                 <div className="flex flex-wrap gap-3 mt-3 justify-start">
//                   {review.images.map((img, idx) => (
//                     <img
//                       key={idx}
//                       src={img}
//                       alt="feedback-img"
//                       className="w-36 h-36 object-cover rounded-xl border shadow-md"
//                     />
//                   ))}
//                 </div>
//               )}

//               {/* Videos */}
//               {review.videos?.length > 0 && (
//                 <div className="flex flex-col gap-3 mt-4 w-full">
//                   {review.videos.map((vid, idx) => (
//                     <video
//                       key={idx}
//                       controls
//                       className="w-full rounded-xl border shadow-md"
//                     >
//                       <source src={vid} type="video/mp4" />
//                     </video>
//                   ))}
//                 </div>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md ${
//             currentIndex >= reviews.length - 3
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Give Feedback */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh]"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>

//               {/* Avatar */}
//               <div className="flex flex-col items-center gap-3 mb-4">
//                 <img
//                   src={feedback.avatar}
//                   alt="avatar"
//                   className="w-20 h-20 rounded-full border-4 border-yellow-300 object-cover shadow-md"
//                 />
//                 <label className="cursor-pointer text-sm font-medium text-orange-600 hover:underline">
//                   Change Avatar
//                   <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
//                 </label>
//               </div>

//               {/* Feedback Form */}
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) => setFeedback({ ...feedback, role: e.target.value })}
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) => setFeedback({ ...feedback, text: e.target.value })}
//                   required
//                 ></textarea>

//                 {/* Upload Images */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-700 flex items-center gap-2">
//                       <Image className="w-5 h-5 text-orange-500" /> Feedback Images
//                     </h4>

//                     <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md transition">
//                       <Plus className="w-5 h-5" />
//                       <input
//                         type="file"
//                         multiple
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>

//                   <div className="flex flex-wrap gap-3 justify-center">
//                     {feedback.images.map((img, i) => (
//                       <div key={i} className="relative">
//                         <img
//                           src={img}
//                           alt="upload-preview"
//                           className="w-20 h-20 object-cover rounded-md border shadow-sm"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage(i)}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Upload Videos */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-700 flex items-center gap-2">
//                       <Video className="w-5 h-5 text-orange-500" /> Feedback Videos
//                     </h4>

//                     <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md transition">
//                       <Plus className="w-5 h-5" />
//                       <input
//                         type="file"
//                         multiple
//                         accept="video/*"
//                         onChange={handleVideoUpload}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>

//                   <div className="flex flex-col gap-3 justify-center">
//                     {feedback.videos.map((vid, i) => (
//                       <div key={i} className="relative">
//                         <video
//                           controls
//                           className="w-full rounded-md border shadow-sm"
//                         >
//                           <source src={vid} type="video/mp4" />
//                         </video>
//                         <button
//                           type="button"
//                           onClick={() => removeVideo(i)}
//                           className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;







// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X, Image, Video, Plus, Star } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     rating: 0,
//     avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//     images: [],
//     videos: [],
//   });

//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
//       rating: 5,
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//       images: [],
//       videos: [],
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
//       rating: 4,
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//       images: [],
//       videos: [],
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
//       rating: 5,
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//       images: [],
//       videos: [],
//     },
//   ]);

//   const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
//   const handleNext = () => currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);
//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

//   // Avatar Upload
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setFeedback({ ...feedback, avatar: URL.createObjectURL(file) });
//   };

//   // Image Upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
//   };

//   // Video Upload
//   const handleVideoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newVideos = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, videos: [...prev.videos, ...newVideos] }));
//   };

//   // Remove image/video
//   const removeImage = (i) =>
//     setFeedback((prev) => ({ ...prev, images: prev.images.filter((_, idx) => idx !== i) }));
//   const removeVideo = (i) =>
//     setFeedback((prev) => ({ ...prev, videos: prev.videos.filter((_, idx) => idx !== i) }));

//   // Rating click
//   const handleRating = (rating) => setFeedback({ ...feedback, rating });

//   // Submit Feedback
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       rating: feedback.rating,
//       img: feedback.avatar,
//       images: feedback.images,
//       videos: feedback.videos,
//     };
//     setReviews([newFeedback, ...reviews]);
//     setFeedback({
//       name: "",
//       role: "",
//       text: "",
//       rating: 0,
//       avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//       images: [],
//       videos: [],
//     });
//     setShowModal(false);
//     setCurrentIndex(0);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         What Our Students Have to Say About Us!
//       </motion.h2>

//       <div className="flex justify-center mb-10">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-48 md:w-64 lg:w-72"
//         />
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//         {visibleReviews.map((review, i) => (
//           <motion.div
//             key={i}
//             className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition-all duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//           >
//             {/* Profile */}
//             <div className="flex items-center gap-4 mb-3">
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
//                 <p className="text-sm text-gray-500">{review.role}</p>
//               </div>
//             </div>

//             {/* Rating */}
//             <div className="flex mb-2">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   className={`w-5 h-5 ${
//                     idx < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Text */}
//             <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//             {/* Images */}
//             {review.images?.length > 0 && (
//               <div className="flex flex-wrap gap-3 mt-3 justify-start">
//                 {review.images.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt="feedback-img"
//                     className="w-36 h-36 object-cover rounded-xl border shadow-md"
//                   />
//                 ))}
//               </div>
//             )}

//             {/* Videos */}
//             {review.videos?.length > 0 && (
//               <div className="flex flex-col gap-3 mt-4 w-full">
//                 {review.videos.map((vid, idx) => (
//                   <video
//                     key={idx}
//                     controls
//                     className="w-full rounded-xl border shadow-md"
//                   >
//                     <source src={vid} type="video/mp4" />
//                   </video>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-10 gap-6">
//         <button
//           onClick={handlePrev}
//           disabled={currentIndex === 0}
//           className={`p-3 rounded-full shadow-md ${
//             currentIndex === 0
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronLeft className="text-[#7b1b1b]" />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex >= reviews.length - 3}
//           className={`p-3 rounded-full shadow-md ${
//             currentIndex >= reviews.length - 3
//               ? "bg-gray-200 cursor-not-allowed opacity-60"
//               : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
//           }`}
//         >
//           <ChevronRight className="text-[#7b1b1b]" />
//         </button>
//       </div>

//       {/* Feedback Modal */}
//       <div className="mt-12">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
//         >
//           Give Your Feedback
//         </motion.button>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh]"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 50, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
//                 Share Your Feedback
//               </h3>

//               {/* Avatar */}
//               <div className="flex flex-col items-center gap-3 mb-4">
//                 <img
//                   src={feedback.avatar}
//                   alt="avatar"
//                   className="w-20 h-20 rounded-full border-4 border-yellow-300 object-cover shadow-md"
//                 />
//                 <label className="cursor-pointer text-sm font-medium text-orange-600 hover:underline">
//                   Change Avatar
//                   <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
//                 </label>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) => setFeedback({ ...feedback, role: e.target.value })}
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your feedback..."
//                   rows="4"
//                   className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.text}
//                   onChange={(e) => setFeedback({ ...feedback, text: e.target.value })}
//                   required
//                 ></textarea>

//                 {/* Star Rating */}
//                 <div className="flex justify-center mb-2">
//                   {Array.from({ length: 5 }).map((_, idx) => (
//                     <Star
//                       key={idx}
//                       onClick={() => handleRating(idx + 1)}
//                       className={`w-7 h-7 cursor-pointer transition-transform ${
//                         idx < feedback.rating
//                           ? "text-yellow-400 fill-yellow-400 scale-110"
//                           : "text-gray-300 hover:text-yellow-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Upload Images */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-700 flex items-center gap-2">
//                       <Image className="w-5 h-5 text-orange-500" /> Feedback Images
//                     </h4>
//                     <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md">
//                       <Plus className="w-5 h-5" />
//                       <input
//                         type="file"
//                         multiple
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>

//                   <div className="flex flex-wrap gap-3 justify-center">
//                     {feedback.images.map((img, i) => (
//                       <div key={i} className="relative">
//                         <img
//                           src={img}
//                           alt="upload-preview"
//                           className="w-20 h-20 object-cover rounded-md border shadow-sm"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage(i)}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Upload Videos */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-700 flex items-center gap-2">
//                       <Video className="w-5 h-5 text-orange-500" /> Feedback Videos
//                     </h4>
//                     <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md">
//                       <Plus className="w-5 h-5" />
//                       <input
//                         type="file"
//                         multiple
//                         accept="video/*"
//                         onChange={handleVideoUpload}
//                         className="hidden"
//                       />
//                     </label>
//                   </div>

//                   <div className="flex flex-col gap-3 justify-center">
//                     {feedback.videos.map((vid, i) => (
//                       <div key={i} className="relative">
//                         <video controls className="w-full rounded-md border shadow-sm">
//                           <source src={vid} type="video/mp4" />
//                         </video>
//                         <button
//                           type="button"
//                           onClick={() => removeVideo(i)}
//                           className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
//                         >
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   Submit Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Image,
  Video,
  Plus,
  Star,
  CheckCircle,
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    role: "",
    text: "",
    rating: 0,
    avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
    images: [],
    videos: [],
  });

  const [reviews, setReviews] = useState([
    {
      name: "Ananya Sharma",
      role: "Student",
      text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      images: [],
      videos: [],
    },
    {
      name: "Rohit Mehta",
      role: "Entrepreneur",
      text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/44.jpg",
      images: [],
      videos: [],
    },
    {
      name: "Priya Singh",
      role: "Life Coach",
      text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      images: [],
      videos: [],
    },
  ]);

  const handlePrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const handleNext = () =>
    currentIndex < reviews.length - 3 && setCurrentIndex(currentIndex + 1);
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  // Avatar Upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setFeedback({ ...feedback, avatar: URL.createObjectURL(file) });
  };

  // Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setFeedback((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
  };

  // Video Upload
  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newVideos = files.map((file) => URL.createObjectURL(file));
    setFeedback((prev) => ({ ...prev, videos: [...prev.videos, ...newVideos] }));
  };

  const removeImage = (i) =>
    setFeedback((prev) => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== i),
    }));

  const removeVideo = (i) =>
    setFeedback((prev) => ({
      ...prev,
      videos: prev.videos.filter((_, idx) => idx !== i),
    }));

  const handleRating = (rating) => setFeedback({ ...feedback, rating });

  // Submit feedback
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: feedback.name,
      role: feedback.role,
      text: feedback.text,
      rating: feedback.rating,
      img: feedback.avatar,
      images: feedback.images,
      videos: feedback.videos,
    };
    setReviews([newFeedback, ...reviews]);
    setFeedback({
      name: "",
      role: "",
      text: "",
      rating: 0,
      avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
      images: [],
      videos: [],
    });
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setCurrentIndex(0);
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        What Our Students Have to Say About Us!
      </motion.h2>

      <div className="flex justify-center mb-10">
        <img
          src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
          alt="decorative border"
          className="w-88 md:w-84 lg:w-82"
        />
      </div>

          {/* Subtext */}
       <motion.div
        className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
         ✨  Join thousands of{" "}
        <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
        who have experienced the{" "}
        <span className="text-yellow-400">authentic spiritual services</span>{" "}
        provided by{" "}
        <span className="italic font-bold text-orange-500">Veda Structure ✨  </span>.
      </motion.div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 items-start auto-rows-auto">
        {visibleReviews.map((review, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition-all duration-300 h-auto self-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mb-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-5 h-5 ${
                    idx < review.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

            {/* Images */}
            {review.images?.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-3 justify-start">
                {review.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="feedback-img"
                    className="w-32 h-32 object-cover rounded-xl border shadow-md"
                  />
                ))}
              </div>
            )}

            {/* Videos */}
            {review.videos?.length > 0 && (
              <div className="flex flex-col gap-3 mt-4 w-full">
                {review.videos.map((vid, idx) => (
                  <video key={idx} controls className="w-full rounded-xl border shadow-md">
                    <source src={vid} type="video/mp4" />
                  </video>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full shadow-md ${
            currentIndex === 0
              ? "bg-gray-200 cursor-not-allowed opacity-60"
              : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
          }`}
        >
          <ChevronLeft className="text-[#7b1b1b]" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= reviews.length - 3}
          className={`p-3 rounded-full shadow-md ${
            currentIndex >= reviews.length - 3
              ? "bg-gray-200 cursor-not-allowed opacity-60"
              : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
          }`}
        >
          <ChevronRight className="text-[#7b1b1b]" />
        </button>
      </div>

      {/* Feedback Button */}
      <div className="mt-12">
        <motion.button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-105"
        >
          Give Your Feedback
        </motion.button>
      </div>

      {/* Feedback Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0  bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold text-[#7b1b1b] mb-4 text-center">
                Share Your Feedback
              </h3>

              {/* Avatar */}
              <div className="flex flex-col items-center gap-3 mb-4">
                <img
                  src={feedback.avatar}
                  alt="avatar"
                  className="w-20 h-20 rounded-full border-4 border-yellow-300 object-cover shadow-md"
                />
                <label className="cursor-pointer text-sm font-medium text-orange-600 hover:underline">
                  Change Avatar
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Feedback Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                  value={feedback.name}
                  onChange={(e) =>
                    setFeedback({ ...feedback, name: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Your Role"
                  className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                  value={feedback.role}
                  onChange={(e) =>
                    setFeedback({ ...feedback, role: e.target.value })
                  }
                  required
                />
                <textarea
                  placeholder="Write your feedback..."
                  rows="4"
                  className="border p-3 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                  value={feedback.text}
                  onChange={(e) =>
                    setFeedback({ ...feedback, text: e.target.value })
                  }
                  required
                ></textarea>

                {/* Star Rating */}
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      onClick={() => handleRating(idx + 1)}
                      className={`w-7 h-7 cursor-pointer transition-transform ${
                        idx < feedback.rating
                          ? "text-yellow-400 fill-yellow-400 scale-110"
                          : "text-gray-300 hover:text-yellow-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Upload Images */}
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-700 flex items-center gap-2">
                      <Image className="w-5 h-5 text-orange-500" /> Feedback Images
                    </h4>
                    <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md">
                      <Plus className="w-5 h-5" />
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    {feedback.images.map((img, i) => (
                      <div key={i} className="relative">
                        <img
                          src={img}
                          alt="upload-preview"
                          className="w-20 h-20 object-cover rounded-md border shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upload Videos */}
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-5 bg-orange-50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-700 flex items-center gap-2">
                      <Video className="w-5 h-5 text-orange-500" /> Feedback Videos
                    </h4>
                    <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md">
                      <Plus className="w-5 h-5" />
                      <input
                        type="file"
                        multiple
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-3 justify-center">
                    {feedback.videos.map((vid, i) => (
                      <div key={i} className="relative">
                        <video controls className="w-full rounded-md border shadow-sm">
                          <source src={vid} type="video/mp4" />
                        </video>
                        <button
                          type="button"
                          onClick={() => removeVideo(i)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold shadow-md mt-3"
                  whileHover={{ scale: 1.05 }}
                >
                  Submit Feedback
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Thank You Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg z-50"
          >
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="font-medium">Thank you for your feedback!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;




// import React, { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Image,
//   Video,
//   Plus,
//   Star,
//   CheckCircle,
//   MessageSquare,
//   Users, // Icon for Student Activities Gallery
//   MonitorPlay, // Icon for Videos of Our Students
// } from "lucide-react";

// // --- Review Card Component (Maintains Uniform Size) ---
// const ReviewCard = ({ review }) => {
//   // CRITICAL: Fixed height (h-[450px]) and self-stretch ensures all cards are the same size.
//   const CARD_CLASSES = "bg-white p-6 rounded-2xl shadow-xl text-left flex flex-col items-start hover:shadow-2xl transition-all duration-300 h-[450px] self-stretch";

//   return (
//     <motion.div
//       className={CARD_CLASSES}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       whileHover={{ y: -5 }}
//     >
//       {/* Header and Avatar */}
//       <div className="flex items-center gap-4 mb-3 w-full">
//         <img
//           src={review.img}
//           alt={review.name}
//           className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover flex-shrink-0"
//         />
//         <div className="flex-grow">
//           <h4 className="font-semibold text-[#7b1b1b] truncate">{review.name}</h4>
//           <p className="text-sm text-gray-500 truncate">{review.role}</p>
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="flex mb-3">
//         {Array.from({ length: 5 }).map((_, idx) => (
//           <Star
//             key={idx}
//             className={`w-5 h-5 ${
//               idx < review.rating
//                 ? "text-yellow-400 fill-yellow-400"
//                 : "text-gray-300"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Main Content Area - Scrollable for overflow */}
//       <div className="flex-grow overflow-y-auto w-full pr-1 custom-scrollbar">
        
//         {/* Text Feedback - Always present */}
//         <p className="text-gray-700 leading-relaxed mb-3">“{review.text}”</p>

//         {/* Images Display (Primary for image-based reviews) */}
//         {review.images?.length > 0 && (
//           <div className="grid grid-cols-2 gap-3 mt-3">
//             {review.images.slice(0, 4).map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`feedback-img-${idx}`}
//                 className="w-full h-28 object-cover rounded-xl border shadow-md"
//                 onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/A0A0A0/FFFFFF?text=Error" }}
//               />
//             ))}
//             {review.images.length > 4 && (
//               <div className="w-full h-28 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500 text-sm">
//                 +{review.images.length - 4} more
//               </div>
//             )}
//           </div>
//         )}

//         {/* Videos Display (Primary for video-based reviews) */}
//         {review.videos?.length > 0 && (
//           <div className="flex flex-col gap-3 mt-4 w-full">
//             <video controls className="w-full rounded-xl shadow-md h-40 bg-black">
//               {/* Note: This is a publicly available dummy MP4 file for demonstration */}
//               <source src={review.videos[0]} type="video/mp4" /> 
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//       </div>

//       {/* Custom Scrollbar Style (Needed for overflow-y-auto) */}
//       <style jsx="true">{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #f6ad55; /* Orange-400 */
//           border-radius: 4px;
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// // Helper component for section titles
// const SectionTitle = ({ icon: Icon, title }) => (
//   <motion.h3 
//     className="text-2xl font-bold text-center text-[#7b1b1b] my-10 flex items-center justify-center gap-3 border-b-2 border-yellow-400 pb-2"
//     initial={{ opacity: 0, y: 10 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     viewport={{ once: true, amount: 0.5 }}
//   >
//     <Icon className="w-6 h-6 text-orange-500"/>
//     {title}
//   </motion.h3>
// )

// // --- Testimonials Main Component ---
// const Testimonials = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showToast, setShowToast] = useState(false);

//   // Initial State Data (Updated with Image and Video examples)
//   const [reviews, setReviews] = useState([
//     {
//       name: "Ananya Sharma",
//       role: "Student",
//       text: "This course changed my life! The mentors explained the subject in such a simple and practical way. I highly recommend this to anyone seeking true spiritual guidance.",
//       rating: 5,
//       img: "https://randomuser.me/api/portraits/women/65.jpg",
//       images: [],
//       videos: [],
//     },
//     {
//       name: "Karan Patel",
//       role: "Vedic Scholar",
//       text: "The experience captured here shows the depth of our practical sessions. The clarity in presentation is unmatched.",
//       rating: 5,
//       img: "https://randomuser.me/api/portraits/men/82.jpg",
//       images: [],
//       videos: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"], // Dummy video URL
//     },
//     {
//       name: "Priya Singh",
//       role: "Life Coach",
//       text: "The certification helped me expand my career. The live classes and case studies are truly valuable and deeply insightful.",
//       rating: 5,
//       img: "https://randomuser.me/api/portraits/women/22.jpg",
//       images: [],
//       videos: [],
//     },
//     {
//       name: "Rohit Mehta",
//       role: "Entrepreneur",
//       text: "I wanted to share these beautiful moments from our recent campus event! The community here is incredibly supportive.",
//       rating: 4,
//       img: "https://randomuser.me/api/portraits/men/44.jpg",
//       images: [ // Dummy image URLs
//         "https://placehold.co/100x100/FFA500/FFFFFF?text=Group+Photo",
//         "https://placehold.co/100x100/FFD700/000000?text=Event+Shot",
//         "https://placehold.co/100x100/FF8C00/FFFFFF?text=Campus+View",
//         "https://placehold.co/100x100/FF4500/FFFFFF?text=Ceremony",
//         "https://placehold.co/100x100/FF0000/FFFFFF?text=Extra" // Extra image to test '+N more' logic
//       ],
//       videos: [],
//     },
//     {
//       name: "Deepa Verma",
//       role: "Homemaker",
//       text: "Absolutely stunning service. I feel so much peace and positive energy after implementing the suggested rituals. A must-try!",
//       rating: 5,
//       img: "https://randomuser.me/api/portraits/women/78.jpg",
//       images: [],
//       videos: [],
//     },
//   ]);

//   // Filters reviews into distinct categories
//   const filteredReviews = useMemo(() => {
//     // Text-only: No media attached
//     const textReviews = reviews.filter(r => r.images.length === 0 && r.videos.length === 0);
//     // Image-based: Has images, no videos (or images are primary)
//     const imageReviews = reviews.filter(r => r.images.length > 0 && r.videos.length === 0);
//     // Video-based: Has videos
//     const videoReviews = reviews.filter(r => r.videos.length > 0);

//     return { textReviews, imageReviews, videoReviews };
//   }, [reviews]);

//   const [feedback, setFeedback] = useState({
//     name: "",
//     role: "",
//     text: "",
//     rating: 0,
//     avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//     images: [],
//     videos: [],
//   });

//   // Simplified handlers for the modal form...
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setFeedback({ ...feedback, avatar: URL.createObjectURL(file) });
//   };
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
//   };
//   const handleVideoUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newVideos = files.map((file) => URL.createObjectURL(file));
//     setFeedback((prev) => ({ ...prev, videos: [...prev.videos, ...newVideos] }));
//   };
//   const removeImage = (i) =>
//     setFeedback((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, idx) => idx !== i),
//     }));
//   const removeVideo = (i) =>
//     setFeedback((prev) => ({
//       ...prev,
//       videos: prev.videos.filter((_, idx) => idx !== i),
//     }));
//   const handleRating = (rating) => setFeedback({ ...feedback, rating });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFeedback = {
//       name: feedback.name,
//       role: feedback.role,
//       text: feedback.text,
//       rating: feedback.rating,
//       img: feedback.avatar,
//       images: feedback.images,
//       videos: feedback.videos,
//     };
//     setReviews([newFeedback, ...reviews]);
//     setFeedback({
//       name: "", role: "", text: "", rating: 0,
//       avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
//       images: [], videos: [],
//     });
//     setShowModal(false);
//     setShowToast(true);
//     setTimeout(() => setShowToast(false), 3000);
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden font-sans">
//       <motion.h2
//         className="text-4xl md:text-5xl font-extrabold mb-4 text-black"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         Authentic Feedback From Our Students
//       </motion.h2>

//       <div className="flex justify-center mb-6">
//         <img
//           src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//           alt="decorative border"
//           className="w-88 md:w-84 lg:w-82"
//         />
//       </div>

//       <motion.div
//         className="text-orange-500 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center px-4"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.2 }}
//       >
//         ✨ Join thousands of
//         <span className="font-semibold text-yellow-500"> satisfied devotees</span>
//         who have experienced the
//         <span className="text-yellow-500"> authentic spiritual services</span>
//         provided by
//         <span className="italic font-bold text-orange-600"> Veda Structure ✨ </span>.
//       </motion.div>

//       {/* --- 1. Text Testimonials Section --- */}
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionTitle icon={MessageSquare} title="Written Testimonials" />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//           {filteredReviews.textReviews.slice(0, 3).map((review, i) => (
//             <ReviewCard key={`text-${i}`} review={review} />
//           ))}
//         </div>
//       </div>

//       {/* --- 2. Image Testimonials Section (RENAMED) --- */}
//       {filteredReviews.imageReviews.length > 0 && (
//         <div className="max-w-7xl mx-auto px-6 mt-16">
//           <SectionTitle icon={Users} title="Student Activities Gallery" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {filteredReviews.imageReviews.slice(0, 3).map((review, i) => (
//               <ReviewCard key={`image-${i}`} review={review} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* --- 3. Video Testimonials Section (RENAMED) --- */}
//       {filteredReviews.videoReviews.length > 0 && (
//         <div className="max-w-7xl mx-auto px-6 mt-16">
//           <SectionTitle icon={MonitorPlay} title="Videos of Our Students" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//             {filteredReviews.videoReviews.slice(0, 3).map((review, i) => (
//               <ReviewCard key={`video-${i}`} review={review} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Feedback Button */}
//       <div className="mt-20">
//         <motion.button
//           onClick={() => setShowModal(true)}
//           className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl transition-transform hover:scale-105"
//           whileHover={{ scale: 1.05 }}
//         >
//           Give Your Feedback Now
//         </motion.button>
//       </div>

//       {/* Feedback Modal (Submission Form) */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative overflow-y-auto max-h-[90vh] text-center"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-red-500 p-2 rounded-full bg-gray-50 hover:bg-red-50"
//               >
//                 <X />
//               </button>

//               <h3 className="text-2xl font-bold text-[#7b1b1b] mb-6">
//                 Share Your Experience
//               </h3>

//               {/* Avatar and Form... (Form logic remains the same) */}
//               <div className="flex flex-col items-center gap-3 mb-4">
//                 <img
//                   src={feedback.avatar}
//                   alt="avatar"
//                   className="w-20 h-20 rounded-full border-4 border-yellow-300 object-cover shadow-md"
//                 />
//                 <label className="cursor-pointer text-sm font-medium text-orange-600 hover:underline">
//                   Change Avatar
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleAvatarChange}
//                     className="hidden"
//                   />
//                 </label>
//               </div>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.name}
//                   onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Your Role / Designation"
//                   className="border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
//                   value={feedback.role}
//                   onChange={(e) => setFeedback({ ...feedback, role: e.target.value })}
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your detailed feedback here..."
//                   rows="4"
//                   className="border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none resize-none"
//                   value={feedback.text}
//                   onChange={(e) => setFeedback({ ...feedback, text: e.target.value })}
//                   required
//                 ></textarea>

//                 {/* Star Rating */}
//                 <div className="flex justify-center mb-2">
//                   {Array.from({ length: 5 }).map((_, idx) => (
//                     <Star
//                       key={idx}
//                       onClick={() => handleRating(idx + 1)}
//                       className={`w-8 h-8 cursor-pointer transition-transform ${
//                         idx < feedback.rating
//                           ? "text-yellow-400 fill-yellow-400 scale-110"
//                           : "text-gray-300 hover:text-yellow-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Upload Images Block */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-xl p-4 bg-orange-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-700 flex items-center gap-2">
//                       <Image className="w-5 h-5 text-orange-500" /> Upload Photos ({feedback.images.length})
//                     </h4>
//                     <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md">
//                       <Plus className="w-5 h-5" />
//                       <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden"/>
//                     </label>
//                   </div>
//                   <div className="flex flex-wrap gap-3 justify-start">
//                     {feedback.images.map((img, i) => (
//                       <div key={i} className="relative">
//                         <img src={img} alt="upload-preview" className="w-16 h-16 object-cover rounded-md border shadow-sm"/>
//                         <button type="button" onClick={() => removeImage(i)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 transition-transform hover:scale-125">
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Upload Videos Block */}
//                 <div className="border-2 border-dashed border-orange-300 rounded-xl p-4 bg-orange-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-700 flex items-center gap-2">
//                       <Video className="w-5 h-5 text-orange-500" /> Upload Videos ({feedback.videos.length})
//                     </h4>
//                     <label className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md">
//                       <Plus className="w-5 h-5" />
//                       <input type="file" multiple accept="video/*" onChange={handleVideoUpload} className="hidden"/>
//                     </label>
//                   </div>

//                   <div className="flex flex-col gap-3 justify-center">
//                     {feedback.videos.map((vid, i) => (
//                       <div key={i} className="relative">
//                         <video controls className="w-full rounded-md border shadow-sm h-32 bg-black">
//                           <source src={vid} type="video/mp4" />
//                           Your browser does not support the video tag.
//                         </video>
//                         <button type="button" onClick={() => removeVideo(i)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 transition-transform hover:scale-125">
//                           <X className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg mt-3 transition-colors"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   Submit Your Feedback
//                 </motion.button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ✅ Thank You Toast */}
//       <AnimatePresence>
//         {showToast && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-6 right-6 bg-green-500 text-white flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg z-50"
//           >
//             <CheckCircle className="w-6 h-6 text-white" />
//             <span className="font-medium">Thank you for your feedback! It has been recorded.</span>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Testimonials;
