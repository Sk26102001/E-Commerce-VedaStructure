

// // src/pages/ServicesPage.jsx
// import { useState } from "react";
// import { FaBlog, FaBookOpen, FaPrayingHands } from "react-icons/fa";
// import { GiCrystalBall, GiYinYang, GiPrayerBeads } from "react-icons/gi";

// const services = [
//   {
//     title: "Astrological Consultations",
//     description:
//       "Our experienced pandits offer personalized consultations to help you understand your unique astrological profile, navigate life challenges, and make informed decisions.",
//     icon: <GiCrystalBall className="text-orange-500 text-4xl" />,
//   },
//   {
//     title: "Horoscope Predictions",
//     description:
//       "Get regular horoscope predictions on our website to gain insights into your daily, weekly, monthly, and yearly outlooks.",
//     icon: <GiYinYang className="text-red-500 text-4xl" />,
//   },
//   {
//     title: "Vedic Products",
//     description:
//       "Explore our wide range of authentic Vedic products, including gemstones, rudraksha beads, yantras, and other spiritual items, delivered conveniently to your doorstep.",
//     icon: <GiPrayerBeads className="text-yellow-500 text-4xl" />,
//   },
//   {
//     title: "Informative Blogs",
//     description:
//       "Access our comprehensive library of informative blogs covering various aspects of astrology, spirituality, and well-being.",
//     icon: <FaBlog className="text-orange-400 text-4xl" />,
//   },
//   {
//     title: "Online Courses",
//     description:
//       "Deepen your astrological knowledge and understanding with our comprehensive online learning programs and guided sessions.",
//     icon: <FaBookOpen className="text-yellow-400 text-4xl" />,
//   },
//   {
//     title: "Online Puja Services",
//     description:
//       "Experience the convenience of our online puja services. Our knowledgeable pandits will perform rituals and ceremonies on your behalf.",
//     icon: <FaPrayingHands className="text-red-400 text-4xl" />,
//   },
// ];

// function TiltCard({ service }) {
//   const [style, setStyle] = useState({});

//   // Mouse move effect
//   const handleMouseMove = (e) => {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left; // x inside card
//     const y = e.clientY - rect.top; // y inside card

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     // Calculate rotation (max 10deg)
//     const rotateX = ((y - centerY) / centerY) * 10;
//     const rotateY = ((x - centerX) / centerX) * -10;

//     setStyle({
//       transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
//       border: "2px solid #f97316", // Tailwind orange-500
//       boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
//     });
//   };

//   // Reset when mouse leaves
//   const handleMouseLeave = () => {
//     setStyle({
//       transform: "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)",
//       border: "none",
//       boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     });
//   };

//   return (
//     <div
//       className="bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-300 cursor-pointer"
//       style={style}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="flex justify-center mb-4">{service.icon}</div>
//       <h3 className="font-semibold text-lg text-gray-800 mb-2">
//         {service.title}
//       </h3>
//       <p className="text-gray-600 text-sm leading-relaxed">
//         {service.description}
//       </p>
//     </div>
//   );
// }

// export default function ServicesPage() {
//   return (
//     <section className="py-16 px-6 bg-orange-50">
//       {/* Section Header */}
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
//         <div className="h-1 w-20 bg-orange-500 mx-auto mt-2 rounded-full"></div>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Explore our comprehensive range of spiritual services designed to
//           support your journey towards inner peace and divine connection.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <TiltCard key={index} service={service} />
//         ))}
//       </div>
//     </section>
//   );
// }





// // src/pages/ServicesPage.jsx
// import { useState } from "react";
// import { FaBlog, FaBookOpen, FaPrayingHands } from "react-icons/fa";
// import { GiCrystalBall, GiYinYang, GiPrayerBeads } from "react-icons/gi";

// const services = [
//   {
//     title: "Astrological Consultations",
//     description:
//       "Our experienced pandits offer personalized consultations to help you understand your unique astrological profile, navigate life challenges, and make informed decisions.",
//     icon: <GiCrystalBall className="text-orange-500 text-4xl" />,
//   },
//   {
//     title: "Horoscope Predictions",
//     description:
//       "Get regular horoscope predictions on our website to gain insights into your daily, weekly, monthly, and yearly outlooks.",
//     icon: <GiYinYang className="text-red-500 text-4xl" />,
//   },
//   {
//     title: "Vedic Products",
//     description:
//       "Explore our wide range of authentic Vedic products, including gemstones, rudraksha beads, yantras, and other spiritual items, delivered conveniently to your doorstep.",
//     icon: <GiPrayerBeads className="text-yellow-500 text-4xl" />,
//   },
//   {
//     title: "Informative Blogs",
//     description:
//       "Access our comprehensive library of informative blogs covering various aspects of astrology, spirituality, and well-being.",
//     icon: <FaBlog className="text-orange-400 text-4xl" />,
//   },
//   {
//     title: "Online Courses",
//     description:
//       "Deepen your astrological knowledge and understanding with our comprehensive online learning programs and guided sessions.",
//     icon: <FaBookOpen className="text-yellow-400 text-4xl" />,
//   },
//   {
//     title: "Online Puja Services",
//     description:
//       "Experience the convenience of our online puja services. Our knowledgeable pandits will perform rituals and ceremonies on your behalf.",
//     icon: <FaPrayingHands className="text-red-400 text-4xl" />,
//   },
// ];

