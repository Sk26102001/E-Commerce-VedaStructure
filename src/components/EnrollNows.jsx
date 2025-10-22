// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, CheckCircle, BookOpen, Clock, Smile, User, Mail, Phone } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const getPriceDisplay = (price) => (price ? `₹${price.toLocaleString()}` : "₹0");

// export default function EnrollNows() {
//   const navigate = useNavigate();

//   // Example course data (you can pass this dynamically later)
//   const courseData = {
//     title: "Jyotish Master – 3 Month Vedic Astrology Course",
//     price: 5999,
//     originalPrice: 8999,
//     duration: "3 Months",
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Readings",
//     ],
//   };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

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
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       setTimeout(() => {
//         navigate("/"); // simulate going back after success
//       }, 3000);
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
//       const messages = {
//         name: "Please enter your full name (at least 3 characters).",
//         email: "Please enter a valid email address.",
//         phone: "Please enter a valid 10-digit phone number.",
//       };
//       return (
//         <motion.p
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="text-red-600 text-xs mt-1 font-medium"
//         >
//           {messages[field]}
//         </motion.p>
//       );
//     }
//     return null;
//   };

//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Successful!</h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for the <strong>{courseData.title}</strong> course is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">Redirecting to payment gateway...</p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link to="/courses" className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition">
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled ? "Payment Redirection" : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {/* LEFT COLUMN */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold">
//                   <Clock size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
//                   Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT COLUMN - FORM */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">Your Information</h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 text-gray-400" size={18} />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600 text-white py-3 rounded-full font-semibold shadow-md transition"
//                 >
//                   {loading ? "Submitting..." : "Submit Enrollment"}
//                 </motion.button>
//               </div>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, CheckCircle, BookOpen, Clock, Smile, User, Mail, Phone } from "lucide-react";

// const getPriceDisplay = (price) => (price ? `₹${Number(price).toLocaleString()}` : "₹0");

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // --- Get course details from query string ---
//   const queryParams = new URLSearchParams(location.search);
//   const title = queryParams.get("title") || "Jyotish Master – Vedic Astrology Course";
//   const price = queryParams.get("price") || "5999";

//   const courseData = {
//     title,
//     price,
//     originalPrice: Number(price) + 2000,
//     duration: "3 Months",
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Readings",
//     ],
//   };

//   // --- State ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // --- Validation ---
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       setTimeout(() => navigate("/"), 3000);
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
//       const messages = {
//         name: "Please enter your full name (at least 3 characters).",
//         email: "Please enter a valid email address.",
//         phone: "Please enter a valid 10-digit phone number.",
//       };
//       return (
//         <motion.p
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="text-red-600 text-xs mt-1 font-medium"
//         >
//           {messages[field]}
//         </motion.p>
//       );
//     }
//     return null;
//   };

//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Successful!</h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for the <strong>{courseData.title}</strong> course is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">Redirecting to payment gateway...</p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link to="/courses" className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition">
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled ? "Payment Redirection" : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {/* LEFT COLUMN */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold">
//                   <Clock size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
//                   Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT COLUMN - FORM */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">Your Information</h2>

//               {/* Form Inputs */}
//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 text-gray-400" size={18} />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600 text-white py-3 rounded-full font-semibold shadow-md transition"
//                 >
//                   {loading ? "Submitting..." : "Submit Enrollment"}
//                 </motion.button>
//               </div>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;







// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
// } from "lucide-react";

// // Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // --- Auto scroll to enrollment section when navigated with hash ---
//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth" });
//         }, 300);
//       }
//     }
//   }, [location]);

//   // --- Get course details from query string ---
//   const queryParams = new URLSearchParams(location.search);
//   const title =
//     queryParams.get("title") || "Jyotish Master – Vedic Astrology Course";
//   const plan = queryParams.get("plan") || "basic";

//   // --- Define all plans ---
//   const allPlans = {
//     basic: { label: "Basic", price: 5999 },
//     pro: { label: "Pro", price: 8999 },
//     premium: { label: "Premium", price: 12999 },
//   };

//   // --- Determine selected plan ---
//   const selectedPlan = allPlans[plan] || allPlans.basic;

//   const courseData = {
//     title,
//     plan: selectedPlan.label,
//     price: selectedPlan.price,
//     originalPrice: selectedPlan.price + 2000,
//     duration: "3 Months",
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Readings",
//     ],
//   };

//   // --- Form States ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // --- Validation ---
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       setTimeout(() => navigate("/"), 3000);
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
//       const messages = {
//         name: "Please enter your full name (at least 3 characters).",
//         email: "Please enter a valid email address.",
//         phone: "Please enter a valid 10-digit phone number.",
//       };
//       return (
//         <motion.p
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="text-red-600 text-xs mt-1 font-medium"
//         >
//           {messages[field]}
//         </motion.p>
//       );
//     }
//     return null;
//   };

//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle
//         size={64}
//         className="text-green-500 mx-auto mb-4"
//       />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for
//         the <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link
//           to="/courses"
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT COLUMN */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course
//                 Details
//               </h2>

//               <p className="text-lg text-gray-700 font-semibold mb-2">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               {/* Allow switching plan */}
//               <select
//                 onChange={(e) => {
//                   const newPlan = e.target.value;
//                   const newPrice = allPlans[newPlan].price;
//                   navigate(
//                     `/enrollnows?title=${encodeURIComponent(
//                       title
//                     )}&price=${newPrice}&plan=${newPlan}#enrollment-section`
//                   );
//                 }}
//                 value={plan}
//                 className="border border-orange-300 rounded-lg px-4 py-2 text-gray-700 font-medium mb-4"
//               >
//                 {Object.entries(allPlans).map(([key, { label, price }]) => (
//                   <option key={key} value={key}>
//                     {label} – ₹{price.toLocaleString()}
//                   </option>
//                 ))}
//               </select>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT COLUMN - FORM */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600 text-white py-3 rounded-full font-semibold shadow-md transition"
//                 >
//                   {loading ? "Submitting..." : "Submit Enrollment"}
//                 </motion.button>
//               </div>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;







// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
// } from "lucide-react";

// // Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// // --- Define all plans (Moved outside for cleaner scope) ---
// const allPlans = {
//   basic: { label: "Basic", price: 5999 },
//   pro: { label: "Pro", price: 8999 },
//   premium: { label: "Premium", price: 12999 },
// };
// const ALL_COURSES_DATA = {
//   // Your Daily Puja Course Configuration
//   "daily-puja": {
//     title: "The Daily Puja Routine (Nitya Karma) Course",
//     defaultPlan: "master",
//     duration: "3 Months",
//     // Base original price helps calculate the strikethrough price consistently
//     baseOriginalPrice: 7999, 
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions (Group)",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Aarti Practice Sessions",
//     ],
//   },
  
//   // --- EXAMPLE OF A SECOND COURSE ---
//   "vedic-astrology": {
//     title: "Vedic Astrology Mastery Course",
//     defaultPlan: "master",
//     duration: "6 Months",
//     baseOriginalPrice: 12000, 
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions (1:1)",
//       "Astrology Software Access",
//       "Certification Exam",
//     ],
//   },
//   // Add 14 more course configurations here...
// };

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // --- Get initial course details from query string ---
//   const queryParams = new URLSearchParams(location.search);
//   const initialTitle =
//     queryParams.get("title") || "Jyotish Master – Vedic Astrology Course";
//   const initialPlan = queryParams.get("plan") || "basic";

//   // FIX 1: Use state to manage the currently selected plan key (e.g., 'basic', 'pro')
//   // This state will be updated directly by the select dropdown.
//   const [currentPlanKey, setCurrentPlanKey] = useState(initialPlan);

//   // --- Auto scroll to enrollment section when navigated with hash ---
//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth" });
//         }, 300);
//       }
//     }
//     // FIX 2: If the URL's plan changes (e.g., from an external link), 
//     // update the local state to match the URL.
//     const urlPlan = new URLSearchParams(location.search).get("plan") || "basic";
//     if (urlPlan !== currentPlanKey) {
//         setCurrentPlanKey(urlPlan);
//     }

//   }, [location, currentPlanKey]);

//   // --- Determine selected plan and course data based on currentPlanKey state ---
//   const selectedPlan = allPlans[currentPlanKey] || allPlans.basic;

//   const courseData = {
//     title: initialTitle, // Use the title read once from the URL
//     plan: selectedPlan.label,
//     price: selectedPlan.price,
//     originalPrice: selectedPlan.price + 2000,
//     duration: "3 Months",
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Readings",
//     ],
//   };

//   // --- Form States ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // --- Validation ---
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       // In a real app, you would initiate the payment here.
//       setTimeout(() => navigate("/"), 3000); 
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
//       const messages = {
//         name: "Please enter your full name (at least 3 characters).",
//         email: "Please enter a valid email address.",
//         phone: "Please enter a valid 10-digit phone number.",
//       };
//       return (
//         <motion.p
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="text-red-600 text-xs mt-1 font-medium"
//         >
//           {messages[field]}
//         </motion.p>
//       );
//     }
//     return null;
//   };

//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle
//         size={64}
//         className="text-green-500 mx-auto mb-4"
//       />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for
//         the <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link
//           to="/courses"
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT COLUMN */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course
//                 Details
//               </h2>

//               <p className="text-lg text-gray-700 font-semibold mb-2">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               {/* Allow switching plan */}
//               <select
//                 onChange={(e) => {
//                   const newPlanKey = e.target.value;
//                   // FIX 3: Update local state first. This triggers the courseData recalculation.
//                   setCurrentPlanKey(newPlanKey);

//                   // Optional: Update the URL to keep it in sync, using the current title.
//                   navigate(
//                     `/enrollnows?title=${encodeURIComponent(
//                       courseData.title
//                     )}&plan=${newPlanKey}#enrollment-section`,
//                     { replace: true } // Use replace so the Back button still works correctly
//                   );
//                 }}
//                 // FIX 4: Bind the select value to the state variable
//                 value={currentPlanKey}
//                 className="border border-orange-300 rounded-lg px-4 py-2 text-gray-700 font-medium mb-4"
//               >
//                 {Object.entries(allPlans).map(([key, { label, price }]) => (
//                   <option key={key} value={key}>
//                     {label} – ₹{price.toLocaleString()}
//                   </option>
//                 ))}
//               </select>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT COLUMN - FORM */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600 text-white py-3 rounded-full font-semibold shadow-md transition"
//                 >
//                   {loading ? "Submitting..." : "Submit Enrollment"}
//                 </motion.button>
//               </div>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;







// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
// } from "lucide-react";

// // Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// // Define a constant for the default course ID for clarity
// const DEFAULT_COURSE_ID = "daily-puja";

// // --- Define all plans (Plan key must match the value attribute in the select) ---
// const allPlans = {
// //vedic astrology
//   basic: { label: "Basic", price: 5999 },
//   pro: { label: "Pro", price: 8999 },
//   premium: { label: "Premium", price: 12999 },
// };
// const allPlanss = {
//  // Daily Puja specific dynamic plans
//   starter: { label: "Sankalpa Starter", price: 3999 },
//   master: { label: "Sadhana Master", price: 6999 },
//   mentor: { label: "Purohit Mentor", price: 10999 },
// }

// const ALL_COURSES_DATA = {
//   [DEFAULT_COURSE_ID]: {
//     title: "Daily Puja Sadhana Course",
//     duration: "4 Weeks",
//     baseOriginalPrice: 7999,
//     benefits: [
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Q&A Sessions",
//       "Guided Puja Practice Recordings",
//     ],
//   },

//   "vedic-astrology": {
//     title: "Vedic Astrology Mastery Course",
//     duration: "6 Months",
//     baseOriginalPrice: 12000,
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions (1:1)",
//       "Astrology Software Access",
//       "Certification Exam",
//     ],
//   },
// };



// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // --- Get initial details from query string ---
//   const queryParams = new URLSearchParams(location.search);
//   const initialCourseId = queryParams.get("courseId") || DEFAULT_COURSE_ID;
//   const initialPlan = queryParams.get("plan") || "basic";

//   // State to manage the currently selected plan key and course ID
//   const [currentPlanKey, setCurrentPlanKey] = useState(initialPlan);
//   const [currentCourseId, setCurrentCourseId] = useState(initialCourseId);

//   // --- Auto scroll and URL sync (Updated to check both plan and courseId) ---
//   useEffect(() => {
//     // 1. Handle hash scrolling
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth" });
//         }, 300);
//       }
//     }

//     // 2. Sync local state with URL if navigated externally
//     const urlParams = new URLSearchParams(location.search);
//     const urlPlan = urlParams.get("plan") || "basic";
//     const urlCourseId = urlParams.get("courseId") || DEFAULT_COURSE_ID;

//     if (urlPlan !== currentPlanKey) {
//       setCurrentPlanKey(urlPlan);
//     }
//     if (urlCourseId !== currentCourseId) {
//       setCurrentCourseId(urlCourseId);
//     }
//   }, [location, currentPlanKey, currentCourseId]);

//   // --- Determine selected plan and course data dynamically ---
//   const currentCourse =
//     ALL_COURSES_DATA[currentCourseId] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];
//   const selectedPlan = allPlans[currentPlanKey] || allPlans.basic;

//   // Use useMemo to recalculate courseData only when plan or course ID changes
//   const courseData = useMemo(() => {
//     // This object contains all details needed for display
//     return {
//       title: currentCourse.title,
//       plan: selectedPlan.label,
//       price: selectedPlan.price,
//       originalPrice: currentCourse.baseOriginalPrice,
//       duration: currentCourse.duration,
//       benefits: currentCourse.benefits,
//     };
//   }, [currentCourse, selectedPlan]);

//   // --- Form States (unchanged) ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // --- Validation (unchanged) ---
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       // In a real app, you would initiate the payment here.
//       setTimeout(() => navigate("/"), 3000);
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
//       const messages = {
//         name: "Please enter your full name (at least 3 characters).",
//         email: "Please enter a valid email address.",
//         phone: "Please enter a valid 10-digit phone number.",
//       };
//       return (
//         <motion.p
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="text-red-600 text-xs mt-1 font-medium"
//         >
//           {messages[field]}
//         </motion.p>
//       );
//     }
//     return null;
//   };

//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle
//         size={64}
//         className="text-green-500 mx-auto mb-4"
//       />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for
//         the <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   const handlePlanChange = (e) => {
//     const newPlanKey = e.target.value;
//     setCurrentPlanKey(newPlanKey);

//     // Update the URL to keep it in sync with the current course and new plan
//     navigate(
//       `/enrollnows?courseId=${currentCourseId}&plan=${newPlanKey}#enrollment-section`,
//       { replace: true }
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link
//           to="/courses"
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT COLUMN - COURSE DETAILS */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               {/* Course Title (always visible, confirmed by courseData) */}
//               <p className="text-xl font-bold text-gray-800 mb-4">
//                 {courseData.title}
//               </p>

//               <p className="text-lg text-gray-700 font-semibold mb-2">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               {/* Allow switching plan */}
//               <select
//                 onChange={handlePlanChange}
//                 value={currentPlanKey}
//                 className="border border-orange-300 rounded-lg px-4 py-3 text-gray-700 font-medium mb-4 shadow-sm focus:ring-orange-500 focus:border-orange-500 transition cursor-pointer"
//               >
//                 {Object.entries(allPlans).map(([key, { label, price }]) => (
//                   <option key={key} value={key}>
//                     {label} – {getPriceDisplay(price)}
//                   </option>
//                 ))}
//               </select>

//               {/* Price Display */}
//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               {/* Benefits List */}
//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold pt-2 border-t border-orange-200 mt-2">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Course Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT COLUMN - FORM */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading || !isFormValid}
//                   type="submit"
//                   className={`w-full text-white py-3 rounded-full font-semibold shadow-lg transition ${
//                     loading || !isFormValid
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600"
//                   }`}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       Submitting...
//                     </span>
//                   ) : (
//                     "Submit Enrollment & Proceed to Payment"
//                   )}
//                 </motion.button>
//               </div>
//               <p className="text-center text-sm text-gray-500 mt-4">
//                 Total Amount Due:{" "}
//                 <span className="font-bold text-orange-600">
//                   {getPriceDisplay(courseData.price)}
//                 </span>
//               </p>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;







// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
// } from "lucide-react";

// // Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// // Define a constant for the default course ID for clarity
// const DEFAULT_COURSE_ID = "daily-puja";


// // --- Define all plans (We consolidate them here for clarity in the component logic) ---
// // We need one main `allPlans` object that contains all possible plan keys.
// // The component will use the correct set of keys based on the courseId passed in the URL.
// // IMPORTANT: The component logic (EnrollNows function) will currently only check the 'allPlans' object,
// // so we'll merge all plans into one for simplicity and modify the logic to handle course-specific plans.

// const allPlans = {
//   // Vedic Astrology Plans (original 'allPlans')
//   starter: { label: "starter", price: 5999 },
//   master: { label: "master", price: 8999 },
//   mentor: { label: "mentor", price: 12999 },
  
//   // Daily Puja Plans (original 'allPlanss')
//   // starter: { label: "Sankalpa Starter", price: 3999 },
//   // master: { label: "Sadhana Master", price: 6999 },
//   // mentor: { label: "Purohit Mentor", price: 10999 },
// };

// const ALL_COURSES_DATA = {
//   [DEFAULT_COURSE_ID]: {
//     title: "Daily Puja Sadhana Course",
//     duration: "4 Weeks",
//     baseOriginalPrice: 7999,
//     benefits: [
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Q&A Sessions",
//       "Guided Puja Practice Recordings",
//     ],
//     // Map course ID to its relevant plan keys and a default plan
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "master",
//   },

//   "vedic-astrology": {
//     title: "Vedic Astrology Mastery Course",
//     duration: "3 Months",
//     baseOriginalPrice: 12999,
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions (1:1)",
//       "Astrology Software Access",
//       "Certification Exam",
//     ],
//     // Map course ID to its relevant plan keys and a default plan
//     // planKeys: ["basic", "pro", "premium"],
//     // defaultPlan: "pro", 
//     // // Changed from 'basic' for consistency with common setups
//         // Map course ID to its relevant plan keys and a default plan
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "master",
//   },
//   "mantra-healing": {
//     title: "Mantra Healing Course",
//     duration: "3 Months",
//     baseOriginalPrice: 12000,
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions (1:1)",
//       "Astrology Software Access",
//       "Certification Exam",
//     ],
//     // Map course ID to its relevant plan keys and a default plan
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "master",
//   },
//     "vedic-mathematics": {
//     title: "Vedic Mathematics Course",
//     duration: "3 Months",
//     baseOriginalPrice: 12000,
//     benefits: [
//       "Lifetime Course Access",
//       "Live Mentorship Sessions (1:1)",
//       "Astrology Software Access",
//       "Certification Exam",
//     ],
//     // Map course ID to its relevant plan keys and a default plan
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "master",
//   },
  

// };

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // --- Get initial details from query string ---
//   const queryParams = new URLSearchParams(location.search);
//   const initialCourseId = queryParams.get("courseId") || DEFAULT_COURSE_ID;
  
//   // Get course-specific defaults
//   const courseConfig = ALL_COURSES_DATA[initialCourseId] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];
//   const defaultPlanKey = courseConfig.defaultPlan || "basic"; // Fallback to 'basic' if needed

//   const initialPlan = queryParams.get("plan") || defaultPlanKey;

//   // State to manage the currently selected plan key and course ID
//   const [currentPlanKey, setCurrentPlanKey] = useState(initialPlan);
//   const [currentCourseId, setCurrentCourseId] = useState(initialCourseId);

//   // --- Auto scroll and URL sync ---
//   useEffect(() => {
//     // 1. Handle hash scrolling
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth" });
//         }, 300);
//       }
//     }

//     // 2. Sync local state with URL if navigated externally
//     const urlParams = new URLSearchParams(location.search);
//     const urlCourseId = urlParams.get("courseId") || DEFAULT_COURSE_ID;
    
//     const currentCourseConfig = ALL_COURSES_DATA[urlCourseId] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];
//     const urlDefaultPlanKey = currentCourseConfig.defaultPlan || "basic";

//     const urlPlan = urlParams.get("plan") || urlDefaultPlanKey;
    
//     if (urlPlan !== currentPlanKey) {
//       setCurrentPlanKey(urlPlan);
//     }
//     if (urlCourseId !== currentCourseId) {
//       setCurrentCourseId(urlCourseId);
//     }
//   }, [location, currentPlanKey, currentCourseId]);

//   // --- Determine selected plan and course data dynamically ---
//   const currentCourse =
//     ALL_COURSES_DATA[currentCourseId] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];
    
//   // Use the plan passed via URL, or fall back to the course's default, or finally to a hardcoded 'basic'
//   const selectedPlan = allPlans[currentPlanKey] || allPlans[currentCourse.defaultPlan] || allPlans.basic;

//   // Use useMemo to recalculate courseData only when plan or course ID changes
//   const courseData = useMemo(() => {
//     // This object contains all details needed for display
//     return {
//       title: currentCourse.title,
//       plan: selectedPlan.label,
//       price: selectedPlan.price,
//       originalPrice: currentCourse.baseOriginalPrice,
//       duration: currentCourse.duration,
//       benefits: currentCourse.benefits,
//     };
//   }, [currentCourse, selectedPlan]);

//   // --- Form States (unchanged) ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // --- Validation (unchanged) ---
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };

//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       // In a real app, you would initiate the payment here.
//       setTimeout(() => navigate("/"), 3000);
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
//       const messages = {
//         name: "Please enter your full name (at least 3 characters).",
//         email: "Please enter a valid email address.",
//         phone: "Please enter a valid 10-digit phone number.",
//       };
//       return (
//         <motion.p
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           className="text-red-600 text-xs mt-1 font-medium"
//         >
//           {messages[field]}
//         </motion.p>
//       );
//     }
//     return null;
//   };

//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle
//         size={64}
//         className="text-green-500 mx-auto mb-4"
//       />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for
//         the <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   // NOTE: handlePlanChange is now unused since the select element is removed.
//   // We keep it here commented out just in case you need it later.
//   /*
//   const handlePlanChange = (e) => {
//     const newPlanKey = e.target.value;
//     setCurrentPlanKey(newPlanKey);

//     // Update the URL to keep it in sync with the current course and new plan
//     navigate(
//       `/enrollnows?courseId=${currentCourseId}&plan=${newPlanKey}#enrollment-section`,
//       { replace: true }
//     );
//   };
//   */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link
//           to="/courses"
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT COLUMN - COURSE DETAILS */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               {/* Course Title (always visible, confirmed by courseData) */}
//               <p className="text-xl font-bold text-gray-800 mb-4">
//                 {courseData.title}
//               </p>

//               {/* Display ONLY the Selected Plan Name */}
//               <p className="text-lg text-gray-700 font-semibold mb-4">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               {/* *** THE PLAN SELECTION DROPDOWN HAS BEEN REMOVED HERE *** */}

//               {/* Price Display */}
//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               {/* Benefits List */}
//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold pt-2 border-t border-orange-200 mt-2">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Course Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT COLUMN - FORM (unchanged) */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading || !isFormValid}
//                   type="submit"
//                   className={`w-full text-white py-3 rounded-full font-semibold shadow-lg transition ${
//                     loading || !isFormValid
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600"
//                   }`}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       Submitting...
//                     </span>
//                   ) : (
//                     "Submit Enrollment & Proceed to Payment"
//                   )}
//                 </motion.button>
//               </div>
//               <p className="text-center text-sm text-gray-500 mt-4">
//                 Total Amount Due:{" "}
//                 <span className="font-bold text-orange-600">
//                   {getPriceDisplay(courseData.price)}
//                 </span>
//               </p>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;






// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
// } from "lucide-react";

// // 🟠 Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// // 🟠 Default course ID
// const DEFAULT_COURSE_ID = "vedic-astrology";

// // 🟠 Unified plan list for all courses
// const allPlans = {
//   starter: { label: "Starter", price: 5999 },
//   master: { label: "Master", price: 8999 },
//   mentor: { label: "Mentor", price: 12999 },
// };

// // 🟠 All Courses Data
// const ALL_COURSES_DATA = {
//   "vedic-astrology": {
//     title: "Vedic Astrology Mastery Course",
//     duration: "3 Months",
//     baseOriginalPrice: 12999,
//     benefits: [
//       "All 3-Month Course Modules",
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Reading Sessions",
//     ],
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "master",
//   },
//   "daily-puja": {
//     title: "Daily Puja Sadhana Course",
//     duration: "4 Weeks",
//     baseOriginalPrice: 7999,
//     benefits: [
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Q&A Sessions",
//       "Guided Puja Practice Recordings",
//     ],
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "starter",
//   },
//   "mantra-healing": {
//     title: "Mantra Healing & Meditation Course",
//     duration: "6 Weeks",
//     baseOriginalPrice: 9999,
//     benefits: [
//       "Powerful Mantra Practices",
//       "Lifetime Course Access",
//       "Weekly Healing Sessions",
//       "Personalized Guidance by Gurus",
//     ],
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "master",
//   },
//   "vedic-mathematics": {
//     title: "Vedic Mathematics Speed Mastery",
//     duration: "8 Weeks",
//     baseOriginalPrice: 6999,
//     benefits: [
//       "Shortcut Techniques for Exams",
//       "Lifetime Access to Videos",
//       "Live Practice Sessions",
//       "Certificate on Completion",
//     ],
//     planKeys: ["starter", "master", "mentor"],
//     defaultPlan: "starter",
//   },
// };

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 🟠 Parse URL parameters
//   const queryParams = new URLSearchParams(location.search);
//   const courseIdFromURL = queryParams.get("courseId") || DEFAULT_COURSE_ID;
//   const planFromURL = queryParams.get("plan");

//   // 🟠 Get course config + default plan
//   const currentCourse =
//     ALL_COURSES_DATA[courseIdFromURL] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];
//   const defaultPlanKey = currentCourse.defaultPlan || "starter";
//   const currentPlanKey = planFromURL || defaultPlanKey;

//   const selectedPlan =
//     allPlans[currentPlanKey] || allPlans[currentCourse.defaultPlan];

//   // 🟠 Prepare course details for rendering
//   const courseData = useMemo(
//     () => ({
//       title: currentCourse.title,
//       plan: selectedPlan.label,
//       price: selectedPlan.price,
//       originalPrice: currentCourse.baseOriginalPrice,
//       duration: currentCourse.duration,
//       benefits: currentCourse.benefits,
//     }),
//     [currentCourse, selectedPlan]
//   );

//   // 🟠 Form States
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // 🟠 Form Validation
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };
//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       setTimeout(() => navigate("/"), 3000);
//     }, 2000);
//   };

//   // 🟠 Reusable Input Class + Error
//   const inputClass = (field) =>
//     `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
//       touched[field] && !validate[field](formData[field])
//         ? "border-red-500 bg-red-50"
//         : "border-gray-300 bg-gray-50 hover:border-orange-400"
//     }`;

//   const ErrorMessage = ({ field }) =>
//     touched[field] && !validate[field](formData[field]) ? (
//       <motion.p
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         className="text-red-600 text-xs mt-1 font-medium"
//       >
//         {field === "name"
//           ? "Please enter your full name."
//           : field === "email"
//           ? "Enter a valid email address."
//           : "Enter a valid 10-digit phone number."}
//       </motion.p>
//     ) : null;

//   // 🟠 Success Message
//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for the{" "}
//         <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link
//           to="/enrollnow"
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT: Course Info */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               <p className="text-xl font-bold text-gray-800 mb-4">
//                 {courseData.title}
//               </p>

//               <p className="text-lg text-gray-700 font-semibold mb-4">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold pt-2 border-t border-orange-200 mt-2">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Course Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT: Form */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading || !isFormValid}
//                   type="submit"
//                   className={`w-full text-white py-3 rounded-full font-semibold shadow-lg transition ${
//                     loading || !isFormValid
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600"
//                   }`}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       Submitting...
//                     </span>
//                   ) : (
//                     "Submit Enrollment & Proceed to Payment"
//                   )}
//                 </motion.button>
//               </div>
//               <p className="text-center text-sm text-gray-500 mt-4">
//                 Total Amount Due:{" "}
//                 <span className="font-bold text-orange-600">
//                   {getPriceDisplay(courseData.price)}
//                 </span>
//               </p>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;
















// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
// } from "lucide-react";

// // 🟠 Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// // 🟠 Default course ID
// const DEFAULT_COURSE_ID = "vedic-astrology";

// // ❌ Removed the old 'allPlans' global object.
// // ✅ Plan prices are now defined within each course for course-specific pricing.

// // 🟠 All Courses Data (Updated with specific plan pricing)
// const ALL_COURSES_DATA = {
//   "vedic-astrology": {
//     title: "Vedic Astrology Mastery Course",
//     duration: "3 Months",
//     baseOriginalPrice: 13999, // Base original price
//     benefits: [
//       "All 3-Month Course Modules",
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Reading Sessions",
//     ],
//     // --- COURSE-SPECIFIC PLAN PRICING ---
//     plans: {
//       starter: { label: "Starter", price: 5999 },
//       master: { label: "Master", price: 8999 },
//       mentor: { label: "Mentor", price: 12999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   "daily-puja": {
//     title: "Daily Puja Sadhana Course",
//     duration: "4 Weeks",
//     baseOriginalPrice: 3999,
//     benefits: [
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Q&A Sessions",
//       "Guided Puja Practice Recordings",
//     ],
//     // --- DIFFERENT COURSE, DIFFERENT PLAN PRICING ---
//     plans: {
//       starter: { label: "Basic Sadhana", price: 1499 }, // Lower price for 'starter' equivalent
//       master: { label: "Advanced Sadhana", price: 1999 },
//       mentor: { label: "Personalized Guru", price: 2999 },
//     },
//     defaultPlan: "starter",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   "mantra-healing": {
//     title: "Mantra Healing & Meditation Course",
//     duration: "6 Weeks",
//     baseOriginalPrice: 11999,
//     benefits: [
//       "Powerful Mantra Practices",
//       "Lifetime Course Access",
//       "Weekly Healing Sessions",
//       "Personalized Guidance by Gurus",
//     ],
//     // --- ANOTHER COURSE, UNIQUE PLAN PRICING ---
//     plans: {
//       starter: { label: "Silver Mantra", price: 3999 }, // Another price for 'starter' equivalent
//       master: { label: "Gold Mantra", price: 6999 },
//       mentor: { label: "Platinum Mantra", price: 10999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   "vedic-mathematics": {
//     title: "Vedic Mathematics Speed Mastery",
//     duration: "8 Weeks",
//     baseOriginalPrice: 4999,
//     benefits: [
//       "Shortcut Techniques for Exams",
//       "Lifetime Access to Videos",
//       "Live Practice Sessions",
//       "Certificate on Completion",
//     ],
//     // --- ANOTHER COURSE, UNIQUE PLAN PRICING ---
//     plans: {
//       starter: { label: "Quick Learn", price: 999 }, // Lowest price for 'starter' equivalent
//       master: { label: "Speed Master", price: 1999 },
//       mentor: { label: "Exam Ace", price: 2999 },
//     },
//     defaultPlan: "starter",
//     planKeys: ["starter", "master", "mentor"],
//   },

// };

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 🟠 Parse URL parameters
//   const queryParams = new URLSearchParams(location.search);
//   const courseIdFromURL = queryParams.get("courseId") || DEFAULT_COURSE_ID;
//   const planFromURL = queryParams.get("plan");

//   // 🟠 Get current course config
//   const currentCourse =
//     ALL_COURSES_DATA[courseIdFromURL] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];

//   const defaultPlanKey = currentCourse.defaultPlan || "starter";
//   const currentPlanKey = planFromURL || defaultPlanKey;

//   // 🛑 FIX: Get selected plan price from the course's specific plan list
//   const selectedPlan =
//     currentCourse.plans[currentPlanKey] ||
//     currentCourse.plans[currentCourse.defaultPlan];

//   // 🟠 Prepare course details for rendering
//   const courseData = useMemo(
//     () => ({
//       title: currentCourse.title,
//       plan: selectedPlan.label,
//       price: selectedPlan.price, // This is now the course-specific price
//       originalPrice: currentCourse.baseOriginalPrice,
//       duration: currentCourse.duration,
//       benefits: currentCourse.benefits,
//     }),
//     [currentCourse, selectedPlan]
//   );

//   // 🟠 Form States
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // 🟠 Form Validation
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };
//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     // Simulate API call and payment redirection
//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       setTimeout(() => navigate("/"), 3000); // Redirect after success
//     }, 2000);
//   };

//   // 🟠 Reusable Input Class + Error
//   const inputClass = (field) =>
//     `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
//       touched[field] && !validate[field](formData[field])
//         ? "border-red-500 bg-red-50"
//         : "border-gray-300 bg-gray-50 hover:border-orange-400"
//     }`;

//   const ErrorMessage = ({ field }) =>
//     touched[field] && !validate[field](formData[field]) ? (
//       <motion.p
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         className="text-red-600 text-xs mt-1 font-medium"
//       >
//         {field === "name"
//           ? "Please enter your full name."
//           : field === "email"
//           ? "Enter a valid email address."
//           : "Enter a valid 10-digit phone number."}
//       </motion.p>
//     ) : null;

//   // 🟠 Success Message
//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for the{" "}
//         <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         <Link
//           to="/enrollnow"
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT: Course Info */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               <p className="text-xl font-bold text-gray-800 mb-4">
//                 {courseData.title}
//               </p>

//               <p className="text-lg text-gray-700 font-semibold mb-4">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold pt-2 border-t border-orange-200 mt-2">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Course Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT: Form */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading || !isFormValid}
//                   type="submit"
//                   className={`w-full text-white py-3 rounded-full font-semibold shadow-lg transition ${
//                     loading || !isFormValid
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600"
//                   }`}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       Submitting...
//                     </span>
//                   ) : (
//                     "Submit Enrollment & Proceed to Payment"
//                   )}
//                 </motion.button>
//               </div>
//               <p className="text-center text-sm text-gray-500 mt-4">
//                 Total Amount Due:{" "}
//                 <span className="font-bold text-orange-600">
//                   {getPriceDisplay(courseData.price)}
//                 </span>
//               </p>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;







// import React, { useState, useEffect, useMemo } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle,
//   BookOpen,
//   Clock,
//   Smile,
//   User,
//   Mail,
//   Phone,
//   Maximize, // New icon for unique benefit (e.g., Vastu)
//   Sun, // New icon for unique benefit (e.g., Muhurtas)
//   Feather, // New icon for unique benefit (e.g., Sanskrit)
// } from "lucide-react";

// // 🟠 Utility for price formatting
// const getPriceDisplay = (price) =>
//   price ? `₹${Number(price).toLocaleString()}` : "₹0";

// // 🟠 Default course ID (using the first one from the list)
// const DEFAULT_COURSE_ID = "vedic-astrology";

// // 🟠 All Courses Data (Expanded to include all 16 courses)
// const ALL_COURSES_DATA = {
//   // 1. Vedic Astrology
//   "vedic-astrology": {
//     title: "Vedic Astrology Mastery Course",
//     duration: "3 Months",
//     baseOriginalPrice: 13999, 
//     benefits: [
//       "All 3-Month Course Modules",
//       "Lifetime Course Access",
//       "Free Bonuses Worth ₹2,000",
//       "2 Live Chart Reading Sessions",
//     ],
//     plans: {
//       starter: { label: "Foundation", price: 5999 },
//       master: { label: "Mastery", price: 8999 },
//       mentor: { label: "Professional Guru", price: 12999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 2. Palmistry (Hastrekha)
//   "palmistry": {
//     title: "Palmistry (Hastrekha) Decoding Course",
//     duration: "3 Months",
//     baseOriginalPrice: 4999, 
//     benefits: [
//       "Mastery of Major and Minor Lines",
//       "Techniques for Predictive Timing",
//       "Planetary Mounts Analysis",
//       "Final Certification Exam",
//     ],
//     plans: {
//       starter: { label: "Line Explorer", price: 2499 },
//       master: { label: "Master Palmist", price: 3599 },
//       mentor: { label: "Oracle Mentor", price: 4599 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 3. Numerology
//   "numerology": {
//     title: "Numerology: Unlock Destiny via Moolank & Bhagyan",
//     duration: "6 Weeks",
//     baseOriginalPrice: 8999, 
//     benefits: [
//       "Life Path & Destiny Number Calculation",
//       "Practical Name Correction Techniques",
//       "Yearly & Monthly Predictions",
//       "Custom Number-Based Gemstone Guidance",
//     ],
//     plans: {
//       starter: { label: "Basic Calc", price: 1999 },
//       master: { label: "Predictive", price: 3199 },
//       mentor: { label: "Professional", price: 5299 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 4. Vastu Shastra
//   "vastu-shastra": {
//     title: "Vastu Shastra: Balance Your Space",
//     duration: "8 Weeks",
//     baseOriginalPrice: 7999, 
//     benefits: [
//       "Understanding 16 Vastu Zones",
//       "Practical Remedies Without Demolition",
//       "Designing a Vastu-Compliant Home/Office",
//       "Certificate in Vastu Consultancy",
//     ],
//     plans: {
//       starter: { label: "Home Vastu", price: 3499 },
//       master: { label: "Pro Consultant", price: 5999 },
//       mentor: { label: "Master Designer", price: 6999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 5. Sanskrit Vyakarana
//   "sanskrit-vyakarana": {
//     title: "Sanskrit Vyakarana (Grammar) Masterclass",
//     duration: "4 Months",
//     baseOriginalPrice: 8999, 
//     benefits: [
//       "Mastering Sandhi & Samasa Rules",
//       "Detailed Study of Verb Forms (Dhatus)",
//       "Ability to Read Ancient Texts",
//       "Weekly Live Grammar Practice",
//     ],
//     plans: {
//       starter: { label: "Beginner", price: 999 },
//       master: { label: "Intermediate", price: 1899 },
//       mentor: { label: "Advanced Scholar", price: 3999 },
//     },
//     defaultPlan: "master", // Changed default plan key to 'master'
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 6. Daily Puja Routine
//   "daily-puja": {
//     title: "Daily Puja Sadhana Course",
//     duration: "4 Weeks",
//     baseOriginalPrice: 3999,
//     benefits: [
//       "Guided Step-by-Step Puja Rituals",
//       "Selecting the Right Deity",
//       "Pronunciation of Essential Mantras",
//       "Guided Puja Practice Recordings",
//     ],
//     plans: {
//       starter: { label: "Basic Sadhana", price: 1499 },
//       master: { label: "Advanced Sadhana", price: 1999 },
//       mentor: { label: "Personalized Guru", price: 2999 },
//     },
//     defaultPlan: "starter",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 7. Muhurtas
//   "muhurtas": {
//     title: "Science of Shub Muhurta (Auspicious Timing)",
//     duration: "6 Weeks",
//     baseOriginalPrice: 6999, 
//     benefits: [
//       "Calculating Auspicious Time for Events",
//       "Understanding Panchang (Tithi, Vara, Nakshatra)",
//       "Muhurta for Marriage, Travel, & Business",
//       "Live Case Studies and Practice",
//     ],
//     plans: {
//       starter: { label: "Basic plan", price: 1499 },
//       master: { label: "master plan", price: 2999 },
//       mentor: { label: "Expert Consultant", price: 4999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 8. Upanishads
//   "upanishads": {
//     title: "Dive Deep into the Upanishads & Philosophy",
//     duration: "10 Weeks",
//     baseOriginalPrice: 10999, 
//     benefits: [
//       "In-Depth Study of Major Upanishads",
//       "Understanding Self & Brahman",
//       "Application of Vedanta in Modern Life",
//       "Guided Meditation Practices",
//     ],
//     plans: {
//       starter: { label: "Explorer", price: 4999 },
//       master: { label: "Philosopher", price: 5999 },
//       mentor: { label: "Vedanta Scholar", price: 6999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 9. Vedas
//   "vedas": {
//     title: "Foundations of Eternal Knowledge: The 4 Vedas",
//     duration: "4 Months",
//     baseOriginalPrice: 18999, 
//     benefits: [
//       "Overview of Rig, Yajur, Sama, Atharva Veda",
//       "Understanding Suktas and Hymns",
//       "Historical and Cultural Context",
//       "Access to Rare Audio Recordings",
//     ],
//     plans: {
//       starter: { label: "Beginner Path", price: 3999 },
//       master: { label: "Intermediate", price: 6999 },
//       mentor: { label: "Advanced Research", price: 8999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 10. Purana & Itihas
//   "purana-itihas": {
//     title: "Decode Ramayana, Mahabharata & The Puranas",
//     duration: "12 Weeks",
//     baseOriginalPrice: 8999, 
//     benefits: [
//       "In-Depth Context of Major Narratives",
//       "Ethical & Moral Lessons for Life",
//       "The Interconnection of Itihas & Philosophy",
//       "Interactive Storytelling Sessions",
//     ],
//     plans: {
//       starter: { label: "Myth Explorer", price: 1999 },
//       master: { label: "Story Decipherer", price: 3499 },
//       mentor: { label: "Narrative Expert", price: 5499 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 11. Vedic Mathematics
//   "vedic-mathematics": {
//     title: "Vedic Mathematics Speed Mastery",
//     duration: "8 Weeks",
//     baseOriginalPrice: 4999,
//     benefits: [
//       "Shortcut Techniques for Exams",
//       "Lifetime Access to Videos",
//       "Live Practice Sessions",
//       "Certificate on Completion",
//     ],
//     plans: {
//       starter: { label: "Quick Learn", price: 999 },
//       master: { label: "Speed Master", price: 1999 },
//       mentor: { label: "Exam Ace", price: 2999 },
//     },
//     defaultPlan: "starter",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 12. Mantra Healing (Existing, kept for consistency)
//   "mantra-healing": {
//     title: "Mantra Healing & Meditation Course",
//     duration: "6 Weeks",
//     baseOriginalPrice: 11999,
//     benefits: [
//       "Powerful Mantra Practices",
//       "Lifetime Course Access",
//       "Weekly Healing Sessions",
//       "Personalized Guidance by Gurus",
//     ],
//     plans: {
//       starter: { label: "Silver Mantra", price: 3999 },
//       master: { label: "Gold Mantra", price: 6999 },
//       mentor: { label: "Platinum Mantra", price: 10999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 13. Sanskrit (Reading + Chanting)
//   "sanskrit-chanting": {
//     title: "Sanskrit: Reading, Chanting & Clarity",
//     duration: "2 Months",
//     baseOriginalPrice: 6999, 
//     benefits: [
//       "Correct Pronunciation (Svara)",
//       "Techniques for Rhythmic Chanting",
//       "Reading Devanagari Script Fluently",
//       "Certificate in Vedic Chanting",
//     ],
//     plans: {
//       starter: { label: "Svara Basics", price: 1499 },
//       master: { label: "Chanting Pro", price: 2299 },
//       mentor: { label: "Recitation Master", price: 4499 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 14. Sacred Texts Reading
//   "sacred-texts-reading": {
//     title: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.",
//     duration: "6 Weeks",
//     baseOriginalPrice: 5999, 
//     benefits: [
//       "Verse-by-Verse Reading Guidance",
//       "Understanding Core Themes",
//       "Weekly Group Reading Circles",
//       "Personalized Feedback on Recitation",
//     ],
//     plans: {
//       starter: { label: "Text Explorer", price: 999 },
//       master: { label: "Recitation Pro", price: 2199 },
//       mentor: { label: "Guided Scholar", price: 3999 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 15. Vedic Science
//   "vedic-science": {
//     title: "Vedic Science: Hidden Concepts in Agni, Ether, Time",
//     duration: "10 Weeks",
//     baseOriginalPrice: 10999, 
//     benefits: [
//       "Connecting Vedas to Modern Physics",
//       "Concepts of Time & Creation",
//       "Analysis of Pancha Mahabhutas",
//       "Research Paper Access",
//     ],
//     plans: {
//       starter: { label: "Basic Concepts", price: 1999 },
//       master: { label: "Advanced Theory", price: 4999 },
//       mentor: { label: "Research Scholar", price: 5199 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
//   // 16. Vedic Philosophy
//   "vedic-philosophy": {
//     title: "Vedic Philosophy: Karma, Dharma, Rebirth, Moksha",
//     duration: "8 Weeks",
//     baseOriginalPrice: 9999, 
//     benefits: [
//       "Deep Dive into Karma & Rebirth",
//       "Understanding Dharma & Artha",
//       "Paths to Moksha (Liberation)",
//       "Guided Ethical Discussion Forums",
//     ],
//     plans: {
//       starter: { label: "Basic Ethics", price: 1699 },
//       master: { label: "Holistic View", price: 2999 },
//       mentor: { label: "Life Mentor", price: 5499 },
//     },
//     defaultPlan: "master",
//     planKeys: ["starter", "master", "mentor"],
//   },
// };

// const EnrollNows = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 🟠 Parse URL parameters
//   const queryParams = new URLSearchParams(location.search);
//   // FIX: Use the URL-parsed course ID
//   const courseIdFromURL = queryParams.get("courseId") || DEFAULT_COURSE_ID; 
//   const planFromURL = queryParams.get("plan");

//   // 🟠 Get current course configuration based on URL or default
//   const currentCourse =
//     ALL_COURSES_DATA[courseIdFromURL] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];

//   const defaultPlanKey = currentCourse.defaultPlan || "starter";
//   const currentPlanKey = planFromURL || defaultPlanKey;

//   // 🛑 FIX: Get selected plan price from the course's specific plan list
//   const selectedPlan =
//     currentCourse.plans[currentPlanKey] ||
//     currentCourse.plans[currentCourse.defaultPlan];

//   // 🟠 Prepare course details for rendering
//   const courseData = useMemo(
//     () => ({
//       title: currentCourse.title,
//       plan: selectedPlan.label,
//       price: selectedPlan.price, // This is now the course-specific price
//       originalPrice: currentCourse.baseOriginalPrice,
//       duration: currentCourse.duration,
//       benefits: currentCourse.benefits,
//     }),
//     [currentCourse, selectedPlan]
//   );

//   // 🟠 Form States
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     batch: "Morning Batch (9AM - 11AM)",
//   });
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   // 🟠 Form Validation
//   const validate = {
//     name: (v) => v.trim().length >= 3,
//     email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
//     phone: (v) => /^\d{10}$/.test(v),
//   };
//   const isFormValid =
//     validate.name(formData.name) &&
//     validate.email(formData.email) &&
//     validate.phone(formData.phone);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleBlur = (e) =>
//     setTouched({ ...touched, [e.target.name]: true });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTouched({ name: true, email: true, phone: true });
//     if (!isFormValid) return;
//     setLoading(true);

//     // Simulate API call and payment redirection
//     setTimeout(() => {
//       setLoading(false);
//       setIsEnrolled(true);
//       // NOTE: In a real app, you would redirect to a payment gateway URL here.
//       setTimeout(() => navigate("/"), 3000); // Redirect after success (Simulated)
//     }, 2000);
//   };

//   // 🟠 Reusable Input Class + Error
//   const inputClass = (field) =>
//     `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
//       touched[field] && !validate[field](formData[field])
//         ? "border-red-500 bg-red-50"
//         : "border-gray-300 bg-gray-50 hover:border-orange-400"
//     }`;

//   const ErrorMessage = ({ field }) =>
//     touched[field] && !validate[field](formData[field]) ? (
//       <motion.p
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "auto" }}
//         className="text-red-600 text-xs mt-1 font-medium"
//       >
//         {field === "name"
//           ? "Please enter your full name."
//           : field === "email"
//           ? "Enter a valid email address."
//           : "Enter a valid 10-digit phone number."}
//       </motion.p>
//     ) : null;

