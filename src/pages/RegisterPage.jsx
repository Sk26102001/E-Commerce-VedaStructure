// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoMailOutline, IoLockClosedOutline, IoPersonSharp, IoEye, IoEyeOff } from "react-icons/io5";
// import { motion } from "framer-motion";

// export default function RegisterPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Animation settings
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6 } },
//   };

//  const itemVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-red-300 pt-20 px-4">
//       <motion.div
//         className="bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/30"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Title */}
//         <motion.h2
//           className="text-3xl font-bold text-center text-white mb-6"
//           variants={itemVariants}
//         >
//           Sign Up
//         </motion.h2>

//         {/* Form */}
//         <motion.form className="space-y-4" variants={itemVariants}>
//           {/* Name */}
//           <motion.div
//             className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
//             variants={itemVariants}
//           >
//             <div className="flex items-center px-3 py-3">
//               <IoPersonSharp className="text-gray-400" />
//               <div className="w-px h-6 bg-gray-300 mx-2"></div>
//             </div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
//             />
//           </motion.div>

//           {/* Email */}
//           <motion.div
//             className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
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
//               className="absolute right-3 top-3 text-gray-500 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <IoEyeOff /> : <IoEye />}
//             </div>
//           </motion.div>

//           {/* Button */}
//           <motion.button
//             className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold shadow-md"
//             variants={itemVariants}
//           >
//             Continue
//           </motion.button>
//         </motion.form>

//         {/* Link */}
//         <motion.div
//           className="mt-4 text-center text-white/80 text-sm"
//           variants={itemVariants}
//         >
//           <Link to="/login" className="hover:text-white underline">
//             Already have an account? Login
//           </Link>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }





// import React, { useState } from "react";

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`User Registered: ${form.name}`);
//   };

//   return (
//     <div className="flex justify-center items-center h-[80vh]">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 mb-3 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 mb-3 rounded"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 mb-3 rounded"
//           required
//         />
//         <button className="bg-green-600 text-white px-4 py-2 w-full rounded">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }







import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Validate Password
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(""); // Clear errors if all good

    // ✅ Here you would send data to API or backend for authentication
    console.log("Registering:", { name, number, email, password });
    alert("Registration successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-md w-full max-w-md p-6">
        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-md">
          <Link
            to="/login"
            className="w-1/2 py-3 text-gray-600 font-medium rounded-md hover:bg-gray-200 text-center"
          >
            Login
          </Link>
          <button className="w-1/2 py-3 bg-white text-gray-700 font-medium rounded-md shadow">
            Register
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Username"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Mobile Number</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Show Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Have already an account?{" "}
          <Link to="/login" className="text-yellow-500 font-medium">
            Login Here
          </Link>
        </p>

        {/* Security Info */}
        <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
          <span className="mr-2 text-yellow-500">🔒</span>
          Your information is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default RegisterPage