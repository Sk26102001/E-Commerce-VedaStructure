// src/pages/TestimonialsPage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const stats = [
  { number: "100+", label: "Total Courses" },
  { number: "150+", label: "Total Astrologers" },
  { number: "120+", label: "Puja Performed" },
  { number: "250+", label: "Satisfied Customers" },
];

const testimonials = [
  {
    name: "Devotee from Canada",
    feedback:
      "I am from Canada and came across Veda Structure through their services. The experience was authentic and spiritual.",
  },
  {
    name: "Birthday Puja",
    feedback:
      "I arranged a yagya (Puja) for my birthday through Veda Structure. The experience was incredible—filled with devotion and positivity.",
  },
  {
    name: "Astrology & Yagyas",
    feedback:
      "Veda Structure offers outstanding expertise in Vedic astrology and yagyas. The consultations are truly beneficial.",
  },
  {
    name: "Personalized Kundali",
    feedback:
      "I ordered a Vedic Personalized Kundali from Veda Structure. Their dedication and commitment are remarkable.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white text-gray-800">
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold">{stat.number}</h2>
              <p className="text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Devotees Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Join thousands of satisfied devotees who have experienced the authentic spiritual
          services provided by Veda Structure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-3xl mb-4">
                <span>👤</span>
              </div>

              {/* Stars */}
              <div className="flex justify-center text-orange-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm mb-3">{testimonial.feedback}</p>
              <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
