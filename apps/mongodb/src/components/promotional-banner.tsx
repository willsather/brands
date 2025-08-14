"use client";

import { useEffect, useState } from "react";

export function PromotionalBanner({
  text,
}: { text: "mongo-8.0" | "voyage" | "conference" | "mcp-server" }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variations = {
    conference: {
      text: "Join us Sept 17 at .local NYC! Use code WEB50 to save 50% on top of Early Bird tickets.",
      cta: "MongoDB Event",
    },
    "mcp-server": {
      text: "Explore Now: MongoDB MCP Server for AI-Powered Development (Public Preview)",
      cta: "Announcement",
    },
    "mongo-8.0": {
      text: "MongoDB 8.0: Experience unmatched speed and performance.",
      cta: "New",
    },
    voyage: {
      text: "Voyage AI joins MongoDB to power more accurate and trustworthy AI applications on Atlas.",
      cta: "Announcement",
    },
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex items-center gap-5 bg-[#00684A] px-4 py-3 font-mono text-white text-xs transition-all duration-500 ease-in-out"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="rounded-3xl bg-[#B1FF05] px-2 py-0.5 text-[#001E2B] uppercase">
        {variations[text]?.cta}
      </div>
      <span className="font-medium">{variations[text]?.text}</span>
    </div>
  );
}
