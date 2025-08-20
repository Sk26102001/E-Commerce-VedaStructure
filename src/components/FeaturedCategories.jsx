import React,{ useRef }  from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Rakshabandhan Special (Rakhi)", icon: "https://vedashopping.techuptechnologies.in/public/uploads/all/e2c1upchUbGXE3D6FZUDHttxfZJK4pe8E3Dn09RK.png" },
  { name: "Yantras", icon: "https://vedashopping.techuptechnologies.in/public/uploads/all/lSq8szCNYEeNAWi6sPjWpfxpLWgTO8X9BWmyk4t5.png" },
  { name: "Bracelet", icon: "https://vedashopping.techuptechnologies.in/public/uploads/all/EkVNJsf41IwTDzUDlvRI67PZ5vIpOwesj3dWc34A.png" },
  { name: "Gemstone", icon: "https://vedashopping.techuptechnologies.in/public/uploads/all/CeK73Wrzl4ql5VNW7PTf4JP2DylTmP0dUW0HhViK.png" },
  { name: "Rudraksha", icon: "https://vedashopping.techuptechnologies.in/public/uploads/all/SG3vZkE7vqDV73ez3SgJaeMpYivSMRgX0AOsjBrB.png" },
  { name: "Rudraksha Combinations", icon: "https://vedashopping.techuptechnologies.in/public/uploads/all/wcT7kUFzcSJoCl9QOKnv6pmikN384JgdbYHfhJ6u.png" },
];

export default function FeaturedCategories() {

      const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
  <div className="w-full bg-white py-10 px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Top Products Categories
        </h2>
        <a
          href="/categories"
          className="text-yellow-600 font-semibold flex items-center gap-1 hover:underline"
        >
          All Categories →
        </a>
      </div>

      {/* Category Carousel */}
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 md:-left-6 bg-white shadow-lg rounded-full p-2 hover:bg-yellow-500 transition z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Categories */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-8 md:px-10 scroll-smooth"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="min-w-[140px] md:min-w-[160px] flex flex-col items-center 
                         bg-white border border-gray-200 rounded-2xl shadow-sm 
                         hover:shadow-xl transition transform hover:-translate-y-1 p-6"
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full 
                              bg-gradient-to-tr from-red-500 to-yellow-500 shadow-md mb-3">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              {/* Title */}
              <p className="text-center text-sm md:text-base font-medium bg-gradient-to-tr from-yellow-600 to-orange-300 bg-clip-text text-transparent ">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 md:-right-6 bg-white shadow-lg rounded-full p-2 hover:bg-yellow-500 transition z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
