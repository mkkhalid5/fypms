"use client";

import { useState } from "react";
import Link from "next/link";

// 1. Navigation links for the center menu
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// 2. Dropdown options under the "Get started" button
const GET_STARTED_OPTIONS = [
  {
    label: "Register University",
    description: "Create a workspace as Uni Admin",
    href: "/register/university",
  },
  {
    label: "Student Sign Up",
    description: "Join your university & form a team",
    href: "/register/student",
  },
];

export default function Navbar() {
  // Tracks which navigation link is currently active (for the blue underline)
  const [activeLink, setActiveLink] = useState("Home");

  // Controls whether the mobile hamburger menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Controls whether the "Get started" dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={() => {
            setActiveLink("Home");
            setIsMenuOpen(false);
          }}
          className="flex items-center gap-2.5"
        >
          {/* Navy rounded square icon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f1f38]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="12" width="4" height="8" rx="1.5" fill="#94a3b8" />
              <rect x="10" y="5" width="4" height="15" rx="1.5" fill="#ffffff" />
              <rect x="16" y="9" width="4" height="11" rx="1.5" fill="#cbd5e1" />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight text-[#0f1f38]">
            FYPMS
          </span>
        </Link>

        {/* Center: Desktop Navigation Links (hidden on mobile, visible on md+ screens) */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive = activeLink === item.label;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
                className={`relative flex h-16 items-center text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-[#18569c]"
                    : "text-slate-600 hover:text-[#0f1f38]"
                }`}
              >
                {item.label}

                {/* Blue bottom border shown only on the active link */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#18569c]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop Login & Get Started Dropdown (hidden on mobile) */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-[15px] font-semibold text-[#0f1f38] hover:text-[#18569c]"
          >
            Log in
          </Link>

          <div className="relative">
            {/* Invisible full-screen overlay to close dropdown when clicking outside */}
            {isDropdownOpen && (
              <div
                onClick={() => setIsDropdownOpen(false)}
                className="fixed inset-0 z-40"
              />
            )}

            {/* Get Started Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative z-50 inline-flex items-center gap-2 rounded-xl bg-[#18569c] px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-[#134680]"
            >
              <span>Get started</span>
              {/* Downward chevron arrow */}
              <svg
                className={`h-4 w-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                {GET_STARTED_OPTIONS.map((option) => (
                  <Link
                    key={option.href}
                    href={option.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block rounded-xl px-3.5 py-2.5 hover:bg-slate-50"
                  >
                    <p className="text-sm font-semibold text-[#0f1f38]">
                      {option.label}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {option.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right (Mobile Only): Hamburger Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {isMenuOpen ? (
            /* Close (X) Icon */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger (3 lines) Icon */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile & Tablet Menu Drawer (visible only when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-md md:hidden">
          
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeLink === item.label;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.label);
                    setIsMenuOpen(false);
                  }}
                  className={`rounded-xl px-3.5 py-2.5 text-[15px] font-medium ${
                    isActive
                      ? "bg-[#18569c]/10 text-[#18569c]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-center text-[15px] font-semibold text-[#0f1f38] hover:bg-slate-50"
            >
              Log in
            </Link>

            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#18569c] px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-[#134680]"
            >
              <span>Get started</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Mobile Get Started Options */}
            {isDropdownOpen && (
              <div className="space-y-1.5 rounded-xl bg-slate-50 p-2">
                {GET_STARTED_OPTIONS.map((option) => (
                  <Link
                    key={option.href}
                    href={option.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2 hover:bg-white"
                  >
                    <p className="text-sm font-semibold text-[#0f1f38]">
                      {option.label}
                    </p>
                    <p className="text-xs text-slate-500">
                      {option.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}