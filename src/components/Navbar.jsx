

import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import CartPage from "../pages/CartPage";
import { IoPersonSharp } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* Top Banner */}
      <div className="flex justify-center items-center gap-3 py-2 px-4 bg-gradient-to-br from-orange-400 to-yellow-400 text-white text-sm font-semibold border-b border-gray-200">
        <p>LIMITED OFFER: 30% OFF. USE RABBIT30 at Checkout.</p>
        <span className="bg-red-400 text-white px-5 py-1 rounded-full font-bold text-md select-none">
           {formatTime(timeLeft)}
        </span>
      </div>

      {/* Logo + Search + Account */}
      <div className="relative flex items-center justify-between py-3 px-4 border-b border-gray-200">
        {/* Left: Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl text-gray-700 hover:text-orange-500"
        >
          <RxHamburgerMenu />
        </button>

        {/* Logo */}
        <div className="flex flex-col leading-tight text-center md:text-left">
          <h2 className="font-serif font-bold text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Veda Structure
          </h2>
          <p className="tracking-widest text-gray-400 text-xs">
            Making Worship Easier Through Online Worldwide
          </p>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 w-80 lg:w-96 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-red-200 py-2 px-4 text-black placeholder-gray-500 focus:outline-none w-full"
          />
          <button className="text-3xl text-white bg-yellow-400 rounded-full p-1 hover:bg-yellow-500 cursor-pointer">
            <CiSearch />
          </button>
        </div>

        {/* Right: Login + Register + Cart (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 px-5 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:text-orange-500 transition-all duration-300"
          >
            <IoPersonSharp size={20} />
            <span>Login</span>
          </button>
        
          <span>|</span>
          <button
            className="relative text-gray-700 hover:text-orange-400 text-3xl"
            onClick={() => setCartOpen(true)}
          >
            <TbShoppingBag />
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center space-x-8 font-semibold text-base text-gray-700 px-4 py-3">
        <Link to="/" className="hover:text-orange-400 transition">Home</Link>
        <Link to="/talk-to-astrologer" className="hover:text-orange-400 transition">Talk To Astrologer</Link>

        {/* Puja Dropdown */}
        <div className="relative group">
          <button className="flex items-center hover:text-orange-400 transition">
            Puja <RiArrowDropDownLine className="ml-1 text-2xl" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 border border-gray-200 border-t-4 border-t-orange-500">
            <Link to="/puja/all" className="block px-4 py-2 hover:bg-orange-100">All Puja</Link>
            <Link to="/puja/yagya" className="block px-4 py-2 hover:bg-orange-100">Yagya Puja</Link>
            <Link to="/puja/havan" className="block px-4 py-2 hover:bg-orange-100">Homa/Havan</Link>
            <Link to="/puja/japa" className="block px-4 py-2 hover:bg-orange-100">Japa/Chanting</Link>
          </div>
        </div>

        {/* Astro Report */}
        <div className="relative group">
          <button className="flex items-center hover:text-orange-400 transition">
            Astro Report <RiArrowDropDownLine className="ml-1 text-2xl" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 border border-gray-200 border-t-4 border-t-orange-500">
            <Link to="/astro-report/basic" className="block px-4 py-2 hover:bg-orange-100">Basic Report</Link>
            <Link to="/astro-report/detailed" className="block px-4 py-2 hover:bg-orange-100">Detailed Report</Link>
          </div>
        </div>



        {/* Veda Store */}
        <div className="relative group">
          <button className="flex items-center hover:text-orange-400 transition">
            Veda Store <RiArrowDropDownLine className="ml-1 text-2xl" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 border border-gray-200 border-t-4 border-t-orange-500">
            <Link to="/veda-store/explore all" className="block px-4 py-2 hover:bg-orange-100">Explore All</Link>
            <Link to="/veda-store/rudraksha" className="block px-4 py-2 hover:bg-orange-100">Rudraksha</Link>
            <Link to="/veda-store/gemstone" className="block px-4 py-2 hover:bg-orange-100">Gemstone</Link>
            <Link to="/veda-store/bracelet" className="block px-4 py-2 hover:bg-orange-100">Bracelet</Link>
             <Link to="/veda-store/yantras" className="block px-4 py-2 hover:bg-orange-100">Yantras</Link>
              <Link to="/veda-store/rakshabandhan special(rakhi)" className="block px-4 py-2 hover:bg-orange-100">Rakshabandhan Special(Rakhi)</Link>
               <Link to="/veda-store/rudraksha combinations" className="block px-4 py-2 hover:bg-orange-100">Rudraksha combinations</Link>
          </div>
        </div>

        <Link to="/astrology-courses" className="hover:text-orange-400 transition">Astrology Courses</Link>
        <Link to="/article" className="hover:text-orange-400 transition">Article</Link>
        <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-serif font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Veda Structure
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-orange-500 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-3 px-4 py-4 font-semibold text-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Home</Link>
          <Link to="/talk-to-astrologer" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Talk To Astrologer</Link>
          <Link to="/puja" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Puja</Link>
          <Link to="/astro-report" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Astrology Report</Link>
          <Link to="/astrology-courses" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Astrology Courses</Link>
          <Link to="/article" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Article</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Contact</Link>

          {/* Login & Register for Mobile */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={() => { navigate("/login"); setIsOpen(false); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:text-orange-500 transition-all duration-300"
            >
              <IoPersonSharp size={20} />
              Login
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Cart Drawer */}
      {cartOpen && <CartPage closeCart={() => setCartOpen(false)} />}
    </header>
  );
}
