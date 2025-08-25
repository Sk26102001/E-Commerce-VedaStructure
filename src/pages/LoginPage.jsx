
import { Link } from "react-router-dom";


import React from "react";

const LoginPage = () => {
  return (
    <div className="mt-15 mb-15  flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl/10 p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Login
        </h2>

        {/* Phone/Email */}
        <label className="block text-gray-700 mb-2">Phone / Email</label>
        <input
          type="text"
          placeholder="Enter your Email"
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
          placeholder="Password"
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
          <span className="text-yellow-500 text-lg mr-2">⚠</span>
          Your information is secure and encrypted
        </div>
      </div>
    </div>
  );
};

export default LoginPage;