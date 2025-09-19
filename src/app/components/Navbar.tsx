"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  const updateUnderline = (element: HTMLElement | null) => {
    if (element && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Make underline 60% of the text width and center it
      const underlineWidth = elementRect.width * 0.6;
      const centerOffset = (elementRect.width - underlineWidth) / 2;

      setUnderlineStyle({
        width: underlineWidth,
        left: elementRect.left - navRect.left + centerOffset,
      });
    }
  };

  const handleMouseEnter = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setHoveredItem(href);
    updateUnderline(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    // Find active item and update underline to it
    const activeItem = navItems.find((item) => isActive(item.href));
    if (activeItem && navRef.current) {
      const activeElement = navRef.current.querySelector(
        `[href="${activeItem.href}"]`
      ) as HTMLElement;
      updateUnderline(activeElement);
    } else {
      setUnderlineStyle({ width: 0, left: 0 });
    }
  };

  // Update underline position when pathname changes
  useEffect(() => {
    if (navRef.current) {
      const activeItem = navItems.find((item) => isActive(item.href));
      if (activeItem) {
        const activeElement = navRef.current.querySelector(
          `[href="${activeItem.href}"]`
        ) as HTMLElement;
        updateUnderline(activeElement);
      } else {
        setUnderlineStyle({ width: 0, left: 0 });
      }
    }
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/somethphay_logo.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="font-black text-xl text-black">Someth Phay</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex">
            <div className="relative">
              <ul ref={navRef} className="flex items-center space-x-1 relative">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        relative px-4 py-3 pb-4 text-base font-bold transition-colors duration-200 rounded-md
                        ${
                          isActive(item.href)
                            ? "text-black"
                            : "text-gray-600 hover:text-black"
                        }
                      `}
                      onMouseEnter={(e) => handleMouseEnter(item.href, e)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Animated underline */}
              <div
                className="absolute h-1 bg-black transition-all duration-300 ease-out rounded-full"
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`,
                  bottom: "-8px", // More gap from text
                  opacity: underlineStyle.width > 0 ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <Link
              href="/contact"
              className="bg-black text-white px-6 py-2 rounded-2xl font-bold hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-bold transition-colors duration-200
                    ${
                      isActive(item.href)
                        ? "text-black bg-gray-100"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
