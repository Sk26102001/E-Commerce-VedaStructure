// import React, { useState } from "react";
// import { PlayCircle, Heart, Search, Star, ChevronDown } from "lucide-react";

// export default function MoreCourses({ totalCourses = 150 }) {
//   const [visible, setVisible] = useState(9);
//   const [sortBy, setSortBy] = useState("default");
//   const [search, setSearch] = useState("");
//   const [wishlist, setWishlist] = useState([]);

//   // Dummy data
//   const courses = Array.from({ length: totalCourses }).map((_, i) => ({
//     id: i + 1,
//     title: `Astrology Courses ${i + 1}`,
//     subtitle: `Level ${(i % 5) + 1} • ${30 + (i % 10)} lessons`,
//     thumbnail: `https://picsum.photos/seed/kundli-${i + 1}/600/350`,
//     rating: ((i % 5) + 3) + Number(Math.random().toFixed(1)),
//     faculty: `Faculty ${(i % 10) + 1}`,
//   }));

//   // Wishlist toggle
//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
//     );
//   };

//   // Search filter
//   const filtered = courses.filter(
//     (c) =>
//       c.title.toLowerCase().includes(search.toLowerCase()) ||
//       c.faculty.toLowerCase().includes(search.toLowerCase())
//   );

//   // Sorting
//   const sorted = [...filtered].sort((a, b) => {
//     if (sortBy === "ratingHigh") return b.rating - a.rating;
//     if (sortBy === "ratingLow") return a.rating - b.rating;
//     return a.id - b.id;
//   });

//   const loadMore = () => setVisible((v) => Math.min(v + 9, totalCourses));

//   return (
//     <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg py-8 text-center text-white">
//         <h1 className="text-4xl font-bold">🪔 Explore Kundli Courses</h1>
//         <p className="text-sm mt-2 opacity-90">
//           Learn from top astrologers — Build spiritual and analytical mastery
//         </p>
//       </header>

//       {/* Featured Course Video */}
//       <section className="relative max-w-5xl mx-auto mt-12 px-6">
//         <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-orange-100">
//           <div className="relative">
//             <img
//               src="https://www.astromeenaakshi.com/uploaded-files/category/images/Astrology-Learning-Courses32.png"
//               alt="Featured Course"
//               className="w-full h-[420px] object-cover"
//             />
//             <button className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
//               <PlayCircle size={70} className="text-white drop-shadow-lg" />
//             </button>
//           </div>
//           <div className="p-6">
//             <h2 className="text-2xl font-bold text-orange-700">
//               🌟 Vedic Astrology Masterclass
//             </h2>
//             <p className="text-gray-700 mt-2">
//               Watch a preview of our top-rated course — learn Kundli decoding, planetary alignment, and Vedic life patterns.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-orange-700">
//             📚 All Courses
//           </h3>
//           <img
//             src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//             alt="divider"
//             className="mx-auto mt-3 w-48 md:w-64"
//           />
//           <p className="text-sm text-gray-500 mt-4">
//             Showing {Math.min(visible, sorted.length)} of {sorted.length} courses
//           </p>
//         </div>

//         {/* Search + Sort */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           <div className="relative w-full md:w-1/2">
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search courses or faculty..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//             />
//           </div>

//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 transition"
//           >
//             <option value="default">Default</option>
//             <option value="ratingHigh">Rating: High to Low</option>
//             <option value="ratingLow">Rating: Low to High</option>
//           </select>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sorted.slice(0, visible).map((c) => (
//             <article
//               key={c.id}
//               className="relative group rounded-2xl overflow-hidden bg-white border border-orange-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition transform duration-300"
//             >
//               {/* Wishlist */}
//               <button
//                 onClick={() => toggleWishlist(c.id)}
//                 className="absolute right-4 top-4 text-xl"
//               >
//                 {wishlist.includes(c.id) ? (
//                   <Heart className="text-red-500 fill-red-500" size={22} />
//                 ) : (
//                   <Heart className="text-gray-400" size={22} />
//                 )}
//               </button>

//               {/* Thumbnail */}
//               <div className="relative">
//                 <img
//                   src={c.thumbnail}
//                   alt={c.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute left-3 top-3 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
//                   {c.faculty}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h4 className="font-semibold text-lg truncate text-orange-700">
//                   {c.title}
//                 </h4>
//                 <p className="text-sm text-gray-500 mt-1">{c.subtitle}</p>

//                 <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
//                   <div className="font-medium text-orange-700">₹499</div>
//                   <div className="flex items-center gap-1 text-yellow-500">
//                     <Star size={14} /> {Number(c.rating).toFixed(1)}
//                   </div>
//                 </div>

