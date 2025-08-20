


import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import CouponCard from "../components/CouponCard";

// Pages
import AboutPage from "./AboutPage";
import UpcomingFestivalPuja from "./UpcomingFestivalPuja";
import ServicesPage from "./ServicesPage";
import FAQPage from "./FAQPage";
import AppDownloadPage from "./AppDownloadPage";
import SpiritualInsights from "./SpiritualInsights";
import AstrologyReports from "./AstrologyReports";
import ContactPage from "./ContactPage";
import CartPage from "./CartPage";
import AccountPage from "./AccountPage";

export default function HomePages() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
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
          }
        />

        {/* Other Routes */}
         <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upcoming-festival-puja" element={<UpcomingFestivalPuja />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/app-download" element={<AppDownloadPage />} />
        <Route path="/spiritual-insights" element={<SpiritualInsights />} />
        <Route path="/astrology-reports" element={<AstrologyReports />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/account" element={<AccountPage />} />
      </Routes>

      <Footer />
    </>
  );
}
