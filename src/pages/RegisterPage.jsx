import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline, IoPersonSharp, IoEye, IoEyeOff } from "react-icons/io5";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.6 } },
  };

 const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-red-300 pt-20 px-4">
      <motion.div
        className="bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-md border border-white/30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-6"
          variants={itemVariants}
        >
          Sign Up
        </motion.h2>

        {/* Form */}
        <motion.form className="space-y-4" variants={itemVariants}>
          {/* Name */}
          <motion.div
            className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
            variants={itemVariants}
          >
            <div className="flex items-center px-3 py-3">
              <IoPersonSharp className="text-gray-400" />
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
            variants={itemVariants}
          >
            <div className="flex items-center px-3 py-3">
              <IoMailOutline className="text-gray-400" />
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
            />
          </motion.div>

          {/* Password
          <motion.div
            className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
            variants={itemVariants}
          >
            <div className="flex items-center px-3 py-3">
              <IoLockClosedOutline className="text-gray-400" />
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
            />
            <div
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </div>
          </motion.div> */}

          {/* Password */}
<motion.div
  className="relative flex flex-col border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition p-1"
  variants={itemVariants}
>
  <div className="flex items-center">
    <div className="flex items-center px-3 py-3">
      <IoLockClosedOutline className="text-gray-400" />
      <div className="w-px h-6 bg-gray-300 mx-2"></div>
    </div>
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
    />
    <div
      className="absolute right-3 top-3 text-gray-500 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <IoEyeOff /> : <IoEye />}
    </div>
  </div>

  {/* Error message */}
  {!isPasswordValid(formData.password) && formData.password.length > 0 && (
    <p className="text-red-500 text-xs px-3 pb-2">
      Password must be 8-16 characters and include at least one special character.
    </p>
  )}
</motion.div>





          {/* Button */}
          <motion.button
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold shadow-md"
            variants={itemVariants}
          >
            Continue
          </motion.button>
        </motion.form>

        {/* Link */}
        <motion.div
          className="mt-4 text-center text-gray/50  text-sm"
          variants={itemVariants}
        >
          <Link to="/login" className="hover:text-orange-700 underline">
            Already have an account? Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