// function TiltCard({ service }) {
//   const [style, setStyle] = useState({});

//   const handleMouseMove = (e) => {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * 10;
//     const rotateY = ((x - centerX) / centerX) * -10;

//     setStyle({
//       transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
//       boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//       borderColor: "#fb923c", // orange border highlight on hover
//     });
//   };

//   const handleMouseLeave = () => {
//     setStyle({
//       transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
//       boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//       borderColor: "#e5e7eb", // back to gray-200
//     });
//   };

//   return (
//     <div
//       className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-orange-500 p-6 text-center transition-transform duration-300 ease-out cursor-pointer"
//       style={style}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Icon not affected */}
//       <div className="flex justify-center mb-4 pointer-events-none">
//         {service.icon}
//       </div>

//       <h3 className="font-semibold text-lg text-gray-800 mb-2">
//         {service.title}
//       </h3>
//       <p className="text-gray-600 text-sm leading-relaxed">
//         {service.description}
//       </p>
//     </div>
//   );
// }

// export default function ServicesPage() {
//   return (
//     <section className="py-16 px-6 bg-orange-50">
//       {/* Section Header */}
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
//         <div className="h-1 w-20 bg-orange-500 mx-auto mt-2 rounded-full"></div>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Explore our comprehensive range of spiritual services designed to
//           support your journey towards inner peace and divine connection.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <TiltCard key={index} service={service} />
//         ))}
//       </div>
//     </section>
//   );
// }



// src/pages/ServicesPage.jsx
import { useState } from "react";
import { FaBlog, FaBookOpen, FaPrayingHands } from "react-icons/fa";
import { GiCrystalBall, GiYinYang, GiGemPendant, GiLotusFlower, GiPrayerBeads } from "react-icons/gi";

const services = [
  {
    title: "Astrological Consultations",
    description:
      "Get personalized astrological consultations to understand your horoscope, life path, and remedies.",
    icon: <GiCrystalBall className="text-purple-500 text-4xl" />,
  },
  {
    title: "Horoscope Predictions",
    description:
      "Read daily, weekly, and monthly horoscopes prepared by our expert astrologers.",
    icon: <GiYinYang className="text-red-500 text-4xl" />,
  },
  {
    title: "Vedic Products",
    description:
      "Buy authentic Vedic products including yantras, malas, and spiritual accessories for daily rituals.",
    icon: <GiPrayerBeads className="text-yellow-600 text-4xl" />,
  },
  {
    title: "Informative Blogs",
    description:
      "Learn about astrology, spirituality, and Vedic traditions through our detailed blogs.",
    icon: <FaBlog className="text-blue-500 text-4xl" />,
  },
  {
    title: "Online Courses",
    description:
      "Join astrology and spiritual learning programs with step-by-step guidance from experts.",
    icon: <FaBookOpen className="text-green-500 text-4xl" />,
  },
  {
    title: "Online Puja Services",
    description:
      "Book pujas online to be performed on your behalf as per authentic Vedic rituals and customs.",
    icon: <GiLotusFlower className="text-pink-500 text-4xl" />,
    cta: true,
  },
  {
    title: "Online Pandit Services",
    description:
      "Book experienced pandits online for puja, rituals, and ceremonies as per Vedic traditions.",
    icon: <FaPrayingHands className="text-orange-500 text-4xl" />,
    cta: true,
  },
  {
    title: "Puja in Varanasi",
    description:
      "Experience authentic Vedic pujas performed by pandits in the holy city of Varanasi on your behalf.",
    icon: <GiLotusFlower className="text-pink-500 text-4xl" />,
    cta: true,
  },
  {
    title: "Rudraksha & Gemstones",
    description:
      "Purchase 100% authentic Rudraksha beads and gemstones to bring peace, prosperity, and protection.",
    icon: <GiGemPendant className="text-yellow-500 text-4xl" />,
    cta: true,
  },
];

function TiltCard({ service }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      borderColor: "#fb923c",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      borderColor: "#e5e7eb",
    });
  };

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-orange-500 p-6 text-center transition-transform duration-300 ease-out cursor-pointer"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center mb-4 pointer-events-none">
        {service.icon}
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      {service.cta && (
        <button className="px-5 py-2 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition-colors">
          Book Now
        </button>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <section className="py-16 px-6 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="h-1 w-20 bg-orange-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our authentic Vedic services ranging from astrology and pujas to gemstones and spiritual learning.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <TiltCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
