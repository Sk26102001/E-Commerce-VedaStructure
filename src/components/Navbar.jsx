
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hrs in seconds

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
      <nav className="">
        {/* 1. Top Banner with Timer */}
        <div className="flex  justify-center items-center gap-3 py-2 px-4 bg-gradient-to-br from-orange-400 to-yellow-400 text-white text-sm font-semibold border-b border-gray-200">
          <p>LIMITED OFFER: 30% OFF. USE RABBIT30 at Checkout.</p>
          <span className="bg-red-400 text-white px-5 py-1 rounded-full font-bold text-md select-none">
            ⏳ {formatTime(timeLeft)}
          </span>
        </div>

{/* 2. Logo + Search Bar */}
 <div className="relative flex flex-col md:flex-row items-center py-2 px-4 border-b border-gray-200"> 
  {/* Logo and Text */}
  <div className="flex items-center space-x-1 ml-11 md:ml-11">
 
    <div className="flex flex-col leading-tight">
      <h2 className="font-serif font-bold text-2xl  bg-gradient-to-r from-yellow-400 to-orange-400   bg-clip-text text-transparent">Veda Structure</h2>
      <p className="tracking-widest text-gray-400 text-xs ml-1">Making Worship Easier Thought Online Worldwide</p>
    </div>
  </div> 

{/* Search Bar */}
 <div className=" mt-4 md:mt-0
    w-full
    md:absolute md:left-2/4 md:transform md:-translate-x-2/5
    md:w-72 sm:w-56 lg:w-100">
  <div className="flex items-center gap-2 w-full">
    <input
      type="text"
      placeholder="Search"
      className="rounded-full
          bg-gradient-to-r from-yellow-400 to-white-700 to-red-200
          py-2.5 px-4
          text-white
          placeholder-white
          focus:outline-none
          w-full
          sm:w-56
          md:w-72
          lg:w-96
          transition-width duration-400 ease-in-out"
    />
    <button className="text-4xl text-white bg-yellow-400 rounded-full p-1 hover:bg-yellow-400 cursor-pointer">
      <CiSearch />
    </button>
  </div>
</div> 






   {/* Login and Cart (right) */}
   <div className="hidden md:flex items-center space-x-6 ml-auto mr-10"
    >
      <button className="text-gray-700 hover:text-orange-400 font-semibold">Your Account</button>
      <span>|</span>
      <button  className="relative text-gray-700 hover:text-orange-400 text-3xl"><TbShoppingBag /></button>


    </div>
</div>

        {/* 3. Navbar Items */}
   <div className="hidden sm:flex justify-center items-center space-x-8 font-semibold text-base text-gray-700 px-4 py-4">
  <a href="/" className="hover:text-orange-400 transition">Home</a>
  <a href="/talk-to-astrologer" className="hover:text-orange-400 transition">
    Talk To Astrologer
  </a>
  <a href="/puja" className="flex items-center hover:text-orange-400 transition">
    Puja <RiArrowDropDownLine className="ml-1 text-2xl" />
  </a>
  <a href="/astro-report" className="flex items-center hover:text-orange-400 transition">
    Astro Report <RiArrowDropDownLine className="ml-1 text-2xl" />
  </a>
  <a href="/veda-store" className="flex items-center hover:text-orange-400 transition">
    Veda Store <RiArrowDropDownLine className="ml-1 text-2xl" />
  </a>
  <a href="/astrology-courses" className="hover:text-orange-400 transition">
    Astrology Courses
  </a>
  <a href="/article" className="hover:text-orange-400 transition">Article</a>
  <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
</div>


        {/* Mobile Menu Button */}
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
          <div className="md:hidden bg-gradient-to-br from-yellow-400 to-white-200  font-semibold text-gray-700  ">
            <a href="/" onClick={() => setIsOpen(false)} className="block  hover:bg-orange-400 hover:text-white
            py-2 px-2 ">Home</a>
            <a href="/talk to astrologer" onClick={() => setIsOpen(false)} className="block  hover:bg-orange-400 hover:text-white py-2 px-2">Talk to Astrologer</a>
            <a href="/Puja" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Puja</a>
            <a href="/Astro Report" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Astro Report</a>
            <a href="/veda store" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Veda Store</a>
            <a href="/astrology courses" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Astrology Courses</a>
            <a href="/Article" onClick={() => setIsOpen(false)} className="block hover:text-white hover:bg-orange-400  py-2 px-2">Article</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="block hover:bg-orange-400 hover:text-white py-2 px-2">Contact</a>
          
          </div>
        )}
      </nav>
    </header>
  );
}




