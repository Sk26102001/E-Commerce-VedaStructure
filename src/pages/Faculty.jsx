import React from 'react';
import { Sparkles, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Faculty Data with new dummy images ---
const facultyData = [
  {
    id: 1,
    name: "Dr. Arun Pandit",
    title: "Vedic Astrology Master",
    // New, more visible dummy image
    image: "https://randomuser.me/api/portraits/men/32.jpg", 
    expertise: [
      "Jyotish (Vedic Astrology)",
      "Nakshatra Analysis",
      "Remedial Measures (Upay)",
    ],
    experience: "20+ Years in practice & research",
    specialty: "Predictive techniques & spiritual guidance",
  },
  {
    id: 2,
    name: "Smt. Meera Joshi",
    title: "Spiritual Counselor & Tarot Expert",
    // New, more visible dummy image
    image: "https://randomuser.me/api/portraits/women/44.jpg", 
    expertise: [
      "Tarot Card Reading",
      "Chakra Healing",
      "Meditation Techniques",
    ],
    experience: "12 Years training practitioners globally",
    specialty: "Intuitive development & energetic alignment",
  },
  {
    id: 3,
    name: "Prof. Rajesh Sharma",
    title: "Vastu Shastra Consultant",
    // New, more visible dummy image
    image: "https://randomuser.me/api/portraits/men/78.jpg", 
    expertise: [
      "Residential Vastu",
      "Commercial Vastu",
      "Geopathic Stress Solutions",
    ],
    experience: "18 Years consulting major projects",
    specialty: "Harmonizing spaces for prosperity & health",
  },
//   {
//     id: 4,
//     name: "Dr. Priya Singh",
//     title: "Numerology & Gemology Expert",
//     // Another new, more visible dummy image
//     image: "https://randomuser.me/api/portraits/women/65.jpg", 
//     expertise: [
//       "Personalized Numerology Charts",
//       "Gemstone Recommendations",
//       "Signature Analysis",
//     ],
//     experience: "10+ Years in esoteric studies",
//     specialty: "Unlocking hidden potential & prosperity",
//   },
  // Add more faculty members as needed
];

// --- Individual Faculty Card Component ---
const FacultyCard = ({ faculty }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition-all duration-500 border-t-8 border-orange-500 hover:shadow-2xl">
      
      {/* Image & Title Section */}
      <div className="relative p-6 sm:p-8 text-center bg-gray-50">
        <div className="mx-auto w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
          <img
            src={faculty.image}
            alt={faculty.name}
            // Ensure image covers the area well
            className="w-full h-full object-cover object-center" 
          />
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
          {faculty.name}
        </h3>
        <p className="text-orange-600 font-semibold italic text-lg">
          {faculty.title}
        </p>
      </div>

      {/* Details Section */}
      <div className="p-6">
        
        {/* Experience */}
        <div className="flex items-center gap-3 mb-4 p-3 bg-yellow-50 rounded-lg">
          <Briefcase className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <p className="text-sm font-medium text-gray-700">
            <span className="font-bold text-gray-900">Experience:</span> {faculty.experience}
          </p>
        </div>

        {/* Specialty */}
        <div className="flex items-start gap-3 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <span className="font-bold text-gray-900">Specialty:</span> {faculty.specialty}
          </p>
        </div>
        
        {/* Expertise List */}
        <div className="mt-4">
          <h4 className="flex items-center text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
             <Sparkles className="w-4 h-4 text-purple-600 mr-2" /> Core Expertise:
          </h4>
          <ul className="space-y-2">
            {faculty.expertise.map((expert, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                {expert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- Main Faculty Page Component ---
const Faculty = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our Best Faculty
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the masters in the field. Our faculty members bring decades of **real-world experience** and deep scholarly knowledge to your journey.
          </p>
          <div className="flex justify-center mt-4">
            <img
              src="https://aap.astroarunpandit.org/wp-content/uploads/2025/07/wave-1-768x54.png"
              alt="wave border"
              className="w-48"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {facultyData.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        {/* Call to Action (Optional) */}
        <div className="mt-16 text-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
                Ready to learn from the best?
            </p>
            <Link
            to="/enrollnow"
                className="px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold rounded-full text-lg shadow-2xl hover:bg-orange-500 transition transform hover:scale-105"
            >
                View All Course
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Faculty;