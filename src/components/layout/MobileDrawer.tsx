"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";

// Navigation links for mobile menu
const navLinks = [
  { key: "header.menu.howItWorks", href: "#how-it-works" },
  { key: "header.menu.benefits", href: "#benefits" },
  { key: "header.menu.dataSources", href: "#data-sources" },
  { key: "header.menu.features", href: "#features" },
];

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Main MobileDrawer component
export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const isDark = theme === "dark";
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-[#1A202C] lg:hidden">
      <div className="h-full flex flex-col p-6">
        {/* Logo and close button */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src={isDark ? "/assets/images/png/logo-dark.png" : "/assets/images/png/logo-light.png"}
              alt={t("header.logoAlt")}
              width={140}
              height={32}
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-md"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              className="text-base font-medium text-gray-800 dark:text-gray-200"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Language and theme controls */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="w-full flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-left"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-800 dark:text-gray-200">{language.toUpperCase()}</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {langDropdownOpen && (
              <div className="mt-1 w-full rounded-lg bg-gray-50 dark:bg-gray-700 shadow-lg">
                {["en", "de"].filter(l => l !== language).map(lng => (
                  <button
                    key={lng}
                    onClick={() => {
                      changeLanguage(lng as "en" | "de");
                      setLangDropdownOpen(false);
                    }}
                    className="w-full text-left p-3 text-gray-800 dark:text-gray-200"
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-500" />
            )}
            <span className="text-gray-800 dark:text-gray-200">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
} 