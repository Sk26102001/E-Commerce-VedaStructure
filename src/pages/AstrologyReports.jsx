import React, { useState } from "react";
import { motion } from "framer-motion";

const reports = [
  {
    title: "Manglik Yog Report",
    description:
      "An analysis of the Manglik Dosha in an individual's birth chart and its impact on their marriage and relationships.",
  },
  {
    title: "Sade Sati Report",
    description:
      "Detailed insights into the Sade Sati period and its effects on personal and professional life.",
  },
  {
    title: "Pitradosha Report",
    description:
      "Analysis of ancestral karmic influences and their impact on an individual's life.",
  },
  {
    title: "Kalsarp Dosha Report",
    description:
      "A comprehensive report on Kalsarp Dosha and remedies to mitigate its effects.",
  },
  {
    title: "Gemstone Report",
    description:
      "Personalized gemstone recommendations based on your birth chart for positivity and balance.",
  },
  {
    title: "Marriage Gud Matching",
    description:
      "Astrological analysis for marriage compatibility and matching based on Kundli.",
  },
  {
    title: "Rudraksha Report",
    description:
      "Detailed guidance on Rudraksha selection and benefits based on your zodiac and doshas.",
  },
];

export default function AstrologyReports() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Personalized Astrology Report
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our services include a wide range of reports and analyses to cater to
          various aspects of an individual's life. Here is a brief overview of
          the different types of reports we offer:
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Menu */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          {reports.map((report, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                activeIndex === index
                  ? "text-yellow-600 font-bold bg-yellow-100"
                  : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
              }`}
              whileHover={{ scale: 1.03 }}
            >
              {report.title}
            </motion.button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-3/4 bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              {reports[activeIndex].title}
            </h3>
            <p className="text-gray-600 mb-6">{reports[activeIndex].description}</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Book Now
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center shadow-inner">
              {/* Replace with an icon or image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
