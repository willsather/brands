"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type FooterSection = {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
};

const footerSections: FooterSection[] = [
  {
    title: "SERVICES",
    links: [
      { text: "Contact us", href: "/services/contact" },
      { text: "FAQ", href: "/services/faq" },
      { text: "Find a store", href: "/services/stores" },
      {
        text: "Stores selling beauty products",
        href: "/services/beauty-stores",
      },
      {
        text: "Stores selling Apple Watch Hermès",
        href: "/services/apple-watch",
      },
      { text: "Gifting", href: "/services/gifting" },
      { text: "Made to measure", href: "/services/made-to-measure" },
      { text: "Maintenance and repair", href: "/services/repair" },
    ],
  },
  {
    title: "ORDERS",
    links: [
      { text: "Payment", href: "/orders/payment" },
      { text: "Shipping", href: "/orders/shipping" },
      { text: "Collect in store", href: "/orders/collect" },
      { text: "Track orders", href: "/orders/track" },
      { text: "Returns and exchanges", href: "/orders/returns" },
    ],
  },
  {
    title: "LA MAISON HERMÈS",
    links: [
      { text: "Sustainable development", href: "/maison/sustainability" },
      { text: "The Hermès Foundation", href: "/maison/foundation" },
      { text: "Join Hermès", href: "/maison/careers" },
      { text: "Finance & Governance", href: "/maison/finance" },
      { text: "Our partner brands", href: "/maison/partners" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { text: "Terms and conditions", href: "/legal/terms" },
      { text: "Privacy & cookies", href: "/legal/privacy" },
      { text: "Binding Corporate Rules (BCRs)", href: "/legal/bcrs" },
      {
        text: "California Transparency in Supply Chain Act",
        href: "/legal/california",
      },
      { text: "Transparency in coverage", href: "/legal/transparency" },
      {
        text: "Do Not Sell/Share My Personal Information",
        href: "/legal/do-not-sell",
      },
      { text: "Legal issues", href: "/legal/issues" },
      { text: "Accessibility", href: "/legal/accessibility" },
    ],
  },
];

export default function CollapsibleFooter() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    SERVICES: false,
    ORDERS: false,
    "LA MAISON HERMÈS": false,
    LEGAL: false,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [allSectionsOpen, setAllSectionsOpen] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSection = (title: string) => {
    if (isMobile) {
      // On mobile, toggle individual sections
      setOpenSections((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    } else {
      // On desktop, toggle all sections together
      const newState = !allSectionsOpen;
      setAllSectionsOpen(newState);

      const updatedSections = {} as { [key: string]: boolean };
      for (const section of footerSections) {
        updatedSections[section.title] = newState;
      }

      setOpenSections(updatedSections);
    }
  };

  return (
    <section className="border-gray-200 border-t bg-white pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div
              key={section.title}
              className="border-gray-200 border-b pb-4 md:border-b-0 md:pb-0"
            >
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between py-2 text-left font-light text-gray-800 text-sm tracking-wider"
              >
                {section.title}
                <span className="text-gray-500">
                  {(
                    isMobile
                      ? openSections[section.title]
                      : allSectionsOpen
                  ) ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </button>
              <div
                className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${
                  (isMobile ? openSections[section.title] : allSectionsOpen)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {section.links.map((link) => (
                  <div key={link.text}>
                    <Link
                      href={link.href}
                      className="font-light text-gray-600 text-sm hover:text-black"
                    >
                      {link.text}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
