
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function EnrollNow() {
//   const [loading, setLoading] = useState(false);
//   const [showCertificate, setShowCertificate] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setShowCertificate(true);
//     }, 2000); // fake 2s payment delay
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex flex-col items-center py-16 px-6">
//       {/* ===== Header Section ===== */}
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-[#7b1b1b] mb-6 text-center"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Enroll in Our Astrology Course
//       </motion.h1>
//       <p className="text-gray-700 text-lg md:text-xl max-w-2xl text-center mb-10">
//         Unlock the secrets of the stars with expert guidance. Learn astrology
//         from basics to advanced concepts and start your transformative journey
//         today!
//       </p>

//       {/* ===== Enrollment Form Card ===== */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-lg mx-auto relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400"
//       >
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <h2 className="text-2xl font-bold text-[#7b1b1b] mb-6 text-center">
//             Enroll & Pay Now
//           </h2>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Preferred Batch
//               </label>
//               <select className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none">
//                 <option>Morning Batch (9AM - 11AM)</option>
//                 <option>Afternoon Batch (2PM - 4PM)</option>
//                 <option>Evening Batch (7PM - 9PM)</option>
//               </select>
//             </div>

           

// <motion.div
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="w-full mt-4"
// >
//   <motion.Link
//     to={loading ? "#" : "/paymentpage"} // prevent navigation when loading
//     onClick={(e) => loading && e.preventDefault()} // block click if loading
//     className={`w-full bg-[#7b1b1b] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#601313] transition flex justify-center items-center ${
//       loading ? "cursor-not-allowed opacity-70" : ""
//     }`}
//   >
//     {loading ? (
//       <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//     ) : (
//       "Confirm & Pay"
//     )}
//   </motion.Link>
// </motion.div>

//           </form>
         
      
//         </div>
//       </motion.div>


//     </div>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function EnrollNow() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBlur = (e) => {
//     setTouched({ ...touched, [e.target.name]: true });
//   };

//   const validate = {
//     name: (v) => v.trim().length > 0,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFormValid) return;

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/paymentpage"); // Navigate programmatically after 2s
//     }, 2000);
//   };

//   const inputClass = (field) =>
//     `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition ${
//       touched[field] && !validate[field](formData[field])
//         ? "border-red-500"
//         : "border-gray-300"
//     }`;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex flex-col items-center py-16 px-6">
//       <motion.h1
//         className="text-4xl md:text-5xl font-bold text-[#7b1b1b] mb-6 text-center"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Enroll in Our Astrology Course
//       </motion.h1>

//       <p className="text-gray-700 text-lg md:text-xl max-w-2xl text-center mb-10">
//         Unlock the secrets of the stars with expert guidance. Learn astrology
//         from basics to advanced concepts and start your transformative journey
//         today!
//       </p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-lg mx-auto relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400"
//       >
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <h2 className="text-2xl font-bold text-[#7b1b1b] mb-6 text-center">
//             Enroll & Pay Now
//           </h2>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your full name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={inputClass("name")}
//               />
//               {touched.name && !validate.name(formData.name) && (
//                 <p className="text-red-500 text-xs mt-1">Name is required</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={inputClass("email")}
//               />
//               {touched.email && !validate.email(formData.email) && (
//                 <p className="text-red-500 text-xs mt-1">Enter a valid email</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={inputClass("phone")}
//               />
//               {touched.phone && !validate.phone(formData.phone) && (
//                 <p className="text-red-500 text-xs mt-1">
//                   Enter a valid 10-digit phone
//                 </p>
//               )}
//             </div>

//             {/* Batch */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Preferred Batch
//               </label>
//               <select
//                 name="batch"
//                 value={formData.batch}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
//               >
//                 <option>Morning Batch (9AM - 11AM)</option>
//                 <option>Afternoon Batch (2PM - 4PM)</option>
//                 <option>Evening Batch (7PM - 9PM)</option>
//               </select>
//             </div>

//             {/* Confirm & Pay */}
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               disabled={!isFormValid || loading}
//               className={`w-full py-3 rounded-xl font-semibold text-white transition flex justify-center items-center ${
//                 isFormValid && !loading
//                   ? "bg-[#7b1b1b] hover:bg-[#601313]"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               {loading ? (
//                 <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//               ) : (
//                 "Confirm & Pay"
//               )}
//             </motion.button>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// }









// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { User, Mail, Phone, Clock, DollarSign, CheckCircle, BookOpen, Smile } from "lucide-react";

// export default function EnrollNow() {
//   // NOTE: Assumes the component is wrapped in a <Router> in your final application.
//   // We are using the actual hook now.
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false); // New state for success feedback
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBlur = (e) => {
//     setTouched({ ...touched, [e.target.name]: true });
//   };

//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFormValid) return;

//     setLoading(true);
//     // Simulate API call delay before showing success and attempting navigation
//     setTimeout(() => {
//       setLoading(false);
//       // Show success state first for instant feedback
//       setIsEnrolled(true); 
      
//       // Attempt to navigate to the payment page after a small delay
//       // In a real app, this ensures the success message is seen briefly.
//       setTimeout(() => {
//         try {
//           navigate("/paymentpage");
//         } catch (error) {
//           // Fallback if navigate fails in isolated environment
//           console.error("Navigation failed (Router not found):", error.message);
//         }
//       }, 1000);
      
//     }, 2000);
//   };

//   const inputClass = (field) =>
//     `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
//       touched[field] && !validate[field](formData[field])
//         ? "border-red-500 bg-red-50"
//         : "border-gray-300 bg-gray-50 hover:border-orange-400"
//     }`;

//   const ErrorMessage = ({ field }) => {
//     if (touched[field] && !validate[field](formData[field])) {
//       let message = "";
//       if (field === "name") message = "Please enter your full name (at least 3 characters).";
//       if (field === "email") message = "Please enter a valid email address.";
//       if (field === "phone") message = "Please enter a valid 10-digit phone number.";
//       return <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-600 text-xs mt-1 font-medium">{message}</motion.p>;
//     }
//     return null;
//   };
  
//   const courseDetails = {
//     title: "Vedic Astrology Masterclass",
//     price: 4999,
//     originalPrice: 9999,
//     duration: "4 Weeks Live Classes",
//     benefits: [
//         "Lifetime Access to Recordings",
//         "Official Course Completion Certificate",
//         "1:1 Mentorship Session with a Guru",
//         "Downloadable Study Materials (PDFs)",
//     ]
//   };
  
//   // Success Screen Component
//   const SuccessScreen = () => (
//       <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }} 
//           animate={{ scale: 1, opacity: 1 }} 
//           className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl"
//       >
//           <Smile size={64} className="text-green-500 mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Successful!</h2>
//           <p className="text-gray-600 mb-6">
//               You are being redirected to the secure payment page now...
//           </p>
//           <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-sm text-gray-500">
//               (If redirection fails, check your console for debug information.)
//           </p>
//       </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         {/* Header */}
//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//             {isEnrolled ? "Thank You!" : "Complete Your Enrollment"}
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//             {isEnrolled ? "We're excited to welcome you to the Masterclass!" : `Secure your seat for the ${courseDetails.title} and begin your spiritual journey.`}
//         </p>
        
//         {isEnrolled ? (
//             <SuccessScreen />
//         ) : (
            
//         /* Content Grid (Two Columns) */
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//             {/* Left Column: Course Summary & Benefits */}
//             <motion.div 
//                 initial={{ x: -50, opacity: 0 }} 
//                 animate={{ x: 0, opacity: 1 }} 
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col"
//             >
//                 <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                     <BookOpen className="text-yellow-600" size={24} /> Course Details
//                 </h2>

//                 <div className="space-y-3 mb-6">
//                     <div className="flex justify-between items-center text-lg">
//                         <span className="text-gray-600 font-medium">Duration:</span>
//                         <span className="font-semibold text-orange-700">{courseDetails.duration}</span>
//                     </div>
//                     <div className="flex justify-between items-center text-lg border-t pt-3">
//                         <span className="text-gray-600 font-medium">Actual Price:</span>
//                         <span className="line-through text-gray-400">₹{courseDetails.originalPrice.toLocaleString('en-IN')}</span>
//                     </div>
//                     <div className="flex justify-between items-center text-3xl font-extrabold pt-2">
//                         <span className="text-orange-900">Today's Price:</span>
//                         <span className="text-red-600">₹{courseDetails.price.toLocaleString('en-IN')}</span>
//                     </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-orange-800 mt-4 mb-3">What You Get:</h3>
//                 <ul className="space-y-3 flex-grow">
//                     {courseDetails.benefits.map((benefit, index) => (
//                         <li key={index} className="flex items-start gap-3 text-gray-700">
//                             <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
//                             <span>{benefit}</span>
//                         </li>
//                     ))}
//                 </ul>
                
//                 <p className="mt-6 text-sm text-gray-500 italic text-center border-t pt-4">
//                     * Limited spots available. Enrollment is confirmed upon successful payment.
//                 </p>
//             </motion.div>

//             {/* Right Column: Enrollment Form */}
//             <motion.div
//                 initial={{ x: 50, opacity: 0 }} 
//                 animate={{ x: 0, opacity: 1 }} 
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
//             >
//                 <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
//                     Personal Details
//                 </h2>
//                 <form className="space-y-6" onSubmit={handleSubmit}>
                    
//                     {/* Full Name */}
//                     <div className="relative">
//                         <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
//                         <User size={20} className="absolute left-4 top-11 text-gray-400" />
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Enter your full name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={inputClass("name")}
//                         />
//                         <ErrorMessage field="name" />
//                     </div>

//                     {/* Email */}
//                     <div className="relative">
//                         <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
//                         <Mail size={20} className="absolute left-4 top-11 text-gray-400" />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={inputClass("email")}
//                         />
//                         <ErrorMessage field="email" />
//                     </div>

//                     {/* Phone */}
//                     <div className="relative">
//                         <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
//                         <Phone size={20} className="absolute left-4 top-11 text-gray-400" />
//                         <input
//                             type="tel"
//                             name="phone"
//                             placeholder="Enter your 10-digit phone number"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             className={inputClass("phone")}
//                         />
//                         <ErrorMessage field="phone" />
//                     </div>

//                     {/* Batch */}
//                     <div className="relative">
//                         <label className="block text-gray-700 font-semibold mb-1">Preferred Batch</label>
//                         <Clock size={20} className="absolute left-4 top-11 text-gray-400" />
//                         <select
//                             name="batch"
//                             value={formData.batch}
//                             onChange={handleChange}
//                             className="w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none appearance-none bg-gray-50 border-gray-300 hover:border-orange-400 text-gray-800 font-medium"
//                         >
//                             <option>Morning Batch (9AM - 11AM)</option>
//                             <option>Afternoon Batch (2PM - 4PM)</option>
//                             <option>Evening Batch (7PM - 9PM)</option>
//                         </select>
//                         <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.5 }} className="absolute right-4 top-11 text-gray-400 pointer-events-none">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//                         </motion.div>
//                     </div>

//                     {/* Confirm & Pay Button */}
//                     <motion.button
//                         type="submit"
//                         whileHover={{ scale: 1.01 }}
//                         whileTap={{ scale: 0.98 }}
//                         disabled={!isFormValid || loading}
//                         className={`w-full py-4 rounded-xl font-bold text-white transition shadow-lg mt-8 flex justify-center items-center gap-3 ${
//                             isFormValid && !loading
//                                 ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
//                                 : "bg-gray-400 cursor-not-allowed"
//                         }`}
//                     >
//                         <DollarSign size={20} />
//                         {loading ? (
//                             <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                         ) : (
//                             `Proceed to Secure Payment (₹${courseDetails.price.toLocaleString('en-IN')})`
//                         )}
//                     </motion.button>
//                 </form>
//             </motion.div>
//         </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }



// import React, { useState, useMemo } from "react";
// import { PlayCircle, Heart, Search, Star, ChevronDown, Filter, DollarSign, BookOpen, User, Mail, Phone, Clock, CheckCircle, Smile, ArrowLeft, Loader2 } from "lucide-react"; 
// import { motion } from "framer-motion";
// import {Link} from 'react-router-dom'


// // Load Tailwind CSS for styling
// // Note: Tailwind CSS is assumed to be available in this environment.

// // --- Static Data for All 16 Core Courses (Updated with Enrollment Details) ---
// const staticCourses = [
//   { id: 1, title: "Vedic Astrology", headline: "Decode the Secrets of Your Kundali through Ancient Jyotish", price: 5999, originalPrice: 12000, duration: "8 Weeks Live", benefits: ["Lifetime Access to Recordings", "Official Certificate", "1:1 Mentorship Session", "Downloadable Study Materials (PDFs)"], rating: 5.0, faculty: "Acharya Devi", isRecommended: true, category: "Astrology", tag: "Best Seller", thumbnail: "./Vedic_Astrology_Course_Instructor.mp4" },
//   { id: 2, title: "Palmistry (Hastrekha)", headline: "Your Destiny Lies in Your Hands – Learn the Art of Palmistry", price: 2499, originalPrice: 5000, duration: "4 Weeks Self-Paced", benefits: ["Lifetime Access", "Official Certificate", "Practice Handouts"], rating: 4.8, faculty: "Guru Gopal", isRecommended: true, category: "Astrology", tag: "New", thumbnail: "https://placehold.co/600x350/e8f5e9/388e3c?text=Hands+of+Destiny" },
//   { id: 3, title: "Numerology", headline: "Numbers Don’t Lie – Unlock Destiny Through Moolank & Bhagyank", price: 1999, originalPrice: 4000, duration: "3 Weeks Online", benefits: ["Lifetime Access", "Official Certificate", "Numeroscope Calculator"], rating: 4.7, faculty: "Acharya Devi", isRecommended: false, category: "Astrology", tag: "Popular", thumbnail: "https://placehold.co/600x350/e3f2fd/1976d2?text=Power+of+Numbers" },
//   { id: 4, title: "Vastu Shastra", headline: "Balance Your Space, Balance Your Life with Vastu", price: 3499, originalPrice: 7000, duration: "6 Weeks Live + Case Studies", benefits: ["Lifetime Access", "Official Certificate", "Vastu Audit Checklist", "Expert Q&A"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Vastu & Space", tag: "Trending", thumbnail: "https://placehold.co/600x350/fff3e0/ff9800?text=Vastu+Harmony" },
//   { id: 5, title: "Sanskrit Vyakarana", headline: "Master the Grammar of Devabhasha – Sanskrit from the Roots", price: 999, originalPrice: 2000, duration: "4 Weeks Foundational", benefits: ["Lifetime Access", "Official Certificate", "Vocabulary Flashcards"], rating: 4.5, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/f3e5f5/9c27b0?text=Sanskrit+Grammar" },
//   { id: 6, title: "Daily Puja Routine", headline: "Learn Nitya Puja – Step-by-Step Rituals for Modern Life", price: 1499, originalPrice: 3000, duration: "2 Weeks Quick Start", benefits: ["Lifetime Access", "Official Certificate", "Puja Mantras Guide"], rating: 4.6, faculty: "Guru Gopal", isRecommended: false, category: "Mantra & Rituals", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/e0f7fa/00bcd4?text=Nitya+Puja" },
//   { id: 7, title: "Muhurtas", headline: "Right Time, Right Action – Science of Shubh Muhurta", price: 2999, originalPrice: 6000, duration: "5 Weeks Specialist", benefits: ["Lifetime Access", "Official Certificate", "Muhurta Calculation Software Access"], rating: 4.8, faculty: "Dr. Sharma", isRecommended: true, category: "Astrology", tag: "Specialist", thumbnail: "https://placehold.co/600x350/fbe9e7/ff5722?text=Shubh+Muhurta" },
//   { id: 8, title: "Upanishads", headline: "Dive Deep into the Philosophy of Self & Brahman", price: 4999, originalPrice: 10000, duration: "8 Weeks Philosophical", benefits: ["Lifetime Access", "Official Certificate", "Weekly Discussion Forums", "Detailed Commentary"], rating: 5.0, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Deep Dive", thumbnail: "https://placehold.co/600x350/f0f4c3/827717?text=Self+Knowledge" },
//   { id: 9, title: "Vedas", headline: "Foundations of Eternal Knowledge – Study Rig, Yajur, Sama, Atharva", price: 6999, originalPrice: 15000, duration: "12 Weeks Comprehensive", benefits: ["Lifetime Access", "Official Certificate", "1:1 Mentorship Session", "Complete Digital Text Library"], rating: 4.9, faculty: "Acharya Devi", isRecommended: false, category: "Philosophy", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e1f5fe/01579b?text=Vedic+Scriptures" },
//   { id: 10, title: "Purana & Itihas", headline: "Decode Ramayana, Mahabharata & the Puranas with Context", price: 1999, originalPrice: 4000, duration: "4 Weeks Historical", benefits: ["Lifetime Access", "Official Certificate", "Mythological Timelines"], rating: 4.7, faculty: "Guru Gopal", isRecommended: false, category: "History & Culture", tag: "History", thumbnail: "https://placehold.co/600x350/fce4ec/e91e63?text=Ancient+Epics" },
//   { id: 11, title: "Vedic Mathematics", headline: "Ancient Maths Tricks for Fast Calculation & Logical Thinking", price: 999, originalPrice: 2000, duration: "3 Weeks Skills Course", benefits: ["Lifetime Access", "Official Certificate", "Practice Worksheets"], rating: 4.5, faculty: "Dr. Sharma", isRecommended: false, category: "Science & Logic", tag: "Low Price", thumbnail: "https://placehold.co/600x350/e0f2f1/00897b?text=Fast+Maths" },
//   { id: 12, title: "Mantra Healing", headline: "Heal Body, Mind & Soul Through Beej Mantras & Frequencies", price: 3999, originalPrice: 8000, duration: "6 Weeks Therapeutic", benefits: ["Lifetime Access", "Official Certificate", "Personalised Mantra Recommendation"], rating: 4.8, faculty: "Acharya Devi", isRecommended: true, category: "Mantra & Rituals", tag: "Healing", thumbnail: "https://placehold.co/600x350/f9fbe7/afb42b?text=Beej+Mantra" },
//   { id: 13, title: "Sanskrit (Reading + Chanting)", headline: "Speak the Language of the Gods – Chant with Clarity", price: 1499, originalPrice: 3000, duration: "4 Weeks Practice", benefits: ["Lifetime Access", "Official Certificate", "Pronunciation Guide Audio"], rating: 4.6, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/f0f8ff/4a90e2?text=Chanting+Practice" },
//   { id: 14, title: "Sacred Texts Reading", headline: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.", price: 999, originalPrice: 2000, duration: "2 Weeks Focused", benefits: ["Lifetime Access", "Official Certificate", "Annotated Text PDFs"], rating: 4.4, faculty: "Guru Gopal", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/fff8e1/ffa000?text=Sacred+Reading" },
//   { id: 15, title: "Vedic Science", headline: "Hidden Scientific Concepts in Agni, Ether, Time & Creation", price: 4999, originalPrice: 10000, duration: "7 Weeks Advanced", benefits: ["Lifetime Access", "Official Certificate", "Science vs Text Comparison"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Science & Logic", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e8f5e9/43a047?text=Ancient+Science" },
//   { id: 16, title: "Vedic Philosophy", headline: "Understand Karma, Dharma, Rebirth, Moksha from Vedic Lens", price: 2999, originalPrice: 6000, duration: "5 Weeks Foundation", benefits: ["Lifetime Access", "Official Certificate", "Key Sutra Summaries"], rating: 4.8, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Foundation", thumbnail: "https://placehold.co/600x350/f3e5f5/ab47bc?text=Dharma+Moksha" },
// ];

// const categories = ["All", "Astrology", "Mantra & Rituals", "Vastu & Space", "Philosophy", "Language & Texts", "Science & Logic", "History & Culture", "Wellbeing"];

// // Create a large pool of courses, ensuring the 16 static ones are at the beginning
// const totalCourses = 26;
// const allCourses = [
//   ...staticCourses,
//   ...Array.from({ length: totalCourses - staticCourses.length }).map((_, i) => ({
//     id: i + 17,
//     title: `Yoga Nidra and Meditation ${i + 17}`,
//     headline: `Find inner peace and clarity with guided practice.`,
//     price: 99 + (i * 100),
//     originalPrice: 500 + (i * 100),
//     duration: "2 Weeks On-Demand",
//     benefits: ["Lifetime Access", "Audio Guides"],
//     rating: 3.5 + (i % 10) / 10,
//     faculty: `Faculty F-${(i % 5) + 1}`,
//     isRecommended: false,
//     category: "Wellbeing",
//     tag: "General",
//     thumbnail: `https://placehold.co/600x350/seed/kundli-${i + 17}/600/350`,
//     
//   }))
// ];

// const getPriceDisplay = (price) => {
//   if (price === 0) return "FREE";
//   return `₹${price.toLocaleString('en-IN')}`;
// }

// // =========================================================================
// // 1. Course Card Component
// // =========================================================================
// const CourseCard = ({ course, toggleWishlist, isWishlisted, onEnrollClick }) => {
//     // The original code had a conditional check for a video ending in '.mp4'.
//     // Since none of the current static data URLs end in .mp4, we will simplify
//     // to image-only for stability in this single-file environment, using a placeholder.
//     // If a user updates the thumbnail URL to end with .mp4, the video logic would work.
//     // For the purposes of resolving the error and completing the component, we'll keep the
//     // conditional structure but use a safe image for the first course.

//     const isThumbnailVideo = course.thumbnail.toLowerCase().endsWith('.mp4');

//     const thumbnailContent = isThumbnailVideo ? (
//         <video 
//             src={course.thumbnail}
//             alt={course.title}
//             className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//             autoPlay 
//             loop 
//             muted 
//             playsInline
//             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder"; e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder" alt="${course.title}" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />`; }}
//         />
//     ) : (
//         <img
//             src={course.thumbnail}
//             alt={course.title}
//             className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/cccccc/333333?text=Image+Error"; }}
//         />
//     );


//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="relative group rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform duration-300 h-full flex flex-col"
//     >
//       {/* Wishlist Button */}
//       <motion.button
//         whileTap={{ scale: 0.9 }}
//         onClick={() => toggleWishlist(course.id)}
//         className="absolute right-5 top-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
//       >
//         {isWishlisted ? (
//           <Heart className="text-red-500 fill-red-500" size={20} />
//         ) : (
//           <Heart className="text-gray-400" size={20} />
//         )}
//       </motion.button>

//       {/* Thumbnail */}
//       <div className="relative overflow-hidden">
//         {thumbnailContent}
//         <div className={`absolute left-4 bottom-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md ${course.isRecommended ? 'bg-green-600' : ''}`}>
//           {course.tag || course.category}
//         </div>
//       </div>

//       <div className="p-6 flex-grow flex flex-col">
//         <h4 className="font-bold text-xl text-orange-700 mb-2">
//           {course.title}
//         </h4>
//         <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-4">{course.headline}</p>

//         {/* Rating and Faculty */}
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4">
//           <div className="flex items-center gap-1 text-yellow-500 font-bold">
//             <Star size={16} fill="currentColor" /> {Number(course.rating).toFixed(1)}
//           </div>
//           <div className="text-sm text-gray-500">
//             By <span className="font-medium text-orange-600">{course.faculty}</span>
//           </div>
//         </div>

//         {/* Price and Enrollment Button */}
//         <div className="flex items-center justify-between mt-auto">
//           <div className="font-extrabold text-2xl text-orange-800">
//             {getPriceDisplay(course.price)}
//           </div>
//           <button 
//             onClick={() => onEnrollClick(course)}
//             className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.02]">
//             ENROLL
//           </button>
//         </div>
//       </div>
//     </motion.article>
//   );
// };


// // =========================================================================
// // 2. Courses Page Component
// // =========================================================================
// const CoursesPage = ({ onEnrollClick }) => {
//   const [visible, setVisible] = useState(12);
//   const [sortBy, setSortBy] = useState("recommended");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceFilter, setPriceFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [wishlist, setWishlist] = useState([]);

//   // Wishlist toggle
//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
//     );
//   };

//   // Memoized filtering and sorting logic
//   const sorted = useMemo(() => {
//     let currentFilteredCourses = allCourses.filter((c) => {
//       // 1. Search Filter
//       const searchMatch =
//         c.title.toLowerCase().includes(search.toLowerCase()) ||
//         c.faculty.toLowerCase().includes(search.toLowerCase()) ||
//         c.headline.toLowerCase().includes(search.toLowerCase());

//       if (!searchMatch) return false;

//       // 2. Category Filter
//       if (categoryFilter !== "All" && c.category !== categoryFilter) return false;

//       // 3. Price Filter
//       if (priceFilter === "Free" && c.price > 0) return false;
//       if (priceFilter === "Under_1000" && (c.price <= 0 || c.price > 1000)) return false;
//       if (priceFilter === "1000_3000" && (c.price <= 1000 || c.price > 3000)) return false;
//       if (priceFilter === "Over_3000" && c.price <= 3000) return false;

//       return true;
//     });

//     // --- Sorting Logic ---
//     return [...currentFilteredCourses].sort((a, b) => {
//       // 1. Always prioritize "Vedic Astrology" to show in front if it passes filters
//       if (a.title === "Vedic Astrology") return -1;
//       if (b.title === "Vedic Astrology") return 1;

//       // 2. Apply chosen sort method
//       if (sortBy === "ratingHigh") return b.rating - a.rating;
//       if (sortBy === "ratingLow") return a.rating - b.rating;
//       if (sortBy === "priceHigh") return b.price - a.price;
//       if (sortBy === "priceLow") return a.price - b.price;
//       if (sortBy === "newest") return b.id - a.id;
//       if (sortBy === "recommended") return b.isRecommended - a.isRecommended;

//       return a.id - b.id; // Default fallback
//     });
//   }, [search, categoryFilter, priceFilter, sortBy]);
//   
//   const loadMore = () => setVisible((v) => Math.min(v + 12, sorted.length));
//   const resetFilters = () => {
//     setSearch("");
//     setCategoryFilter("All");
//     setPriceFilter("All");
//     setSortBy("recommended");
//     setVisible(12);
//   };

//     // Fallback for the featured course media (assuming the first course is featured)
//     const featuredCourse = allCourses[0];
//     const isFeaturedVideo = featuredCourse.thumbnail.toLowerCase().endsWith('.mp4');
//     const featuredMediaContent = isFeaturedVideo ? (
//         <video
//             src={featuredCourse.thumbnail}
//             alt="Featured Course Video"
//             className="w-full h-[300px] md:h-[420px] object-cover object-top"
//             autoPlay
//             loop
//             muted
//             playsInline
//             onError={(e) => {
//                 e.target.onerror = null; 
//                 e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x420/ffefe1/b45309?text=Featured+Image+Placeholder" alt="Featured Course Image" className="w-full h-[300px] md:h-[420px] object-cover object-top" />`;
//             }}
//         />
//     ) : (
//         <img
//             src={featuredCourse.thumbnail}
//             alt="Featured Course Image"
//             className="w-full h-[300px] md:h-[420px] object-cover object-top"
//             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x420/cccccc/333333?text=Image+Error"; }}
//         />
//     );


//   return (
//     <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-lg py-12 text-center text-white">
//         <h1 className="text-4xl md:text-5xl font-extrabold font-serif">
//           🪔 Explore All {allCourses.length} Courses
//         </h1>
//         <p className="text-lg mt-3 opacity-90 max-w-2xl mx-auto">
//           Deepen your spiritual and analytical mastery across Jyotish, Vastu, Philosophy, and Sacred Texts.
//         </p>
//       </header>

//       {/* Featured Course Section (using the prioritized course) */}
//       <section className="relative max-w-7xl mx-auto mt-16 px-6">
//         <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
//           🔥 Featured Masterclass: Vedic Astrology
//         </h2>
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-yellow-400/80"
//         >
//           <div className="relative">
//             {featuredMediaContent}
//             <button 
//                 onClick={() => onEnrollClick(featuredCourse)}
//                 className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
//               <PlayCircle size={70} className="text-white drop-shadow-lg" />
//             </button>
//           </div>
//           <div className="p-6 md:p-8 bg-orange-50">
//             <h3 className="text-3xl font-bold text-orange-800">
//               {featuredCourse.title}
//             </h3>
//             <p className="text-gray-700 mt-2 text-lg">
//               {featuredCourse.headline}
//             </p>
//             <div className="mt-4 flex flex-wrap gap-4 items-center">
//               <span className="text-2xl font-extrabold text-orange-900">
//                 {getPriceDisplay(featuredCourse.price)}
//               </span>
//               <span className="flex items-center gap-1 text-yellow-600 font-bold">
//                 <Star size={20} fill="currentColor" /> {featuredCourse.rating.toFixed(1)} Rating
//               </span>
//               <Link to="/CoursedetailsPage"
// //                 onClick={() => onEnrollClick(featuredCourse)}
//                 className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition">
//                 VIEW DETAILS
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Filter and Course Grid */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-orange-700">
//             📚 Browse All Offerings ({sorted.length} Results)
//           </h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Showing {Math.min(visible, sorted.length)} courses
//           </p>
//         </div>

//         {/* --- Advanced Filter Bar --- */}
//         <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg mb-12 border border-orange-200">
//           <h4 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
//             <Filter size={20} /> Course Filters
//           </h4>
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             
//             {/* 1. Search Input */}
//             <div className="relative w-full md:w-1/3">
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search by title, topic, or faculty..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//               />
//             </div>

//             {/* 2. Category Filter */}
//             <div className="relative w-full md:w-1/4">
//               <BookOpen className="absolute left-3 top-2.5 text-gray-400" size={18} />
//               <select
//                 value={categoryFilter}
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 className="appearance-none border border-gray-300 bg-white rounded-xl px-10 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50 w-full"
//               >
//                 <option value="All">All Categories</option>
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//               <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//             </div>
//             
//             {/* 3. Pricing Filter */}
//             <div className="relative w-full md:w-1/4">
//               <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={18} />
//               <select
//                 value={priceFilter}
//                 onChange={(e) => setPriceFilter(e.target.value)}
//                 className="appearance-none border border-gray-300 bg-white rounded-xl px-10 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50 w-full"
//               >
//                 <option value="All">Any Price</option>
//                 <option value="Free">Free</option>
//                 <option value="Under_1000">Under ₹1,000</option>
//                 <option value="1000_3000">₹1,000 - ₹3,000</option>
//                 <option value="Over_3000">Over ₹3,000</option>
//               </select>
//               <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//             </div>

//             {/* 4. Sort By Dropdown (Updated Design) */}
//             <div className="relative w-full md:w-1/4">
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className={`appearance-none border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium cursor-pointer focus:ring-2 focus:ring-orange-400 transition w-full ${sortBy === 'recommended' ? 'bg-yellow-100 text-orange-700 font-bold' : 'bg-white text-gray-700 hover:bg-orange-50'}`}
//               >
//                 <option value="recommended">⭐ Recommended For You</option>
//                 <option value="ratingHigh">Rating: High to Low</option>
//                 <option value="priceLow">Price: Low to High</option>
//                 <option value="priceHigh">Price: High to Low</option>
//                 <option value="newest">Newest Courses</option>
//               </select>
//               <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//             </div>
//           </div>
//           
//           <div className="mt-4 text-right">
//             <button 
//               onClick={resetFilters}
//               className="text-sm text-gray-500 hover:text-orange-600 transition underline"
//             >
//               Reset All Filters
//             </button>
//           </div>
//         </div>

//         {/* --- Course Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {sorted.slice(0, visible).map((c) => (
//             <CourseCard 
//               key={c.id} 
//               course={c} 
//               toggleWishlist={toggleWishlist} 
//               isWishlisted={wishlist.includes(c.id)} 
//               onEnrollClick={onEnrollClick} // Pass the handler down
//             />
//           ))}
//           {sorted.length === 0 && (
//             <div className="lg:col-span-3 text-center py-10 bg-orange-100/50 rounded-xl">
//               <p className="text-xl font-semibold text-orange-700">No courses found matching your filters.</p>
//               <p className="text-gray-600 mt-2">Try adjusting your search terms or filters above.</p>
//             </div>
//           )}
//         </div>

//         {visible < sorted.length && (
//           <div className="mt-16 flex justify-center">
//             <button
//               onClick={loadMore}
//               className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.05]"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-yellow-200 to-orange-100 py-8 text-center text-gray-700 text-sm mt-12">
//         <p>✨ Made with spiritual energy and code | Kundli Academy 2025</p>
//       </footer>
//     </div>
//   );
// }


// // =========================================================================
// // 3. Enrollment Page Component
// // =========================================================================
// const EnrollPage = ({ course, onBackToCourses }) => {
//   // Default course details for safety if prop is missing (should not happen in this flow)
//   const defaultCourse = {
//     title: "Unknown Course",
//     price: 0,
//     originalPrice: 0,
//     duration: "N/A",
//     benefits: ["No Benefits Listed"],
//   };
//   
//   const courseData = course || defaultCourse;

//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBlur = (e) => {
//     setTouched({ ...touched, [e.target.name]: true });
//   };

//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFormValid) return;

//     setLoading(true);
//     // Simulate API call delay
//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true); 
//       
//       // In this environment, we simulate redirecting back to the course list
//       setTimeout(() => {
//         console.log("Simulating navigation to Payment Page for:", courseData.title);
//         onBackToCourses(); 
//       }, 2000);
//       
//     }, 2000);
//   };

//   const inputClass = (field) =>
//     `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
//       touched[field] && !validate[field](formData[field])
//         ? "border-red-500 bg-red-50"
//         : "border-gray-300 bg-gray-50 hover:border-orange-400"
//     }`;

//   const ErrorMessage = ({ field }) => {
//     if (touched[field] && !validate[field](formData[field])) {
//       let message = "";
//       if (field === "name") message = "Please enter your full name (at least 3 characters).";
//       if (field === "email") message = "Please enter a valid email address.";
//       if (field === "phone") message = "Please enter a valid 10-digit phone number.";
//       return <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-600 text-xs mt-1 font-medium">{message}</motion.p>;
//     }
//     return null;
//   };
//   
//   // Success Screen Component
//   const SuccessScreen = () => (
//       <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }} 
//           animate={{ scale: 1, opacity: 1 }} 
//           className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl"
//       >
//           <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Request Successful!</h2>
//           <p className="text-gray-600 mb-6">
//               You are being processed for payment for the **{courseData.title}** course...
//           </p>
//           <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-sm text-gray-500">
//               Redirecting you back to the course list shortly.
//           </p>
//       </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         {/* Back Button */}
//         <button
//           onClick={onBackToCourses}
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to All Courses
//         </button>

//         {/* Header */}
//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//             {isEnrolled ? "Thank You!" : `Enroll in: ${courseData.title}`}
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//             {isEnrolled ? "We're excited to welcome you to the Masterclass!" : `Secure your seat and begin your spiritual journey with the ${courseData.title}.`}
//         </p>
//         
//         {isEnrolled ? (
//             <SuccessScreen />
//         ) : (
//             
//         /* Content Grid (Two Columns) */
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//             {/* Left Column: Course Summary & Benefits (Dynamic Content) */}
//             <motion.div 
//                 initial={{ x: -50, opacity: 0 }} 
//                 animate={{ x: 0, opacity: 1 }} 
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col"
//             >
//                 <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                     <BookOpen className="text-yellow-600" size={24} /> Course Details
//                 </h2>

//                 <div className="space-y-3 mb-6">
//                     <div className="flex justify-between items-center text-lg">
//                         <span className="text-gray-600 font-medium">Duration:</span>
//                         <span className="font-semibold text-orange-700">{courseData.duration}</span>
//                     </div>
//                     <div className="flex justify-between items-center text-lg border-t pt-3">
//                         <span className="text-gray-600 font-medium">Actual Price:</span>
//                         <span className="line-through text-gray-400">₹{courseData.originalPrice.toLocaleString('en-IN')}</span>
//                     </div>
//                     <div className="flex justify-between items-center text-3xl font-extrabold pt-2">
//                         <span className="text-orange-900">Today's Price:</span>
//                         <span className="text-red-600">{getPriceDisplay(courseData.price)}</span>
//                     </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-orange-800 mt-4 mb-3">What You Get:</h3>
//                 <ul className="space-y-3 flex-grow">
//                     {courseData.benefits.map((benefit, index) => (
//                         <li key={index} className="flex items-start gap-3 text-gray-700">
//                             <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
//                             <span>{benefit}</span>
//                         </li>
//                     ))}
//                 </ul>
//                 
//                 <p className="mt-6 text-sm text-gray-500 italic text-center border-t pt-4">
//                     Note: Enrollment is subject to availability. Book quickly!
//                 </p>
//             </motion.div>

//             {/* Right Column: Enrollment Form (Completed logic) */}
//             <motion.div
//                 initial={{ x: 50, opacity: 0 }} 
//                 animate={{ x: 0, opacity: 1 }} 
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="p-8 rounded-2xl bg-white shadow-xl border border-gray-200"
//             >
//                 <h2 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-2">
//                     <User className="text-yellow-600" size={24} /> Your Enrollment Details
//                 </h2>
//                 
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Name Input */}
//                     <div>
//                         <div className="relative">
//                             <User size={20} className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" />
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Full Name (as per ID)"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 className={inputClass("name")}
//                                 required
//                             />
//                         </div>
//                         <ErrorMessage field="name" />
//                     </div>

//                     {/* Email Input */}
//                     <div>
//                         <div className="relative">
//                             <Mail size={20} className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email Address"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 className={inputClass("email")}
//                                 required
//                             />
//                         </div>
//                         <ErrorMessage field="email" />
//                     </div>

//                     {/* Phone Input */}
//                     <div>
//                         <div className="relative">
//                             <Phone size={20} className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="10-digit Mobile Number"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 className={inputClass("phone")}
//                                 required
//                             />
//                         </div>
//                         <ErrorMessage field="phone" />
//                     </div>

//                     {/* Batch Selection */}
//                     <div className="mt-4">
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Select Preferred Batch:</label>
//                         <div className="relative">
//                             <Clock size={20} className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" />
//                             <select
//                                 name="batch"
//                                 value={formData.batch}
//                                 onChange={handleChange}
//                                 className="appearance-none w-full px-4 py-3 pl-12 border border-gray-300 bg-gray-50 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium cursor-pointer pr-10"
//                             >
//                                 <option value="Morning Batch (9AM - 11AM)">Morning Batch (9AM - 11AM IST)</option>
//                                 <option value="Evening Batch (6PM - 8PM)">Evening Batch (6PM - 8PM IST)</option>
//                                 <option value="Self-Paced">Self-Paced (On-Demand)</option>
//                             </select>
//                             <ChevronDown size={18} className="absolute right-3 top-3.5 text-gray-500 pointer-events-none" />
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//         <Link to="/PaymentPage">
//                     <motion.button
//                         type="submit"
//                         disabled={!isFormValid || loading}
//                         whileTap={{ scale: 0.98 }}
//                         className={`w-full py-3.5 rounded-full font-bold text-lg shadow-xl transition-all flex justify-center items-center gap-2 ${
//                             !isFormValid || loading
//                             ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                             : "bg-gradient-to-r from-orange-600 to-yellow-500 text-white hover:from-orange-700 hover:to-yellow-600 hover:shadow-2xl"
//                         }`}
//                     >
//                         {loading && <Loader2 className="animate-spin" size={20} />}
//                         {loading ? "Processing..." : `CONFIRM ENROLLMENT (${getPriceDisplay(courseData.price)})`}
//                     </motion.button>
// </Link>
//                 </form>
//                 
//                 <p className="text-center text-xs text-gray-500 mt-6">
//                     By clicking confirm, you agree to our Terms & Conditions. You will be redirected to the secure payment gateway.
//                 </p>
//             </motion.div>
//         </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// // =========================================================================
// // 4. Main Application Component (Handles Routing/State)
// // =========================================================================

// const SCREENS = {
//     COURSES: 'courses',
//     ENROLLMENT: 'enrollment',
// }

// const App = () => {
//     const [screen, setScreen] = useState(SCREENS.COURSES);
//     const [selectedCourse, setSelectedCourse] = useState(null);

//     const handleEnrollClick = (course) => {
//         setSelectedCourse(course);
//         setScreen(SCREENS.ENROLLMENT);
//         // Scroll to top for a better page transition experience
//         window.scrollTo(0, 0); 
//     };

//     const handleBackToCourses = () => {
//         setScreen(SCREENS.COURSES);
//         setSelectedCourse(null);
//         // Scroll to top for a better page transition experience
//         window.scrollTo(0, 0); 
//     };

//     const renderScreen = () => {
//         switch (screen) {
//             case SCREENS.ENROLLMENT:
//                 // Pass the selected course data and the back button handler
//                 return <EnrollPage course={selectedCourse} onBackToCourses={handleBackToCourses} />;
//             case SCREENS.COURSES:
//             default:
//                 // Pass the enrollment handler to the CoursesPage
//                 return <CoursesPage onEnrollClick={handleEnrollClick} />;
//         }
//     }

//     return (
//         <div className="App">
//             {renderScreen()}
//         </div>
//     );
// };

// export default App;







import React, { useState, useMemo, useRef } from "react";
import { PlayCircle, Heart, Search, Star, ChevronDown, Filter, BookOpen, User, Mail, Phone, Clock, CheckCircle, Smile, ArrowLeft, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'
// Note: We are not using 'react-router-dom' (Link) in this single file for deployment stability.
// All navigation is handled via state props (onEnrollClick, onViewDetailsClick, onBackToCourses).

// --- Static Data for All 16 Core Courses (Updated with Faculty Images) ---
// Note: Using a deterministic placeholder URL for faculty images
const getFacultyImageUrl = (name) => {
    // A simple, predictable placeholder based on the first letter of the name
    const seed = name.split(' ')[0].charCodeAt(0) % 20; 
    return `https://i.pravatar.cc/150?img=${seed + 1}`; 
};

const staticCourses = [
  { id: 1, title: "Vedic Astrology", headline: "Decode the Secrets of Your Kundali through Ancient Jyotish", price: 5999, originalPrice: 12000, duration: "8 Weeks Live", benefits: ["Lifetime Access to Recordings", "Official Certificate", "1:1 Mentorship Session", "Downloadable Study Materials (PDFs)"], rating: 5.0, faculty: "Acharya Devi", isRecommended: true, category: "Astrology", tag: "Best Seller", thumbnail: "./Vedic_Astrology_Course_Instructor.mp4", facultyImage: getFacultyImageUrl("Acharya Devi") },
  { id: 2, title: "Palmistry (Hastrekha)", headline: "Your Destiny Lies in Your Hands – Learn the Art of Palmistry", price: 2499, originalPrice: 5000, duration: "4 Weeks Self-Paced", benefits: ["Lifetime Access", "Official Certificate", "Practice Handouts"], rating: 4.8, faculty: "Guru Gopal", isRecommended: true, category: "Astrology", tag: "New", thumbnail: "https://placehold.co/600x350/e8f5e9/388e3c?text=Hands+of+Destiny", facultyImage: getFacultyImageUrl("Guru Gopal") },
  { id: 3, title: "Numerology", headline: "Numbers Don’t Lie – Unlock Destiny Through Moolank & Bhagyank", price: 1999, originalPrice: 4000, duration: "3 Weeks Online", benefits: ["Lifetime Access", "Official Certificate", "Numeroscope Calculator"], rating: 4.7, faculty: "Acharya Devi", isRecommended: false, category: "Astrology", tag: "Popular", thumbnail: "https://placehold.co/600x350/e3f2fd/1976d2?text=Power+of+Numbers", facultyImage: getFacultyImageUrl("Acharya Devi") },
  { id: 4, title: "Vastu Shastra", headline: "Balance Your Space, Balance Your Life with Vastu", price: 3499, originalPrice: 7000, duration: "6 Weeks Live + Case Studies", benefits: ["Lifetime Access", "Official Certificate", "Vastu Audit Checklist", "Expert Q&A"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Vastu & Space", tag: "Trending", thumbnail: "https://placehold.co/600x350/fff3e0/ff9800?text=Vastu+Harmony", facultyImage: getFacultyImageUrl("Dr. Sharma") },
  { id: 5, title: "Sanskrit Vyakarana", headline: "Master the Grammar of Devabhasha – Sanskrit from the Roots", price: 999, originalPrice: 2000, duration: "4 Weeks Foundational", benefits: ["Lifetime Access", "Official Certificate", "Vocabulary Flashcards"], rating: 4.5, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/f3e5f5/9c27b0?text=Sanskrit+Grammar", facultyImage: getFacultyImageUrl("Pandit Ravi") },
  { id: 6, title: "Daily Puja Routine", headline: "Learn Nitya Puja – Step-by-Step Rituals for Modern Life", price: 1499, originalPrice: 3000, duration: "2 Weeks Quick Start", benefits: ["Lifetime Access", "Official Certificate", "Puja Mantras Guide"], rating: 4.6, faculty: "Guru Gopal", isRecommended: false, category: "Mantra & Rituals", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/e0f7fa/00bcd4?text=Nitya+Puja", facultyImage: getFacultyImageUrl("Guru Gopal") },
  { id: 7, title: "Muhurtas", headline: "Right Time, Right Action – Science of Shubh Muhurta", price: 2999, originalPrice: 6000, duration: "5 Weeks Specialist", benefits: ["Lifetime Access", "Official Certificate", "Muhurta Calculation Software Access"], rating: 4.8, faculty: "Dr. Sharma", isRecommended: true, category: "Astrology", tag: "Specialist", thumbnail: "https://placehold.co/600x350/fbe9e7/ff5722?text=Shubh+Muhurta", facultyImage: getFacultyImageUrl("Dr. Sharma") },
  { id: 8, title: "Upanishads", headline: "Dive Deep into the Philosophy of Self & Brahman", price: 4999, originalPrice: 10000, duration: "8 Weeks Philosophical", benefits: ["Lifetime Access", "Official Certificate", "Weekly Discussion Forums", "Detailed Commentary"], rating: 5.0, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Deep Dive", thumbnail: "https://placehold.co/600x350/f0f4c3/827717?text=Self+Knowledge", facultyImage: getFacultyImageUrl("Pandit Ravi") },
  { id: 9, title: "Vedas", headline: "Foundations of Eternal Knowledge – Study Rig, Yajur, Sama, Atharva", price: 6999, originalPrice: 15000, duration: "12 Weeks Comprehensive", benefits: ["Lifetime Access", "Official Certificate", "1:1 Mentorship Session", "Complete Digital Text Library"], rating: 4.9, faculty: "Acharya Devi", isRecommended: false, category: "Philosophy", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e1f5fe/01579b?text=Vedic+Scriptures", facultyImage: getFacultyImageUrl("Acharya Devi") },
  { id: 10, title: "Purana & Itihas", headline: "Decode Ramayana, Mahabharata & the Puranas with Context", price: 1999, originalPrice: 4000, duration: "4 Weeks Historical", benefits: ["Lifetime Access", "Official Certificate", "Mythological Timelines"], rating: 4.7, faculty: "Guru Gopal", isRecommended: false, category: "History & Culture", tag: "History", thumbnail: "https://placehold.co/600x350/fce4ec/e91e63?text=Ancient+Epics", facultyImage: getFacultyImageUrl("Guru Gopal") },
  { id: 11, title: "Vedic Mathematics", headline: "Ancient Maths Tricks for Fast Calculation & Logical Thinking", price: 999, originalPrice: 2000, duration: "3 Weeks Skills Course", benefits: ["Lifetime Access", "Official Certificate", "Practice Worksheets"], rating: 4.5, faculty: "Dr. Sharma", isRecommended: false, category: "Science & Logic", tag: "Low Price", thumbnail: "https://placehold.co/600x350/e0f2f1/00897b?text=Fast+Maths", facultyImage: getFacultyImageUrl("Dr. Sharma") },
  { id: 12, title: "Mantra Healing", headline: "Heal Body, Mind & Soul Through Beej Mantras & Frequencies", price: 3999, originalPrice: 8000, duration: "6 Weeks Therapeutic", benefits: ["Lifetime Access", "Official Certificate", "Personalised Mantra Recommendation"], rating: 4.8, faculty: "Acharya Devi", isRecommended: true, category: "Mantra & Rituals", tag: "Healing", thumbnail: "https://placehold.co/600x350/f9fbe7/afb42b?text=Beej+Mantra", facultyImage: getFacultyImageUrl("Acharya Devi") },
  { id: 13, title: "Sanskrit (Reading + Chanting)", headline: "Speak the Language of the Gods – Chant with Clarity", price: 1499, originalPrice: 3000, duration: "4 Weeks Practice", benefits: ["Lifetime Access", "Official Certificate", "Pronunciation Guide Audio"], rating: 4.6, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/f0f8ff/4a90e2?text=Chanting+Practice", facultyImage: getFacultyImageUrl("Pandit Ravi") },
  { id: 14, title: "Sacred Texts Reading", headline: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.", price: 999, originalPrice: 2000, duration: "2 Weeks Focused", benefits: ["Lifetime Access", "Official Certificate", "Annotated Text PDFs"], rating: 4.4, faculty: "Guru Gopal", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/fff8e1/ffa000?text=Sacred+Reading", facultyImage: getFacultyImageUrl("Guru Gopal") },
  { id: 15, title: "Vedic Science", headline: "Hidden Scientific Concepts in Agni, Ether, Time & Creation", price: 4999, originalPrice: 10000, duration: "7 Weeks Advanced", benefits: ["Lifetime Access", "Official Certificate", "Science vs Text Comparison"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Science & Logic", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e8f5e9/43a047?text=Ancient+Science", facultyImage: getFacultyImageUrl("Dr. Sharma") },
  { id: 16, title: "Vedic Philosophy", headline: "Understand Karma, Dharma, Rebirth, Moksha from Vedic Lens", price: 2999, originalPrice: 6000, duration: "5 Weeks Foundation", benefits: ["Lifetime Access", "Official Certificate", "Key Sutra Summaries"], rating: 4.8, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Foundation", thumbnail: "https://placehold.co/600x350/f3e5f5/ab47bc?text=Dharma+Moksha", facultyImage: getFacultyImageUrl("Pandit Ravi") },
];

// Combine all possible unique categories
const categories = ["All", "Astrology", "Mantra & Rituals", "Vastu & Space", "Philosophy", "Language & Texts", "Science & Logic", "History & Culture", "Wellbeing"];

// Create a large pool of courses, ensuring the 16 static ones are at the beginning
const totalCourses = 26;
const allCourses = [
  ...staticCourses,
  ...Array.from({ length: totalCourses - staticCourses.length }).map((_, i) => {
    const facultyName = `Faculty F-${(i % 5) + 1}`;
    return {
      id: i + 17,
      title: `Yoga Nidra and Meditation ${i + 17}`,
      headline: `Find inner peace and clarity with guided practice.`,
      price: 99 + (i * 100),
      originalPrice: 500 + (i * 100),
      duration: "2 Weeks On-Demand",
      benefits: ["Lifetime Access", "Audio Guides"],
      rating: 3.5 + (i % 10) / 10,
      faculty: facultyName,
      isRecommended: false,
      category: "Wellbeing",
      tag: "General",
      thumbnail: `https://placehold.co/600x350/seed/kundli-${i + 17}/600/350`,
      facultyImage: getFacultyImageUrl(facultyName),
    };
  })
];

const getPriceDisplay = (price) => {
  if (price === 0) return "FREE";
  return `₹${price.toLocaleString('en-IN')}`;
}

// =========================================================================
// 1. Course Card Component
// =========================================================================
const CourseCard = ({ course, toggleWishlist, isWishlisted, onEnrollClick, onViewDetailsClick }) => {
    const isThumbnailVideo = course.thumbnail.toLowerCase().endsWith('.mp4');
    
    // Faculty Image Placeholder logic
    const facultyImage = course.facultyImage || getFacultyImageUrl(course.faculty);

    const thumbnailContent = isThumbnailVideo ? (
        <video 
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            autoPlay 
            loop 
            muted 
            playsInline
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder"; e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder" alt="${course.title}" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />`; }}
        />
    ) : (
        <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/cccccc/333333?text=Image+Error"; }}
        />
    );









  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform duration-300 h-full flex flex-col"
    >
      {/* Wishlist Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => toggleWishlist(course.id)}
        className="absolute right-5 top-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
      >
        {isWishlisted ? (
          <Heart className="text-red-500 fill-red-500" size={20} />
        ) : (
          <Heart className="text-gray-400" size={20} />
        )}
      </motion.button>

      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        {thumbnailContent}
        <div className={`absolute left-4 bottom-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md ${course.isRecommended ? 'bg-green-600' : ''}`}>
          {course.tag || course.category}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h4 className="font-bold text-xl text-orange-700 mb-2">
          {course.title}
        </h4>
        <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-4">{course.headline}</p>

        {/* Rating and Faculty (Updated with Image) */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4">
          <div className="flex items-center gap-1 text-yellow-500 font-bold">
            <Star size={16} fill="currentColor" /> {Number(course.rating).toFixed(1)}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img src={facultyImage} alt={course.faculty} className="w-15 h-15 rounded-full object-cover border-2 border-orange-300 shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/ff7e00/fff?text=F"; }} />
            By <span className="font-medium text-orange-600">{course.faculty}</span>
          </div>
        </div>
        
        {/* Price and Enrollment Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <div className="font-extrabold text-2xl text-orange-800">
            {getPriceDisplay(course.price)}
          </div>
          <div className="flex gap-2">
             {/* New View Details Button */}
             <button
                onClick={() => onViewDetailsClick(course)} 
                className="text-orange-500 border border-orange-300 px-4 py-2.5 rounded-full font-semibold transition hover:bg-orange-50 text-sm"
             >
                <BookOpen size={16} className="inline mr-1" /> View Details
             </button>
             {/* Original Enroll Button */}
             <button 
                onClick={() => onEnrollClick(course)}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.02] text-sm"
             >
                ENROLL
             </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// =========================================================================
// 2. Category Filter Combobox (Improved Filter)
// =========================================================================
const CategoryFilterCombobox = ({ value, onChange, options }) => {
    const [searchTerm, setSearchTerm] = useState(value === "All" ? "" : value);
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);
    
    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [filterRef]);

    const filteredOptions = options.filter(opt => 
        opt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (category) => {
        onChange(category);
        setSearchTerm(category === "All" ? "" : category);
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        setIsOpen(true);

        // This is the "type-to-jump/autocomplete" logic
        // If the user types a term that matches an option, immediately set the filter.
        const perfectMatch = options.find(opt => opt.toLowerCase() === newSearchTerm.toLowerCase());
        if (perfectMatch) {
            onChange(perfectMatch);
            setIsOpen(false);
        } else if (newSearchTerm === "") {
            onChange("All");
        }
    };
    
    const handleClear = () => {
        setSearchTerm("");
        onChange("All");
        setIsOpen(false);
    };










    return (
        <div className="relative w-full md:w-1/3" ref={filterRef}>
            <BookOpen className="absolute left-3 top-2.5 text-gray-400 z-10" size={18} />
            <input
                type="text"
                placeholder="Filter by Course Category (e.g., Astrology)"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition pr-12 text-sm font-medium text-gray-700"
            />
            {searchTerm && value !== "All" ? (
                <button onClick={handleClear} className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500 transition p-1">
                    <X size={18} />
                </button>
            ) : (
                <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            )}

            <AnimatePresence>
                {isOpen && filteredOptions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 mt-2 w-full bg-white border border-orange-300 rounded-xl shadow-xl max-h-60 overflow-y-auto"
                    >
                        {filteredOptions.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleSelect(cat)}
                                className={`w-full text-left px-4 py-2 text-sm transition font-medium ${
                                    value === cat
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
                                    // Custom Hover: Blue hover is replaced with yellow gradient hover
                                    : 'text-gray-700 hover:bg-yellow-100 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                        {/* Option to clear filter if not "All" is explicitly selected */}
                         {searchTerm !== "" && !options.includes(value) && (
                            <button
                                onClick={() => handleSelect("All")}
                                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition border-t"
                            >
                                Clear Category Filter
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>





  
        </div>





    );
};








// =========================================================================
// 3. Detailed Course View Component (NEW)
// =========================================================================
const CourseDetailsPage = ({ course, onBackToCourses, onEnrollClick }) => {
    // Check if the first course's thumbnail is a video or if the placeholder is needed
    const isMediaVideo = course.thumbnail.toLowerCase().endsWith('.mp4');

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 py-16 px-4">
            <div className="w-full max-w-5xl mx-auto">
                 {/* Back Button */}
                 <button
                    onClick={onBackToCourses}
                    className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
                 >
                    <ArrowLeft size={20} className="mr-2" /> Back to All Courses
                 </button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-2xl rounded-3xl overflow-hidden border-t-8 border-orange-500"
                >
                    {/* Media Header */}
                    <div className="relative">
                        {isMediaVideo ? (
                            <video
                                src={course.thumbnail}
                                alt="Course Video"
                                className="w-full h-96 object-cover object-top"
                                autoPlay loop muted playsInline
                                onError={(e) => { e.target.onerror = null; e.target.closest('div').innerHTML = `<img src="https://placehold.co/800x400/ffefe1/b45309?text=Video+Unavailable+-+Course+Preview" alt="Course Preview" className="w-full h-96 object-cover object-top" />`; }}
                            />
                        ) : (
                            <img
                                src={course.thumbnail}
                                alt="Course Preview"
                                className="w-full h-96 object-cover object-top"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x400/cccccc/333333?text=Image+Error"; }}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle size={80} className="text-white opacity-80" />
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-12">
                        <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                            <h1 className="text-4xl font-extrabold text-orange-800">{course.title}</h1>
                            <div className="text-right">
                                <span className="text-4xl font-extrabold text-orange-700 block">
                                    {getPriceDisplay(course.price)}
                                </span>
                                <span className="text-sm line-through text-gray-500">
                                    {getPriceDisplay(course.originalPrice)}
                                </span>
                            </div>
                        </div>

                        <p className="text-xl text-gray-700 mb-6">{course.headline}</p>

                        {/* Faculty & Rating Row */}
                        <div className="flex items-center gap-6 border-b pb-4 mb-6">
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                                <img src={course.facultyImage} alt={course.faculty} className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500 shadow-md" />
                                Taught By: <span className="text-orange-600">{course.faculty}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xl font-bold text-yellow-500">
                                <Star size={24} fill="currentColor" /> {course.rating.toFixed(1)}
                            </div>
                        </div>

                        {/* Benefits & Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                                    <CheckCircle size={20} className="text-green-500" /> What You'll Get
                                </h2>
                                <ul className="space-y-3 mb-4">
                                    {course.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start text-gray-600">
                                            <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                   <Link to="/CoursedetailsPage" type="button" className=" bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-1 rounded-full text-lg font-bold shadow-lg transition transform hover:scale-[1.02]">More about Course</Link>

                             
                            </div>
                            
                            <div className="bg-orange-50 p-6 rounded-xl shadow-inner flex flex-col justify-between">
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center text-gray-700">
                                        <Clock size={20} className="text-orange-400 mr-3" />
                                        <span className="font-semibold">Duration:</span> {course.duration}
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <BookOpen size={20} className="text-orange-400 mr-3" />
                                        <span className="font-semibold">Category:</span> {course.category}
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => onEnrollClick(course)}
                                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-[1.02]"
                                >
                                    ENROLL NOW
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};


// =========================================================================
// 4. Courses Page Component (MAIN)
// =========================================================================
const CoursesPage = ({ onEnrollClick, onViewDetailsClick }) => {
  const [visible, setVisible] = useState(12);
  const [sortBy, setSortBy] = useState("recommended");
  const [categoryFilter, setCategoryFilter] = useState("All");
  // [REMOVED] const [priceFilter, setPriceFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Wishlist toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Memoized filtering and sorting logic
  const sorted = useMemo(() => {
    let currentFilteredCourses = allCourses.filter((c) => {
      // 1. Search Filter
      const searchMatch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.faculty.toLowerCase().includes(search.toLowerCase()) ||
        c.headline.toLowerCase().includes(search.toLowerCase());

      if (!searchMatch) return false;

      // 2. Category Filter
      if (categoryFilter !== "All" && c.category !== categoryFilter) return false;
      
      // [REMOVED] 3. Price Filter (Removed as requested)

      return true;
    });

    // --- Sorting Logic ---
    return [...currentFilteredCourses].sort((a, b) => {
      // 1. Always prioritize "Vedic Astrology" to show in front if it passes filters
      if (a.title === "Vedic Astrology") return -1;
      if (b.title === "Vedic Astrology") return 1;

      // 2. Apply chosen sort method
      if (sortBy === "ratingHigh") return b.rating - a.rating;
      if (sortBy === "ratingLow") return a.rating - b.rating;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "recommended") return b.isRecommended - a.isRecommended;

      return a.id - b.id; // Default fallback
    });
  }, [search, categoryFilter, sortBy]);
    
  const loadMore = () => setVisible((v) => Math.min(v + 12, sorted.length));
  const resetFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    // [REMOVED] setPriceFilter("All");
    setSortBy("recommended");
    setVisible(12);
  };

    // Fallback for the featured course media (assuming the first course is featured)
    const featuredCourse = allCourses[0];
    const isFeaturedVideo = featuredCourse.thumbnail.toLowerCase().endsWith('.mp4');
    const featuredMediaContent = isFeaturedVideo ? (
        <video
            src={featuredCourse.thumbnail}
            alt="Featured Course Video"
            className="w-full h-[300px] md:h-[420px] object-cover object-top"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
                e.target.onerror = null; 
                e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x420/ffefe1/b45309?text=Featured+Image+Placeholder" alt="Featured Course Image" className="w-full h-[300px] md:h-[420px] object-cover object-top" />`;
            }}
        />
    ) : (
        <img
            src={featuredCourse.thumbnail}
            alt="Featured Course Image"
            className="w-full h-[300px] md:h-[420px] object-cover object-top"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x420/cccccc/333333?text=Image+Error"; }}
        />
    );


  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-lg py-12 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif">
          🪔 Explore All {allCourses.length} Courses
        </h1>
        <p className="text-lg mt-3 opacity-90 max-w-2xl mx-auto">
          Deepen your spiritual and analytical mastery across Jyotish, Vastu, Philosophy, and Sacred Texts.
        </p>
      </header>

      {/* Featured Course Section (using the prioritized course) */}
      <section className="relative max-w-7xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
          🔥 Featured Masterclass: Vedic Astrology
        </h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-yellow-400/80"
        >
          <div className="relative">
            {featuredMediaContent}
            <button 
                onClick={() => onViewDetailsClick(featuredCourse)} // Change to View Details handler
                className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
              <PlayCircle size={70} className="text-white drop-shadow-lg" />
            </button>
          </div>
          <div className="p-6 md:p-8 bg-orange-50">
            <h3 className="text-3xl font-bold text-orange-800">
              {featuredCourse.title}
            </h3>
            <p className="text-gray-700 mt-2 text-lg">
              {featuredCourse.headline}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <span className="text-2xl font-extrabold text-orange-900">
                {getPriceDisplay(featuredCourse.price)}
              </span>
              <span className="flex items-center gap-1 text-yellow-600 font-bold">
                <Star size={20} fill="currentColor" /> {featuredCourse.rating.toFixed(1)} Rating
              </span>
              <button
                onClick={() => onViewDetailsClick(featuredCourse)} // Use the new handler
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition"
              >
                VIEW DETAILS
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter and Course Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-orange-700">
            📚 Browse All Offerings ({sorted.length} Results)
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Showing {Math.min(visible, sorted.length)} courses
          </p>
        </div>

        {/* --- Advanced Filter Bar (Updated) --- */}
        <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg mb-12 border border-orange-200">
          <h4 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
            <Filter size={20} /> Course Filters
          </h4>
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* 1. Search Input */}
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by title, topic, or faculty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            {/* 2. Category Filter (Now a Combobox/Type-ahead) */}
            <CategoryFilterCombobox 
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={categories}
            />
            
            {/* [REMOVED] 3. Pricing Filter (Removed as requested) */}

            {/* 4. Sort By Dropdown (Updated Design) */}
        <div className="relative w-full md:w-1/3">
               <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`appearance-none border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm  font-medium cursor-pointer focus:ring-2 focus:ring-orange-400 transition w-full ${sortBy === 'recommended' ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black' : 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-black text-gray-700 '}`}
      
              >
                <option className="bg-yellow-400" value="recommended">⭐ Recommended For You</option>
                <option className="bg-yellow-400 " value="ratingHigh">Rating: High to Low</option>
                <option className="bg-yellow-400" value="priceLow">Price: Low to High</option>
                <option className="bg-yellow-400" value="priceHigh">Price: High to Low</option>
                <option className="bg-yellow-400" value="newest">Newest Courses</option>
              </select> 



             <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" /> 
 </div>


























          





          </div>
          
          <div className="mt-4 text-right">
            <button 
              onClick={resetFilters}
              className="text-sm text-gray-500 hover:text-orange-600 transition underline"
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* --- Course Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sorted.slice(0, visible).map((c) => (
            <CourseCard 
              key={c.id} 
              course={c} 
              toggleWishlist={toggleWishlist} 
              isWishlisted={wishlist.includes(c.id)} 
              onEnrollClick={onEnrollClick} // Pass the handler down
              onViewDetailsClick={onViewDetailsClick} // Pass the handler down
            />
          ))}
          {sorted.length === 0 && (
            <div className="lg:col-span-3 text-center py-10 bg-orange-100/50 rounded-xl">
              <p className="text-xl font-semibold text-orange-700">No courses found matching your filters.</p>
              <p className="text-gray-600 mt-2">Try adjusting your search terms or filters above.</p>
            </div>
          )}
        </div>

        {visible < sorted.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.05]"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-200 to-orange-100 py-8 text-center text-gray-700 text-sm mt-12">
        <p>✨ Made with spiritual energy and code | Kundli Academy 2025</p>
      </footer>
    </div>
  );
}


// =========================================================================
// 5. Enrollment Page Component
// =========================================================================
const EnrollPage = ({ course, onBackToCourses }) => {
  // Default course details for safety if prop is missing (should not happen in this flow)
  const defaultCourse = {
    title: "Unknown Course",
    price: 0,
    originalPrice: 0,
    duration: "N/A",
    benefits: ["No Benefits Listed"],
  };
    
  const courseData = course || defaultCourse;

  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "Morning Batch (9AM - 11AM)",
  });
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = {
    name: (v) => v.trim().length >= 3,
    email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
    phone: (v) => /^\d{10}$/.test(v),
  };

  const isFormValid =
    validate.name(formData.name) &&
    validate.email(formData.email) &&
    validate.phone(formData.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true }); // Mark all as touched on submit
    if (!isFormValid) return;

    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setIsEnrolled(true);    
        
      // In this environment, we simulate redirecting back to the course list
      setTimeout(() => {
        console.log("Simulating navigation to Payment Page for:", courseData.title);
        // Note: In a real app, this is where you'd redirect to a payment gateway
        // For this single-page demo, we go back to the course list.
        onBackToCourses(); 
      }, 3000); // 3 seconds delay for the success message
        
    }, 2000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
      touched[field] && !validate[field](formData[field])
        ? "border-red-500 bg-red-50"
        : "border-gray-300 bg-gray-50 hover:border-orange-400"
    }`;

  const ErrorMessage = ({ field }) => {
    if (touched[field] && !validate[field](formData[field])) {
      let message = "";
      if (field === "name") message = "Please enter your full name (at least 3 characters).";
      if (field === "email") message = "Please enter a valid email address.";
      if (field === "phone") message = "Please enter a valid 10-digit phone number.";
      return <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-600 text-xs mt-1 font-medium">{message}</motion.p>;
    }
    return null;
  };
    
  // Success Screen Component
  const SuccessScreen = () => (
      <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
      >
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Request Successful!</h2>
          <p className="text-gray-600 mb-6">
              Thank you, **{formData.name}**! Your request for the **{courseData.title}** course is processed.
          </p>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-sm text-gray-500">
              Simulating redirect to payment gateway...
          </p>
      </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
      >
        {/* Back Button */}
        <button
          onClick={onBackToCourses}
          className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to All Courses
        </button>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
            {isEnrolled ? "Payment Redirection" : `Enroll in: ${courseData.title}`}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
            {isEnrolled ? "Please wait while we prepare your payment link." : `Secure your seat and begin your spiritual journey with the ${courseData.title}.`}
        </p>
          
        {isEnrolled ? (
            <SuccessScreen />
        ) : (
            
        /* Content Grid (Two Columns) */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left Column: Course Summary & Benefits (Dynamic Content) */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col"
            >
                <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
                    <BookOpen className="text-yellow-600" size={24} /> Course Details
                </h2>
                
                <p className="text-4xl font-extrabold text-orange-700 mb-6">
                    {getPriceDisplay(courseData.price)}
                    <span className="text-base font-normal line-through text-gray-500 ml-3">{getPriceDisplay(courseData.originalPrice)}</span>
                </p>

                <ul className="space-y-3 flex-grow mb-6">
                    {courseData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                            <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                            {benefit}
                        </li>
                    ))}
                    <li className="flex items-start text-gray-700 font-bold">
                        <Clock size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        Duration: {courseData.duration}
                    </li>
                </ul>
                <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
                    <Smile size={18} className="mr-2 text-yellow-500" />
                    Join over 1,000+ satisfied students in this program!
                </div>
            </motion.div>

            {/* Right Column: Enrollment Form */}
            <motion.form 
                onSubmit={handleSubmit} 
                initial={{ x: 50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-orange-700 mb-6">Your Information</h2>
                <div className="space-y-6">
                    
                    {/* Name Input */}
                    <div>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass("name")}
                                disabled={loading}
                            />
                        </div>
                        <ErrorMessage field="name" />
                    </div>

                    {/* Email Input */}
                    <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass("email")}
                                disabled={loading}
                            />
                        </div>
                        <ErrorMessage field="email" />
                    </div>

                    {/* Phone Input */}
                    <div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your 10-Digit Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass("phone")}
                                disabled={loading}
                            />
                        </div>
                        <ErrorMessage field="phone" />
                    </div>

                    {/* Batch Select */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Preferred Batch</label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                            <select
                                name="batch"
                                value={formData.batch}
                                onChange={handleChange}
                                className={`appearance-none w-full px-4 py-3 pl-12 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium cursor-pointer pr-10 ${loading ? 'opacity-60' : 'hover:border-orange-400'}`}
                                disabled={loading}
                            >
                                <option>Morning Batch (9AM - 11AM IST)</option>
                                <option>Evening Batch (7PM - 9PM IST)</option>
                                <option>Weekend Batch (Sat/Sun)</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileTap={{ scale: isFormValid && !loading ? 0.98 : 1 }}
                    className={`w-full mt-8 text-white px-8 py-3 rounded-full font-bold shadow-lg transition flex items-center justify-center ${
                        isFormValid && !loading
                            ? "bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 transform hover:scale-[1.01]"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!isFormValid || loading}
                >
                    {loading ? (
                        <>
                            <Loader2 size={20} className="animate-spin mr-2" /> Processing...
                        </>
                    ) : (
                        `PROCEED TO PAYMENT (${getPriceDisplay(courseData.price)})`
                    )}
                </motion.button>
                <p className="text-center text-xs text-gray-500 mt-3">
                    By enrolling, you agree to our terms and conditions.
                </p>
            </motion.form>
        </div>
        )}
      </motion.div>
    </div>
  );
};

// =========================================================================
// 6. Application Root Component
// =========================================================================
const App = () => {
    const [currentPage, setCurrentPage] = useState("CoursesPage");
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Handler for "ENROLL" button
    const handleEnrollClick = (course) => {
        setSelectedCourse(course);
        setCurrentPage("EnrollPage");
        // Ensure buttons work by managing state, not native navigation
    };
    
    // Handler for "VIEW DETAILS" button
    const handleViewDetailsClick = (course) => {
        setSelectedCourse(course);
        setCurrentPage("CourseDetailsPage");
        // Ensure buttons work by managing state, not native navigation
    };

    // Handler to go back to the main course page
    const handleBackToCourses = () => {
        setSelectedCourse(null);
        setCurrentPage("CoursePage");
    };

    // Main content rendering based on the current state
    let content;
    if (currentPage === "EnrollPage") {
        content = <EnrollPage course={selectedCourse} onBackToCourses={handleBackToCourses} />;
    } else if (currentPage === "CourseDetailsPage") {
        content = <CourseDetailsPage course={selectedCourse} onBackToCourses={handleBackToCourses} onEnrollClick={handleEnrollClick} />;
    } else {
        content = <CoursesPage onEnrollClick={handleEnrollClick} onViewDetailsClick={handleViewDetailsClick} />;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                {content}
            </motion.div>
        </AnimatePresence>
    );
};

export default App;


















// import React, { useState, useMemo, useRef } from "react";
// import { PlayCircle, Heart, Search, Star, ChevronDown, Filter, BookOpen, User, Mail, Phone, Clock, CheckCircle, Smile, ArrowLeft, Loader2, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- Static Data and Setup ---
// const getFacultyImageUrl = (name) => {
//     const seed = name.split(' ')[0].charCodeAt(0) % 20; 
//     return `https://i.pravatar.cc/150?img=${seed + 1}`; 
// };

// const staticCourses = [
//     { id: 1, title: "Vedic Astrology", headline: "Decode the Secrets of Your Kundali through Ancient Jyotish", price: 5999, originalPrice: 12000, duration: "8 Weeks Live", benefits: ["Lifetime Access to Recordings", "Official Certificate", "1:1 Mentorship Session", "Downloadable Study Materials (PDFs)"], rating: 5.0, faculty: "Acharya Devi", isRecommended: true, category: "Astrology", tag: "Best Seller", thumbnail: "./Vedic_Astrology_Course_Instructor.mp4", facultyImage: getFacultyImageUrl("Acharya Devi") },
//     { id: 2, title: "Palmistry (Hastrekha)", headline: "Your Destiny Lies in Your Hands – Learn the Art of Palmistry", price: 2499, originalPrice: 5000, duration: "4 Weeks Self-Paced", benefits: ["Lifetime Access", "Official Certificate", "Practice Handouts"], rating: 4.8, faculty: "Guru Gopal", isRecommended: true, category: "Astrology", tag: "New", thumbnail: "https://placehold.co/600x350/e8f5e9/388e3c?text=Hands+of+Destiny", facultyImage: getFacultyImageUrl("Guru Gopal") },
//     { id: 3, title: "Numerology", headline: "Numbers Don’t Lie – Unlock Destiny Through Moolank & Bhagyank", price: 1999, originalPrice: 4000, duration: "3 Weeks Online", benefits: ["Lifetime Access", "Official Certificate", "Numeroscope Calculator"], rating: 4.7, faculty: "Acharya Devi", isRecommended: false, category: "Astrology", tag: "Popular", thumbnail: "https://placehold.co/600x350/e3f2fd/1976d2?text=Power+of+Numbers", facultyImage: getFacultyImageUrl("Acharya Devi") },
//     { id: 4, title: "Vastu Shastra", headline: "Balance Your Space, Balance Your Life with Vastu", price: 3499, originalPrice: 7000, duration: "6 Weeks Live + Case Studies", benefits: ["Lifetime Access", "Official Certificate", "Vastu Audit Checklist", "Expert Q&A"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Vastu & Space", tag: "Trending", thumbnail: "https://placehold.co/600x350/fff3e0/ff9800?text=Vastu+Harmony", facultyImage: getFacultyImageUrl("Dr. Sharma") },
//     { id: 5, title: "Sanskrit Vyakarana", headline: "Master the Grammar of Devabhasha – Sanskrit from the Roots", price: 999, originalPrice: 2000, duration: "4 Weeks Foundational", benefits: ["Lifetime Access", "Official Certificate", "Vocabulary Flashcards"], rating: 4.5, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/f3e5f5/9c27b0?text=Sanskrit+Grammar", facultyImage: getFacultyImageUrl("Pandit Ravi") },
//     { id: 6, title: "Daily Puja Routine", headline: "Learn Nitya Puja – Step-by-Step Rituals for Modern Life", price: 1499, originalPrice: 3000, duration: "2 Weeks Quick Start", benefits: ["Lifetime Access", "Official Certificate", "Puja Mantras Guide"], rating: 4.6, faculty: "Guru Gopal", isRecommended: false, category: "Mantra & Rituals", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/e0f7fa/00bcd4?text=Nitya+Puja", facultyImage: getFacultyImageUrl("Guru Gopal") },
//     { id: 7, title: "Muhurtas", headline: "Right Time, Right Action – Science of Shubh Muhurta", price: 2999, originalPrice: 6000, duration: "5 Weeks Specialist", benefits: ["Lifetime Access", "Official Certificate", "Muhurta Calculation Software Access"], rating: 4.8, faculty: "Dr. Sharma", isRecommended: true, category: "Astrology", tag: "Specialist", thumbnail: "https://placehold.co/600x350/fbe9e7/ff5722?text=Shubh+Muhurta", facultyImage: getFacultyImageUrl("Dr. Sharma") },
//     { id: 8, title: "Upanishads", headline: "Dive Deep into the Philosophy of Self & Brahman", price: 4999, originalPrice: 10000, duration: "8 Weeks Philosophical", benefits: ["Lifetime Access", "Official Certificate", "Weekly Discussion Forums", "Detailed Commentary"], rating: 5.0, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Deep Dive", thumbnail: "https://placehold.co/600x350/f0f4c3/827717?text=Self+Knowledge", facultyImage: getFacultyImageUrl("Pandit Ravi") },
//     { id: 9, title: "Vedas", headline: "Foundations of Eternal Knowledge – Study Rig, Yajur, Sama, Atharva", price: 6999, originalPrice: 15000, duration: "12 Weeks Comprehensive", benefits: ["Lifetime Access", "Official Certificate", "1:1 Mentorship Session", "Complete Digital Text Library"], rating: 4.9, faculty: "Acharya Devi", isRecommended: false, category: "Philosophy", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e1f5fe/01579b?text=Vedic+Scriptures", facultyImage: getFacultyImageUrl("Acharya Devi") },
//     { id: 10, title: "Purana & Itihas", headline: "Decode Ramayana, Mahabharata & the Puranas with Context", price: 1999, originalPrice: 4000, duration: "4 Weeks Historical", benefits: ["Lifetime Access", "Official Certificate", "Mythological Timelines"], rating: 4.7, faculty: "Guru Gopal", isRecommended: false, category: "History & Culture", tag: "History", thumbnail: "https://placehold.co/600x350/fce4ec/e91e63?text=Ancient+Epics", facultyImage: getFacultyImageUrl("Guru Gopal") },
//     { id: 11, title: "Vedic Mathematics", headline: "Ancient Maths Tricks for Fast Calculation & Logical Thinking", price: 999, originalPrice: 2000, duration: "3 Weeks Skills Course", benefits: ["Lifetime Access", "Official Certificate", "Practice Worksheets"], rating: 4.5, faculty: "Dr. Sharma", isRecommended: false, category: "Science & Logic", tag: "Low Price", thumbnail: "https://placehold.co/600x350/e0f2f1/00897b?text=Fast+Maths", facultyImage: getFacultyImageUrl("Dr. Sharma") },
//     { id: 12, title: "Mantra Healing", headline: "Heal Body, Mind & Soul Through Beej Mantras & Frequencies", price: 3999, originalPrice: 8000, duration: "6 Weeks Therapeutic", benefits: ["Lifetime Access", "Official Certificate", "Personalised Mantra Recommendation"], rating: 4.8, faculty: "Acharya Devi", isRecommended: true, category: "Mantra & Rituals", tag: "Healing", thumbnail: "https://placehold.co/600x350/f9fbe7/afb42b?text=Beej+Mantra", facultyImage: getFacultyImageUrl("Acharya Devi") },
//     { id: 13, title: "Sanskrit (Reading + Chanting)", headline: "Speak the Language of the Gods – Chant with Clarity", price: 1499, originalPrice: 3000, duration: "4 Weeks Practice", benefits: ["Lifetime Access", "Official Certificate", "Pronunciation Guide Audio"], rating: 4.6, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/f0f8ff/4a90e2?text=Chanting+Practice", facultyImage: getFacultyImageUrl("Pandit Ravi") },
//     { id: 14, title: "Sacred Texts Reading", headline: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.", price: 999, originalPrice: 2000, duration: "2 Weeks Focused", benefits: ["Lifetime Access", "Official Certificate", "Annotated Text PDFs"], rating: 4.4, faculty: "Guru Gopal", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/fff8e1/ffa000?text=Sacred+Reading", facultyImage: getFacultyImageUrl("Guru Gopal") },
//     { id: 15, title: "Vedic Science", headline: "Hidden Scientific Concepts in Agni, Ether, Time & Creation", price: 4999, originalPrice: 10000, duration: "7 Weeks Advanced", benefits: ["Lifetime Access", "Official Certificate", "Science vs Text Comparison"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Science & Logic", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e8f5e9/43a047?text=Ancient+Science", facultyImage: getFacultyImageUrl("Dr. Sharma") },
//     { id: 16, title: "Vedic Philosophy", headline: "Understand Karma, Dharma, Rebirth, Moksha from Vedic Lens", price: 2999, originalPrice: 6000, duration: "5 Weeks Foundation", benefits: ["Lifetime Access", "Official Certificate", "Key Sutra Summaries"], rating: 4.8, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Foundation", thumbnail: "https://placehold.co/600x350/f3e5f5/ab47bc?text=Dharma+Moksha", facultyImage: getFacultyImageUrl("Pandit Ravi") },
// ];

// const categories = ["All", "Astrology", "Mantra & Rituals", "Vastu & Space", "Philosophy", "Language & Texts", "Science & Logic", "History & Culture", "Wellbeing"];

// // Create a large pool of courses
// const totalCourses = 26;
// const allCourses = [ ...staticCourses, ]; // Simplified for brevity

// const getPriceDisplay = (price) => {
//     if (price === 0) return "FREE";
//     return `₹${price.toLocaleString('en-IN')}`;
// }

// // =========================================================================
// // 1. Course Card Component - UPDATED FACULTY IMAGE
// // =========================================================================
// const CourseCard = ({ course, toggleWishlist, isWishlisted, onEnrollClick, onViewDetailsClick }) => {
//     const isThumbnailVideo = course.thumbnail.toLowerCase().endsWith('.mp4');
//     const facultyImage = course.facultyImage || getFacultyImageUrl(course.faculty);
    
//     // ... (Thumbnail Content logic omitted for brevity, it's correct)
//     const thumbnailContent = isThumbnailVideo ? (
//         <video 
//             src={course.thumbnail}
//             alt={course.title}
//             className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//             autoPlay 
//             loop 
//             muted 
//             playsInline
//             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder"; e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder" alt="${course.title}" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />`; }}
//         />
//     ) : (
//         <img
//             src={course.thumbnail}
//             alt={course.title}
//             className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/cccccc/333333?text=Image+Error"; }}
//         />
//     );


//     return (
//         <motion.article
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative group rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform duration-300 h-full flex flex-col"
//         >
//             {/* Wishlist Button */}
//             <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => toggleWishlist(course.id)}
//                 className="absolute right-5 top-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
//             >
//                 {/* ... (Heart Icon Logic) ... */}
//                 {isWishlisted ? (
//                     <Heart className="text-red-500 fill-red-500" size={20} />
//                 ) : (
//                     <Heart className="text-gray-400" size={20} />
//                 )}
//             </motion.button>

//             {/* Thumbnail */}
//             <div className="relative overflow-hidden">
//                 {thumbnailContent}
//                 <div className={`absolute left-4 bottom-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md ${course.isRecommended ? 'bg-green-600' : ''}`}>
//                     {course.tag || course.category}
//                 </div>
//             </div>

//             <div className="p-6 flex-grow flex flex-col">
//                 <h4 className="font-bold text-xl text-orange-700 mb-2">
//                     {course.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-4">{course.headline}</p>

//                 {/* Rating and Faculty (Updated with Larger Circular Image) */}
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4">
//                     <div className="flex items-center gap-1 text-yellow-500 font-bold">
//                         <Star size={16} fill="currentColor" /> {Number(course.rating).toFixed(1)}
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                         {/* 🛑 KEY CHANGE: Increased w/h to w-12 h-12 and thicker border-4 */}
//                         <img 
//                             src={facultyImage} 
//                             alt={course.faculty} 
//                             className="w-12 h-12 rounded-full object-cover border-4 border-orange-300 shadow-md" 
//                             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/ff7e00/fff?text=F"; }} 
//                         />
//                         By <span className="font-medium text-orange-600">{course.faculty}</span>
//                     </div>
//                 </div>
                
//                 {/* Price and Enrollment Button */}
//                 <div className="flex items-center justify-between mt-auto pt-4 border-t">
//                     <div className="font-extrabold text-2xl text-orange-800">
//                         {getPriceDisplay(course.price)}
//                     </div>
//                     <div className="flex gap-2">
//                         <button
//                             onClick={() => onViewDetailsClick(course)} 
//                             className="text-orange-500 border border-orange-300 px-4 py-2.5 rounded-full font-semibold transition hover:bg-orange-50 text-sm"
//                         >
//                             <BookOpen size={16} className="inline mr-1" /> Details
//                         </button>
//                         <button 
//                             onClick={() => onEnrollClick(course)}
//                             className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.02] text-sm"
//                         >
//                             ENROLL
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </motion.article>
//     );
// };

// // =========================================================================
// // 2. Sort By Dropdown Component (Custom implementation) - UPDATED
// // =========================================================================
// const sortOptions = [
//     { value: "recommended", label: "⭐ Recommended For You" },
//     { value: "ratingHigh", label: "Rating: High to Low" },
//     { value: "priceLow", label: "Price: Low to High" },
//     { value: "priceHigh", label: "Price: High to Low" },
//     { value: "newest", label: "Newest Courses" },
// ];

// const SortByDropdown = ({ value, onChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const selectedOption = sortOptions.find(opt => opt.value === value) || sortOptions[0];

//     // Close dropdown when clicking outside
//     React.useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const handleSelect = (optionValue) => {
//         onChange(optionValue);
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative w-full md:w-1/3" ref={dropdownRef}>
//             <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={`w-full border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 transition flex items-center justify-between ${
//                     value === 'recommended' 
//                         ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold' 
//                         : 'bg-white text-gray-700 hover:bg-orange-50'
//                 }`}
//             >
//                 {selectedOption.label}
//                 <ChevronDown size={18} className={`transition ${isOpen ? 'transform rotate-180' : ''} ${value === 'recommended' ? 'text-white' : 'text-gray-500'}`} />
//             </button> 

//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute z-50 mt-2 w-full bg-white border border-orange-300 rounded-xl shadow-xl overflow-hidden"
//                     >
//                         {sortOptions.map(opt => (
//                             <motion.button
//                                 key={opt.value}
//                                 onClick={() => handleSelect(opt.value)}
//                                 className={`w-full text-left px-4 py-2 text-sm transition font-medium ${
//                                     value === opt.value
//                                     ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
//                                     // 🛑 KEY CHANGE: Yellow/Orange Gradient Hover applied to options
//                                     : 'text-gray-700 hover:bg-yellow-100 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-50'
//                                 }`}
//                                 whileTap={{ scale: 0.98 }}
//                             >
//                                 {opt.label}
//                             </motion.button>
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };


// // ... (CategoryFilterCombobox and CourseDetailsPage components are omitted for brevity, they are assumed to be correct)
// const CategoryFilterCombobox = ({ value, onChange, options }) => {
//     // ... (Your previous CategoryFilterCombobox logic here)
//     const [searchTerm, setSearchTerm] = useState(value === "All" ? "" : value);
//     const [isOpen, setIsOpen] = useState(false);
//     const filterRef = useRef(null);

//     React.useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (filterRef.current && !filterRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [filterRef]);

//     const filteredOptions = options.filter(opt =>
//         opt.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleSelect = (category) => {
//         onChange(category);
//         setSearchTerm(category === "All" ? "" : category);
//         setIsOpen(false);
//     };

//     const handleInputChange = (e) => {
//         const newSearchTerm = e.target.value;
//         setSearchTerm(newSearchTerm);
//         setIsOpen(true);

//         const perfectMatch = options.find(opt => opt.toLowerCase() === newSearchTerm.toLowerCase());
//         if (perfectMatch) {
//             onChange(perfectMatch);
//             setIsOpen(false);
//         } else if (newSearchTerm === "") {
//             onChange("All");
//         }
//     };

//     const handleClear = () => {
//         setSearchTerm("");
//         onChange("All");
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative w-full md:w-1/3" ref={filterRef}>
//             <BookOpen className="absolute left-3 top-2.5 text-gray-400 z-10" size={18} />
//             <input
//                 type="text"
//                 placeholder="Filter by Course Category (e.g., Astrology)"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 onFocus={() => setIsOpen(true)}
//                 className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition pr-12 text-sm font-medium text-gray-700"
//             />
//             {searchTerm && value !== "All" ? (
//                 <button onClick={handleClear} className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500 transition p-1">
//                     <X size={18} />
//                 </button>
//             ) : (
//                 <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//             )}

//             <AnimatePresence>
//                 {isOpen && filteredOptions.length > 0 && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute z-50 mt-2 w-full bg-white border border-orange-300 rounded-xl shadow-xl max-h-60 overflow-y-auto"
//                     >
//                         {filteredOptions.map(cat => (
//                             <button
//                                 key={cat}
//                                 onClick={() => handleSelect(cat)}
//                                 className={`w-full text-left px-4 py-2 text-sm transition font-medium ${
//                                     value === cat
//                                     ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
//                                     // Custom Hover: Yellow gradient hover applied
//                                     : 'text-gray-700 hover:bg-yellow-100 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-50'
//                                 }`}
//                             >
//                                 {cat}
//                             </button>
//                         ))}
//                         {searchTerm !== "" && !options.includes(value) && (
//                             <button
//                                 onClick={() => handleSelect("All")}
//                                 className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition border-t"
//                             >
//                                 Clear Category Filter
//                             </button>
//                         )}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };
// const CourseDetailsPage = ({ course, onBackToCourses, onEnrollClick }) => {
//     // ... (Your previous CourseDetailsPage logic here)
//     const isMediaVideo = course.thumbnail.toLowerCase().endsWith('.mp4');

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 py-16 px-4">
//             <div className="w-full max-w-5xl mx-auto">
//                 <button
//                     onClick={onBackToCourses}
//                     className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//                 >
//                     <ArrowLeft size={20} className="mr-2" /> Back to All Courses
//                 </button>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="bg-white shadow-2xl rounded-3xl overflow-hidden border-t-8 border-orange-500"
//                 >
//                     <div className="relative">
//                         {isMediaVideo ? (
//                             <video
//                                 src={course.thumbnail}
//                                 alt="Course Video"
//                                 className="w-full h-96 object-cover object-top"
//                                 autoPlay loop muted playsInline
//                                 onError={(e) => { e.target.onerror = null; e.target.closest('div').innerHTML = `<img src="https://placehold.co/800x400/ffefe1/b45309?text=Video+Unavailable+-+Course+Preview" alt="Course Preview" className="w-full h-96 object-cover object-top" />`; }}
//                             />
//                         ) : (
//                             <img
//                                 src={course.thumbnail}
//                                 alt="Course Preview"
//                                 className="w-full h-96 object-cover object-top"
//                                 onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x400/cccccc/333333?text=Image+Error"; }}
//                             />
//                         )}
//                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                             <PlayCircle size={80} className="text-white opacity-80" />
//                         </div>
//                     </div>

//                     <div className="p-8 md:p-12">
//                         <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
//                             <h1 className="text-4xl font-extrabold text-orange-800">{course.title}</h1>
//                             <div className="text-right">
//                                 <span className="text-4xl font-extrabold text-orange-700 block">
//                                     {getPriceDisplay(course.price)}
//                                 </span>
//                                 <span className="text-sm line-through text-gray-500">
//                                     {getPriceDisplay(course.originalPrice)}
//                                 </span>
//                             </div>
//                         </div>

//                         <p className="text-xl text-gray-700 mb-6">{course.headline}</p>

//                         <div className="flex items-center gap-6 border-b pb-4 mb-6">
//                             <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
//                                 <img src={course.facultyImage} alt={course.faculty} className="w-12 h-12 rounded-full object-cover border-4 border-yellow-500 shadow-md" />
//                                 Taught By: <span className="text-orange-600">{course.faculty}</span>
//                             </div>
//                             <div className="flex items-center gap-1 text-xl font-bold text-yellow-500">
//                                 <Star size={24} fill="currentColor" /> {course.rating.toFixed(1)}
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             <div>
//                                 <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
//                                     <CheckCircle size={20} className="text-green-500" /> What You'll Get
//                                 </h2>
//                                 <ul className="space-y-3">
//                                     {course.benefits.map((benefit, index) => (
//                                         <li key={index} className="flex items-start text-gray-600">
//                                             <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
//                                             {benefit}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="bg-orange-50 p-6 rounded-xl shadow-inner flex flex-col justify-between">
//                                 <div className="space-y-4 mb-6">
//                                     <div className="flex items-center text-gray-700">
//                                         <Clock size={20} className="text-orange-400 mr-3" />
//                                         <span className="font-semibold">Duration:</span> {course.duration}
//                                     </div>
//                                     <div className="flex items-center text-gray-700">
//                                         <BookOpen size={20} className="text-orange-400 mr-3" />
//                                         <span className="font-semibold">Category:</span> {course.category}
//                                     </div>
//                                 </div>

//                                 <button
//                                     onClick={() => onEnrollClick(course)}
//                                     className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-[1.02]"
//                                 >
//                                     ENROLL NOW
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };


// // =========================================================================
// // 3. Enroll Page Component (Simulated Redirect) - NEW
// // =========================================================================
// const EnrollPage = ({ course, onPaymentComplete }) => {
//     const [status, setStatus] = useState('redirecting'); // 'redirecting', 'success', 'failure'

//     React.useEffect(() => {
//         // Simulate an external redirection and processing delay
//         const timer = setTimeout(() => {
//             // After 3 seconds, simulate a successful payment resolution
//             setStatus('success');
//         }, 3000);

//         const returnTimer = setTimeout(() => {
//             // After showing success for 2 seconds, navigate back
//             onPaymentComplete();
//         }, 5000);

//         return () => {
//             clearTimeout(timer);
//             clearTimeout(returnTimer);
//         };
//     }, [onPaymentComplete]);

//     return (
//         <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center p-4">
//             <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ type: "spring", stiffness: 100 }}
//                 className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-lg w-full text-center border-t-8 border-orange-500"
//             >
//                 {status === 'redirecting' && (
//                     <>
//                         <Loader2 size={64} className="text-orange-500 mx-auto animate-spin mb-6" />
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Redirecting to Payment...</h2>
//                         <p className="text-gray-600">Please wait, you are being securely directed to the payment gateway for **{course.title}**.</p>
//                         <p className="text-sm mt-4 text-orange-500 font-semibold">Do not close this window.</p>
//                     </>
//                 )}
//                 {status === 'success' && (
//                     <motion.div
//                         initial={{ scale: 0.5, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                     >
//                         <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
//                         <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Successful! 🎉</h2>
//                         <p className="text-gray-600">You are now enrolled in **{course.title}**. Returning to course list...</p>
//                     </motion.div>
//                 )}
//             </motion.div>
//         </div>
//     );
// };

// // =========================================================================
// // 4. Courses Page Component (MAIN) - UPDATED FOR NAVIGATION
// // =========================================================================
// const CoursesPage = ({ onEnrollClick, onViewDetailsClick }) => {
//     const [visible, setVisible] = useState(12);
//     const [sortBy, setSortBy] = useState("recommended");
//     const [categoryFilter, setCategoryFilter] = useState("All");
//     const [search, setSearch] = useState("");
//     const [wishlist, setWishlist] = useState([]);

//     // ... (toggleWishlist logic omitted for brevity, it's correct)
//     const toggleWishlist = (id) => {
//         setWishlist((prev) =>
//             prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
//         );
//     };

//     // Memoized filtering and sorting logic
//     const sorted = useMemo(() => {
//         let currentFilteredCourses = allCourses.filter((c) => {
//             // 1. Search Filter
//             const searchMatch =
//                 c.title.toLowerCase().includes(search.toLowerCase()) ||
//                 c.faculty.toLowerCase().includes(search.toLowerCase()) ||
//                 c.headline.toLowerCase().includes(search.toLowerCase());

//             if (!searchMatch) return false;

//             // 2. Category Filter
//             if (categoryFilter !== "All" && c.category !== categoryFilter) return false;

//             return true;
//         });

//         // --- Sorting Logic ---
//         return [...currentFilteredCourses].sort((a, b) => {
//             // 1. Apply chosen sort method
//             if (sortBy === "ratingHigh") return b.rating - a.rating;
//             if (sortBy === "priceLow") return a.price - b.price;
//             if (sortBy === "priceHigh") return b.price - a.price;
//             if (sortBy === "newest") return b.id - a.id;
//             if (sortBy === "recommended") return b.isRecommended - a.isRecommended;

//             return a.id - b.id; // Default fallback
//         });
//     }, [search, categoryFilter, sortBy]);

//     const loadMore = () => setVisible((v) => Math.min(v + 12, sorted.length));
//     const resetFilters = () => {
//         setSearch("");
//         setCategoryFilter("All");
//         setSortBy("recommended");
//         setVisible(12);
//     };

//     const featuredCourse = allCourses[0];
//     const isFeaturedVideo = featuredCourse.thumbnail.toLowerCase().endsWith('.mp4');
//     const featuredMediaContent = isFeaturedVideo ? (
//         <video
//             src={featuredCourse.thumbnail}
//             alt="Featured Course Video"
//             className="w-full h-[300px] md:h-[420px] object-cover object-top"
//             autoPlay
//             loop
//             muted
//             playsInline
//             onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x420/ffefe1/b45309?text=Featured+Image+Placeholder" alt="Featured Course Image" className="w-full h-[300px] md:h-[420px] object-cover object-top" />`;
//             }}
//         />
//     ) : (
//         <img
//             src={featuredCourse.thumbnail}
//             alt="Featured Course Image"
//             className="w-full h-[300px] md:h-[420px] object-cover object-top"
//             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x420/cccccc/333333?text=Image+Error"; }}
//         />
//     );


//     return (
//         <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
//             {/* Header */}
//             <header className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-lg py-12 text-center text-white">
//                 <h1 className="text-4xl md:text-5xl font-extrabold font-serif">
//                     🪔 Explore All {allCourses.length} Courses
//                 </h1>
//                 <p className="text-lg mt-3 opacity-90 max-w-2xl mx-auto">
//                     Deepen your spiritual and analytical mastery across Jyotish, Vastu, Philosophy, and Sacred Texts.
//                 </p>
//             </header>

//             {/* Featured Course Section (using the prioritized course) */}
//             <section className="relative max-w-7xl mx-auto mt-16 px-6">
//                 <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
//                     🔥 Featured Masterclass: Vedic Astrology
//                 </h2>
//                 <motion.div 
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-yellow-400/80"
//                 >
//                     <div className="relative">
//                         {featuredMediaContent}
//                         <button 
//                             onClick={() => onViewDetailsClick(featuredCourse)} 
//                             className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300"
//                         >
//                              <PlayCircle size={60} className="text-white" />
//                         </button>
//                     </div>
//                     <div className="p-6 md:p-8">
//                         <div className="flex justify-between items-center flex-wrap">
//                             <h3 className="text-2xl font-bold text-orange-700">{featuredCourse.title}</h3>
//                             <div className="flex items-center gap-4 mt-2 md:mt-0">
//                                 <span className="text-3xl font-extrabold text-orange-800">{getPriceDisplay(featuredCourse.price)}</span>
//                                 <button
//                                     onClick={() => onEnrollClick(featuredCourse)}
//                                     className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-6 py-3 rounded-full font-bold shadow-lg transition transform hover:scale-[1.05]"
//                                 >
//                                     ENROLL NOW
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </section>

//             <section className="max-w-7xl mx-auto px-6 py-16">
//                 <div className="text-center mb-10">
//                     <h3 className="text-3xl font-semibold text-orange-700">
//                         📚 Browse All Offerings ({sorted.length} Results)
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-2">
//                         Showing {Math.min(visible, sorted.length)} courses
//                     </p>
//                 </div>

//                 {/* --- Advanced Filter Bar (Updated) --- */}
//                 <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg mb-12 border border-orange-200">
//                     <h4 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
//                         <Filter size={20} /> Course Filters
//                     </h4>
//                     <div className="flex flex-col md:flex-row items-center gap-4">

//                         {/* 1. Search Input */}
//                         <div className="relative w-full md:w-1/3">
//                             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                             <input
//                                 type="text"
//                                 placeholder="Search by title, topic, or faculty..."
//                                 value={search}
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//                             />
//                         </div>

//                         {/* 2. Category Filter (Combobox) */}
//                         <CategoryFilterCombobox
//                             value={categoryFilter}
//                             onChange={setCategoryFilter}
//                             options={categories}
//                         />

//                         {/* 3. Sort By Dropdown (NEW CUSTOM COMPONENT with hover effect) */}
//                         <SortByDropdown
//                             value={sortBy}
//                             onChange={setSortBy}
//                         />

//                     </div>

//                     <div className="mt-4 text-right">
//                         <button
//                             onClick={resetFilters}
//                             className="text-sm text-gray-500 hover:text-orange-600 transition underline"
//                         >
//                             Reset All Filters
//                         </button>
//                     </div>
//                 </div>

//                 {/* --- Course Grid --- */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     <AnimatePresence>
//                         {sorted.slice(0, visible).map((course) => (
//                             <CourseCard
//                                 key={course.id}
//                                 course={course}
//                                 toggleWishlist={toggleWishlist}
//                                 isWishlisted={wishlist.includes(course.id)}
//                                 onEnrollClick={onEnrollClick}
//                                 onViewDetailsClick={onViewDetailsClick}
//                             />
//                         ))}
//                     </AnimatePresence>
//                 </div>

//                 {/* Load More Button */}
//                 {visible < sorted.length && (
//                     <div className="text-center mt-12">
//                         <motion.button
//                             onClick={loadMore}
//                             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Load More Courses ({sorted.length - visible} remaining)
//                         </motion.button>
//                     </div>
//                 )}
//                 {sorted.length === 0 && (
//                     <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg">
//                         <Smile size={32} className="text-gray-400 mx-auto mb-4" />
//                         <p className="text-lg text-gray-600">No courses match your current filters. Try resetting or broadening your search!</p>
//                     </div>
//                 )}
//             </section>

//             {/* Footer (omitted for brevity) */}
//         </div>
//     );
// }

// // =========================================================================
// // 5. Main Application Logic
// // =========================================================================

// const App = () => {
//     const [currentPage, setCurrentPage] = useState('courses'); // 'courses', 'details', 'enroll'
//     const [selectedCourse, setSelectedCourse] = useState(null);

//     const handleViewDetails = (course) => {
//         setSelectedCourse(course);
//         setCurrentPage('details');
//     };

//     const handleEnrollClick = (course) => {
//         setSelectedCourse(course);
//         setCurrentPage('enroll');
//     };

//     const handlePaymentComplete = () => {
//         // After simulated payment, go back to the course listing
//         setSelectedCourse(null);
//         setCurrentPage('courses');
//     };

//     const handleBackToCourses = () => {
//         setSelectedCourse(null);
//         setCurrentPage('courses');
//     };

//     if (currentPage === 'enroll' && selectedCourse) {
//         return <EnrollPage course={selectedCourse} onPaymentComplete={handlePaymentComplete} />;
//     }

//     if (currentPage === 'details' && selectedCourse) {
//         return <CourseDetailsPage 
//             course={selectedCourse} 
//             onBackToCourses={handleBackToCourses} 
//             onEnrollClick={handleEnrollClick}
//         />;
//     }

//     return (
//         <CoursesPage
//             onViewDetailsClick={handleViewDetails}
//             onEnrollClick={handleEnrollClick}
//         />
//     );
// };

// export default App;









