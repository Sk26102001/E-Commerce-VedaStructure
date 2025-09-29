
// import React from "react";
// import { FaStar } from "react-icons/fa";

// const stats = [
//   { number: "100+", label: "Total Courses" },
//   { number: "150+", label: "Total Astrologers" },
//   { number: "120+", label: "Puja Performed" },
//   { number: "250+", label: "Satisfied Customers" },
// ];

// const testimonials = [
//   {
//     name: "Devotee from Canada",
//     feedback:
//       "I am from Canada and came across Veda Structure through their services. The experience was authentic and spiritual.",
//   },
//   {
//     name: "Birthday Puja",
//     feedback:
//       "I arranged a yagya (Puja) for my birthday through Veda Structure. The experience was incredible—filled with devotion and positivity.",
//   },
//   {
//     name: "Astrology & Yagyas",
//     feedback:
//       "Veda Structure offers outstanding expertise in Vedic astrology and yagyas. The consultations are truly beneficial.",
//   },
//   {
//     name: "Personalized Kundali",
//     feedback:
//       "I ordered a Vedic Personalized Kundali from Veda Structure. Their dedication and commitment are remarkable.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Stats Section */}
//       <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-10">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <h2 className="text-3xl md:text-4xl font-bold">{stat.number}</h2>
//               <p className="text-lg font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//           What Our Devotees Say
//         </h2>
//         <p className="text-center text-gray-600 mb-12">
//           Join thousands of satisfied devotees who have experienced the authentic spiritual
//           services provided by Veda Structure
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
//             >
//               {/* Avatar */}
//               <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-3xl mb-4">
//                 <span>👤</span>
//               </div>

//               {/* Stars */}
//               <div className="flex justify-center text-orange-500 mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>

//               {/* Feedback */}
//               <p className="text-gray-700 text-sm mb-3">{testimonial.feedback}</p>
//               <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useState, useEffect } from "react";
// import { Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Amit Sharma",
//     feedback:
//       "I was skeptical about online puja services, but Veda Structure completely changed my perspective. The Ganesha puja I booked was performed with utmost devotion and I received the prasad and video recording promptly.",
//   },
//   {
//     name: "Priya Verma",
//     feedback:
//       "The service was authentic and beautifully done. I felt the devotion even through the video. I highly recommend Veda Structure.",
//   },
//   {
//     name: "Rahul Mehta",
//     feedback:
//       "Very professional and spiritual experience. The puja was seamless, and I received prasad on time. Truly grateful!",
//   },
//   {
//     name: "Neha Kapoor",
//     feedback:
//       "At first, I wasn’t sure about booking online puja, but Veda Structure exceeded my expectations with their service.",
//   },
//   {
//     name: "Neha Kapoor",
//     feedback:
//       "At first, I wasn’t sure about booking online puja, but Veda Structure exceeded my expectations with their service.",
//   },
//   {
//     name: "Neha Kapoor",
//     feedback:
//       "At first, I wasn’t sure about booking online puja, but Veda Structure exceeded my expectations with their service.",
//   },
//   {
//     name: "Neha Kapoor",
//     feedback:
//       "At first, I wasn’t sure about booking online puja, but Veda Structure exceeded my expectations with their service.",
//   },
// ];

// export default function Testimonials() {
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Scroll to the current card when currentIndex changes
//   useEffect(() => {
//     if (containerRef.current) {
//       const container = containerRef.current;
//       const card = container.querySelector(".testimonial-card");
//       if (card) {
//         const cardWidth = card.getBoundingClientRect().width + 24; // width + gap
//         container.scrollTo({
//           left: currentIndex * cardWidth,
//           behavior: "smooth",
//         });
//       }
//     }
//   }, [currentIndex]);

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//   {/* Subtext */}
//   <motion.div
//     className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1, delay: 0.2 }}
//   >
//     Join thousands of{" "}
//     <span className="font-semibold text-yellow-400">satisfied devotees</span> who
//     have experienced the{" "}
//     <span className="text-yellow-400">authentic spiritual services</span>{" "}
//     provided by <span className="italic font-bold text-orange-500">Veda Structure</span>.
//   </motion.div>

