"use client";

import { MapPin, MessageCircle, Plus, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  title: string;
  links: {
    category: string;
    href: string;
    items: string[];
  }[];
}

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileNavbar({
  isOpen,
  onClose,
  navItems,
}: MobileNavbarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#f8f5f2]">
      <div className="p-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-medium text-2xl text-gray-800">Menu</h2>
          <button type="button" onClick={onClose}>
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <nav>
          <ul className="space-y-6">
            {navItems.map(({ title, links }) => (
              <li key={title} className="border-gray-200 border-b pb-2">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCategory(title)}
                    className="flex w-full items-center justify-between text-left text-gray-800"
                  >
                    {title}
                    <Plus className="size-5 text-gray-800" />
                  </button>
                </div>

                {expandedCategories.includes(title) && (
                  <div className="mt-4 space-y-6 pl-4">
                    {links.map(({ category, href, items }) => (
                      <div key={category}>
                        <h3 className="mb-2 font-medium">
                          <Link
                            href={href}
                            onClick={onClose}
                            className="text-gray-800"
                            prefetch
                          >
                            {category}
                          </Link>
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item}>
                              <Link
                                href={href}
                                onClick={onClose}
                                className="text-gray-700 text-sm"
                                prefetch
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-20 space-y-6">
          <Link
            href="/store-locator"
            className="flex items-center gap-3 text-gray-800"
            prefetch
          >
            <MapPin className="h-5 w-5" />
            <span>Find a store</span>
          </Link>
          <Link
            href="/account"
            className="flex items-center gap-3 text-gray-800"
            prefetch
          >
            <User className="h-5 w-5" />
            <span>Account</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-3 text-gray-800"
            prefetch
          >
            <MessageCircle className="h-5 w-5" />
            <span>Contact us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
