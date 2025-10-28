


import React, { useState, useMemo, useRef } from "react";
import { PlayCircle, Heart, Search, Star, ChevronDown, Filter, BookOpen, User, Mail, Phone, Clock, CheckCircle, Smile, ArrowLeft, Loader2, X, GraduationCap, Calendar, Zap } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'

// Note: We are not using 'react-router-dom' (Link) in this single file for deployment stability.
// All navigation is handled via state props (onEnrollClick, onViewDetailsClick, onBackToCourses).

// --- Static Data Helpers ---
const getFacultyImageUrl = (name) => {
    const seed = name.split(' ')[0].charCodeAt(0) % 20; 
    return `https://i.pravatar.cc/150?img=${seed + 1}`; 
};

// Generic Curriculum Generator based on duration and category
const generateCurriculum = (title, duration, category) => {
    const durationWeeks = parseInt(duration.split(' ')[0]) || 4;
    const baseModule = {
        "Astrology": ["Foundations: Planets & Signs", "Houses & Aspects", "Dasha Systems & Timing", "Remedies & Case Studies"],
        "Vastu & Space": ["Elements & Directions", "Zoning & Energy Mapping", "Remedial Vastu", "Case Study Audits"],
        "Language & Texts": ["Alphabet & Pronunciation", "Basic Grammar (Vyakarana)", "Reading Sacred Texts", "Chanting Practice"],
        "Mantra & Rituals": ["Mantra Science & Beej", "Daily Puja & Rituals", "Healing Frequencies", "Personal Practice"],
        "Philosophy": ["Core Concepts (Karma, Dharma)", "Upanishad/Veda Overview", "Moksha & Self-Realization", "Modern Application"],
        "Science & Logic": ["Fundamental Principles", "Vedic Mathematics Tricks", "Time & Space Concepts", "Logic Application"],
        "History & Culture": ["Timeline & Context", "Key Characters & Lessons", "Scriptural Analysis", "Cultural Impact"],
        "Wellbeing": ["Meditation Techniques", "Yoga & Prana", "Inner Peace Practices", "Daily Schedule"],
    }[category] || ["Module 1: Introduction", "Module 2: Core Concepts", "Module 3: Advanced Topics", "Module 4: Practice & Review"];

    const curriculumLength = Math.min(durationWeeks, baseModule.length);
    const curriculum = [];
    for(let i = 0; i < curriculumLength; i++) {
        curriculum.push({
            module: `Week ${i + 1}:`,
            title: baseModule[i] || `Lesson ${i + 1} of ${title}`,
        });
    }
    // Ensure minimum of 3 modules
    while(curriculum.length < 3) {
        curriculum.push({ module: `Week ${curriculum.length + 1}:`, title: `Core Module ${curriculum.length + 1}` });
    }
    return curriculum;
};

// Function to enrich a course object with detailed content
const enrichCourseDetails = (baseCourse) => {
    const { title, duration, category, benefits, faculty, id } = baseCourse;
    const curriculum = generateCurriculum(title, duration, category);
    
    // Determine target audience based on tags and category
    let targetAudience = [];
    if (baseCourse.tag === "Best Seller" || baseCourse.tag === "Foundation" || id % 2 === 1) {
        targetAudience = ["Absolute Beginners with no prior knowledge.", "Individuals seeking deep self-knowledge.", "Anyone aspiring for a certified practice."];
    } else {
        targetAudience = ["Intermediate Learners looking to specialize.", "Practitioners of related disciplines.", "Those looking for practical, skill-based learning."];
    }

    // Determine key takeaways, prioritizing original benefits, then curriculum titles
    let keyTakeaways = [...benefits];
    if (keyTakeaways.length < 4 && curriculum.length > 0) {
        keyTakeaways = keyTakeaways.concat(curriculum.slice(0, 4 - keyTakeaways.length).map(m => m.title));
    }

    const fullDescription = {
        "Vedic Astrology": "This comprehensive course on Vedic Astrology (Jyotish) is designed for serious seekers who want to go beyond general readings. You will learn the deep philosophical and mathematical principles behind planetary positions, house meanings, and the powerful Dasha systems. Master the art of prediction and apply effective, traditional remedies (Upayas) to transform life challenges into opportunities for growth. It is a certified practitioner course that gives you the knowledge to start your own practice.",
        "Vastu Shastra": "Discover the ancient science of Vastu Shastra to harmonize your living and working spaces. Learn to balance the five elements, understand directional energies, and implement practical remedies without major structural changes. This course covers everything from site selection to internal room arrangement for maximum prosperity and wellbeing.",
        "Sanskrit Vyakarana": "A foundational yet rigorous study of Sanskrit grammar (Vyakarana). You will master verb conjugations, noun declensions, and sentence structure, enabling you to read and understand original scriptural texts directly. Essential for any serious Vedic student.",
        "Mantra Healing": "An intense therapeutic course focusing on the power of sound. Learn to use Beej Mantras and specific sonic frequencies to balance the chakras, clear energetic blockages, and promote holistic healing for yourself and others. This is a practical, result-oriented program.",
    }[title] || `Dive deep into the ${title} tradition. This ${duration.toLowerCase()} course offers a blend of ancient wisdom and modern application, covering all the core principles you need for mastery in the field of ${category}.`;


    const instructorDetails = {
        experience: `${category} Expert | ${Math.ceil(id / 3) + 10}+ Years Experience`,
        specialty: title.includes("Vedic") ? "Traditional Vedic Texts & Principles" : `Practical Application of ${category}`,
        clients: `${id * 1000}+ students mentored`
    };

    return {
        ...baseCourse,
        fullDescription,
        keyTakeaways,
        curriculum,
        targetAudience,
        instructorDetails,
    };
};