//                 <button className="mt-5 w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition">
//                   ENROLL NOW
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {visible < sorted.length && (
//           <div className="mt-12 flex justify-center">
//             <button
//               onClick={loadMore}
//               className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-yellow-200 to-orange-100 py-8 text-center text-gray-700 text-sm">
//         <p>✨ Made with spiritual energy and code | Kundli Academy 2025</p>
//       </footer>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { PlayCircle, Heart, Search, Star, ChevronDown } from "lucide-react"; 


// export default function MoreCourses({ totalCourses = 150 }) {
//   const [visible, setVisible] = useState(9);
//   const [sortBy, setSortBy] = useState("default");
//   const [search, setSearch] = useState("");
//   const [wishlist, setWishlist] = useState([]);

//   // Dummy data
//   const courses = Array.from({ length: totalCourses }).map((_, i) => ({
//     id: i + 1,
//     title: `Astrology Courses ${i + 1}`,
//     subtitle: `Level ${(i % 5) + 1} • ${30 + (i % 10)} lessons`,
//     thumbnail: `https://picsum.photos/seed/kundli-${i + 1}/600/350`,
//     rating: ((i % 5) + 3) + Number(Math.random().toFixed(1)),
//     faculty: `Faculty ${(i % 10) + 1}`,
//   }));

//   // Wishlist toggle
//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
//     );
//   };

//   // Search filter
//   const filtered = courses.filter(
//     (c) =>
//       c.title.toLowerCase().includes(search.toLowerCase()) ||
//       c.faculty.toLowerCase().includes(search.toLowerCase())
//   );

//   // Sorting
//   const sorted = [...filtered].sort((a, b) => {
//     if (sortBy === "ratingHigh") return b.rating - a.rating;
//     if (sortBy === "ratingLow") return a.rating - b.rating;
//     if (sortBy === "bestTeacher") return a.faculty.localeCompare(b.faculty);
//     if (sortBy === "mostPopular") return (b.id % 7) - (a.id % 7); // mock popularity
//     if (sortBy === "newest") return b.id - a.id;
//     return a.id - b.id;
//   });

//   const loadMore = () => setVisible((v) => Math.min(v + 9, totalCourses));

//   return (
//     <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg py-8 text-center text-white">
//         <h1 className="text-4xl font-bold">🪔 Explore Kundli Courses</h1>
//         <p className="text-sm mt-2 opacity-90">
//           Learn from top astrologers — Build spiritual and analytical mastery
//         </p>
//       </header>

//       {/* Featured Course Video */}
//       <section className="relative max-w-5xl mx-auto mt-12 px-6">
//         <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-orange-100">
//           <div className="relative">
//             <img
//               src="https://www.astromeenaakshi.com/uploaded-files/category/images/Astrology-Learning-Courses32.png"
//               alt="Featured Course"
//               className="w-full h-[420px] object-cover"
//             />
//             <button className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
//               <PlayCircle size={70} className="text-white drop-shadow-lg" />
//             </button>
//           </div>
//           <div className="p-6">
//             <h2 className="text-2xl font-bold text-orange-700">
//               🌟 Vedic Astrology Masterclass
//             </h2>
//             <p className="text-gray-700 mt-2">
//               Watch a preview of our top-rated course — learn Kundli decoding,
//               planetary alignment, and Vedic life patterns.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-orange-700">
//             📚 All Courses
//           </h3>
//           <img
//             src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
//             alt="divider"
//             className="mx-auto mt-3 w-48 md:w-64"
//           />
//           <p className="text-sm text-gray-500 mt-4">
//             Showing {Math.min(visible, sorted.length)} of {sorted.length} courses
//           </p>
//         </div>

//         {/* Search + Sort */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
//           {/* Search Input */}
//           <div className="relative w-full md:w-1/2">
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search courses or faculty..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//             />
//           </div>

//           {/* Custom Dropdown */}
//           <div className="relative w-full md:w-auto">
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="appearance-none border border-gray-300 bg-white rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50"
//             >
//               <option value="default" className="bg-white hover:bg-orange-50">
//                 Recommended for You
//               </option>
//               <option
//                 value="ratingHigh"
//                 className="bg-orange-100 hover:bg-orange-200"
//               >
//                 Rating: High to Low
//               </option>
//               <option
//                 value="ratingLow"
//                 className="bg-orange-50 hover:bg-orange-100"
//               >
//                 Rating: Low to High
//               </option>
//               <option
//                 value="bestTeacher"
//                 className="bg-yellow-50 hover:bg-yellow-100"
//               >
//                 Best Teacher
//               </option>
//               <option
//                 value="mostPopular"
//                 className="bg-indigo-50 hover:bg-indigo-100"
//               >
//                 Most Popular
//               </option>
//               <option
//                 value="newest"
//                 className="bg-green-50 hover:bg-green-100"
//               >
//                 Newest Courses
//               </option>
//             </select>

//             <ChevronDown
//               size={18}
//               className="absolute right-3 top-2.5 text-gray-500 pointer-events-none"
//             />
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sorted.slice(0, visible).map((c) => (
//             <article
//               key={c.id}
//               className="relative group rounded-2xl overflow-hidden bg-white border border-orange-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition transform duration-300"
//             >
//               {/* Wishlist */}
//               <button
//                 onClick={() => toggleWishlist(c.id)}
//                 className="absolute right-4 top-4 text-xl"
//               >
//                 {wishlist.includes(c.id) ? (
//                   <Heart className="text-red-500 fill-red-500" size={22} />
//                 ) : (
//                   <Heart className="text-gray-400" size={22} />
//                 )}
//               </button>

//               {/* Thumbnail */}
//               <div className="relative">
//                 <img
//                   src={c.thumbnail}
//                   alt={c.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//                 />
//                 <div className="absolute left-3 top-3 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
//                   {c.faculty}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h4 className="font-semibold text-lg truncate text-orange-700">
//                   {c.title}
//                 </h4>
//                 <p className="text-sm text-gray-500 mt-1">{c.subtitle}</p>

//                 <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
//                   <div className="font-medium text-orange-700">₹499</div>
//                   <div className="flex items-center gap-1 text-yellow-500">
//                     <Star size={14} /> {Number(c.rating).toFixed(1)}
//                   </div>
//                 </div>

//                 <button className="mt-5 w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md transition">
//                   ENROLL NOW
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {visible < sorted.length && (
//           <div className="mt-12 flex justify-center">
//             <button
//               onClick={loadMore}
//               className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-yellow-200 to-orange-100 py-8 text-center text-gray-700 text-sm">
//         <p>✨ Made with spiritual energy and code | Kundli Academy 2025</p>
//       </footer>
//     </div>
//   );
// }










// import React, { useState } from "react";
// import { PlayCircle, Heart, Search, Star, ChevronDown, Filter, DollarSign, BookOpen } from "lucide-react"; 
// import { motion } from "framer-motion";

// // --- Static Data for All 16 Core Courses ---
// const staticCourses = [
//   // Prioritized Courses (Vedic Astrology first for manual default sort)
//   { id: 1, title: "Vedic Astrology", headline: "Decode the Secrets of Your Kundali through Ancient Jyotish", price: 5999, rating: 5.0, faculty: "Acharya Devi", isRecommended: true, category: "Astrology", tag: "Best Seller", thumbnail: "./Vedic_Astrology_Course_Instructor.mp4" },
//   { id: 2, title: "Palmistry (Hastrekha)", headline: "Your Destiny Lies in Your Hands – Learn the Art of Palmistry", price: 2499, rating: 4.8, faculty: "Guru Gopal", isRecommended: true, category: "Astrology", tag: "New", thumbnail: "https://placehold.co/600x350/e8f5e9/388e3c?text=Hands+of+Destiny" },
//   { id: 3, title: "Numerology", headline: "Numbers Don’t Lie – Unlock Destiny Through Moolank & Bhagyank", price: 1999, rating: 4.7, faculty: "Acharya Devi", isRecommended: false, category: "Astrology", tag: "Popular", thumbnail: "https://placehold.co/600x350/e3f2fd/1976d2?text=Power+of+Numbers" },
//   { id: 4, title: "Vastu Shastra", headline: "Balance Your Space, Balance Your Life with Vastu", price: 3499, rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Vastu & Space", tag: "Trending", thumbnail: "https://placehold.co/600x350/fff3e0/ff9800?text=Vastu+Harmony" },
//   { id: 5, title: "Sanskrit Vyakarana", headline: "Master the Grammar of Devabhasha – Sanskrit from the Roots", price: 999, rating: 4.5, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/f3e5f5/9c27b0?text=Sanskrit+Grammar" },
//   { id: 6, title: "Daily Puja Routine", headline: "Learn Nitya Puja – Step-by-Step Rituals for Modern Life", price: 1499, rating: 4.6, faculty: "Guru Gopal", isRecommended: false, category: "Mantra & Rituals", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/e0f7fa/00bcd4?text=Nitya+Puja" },
//   { id: 7, title: "Muhurtas", headline: "Right Time, Right Action – Science of Shubh Muhurta", price: 2999, rating: 4.8, faculty: "Dr. Sharma", isRecommended: true, category: "Astrology", tag: "Specialist", thumbnail: "https://placehold.co/600x350/fbe9e7/ff5722?text=Shubh+Muhurta" },
//   { id: 8, title: "Upanishads", headline: "Dive Deep into the Philosophy of Self & Brahman", price: 4999, rating: 5.0, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Deep Dive", thumbnail: "https://placehold.co/600x350/f0f4c3/827717?text=Self+Knowledge" },
//   { id: 9, title: "Vedas", headline: "Foundations of Eternal Knowledge – Study Rig, Yajur, Sama, Atharva", price: 6999, rating: 4.9, faculty: "Acharya Devi", isRecommended: false, category: "Philosophy", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e1f5fe/01579b?text=Vedic+Scriptures" },
//   { id: 10, title: "Purana & Itihas", headline: "Decode Ramayana, Mahabharata & the Puranas with Context", price: 1999, rating: 4.7, faculty: "Guru Gopal", isRecommended: false, category: "History & Culture", tag: "History", thumbnail: "https://placehold.co/600x350/fce4ec/e91e63?text=Ancient+Epics" },
//   { id: 11, title: "Vedic Mathematics", headline: "Ancient Maths Tricks for Fast Calculation & Logical Thinking", price: 999, rating: 4.5, faculty: "Dr. Sharma", isRecommended: false, category: "Science & Logic", tag: "Low Price", thumbnail: "https://placehold.co/600x350/e0f2f1/00897b?text=Fast+Maths" },
//   { id: 12, title: "Mantra Healing", headline: "Heal Body, Mind & Soul Through Beej Mantras & Frequencies", price: 3999, rating: 4.8, faculty: "Acharya Devi", isRecommended: true, category: "Mantra & Rituals", tag: "Healing", thumbnail: "https://placehold.co/600x350/f9fbe7/afb42b?text=Beej+Mantra" },
//   { id: 13, title: "Sanskrit (Reading + Chanting)", headline: "Speak the Language of the Gods – Chant with Clarity", price: 1499, rating: 4.6, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/f0f8ff/4a90e2?text=Chanting+Practice" },
//   { id: 14, title: "Sacred Texts Reading", headline: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.", price: 999, rating: 4.4, faculty: "Guru Gopal", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/fff8e1/ffa000?text=Sacred+Reading" },
//   { id: 15, title: "Vedic Science", headline: "Hidden Scientific Concepts in Agni, Ether, Time & Creation", price: 4999, rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Science & Logic", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e8f5e9/43a047?text=Ancient+Science" },
//   { id: 16, title: "Vedic Philosophy", headline: "Understand Karma, Dharma, Rebirth, Moksha from Vedic Lens", price: 2999, rating: 4.8, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Foundation", thumbnail: "https://placehold.co/600x350/f3e5f5/ab47bc?text=Dharma+Moksha" },
// ];

// const categories = ["All", "Astrology", "Mantra & Rituals", "Vastu & Space", "Philosophy", "Language & Texts", "Science & Logic", "History & Culture"];

// // Create a large pool of courses, ensuring the 16 static ones are at the beginning
// const totalCourses = 26;
// const allCourses = [
//     ...staticCourses,
//     ...Array.from({ length: totalCourses - staticCourses.length }).map((_, i) => ({
//         id: i + 17,
//         title: `Yoga Nidra and Meditation ${i + 17}`,
//         headline: `Find inner peace and clarity with guided practice.`,
//         price: 99 + (i * 100),
//         rating: 3.5 + (i % 10) / 10,
//         faculty: `Faculty F-${(i % 5) + 1}`,
//         isRecommended: false,
//         category: "Wellbeing",
//         tag: "General",
//         thumbnail: `https://picsum.photos/seed/kundli-${i + 17}/600/350`,
       
//     }))
// ];

// const getPriceDisplay = (price) => {
//     if (price === 0) return "FREE";
//     return `₹${price.toLocaleString('en-IN')}`;
// }

// const CourseCard = ({ course, toggleWishlist, isWishlisted }) => {
//     return (
//         <motion.article
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative group rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform duration-300 h-full flex flex-col"
//         >
//             {/* Wishlist Button */}
//             <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => toggleWishlist(course.id)}
//                 className="absolute right-5 top-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
//             >
//                 {isWishlisted ? (
//                     <Heart className="text-red-500 fill-red-500" size={20} />
//                 ) : (
//                     <Heart className="text-gray-400" size={20} />
//                 )}
//             </motion.button>

//             {/* Thumbnail */}
//             <div className="relative overflow-hidden">
//                 <img
//                     src={course.thumbnail}
//                     alt={course.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//                 />
//                 <div className={`absolute left-4 bottom-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md ${course.isRecommended ? 'bg-green-600' : ''}`}>
//                     {course.tag || course.category}
//                 </div>
//             </div>

//             <div className="p-6 flex-grow flex flex-col">
//                 <h4 className="font-bold text-xl text-orange-700 mb-2">
//                     {course.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-4">{course.headline}</p>

//                 {/* Rating and Faculty */}
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4">
//                     <div className="flex items-center gap-1 text-yellow-500 font-bold">
//                         <Star size={16} fill="currentColor" /> {Number(course.rating).toFixed(1)}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                         By <span className="font-medium text-orange-600">{course.faculty}</span>
//                     </div>
//                 </div>

//                 {/* Price and Enrollment Button */}
//                 <div className="flex items-center justify-between mt-auto">
//                     <div className="font-extrabold text-2xl text-orange-800">
//                         {getPriceDisplay(course.price)}
//                     </div>
//                     <button className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.02]">
//                         ENROLL
//                     </button>
//                 </div>
//             </div>
//         </motion.article>
//     );
// };


// export default function MoreCourses() {
//   const [visible, setVisible] = useState(12);
//   const [sortBy, setSortBy] = useState("recommended");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceFilter, setPriceFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [wishlist, setWishlist] = useState([]);

//   // Wishlist toggle
//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
//     );
//   };

//   // --- Filtering Logic ---
//   let currentFilteredCourses = allCourses.filter((c) => {
//     // 1. Search Filter
//     const searchMatch =
//       c.title.toLowerCase().includes(search.toLowerCase()) ||
//       c.faculty.toLowerCase().includes(search.toLowerCase()) ||
//       c.headline.toLowerCase().includes(search.toLowerCase());

//     if (!searchMatch) return false;

//     // 2. Category Filter
//     if (categoryFilter !== "All" && c.category !== categoryFilter) return false;

//     // 3. Price Filter
//     if (priceFilter === "Free" && c.price > 0) return false;
//     if (priceFilter === "Under_1000" && (c.price <= 0 || c.price > 1000)) return false;
//     if (priceFilter === "1000_3000" && (c.price <= 1000 || c.price > 3000)) return false;
//     if (priceFilter === "Over_3000" && c.price <= 3000) return false;

//     return true;
//   });

//   // --- Sorting Logic ---
//   const sorted = [...currentFilteredCourses].sort((a, b) => {
//     // 1. Always prioritize "Vedic Astrology" to show in front if it passes filters
//     if (a.title === "Vedic Astrology") return -1;
//     if (b.title === "Vedic Astrology") return 1;

//     // 2. Apply chosen sort method
//     if (sortBy === "ratingHigh") return b.rating - a.rating;
//     if (sortBy === "ratingLow") return a.rating - b.rating;
//     if (sortBy === "priceHigh") return b.price - a.price;
//     if (sortBy === "priceLow") return a.price - b.price;
//     if (sortBy === "newest") return b.id - a.id;
//     if (sortBy === "recommended") return b.isRecommended - a.isRecommended;

//     return a.id - b.id; // Default fallback
//   });
  
//   const loadMore = () => setVisible((v) => Math.min(v + 12, sorted.length));
//   const resetFilters = () => {
//     setSearch("");
//     setCategoryFilter("All");
//     setPriceFilter("All");
//     setSortBy("recommended");
//     setVisible(12);
//   };

//   return (
//     <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-lg py-12 text-center text-white">
//         <h1 className="text-4xl md:text-5xl font-extrabold font-serif">
//           🪔 Explore All {allCourses.length} Courses
//         </h1>
//         <p className="text-lg mt-3 opacity-90 max-w-2xl mx-auto">
//           Deepen your spiritual and analytical mastery across Jyotish, Vastu, Philosophy, and Sacred Texts.
//         </p>
//       </header>

//       {/* Featured Course Section (using the prioritized course) */}
//       <section className="relative max-w-7xl mx-auto mt-16 px-6">
//         <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
//             🔥 Featured Masterclass: Vedic Astrology
//         </h2>
//         <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-yellow-400/80"
//         >
//           <div className="relative">
//             {/* Using the specific thumbnail for visual coherence */}
//             <img
//               src={allCourses[0].thumbnail} 
//               alt="Featured Course"
//               className="w-full h-[300px] md:h-[420px] object-cover object-top"
//             />
//             <button className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
//               <PlayCircle size={70} className="text-white drop-shadow-lg" />
//             </button>
//           </div>
//           <div className="p-6 md:p-8 bg-orange-50">
//             <h3 className="text-3xl font-bold text-orange-800">
//               {allCourses[0].title}
//             </h3>
//             <p className="text-gray-700 mt-2 text-lg">
//               {allCourses[0].headline}
//             </p>
//             <div className="mt-4 flex flex-wrap gap-4 items-center">
//                 <span className="text-2xl font-extrabold text-orange-900">
//                     {getPriceDisplay(allCourses[0].price)}
//                 </span>
//                 <span className="flex items-center gap-1 text-yellow-600 font-bold">
//                     <Star size={20} fill="currentColor" /> {allCourses[0].rating.toFixed(1)} Rating
//                 </span>
//                 <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition">
//                     VIEW DETAILS
//                 </button>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Filter and Course Grid */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-orange-700">
//             📚 Browse All Offerings ({sorted.length} Results)
//           </h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Showing {Math.min(visible, sorted.length)} courses
//           </p>
//         </div>

//         {/* --- Advanced Filter Bar --- */}
//         <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg mb-12 border border-orange-200">
//             <h4 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
//                 <Filter size={20} /> Course Filters
//             </h4>
//             <div className="flex flex-col md:flex-row items-center gap-4">
                
//                 {/* 1. Search Input */}
//                 <div className="relative w-full md:w-1/3">
//                     <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                     <input
//                         type="text"
//                         placeholder="Search by title, topic, or faculty..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//                     />
//                 </div>

//                 {/* 2. Category Filter */}
//                 <div className="relative w-full md:w-1/4">
//                     <BookOpen className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                     <select
//                         value={categoryFilter}
//                         onChange={(e) => setCategoryFilter(e.target.value)}
//                         className="appearance-none border border-gray-300 bg-white rounded-xl px-10 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50 w-full"
//                     >
//                         <option value="All">All Categories</option>
//                         {categories.map(cat => (
//                             <option key={cat} value={cat}>{cat}</option>
//                         ))}
//                     </select>
//                     <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//                 </div>
                
//                 {/* 3. Pricing Filter */}
//                 <div className="relative w-full md:w-1/4">
//                     <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                     <select
//                         value={priceFilter}
//                         onChange={(e) => setPriceFilter(e.target.value)}
//                         className="appearance-none border border-gray-300 bg-white rounded-xl px-10 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50 w-full"
//                     >
//                         <option value="All">Any Price</option>
//                         <option value="Free">Free</option>
//                         <option value="Under_1000">Under ₹1,000</option>
//                         <option value="1000_3000">₹1,000 - ₹3,000</option>
//                         <option value="Over_3000">Over ₹3,000</option>
//                     </select>
//                     <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//                 </div>

//                 {/* 4. Sort By Dropdown (Updated Design) */}
//                 <div className="relative w-full md:w-1/4">
//                     <select
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value)}
//                         className={`appearance-none border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium cursor-pointer focus:ring-2 focus:ring-orange-400 transition w-full ${sortBy === 'recommended' ? 'bg-yellow-100 text-orange-700 font-bold' : 'bg-white text-gray-700 hover:bg-orange-50'}`}
//                     >
//                         <option value="recommended">⭐ Recommended For You</option>
//                         <option value="ratingHigh">Rating: High to Low</option>
//                         <option value="priceLow">Price: Low to High</option>
//                         <option value="priceHigh">Price: High to Low</option>
//                         <option value="newest">Newest Courses</option>
//                     </select>
//                     <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//                 </div>
//             </div>
            
//             <div className="mt-4 text-right">
//                 <button 
//                     onClick={resetFilters}
//                     className="text-sm text-gray-500 hover:text-orange-600 transition underline"
//                 >
//                     Reset All Filters
//                 </button>
//             </div>
//         </div>

//         {/* --- Course Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {sorted.slice(0, visible).map((c) => (
//             <CourseCard 
//                 key={c.id} 
//                 course={c} 
//                 toggleWishlist={toggleWishlist} 
//                 isWishlisted={wishlist.includes(c.id)} 
//             />
//           ))}
//           {sorted.length === 0 && (
//             <div className="lg:col-span-3 text-center py-10 bg-orange-100/50 rounded-xl">
//                 <p className="text-xl font-semibold text-orange-700">No courses found matching your filters.</p>
//                 <p className="text-gray-600 mt-2">Try adjusting your search terms or filters above.</p>
//             </div>
//           )}
//         </div>

//         {visible < sorted.length && (
//           <div className="mt-16 flex justify-center">
//             <button
//               onClick={loadMore}
//               className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.05]"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-yellow-200 to-orange-100 py-8 text-center text-gray-700 text-sm mt-12">
//         <p>✨ Made with spiritual energy and code | Kundli Academy 2025</p>
//       </footer>
//     </div>
//   );
// }













import React, { useState } from "react";
import { PlayCircle, Heart, Search, Star, ChevronDown, Filter, DollarSign, BookOpen } from "lucide-react"; 
import { motion } from "framer-motion";

// --- Static Data for All 16 Core Courses ---
const staticCourses = [
	// Prioritized Courses (Vedic Astrology first for manual default sort)
	{ id: 1, title: "Vedic Astrology", headline: "Decode the Secrets of Your Kundali through Ancient Jyotish", price: 5999, rating: 5.0, faculty: "Acharya Devi", isRecommended: true, category: "Astrology", tag: "Best Seller", thumbnail: "./Vedic_Astrology_Course_Instructor.mp4" },
	{ id: 2, title: "Palmistry (Hastrekha)", headline: "Your Destiny Lies in Your Hands – Learn the Art of Palmistry", price: 2499, rating: 4.8, faculty: "Guru Gopal", isRecommended: true, category: "Astrology", tag: "New", thumbnail: "https://placehold.co/600x350/e8f5e9/388e3c?text=Hands+of+Destiny" },
	{ id: 3, title: "Numerology", headline: "Numbers Don’t Lie – Unlock Destiny Through Moolank & Bhagyank", price: 1999, rating: 4.7, faculty: "Acharya Devi", isRecommended: false, category: "Astrology", tag: "Popular", thumbnail: "https://placehold.co/600x350/e3f2fd/1976d2?text=Power+of+Numbers" },
	{ id: 4, title: "Vastu Shastra", headline: "Balance Your Space, Balance Your Life with Vastu", price: 3499, rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Vastu & Space", tag: "Trending", thumbnail: "https://placehold.co/600x350/fff3e0/ff9800?text=Vastu+Harmony" },
	{ id: 5, title: "Sanskrit Vyakarana", headline: "Master the Grammar of Devabhasha – Sanskrit from the Roots", price: 999, rating: 4.5, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/f3e5f5/9c27b0?text=Sanskrit+Grammar" },
	{ id: 6, title: "Daily Puja Routine", headline: "Learn Nitya Puja – Step-by-Step Rituals for Modern Life", price: 1499, rating: 4.6, faculty: "Guru Gopal", isRecommended: false, category: "Mantra & Rituals", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/e0f7fa/00bcd4?text=Nitya+Puja" },
	{ id: 7, title: "Muhurtas", headline: "Right Time, Right Action – Science of Shubh Muhurta", price: 2999, rating: 4.8, faculty: "Dr. Sharma", isRecommended: true, category: "Astrology", tag: "Specialist", thumbnail: "https://placehold.co/600x350/fbe9e7/ff5722?text=Shubh+Muhurta" },
	{ id: 8, title: "Upanishads", headline: "Dive Deep into the Philosophy of Self & Brahman", price: 4999, rating: 5.0, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Deep Dive", thumbnail: "https://placehold.co/600x350/f0f4c3/827717?text=Self+Knowledge" },
	{ id: 9, title: "Vedas", headline: "Foundations of Eternal Knowledge – Study Rig, Yajur, Sama, Atharva", price: 6999, rating: 4.9, faculty: "Acharya Devi", isRecommended: false, category: "Philosophy", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e1f5fe/01579b?text=Vedic+Scriptures" },
	{ id: 10, title: "Purana & Itihas", headline: "Decode Ramayana, Mahabharata & the Puranas with Context", price: 1999, rating: 4.7, faculty: "Guru Gopal", isRecommended: false, category: "History & Culture", tag: "History", thumbnail: "https://placehold.co/600x350/fce4ec/e91e63?text=Ancient+Epics" },
	{ id: 11, title: "Vedic Mathematics", headline: "Ancient Maths Tricks for Fast Calculation & Logical Thinking", price: 999, rating: 4.5, faculty: "Dr. Sharma", isRecommended: false, category: "Science & Logic", tag: "Low Price", thumbnail: "https://placehold.co/600x350/e0f2f1/00897b?text=Fast+Maths" },
	{ id: 12, title: "Mantra Healing", headline: "Heal Body, Mind & Soul Through Beej Mantras & Frequencies", price: 3999, rating: 4.8, faculty: "Acharya Devi", isRecommended: true, category: "Mantra & Rituals", tag: "Healing", thumbnail: "https://placehold.co/600x350/f9fbe7/afb42b?text=Beej+Mantra" },
	{ id: 13, title: "Sanskrit (Reading + Chanting)", headline: "Speak the Language of the Gods – Chant with Clarity", price: 1499, rating: 4.6, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Quick Start", thumbnail: "https://placehold.co/600x350/f0f8ff/4a90e2?text=Chanting+Practice" },
	{ id: 14, title: "Sacred Texts Reading", headline: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.", price: 999, rating: 4.4, faculty: "Guru Gopal", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://placehold.co/600x350/fff8e1/ffa000?text=Sacred+Reading" },
	{ id: 15, title: "Vedic Science", headline: "Hidden Scientific Concepts in Agni, Ether, Time & Creation", price: 4999, rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Science & Logic", tag: "Advanced", thumbnail: "https://placehold.co/600x350/e8f5e9/43a047?text=Ancient+Science" },
	{ id: 16, title: "Vedic Philosophy", headline: "Understand Karma, Dharma, Rebirth, Moksha from Vedic Lens", price: 2999, rating: 4.8, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Foundation", thumbnail: "https://placehold.co/600x350/f3e5f5/ab47bc?text=Dharma+Moksha" },
];

const categories = ["All", "Astrology", "Mantra & Rituals", "Vastu & Space", "Philosophy", "Language & Texts", "Science & Logic", "History & Culture"];

// Create a large pool of courses, ensuring the 16 static ones are at the beginning
const totalCourses = 26;
const allCourses = [
	...staticCourses,
	...Array.from({ length: totalCourses - staticCourses.length }).map((_, i) => ({
		id: i + 17,
		title: `Yoga Nidra and Meditation ${i + 17}`,
		headline: `Find inner peace and clarity with guided practice.`,
		price: 99 + (i * 100),
		rating: 3.5 + (i % 10) / 10,
		faculty: `Faculty F-${(i % 5) + 1}`,
		isRecommended: false,
		category: "Wellbeing",
		tag: "General",
		thumbnail: `https://picsum.photos/seed/kundli-${i + 17}/600/350`,
		
	}))
];

const getPriceDisplay = (price) => {
	if (price === 0) return "FREE";
	return `₹${price.toLocaleString('en-IN')}`;
}

const CourseCard = ({ course, toggleWishlist, isWishlisted }) => {
    // Check if the thumbnail is a video based on the file extension
    const isThumbnailVideo = course.thumbnail.toLowerCase().endsWith('.mp4');

    const thumbnailContent = isThumbnailVideo ? (
        <video 
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            autoPlay 
            loop 
            muted 
            playsInline
            onError={(e) => console.log('Video load error:', e)}
        />
    ) : (
        <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            // Adding a simple error fallback for images
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/cccccc/333333?text=Image+Error"; }}
        />
    );

	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="relative group rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform duration-300 h-full flex flex-col"
		>
			{/* Wishlist Button */}
			<motion.button
				whileTap={{ scale: 0.9 }}
				onClick={() => toggleWishlist(course.id)}
				className="absolute right-5 top-5 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
			>
				{isWishlisted ? (
					<Heart className="text-red-500 fill-red-500" size={20} />
				) : (
					<Heart className="text-gray-400" size={20} />
				)}
			</motion.button>

			{/* Thumbnail */}
			<div className="relative overflow-hidden">
				{thumbnailContent}
				<div className={`absolute left-4 bottom-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md ${course.isRecommended ? 'bg-green-600' : ''}`}>
					{course.tag || course.category}
				</div>
			</div>

			<div className="p-6 flex-grow flex flex-col">
				<h4 className="font-bold text-xl text-orange-700 mb-2">
					{course.title}
				</h4>
				<p className="text-sm text-gray-600 flex-grow leading-relaxed mb-4">{course.headline}</p>

				{/* Rating and Faculty */}
				<div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4">
					<div className="flex items-center gap-1 text-yellow-500 font-bold">
						<Star size={16} fill="currentColor" /> {Number(course.rating).toFixed(1)}
					</div>
					<div className="text-sm text-gray-500">
						By <span className="font-medium text-orange-600">{course.faculty}</span>
					</div>
				</div>

				{/* Price and Enrollment Button */}
				<div className="flex items-center justify-between mt-auto">
					<div className="font-extrabold text-2xl text-orange-800">
						{getPriceDisplay(course.price)}
					</div>
					<button className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.02]">
						ENROLL
					</button>
				</div>
			</div>
		</motion.article>
	);
};


export default function MoreCourses() {
	const [visible, setVisible] = useState(12);
	const [sortBy, setSortBy] = useState("recommended");
	const [categoryFilter, setCategoryFilter] = useState("All");
	const [priceFilter, setPriceFilter] = useState("All");
	const [search, setSearch] = useState("");
	const [wishlist, setWishlist] = useState([]);

	// Wishlist toggle
	const toggleWishlist = (id) => {
		setWishlist((prev) =>
			prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
		);
	};

	// --- Filtering Logic ---
	let currentFilteredCourses = allCourses.filter((c) => {
		// 1. Search Filter
		const searchMatch =
			c.title.toLowerCase().includes(search.toLowerCase()) ||
			c.faculty.toLowerCase().includes(search.toLowerCase()) ||
			c.headline.toLowerCase().includes(search.toLowerCase());

		if (!searchMatch) return false;

		// 2. Category Filter
		if (categoryFilter !== "All" && c.category !== categoryFilter) return false;

		// 3. Price Filter
		if (priceFilter === "Free" && c.price > 0) return false;
		if (priceFilter === "Under_1000" && (c.price <= 0 || c.price > 1000)) return false;
		if (priceFilter === "1000_3000" && (c.price <= 1000 || c.price > 3000)) return false;
		if (priceFilter === "Over_3000" && c.price <= 3000) return false;

		return true;
	});

	// --- Sorting Logic ---
	const sorted = [...currentFilteredCourses].sort((a, b) => {
		// 1. Always prioritize "Vedic Astrology" to show in front if it passes filters
		if (a.title === "Vedic Astrology") return -1;
		if (b.title === "Vedic Astrology") return 1;

		// 2. Apply chosen sort method
		if (sortBy === "ratingHigh") return b.rating - a.rating;
		if (sortBy === "ratingLow") return a.rating - b.rating;
		if (sortBy === "priceHigh") return b.price - a.price;
		if (sortBy === "priceLow") return a.price - b.price;
		if (sortBy === "newest") return b.id - a.id;
		if (sortBy === "recommended") return b.isRecommended - a.isRecommended;

		return a.id - b.id; // Default fallback
	});
	
	const loadMore = () => setVisible((v) => Math.min(v + 12, sorted.length));
	const resetFilters = () => {
		setSearch("");
		setCategoryFilter("All");
		setPriceFilter("All");
		setSortBy("recommended");
		setVisible(12);
	};

    const isFeaturedVideo = allCourses[0].thumbnail.toLowerCase().endsWith('.mp4');
    const featuredMediaContent = isFeaturedVideo ? (
        <video
            src={allCourses[0].thumbnail}
            alt="Featured Course Video"
            className="w-full h-[300px] md:h-[420px] object-cover object-top"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => console.log('Featured Video load error:', e)}
        />
    ) : (
        <img
            src={allCourses[0].thumbnail}
            alt="Featured Course Image"
            className="w-full h-[300px] md:h-[420px] object-cover object-top"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x420/cccccc/333333?text=Image+Error"; }}
        />
    );


	return (
		<div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-900 min-h-screen font-sans">
			{/* Header */}
			<header className="bg-gradient-to-r from-orange-600 to-yellow-500 shadow-lg py-12 text-center text-white">
				<h1 className="text-4xl md:text-5xl font-extrabold font-serif">
					🪔 Explore All {allCourses.length} Courses
				</h1>
				<p className="text-lg mt-3 opacity-90 max-w-2xl mx-auto">
					Deepen your spiritual and analytical mastery across Jyotish, Vastu, Philosophy, and Sacred Texts.
				</p>
			</header>

			{/* Featured Course Section (using the prioritized course) */}
			<section className="relative max-w-7xl mx-auto mt-16 px-6">
				<h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
					🔥 Featured Masterclass: Vedic Astrology
				</h2>
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-yellow-400/80"
				>
					<div className="relative">
                        {featuredMediaContent}
						<button className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
							<PlayCircle size={70} className="text-white drop-shadow-lg" />
						</button>
					</div>
					<div className="p-6 md:p-8 bg-orange-50">
						<h3 className="text-3xl font-bold text-orange-800">
							{allCourses[0].title}
						</h3>
						<p className="text-gray-700 mt-2 text-lg">
							{allCourses[0].headline}
						</p>
						<div className="mt-4 flex flex-wrap gap-4 items-center">
							<span className="text-2xl font-extrabold text-orange-900">
								{getPriceDisplay(allCourses[0].price)}
							</span>
							<span className="flex items-center gap-1 text-yellow-600 font-bold">
								<Star size={20} fill="currentColor" /> {allCourses[0].rating.toFixed(1)} Rating
							</span>
							<button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition">
								VIEW DETAILS
							</button>
						</div>
					</div>
				</motion.div>
			</section>

			{/* Filter and Course Grid */}
			<section className="max-w-7xl mx-auto px-6 py-16">
				<div className="text-center mb-10">
					<h3 className="text-3xl font-semibold text-orange-700">
						📚 Browse All Offerings ({sorted.length} Results)
					</h3>
					<p className="text-sm text-gray-500 mt-2">
						Showing {Math.min(visible, sorted.length)} courses
					</p>
				</div>

				{/* --- Advanced Filter Bar --- */}
				<div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg mb-12 border border-orange-200">
					<h4 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
						<Filter size={20} /> Course Filters
					</h4>
					<div className="flex flex-col md:flex-row items-center gap-4">
						
						{/* 1. Search Input */}
						<div className="relative w-full md:w-1/3">
							<Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
							<input
								type="text"
								placeholder="Search by title, topic, or faculty..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
							/>
						</div>

						{/* 2. Category Filter */}
						<div className="relative w-full md:w-1/4">
							<BookOpen className="absolute left-3 top-2.5 text-gray-400" size={18} />
							<select
								value={categoryFilter}
								onChange={(e) => setCategoryFilter(e.target.value)}
								className="appearance-none border border-gray-300 bg-white rounded-xl px-10 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50 w-full"
							>
								<option value="All">All Categories</option>
								{categories.map(cat => (
									<option key={cat} value={cat}>{cat}</option>
								))}
							</select>
							<ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
						</div>
						
						{/* 3. Pricing Filter */}
						<div className="relative w-full md:w-1/4">
							<DollarSign className="absolute left-3 top-2.5 text-gray-400" size={18} />
							<select
								value={priceFilter}
								onChange={(e) => setPriceFilter(e.target.value)}
								className="appearance-none border border-gray-300 bg-white rounded-xl px-10 py-2.5 pr-10 text-sm font-medium text-gray-700 cursor-pointer focus:ring-2 focus:ring-orange-400 transition hover:bg-orange-50 w-full"
							>
								<option value="All">Any Price</option>
								<option value="Free">Free</option>
								<option value="Under_1000">Under ₹1,000</option>
								<option value="1000_3000">₹1,000 - ₹3,000</option>
								<option value="Over_3000">Over ₹3,000</option>
							</select>
							<ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
						</div>

						{/* 4. Sort By Dropdown (Updated Design) */}
						<div className="relative w-full md:w-1/4">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className={`appearance-none border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium cursor-pointer focus:ring-2 focus:ring-orange-400 transition w-full ${sortBy === 'recommended' ? 'bg-yellow-100 text-orange-700 font-bold' : 'bg-white text-gray-700 hover:bg-orange-50'}`}
							>
								<option value="recommended">⭐ Recommended For You</option>
								<option value="ratingHigh">Rating: High to Low</option>
								<option value="priceLow">Price: Low to High</option>
								<option value="priceHigh">Price: High to Low</option>
								<option value="newest">Newest Courses</option>
							</select>
							<ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
						</div>
					</div>
					
					<div className="mt-4 text-right">
						<button 
							onClick={resetFilters}
							className="text-sm text-gray-500 hover:text-orange-600 transition underline"
						>
							Reset All Filters
						</button>
					</div>
				</div>

				{/* --- Course Grid --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{sorted.slice(0, visible).map((c) => (
						<CourseCard 
							key={c.id} 
							course={c} 
							toggleWishlist={toggleWishlist} 
							isWishlisted={wishlist.includes(c.id)} 
						/>
					))}
					{sorted.length === 0 && (
						<div className="lg:col-span-3 text-center py-10 bg-orange-100/50 rounded-xl">
							<p className="text-xl font-semibold text-orange-700">No courses found matching your filters.</p>
							<p className="text-gray-600 mt-2">Try adjusting your search terms or filters above.</p>
						</div>
					)}
				</div>

				{visible < sorted.length && (
					<div className="mt-16 flex justify-center">
						<button
							onClick={loadMore}
							className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.05]"
						>
							Load More
						</button>
					</div>
				)}
			</section>

			{/* Footer */}
			<footer className="bg-gradient-to-r from-yellow-200 to-orange-100 py-8 text-center text-gray-700 text-sm mt-12">
				<p>✨ Made with spiritual energy and code | Kundli Academy 2025</p>
			</footer>
		</div>
	);
}
