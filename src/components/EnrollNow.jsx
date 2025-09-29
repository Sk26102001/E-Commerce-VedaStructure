
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


import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EnrollNow() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    name: (v) => v.trim().length > 0,
    email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
    phone: (v) => /^\d{10}$/.test(v),
  };

  const isFormValid =
    validate.name(formData.name) &&
    validate.email(formData.email) &&
    validate.phone(formData.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/paymentpage"); // Navigate programmatically after 2s
    }, 2000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition ${
      touched[field] && !validate[field](formData[field])
        ? "border-red-500"
        : "border-gray-300"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex flex-col items-center py-16 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#7b1b1b] mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Enroll in Our Astrology Course
      </motion.h1>

      <p className="text-gray-700 text-lg md:text-xl max-w-2xl text-center mb-10">
        Unlock the secrets of the stars with expert guidance. Learn astrology
        from basics to advanced concepts and start your transformative journey
        today!
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg mx-auto relative rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[#7b1b1b] mb-6 text-center">
            Enroll & Pay Now
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("name")}
              />
              {touched.name && !validate.name(formData.name) && (
                <p className="text-red-500 text-xs mt-1">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("email")}
              />
              {touched.email && !validate.email(formData.email) && (
                <p className="text-red-500 text-xs mt-1">Enter a valid email</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClass("phone")}
              />
              {touched.phone && !validate.phone(formData.phone) && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid 10-digit phone
                </p>
              )}
            </div>

            {/* Batch */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Preferred Batch
              </label>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option>Morning Batch (9AM - 11AM)</option>
                <option>Afternoon Batch (2PM - 4PM)</option>
                <option>Evening Batch (7PM - 9PM)</option>
              </select>
            </div>

            {/* Confirm & Pay */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!isFormValid || loading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition flex justify-center items-center ${
                isFormValid && !loading
                  ? "bg-[#7b1b1b] hover:bg-[#601313]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Confirm & Pay"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