//   // 🟠 Success Message
//   const SuccessScreen = () => (
//     <motion.div
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
//     >
//       <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
//       <h2 className="text-3xl font-bold text-green-700 mb-2">
//         Enrollment Successful!
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Thank you, <strong>{formData.name}</strong>! Your request for the{" "}
//         <strong>{courseData.title}</strong> ({courseData.plan} Plan)
//         is being processed.
//       </p>
//       <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//       <p className="mt-4 text-sm text-gray-500">
//         Redirecting to payment gateway...
//       </p>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
//       >
//         {/* Note: The 'Back to Courses' link is a placeholder, assuming you have a course listing page */}
//         <Link
//           to="/enrollnow" 
//           className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
//         >
//           <ArrowLeft size={20} className="mr-2" /> Back to Courses
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
//           {isEnrolled
//             ? "Payment Redirection"
//             : `Enroll in: ${courseData.title}`}
//         </h1>

//         <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
//           {isEnrolled
//             ? "Please wait while we prepare your payment link."
//             : "Secure your seat and begin your spiritual journey today."}
//         </p>

//         {isEnrolled ? (
//           <SuccessScreen />
//         ) : (
//           <div
//             id="enrollment-section"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10"
//           >
//             {/* LEFT: Course Info */}
//             <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
//               <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
//                 <BookOpen className="text-yellow-600" size={24} /> Course Details
//               </h2>

