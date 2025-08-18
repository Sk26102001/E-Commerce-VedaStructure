import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="bg-gray-900 text-white ">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Logo & Description */}
    <div>
      <h2 className="font-serif font-bold text-2xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Veda Structure
      </h2>
      <p className="tracking-widest text-white text-sm mt-3">
        Veda Structure is your one-stop destination for all spiritual needs, offering authentic rituals, astrology services, and sacred items to enhance your spiritual journey.
      </p>
    </div>

    {/* Quick Links */}
    <div>
  <h3 className="font-semibold mb-4 text-xl">Quick Links</h3>
  <ul className="space-y-2 text-white">
    {[
      { text: "Book Puja", to: "/" },
      { text: "Blog | Article", to: "/blog|article" },
      { text: "Contact", to: "/contact" },
      { text: "Veda Store", to: "/veda" },
      { text: "Spiritual Blog", to: "/spiritual" },
      { text: "About Us", to: "/about-us" },
      { text: "Contact Us", to: "/contact-us" }
    ].map((link, index) => (
      <li key={index} className="group cursor-pointer">
        <Link
          to={link.to}
          className="inline-block transition-all duration-300 transform group-hover:scale-105 group-hover:translate-x-1 group-hover:text-yellow-400"
        >
          {link.text}
          <span className="block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </ul>
</div>


    {/* Important Links */}
  <div>
  <h3 className="font-semibold mb-4 text-xl">Important Links</h3>
  <ul className="space-y-2 text-white">
    {[
      { text: "Privacy Policy", to: "/" },
      { text: "Terms & Conditions", to: "/terms&conditions" },
      { text: "Refund Policy", to: "/refundpolicy" },
      { text: "Become an Astrologer", to: "/bacome-a-astrologer" },
      { text: "Astrologer Login", to: "/astrologer-login" }
    ].map((link, index) => (
      <li
        key={index}
        className="group cursor-pointer"
      >
        <Link
          to={link.to}
          className="inline-block transition-all duration-300 transform group-hover:scale-105 group-hover:translate-x-1 group-hover:text-yellow-400"
        >
          {link.text}
          <span className="block h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </ul>
</div>


    {/* Contact Info */}
    <div>
      <h3 className="font-semibold mb-4 text-xl">Contact</h3>
      <p className="text-white">Address: Varanasi, Uttar Pradesh 221001</p>
      <p className="text-white">Email: info@vedastructure.com</p>
      <p className="text-white">Phone: +91 1234567890</p>
    </div>
  </div>

<div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 py-6 border-t border-gray-800 ">
  <h3 className="font-semibold text-lg ">
    Payment Methods:
  </h3>

  <img 
    src="./paypal.png" 
    alt="PayPal" 
    className="h-10 sm:h-12 object-contain transition-transform duration-200 transform hover:scale-125 cursor-pointer"
  />
  
  <img 
    src="./visa.png" 
    alt="Visa" 
    className="h-10 sm:h-12 object-contain transition-transform duration-200 transform hover:scale-125 cursor-pointer"
  />
  
  <img 
    src="./card.png" 
    alt="Credit Card" 
    className="h-10 sm:h-12 object-contain transition-transform duration-200 transform hover:scale-125 cursor-pointer"
  />
</div>



{/* Bottom Bar */}
<div className="bg-gray-800 py-2 text-sm text-gray-500">
  <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
    
    {/* Left Side */}
    <p>© 2025 VedaStructure. All rights reserved.</p>
    
    {/* Right Side */}
    <div className="flex flex-wrap items-center gap-8">
      <span>Out of Stock</span>
      <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
      <span className="hover:text-gray-300 cursor-pointer">Terms & Condition</span>
    </div>

  </div>
</div>

</footer>



  );
}

