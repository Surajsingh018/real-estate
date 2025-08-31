import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Propy Cons</h3>
            <p className="text-sm">
              Benefit from our full support for your sale.
            </p>
            <p className="text-xs mt-2">
              Hello! Propy Cons Real Estate LLC is registered in Dubai, United Arab Emirates (1018186) with address DAMAC Mall, DAMAC Hills, Dubai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">About PROPY CONS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/join" className="hover:text-white">Join our community</Link></li>
              <li><Link to="/partner" className="hover:text-white">Partner with Propy Cons</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/knowledge-hub" className="hover:text-white">Knowledge Hub</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white">Terms & conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy statement</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookie policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p>&copy; 2025 PROPYCONS. All rights reserved.</p>

          {/* Contact */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a href="tel:+971800779726" className="hover:text-white">
              +971 800 779726
            </a>
            <a href="mailto:discovery@propycons.com" className="hover:text-white">
              discovery@propycons.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}