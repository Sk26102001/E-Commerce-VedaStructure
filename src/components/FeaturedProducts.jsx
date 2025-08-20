
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "1 Mukhi Rudraksha",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/2cm8PMQwyFKXK8wlsvVqYxzIVGplaEBGa5o7Ub0T.png",
    price: 2871.0,
    oldPrice: 3190.0,
    discount: "10% OFF",
  },
  {
    id: 2,
    name: "2 Mukhi Rudraksha",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/PGCiNVqhEhgJ9lbBSNsimdib5whpoOJTmnoAUcL0.jpg",
    price: 1035.9,
    oldPrice: 1151.0,
    discount: "10% OFF",
  },
  {
    id: 3,
    name: "4 Mukhi Rudraksha",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/27kzHoOXzyVaTXBENhXUcdnKqXpQ1x5rL2fnuaZM.jpg",
    price: 918.9,
    oldPrice: 1021.0,
    discount: "10% OFF",
  },
  {
    id: 4,
    name: "5 Mukhi Rudraksha",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/v89MjY5fxnXFLKQRL3RxujFLAOITYxmG927w69Ze.jpg",
    price: 449.1,
    oldPrice: 499.0,
    discount: "10% OFF",
  },
  {
    id: 5,
    name: "6 Mukhi Rudraksha",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/rRiWCt5nmCWdjzbFnVgN51mi8RGilX3wtTI5g9cG.jpg",
    price: 599.0,
    oldPrice: 699.0,
    discount: "15% OFF",
  },
  {
    id: 6,
    name: "Tiger Eye Bracelet",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/fKNUv7hl29uIakd3jLez9UsnBZKEpHotjzLOgrxu.jpg",
    price: 599.0,
    oldPrice: 699.0,
    discount: "15% OFF",
  },
  {
    id: 7,
    name: "7 Chakra Lava Bracelet ",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/zyksXlMKHucm4DobvHgeb9mjeuClli8tW0FB30ws.jpg",
    price: 599.0,
    oldPrice: 699.0,
    discount: "15% OFF",
  },
  {
    id: 8,
    name: "Red Jasper",
    image:
      "https://vedashopping.techuptechnologies.in/public/uploads/all/LnRMGHRLORjV8Y0T1TUIrXxUWMn9hA81XL60AaMA.jpg",
    price: 599.0,
    oldPrice: 699.0,
    discount: "15% OFF",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Top Featured Products
        </h2>
        <p className="text-gray-500 mt-2">
          Awaken the power within energized & authentic spiritual products
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        speed={800}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-14"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <motion.div
              className="relative bg-white shadow-md rounded-xl p-4 flex flex-col items-center transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image + Discount */}
              <motion.div
                className="relative w-full flex justify-center group cursor-pointer"
                // whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow z-20">
                  {product.discount}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-contain mb-4 transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-600 font-bold text-lg">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through">
                  ₹{product.oldPrice.toLocaleString()}
                </span>
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 w-full flex items-center justify-center gap-4">
                <FaShoppingCart className="text-lg" />
                Add to Cart
              </button>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10">
          <button className="p-3 bg-white rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95">
            <IoChevronBack className="text-xl" />
          </button>
        </div>
        <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10">
          <button className="p-3 bg-white rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95">
            <IoChevronForward className="text-xl" />
          </button>
        </div>
      </Swiper>
    </section>
  );
}
