
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";
import CartPage from "../pages/CartPage"; // Import CartPage
import AccountPage from "../pages/AccountPage"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [cartOpen, setCartOpen] = useState(false); // cart drawer
    const [accountOpen, setAccountOpen] = useState(false); // cart drawer
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
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
          ⏳ {formatTime(timeLeft)}
        </span>
      </div>

      {/* Logo + Search + Account */}
      <div className="relative flex flex-col md:flex-row items-center py-2 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-1 ml-11">
          <div className="flex flex-col leading-tight">
            <h2 className="font-serif font-bold text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Veda Structure
            </h2>
            <p className="tracking-widest text-gray-400 text-xs ml-1">
              Making Worship Easier Through Online Worldwide
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 w-full md:absolute md:left-2/4 md:-translate-x-2/4 md:w-72 sm:w-56 lg:w-100">
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full bg-gradient-to-r from-yellow-400 to-red-200 py-2.5 px-4 text-black placeholder-gray-500 focus:outline-none w-full sm:w-56 md:w-72 lg:w-96 transition-width duration-400 ease-in-out"
            />
            <button className="text-4xl text-white bg-yellow-400 rounded-full p-1 hover:bg-yellow-500 cursor-pointer">
              <CiSearch />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 ml-auto mr-10">
          <button className="text-gray-700 hover:text-orange-400 font-semibold" onClick={() => setAccountOpen(true)}>
         
            Your Account
          </button>
          <span>|</span>
          <button
            className="relative text-gray-700 hover:text-orange-400 text-3xl"
            onClick={() => setCartOpen(true)} // open cart
          >
            <TbShoppingBag />
          </button>
        </div>
      </div>

     {/* Desktop Navbar */}
<div className="hidden sm:flex justify-center items-center space-x-8 font-semibold text-base text-gray-700 px-4 py-4">
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
      <Link to="/puja/path" className="block px-4 py-2 hover:bg-orange-100">Path/Recitation</Link>
      <Link to="/puja/kashi" className="block px-4 py-2 hover:bg-orange-100">Puja in Kashi</Link>
      <Link to="/puja/daily" className="block px-4 py-2 hover:bg-orange-100">Daily Puja</Link>
      <Link to="/puja/nitya" className="block px-4 py-2 hover:bg-orange-100">Nitya Ati Rudrabhishek</Link>
      <Link to="/puja/upcoming" className="block px-4 py-2 hover:bg-orange-100">Upcoming Festival Puja</Link>
      <Link to="/puja/special" className="block px-4 py-2 hover:bg-orange-100">Special Puja</Link>
    </div>
  </div>

  {/* Astro Report Dropdown */}
  <div className="relative group">
    <button className="flex items-center hover:text-orange-400 transition">
      Astro Report <RiArrowDropDownLine className="ml-1 text-2xl" />
    </button>
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50 border border-gray-200 border-t-4 border-t-orange-500">
      <Link to="/astro-report/basic" className="block px-4 py-2 hover:bg-orange-100">Basic Report</Link>
      <Link to="/astro-report/detailed" className="block px-4 py-2 hover:bg-orange-100">Detailed Report</Link>
      <Link to="/astro-report/compatibility" className="block px-4 py-2 hover:bg-orange-100">Compatibility Report</Link>
    </div>
  </div>

  {/* Veda Store Dropdown */}
  <div className="relative group">
    <button className="flex items-center hover:text-orange-400 transition">
      Veda Store <RiArrowDropDownLine className="ml-1 text-2xl" />
    </button>
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z- border border-gray-200 border-t-4 border-t-orange-500">
      <Link to="/veda-store/gems" className="block px-4 py-2 hover:bg-orange-100">Gemstones</Link>
      <Link to="/veda-store/malas" className="block px-4 py-2 hover:bg-orange-100">Mala & Bracelets</Link>
      <Link to="/veda-store/yagya-items" className="block px-4 py-2 hover:bg-orange-100">Yagya Items</Link>
    </div>
  </div>

  <Link to="/astrology-courses" className="hover:text-orange-400 transition">Astrology Courses</Link>
  <Link to="/article" className="hover:text-orange-400 transition">Article</Link>
  <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
</div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-end px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-gray-700 hover:text-orange-400 transition"
        >
          <RxHamburgerMenu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-yellow-400 to-white font-semibold text-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Home</Link>
          <Link to="/talk-to-astrologer" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Talk To Astrologer</Link>
          <Link to="/puja" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Puja</Link>
          <Link to="/astro-report" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Astro Report</Link>
          <Link to="/veda-store" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">VedLink Store</Link>
          <Link to="/astrology-courses" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Astrology Courses</Link>
          <Link to="/article" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Article</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Contact</Link>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && <CartPage closeCart={() => setCartOpen(false)} />}
           {accountOpen && <AccountPage closeAccount={() => setAccountOpen(false)} />}
    </header>
  );
}


