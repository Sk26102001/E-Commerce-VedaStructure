
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    category: "Vedic Astrology",
    title: "Understanding Mangal Dosha: Myths vs. Reality",
    desc: "Mangal Dosha, also known as Kuja Dosha, is one of the most talked about and feared astrological conditions in Vedic astrology...",
    author: "Ajay Sharma",
    date: "14-Apr-2025",
    img: "https://vedashopping.techuptechnologies.in/public/uploads/all/tyus5TMWBfBpBLddTHIXymviLZ4NbrXwIuzvxvBP.jpg",
  },
  {
    id: 2,
    category: "Kundali Matching",
    title: "The Spiritual Science Behind Kundali Matching",
    desc: "Kundali matching, also known as Guna Milan, has been an integral part of the Hindu marriage system for centuries...",
    author: "Ajay Sharma",
    date: "14-Apr-2025",
    img: "https://vedashopping.techuptechnologies.in/public/uploads/all/CtTRJLEmUyXu9gv7KQ2EIGnul5taswXQiLNNRtZa.jpg",
  },
  {
    id: 3,
    category: "Gemstone",
    title: "Planetary Gemstones: Choosing the Right Stone for Your Horoscope",
    desc: "In Vedic astrology, gemstones are considered powerful tools for harnessing planetary energies...",
    author: "Ajay Sharma",
    date: "14-Apr-2025",
    img: "https://vedashopping.techuptechnologies.in/public/uploads/all/EAuEpJ7scguUplcvxgut28QotM3OSu0prip7P2ka.jpg",
  },
];

export default function SpiritualInsights() {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h3 className="text-3xl font-bold text-gray-800">Spiritual Insights</h3>
        <p className="mt-4 text-gray-600 text-lg">
          Explore our collection of articles on astrology, spirituality, and
          ancient wisdom for modern living.
        </p>
        <button className="mt-6 px-8 py-3 bg-yellow-400 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:shadow-lg transition">
          Explore All Articles →
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {articles.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-yellow-400 cursor-pointer flex flex-col"
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-3 left-3 bg-yellow-400 text-white px-3 py-1 text-xs font-medium rounded-lg shadow">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 flex-grow">
                {item.desc}
              </p>

              {/* Author + Date */}
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>👤 {item.author}</span>
                <span>📅 {item.date}</span>
              </div>

              {/* Read More Button */}
              <button className="mt-5 w-full py-2 bg-yellow-400 text-white rounded-lg font-medium shadow hover:bg-yellow-500 hover:shadow-lg transition">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
