
// import { HashRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Banner from "../components/Banner";
// import FeaturedCategories from "../components/FeaturedCategories";
// import FeaturedProducts from "../components/FeaturedProducts";
// import Testimonials from "../components/Testimonials";
// import CouponCard from "../components/CouponCard";
// import EnrollNow from "../components/EnrollNow";         

// // Pages
// import AboutPage from "./AboutPage";
// import UpcomingFestivalPuja from "./UpcomingFestivalPuja";
// import ServicesPage from "./ServicesPage";
// import FAQPage from "./FAQPage";
// import AppDownloadPage from "./AppDownloadPage";
// import SpiritualInsights from "./SpiritualInsights";
// import AstrologyReports from "./AstrologyReports";
// import ContactPage from "./ContactPage";
// import CartPage from "./CartPage";
// // import AccountPage from "./AccountPage";
// import AstrologyCourses from "./AstrologyCourses"; 
// // Auth Pages
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";
// import ForgotPassword from "./ForgotPassword";
// import PaymentPage from "./PaymentPage";
// PaymentPage

// export default function HomePages() {
//   return (
//     <>
     
//  <Navbar />
//       <Routes>
//          {/* Auth Routes without Navbar/Footer */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
        

//         <Route
//           path="/"
//           element={
//             <>
//               <Banner />
//               <FeaturedCategories />
//               <AboutPage />
//               <FeaturedProducts />
//               <AstrologyReports />
//               <UpcomingFestivalPuja />
//               <ServicesPage />
//               <Testimonials />
//               <FAQPage />
//               <AppDownloadPage />
//               <SpiritualInsights />
//               <CouponCard />
//             </>
//           }
//         />

//         {/* Other Routes */}
//          <Route path="/" element={<HomePages />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/upcoming-festival-puja" element={<UpcomingFestivalPuja />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/faq" element={<FAQPage />} />
//         <Route path="/app-download" element={<AppDownloadPage />} />
//         <Route path="/spiritual-insights" element={<SpiritualInsights />} />
//         <Route path="/astrology-reports" element={<AstrologyReports />} />

//         <Route path="/contact" element={<ContactPage />} />
//          <Route path="/cart" element={<CartPage />} />


//                  {/* ✅ New Routes */}
//         <Route path="/astrology-courses" element={<AstrologyCourses />} />
         
//         <Route path="/enrollnow" element={<EnrollNow />} />
//         <Route path="/paymentpage" element={<PaymentPage />} />
        
        

//           </Routes>
//      <Footer />
//     </>
//   );
// }






import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

// Components / Pages (import as you already have)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import CouponCard from "../components/CouponCard";
import EnrollNow from "../components/EnrollNow";
import PaymentPage from "./PaymentPage";
import AboutPage from "./AboutPage";
import UpcomingFestivalPuja from "./UpcomingFestivalPuja";
import ServicesPage from "./ServicesPage";
import FAQPage from "./FAQPage";
import AppDownloadPage from "./AppDownloadPage";
import SpiritualInsights from "./SpiritualInsights";
import AstrologyReports from "./AstrologyReports";
import ContactPage from "./ContactPage";
import CartPage from "./CartPage";
import AstrologyCourses from "./AstrologyCourses";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPassword from "./ForgotPassword";

function Layout() {
  const location = useLocation();
  const hideFor = ["/login", "/register", "/forgot-password", "/enrollnow", "/paymentpage"];
  const hide = hideFor.includes(location.pathname);

  return (
    <>
      {!hide && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hide && <Footer />}
    </>
  );
}

function HomeContent() {
  return (
    <>
      <Banner />
      <FeaturedCategories />
      <AboutPage />
      <FeaturedProducts />
      <AstrologyReports />
      <UpcomingFestivalPuja />
      <ServicesPage />
      <Testimonials />
      <FAQPage />
      <AppDownloadPage />
      <SpiritualInsights />
      <CouponCard />
    </>
  );
}

export default function HomePages() {
  return (
    <Routes>
      {/* All routes that should share the layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upcoming-festival-puja" element={<UpcomingFestivalPuja />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/app-download" element={<AppDownloadPage />} />
        <Route path="/spiritual-insights" element={<SpiritualInsights />} />
        <Route path="/astrology-reports" element={<AstrologyReports />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/astrology-courses" element={<AstrologyCourses />} />

        {/* Enrollment and Payment */}
        <Route path="/enrollnow" element={<EnrollNow />} />
        <Route path="/paymentpage" element={<PaymentPage />} />

        {/* Auth pages (hidden layout already) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Optional: fallback */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}
