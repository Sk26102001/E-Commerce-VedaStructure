// import React from 'react'
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Banner from './components/Banner'
// import FeaturedCategories from './components/FeaturedCategories'
// import FeaturedProducts from './components/FeaturedProducts'
// import AboutPage from './pages/AboutPage'
// import UpcomingFestivalPuja from './pages/UpcomingFestivalPuja'
// import ServicesPage from './pages/ServicesPage'
// import Testimonials from './components/Testimonials'
// import FAQPage from './pages/FAQPage'
// import AppDownloadPage from './pages/AppDownloadPage'
// import SpiritualInsights from './pages/SpiritualInsights'
// import CouponCard from './components/CouponCard'
// import AstrologyReports from './pages/AstrologyReports'

// function App() {
//   return (
//     <div> 
    
//       <Navbar/>

//       <Banner/>
//       <FeaturedCategories/>
      
//       <AboutPage/>
//       <FeaturedProducts/>
//       <AstrologyReports/>
//       <UpcomingFestivalPuja/>
//       <ServicesPage/>
//       <Testimonials/>
//       <FAQPage/>
//       <AppDownloadPage/>
//      <SpiritualInsights/>
//      <CouponCard/>
//     <Footer/>  
     
   

      
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import HomePage from './pages/HomePage'; // fix the case

// function App() {
//   return <HomePage />;
// }

// export default App;

// import React from 'react';
// import HomePage from './pages/HomePage'; // make sure this matches the file name

// function App() {
//   return <HomePage />; // HomePages contains Router + Routes
// }

// export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Layout components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import Banner from "./components/Banner";
// import FeaturedCategories from "./components/FeaturedCategories";
// import FeaturedProducts from "./components/FeaturedProducts";
// import AboutPage from "./pages/AboutPage";
// import UpcomingFestivalPuja from "./pages/UpcomingFestivalPuja";
// import ServicesPage from "./pages/ServicesPage";
// import Testimonials from "./components/Testimonials";
// import FAQPage from "./pages/FAQPage";
// import AppDownloadPage from "./pages/AppDownloadPage";
// import SpiritualInsights from "./pages/SpiritualInsights";
// import CouponCard from "./components/CouponCard";
// import AstrologyReports from "./pages/AstrologyReports";
// import ContactPage from "./pages/ContactPage";

// function App() {
//   return (
//     <>
//       <Navbar />
//        <Banner />
//               <FeaturedCategories />
//               <FeaturedProducts />
//               <CouponCard />
//               <Testimonials />

//       <Routes>
//         {/* Home / Landing Page */}
        
             
            
          
        

      
      
//     </Routes>
      

//       <Footer />
//     </>
//   );
// }

// export default App;




// import React from "react";
// import { BrowserRouter as  Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Banner from "./components/Banner";
// import FeaturedCategories from "./components/FeaturedCategories";
// import FeaturedProducts from "./components/FeaturedProducts";
// import Testimonials from "./components/Testimonials";
// import CouponCard from "./components/CouponCard";

// // Pages
// import AboutPage from "./pages/AboutPage";
// import UpcomingFestivalPuja from "./pages/UpcomingFestivalPuja";
// import ServicesPage from "./pages/ServicesPage";
// import FAQPage from "./pages/FAQPage";
// import AppDownloadPage from "./pages/AppDownloadPage";
// import SpiritualInsights from "./pages/SpiritualInsights";
// import AstrologyReports from "./pages/AstrologyReports";
// import ContactPage from "./pages/ContactPage";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         {/* Home Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Banner />
//               <FeaturedCategories />
//               <FeaturedProducts />
//               <CouponCard />
//               <Testimonials />
//             </>
//           }
//         />

//         {/* Other Pages */}
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/upcoming-festival-puja" element={<UpcomingFestivalPuja />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/faq" element={<FAQPage />} />
//         <Route path="/app-download" element={<AppDownloadPage />} />
//         <Route path="/spiritual-insights" element={<SpiritualInsights />} />
//         <Route path="/astrology-reports" element={<AstrologyReports />} />
//         <Route path="/contact" element={<ContactPage />} /> {/* This is important */}
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react'
import HomePages from './pages/HomePages'

function App() {
  return (
    <div>
      <HomePages/>
      
    </div>
  )
}

export default App
