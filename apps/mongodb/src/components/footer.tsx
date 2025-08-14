import Image from "next/image";

import LocaleSelector from "@/components/locale-selector";
import dict from "@/lib/dict.json";
import type { Lang } from "@/lib/types";

export function Footer({
  lang,
}: {
  lang: Lang;
}) {
  const t = dict[lang];
  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Logo and Language Selector */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="https://zlbmkgaohavraaed.public.blob.vercel-storage.com/logo.svg"
                alt="MongoDB"
                width={120}
                height={40}
                className="mb-6"
              />
              <div className="flex items-center space-x-2 text-sm">
                <LocaleSelector lang={lang} />
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 font-semibold text-white">About</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Security Information
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Trust Center
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Connect with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 font-semibold text-white">Support</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Customer Portal
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Atlas Status
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>

          {/* Deployment Options */}
          <div>
            <h3 className="mb-6 font-semibold text-white">
              Deployment Options
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  MongoDB Atlas
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Enterprise Advanced
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Community Edition
                </a>
              </li>
            </ul>
          </div>

          {/* Data Basics */}
          <div>
            <h3 className="mb-6 font-semibold text-white">Data Basics</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Vector Databases
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  NoSQL Databases
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  Document Databases
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  RAG Database
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  ACID Transactions
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  MERN Stack
                </a>
              </li>
              <li>
                <a href="/#" className="transition-colors hover:text-white">
                  MEAN Stack
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-gray-700 border-t pt-8">
          <p className="text-gray-400 text-sm">© 2025 MongoDB, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
