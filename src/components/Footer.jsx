import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <h4 className="font-bold mb-2">Main Menu</h4>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/herobrand">HeroBrand</Link><br/>
          <Link to="/sustainability">Sustainability</Link><br/>
          <Link to="/investor-relations">CInvestor Relations</Link><br/>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div>
          <h4 className="font-bold mb-2">Our Business</h4>
          <p>Details about company operations...</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Sustainable Development</h4>
          <p>Environmental & social goals...</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Investor Relations</h4>
          <p>IR updates and reports...</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: 012-345-6789</p>
          <button onClick={scrollToTop} className="mt-4 bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Top</button>
        </div>
      </div>
    </footer>
  );
}