//         <div className="relative">
//           {/* Left Arrow */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-yellow-300 p-2 rounded-full hover:bg-yellow-400 transition z-20"
//           >
//             <ChevronLeft className="w-5 h-5 text-white" />
//           </button>

//           {/* Cards Container */}
//           <div
//             ref={containerRef}
//             className="flex gap-6 overflow-hidden px-8 py-4"
//           >
//             {testimonials.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="testimonial-card min-w-[300px] bg-gradient-to-b from-yellow-100 to-white shadow-lg rounded-2xl p-6 border border-yellow-200 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
//               >
//                 <Quote className="text-yellow-500 w-8 h-8 mb-4 mx-auto" />
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   {item.feedback}
//                 </p>
//                 <div className="flex items-center justify-center gap-3">
//                   <div className="bg-yellow-400 p-3 rounded-full">
//                     <User className="text-white w-6 h-6" />
//                   </div>
//                   <span className="font-semibold text-gray-800">
//                     {item.name}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-yellow-300 p-2 rounded-full hover:bg-yellow-400 transition z-20"
//           >
//             <ChevronRight className="w-5 h-5 text-white" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Student",
      text: "This course changed my life! The mentors explained astrology in such a simple and practical way.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohit Mehta",
      role: "Entrepreneur",
      text: "I always wanted to understand astrology deeply. Thanks to the one-on-one mentorship, I gained clarity.",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Priya Singh",
      role: "Life Coach",
      text: "The certification helped me expand my career. The live classes and case studies are truly valuable.",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Karan Verma",
      role: "Engineer",
      text: "The structured modules and assignments made learning easy and fun.",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Simran Kaur",
      role: "Teacher",
      text: "The practical approach really helped me connect the concepts to real life.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Amit Desai",
      role: "Consultant",
      text: "The mentors are very knowledgeable. I recommend this to everyone interested in astrology.",
      img: "https://randomuser.me/api/portraits/men/66.jpg",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < reviews.length - 3) setCurrentIndex(currentIndex + 1);
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-16 text-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-[#7b1b1b]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What Our Students Have to Say About Us!
      </motion.h2>

 <div className="flex justify-center mb-10">
    <img
      src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
      alt="decorative border"
      className="w-48 md:w-64 lg:w-72"
    />
  </div>

      {/* Subtext */}
      <motion.div
        className="text-yellow-400 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Join thousands of{" "}
        <span className="font-semibold text-yellow-400">satisfied devotees</span>{" "}
        who have experienced the{" "}
        <span className="text-yellow-400">authentic spiritual services</span>{" "}
        provided by{" "}
        <span className="italic font-bold text-orange-500">Veda Structure</span>.
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {visibleReviews.map((review, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-start hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-yellow-400"
              />
              <div>
                <h4 className="font-semibold text-[#7b1b1b]">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">“{review.text}”</p>
          </motion.div>
        ))}
      </div>

{/* Pagination Arrows */}
<div className="flex justify-center mt-10 gap-6">
  <button
    onClick={handlePrev}
    disabled={currentIndex === 0}
    className={`p-3 rounded-full shadow-md transition-transform duration-300 
      ${currentIndex === 0 
        ? "bg-gray-200 cursor-not-allowed opacity-60" 
        : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"}`}
  >
    <ChevronLeft className="text-[#7b1b1b]" />
  </button>

  <button
    onClick={handleNext}
    disabled={currentIndex >= reviews.length - 3}
    className={`p-3 rounded-full shadow-md transition-transform duration-300 
      ${currentIndex >= reviews.length - 3
        ? "bg-gray-200 cursor-not-allowed opacity-60" 
        : "bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"}`}
  >
    <ChevronRight className="text-[#7b1b1b]" />
  </button>
</div>

    </section>
  );
};

export default Testimonials;

