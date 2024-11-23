"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { url } from "inspector";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const navigationLinks = [
  { text: "About Us", url: "/about-us" },
  {
    text: "Services",
    url: "/services",
    submenu: [
      { text: "International Clients", url: "/services/international-clients" },
      { text: "Bridging Finance", url: "/services/bridging-finance" },
      { text: "Care Home Finance", url: "/services/care-home-finance" },
      { text: "Buy-to-Let Mortgages", url: "/services/buy-to-let-mortgages" },
      { text: "Development Funding", url: "/services/development-funding" },
      { text: "Property Sourcing", url: "/services/property-sourcing" },
      { text: "Commercial Mortgages", url: "/services/commercial-mortgages" },
    ],
  },
  {
    text: "Resources",
    url: "#",
    submenu: [
      // { text: "Calculator", url: "/resources/calculator" },
      { text: "Privacy Policy", url: "/resources/privacy-policy" },
    ],
  },
  { text: "Contact Us", url: "/contact-us" },
  { text: "Get a Quote", url: "/get-a-quote" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

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
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="font-thin">
            Private Property Finance
          </Link>
        </div>
        <div className="lg:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    <li key={link.text} className="relative group">
                      <Link
                        href={link.url}
                        className="hover:underline block px-4 py-2"
                      >
                        {link.text}
                      </Link>
                      {link.submenu && (
                        <ul className="pl-4">
                          {link.submenu.map((sublink) => (
                            <li key={sublink.text}>
                              <div
                                onClick={() => router.push(sublink.url)}
                                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                              >
                                {sublink.text}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden lg:flex md:space-x-4 ">
          <ul className="flex space-x-4">
            {navigationLinks.map((link) => (
              <li key={link.text} className="relative group">
                <Link
                  href={link.url!}
                  className="hover:underline block px-4 py-2"
                >
                  {link.text}
                </Link>
                {link.submenu && (
                  <ul className="absolute left-0 overflow-hidden mt-2 w-56 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.text}>
                        <div
                          onClick={() => router.push(sublink.url)}
                          className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          {sublink.text}
                        </div>
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
