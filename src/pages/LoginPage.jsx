
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Password regex: min 6 chars, uppercase, lowercase, number, special char
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate Email/Phone
    if (!emailOrPhone.trim()) {
      setError("Please enter your email or phone number.");
      return;
    }

    if (emailOrPhone.includes("@") && !emailRegex.test(emailOrPhone)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate Password
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError(""); // Clear error if valid
    console.log("Logging in with:", { emailOrPhone, password });
    alert("Login successful!");
  };

  return (
    <div className="mt-15 mb-15 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl/10 p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-black mb-6 text-center">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Phone/Email */}
          <label className="block text-gray-700 mb-2">Phone / Email</label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Enter your Email or Phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          {/* Password + Forgot */}
          <div className="flex justify-between items-center mb-2">
            <label className="text-gray-700">Password</label>
            <Link
              to="/forgot-password"
              className="text-yellow-500 text-sm font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Show Error */}
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-500 font-medium">
            Register
          </Link>
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
