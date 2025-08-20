// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CouponCard() {
//   const [revealed, setRevealed] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
//       <motion.div
//         className="w-full max-w-lg rounded-3xl p-8 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-2xl relative"
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
//           UNLOCK 20% OFF YOUR FIRST ORDER
//         </h2>
//         <p className="text-gray-100 mb-6">
//           Reveal your exclusive coupon code by entering your email below.
//         </p>

//         {!revealed ? (
//           <>
//             {/* Input + Button */}
//             <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setRevealed(true)}
//                 className="px-6 py-3 bg-green-600 text-white font-semibold rounded-r-full hover:bg-green-700 transition"
//               >
//                 Reveal Coupon
//               </motion.button>
//             </div>
//           </>
//         ) : (
//           <AnimatePresence>
//             <motion.div
//               key="coupon"
//               initial={{ opacity: 0, scale: 0.8, y: 30 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//               className="mt-6 bg-white text-green-600 font-bold text-2xl tracking-wider py-4 rounded-xl shadow-lg text-center border-2 border-dashed border-green-500"
//             >
//               🎉 YOUR COUPON: <span className="text-green-700">SAVE20</span>
//             </motion.div>
//           </AnimatePresence>
//         )}

//         {/* Glow Effect */}
//         <div className="absolute inset-0 rounded-3xl border-4 border-green-400 opacity-20 blur-2xl pointer-events-none"></div>
//       </motion.div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CouponCard() {
//   const [revealed, setRevealed] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 px-4">
//       <motion.div
//         className="w-full max-w-lg rounded-3xl p-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-2xl relative overflow-hidden"
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* Glow shine effect */}
//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-400 opacity-30 rounded-full blur-3xl"></div>

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-lg">
//           🎁 UNLOCK 20% OFF YOUR FIRST ORDER
//         </h2>
//         <p className="text-yellow-100 mb-6">
//           Reveal your exclusive coupon code by entering your email below.
//         </p>

//         {!revealed ? (
//           <>
//             {/* Input + Button */}
//             <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setRevealed(true)}
//                 className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-r-full hover:bg-orange-600 transition"
//               >
//                 Reveal Coupon
//               </motion.button>
//             </div>
//           </>
//         ) : (
//           <AnimatePresence>
//             <motion.div
//               key="coupon"
//               initial={{ opacity: 0, scale: 0.8, y: 30 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//               className="mt-6 bg-white text-orange-600 font-bold text-2xl tracking-wider py-4 rounded-xl shadow-xl text-center border-2 border-dashed border-orange-400"
//             >
//               🎉 YOUR COUPON:{" "}
//               <span className="text-orange-700 select-all cursor-pointer">
//                 SAVE20
//               </span>
//             </motion.div>
//           </AnimatePresence>
//         )}

//         {/* Glow Border */}
//         <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400 opacity-20 blur-xl pointer-events-none"></div>
//       </motion.div>
//     </div>
//   );
// }





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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 px-6 py-10">
      <motion.div
        className="w-full max-w-5xl rounded-3xl p-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Glow shine effect */}
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-orange-400 opacity-30 rounded-full blur-3xl"></div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          🎁 UNLOCK 20% OFF YOUR FIRST ORDER
        </h2>
        <p className="text-yellow-100 mb-8 max-w-2xl">
          Reveal your exclusive coupon code by entering your email below and explore special limited-time offers!
        </p>

        {!revealed ? (
          <>
            {/* Input + Button */}
            <div className="flex bg-white rounded-full overflow-hidden shadow-lg max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-4 text-gray-700 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRevealed(true)}
                className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-r-full hover:bg-orange-700 transition"
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
              className="mt-6 bg-white text-orange-600 font-bold text-2xl tracking-wider py-4 rounded-xl shadow-xl text-center border-2 border-dashed border-orange-400"
            >
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
            <h3 className="text-3xl font-bold mb-6">🔥 Special Offers for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers.map((offer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/95 rounded-2xl p-6 shadow-lg text-orange-700 border border-orange-200 hover:shadow-xl hover:scale-105 transition"
                >
                  <h4 className="font-semibold text-lg">{offer.title}</h4>
                  <p className="text-sm text-gray-700">{offer.desc}</p>
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
