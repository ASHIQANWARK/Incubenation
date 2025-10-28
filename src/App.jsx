import React from "react";
import { HashRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Center from "./pages/Centers";
import Online from "./pages/Online"
import Campus from "./pages/Campuss";
import Business from "./pages/Business";
import Blog from "./components/Blog";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsandConditions";
import RefundPolicy from "./pages/Refundpolicy";
import AdvisorsPage from "./pages/AdvisorsPage";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Site Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/center" element={<Center/>} />
          <Route path="/online" element={<Online />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/business" element={<Business />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/advisors" element={<AdvisorsPage />} />
        </Route>
         
        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
