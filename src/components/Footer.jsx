import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 lg:px-40 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-teal-400 mb-4">Real<span className="text-white">Nest</span></h1>
          <p className="text-sm">
            Making your dream home come true. Find, buy, or rent with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#properties" className="hover:text-teal-400">Properties</a></li>
            <li><a href="#popularareas" className="hover:text-teal-400">Popular Areas</a></li>
            <li><a href="#services" className="hover:text-teal-400">Services</a></li>
            <li><a href="#client" className="hover:text-teal-400">Clients</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-sm mb-2">📍 123 Dream Street, Los Santos, CA</p>
          <p className="text-sm mb-2">📞 +1 (234) 567-8901</p>
          <p className="text-sm mb-4">✉️ info@realnest.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 text-teal-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Line  //border-t is used to add a line at the top of the footer */}
      <div className="text-center text-sm border-t border-gray-700 pt-4"> 
        © {new Date().getFullYear()} RealNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
