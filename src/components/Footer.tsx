"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [dropdowns, setDropdowns] = useState({
    company: false,
    contact: false,
    meet: false,
  });

  const toggleDropdown = (section: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/site-logo/1.png"
                  alt="Travlog Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <span className="text-lg font-bold">Travlog</span>
            </div>

            <p className="text-slate-700 text-md leading-relaxed ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-white bg-violet rounded-full p-1 transition-colors"
                >
                  {/* Facebook Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>

                <Link
                  href="#"
                  className="text-white bg-violet rounded-full p-1 transition-colors"
                >
                  {/* Twitter Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>

                <Link
                  href="#"
                  className="text-white bg-violet rounded-full p-1 transition-colors"
                >
                  {/* Instagram Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Section */}
            <div className="space-y-4">
              <div
                className="flex justify-between items-center cursor-pointer lg:cursor-default"
                onClick={() => toggleDropdown("company")}
              >
                <h3 className="font-bold text-xl">Company</h3>
                <span className="lg:hidden w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transform transition-transform duration-200 ${
                      dropdowns.company ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div
                className={`space-y-4 ${
                  dropdowns.company ? "block" : "hidden"
                } lg:block`}
              >
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <div
                className="flex justify-between items-center cursor-pointer lg:cursor-default"
                onClick={() => toggleDropdown("contact")}
              >
                <h3 className="font-bold text-xl">Contact</h3>
                <span className="lg:hidden w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transform transition-transform duration-200 ${
                      dropdowns.contact ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div
                className={`space-y-4 ${
                  dropdowns.contact ? "block" : "hidden"
                } lg:block`}
              >
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      Why Travlog?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      FAQ&apos;s
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      Let&apos;s go
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Meet Us Section */}
            <div className="space-y-4">
              <div
                className="flex justify-between items-center cursor-pointer lg:cursor-default"
                onClick={() => toggleDropdown("meet")}
              >
                <h3 className="font-bold text-xl">Meet Us</h3>
                <span className="lg:hidden w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transform transition-transform duration-200 ${
                      dropdowns.meet ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div
                className={`space-y-4 ${
                  dropdowns.meet ? "block" : "hidden"
                } lg:block`}
              >
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      +00 92 1234 56789
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      info@travlog.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-700 hover:text-pink">
                      205. R Street, New York
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
