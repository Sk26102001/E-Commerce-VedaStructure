
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CouponCard() {
  const [revealed, setRevealed] = useState(false);

  const offers = [
    {
      title: "✨ 30% OFF Spiritual Bracelets",
      desc: "Handmade Rudraksha & Crystal Bracelets to bring positivity & balance.",
    },
    {
      title: "🔥 Buy 1 Get 1 Free",
      desc: "On selected gemstone bracelets this week only!",
    },
    {
      title: "🌙 15% OFF Healing Crystals",
      desc: "Attract peace, love, and success with genuine healing stones.",
    },
    {
      title: "🌸 25% OFF Chakra Bracelets",
      desc: "Align your chakras with colorful energy-balancing bracelets.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 px-4 sm:px-6 py-10">
      <motion.div
        className="w-full max-w-5xl rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Glow shine effect */}
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-orange-400 opacity-30 rounded-full blur-3xl"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          🎁 UNLOCK 20% OFF YOUR FIRST ORDER
        </h2>
        <p className="text-yellow-100 mb-8 max-w-2xl text-sm sm:text-base">
          Reveal your exclusive coupon code by entering your email below and
          explore special limited-time offers!
        </p>

        {!revealed ? (
          <>
            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 sm:py-4 text-gray-700 text-sm sm:text-base focus:outline-none border-b sm:border-b-0 sm:border-r border-gray-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRevealed(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition text-sm sm:text-base"
              >
                Reveal Coupon
              </motion.button>
            </div>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              key="coupon"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mt-6 relative bg-white text-orange-600 font-bold text-xl sm:text-2xl tracking-wider py-4 px-6 rounded-xl shadow-xl text-center border-2 border-dashed border-orange-400"
            >
              {/* Close Icon */}
              <motion.button
                onClick={() => setRevealed(false)}
                className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white text-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-orange-100 transition-all duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg sm:text-2xl font-bold">×</span>
              </motion.button>

              🎉 YOUR COUPON:{" "}
              <span className="text-orange-700 select-all cursor-pointer">
                SAVE20
              </span>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Offers Section */}
        {revealed && (
          <div className="mt-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              🔥 Special Offers for You
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offers.map((offer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/95 rounded-2xl p-5 sm:p-6 shadow-lg text-orange-700 border border-orange-200 hover:shadow-xl hover:scale-105 transition"
                >
                  <h4 className="font-semibold text-base sm:text-lg">
                    {offer.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700">{offer.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Glow Border */}
        <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400 opacity-20 blur-xl pointer-events-none"></div>
      </motion.div>
    </div>
  );
}
