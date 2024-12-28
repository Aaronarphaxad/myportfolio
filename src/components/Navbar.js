"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => {
    if (!mounted) return false;
    return pathname === path;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  // Prevent flash of incorrect content during hydration
  if (!mounted) {
    return (
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 h-16 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">
                <span className="text-gray-900">Aaron</span>
                <span className="text-blue-600">Omale</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 h-16 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" onClick={handleLinkClick} className="flex items-center space-x-2">
              <span className="text-xl font-bold">
                <span className="text-gray-900">Aaron</span>
                <span className="text-blue-600">Omale</span>
              </span>
              <span className="hidden sm:block text-sm text-gray-500 font-mono">
                &lt;/&gt;
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-gray-800 hover:text-blue-600 transition-colors duration-300
                  ${isActive(link.href) ? "text-blue-600 font-medium" : ""}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full 
                  after:bg-blue-600 after:transition-all after:duration-300
                  ${isActive(link.href) ? "after:w-full" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-3 py-2 rounded-md transition-all duration-300
                  ${
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-600 font-medium pl-4"
                      : "text-gray-800 hover:bg-blue-50 hover:text-blue-600 hover:pl-4"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
