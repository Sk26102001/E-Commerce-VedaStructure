
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ForgotPassword() {


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
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-yellow-500 to-red-300 pt-20">
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
          Reset Your Password
        </motion.h2>

        {/* Form */}
        <motion.form className="space-y-4" variants={itemVariants}>
          {/* Email Input */}
          <motion.div
            className="relative flex items-center border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-orange-400 transition"
            variants={itemVariants}
          >
            <div className="flex items-center px-3 py-3">
              <IoMailOutline className="text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" />
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 bg-transparent outline-none text-gray-800 placeholder-gray-600"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold shadow-md"
            variants={itemVariants}
          >
            Send Reset Link
          </motion.button>
        </motion.form>

        {/* Back to Login */}
        <motion.div
          className="mt-4 text-center text-white/80 text-sm"
          variants={itemVariants}
        >
          <Link
            to="/login"
            className="text-orange-700 hover:text-orange-800 font-semibold underline"
          >
            Back to Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
