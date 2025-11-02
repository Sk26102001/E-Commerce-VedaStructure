



import { Briefcase, Heart, Gem, BookOpen, Activity, Building2, Wallet, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ---------- LIFE ASPECTS ----------
const aspects = [
  { title: "Career", desc: "Vedic Astrology Career Guidance", icon: <Briefcase className="w-8 h-8 text-white" />, color: "from-amber-500 to-orange-400" },
  { title: "Relationships", desc: "Compatibility & Life Partner Insights", icon: <Heart className="w-8 h-8 text-white" />, color: "from-pink-500 to-rose-400" },
  { title: "Wealth & Luxury", desc: "Financial Planning & Prosperity", icon: <Gem className="w-8 h-8 text-white" />, color: "from-purple-500 to-indigo-400" },
  { title: "Education", desc: "Learning & Skill Development", icon: <BookOpen className="w-8 h-8 text-white" />, color: "from-blue-500 to-cyan-400" },
  { title: "Health", desc: "Wellness & Planetary Remedies", icon: <Activity className="w-8 h-8 text-white" />, color: "from-green-500 to-emerald-400" },
  { title: "Business", desc: "Entrepreneurship & Growth", icon: <Building2 className="w-8 h-8 text-white" />, color: "from-indigo-500 to-blue-400" },
  { title: "Finance", desc: "Investments & Wealth Management", icon: <Wallet className="w-8 h-8 text-white" />, color: "from-yellow-500 to-amber-400" },
  { title: "Love & Life", desc: "Relationships & Harmony", icon: <Sparkles className="w-8 h-8 text-white" />, color: "from-red-500 to-pink-400" },
];

// ---------- TESTIMONIALS ----------
const testimonials = [
  { name: "Anjali S.", review: "The astrology course helped me understand my career path and personal growth. Highly recommended!" },
  { name: "Rohit K.", review: "I learned practical remedies and insights for health and wealth. This course is truly life-changing!" },
  { name: "Priya M.", review: "The teachings are precise and easy to apply. It helped me make better decisions with confidence." },
];

export default function LifePanorama() {
  const [index, setIndex] = useState(0);

  // Auto change testimonial every 5 sec
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
          Explore Every Aspect of Your Life
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our astrology course provides a holistic view of your life, helping you understand career, health, relationships, finances, and more through the wisdom of Vedic astrology.
        </p>

        {/* -------- GRID -------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
          {/* Left Grid */}
          <div className="space-y-6">
            {aspects.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 text-white">
                  {item.icon}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Chakra with Glow Aura */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 blur-2xl opacity-70 animate-spin-slow"></div>
              <img
                src="./chakra.png"
                alt="Chakra"
                className="
                relative w-80 h-80 md:w-[26rem] md:h-[26rem] object-contain animate-spin-slow drop-shadow-2xl    animate-none md:animate-spin ..."
              />
            </div>
          </div>

          {/* Right Grid */}
          <div className="space-y-6">
            {aspects.slice(4).map((item, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 text-white">
                  {item.icon}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- TESTIMONIALS -------- */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">What Our Students Say</h3>
          <p className="text-gray-700 text-lg italic">"{testimonials[index].review}"</p>
          <p className="mt-2 text-gray-600 font-semibold">- {testimonials[index].name}</p>
        </div>

        {/* -------- CTA BUTTON -------- */}
        <div className="mt-10">
   <Link to="/MoreCourses">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-2xl hover:bg-yellow-400 transition cursor-pointer inline-block"
          > Explore All Courses
            
          </motion.div>
        </Link>
        </div>
      </div>

      {/* Custom Slow Spin Animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
   