//               <p className="text-xl font-bold text-gray-800 mb-4">
//                 {courseData.title}
//               </p>

//               <p className="text-lg text-gray-700 font-semibold mb-4">
//                 Selected Plan:{" "}
//                 <span className="text-orange-600 font-bold">
//                   {courseData.plan}
//                 </span>
//               </p>

//               <p className="text-4xl font-extrabold text-orange-700 mb-6">
//                 {getPriceDisplay(courseData.price)}
//                 <span className="text-base font-normal line-through text-gray-500 ml-3">
//                   {getPriceDisplay(courseData.originalPrice)}
//                 </span>
//               </p>

//               <ul className="space-y-3 flex-grow mb-6">
//                 {courseData.benefits.map((b, i) => (
//                   <li key={i} className="flex items-start text-gray-700">
//                     <CheckCircle
//                       size={18}
//                       className="text-green-500 mr-3 mt-1 flex-shrink-0"
//                     />
//                     {b}
//                   </li>
//                 ))}
//                 <li className="flex items-start text-gray-700 font-bold pt-2 border-t border-orange-200 mt-2">
//                   <Clock
//                     size={18}
//                     className="text-orange-500 mr-3 mt-1 flex-shrink-0"
//                   />
//                   Course Duration: {courseData.duration}
//                 </li>
//               </ul>

