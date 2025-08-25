
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
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;

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

    if (password !== confirmPassword) {brabr
      setError("Passwords do not match");
      return;
    }

    setError(""); // Clear errors if all good

    // ✅ Here you would send data to API or backend for authentication
    console.log("Registering:", { name, number, email, password });
    alert("Registration successful!");
  };

  return (
    <div className="flex items-center justify-center  mt-5 mb-10 ">
      <div className="bg-white rounded-md shadow-xl/10 w-full max-w-md p-6">
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
              placeholder=""
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
              placeholder=""
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

export default RegisterPage;