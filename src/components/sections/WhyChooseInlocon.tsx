"use client";

import { ReactElement } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import {
  Clock,
  Target,
  TrendingUp,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Section from "../common/Section";

export default function WhyChooseInlocon(): ReactElement {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Features to display in the grid
  const features = [
    {
      icon: Clock,
      title: t("whychooseInlocon.features.1.title"),
      description: t("whychooseInlocon.features.1.description"),
    },
    {
      icon: Target,
      title: t("whychooseInlocon.features.2.title"),
      description: t("whychooseInlocon.features.2.description"),
    },
    {
      icon: TrendingUp,
      title: t("whychooseInlocon.features.3.title"),
      description: t("whychooseInlocon.features.3.description"),
    },
    {
      icon: Shield,
      title: t("whychooseInlocon.features.4.title"),
      description: t("whychooseInlocon.features.4.description"),
    },
    {
      icon: Users,
      title: t("whychooseInlocon.features.5.title"),
      description: t("whychooseInlocon.features.5.description"),
    },
    {
      icon: Zap,
      title: t("whychooseInlocon.features.6.title"),
      description: t("whychooseInlocon.features.6.description"),
    },
  ];

  return (
    <Section
      id="why-choose-inlocon"
      className={clsx(
        "relative w-full flex flex-col items-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        !isDark ? "bg-[#E6F0F8]" : "bg-[#0f2034]"
      )}
    >
      {/* Section heading */}
      <div className="w-full max-w-3xl text-center">
        <h2
          className={clsx(
            "pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight",
            !isDark ? "text-gray-900" : "text-white"
          )}
        >
          {t("whychooseInlocon.title")}
        </h2>
        <p
          className={clsx(
            "mt-4 mx-auto max-w-[600px] text-[16px] sm:text-[18px] leading-[1.6]",
            !isDark ? "text-gray-600" : "text-gray-300"
          )}
        >
          {t("whychooseInlocon.subtitle")}
        </p>
      </div>

      {/* Features grid */}
      <div className="mt-16 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className={clsx(
              "flex flex-col items-start p-6 rounded-lg transition-shadow",
              "shadow-sm hover:shadow-lg",
              !isDark ? "bg-white" : "bg-gray-800"
            )}
          >
            <div
              className={clsx(
                "p-3 rounded-lg",
                !isDark ? "bg-[#E6F0F8]" : "bg-white/10"
              )}
            >
              <Icon
                className={clsx(
                  "w-6 h-6",
                  !isDark ? "text-[#0060A9]" : "text-white"
                )}
              />
            </div>
            <h3
              className={clsx(
                "mt-5 text-lg font-semibold",
                !isDark ? "text-gray-900" : "text-white"
              )}
            >
              {title}
            </h3>
            <p
              className={clsx(
                "mt-2 text-sm leading-relaxed",
                !isDark ? "text-gray-600" : "text-gray-400"
              )}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
