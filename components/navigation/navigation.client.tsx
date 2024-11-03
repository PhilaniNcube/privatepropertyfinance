"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";


const navigationLinks = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "/about-us" },
  {
    text: "Services",
    url : "/services",
    submenu: [
      { text: "International Clients", url: "/services/international-clients" },
      { text: "Bridging Finance", url: "/services/bridging-finance" },
      { text: "Care Home Finance", url: "/services/care-home-finance" },
      { text: "Buy-to-Let Mortgages", url: "/services/buy-to-let-mortgages" },
      { text: "Development Funding", url: "/services/development-funding" },
      // { text: "Property Sourcing", url: "/services/property-sourcing" },
    ],
  },
  {
    text: "Resources",
    url: "/resources",
    submenu: [
      { text: "Calculator", url: "/resources/calculator" },
      { text: "Knowledge Area", url: "/resources/knowledge-area" },
    ],
  },
  { text: "Contact Us", url: "/contact-us" },
  { text: "Get a Quote", url: "/get-a-quote" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-colors duration-300 z-50 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-lg font-thin">Private Property Finance</div>
        <Button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </Button>
        <nav
          className={`md:flex md:space-x-4 ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            {navigationLinks.map((link) => (
              <li key={link.text} className="relative group">
                <Link href={link.url} className="hover:underline block px-4 py-2">
                  {link.text}
                </Link>
                {link.submenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.text}>
                        <a
                          href={sublink.url}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {sublink.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
