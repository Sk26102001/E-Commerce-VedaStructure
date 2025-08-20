


// import React from "react";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   return (
//     <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
//         {/* LEFT IMAGES */}
//         <div className="relative flex justify-center lg:justify-start">
//           {/* Main Image */}
//           <motion.img
//             src="https://www.vedastructure.in/front/img/about_2.png"
//             alt="Puja"
//             className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />

//           {/* Rotating Logo */}
//           <motion.img
//             src="https://www.vedastructure.in/front/img/veda.png"
//             alt="Veda Logo"
//             className="absolute top-0 right-58 w-20 opacity-90"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="text-center lg:text-left">
//           <h4 className="text-yellow-600 font-semibold mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
//             About us
//           </h4>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Veda Structure
//           </h2>
//           <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
//             Veda Structure is your one-stop shop for all astrology needs.
//             Established in 2022, we are a team of highly qualified astrologers,
//             pundits, and experts dedicated to providing a safe, efficient,
//             pleasant, and personalized experience in the field of astrology,
//             numerology, horoscope prediction, Vedic Puja and various related
//             products.
//           </p>

//           {/* LINKS */}
//           <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-6 mb-6">
//             <a
//               href="/products"
//               className="text-yellow-600 font-semibold hover:underline"
//             >
//               Astrology Products & Remedies
//             </a>
//             <a
//               href="/services"
//               className="text-yellow-600 font-semibold hover:underline"
//             >
//               Personalized Reports & Puja Services
//             </a>
//           </div>

//           {/* CTA BUTTON */}
//           <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition w-full sm:w-auto">
//             Read More →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* LEFT IMAGES */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Main Image */}
          <motion.img
            src="https://www.vedastructure.in/front/img/about_2.png"
            alt="Puja"
            className="rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          />

          {/* Rotating Logo */}
          {/* <motion.img
            src="https://www.vedastructure.in/front/img/veda.png"
            alt="Veda Logo"
            className="absolute top-2 right-6 sm:top-4 sm:right-10 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 opacity-90"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          /> */}
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <h4 className="text-yellow-600 font-semibold mb-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            About us
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Veda Structure
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
            Veda Structure is your one-stop shop for all astrology needs.
            Established in 2022, we are a team of highly qualified astrologers,
            pundits, and experts dedicated to providing a safe, efficient,
            pleasant, and personalized experience in the field of astrology,
            numerology, horoscope prediction, Vedic Puja and various related
            products.
          </p>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-6 mb-6">
            <a
              href="/products"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Astrology Products & Remedies
            </a>
            <a
              href="/services"
              className="text-yellow-600 font-semibold hover:underline"
            >
              Personalized Reports & Puja Services
            </a>
          </div>

          {/* CTA BUTTON */}
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition w-full sm:w-auto">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}
