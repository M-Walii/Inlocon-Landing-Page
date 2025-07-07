"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import {
  Network,
  BarChart3,
  CalendarDays,
  Settings,
  MessageCircle,
  Award,
  Check,
} from "lucide-react";
import Section from "../common/Section";

export default function ExtraFeaturesSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Features data for the grid
  const features = [
    {
      title: t("extraFeatures.features.1.name"),
      description: t("extraFeatures.features.1.description"),
      Icon: Network,
      linkText: t("extraFeatures.features.1.link"),
    },
    {
      title: t("extraFeatures.features.2.name"),
      description: t("extraFeatures.features.2.description"),
      Icon: BarChart3,
      linkText: t("extraFeatures.features.2.link"),
    },
    {
      title: t("extraFeatures.features.3.name"),
      description: t("extraFeatures.features.3.description"),
      Icon: MessageCircle,
      linkText: t("extraFeatures.features.3.link"),
    },
    {
      title: t("extraFeatures.features.4.name"),
      description: t("extraFeatures.features.4.description"),
      Icon: CalendarDays,
      linkText: t("extraFeatures.features.4.link"),
    },
    {
      title: t("extraFeatures.features.5.name"),
      description: t("extraFeatures.features.5.description"),
      Icon: Award,
      linkText: t("extraFeatures.features.5.link"),
    },
    {
      title: t("extraFeatures.features.6.name"),
      description: t("extraFeatures.features.6.description"),
      Icon: Settings,
      linkText: t("extraFeatures.features.6.link"),
    },
  ];

  // Button hover effect for any future buttons
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  return (
    <Section
      id="extra-features"
      className={clsx(
        "relative w-full px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        isDark ? "bg-[#0f2034]" : "bg-[#e6f1f7]"
      )}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* Section heading */}
          <h2
            className={clsx(
              "pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight",
              isDark ? "text-white" : "text-slate"
            )}
          >
            {t("extraFeatures.title")}
          </h2>
          <p
            className={clsx(
              "mt-4 text-[16px] sm:text-[18px] leading-[1.6] max-w-xl mx-auto",
              isDark ? "text-white/80" : "text-gray-600"
            )}
          >
            {t("extraFeatures.subtitle")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ title, description, Icon, linkText }) => (
            <div
              key={title}
              className={clsx(
                "rounded-lg p-6 h-full text-left",
                "flex flex-col md:flex-row md:items-start",
                isDark ? "bg-[#111828]" : "bg-white"
              )}
            >
              {/* Icon square */}
              <div
                className={clsx(
                  "w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0",
                  "mb-4 md:mb-0 md:mr-6",
                  isDark ? "bg-white/10" : "bg-slate-100"
                )}
              >
                <Icon
                  className={clsx(
                    "w-6 h-6",
                    isDark ? "text-white" : "text-[#0060A9]"
                  )}
                />
              </div>

              <div>
                {/* Title */}
                <h3
                  className={clsx(
                    "text-lg font-semibold",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className={clsx(
                    "mt-2 text-sm leading-relaxed",
                    isDark ? "text-white/80" : "text-gray-600"
                  )}
                >
                  {description}
                </p>

                {/* Feature label (was link) */}
                <div className="mt-4">
                  <div
                    className={clsx(
                      "inline-flex items-center text-sm font-medium cursor-pointer transition-colors",
                      isDark
                        ? "text-white hover:text-white/90"
                        : "text-[#0060A9] hover:text-blue-700"
                    )}
                  >
                    <div className={clsx(
                      "w-4 h-4 mr-2 rounded-full flex items-center justify-center",
                      isDark ? "bg-white/10" : "bg-[#0060A9]"
                    )}>
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="ml-1">{linkText}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
