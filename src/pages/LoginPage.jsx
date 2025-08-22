// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoMailOutline, IoLockClosedOutline, IoEye, IoEyeOff } from "react-icons/io5";
// import { motion } from "framer-motion";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Animation settings
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-red-300 overflow-auto px-4 pt-20">
//       <motion.div
//         className="bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/30"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h2
//           className="text-3xl font-bold text-center text-white mb-6"
//           variants={itemVariants}
//         >
//           Welcome Back
//         </motion.h2>

//         {/* Login Form */}
//         <motion.form className="space-y-4" variants={itemVariants}>
//           {/* Email */}
//           <motion.div
//             className="flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
//             variants={itemVariants}
//           >
//             <div className="flex items-center px-3 py-3">
//               <IoMailOutline className="text-gray-400" />
//               <div className="w-px h-6 bg-gray-300 mx-2"></div>
//             </div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
//             />
//           </motion.div>

//           {/* Password */}
//           <motion.div
//             className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
//             variants={itemVariants}
//           >
//             <div className="flex items-center px-3 py-3">
//               <IoLockClosedOutline className="text-gray-400" />
//               <div className="w-px h-6 bg-gray-300 mx-2"></div>
//             </div>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
//             />
//             <div
//               className="absolute right-4 cursor-pointer text-gray-500"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <IoEyeOff /> : <IoEye />}
//             </div>
//           </motion.div>

//           {/* Remember + Forgot */}
//           <div className="flex items-center justify-between text-sm text-white/80">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input type="checkbox" className="accent-yellow-500" />
//               <span>Remember me</span>
//             </label>
//             <Link to="/forgot-password" className="hover:text-white underline">
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Login Button */}
//           <motion.button
//             className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold shadow-md"
//             variants={itemVariants}
//           >
//             Login
//           </motion.button>
//         </motion.form>

//         {/* Bottom Links */}
//         <motion.div
//           className="mt-4 flex justify-center text-white/80 text-sm"
//           variants={itemVariants}
//         >
//           <span>Don't have an account?</span>
//           <Link
//             to="/signup"
//             className="ml-1 text-orange-700 font-semibold hover:underline"
//           >
//             Sign Up
//           </Link>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }





import { Link } from "react-router-dom";


import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Login
        </h2>

        {/* Phone/Email */}
        <label className="block text-gray-700 mb-2">Phone / Email</label>
        <input
          type="text"
          placeholder="Enter Phone or Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Password + Forgot */}
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-700">Password</label>
          {/* <a href="#" className="text-yellow-500 text-sm font-medium">
            Forgot password?
          </a> */}

          <Link to="/forgot-password" className="text-yellow-500 text-sm font-medium">Forgot password?</Link>


        </div>
        <input
          type="password"
          placeholder="********"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Login Button */}
        <button className="w-full bg-yellow-400 text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition">
          Login
        </button>

        {/* Register link */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          {/* <a href="#" className="text-yellow-500 font-medium">
            Register
          </a> */}

          <Link to="/register" className="text-yellow-500 font-medium">Register</Link>




        </p>

        {/* Security Note */}
        <div className="flex items-center text-gray-500 text-sm mt-4">
          <span className="text-yellow-500 text-lg mr-2">⚠️</span>
          Your information is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
