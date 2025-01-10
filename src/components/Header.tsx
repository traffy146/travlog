"use client";

import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Burger Menu - mobile & tablet only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block text-white bg-violet rounded-lg lg:hidden p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mx-auto lg:mx-0">
            <Image
              src="/images/site-logo/1.png"
              alt="Logo"
              width={35}
              height={35}
            />
            <span className="text-lg font-bold">Travlog</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/discover"
              className="text-gray-600 hover:text-gray-900"
            >
              Discover
            </Link>
            <Link href="/deals" className="text-gray-600 hover:text-gray-900">
              Special Deals
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons - hidden on mobile (<768px), visible on tablet and desktop */}
          <div className="hidden items-center md:flex space-x-4">
            {user ? (
              <Link
                href="/profile"
                className="px-4 py-2 text-black font-bold hover:text-gray-900"
              >
                Profile
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-black font-bold hover:text-gray-900"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="px-8 py-3 bg-violet text-white rounded-full"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/discover"
                className="text-gray-600 hover:text-gray-900"
              >
                Discover
              </Link>
              <Link href="/deals" className="text-gray-600 hover:text-gray-900">
                Special Deals
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 mt-4">
              {user ? (
                <Link
                  href="/profile"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 text-center"
                >
                  Profile
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 text-center"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 bg-violet text-white rounded-md hover:bg-violet/90 text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
