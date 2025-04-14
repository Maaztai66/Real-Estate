import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Popular Areas", href: "#popularareas" },
    { name: "Services", href: "#services" },
    { name: "Client", href: "#client" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-600">
          Real<span className="text-gray-800">Nest</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-700 hover:text-teal-600 font-medium transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">7
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 hover:text-teal-600 font-medium border-b"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
