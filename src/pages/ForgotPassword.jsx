
import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex justify-center items-center mt-15 mb-15 ">
      <div className="bg-white/50 p-8 rounded-lg shadow-xl/10 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
        <p className="text-gray-500 text-center mb-4">
          Enter your email to reset your password
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-500"
          >
            Reset Password
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;