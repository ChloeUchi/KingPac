import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import HeroBrand from "./components/HeroBrand";
import Sustainability from "./components/Sustainability";
import InvestorRelations from "./components/InvestorRelations";
import ContactUs from "./components/ContactUs";
import Awards from "./components/Awards";
import Boards from "./components/Boards";
import Audit from "./components/Audit";
import Career from "./components/Career";
import PrivacyPolicy from "./components/PrivacyPolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hero-brand" element={<HeroBrand />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="investor-relations" element={<InvestorRelations />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="awards" element={<Awards />} />
        <Route path="boards" element={<Boards />} />
        <Route path="audit" element={<Audit />} />
        <Route path="career" element={<Career />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}
