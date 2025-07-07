"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import { ReactElement } from "react";
import {
  Search,
  Filter,
  Bell,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Button } from "../common/Button";
import Section from "../common/Section";

export default function HowItWorksSection(): ReactElement {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Steps data for the process
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: t("how.title1"),
      desc: t("how.desc1"),
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: t("how.title2"),
      desc: t("how.desc2"),
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: t("how.title3"),
      desc: t("how.desc3"),
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: t("how.title4"),
      desc: t("how.desc4"),
    },
  ];

  // Button hover effect for primary button (same as Hero section)
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  return (
    <Section
      id="how-it-works"
      className={clsx(
        "relative w-full flex flex-col items-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        !isDark ? "bg-white" : "bg-gray-900"
      )}
    >
      {/* Section heading and subheading */}
      <div className="w-full max-w-3xl text-center">
        <h2
          className={clsx(
            "pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight",
            !isDark ? "text-gray-900" : "text-white"
          )}
        >
          {t("how.heading")}
        </h2>
        <p
          className={clsx(
            "mt-4 text-[16px] sm:text-[18px] leading-[1.6] max-w-xl mx-auto",
            !isDark ? "text-gray-600" : "text-gray-300"
          )}
        >
          {t("how.subheading")}
        </p>
      </div>

      {/* Steps grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
          >
            <div
              className={clsx(
                "p-4 rounded-full flex items-center justify-center",
                !isDark ? "bg-[#E1F0FF]" : "bg-white/10"
              )}
            >
              <div
                className={clsx(
                  !isDark ? "text-[#0060A9]" : "text-white"
                )}
              >
                {s.icon}
              </div>
            </div>
            <h3
              className={clsx(
                "mt-4 font-semibold text-lg",
                !isDark ? "text-gray-900" : "text-white"
              )}
            >
              {s.title}
            </h3>
            <p
              className={clsx(
                "mt-2 text-base leading-[1.5] max-w-[200px]",
                !isDark ? "text-gray-600" : "text-gray-400"
              )}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Call to action button (no links) */}
      <Button variant="primary" size="lg" className={clsx("mt-16 shadow", buttonHover)}>
        {t("how.cta")}
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </Section>
  );
}
