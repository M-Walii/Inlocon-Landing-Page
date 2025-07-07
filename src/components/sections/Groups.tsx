"use client";

import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "../common/Button";
import Section from "../common/Section";
import { ArrowRight } from "lucide-react";

export default function GroupsSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  // Group data for the grid
  const groups = [
    {
      name: t("groups.group.1"),
      image: "/assets/images/jpeg/planners.jpeg",
    },
    {
      name: t("groups.group.2"),
      image: "/assets/images/jpeg/service-providers.jpeg",
    },
    {
      name: t("groups.group.3"),
      image: "/assets/images/jpeg/retailers.jpeg",
    },
    {
      name: t("groups.group.4"),
      image: "/assets/images/jpeg/developers.jpeg",
    },
  ];

  // Button hover effect for primary button
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  return (
    <Section
      id="groups"
      className={clsx(
        "relative w-full flex flex-col items-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        isDark ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="w-full max-w-[1240px] text-center">
        {/* Section heading */}
        <h2
          className={clsx(
            "pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          {t("groups.title")}
        </h2>
        <p
          className={clsx(
            "mt-4 mx-auto max-w-3xl text-[16px] sm:text-[18px] leading-[1.6]",
            isDark ? "text-gray-300" : "text-gray-600"
          )}
        >
          {t("groups.subtitle")}
        </p>

        {/* Groups grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {groups.map(({ name, image }) => (
            <div
              key={name}
              className="relative h-48 overflow-hidden rounded-lg group"
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className={clsx(
                  "absolute inset-0 transition-colors duration-300",
                  isDark ? "bg-black/50 group-hover:bg-black/60"
                         : "bg-black/25 group-hover:bg-black/30"
                )}
              />
              <span className="absolute inset-0 flex items-center justify-center px-2 text-center text-white text-lg font-semibold">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Call to action button (no links) */}
        <Button variant="primary" size="lg" className={clsx("mt-10", buttonHover)}>
          {t("groups.cta")}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Note below the button */}
        <p
          className={clsx(
            "mt-2 text-sm",
            "text-gray-500"
          )}
        >
          {t("groups.note")}
        </p>
      </div>
    </Section>
  );
}