//               <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
//                 <Smile size={18} className="mr-2 text-yellow-500" />
//                 Join over 1,000+ satisfied students!
//               </div>
//             </div>

//             {/* RIGHT: Form */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
//             >
//               <h2 className="text-2xl font-bold text-orange-700 mb-6">
//                 Your Information
//               </h2>

//               <div className="space-y-6">
//                 {/* Name */}
//                 <div>
//                   <div className="relative">
//                     <User
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Full Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("name")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="name" />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("email")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="email" />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <div className="relative">
//                     <Phone
//                       className="absolute left-3 top-3 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Your 10-digit Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputClass("phone")}
//                       disabled={loading}
//                     />
//                   </div>
//                   <ErrorMessage field="phone" />
//                 </div>

//                 {/* Batch */}
//                 <div>
//                   <select
//                     name="batch"
//                     value={formData.batch}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400"
//                   >
//                     <option>Morning Batch (9AM - 11AM)</option>
//                     <option>Afternoon Batch (2PM - 4PM)</option>
//                     <option>Evening Batch (6PM - 8PM)</option>
//                   </select>
//                 </div>

//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   disabled={loading || !isFormValid}
//                   type="submit"
//                   className={`w-full text-white py-3 rounded-full font-semibold shadow-lg transition ${
//                     loading || !isFormValid
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600"
//                   }`}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                       Submitting...
//                     </span>
//                   ) : (
//                     "Submit Enrollment & Proceed to Payment"
//                   )}
//                 </motion.button>
//               </div>
//               <p className="text-center text-sm text-gray-500 mt-4">
//                 Total Amount Due:{" "}
//                 <span className="font-bold text-orange-600">
//                   {getPriceDisplay(courseData.price)}
//                 </span>
//               </p>
//             </motion.form>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default EnrollNows;








