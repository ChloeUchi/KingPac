import React, { useState } from "react";
import { Link } from "react-router-dom";
import KPIlogo from "../assets/KPI-logo.png"
import logo from "../assets/logo.gif"

export default function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="shadow sticky top-0 z-50 bg-[#0B1D51] text-[#e1e1e1]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-around items-center">
        <Link to="/" className="text-xl font-bold"><img src={logo} className="w-[5em] h-auto drop-shadow-[0_0_45px_rgba(255,255,255,0.8)]"/></Link>
        
        <div className="flex space-x-16 items-center font-extrabold">
          {/* About menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
			<Link to="/about">About</Link><br/>
            {isAboutOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#27548A] border shadow rounded p-2 z-50">
                <a href="#boards" className="block px-4 py-2 hover:bg-[#416187]">Boards</a>
                <a href="#awards" className="block px-4 py-2 hover:bg-[#416187]">Awards</a>
              </div>
            )}
          </div>

          {/* Other main menu items */}
          <Link to="/hero-brand" className="hover:text-blue-600">HERO Brand</Link>
          <Link to="/sustainability" className="hover:text-blue-600">Sustainability</Link>
          <Link to="/investor-relations" className="hover:text-blue-600">Investor Relations</Link>

          {/* Contact Us menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsContactOpen(true)}
            onMouseLeave={() => setIsContactOpen(false)}
          >
            <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
            {isContactOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#27548A] border shadow rounded p-2 z-50">
                <a href="#audit" className="block px-4 py-2 hover:bg-[#416187]">Audit</a>
                <a href="#career" className="block px-4 py-2 hover:bg-[#416187]">Career</a>
                <a href="#privacy-policy" className="block px-4 py-2 hover:bg-[#416187]">Privacy Policy</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
