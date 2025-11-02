
import React from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";


import PaymentPage from "./PaymentPage";
import AboutPage from "./AboutPage";

import FAQPage from "./FAQPage";

import ContactPage from "./ContactPage";

import AstrologyCourses from "./AstrologyCourses";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPassword from "./ForgotPassword";
import CoursedetailsPage from "./CoursedetailsPage";

import MoreCourses from "./MoreCourses";

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
import EnrollNow from "../components/EnrollNow";
import EnrollNows from "../components/EnrollNows";

function LayoutWrapper() {
  const location = useLocation();
  const hideNavbarPaths = [
    "/login", "/register", "/forgot-password",
    "/enrollnow", "/enrollnows",
    "/paymentpage", "/CoursedetailsPage", "/MoreCourses",
    "/contact", "/astrology-courses"
  ];

  const hideLayout = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <div>{/* You can add Navbar here if needed */}</div>}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!hideLayout && <div>{/* Footer can go here if needed */}</div>}
    </>
  );
}

export default function HomePages() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        {/* Redirect default route to AstrologyCourses */}
        <Route path="/" element={<Navigate to="/astrology-courses" replace />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/upcoming-festival-puja" element={<UpcomingFestivalPuja />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        <Route path="/faq" element={<FAQPage />} />
        {/* <Route path="/app-download" element={<AppDownloadPage />} />
        <Route path="/spiritual-insights" element={<SpiritualInsights />} /> */}
        {/* <Route path="/astrology-reports" element={<AstrologyReports />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/astrology-courses" element={<AstrologyCourses />} />
        {/* <Route path="/veda-store/gemsstones" element={<CategoryGemsStones />} /> */}
        <Route path="/enrollnow" element={<EnrollNow />} />
        <Route path="/enrollnows" element={<EnrollNows />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/CoursedetailsPage" element={<CoursedetailsPage />} />
        <Route path="/MoreCourses" element={<MoreCourses />} />
        {/* <Route path="/LifePanorama" element={<LifePanorama />} /> */}

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Other Courses */}
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

        {/* 404 */}
        <Route path="*" element={<div className="p-10 text-center text-red-600 font-semibold">Page Not Found</div>} />
      </Route>
    </Routes>
  );
}
