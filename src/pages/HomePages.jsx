
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






// import React from "react";
// import { Routes, Route, Outlet, useLocation } from "react-router-dom";

// // Components / Pages (import as you already have)
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Banner from "../components/Banner";
// import FeaturedCategories from "../components/FeaturedCategories";
// import FeaturedProducts from "../components/FeaturedProducts";
// import Testimonials from "../components/Testimonials";
// import CouponCard from "../components/CouponCard";
// import EnrollNow from "../components/EnrollNow";
// import PaymentPage from "./PaymentPage";
// import AboutPage from "./AboutPage";
// import UpcomingFestivalPuja from "./UpcomingFestivalPuja";
// import ServicesPage from "./ServicesPage";
// import FAQPage from "./FAQPage";
// import AppDownloadPage from "./AppDownloadPage";
// import SpiritualInsights from "./SpiritualInsights";
// import AstrologyReports from "./AstrologyReports";
// import ContactPage from "./ContactPage";
// import CartPage from "./CartPage";
// import AstrologyCourses from "./AstrologyCourses";
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";
// import ForgotPassword from "./ForgotPassword";
// import CoursedetailsPage from "./CoursedetailsPage"
// import LifePanorama from "./LifePanorama";
// import MoreCourses from "./MoreCourses"
// import CategoryGemsStones from "./CategoryGemsStones";

// function Layout() {
//   const location = useLocation();
//   const hideFor = ["/login", "/register", "/forgot-password", "/enrollnow", "/paymentpage","/CoursedetailsPage","/MoreCourses",""];
//   const hide = hideFor.includes(location.pathname);

//   return (
//     <>
//       {!hide && <Navbar />}
//       <main>
//         <Outlet />
//       </main>
//       {!hide && <Footer />}
//     </>
//   );
// }

// function HomeContent() {
//   return (
//     <>
//       <Banner />
//       <FeaturedCategories />
//       <AboutPage />
//       <FeaturedProducts />
//       <AstrologyReports />
//       <UpcomingFestivalPuja />
//       <ServicesPage />
//       <Testimonials />
//       <FAQPage />
//       <AppDownloadPage />
//       <SpiritualInsights />
//       <CouponCard />
//     </>
//   );
// }

// export default function HomePages() {
//   return (
//     <Routes>
//       {/* All routes that should share the layout */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<HomeContent />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/upcoming-festival-puja" element={<UpcomingFestivalPuja />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/faq" element={<FAQPage />} />
//         <Route path="/app-download" element={<AppDownloadPage />} />
//         <Route path="/spiritual-insights" element={<SpiritualInsights />} />
//         <Route path="/astrology-reports" element={<AstrologyReports />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/astrology-courses" element={<AstrologyCourses />} />
//         <Route path="veda-store/gemsstones" element={<CategoryGemsStones />} />

//         {/* Enrollment and Payment */}
//         <Route path="/enrollnow" element={<EnrollNow />} />
//         <Route path="/paymentpage" element={<PaymentPage />} />
//          <Route path="/CoursedetailsPage" element={<CoursedetailsPage />} />
//          <Route path="/MoreCourses" element={<MoreCourses />} />
//            <Route path="/LifePanorama" element={<MoreCourses />} />

//         {/* Auth pages (hidden layout already) */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Route>

//       {/* Optional: fallback */}
//       <Route path="*" element={<div>Page not found</div>} />
//     </Routes>
//   );
// }









import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

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
import CoursedetailsPage from "./CoursedetailsPage";
import LifePanorama from "./LifePanorama";
import MoreCourses from "./MoreCourses";
import CategoryGemsStones from "./CategoryGemsStones";
import PalmistryCourse from "./PalmistryCourse";
import NumerologyCourse from "./NumerologyCourse";
import VastuCourse from "./VastuCourse";
import SanskritCourse from "./SanskritCourse";
import DailyPujaCourse from "./DailyPujaCourse";
import Muhurtas from "./Muhurtas";
import UpanishadsCourse from "./UpanishadsCourse";
import VedasCourse from "./VedasCourse";
import PuranaCourse from "./PuranaCourse";
import MathematicsCourse from "./MathematicsCourse";
import MantraCourse from "./MantraCourse";
import SanskritReadingCourse from "./SanskritReadingCourse";
import SacredTextsCourse from "./SacredTextsCourse";
import VedicScience from "./VedicScience";
import VedicPhilosophy from "./VedicPhilosophy";
import EnrollNows from "../components/EnrollNows";

function Layout() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/register", "/forgot-password","/enrollnow","/enrollnows", "/PaymentPage","/CoursedetailsPage","/MoreCourses","/contact","/astrology-courses"];
  const hideLayout = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
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
      <Route element={<Layout />}>
        <Route path="" element={<HomeContent />} />
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
        <Route path="/veda-store/gemsstones" element={<CategoryGemsStones />} />
        <Route path="/enrollnow" element={<EnrollNow />} />
        <Route path="/enrollnows" element={<EnrollNows />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/CoursedetailsPage" element={<CoursedetailsPage />} />
        <Route path="/MoreCourses" element={<MoreCourses />} />
        <Route path="/LifePanorama" element={<LifePanorama />} />
      </Route>

      {/* Auth Pages - no layout */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
       <Route path="/palmistry" element={<PalmistryCourse />} />
       <Route path="/numerology" element={<NumerologyCourse />} />
       <Route path="/vastu" element={<VastuCourse />} />
       <Route path="/sanskritcourse" element={<SanskritCourse />} /> 
        <Route path="/dailypuja" element={<DailyPujaCourse />} />
       <Route path="/muhurtas" element={<Muhurtas />} />
     <Route path="/upanishads" element={<UpanishadsCourse />} />
       <Route path="/vedas" element={<VedasCourse />} />
         <Route path="/Purana" element={<PuranaCourse />} />
       <Route path="/mathematics" element={<MathematicsCourse />} />
       <Route path="/mantra" element={<MantraCourse />} />
        <Route path="/sanskritread" element={<SanskritReadingCourse />} /> 
     <Route path="/sacredtexts" element={<SacredTextsCourse />} /> 
           <Route path="/vedicscience" element={<VedicScience />} />
       <Route path="/vedicphilosophy" element={<VedicPhilosophy />} />  

      <Route path="*" element={<div className="p-10 text-center text-red-600 font-semibold">Page Not Found</div>} />
    </Routes>
  );
}
