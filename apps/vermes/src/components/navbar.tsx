"use client";

import {
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "./logo";

const navigationItems = [
  {
    title: "WOMEN",
    links: [
      {
        category: "Ready-to-wear",
        href: "/category/ready-to-wear",
        items: [
          "Coats & Outerwear",
          "Jackets",
          "Dresses",
          "Skirts & Shorts",
          "Pants",
          "Knitwear",
          "Tops & Shirts",
        ],
      },
      {
        category: "Accessories",
        href: "/category/jewelry",
        items: ["Hats", "Gloves", "Scarves & Ties", "Belts", "Fashion Jewelry"],
      },
      {
        category: "Bags & Clutches",
        href: "/category/leather",
        items: ["Bags", "Clutches", "Small Leather Goods"],
      },
      {
        category: "Shoes",
        href: "/category/womens-shoes",
        items: ["Boots & Ankle Boots", "Sneakers", "Sandals", "Pumps & Heels"],
      },
    ],
  },
  {
    title: "MEN",
    links: [
      {
        category: "Ready-to-wear",
        href: "/category/ready-to-wear",
        items: [
          "Coats & Outerwear",
          "Jackets",
          "Suits",
          "Pants",
          "Knitwear",
          "Shirts",
          "T-shirts & Polos",
        ],
      },
      {
        category: "Accessories",
        href: "/category/jewelry",
        items: ["Hats", "Gloves", "Scarves & Ties", "Belts", "Fashion Jewelry"],
      },
      {
        category: "Bags & Luggage",
        href: "/category/leather",
        items: ["Bags", "Briefcases", "Small Leather Goods", "Travel"],
      },
      {
        category: "Shoes",
        href: "/category/mens-shoes",
        items: ["Boots", "Sneakers", "Loafers", "Sandals"],
      },
    ],
  },
  {
    title: "HOME, OUTDOOR AND EQUESTRIAN",
    links: [
      {
        category: "Home",
        href: "/category/tableware",
        items: [
          "Furniture",
          "Lighting",
          "Tableware",
          "Decorative Objects",
          "Textiles",
        ],
      },
      {
        category: "Outdoor",
        href: "/category/tableware",
        items: ["Garden Furniture", "Beach", "Sports"],
      },
      {
        category: "Equestrian",
        href: "/category/tableware",
        items: [
          "Riding Accessories",
          "Saddles",
          "Horse Equipment",
          "Stable Accessories",
        ],
      },
    ],
  },
  {
    title: "JEWELRY AND WATCHES",
    links: [
      {
        category: "Jewelry",
        href: "/category/jewelry",
        items: ["Necklaces", "Bracelets", "Rings", "Earrings", "Brooches"],
      },
      {
        category: "Watches",
        href: "/category/jewelry",
        items: [
          "Women's Watches",
          "Men's Watches",
          "Pocket Watches",
          "Watch Straps",
        ],
      },
    ],
  },
  {
    title: "FRAGRANCES AND MAKE-UP",
    links: [
      {
        category: "Fragrances",
        href: "/category/jewelry",
        items: [
          "Women's Fragrances",
          "Men's Fragrances",
          "Unisex Fragrances",
          "Bath & Body",
        ],
      },
      {
        category: "Make-up",
        href: "/category/jewelry",
        items: ["Lipstick", "Face", "Eyes", "Nails"],
      },
    ],
  },
  {
    title: "GIFTS AND PETIT H",
    links: [
      {
        category: "Gifts",
        href: "/category/jewelry",
        items: [
          "Gifts for Her",
          "Gifts for Him",
          "Gifts for the Home",
          "Corporate Gifts",
        ],
      },
      {
        category: "Petit H",
        href: "/category/jewelry",
        items: ["Objects", "Accessories", "Jewelry", "Limited Editions"],
      },
    ],
  },
  {
    title: "SPECIAL EDITIONS AND SERVICES",
    links: [
      {
        category: "Special Editions",
        href: "#about",
        items: ["Limited Collections", "Collaborations", "Exclusive Pieces"],
      },
      {
        category: "Services",
        href: "#services",
        items: [
          "Repairs",
          "Personalization",
          "Gift Wrapping",
          "Delivery Services",
        ],
      },
    ],
  },
  {
    title: "ABOUT HERMÈS",
    links: [
      {
        category: "The House of Hermès",
        href: "#house",
        items: ["History", "Craftsmanship", "Sustainability", "Press"],
      },
      {
        category: "Contact",
        href: "#contact",
        items: ["Find a Store", "Customer Service", "Careers", "FAQ"],
      },
    ],
  },
];

export default function Navbar() {
  const router = useRouter();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Prevent body scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (title: string) => {
    if (!isMobile) {
      setActiveDropdown(title);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    // Remove focus from the input after clearing
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearchFocused(false);
    }
  };

  const toggleMobileSearch = () => {
    if (isMobile) {
      setIsSearchFocused(!isSearchFocused);
      if (!isSearchFocused && searchInputRef.current) {
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileCategory = (title: string) => {
    setMobileExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const completeSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur();
      setIsSearchFocused(false);
    }

    const query = searchValue;

    setSearchValue("");

    router.push(`/search?q=${query}`);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 ${
        isHovered || activeDropdown ? "bg-white" : "bg-white/70"
      } backdrop-blur-sm transition-colors duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          type="button"
          className={`md:hidden ${isSearchFocused ? "hidden" : "block"}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6 text-gray-800" />
        </button>

        {/* Search - Desktop version */}
        <div
          ref={searchContainerRef}
          className={`${isMobile ? (isSearchFocused ? "flex-1" : "w-auto") : "flex items-center"} transition-all duration-300`}
        >
          <button
            type="button"
            className={`md:hidden ${isSearchFocused ? "hidden" : "block"}`}
            onClick={toggleMobileSearch}
            aria-label="Search"
          >
            <Search className="h-6 w-6 text-gray-800" />
          </button>

          {/* Search Input - Shown on desktop or when focused on mobile */}
          <div
            className={`relative ${isMobile ? (isSearchFocused ? "flex items-center" : "hidden") : "block"}`}
          >
            {isSearchFocused && isMobile && (
              <button
                type="button"
                className="mr-3"
                onClick={() => setIsSearchFocused(false)}
                aria-label="Back"
              >
                <Search className="h-6 w-6 text-gray-800" />
              </button>
            )}
            <div className="relative flex-1">
              <Search
                className={`-translate-y-1/2 absolute top-1/2 left-0 h-5 w-5 transform text-gray-700 ${isMobile && isSearchFocused ? "hidden" : "block"}`}
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && completeSearch()}
                className={`${isMobile && isSearchFocused ? "pl-0" : "pl-8"} w-full border-gray-800 border-b bg-transparent py-2 pr-8 text-gray-800 text-sm placeholder:text-gray-800 focus:outline-none focus:placeholder:text-transparent`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => {
                  if (!isMobile) {
                    setIsSearchFocused(false);
                  }
                }}
              />
              {(isSearchFocused || searchValue.length > 0) && (
                <button
                  type="button"
                  className="-translate-y-1/2 absolute top-1/2 right-0 transform text-gray-700"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Logo - Center on desktop, hidden when search is focused on mobile */}
        <div
          className={`flex flex-5 justify-center ${isMobile && isSearchFocused ? "hidden" : "block"}`}
        >
          <Link href="/" className="block">
            <div className="flex flex-col items-center">
              <Logo />
            </div>
          </Link>
        </div>

        {/* Account and Cart - Hidden when search is focused on mobile */}
        <div
          className={`flex flex-1 items-center space-x-6 ${isMobile && isSearchFocused ? "hidden" : "block"}`}
        >
          <Link
            href="#account"
            className="flex items-center text-gray-800 text-sm"
          >
            <User className="h-5 w-5 md:mr-1" />
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link
            href="#cart"
            className="flex items-center text-gray-800 text-sm"
          >
            <ShoppingBag className="h-5 w-5 md:mr-1" />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Main navigation - Hidden on mobile */}
      <nav
        className={`relative border-b ${isHovered || activeDropdown ? "border-gray-200" : "border-gray-200/70"} hidden md:block`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center">
          {navigationItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.title)}
            >
              <button
                type="button"
                className={`relative px-4 py-5 font-medium text-gray-800 text-xs tracking-wider transition-all duration-200 ${
                  activeDropdown === item.title
                    ? "after:absolute after:right-4 after:bottom-3 after:left-4 after:h-px after:bg-black"
                    : ""
                } hover:after:absolute hover:after:right-4 hover:after:bottom-3 hover:after:left-4 hover:after:h-px hover:after:bg-black`}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>

        {/* Dropdown menus */}
        {navigationItems.map((item) => (
          <div
            key={`dropdown-${item.title}`}
            className={`absolute right-0 left-0 bg-white px-8 py-6 shadow-lg transition-all duration-300 ${
              activeDropdown === item.title
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            style={{ top: "100%" }}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8">
              {item.links.map((section) => (
                <div key={section.category}>
                  <Link
                    href={section.href}
                    className="mb-3 font-medium text-gray-900 text-sm"
                  >
                    {section.category}
                  </Link>
                  <ul className="space-y-2">
                    {section.items.map((subItem) => (
                      <li key={subItem}>
                        <Link
                          href={section.href}
                          className="text-gray-600 text-xs hover:text-black hover:underline"
                          onClick={() => handleMouseLeave()}
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Mobile Menu - Full screen overlay */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className={`fixed inset-0 transform bg-background transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col`}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between px-6 py-6">
              <h2 className="font-light text-2xl text-gray-800">Menu</h2>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            {/* Main navigation categories - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <ul>
                {navigationItems.map((item) => (
                  <li
                    key={item.title}
                    className="border-gray-200 border-t last:border-b"
                  >
                    <div className="px-6">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-5 text-left font-light text-gray-800 text-lg"
                        onClick={() => toggleMobileCategory(item.title)}
                        aria-expanded={mobileExpandedCategories[item.title]}
                      >
                        <span>{item.title}</span>
                        {mobileExpandedCategories[item.title] ? (
                          <Minus className="h-5 w-5 text-gray-800 transition-transform duration-200" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-800 transition-transform duration-200" />
                        )}
                      </button>
                    </div>

                    {/* Dropdown content - hidden by default */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileExpandedCategories[item.title]
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5">
                        {item.links.map((section) => (
                          <div key={section.category} className="mb-6">
                            <h3 className="mb-3 font-medium text-base text-gray-900">
                              {section.category}
                            </h3>
                            <ul className="space-y-3">
                              {section.items.map((subItem) => (
                                <li key={subItem}>
                                  <Link
                                    href="#"
                                    className="text-gray-700 text-sm hover:text-black"
                                  >
                                    {subItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom utility links */}
            <div className="border-gray-200 border-t bg-background">
              <ul>
                <li>
                  <Link
                    href="#stores"
                    className="flex items-center px-6 py-4 font-light text-base text-gray-800"
                  >
                    <MapPin className="mr-4 h-5 w-5" />
                    Find a store
                  </Link>
                </li>
                <li>
                  <Link
                    href="#account"
                    className="flex items-center px-6 py-4 font-light text-base text-gray-800"
                  >
                    <User className="mr-4 h-5 w-5" />
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="flex items-center px-6 py-4 font-light text-base text-gray-800"
                  >
                    <MessageCircle className="mr-4 h-5 w-5" />
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
