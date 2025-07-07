"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Sun,
  Moon,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import clsx from 'clsx'
import { MobileDrawer } from './MobileDrawer';

// Navigation links for the header (now using header.menu keys)
const navLinks = [
  { key: "header.menu.howItWorks", href: "#how-it-works" },
  { key: "header.menu.benefits", href: "#why-choose-inlocon" },
  { key: "header.menu.features", href: "#extra-features" },
  { key: "header.menu.dataSources", href: "#groups" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const isDark = theme === "dark";
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileOpen);
    document.body.classList.toggle('mobile-menu-open', mobileOpen);
    return () => {
      document.body.classList.remove('overflow-hidden', 'mobile-menu-open');
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!langDropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langDropdownOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        mobileOpen 
          ? (isDark ? 'bg-[#1A202C]' : 'bg-white') 
          : (isDark ? "bg-[#1A202C]" : "bg-white/95 backdrop-blur-sm")
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo links to landing page */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isDark ? "/assets/images/png/logo-dark.png" : "/assets/images/png/logo-light.png"}
              alt={t("header.logoAlt")}
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Desktop navigation and controls */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            {/* Navigation links */}
            {navLinks.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            {/* Language selector dropdown */}
            <div className="relative ml-4" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={clsx(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors",
                  isDark ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-100"
                )}
              >
                <Globe className={clsx("w-4 h-4", isDark ? "text-gray-400" : "text-gray-600")} />
                <span className={clsx("text-sm font-medium", isDark ? "text-white" : "text-gray-800")}> 
                  {language.toUpperCase()}
                </span>
                <ChevronDown className={clsx("w-4 h-4 transition-transform", langDropdownOpen && "rotate-180", isDark ? "text-gray-400" : "text-gray-500")} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10">
                  {['en', 'de'].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => {
                        changeLanguage(lng as 'en' | 'de');
                        setLangDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-gray-400 hover:text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile navigation drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
