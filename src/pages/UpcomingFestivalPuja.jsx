

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "Sawan Special Vedic Yagya 2025 – In Kashi",
    desc: "What is Sawan Rudrabhishek? A powerful Vedic ritual to worship Lord Shiva in his fierce...",
    date: "12-Jul-2025",
    img: "https://vedashopping.techuptechnologies.in/public/uploads/all/Bx0WwjlquLIpSxEOWbSbgZ0sffJ209u2dNeQPMO8.jpg",
  },
  {
    title: "Sawan Special Vedic Yagya 2025 – In Kashi",
    desc: "What is Sawan Rudrabhishek? A powerful Vedic ritual to worship Lord Shiva in his fierce...",
    date: "12-Jul-2025",
    img: "https://vedashopping.techuptechnologies.in/public/uploads/all/Bx0WwjlquLIpSxEOWbSbgZ0sffJ209u2dNeQPMO8.jpg",
  },
  {
    title: "Sawan Special Vedic Yagya 2025 – In Kashi",
    desc: "What is Sawan Rudrabhishek? A powerful Vedic ritual to worship Lord Shiva in his fierce...",
    date: "12-Jul-2025",
    img: "https://vedashopping.techuptechnologies.in/public/uploads/all/Bx0WwjlquLIpSxEOWbSbgZ0sffJ209u2dNeQPMO8.jpg",
  },
  {
    title: "Sawan Special Vedic Yagya 2025 – In Kashi",
    desc: "What is Sawan Rudrabhishek? A powerful Vedic ritual to worship Lord Shiva in his fierce...",
    date: "12-Jul-2025",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TwPg8bsM85Y_8lcx8lG-EgFvE-4Qw3R0fQ&s",
  },
];

const UpcomingFestivalPuja = () => {
  return (
    <div className="px-6 py-12 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-2">
        Upcoming Festival Puja
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore our comprehensive range of spiritual services designed to
        support your journey towards inner peace and divine connection.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // ✅ Default always 1 card in mobile
        breakpoints={{
          640: { slidesPerView: 2 },   // Tablet
          1024: { slidesPerView: 3 },  // Laptop/Desktop
        }}
        navigation
        pagination={{ clickable: false }}
        className="pb-10"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="shimmer-effect"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {event.desc}
                </p>
                <p className="text-gray-500 text-sm mt-2">{event.date}</p>

                {/* Button */}
                <button
                  className="w-full mt-4 bg-yellow-400 text-black font-semibold 
                             py-2 px-4 rounded-lg flex items-center justify-center gap-2
                             hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg tracking-wide"
                >
                  <span>PARTICIPATE NOW</span> <span>→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pure CSS shimmer */}
      <style>{`
        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.6) 50%,
            transparent 100%
          );
          opacity: 0;
        }
        .group:hover .shimmer-effect {
          opacity: 1;
          animation: shimmer-move 1.5s forwards;
        }
        @keyframes shimmer-move {
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default UpcomingFestivalPuja;