const staticCourses = [
    { id: 1, title: "Vedic Astrology", headline: "Decode the Secrets of Your Kundali through Ancient Jyotish", price: 5999, originalPrice: 12000, duration: "8 Weeks Live", path:"/CoursedetailsPage", benefits: ["Lifetime Access to Recordings", "Official Certificate", "1:1 Mentorship Session", "Downloadable Study Materials (PDFs)"], rating: 5.0, faculty: "Acharya Devi", isRecommended: true, category: "Astrology", tag: "Best Seller", thumbnail: "./Vedic_Astrology_Course_Instructor.mp4", facultyImage: getFacultyImageUrl("Acharya Devi") },
    { id: 2, title: "Palmistry (Hastrekha)", headline: "Your Destiny Lies in Your Hands – Learn the Art of Palmistry", price: 2499, originalPrice: 5000, duration: "4 Weeks Self-Paced",    path: "/palmistry", benefits: ["Lifetime Access", "Official Certificate", "Practice Handouts"], rating: 4.8, faculty: "Guru Gopal", isRecommended: true, category: "Astrology", tag: "New", thumbnail: "https://i.ytimg.com/vi/NODpGnZnLNY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBD1YPfB5KPLk5CqpiTnPdiyXW1Uw", facultyImage: getFacultyImageUrl("Guru Gopal") },
    { id: 3, title: "Numerology", headline: "Numbers Don’t Lie – Unlock Destiny Through Moolank & Bhagyank", price: 1999, originalPrice: 4000, duration: "3 Weeks Online",path:"/numerology", benefits: ["Lifetime Access", "Official Certificate", "Numeroscope Calculator"], rating: 4.7, faculty: "Acharya Devi", isRecommended: false, category: "Astrology", tag: "Popular", thumbnail: "https://schoolofoccultscience.com/uploads/1720718433_Numerology%20Grid.png", facultyImage: getFacultyImageUrl("Acharya Devi") },
    { id: 4, title: "Vastu Shastra", headline: "Balance Your Space, Balance Your Life with Vastu", price: 3499, originalPrice: 7000, duration: "6 Weeks Live + Case Studies", path:"/vastu", benefits: ["Lifetime Access", "Official Certificate", "Vastu Audit Checklist", "Expert Q&A"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Vastu & Space", tag: "Trending", thumbnail: "https://www.vastumiracles.com/cdn/shop/articles/vastu_large.jpg?v=1608715271", facultyImage: getFacultyImageUrl("Dr. Sharma") },
    { id: 5, title: "Sanskrit Vyakarana", headline: "Master the Grammar of Devabhasha – Sanskrit from the Roots", price: 999, originalPrice: 2000, duration: "4 Weeks Foundational", path:"/sanskritcourse",  benefits: ["Lifetime Access", "Official Certificate", "Vocabulary Flashcards"], rating: 4.5, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://i0.wp.com/knowledgegallery.in/wp-content/uploads/2022/03/Sanskrit-grammar.png?fit=500%2C320&ssl=1", facultyImage: getFacultyImageUrl("Pandit Ravi") },
    { id: 6, title: "Daily Puja Routine", headline: "Learn Nitya Puja – Step-by-Step Rituals for Modern Life", price: 1499, originalPrice: 3000, duration: "2 Weeks Quick Start", path:"/dailypuja",  benefits: ["Lifetime Access", "Official Certificate", "Puja Mantras Guide"], rating: 4.6, faculty: "Guru Gopal", isRecommended: false, category: "Mantra & Rituals", tag: "Quick Start", thumbnail: "https://hemfragrances.in/cdn/shop/articles/how-to-perform-daily-pooja.jpg?crop=center&height=1200&v=1753445859&width=1200", facultyImage: getFacultyImageUrl("Guru Gopal") },
    { id: 7, title: "Muhurtas", headline: "Right Time, Right Action – Science of Shubh Muhurta", price: 2999, originalPrice: 6000, duration: "5 Weeks Specialist", path:"/muhurtas", benefits: ["Lifetime Access", "Official Certificate", "Muhurta Calculation Software Access"], rating: 4.8, faculty: "Dr. Sharma", isRecommended: true, category: "Astrology", tag: "Specialist", thumbnail: "https://www.chamundaswamiji.com/wp-content/uploads/2021/06/mahurat.jpg", facultyImage: getFacultyImageUrl("Dr. Sharma") },
    { id: 8, title: "Upanishads", headline: "Dive Deep into the Philosophy of Self & Brahman", price: 4999, originalPrice: 10000, duration: "8 Weeks Philosophical", path:"/upanishads", benefits: ["Lifetime Access", "Official Certificate", "Weekly Discussion Forums", "Detailed Commentary"], rating: 5.0, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Deep Dive", thumbnail: "https://www.esamskriti.com/essays/docfile/918.jpg", facultyImage: getFacultyImageUrl("Pandit Ravi") },
    { id: 9, title: "Vedas", headline: "Foundations of Eternal Knowledge – Study Rig, Yajur, Sama, Atharva", price: 6999, originalPrice: 15000, duration: "12 Weeks Comprehensive", path:"/vedas", benefits: ["Lifetime Access", "Official Certificate", "1:1 Mentorship Session", "Complete Digital Text Library"], rating: 4.9, faculty: "Acharya Devi", isRecommended: false, category: "Philosophy", tag: "Advanced", thumbnail: "https://preview.redd.it/i-wanna-read-the-vedas-what-source-of-books-should-i-read-v0-1j0oug99wqza1.jpg?width=1080&crop=smart&auto=webp&s=184d7fd6417502f43588e6c474fc71d2349e4b01", facultyImage: getFacultyImageUrl("Acharya Devi") },
    { id: 10, title: "Purana & Itihas", headline: "Decode Ramayana, Mahabharata & the Puranas with Context", price: 1999, originalPrice: 4000, duration: "4 Weeks Historical", path:"/purana", benefits: ["Lifetime Access", "Official Certificate", "Mythological Timelines"], rating: 4.7, faculty: "Guru Gopal", isRecommended: false, category: "History & Culture", tag: "History", thumbnail: "https://i.ytimg.com/vi/ZBWno70ThhE/maxresdefault.jpg", facultyImage: getFacultyImageUrl("Guru Gopal") },
    { id: 11, title: "Vedic Mathematics", headline: "Ancient Maths Tricks for Fast Calculation & Logical Thinking", price: 999, originalPrice: 2000, duration: "3 Weeks Skills Course", path:"/mathematics", benefits: ["Lifetime Access", "Official Certificate", "Practice Worksheets"], rating: 4.5, faculty: "Dr. Sharma", isRecommended: false, category: "Science & Logic", tag: "Low Price", thumbnail: "https://abacusmaster.com/blog/images/1112/Vedic-Math.jpg", facultyImage: getFacultyImageUrl("Dr. Sharma") },
    { id: 12, title: "Mantra Healing", headline: "Heal Body, Mind & Soul Through Beej Mantras & Frequencies", price: 3999, originalPrice: 8000, duration: "6 Weeks Therapeutic", path:"/mantra", benefits: ["Lifetime Access", "Official Certificate", "Personalised Mantra Recommendation"], rating: 4.8, faculty: "Acharya Devi", isRecommended: true, category: "Mantra & Rituals", tag: "Healing", thumbnail: "https://healingwithram.in/wp-content/uploads/2025/09/mantras-for-healing-1.png", facultyImage: getFacultyImageUrl("Acharya Devi") },
    { id: 13, title: "Sanskrit (Reading + Chanting)", headline: "Speak the Language of the Gods – Chant with Clarity", price: 1499, originalPrice: 3000, duration: "4 Weeks Practice", path:"/sanskritread", benefits: ["Lifetime Access", "Official Certificate", "Pronunciation Guide Audio"], rating: 4.6, faculty: "Pandit Ravi", isRecommended: false, category: "Language & Texts", tag: "Quick Start", thumbnail: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149308684/settings_images/wjng9n8QICTFg2w78HdQ_Sanscrit_B.png", facultyImage: getFacultyImageUrl("Pandit Ravi") },
    { id: 14, title: "Sacred Texts Reading", headline: "Scriptural Reading Practice: Geeta, Hanuman Chalisa, etc.", price: 999, originalPrice: 2000, duration: "2 Weeks Focused", path:"/sacredtexts", benefits: ["Lifetime Access", "Official Certificate", "Annotated Text PDFs"], rating: 4.4, faculty: "Guru Gopal", isRecommended: false, category: "Language & Texts", tag: "Low Price", thumbnail: "https://www.focolaremedia.com/sites/default/files/styles/article_page_featured_image/public/2024-04/Website%20images%20_0.jpg?itok=-iLrs_Q4", facultyImage: getFacultyImageUrl("Guru Gopal") },
    { id: 15, title: "Vedic Science", headline: "Hidden Scientific Concepts in Agni, Ether, Time & Creation", price: 4999, originalPrice: 10000, duration: "7 Weeks Advanced", path:"/vedicscience", benefits: ["Lifetime Access", "Official Certificate", "Science vs Text Comparison"], rating: 4.9, faculty: "Dr. Sharma", isRecommended: true, category: "Science & Logic", tag: "Advanced", thumbnail: "https://vedicuniversity.online/gallery_gen/49703b6abece7c8a19930f8a923d0c60_1642x1028_fit.jpg?ts=1759859580", facultyImage: getFacultyImageUrl("Dr. Sharma") },
    { id: 16, title: "Vedic Philosophy", headline: "Understand Karma, Dharma, Rebirth, Moksha from Vedic Lens", price: 2999, originalPrice: 6000, duration: "5 Weeks Foundation", path:"/vedicphilosophy",  benefits: ["Lifetime Access", "Official Certificate", "Key Sutra Summaries"], rating: 4.8, faculty: "Pandit Ravi", isRecommended: true, category: "Philosophy", tag: "Foundation", thumbnail: "https://cn.edurev.in/ApplicationImages/Temp/12058070_dea7d419-77ab-4d7e-b37e-6d3e5fa993d9_lg.png?w=400&dpr=2.6", facultyImage: getFacultyImageUrl("Pandit Ravi") },
].map(enrichCourseDetails); // APPLY ENRICHMENT TO ALL 16 COURSES

// Combine all possible unique categories
const categories = ["All", "Astrology", "Mantra & Rituals", "Vastu & Space", "Philosophy", "Language & Texts", "Science & Logic", "History & Culture", "Wellbeing"];

// Create a large pool of courses, ensuring the 16 static ones are at the beginning
const totalCourses = 16;
const allCourses = [
    ...staticCourses,
    ...Array.from({ length: totalCourses - staticCourses.length }).map((_, i) => {
        const facultyName = `Faculty F-${(i % 5) + 1}`;
        const baseCourse = {
            id: i + 17,
            title: `Yoga Nidra and Meditation ${i + 17}`,
            headline: `Find inner peace and clarity with guided practice.`,
            price: 99 + (i * 100),
            originalPrice: 500 + (i * 100),
            duration: "2 Weeks On-Demand",
            benefits: ["Lifetime Access", "Audio Guides"],
            path: i + 17,
            rating: 3.5 + (i % 10) / 10,
            faculty: facultyName,
            isRecommended: false,
            category: "Wellbeing",
            tag: "General",
            thumbnail: `https://placehold.co/600x350/seed/kundli-${i + 17}/600/350`,
            facultyImage: getFacultyImageUrl(facultyName),
        };
        // Enrich the generated courses as well
        return enrichCourseDetails(baseCourse);
    })
];

const getPriceDisplay = (price) => {
    if (price === 0) return "FREE";
    return `₹${price.toLocaleString('en-IN')}`;
}

// =========================================================================
// 1. Course Card Component (UNCHANGED)
// =========================================================================
const CourseCard = ({ course, toggleWishlist, isWishlisted, onEnrollClick, onViewDetailsClick }) => {
    const isThumbnailVideo = course.thumbnail.toLowerCase().endsWith('.mp4');
    
    // Faculty Image Placeholder logic
    const facultyImage = course.facultyImage || getFacultyImageUrl(course.faculty);

    const thumbnailContent = isThumbnailVideo ? (
        <video 
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            autoPlay 
            loop 
            muted 
            playsInline
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder"; e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x350/ffefe1/b45309?text=Image+Placeholder" alt="${course.title}" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />`; }}
        />
    ) : (
        <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
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

                {/* Rating and Faculty (Updated with Image) */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-t pt-4">
                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                        <Star size={16} fill="currentColor" /> {Number(course.rating).toFixed(1)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <img src={facultyImage} alt={course.faculty} className="w-15 h-15 rounded-full object-cover border-2 border-orange-300 shadow-sm" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/ff7e00/fff?text=F"; }} />
                        By <span className="font-medium text-orange-600">{course.faculty}</span>
                    </div>
                </div>
                
                {/* Price and Enrollment Button */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <div className="font-extrabold text-2xl text-orange-800">
                        {getPriceDisplay(course.price)}
                    </div>
                    <div className="flex gap-2">
                        {/* New View Details Button */}
                        <button
                            onClick={() => onViewDetailsClick(course)} 
                            className="text-orange-500 border border-orange-300 px-4 py-2.5 rounded-full font-semibold transition hover:bg-orange-50 text-sm"
                        >
                            <BookOpen size={16} className="inline mr-1" /> View Details
                        </button>
                        {/* Original Enroll Button */}
                        <button 
                            onClick={() => onEnrollClick(course)}
                            className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-[1.02] text-sm"
                        >
                            ENROLL
                        </button>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

// =========================================================================
// 2. Category Filter Combobox (UNCHANGED)
// =========================================================================
const CategoryFilterCombobox = ({ value, onChange, options }) => {
    const [searchTerm, setSearchTerm] = useState(value === "All" ? "" : value);
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);
    
    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [filterRef]);

    const filteredOptions = options.filter(opt => 
        opt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (category) => {
        onChange(category);
        setSearchTerm(category === "All" ? "" : category);
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        setIsOpen(true);

        // This is the "type-to-jump/autocomplete" logic
        // If the user types a term that matches an option, immediately set the filter.
        const perfectMatch = options.find(opt => opt.toLowerCase() === newSearchTerm.toLowerCase());
        if (perfectMatch) {
            onChange(perfectMatch);
            setIsOpen(false);
        } else if (newSearchTerm === "") {
            onChange("All");
        }
    };
    
    const handleClear = () => {
        setSearchTerm("");
        onChange("All");
        setIsOpen(false);
    };

    return (
        <div className="relative w-full md:w-1/3" ref={filterRef}>
            <BookOpen className="absolute left-3 top-2.5 text-gray-400 z-10" size={18} />
            <input
                type="text"
                placeholder="Filter by Course Category (e.g., Astrology)"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                className="w-full border border-gray-300 rounded-xl px-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 transition pr-12 text-sm font-medium text-gray-700"
            />
            {searchTerm && value !== "All" ? (
                <button onClick={handleClear} className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500 transition p-1">
                    <X size={18} />
                </button>
            ) : (
                <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            )}

            <AnimatePresence>
                {isOpen && filteredOptions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 mt-2 w-full bg-white border border-orange-300 rounded-xl shadow-xl max-h-60 overflow-y-auto"
                    >
                        {filteredOptions.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleSelect(cat)}
                                className={`w-full text-left px-4 py-2 text-sm transition font-medium ${
                                    value === cat
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
                                    // Custom Hover: Blue hover is replaced with yellow gradient hover
                                    : 'text-gray-700 hover:bg-yellow-100 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-50'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                        {/* Option to clear filter if not "All" is explicitly selected */}
                         {searchTerm !== "" && !options.includes(value) && (
                            <button
                                onClick={() => handleSelect("All")}
                                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition border-t"
                            >
                                Clear Category Filter
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

    );
};

// =========================================================================
// 3. Detailed Course View Component (UPDATED SPACING)
// =========================================================================
const CourseDetailsPage = ({ course = staticCourses[0], onBackToCourses, onEnrollClick }) => {
    // Check if the first course's thumbnail is a video or if the placeholder is needed
    const isMediaVideo = course.thumbnail.toLowerCase().endsWith('.mp4');

    // Default values for new fields to prevent errors if not present on all course objects
    const fullDescription = course.fullDescription || "A comprehensive and transformative learning journey designed to unlock the ancient wisdom of this sacred tradition.";
    const keyTakeaways = course.keyTakeaways || course.benefits; // Fallback to existing benefits
    const curriculum = course.curriculum || [];
    const instructorDetails = course.instructorDetails || {};
    const targetAudience = course.targetAudience || [];
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 py-16 px-4">
            <div className="w-full max-w-5xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={onBackToCourses}
                    className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back to All Courses
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-2xl rounded-3xl overflow-hidden border-t-8 border-orange-500"
                >
                    {/* Media Header */}
                    <div className="relative">
                        {isMediaVideo ? (
                            <video
                                src={course.thumbnail}
                                alt="Course Video"
                                className="w-full h-96 object-cover object-top"
                                autoPlay loop muted playsInline
                                onError={(e) => { e.target.onerror = null; e.target.closest('div').innerHTML = `<img src="https://placehold.co/800x400/ffefe1/b45309?text=Video+Unavailable+-+Course+Preview" alt="Course Preview" className="w-full h-96 object-cover object-top" />`; }}
                            />
                        ) : (
                            <img
                                src={course.thumbnail}
                                alt="Course Preview"
                                className="w-full h-96 object-cover object-top"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x400/cccccc/333333?text=Image+Error"; }}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <PlayCircle size={80} className="text-white opacity-80" />
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 md:p-12">
                        <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                            <h1 className="text-4xl font-extrabold text-orange-800">{course.title}</h1>
                            <div className="text-right">
                                <span className="text-4xl font-extrabold text-orange-700 block">
                                    {getPriceDisplay(course.price)}
                                </span>
                                <span className="text-sm line-through text-gray-500">
                                    {getPriceDisplay(course.originalPrice)}
                                </span>
                            </div>
                        </div>

                        <p className="text-xl text-gray-700 mb-6 font-medium">{course.headline}</p>

                        {/* Faculty & Rating Row */}
                        <div className="flex items-center gap-6 border-b pb-4 mb-6">
                            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                                <img src={course.facultyImage} alt={course.faculty} className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500 shadow-md" />
                                Taught By: <span className="text-orange-600">{course.faculty}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xl font-bold text-yellow-500">
                                <Star size={24} fill="currentColor" /> {course.rating.toFixed(1)}
                            </div>
                            <div className="flex items-center text-gray-700 text-lg font-semibold">
                                <GraduationCap size={24} className="text-orange-400 mr-2" />
                                <span className="font-semibold">Certificate:</span> Yes
                            </div>
                        </div>

                        {/* --- SECTION: Full Description and Key Takeaways --- */}
                        <div className="mb-10">
                             <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2 border-b pb-2">
                                <BookOpen size={24} className="text-orange-500" /> Course Overview
                            </h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {fullDescription}
                            </p>
                            
                            <h3 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                                <Zap size={20} className="text-yellow-500" /> What You Will Master
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {keyTakeaways.map((item, index) => (
                                    <div key={index} className="flex items-start text-gray-700">
                                        <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* -------------------------------------------------------- */}

                        {/* Benefits & Actions - Fixed spacing here with flex-col justify-between and mt-auto on button */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                            {/* Detailed Curriculum */}
                            <div >
                                <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2 border-b pb-2">
                                    <Calendar size={20} className="text-orange-500" /> Curriculum Breakdown
                                </h2>
                                <ul className="space-y-3 mb-4">
                                    {curriculum.map((item, index) => (
                                        <li key={index} className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400 shadow-sm">
                                            <span className="font-semibold text-gray-800 block">{item.module}</span>
                                            <span className="text-sm text-gray-600">{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                {/* <Link to="/CoursedetailsPage" type="button" className="inline-block text-orange-600 hover:text-orange-800 font-semibold transition mt-2">
                                    View Detailed Lesson List &rarr;
                                </Link>
                                 */}
{/* <Link 
  to={course.path} 
  className="inline-block text-orange-600 hover:text-orange-800 font-semibold transition mt-2"
>
  View Detailed Lesson List &rarr;
</Link> */}
{/* Detailed Curriculum */}
                            <div >
         {/* <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2 border-b pb-2">
                                    <Calendar size={20} className="text-orange-500" /> Curriculum Breakdown
                                </h2>
                                <ul className="space-y-3 mb-4">
                                    {curriculum.map((item, index) => (
                                        <li key={index} className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400 shadow-sm">
                                            <span className="font-semibold text-gray-800 block">{item.module}</span>
                                            <span className="text-sm text-gray-600">{item.title}</span>
                                        </li>
                                    ))}
                                </ul>                        */}
                                {/* FIX: Restoring the Link using the single 'course.path' variable for intended functionality. */}
                                <Link to={course.path || "/CoursedetailsPage"} type="button" className="inline-block text-orange-600 hover:text-orange-800 font-semibold transition mt-2">
                                    View Detailed Lesson List &rarr;
                                </Link>
                            </div>
                            </div>
                    
                            {/* Course Stats, Audience, and Enroll */}
                            {/* **FIXED SPACING HERE:** Added flex-col and justify-between to ensure vertical space is distributed, and mt-auto to push the button down. */}
                            <div className="bg-orange-50 p-6 rounded-xl shadow-inner flex flex-col justify-between">
                                <div className="space-y-4 mb-6">
                                    <h3 className="text-xl font-bold text-orange-700 flex items-center gap-2">
                                        <User size={20} className="text-orange-500" /> Key Information
                                    </h3>
                                    <div className="flex items-center text-gray-700">
                                        <Clock size={20} className="text-orange-400 mr-3" />
                                        <span className="font-semibold">Duration:</span> {course.duration}
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <BookOpen size={20} className="text-orange-400 mr-3" />
                                        <span className="font-semibold">Category:</span> {course.category}
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Smile size={20} className="text-orange-400 mr-3" />
                                        <span className="font-semibold">Ideal For:</span> {targetAudience[0] || "Beginners & Intermediate Learners"}
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => onEnrollClick(course)}
                                    // Added mt-auto (margin-top: auto) to push the button to the bottom of the flex container
                                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-[1.02] mt-auto"
                                >
                                    ENROLL NOW
                                </button>
                                
                            </div>
                        </div>

                        {/* --- SECTION: Instructor Details (Bottom of page) --- */}
                         <div className="mt-10 pt-8 border-t border-gray-200">
                            <h2 className="text-3xl font-extrabold text-orange-800 mb-6 flex items-center gap-3">
                                <User size={30} className="text-yellow-500" /> About The Instructor
                            </h2>
                            <div className="flex items-start bg-yellow-50 p-6 rounded-xl border border-yellow-300 shadow-md">
                                <img src={course.facultyImage} alt={course.faculty} className="w-24 h-24 rounded-full object-cover border-4 border-orange-300 shadow-lg mr-6 flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-700 mb-1">{course.faculty}</h3>
                                    <p className="text-lg text-gray-700 mb-3 font-medium">
                                        {instructorDetails.experience || "Experienced Vedic Scholar"}
                                    </p>
                                    <ul className="text-gray-600 space-y-1 text-sm">
                                        <li><span className="font-semibold">Specialty:</span> {instructorDetails.specialty || "Traditional Vedic Sciences"}</li>
                                        <li><span className="font-semibold">Reach:</span> {instructorDetails.clients || "Thousands of students mentored"}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// =========================================================================
// 4. Courses Page Component (MAIN)
// =========================================================================
const CoursesPage = ({ onEnrollClick, onViewDetailsClick }) => {
  const [visible, setVisible] = useState(12);
  const [sortBy, setSortBy] = useState("recommended");
  const [categoryFilter, setCategoryFilter] = useState("All");
  // [REMOVED] const [priceFilter, setPriceFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Wishlist toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Memoized filtering and sorting logic
  const sorted = useMemo(() => {
    let currentFilteredCourses = allCourses.filter((c) => {
      // 1. Search Filter
      const searchMatch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.faculty.toLowerCase().includes(search.toLowerCase()) ||
        c.headline.toLowerCase().includes(search.toLowerCase());

      if (!searchMatch) return false;

      // 2. Category Filter
      if (categoryFilter !== "All" && c.category !== categoryFilter) return false;
      
      // [REMOVED] 3. Price Filter (Removed as requested)

      return true;
    });

    // --- Sorting Logic ---
    return [...currentFilteredCourses].sort((a, b) => {
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
  }, [search, categoryFilter, sortBy]);
    
  const loadMore = () => setVisible((v) => Math.min(v + 12, sorted.length));
  const resetFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    // [REMOVED] setPriceFilter("All");
    setSortBy("recommended");
    setVisible(12);
  };

    // Fallback for the featured course media (assuming the first course is featured)
    const featuredCourse = allCourses[0];
    const isFeaturedVideo = featuredCourse.thumbnail.toLowerCase().endsWith('.mp4');
    const featuredMediaContent = isFeaturedVideo ? (
        <video
            src={featuredCourse.thumbnail}
            alt="Featured Course Video"
            className="w-full h-[300px] md:h-[420px] object-cover object-top"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
                e.target.onerror = null; 
                e.target.closest('div').innerHTML = `<img src="https://placehold.co/600x420/ffefe1/b45309?text=Featured+Image+Placeholder" alt="Featured Course Image" className="w-full h-[300px] md:h-[420px] object-cover object-top" />`;
            }}
        />
    ) : (
        <img
            src={featuredCourse.thumbnail}
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
            <button 
                onClick={() => onViewDetailsClick(featuredCourse)} // Change to View Details handler
                className="absolute inset-0 flex justify-center items-center bg-black/40 hover:bg-black/60 transition">
              <PlayCircle size={70} className="text-white drop-shadow-lg" />
            </button>
          </div>
          <div className="p-6 md:p-8 bg-orange-50">
            <h3 className="text-3xl font-bold text-orange-800">
              {featuredCourse.title}
            </h3>
            <p className="text-gray-700 mt-2 text-lg">
              {featuredCourse.headline}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <span className="text-2xl font-extrabold text-orange-900">
                {getPriceDisplay(featuredCourse.price)}
              </span>
              <span className="flex items-center gap-1 text-yellow-600 font-bold">
                <Star size={20} fill="currentColor" /> {featuredCourse.rating.toFixed(1)} Rating
              </span>
              <button
                onClick={() => onViewDetailsClick(featuredCourse)} // Use the new handler
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition"
              >
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

        {/* --- Advanced Filter Bar (Updated) --- */}
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

            {/* 2. Category Filter (Now a Combobox/Type-ahead) */}
            <CategoryFilterCombobox 
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={categories}
            />
            
            {/* [REMOVED] 3. Pricing Filter (Removed as requested) */}

            {/* 4. Sort By Dropdown (Updated Design) */}
        <div className="relative w-full md:w-1/3">
               <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`appearance-none border border-gray-300 rounded-xl px-4 py-2.5 pr-10 text-sm  font-medium cursor-pointer focus:ring-2 focus:ring-orange-400 transition w-full ${sortBy === 'recommended' ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black' : 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-black text-gray-700 '}`}
      
              >
                <option className="bg-yellow-400" value="recommended">⭐ Recommended For You</option>
                <option className="bg-yellow-400 " value="ratingHigh">Rating: High to Low</option>
                <option className="bg-yellow-400" value="priceLow">Price: Low to High</option>
                <option className="bg-yellow-400" value="priceHigh">Price: High to Low</option>
                <option className="bg-yellow-400" value="newest">Newest Courses</option>
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
              onEnrollClick={onEnrollClick} // Pass the handler down
              onViewDetailsClick={onViewDetailsClick} // Pass the handler down
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


// =========================================================================
// 5. Enrollment Page Component
// =========================================================================
const EnrollPage = ({ course, onBackToCourses }) => {
  // Default course details for safety if prop is missing (should not happen in this flow)
  const defaultCourse = {
    title: "Unknown Course",
    price: 0,
    originalPrice: 0,
    duration: "N/A",
    benefits: ["No Benefits Listed"],
  };
    
  const courseData = course || defaultCourse;

  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "Morning Batch (9AM - 11AM)",
  });
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = {
    name: (v) => v.trim().length >= 3,
    email: (v) => /^[\w.-]+@[\w.-]+\.\w+$/.test(v),
    phone: (v) => /^\d{10}$/.test(v),
  };

  const isFormValid =
    validate.name(formData.name) &&
    validate.email(formData.email) &&
    validate.phone(formData.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true }); // Mark all as touched on submit
    if (!isFormValid) return;

    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setIsEnrolled(true);    
        
      // In this environment, we simulate redirecting back to the course list
      setTimeout(() => {
        console.log("Simulating navigation to Payment Page for:", courseData.title);
        // Note: In a real app, this is where you'd redirect to a payment gateway
        // For this single-page demo, we go back to the course list.
        onBackToCourses(); 
      }, 3000); // 3 seconds delay for the success message
        
    }, 2000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium ${
      touched[field] && !validate[field](formData[field])
        ? "border-red-500 bg-red-50"
        : "border-gray-300 bg-gray-50 hover:border-orange-400"
    }`;

  const ErrorMessage = ({ field }) => {
    if (touched[field] && !validate[field](formData[field])) {
      let message = "";
      if (field === "name") message = "Please enter your full name (at least 3 characters).";
      if (field === "email") message = "Please enter a valid email address.";
      if (field === "phone") message = "Please enter a valid 10-digit phone number.";
      return <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-600 text-xs mt-1 font-medium">{message}</motion.p>;
    }
    return null;
  };
    
  // Success Screen Component
  const SuccessScreen = () => (
      <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="p-10 text-center bg-green-50 rounded-2xl border-4 border-green-300 shadow-xl max-w-xl mx-auto"
      >
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-green-700 mb-2">Enrollment Request Successful!</h2>
          <p className="text-gray-600 mb-6">
              Thank you, **{formData.name}**! Your request for the **{courseData.title}** course is processed.
          </p>
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-sm text-gray-500">
              Simulating redirect to payment gateway...
          </p>
      </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-200 flex justify-center items-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-3xl border-t-8 border-orange-500"
      >
        {/* Back Button */}
        <button
          onClick={onBackToCourses}
          className="flex items-center text-orange-600 hover:text-orange-800 font-semibold mb-6 transition"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to All Courses
        </button>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-2 text-center">
            {isEnrolled ? "Payment Redirection" : `Enroll in: ${courseData.title}`}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mx-auto mb-10">
            {isEnrolled ? "Please wait while we prepare your payment link." : `Secure your seat and begin your spiritual journey with the ${courseData.title}.`}
        </p>
          
        {isEnrolled ? (
            <SuccessScreen />
        ) : (
            
        /* Content Grid (Two Columns) */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left Column: Course Summary & Benefits (Dynamic Content) */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 h-full flex flex-col"
            >
                <h2 className="text-2xl font-bold text-orange-800 flex items-center gap-2 mb-4">
                    <BookOpen className="text-yellow-600" size={24} /> Course Details
                </h2>
                
                <p className="text-4xl font-extrabold text-orange-700 mb-6">
                    {getPriceDisplay(courseData.price)}
                    <span className="text-base font-normal line-through text-gray-500 ml-3">{getPriceDisplay(courseData.originalPrice)}</span>
                </p>

                <ul className="space-y-3 flex-grow mb-6">
                    {courseData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                            <CheckCircle size={18} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                            {benefit}
                        </li>
                    ))}
                    <li className="flex items-start text-gray-700 font-bold">
                        <Clock size={18} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        Duration: {courseData.duration}
                    </li>
                </ul>
                <div className="flex items-center text-sm font-medium text-gray-500 pt-4 border-t">
                    <Smile size={18} className="mr-2 text-yellow-500" />
                    Join over 1,000+ satisfied students in this program!
                </div>
            </motion.div>

            {/* Right Column: Enrollment Form */}
            <motion.form 
                onSubmit={handleSubmit} 
                initial={{ x: 50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-orange-700 mb-6">Your Information</h2>
                <div className="space-y-6">
                    
                    {/* Name Input */}
                    <div>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass("name")}
                                disabled={loading}
                            />
                        </div>
                        <ErrorMessage field="name" />
                    </div>

                    {/* Email Input */}
                    <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass("email")}
                                disabled={loading}
                            />
                        </div>
                        <ErrorMessage field="email" />
                    </div>

                    {/* Phone Input */}
                    <div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your 10-Digit Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass("phone")}
                                disabled={loading}
                            />
                        </div>
                        <ErrorMessage field="phone" />
                    </div>

                    {/* Batch Select */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Preferred Batch</label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                            <select
                                name="batch"
                                value={formData.batch}
                                onChange={handleChange}
                                className={`appearance-none w-full px-4 py-3 pl-12 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-yellow-400 outline-none transition text-gray-800 font-medium cursor-pointer pr-10 ${loading ? 'opacity-60' : 'hover:border-orange-400'}`}
                                disabled={loading}
                            >
                                <option>Morning Batch (9AM - 11AM IST)</option>
                                <option>Evening Batch (7PM - 9PM IST)</option>
                                <option>Weekend Batch (Sat/Sun)</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileTap={{ scale: isFormValid && !loading ? 0.98 : 1 }}
                    className={`w-full mt-8 text-white px-8 py-3 rounded-full font-bold shadow-lg transition flex items-center justify-center ${
                        isFormValid && !loading
                            ? "bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 transform hover:scale-[1.01]"
                            : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!isFormValid || loading}
                >
                    {loading ? (
                        <>
                            <Loader2 size={20} className="animate-spin mr-2" /> Processing...
                        </>
                    ) : (
                        `PROCEED TO PAYMENT (${getPriceDisplay(courseData.price)})`
                    )}
                </motion.button>
                <p className="text-center text-xs text-gray-500 mt-3">
                    By enrolling, you agree to our terms and conditions.
                </p>
            </motion.form>
        </div>
        )}
      </motion.div>
    </div>
  );
};

// =========================================================================
// 6. Application Root Component
// =========================================================================
const App = () => {
    const [currentPage, setCurrentPage] = useState("CoursesPage");
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Handler for "ENROLL" button
    const handleEnrollClick = (course) => {
        setSelectedCourse(course);
        setCurrentPage("EnrollPage");
        // Ensure buttons work by managing state, not native navigation
    };
    
    // Handler for "VIEW DETAILS" button
    const handleViewDetailsClick = (course) => {
        setSelectedCourse(course);
        setCurrentPage("CourseDetailsPage");
        // Ensure buttons work by managing state, not native navigation
    };

    // Handler to go back to the main course page
    const handleBackToCourses = () => {
        setSelectedCourse(null);
        setCurrentPage("CoursePage");
    };

    // Main content rendering based on the current state
    let content;
    if (currentPage === "EnrollPage") {
        content = <EnrollPage course={selectedCourse} onBackToCourses={handleBackToCourses} />;
    } else if (currentPage === "CourseDetailsPage") {
        content = <CourseDetailsPage course={selectedCourse} onBackToCourses={handleBackToCourses} onEnrollClick={handleEnrollClick} />;
    } else {
        content = <CoursesPage onEnrollClick={handleEnrollClick} onViewDetailsClick={handleViewDetailsClick} />;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                {content}
            </motion.div>
        </AnimatePresence>
    );
};

export default App;


















