import {
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl border-[#f8f8f6] border-t px-4 pt-8 pb-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Customer Service */}
          <div>
            <h3 className="mb-6 font-light text-gray-800 text-sm tracking-wider">
              CUSTOMER SERVICE
            </h3>
            <p className="mb-3 font-light text-gray-600 text-sm">
              Monday to Friday 9am - 9pm EST, Saturday 10am - 9pm EST :
            </p>
            <Link
              href="tel:800-441-4488"
              className="mb-4 block font-light text-gray-800 text-sm hover:underline"
            >
              800-441-4488
            </Link>
            <Link
              href="/contact"
              className="font-light text-gray-800 text-sm hover:underline"
            >
              Email us
            </Link>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <h3 className="mb-6 font-light text-gray-800 text-sm tracking-wider">
              NEWSLETTER
            </h3>
            <p className="mb-6 font-light text-gray-600 text-sm">
              Receive our newsletter and discover our stories, collections, and
              surprises.
            </p>
            <button
              type="button"
              className="inline-block border border-gray-300 px-10 py-3 font-light text-gray-800 text-sm transition-colors hover:border-gray-800"
            >
              SUBSCRIBE
            </button>
          </div>

          {/* Social Media */}
          <div className="text-right">
            <h3 className="mb-6 font-light text-gray-800 text-sm tracking-wider">
              FOLLOW US
            </h3>
            <div className="flex justify-end space-x-6">
              <Link
                href="https://www.youtube.com/hermes"
                aria-label="YouTube"
                className="text-gray-600 hover:text-gray-900"
              >
                <Youtube size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/hermes"
                aria-label="Facebook"
                className="text-gray-600 hover:text-gray-900"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/hermes"
                aria-label="Instagram"
                className="text-gray-600 hover:text-gray-900"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://twitter.com/hermes"
                aria-label="Twitter"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-gray-200 border-t bg-[#f8f8f6]">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
            <button
              type="button"
              className="flex items-center font-light text-gray-800 text-sm"
            >
              SHIP TO : UNITED STATES
              <ChevronRight size={16} className="ml-1" />
            </button>
            <p className="font-light text-gray-600 text-sm">
              © Hermès 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
