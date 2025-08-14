import { Search } from "lucide-react";
import Link from "next/link";

import { GetStartedButton } from "@/components/get-started-button";
import { Logo } from "@/components/logo";
import dict from "@/lib/dict.json";
import type { Lang } from "@/lib/types";
import { Button } from "@brands/ui/components/button";

export default function Navbar({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const navigationItems = t.navbar.items;

  return (
    <nav className="border-gray-200 border-b bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo className="fill-[#001E2B]" />
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.route}
                className="flex items-center font-medium text-gray-900 text-sm transition-colors duration-200 hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button className="p-2 text-gray-600 transition-colors hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Button>

            {/* Support Link */}
            <Link
              href="/support"
              className="font-medium text-gray-900 text-sm transition-colors duration-200 hover:text-gray-600"
            >
              {t.navbar.support}
            </Link>

            {/* Sign In Link */}
            <Link
              href="/signin"
              className="font-medium text-gray-900 text-sm transition-colors duration-200 hover:text-gray-600"
            >
              {t.navbar.signIn}
            </Link>

            <GetStartedButton lang={lang} />
          </div>
        </div>
      </div>
    </nav>
  );
}