import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import {
  ArrowLeft,
  CheckCircle,
  BookOpen,
  Clock,
  Smile,
  User,
  Mail,
  Phone,
  ArrowRight, // Using this for the dropdown indicator
  // Maximize, Sun, Feather,
} from "lucide-react";

// 🟠 Utility for price formatting
const getPriceDisplay = (price) =>
  price ? `₹${Number(price).toLocaleString()}` : "₹0";

// 🟠 Default course ID (using the first one from the list)
const DEFAULT_COURSE_ID = "vedic-astrology";

// 🟠 Batch Options
const batchOptions = [
    "Morning Batch (9AM - 11AM)",
    "Afternoon Batch (2PM - 4PM)",
    "Evening Batch (6PM - 8PM)",
];

// 🟠 All Courses Data (Expanded to include all 16 courses)
const ALL_COURSES_DATA = {
  // ... (ALL_COURSES_DATA remains unchanged)
  // 1. Vedic Astrology
  "vedic-astrology": {
    title: "Vedic Astrology Mastery Course",
    duration: "3 Months",
    baseOriginalPrice: 13999, 
    benefits: [
      "All 3-Month Course Modules",
      "Lifetime Course Access",
      "Free Bonuses Worth ₹2,000",
      "2 Live Chart Reading Sessions",
    ],
    plans: {
      starter: { label: "Foundation", price: 5999 },
      master: { label: "Mastery", price: 8999 },
      mentor: { label: "Professional Guru", price: 12999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 2. Palmistry (Hastrekha)
  "palmistry": {
    title: "Palmistry (Hastrekha) Decoding Course",
    duration: "3 Months",
    baseOriginalPrice: 4999, 
    benefits: [
      "Mastery of Major and Minor Lines",
      "Techniques for Predictive Timing",
      "Planetary Mounts Analysis",
      "Final Certification Exam",
    ],
    plans: {
      starter: { label: "Line Explorer", price: 2499 },
      master: { label: "Master Palmist", price: 3599 },
      mentor: { label: "Oracle Mentor", price: 4599 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 3. Numerology
  "numerology": {
    title: "Numerology: Unlock Destiny via Moolank & Bhagyan",
    duration: "6 Weeks",
    baseOriginalPrice: 8999, 
    benefits: [
      "Life Path & Destiny Number Calculation",
      "Practical Name Correction Techniques",
      "Yearly & Monthly Predictions",
      "Custom Number-Based Gemstone Guidance",
    ],
    plans: {
      starter: { label: "Basic Calc", price: 1999 },
      master: { label: "Predictive", price: 3199 },
      mentor: { label: "Professional", price: 5299 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 4. Vastu Shastra
  "vastu-shastra": {
    title: "Vastu Shastra: Balance Your Space",
    duration: "8 Weeks",
    baseOriginalPrice: 7999, 
    benefits: [
      "Understanding 16 Vastu Zones",
      "Practical Remedies Without Demolition",
      "Designing a Vastu-Compliant Home/Office",
      "Certificate in Vastu Consultancy",
    ],
    plans: {
      starter: { label: "Home Vastu", price: 3499 },
      master: { label: "Pro Consultant", price: 5999 },
      mentor: { label: "Master Designer", price: 6999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 5. Sanskrit Vyakarana
  "sanskrit-vyakarana": {
    title: "Sanskrit Vyakarana (Grammar) Masterclass",
    duration: "4 Months",
    baseOriginalPrice: 8999, 
    benefits: [
      "Mastering Sandhi & Samasa Rules",
      "Detailed Study of Verb Forms (Dhatus)",
      "Ability to Read Ancient Texts",
      "Weekly Live Grammar Practice",
    ],
    plans: {
      starter: { label: "Beginner", price: 999 },
      master: { label: "Intermediate", price: 1899 },
      mentor: { label: "Advanced Scholar", price: 3999 },
    },
    defaultPlan: "master", // Changed default plan key to 'master'
    planKeys: ["starter", "master", "mentor"],
  },
  // 6. Daily Puja Routine
  "daily-puja": {
    title: "Daily Puja Sadhana Course",
    duration: "4 Weeks",
    baseOriginalPrice: 3999,
    benefits: [
      "Guided Step-by-Step Puja Rituals",
      "Selecting the Right Deity",
      "Pronunciation of Essential Mantras",
      "Guided Puja Practice Recordings",
    ],
    plans: {
      starter: { label: "Basic Sadhana", price: 1499 },
      master: { label: "Advanced Sadhana", price: 1999 },
      mentor: { label: "Personalized Guru", price: 2999 },
    },
    defaultPlan: "starter",
    planKeys: ["starter", "master", "mentor"],
  },
  // 7. Muhurtas
  "muhurtas": {
    title: "Science of Shub Muhurta (Auspicious Timing)",
    duration: "6 Weeks",
    baseOriginalPrice: 6999, 
    benefits: [
      "Calculating Auspicious Time for Events",
      "Understanding Panchang (Tithi, Vara, Nakshatra)",
      "Muhurta for Marriage, Travel, & Business",
      "Live Case Studies and Practice",
    ],
    plans: {
      starter: { label: "Basic plan", price: 1499 },
      master: { label: "master plan", price: 2999 },
      mentor: { label: "Expert Consultant", price: 4999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 8. Upanishads
  "upanishads": {
    title: "Dive Deep into the Upanishads & Philosophy",
    duration: "10 Weeks",
    baseOriginalPrice: 10999, 
    benefits: [
      "In-Depth Study of Major Upanishads",
      "Understanding Self & Brahman",
      "Application of Vedanta in Modern Life",
      "Guided Meditation Practices",
    ],
    plans: {
      starter: { label: "Explorer", price: 4999 },
      master: { label: "Philosopher", price: 5999 },
      mentor: { label: "Vedanta Scholar", price: 6999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 9. Vedas
  "vedas": {
    title: "Foundations of Eternal Knowledge: The 4 Vedas",
    duration: "4 Months",
    baseOriginalPrice: 18999, 
    benefits: [
      "Overview of Rig, Yajur, Sama, Atharva Veda",
      "Understanding Suktas and Hymns",
      "Historical and Cultural Context",
      "Access to Rare Audio Recordings",
    ],
    plans: {
      starter: { label: "Beginner Path", price: 3999 },
      master: { label: "Intermediate", price: 6999 },
      mentor: { label: "Advanced Research", price: 8999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 10. Purana & Itihas
  "purana-itihas": {
    title: "Decode Ramayana, Mahabharata & The Puranas",
    duration: "12 Weeks",
    baseOriginalPrice: 8999, 
    benefits: [
      "In-Depth Context of Major Narratives",
      "Ethical & Moral Lessons for Life",
      "The Interconnection of Itihas & Philosophy",
      "Interactive Storytelling Sessions",
    ],
    plans: {
      starter: { label: "Myth Explorer", price: 1999 },
      master: { label: "Story Decipherer", price: 3499 },
      mentor: { label: "Narrative Expert", price: 5499 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 11. Vedic Mathematics
  "vedic-mathematics": {
    title: "Vedic Mathematics Speed Mastery",
    duration: "8 Weeks",
    baseOriginalPrice: 4999,
    benefits: [
      "Shortcut Techniques for Exams",
      "Lifetime Access to Videos",
      "Live Practice Sessions",
      "Certificate on Completion",
    ],
    plans: {
      starter: { label: "Quick Learn", price: 999 },
      master: { label: "Speed Master", price: 1999 },
      mentor: { label: "Exam Ace", price: 2999 },
    },
    defaultPlan: "starter",
    planKeys: ["starter", "master", "mentor"],
  },
  // 12. Mantra Healing (Existing, kept for consistency)
  "mantra-healing": {
    title: "Mantra Healing & Meditation Course",
    duration: "6 Weeks",
    baseOriginalPrice: 11999,
    benefits: [
      "Powerful Mantra Practices",
      "Lifetime Course Access",
      "Weekly Healing Sessions",
      "Personalized Guidance by Gurus",
    ],
    plans: {
      starter: { label: "Silver Mantra", price: 3999 },
      master: { label: "Gold Mantra", price: 6999 },
      mentor: { label: "Platinum Mantra", price: 10999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 13. Sanskrit (Reading + Chanting)
  "sanskrit-chanting": {
    title: "Sanskrit: Reading, Chanting & Clarity",
    duration: "2 Months",
    baseOriginalPrice: 6999, 
    benefits: [
      "Correct Pronunciation (Svara)",
      "Techniques for Rhythmic Chanting",
      "Reading Devanagari Script Fluently",
      "Certificate in Vedic Chanting",
    ],
    plans: {
      starter: { label: "Svara Basics", price: 1499 },
      master: { label: "Chanting Pro", price: 2299 },
      mentor: { label: "Recitation Master", price: 4499 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 14. Sacred Texts Reading
  "sacred-texts-reading": {
    title: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.",
    duration: "6 Weeks",
    baseOriginalPrice: 5999, 
    benefits: [
      "Verse-by-Verse Reading Guidance",
      "Understanding Core Themes",
      "Weekly Group Reading Circles",
      "Personalized Feedback on Recitation",
    ],
    plans: {
      starter: { label: "Text Explorer", price: 999 },
      master: { label: "Recitation Pro", price: 2199 },
      mentor: { label: "Guided Scholar", price: 3999 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 15. Vedic Science
  "vedic-science": {
    title: "Vedic Science: Hidden Concepts in Agni, Ether, Time",
    duration: "10 Weeks",
    baseOriginalPrice: 10999, 
    benefits: [
      "Connecting Vedas to Modern Physics",
      "Concepts of Time & Creation",
      "Analysis of Pancha Mahabhutas",
      "Research Paper Access",
    ],
    plans: {
      starter: { label: "Basic Concepts", price: 1999 },
      master: { label: "Advanced Theory", price: 4999 },
      mentor: { label: "Research Scholar", price: 5199 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
  // 16. Vedic Philosophy
  "vedic-philosophy": {
    title: "Vedic Philosophy: Karma, Dharma, Rebirth, Moksha",
    duration: "8 Weeks",
    baseOriginalPrice: 9999, 
    benefits: [
      "Deep Dive into Karma & Rebirth",
      "Understanding Dharma & Artha",
      "Paths to Moksha (Liberation)",
      "Guided Ethical Discussion Forums",
    ],
    plans: {
      starter: { label: "Basic Ethics", price: 1699 },
      master: { label: "Holistic View", price: 2999 },
      mentor: { label: "Life Mentor", price: 5499 },
    },
    defaultPlan: "master",
    planKeys: ["starter", "master", "mentor"],
  },
};

const EnrollNows = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🟠 Parse URL parameters
  const queryParams = new URLSearchParams(location.search);
  const courseIdFromURL = queryParams.get("courseId") || DEFAULT_COURSE_ID; 
  const planFromURL = queryParams.get("plan");

  // 🟠 Get current course configuration based on URL or default
  const currentCourse =
    ALL_COURSES_DATA[courseIdFromURL] || ALL_COURSES_DATA[DEFAULT_COURSE_ID];

  const defaultPlanKey = currentCourse.defaultPlan || "starter";
  const currentPlanKey = planFromURL || defaultPlanKey;

  // 🛑 FIX: Get selected plan price from the course's specific plan list
  const selectedPlan =
    currentCourse.plans[currentPlanKey] ||
    currentCourse.plans[currentCourse.defaultPlan];

  // 🟠 Prepare course details for rendering
  const courseData = useMemo(
    () => ({
      title: currentCourse.title,
      plan: selectedPlan.label,
      price: selectedPlan.price, // This is now the course-specific price
      originalPrice: currentCourse.baseOriginalPrice,
      duration: currentCourse.duration,
      benefits: currentCourse.benefits,
    }),
    [currentCourse, selectedPlan]
  );

  // 🟠 Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: batchOptions[0], // Initialize with the first option
  });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  // NEW STATE for custom dropdown
  const [isBatchDropdownOpen, setIsBatchDropdownOpen] = useState(false); 

  // 🟠 Form Validation
  const validate = {
    name: (v) => v.trim().length >= 3,
    email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
    phone: (v) => /^\d{10}$/.test(v),
  };
  const isFormValid =
    validate.name(formData.name) &&
    validate.email(formData.email) &&
    validate.phone(formData.phone);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleBlur = (e) =>
    setTouched({ ...touched, [e.target.name]: true });

    // NEW HANDLERS for custom batch dropdown
    const handleBatchSelect = (batchValue) => {
        setFormData({ ...formData, batch: batchValue });
        setIsBatchDropdownOpen(false);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (!isFormValid) return;
    setLoading(true);

    // Simulate API call and payment redirection
    setTimeout(() => {
      setLoading(false);
      setIsEnrolled(true);
      // NOTE: In a real app, you would redirect to a payment gateway URL here.
      setTimeout(() => navigate("/"), 3000); // Redirect after success (Simulated)
    }, 2000);
  };

  // 🟠 Reusable Input Class + Error
  const inputClass = (field) =>
    `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
      touched[field] && !validate[field](formData[field])
        ? "border-red-500 bg-red-50"
        : "border-gray-300 bg-gray-50 hover:border-orange-400"
    }`;

  const ErrorMessage = ({ field }) =>
    touched[field] && !validate[field](formData[field]) ? (
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="text-red-600 text-xs mt-1 font-medium"
      >
        {field === "name"
          ? "Please enter your full name."
          : field === "email"
          ? "Enter a valid email address."
          : "Enter a valid 10-digit phone number."}
      </motion.p>
    ) : null;

  // 🟠 Success Message
  const SuccessScreen = () => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
    >
      <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-green-700 mb-2">
        Enrollment Successful!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you, <strong>{formData.name}</strong>! Your request for the{" "}
        <strong>{courseData.title}</strong> ({courseData.plan} Plan)
        is being processed.
      </p>
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-sm text-gray-500">
        Redirecting to payment gateway...
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
        {/* Note: The 'Back to Courses' link is a placeholder, assuming you have a course listing page */}
        <Link
          to="/enrollnow" 
          className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Courses
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
          {isEnrolled
            ? "Payment Redirection"
            : `Enroll in: ${courseData.title}`}
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
          {isEnrolled
            ? "Please wait while we prepare your payment link."
            : "Secure your seat and begin your spiritual journey today."}
        </p>

        {isEnrolled ? (
          <SuccessScreen />
        ) : (
          <div
            id="enrollment-section"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* LEFT: Course Info */}
            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
                <BookOpen className="text-yellow-600" size={24} /> Course Details
              </h2>

              <p className="text-xl font-bold text-gray-800 mb-4">
                {courseData.title}
              </p>

              <p className="text-lg text-gray-700 font-semibold mb-4">
                Selected Plan:{" "}
                <span className="text-orange-600 font-bold">
                  {courseData.plan}
                </span>
              </p>

              <p className="text-4xl font-extrabold text-orange-700 mb-6">
                {getPriceDisplay(courseData.price)}
                <span className="text-base font-normal line-through text-gray-500 ml-3">
                  {getPriceDisplay(courseData.originalPrice)}
                </span>
              </p>

              <ul className="space-y-3 flex-grow mb-6">
                {courseData.benefits.map((b, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <CheckCircle
                      size={18}
                      className="text-green-500 mr-3 mt-1 flex-shrink-0"
                    />
                    {b}
                  </li>
                ))}
                <li className="flex items-start text-gray-700 font-bold pt-2 border-t border-orange-200 mt-2">
                  <Clock
                    size={18}
                    className="text-orange-500 mr-3 mt-1 flex-shrink-0"
                  />
                  Course Duration: {courseData.duration}
                </li>
              </ul>

              <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
                <Smile size={18} className="mr-2 text-yellow-500" />
                Join over 1,000+ satisfied students!
              </div>
            </div>

            {/* RIGHT: Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-orange-700 mb-6">
                Your Information
              </h2>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3 text-gray-400"
                      size={18}
                    />
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

                {/* Email */}
                <div>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-gray-400"
                      size={18}
                    />
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

                {/* Phone */}
                <div>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-3 text-gray-400"
                      size={18}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your 10-digit Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("phone")}
                      disabled={loading}
                    />
                  </div>
                  <ErrorMessage field="phone" />
                </div>

                {/* Batch - Custom Dropdown Replacement */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Batch Time:</label>
                    <div className="relative">
                        {/* Custom Dropdown Button */}
                        <button
                            type="button"
                            onClick={() => setIsBatchDropdownOpen(!isBatchDropdownOpen)}
                            className={`w-full p-3 pl-4 border rounded-xl bg-gray-50 text-left font-medium text-gray-800
                                        focus:ring-2 focus:ring-yellow-400 outline-none transition duration-200
                                        flex justify-between items-center ${
                                            isBatchDropdownOpen ? "border-orange-500" : "border-gray-300 hover:border-orange-400"
                                        }`}
                            disabled={loading}
                        >
                            {formData.batch}
                            <ArrowRight
                                className={`w-4 h-4 text-gray-500 transform transition-transform ${
                                    isBatchDropdownOpen ? "rotate-90" : "rotate-0"
                                }`}
                            />
                        </button>

                        {/* Custom Dropdown Options List */}
                        <AnimatePresence>
                            {isBatchDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    // Positions the list directly below the button
                                    className="absolute top-[100%] inset-x-0 bg-white border border-gray-300 rounded-xl shadow-xl z-10 max-h-48 overflow-y-auto mt-1"
                                >
                                    {batchOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => handleBatchSelect(option)}
                                            className={`p-3 cursor-pointer text-gray-800 transition duration-150 rounded-lg mx-1 my-1
                                                ${
                                                    formData.batch === option
                                                        ? 'bg-orange-500 text-white font-semibold'
                                                        : 'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white' // The requested gradient hover
                                                }`}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  disabled={loading || !isFormValid}
                  type="submit"
                  className={`w-full text-white py-3 rounded-full font-semibold shadow-lg transition ${
                    loading || !isFormValid
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:to-orange-600"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Enrollment & Proceed to Payment"
                  )}
                </motion.button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Total Amount Due:{" "}
                <span className="font-bold text-orange-600">
                  {getPriceDisplay(courseData.price)}
                </span>
              </p>
            </motion.form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EnrollNows;