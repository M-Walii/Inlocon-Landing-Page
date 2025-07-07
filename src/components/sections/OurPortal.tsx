"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Globe,
  Building2,
  Database,
} from "lucide-react";
import { Button } from "../common/Button";
import Section from "../common/Section";

interface Portal {
  titleKey: string;
  descriptionKey: string;
  countKey: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
}

interface Stat {
  value: string;
  label: string;
}

export default function OurPortalSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  // Carousel base data
  const base: Portal[] = [
    {
      titleKey: "ourPortal.portals.1.title",
      descriptionKey: "ourPortal.portals.1.description",
      countKey: "ourPortal.portals.1.count",
      Icon: Globe,
      image: "/assets/images/jpeg/govt.jpeg",
    },
    {
      titleKey: "ourPortal.portals.2.title",
      descriptionKey: "ourPortal.portals.2.description",
      countKey: "ourPortal.portals.2.count",
      Icon: Building2,
      image: "/assets/images/jpeg/corporate.jpeg",
    },
    {
      titleKey: "ourPortal.portals.3.title",
      descriptionKey: "ourPortal.portals.3.description",
      countKey: "ourPortal.portals.3.count",
      Icon: Database,
      image: "/assets/images/jpeg/industry.jpeg",
    },
  ];

  const [cards, setCards] = useState<Portal[]>(base);
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (offset === 0 && animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [offset, animating]);

  // Carousel next/prev handlers
  const handleNext = () => {
    if (animating) return;
    const rotated = [...cards.slice(1), cards[0]];
    setCards(rotated);
    setAnimating(true);
    setOffset(100);
    requestAnimationFrame(() => setOffset(0));
  };

  const handlePrev = () => {
    if (animating) return;
    const rotated = [cards[cards.length - 1], ...cards.slice(0, cards.length - 1)];
    setCards(rotated);
    setAnimating(true);
    setOffset(-100);
    requestAnimationFrame(() => setOffset(0));
  };

  // Portal stats
  const stats: Stat[] = [
    { value: t("ourPortal.stats.1.value"), label: t("ourPortal.stats.1.label") },
    { value: t("ourPortal.stats.2.value"), label: t("ourPortal.stats.2.label") },
    { value: t("ourPortal.stats.3.value"), label: t("ourPortal.stats.3.label") },
  ];

  // Button hover effect for all buttons
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  return (
    <Section
      id="our-portals"
      className={clsx(
        "relative w-full flex flex-col items-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        !isDark ? "bg-[#f5f9e8]" : "bg-[#272f3c]"
      )}
    >
      <div className="w-full max-w-[1240px] text-center mx-auto">
        {/* Section heading */}
        <h2
          className={clsx(
            "pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight",
            !isDark ? "text-gray-700" : "text-white"
          )}
        >
          {t("ourPortal.title")}
        </h2>
        <p
          className={clsx(
            "mt-4 mx-auto max-w-3xl text-[16px] sm:text-[18px] leading-[1.6]",
            !isDark ? "text-gray-600" : "text-white/90"
          )}
        >
          {t("ourPortal.subtitle")}
        </p>
      </div>
      {/* Carousel with navigation */}
      <div className="relative mt-12 w-full max-w-[1240px] mx-auto flex items-center">
        <Button
          onClick={handlePrev}
          variant="primary"
          size="icon"
          className={clsx("rounded-full md:ml-4", buttonHover)}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div
          className="flex flex-1 justify-center md:justify-between md:px-4"
          style={{
            transform: `translateX(${offset}%)`,
            transition: animating ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {cards.map((p, i) => (
            <div
              key={i}
              className={clsx(
                "w-full max-w-lg flex-shrink-0 md:max-w-none md:basis-1/3 px-2",
                {
                  "hidden md:block": i > 0,
                }
              )}
            >
              <div className="h-64 rounded-t-2xl overflow-hidden relative">
                <img
                  src={p.image}
                  alt={t(p.titleKey)}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#11182799] dark:bg-black/60" />
                <div className="absolute top-3 right-3 bg-[#0060A9] text-white text-sm font-semibold px-2 py-1 rounded">
                  {t(p.countKey)}
                </div>
                <div className="absolute bottom-3 left-3 bg-[#FFFFFF26] p-3 rounded-lg">
                  <p.Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div
                className={clsx(
                  "rounded-b-2xl p-6",
                  !isDark ? "bg-white" : "bg-[#000000]"
                )}
              >
                <h3
                  className={clsx(
                    "text-lg font-semibold",
                    !isDark ? "text-gray-900" : "text-white"
                  )}
                >
                  {t(p.titleKey)}
                </h3>
                <p
                  className={clsx(
                    "mt-2 text-sm leading-relaxed",
                    !isDark ? "text-gray-700" : "text-gray-300"
                  )}
                >
                  {t(p.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={handleNext}
          variant="primary"
          size="icon"
          className={clsx("rounded-full md:mr-4", buttonHover)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      {/* Portal stats */}
      <div className="mt-16 w-full max-w-4xl px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 md:divide-x divide-gray-200">
          {/* First stat */}
          <div className="py-8 text-center">
            <dd className={clsx("text-3xl sm:text-4xl font-bold", !isDark ? "text-gray-900" : "text-white")}>{stats[0].value}</dd>
            <dt className={clsx("mt-2 text-base", !isDark ? "text-gray-700" : "text-white/80")}>{stats[0].label}</dt>
          </div>
          {/* Second stat */}
          <div className="py-8 text-center">
            <dd className={clsx("text-3xl sm:text-4xl font-bold", !isDark ? "text-gray-900" : "text-white")}>{stats[1].value}</dd>
            <dt className={clsx("mt-2 text-base", !isDark ? "text-gray-700" : "text-white/80")}>{stats[1].label}</dt>
          </div>
          {/* Third stat: on mobile, span two columns and center below; on desktop, normal */}
          <div className="col-span-2 md:col-span-1 py-8 text-center md:col-span-1">
            <dd className={clsx("text-3xl sm:text-4xl font-bold", !isDark ? "text-gray-900" : "text-white")}>{stats[2].value}</dd>
            <dt className={clsx("mt-2 text-base", !isDark ? "text-gray-700" : "text-white/80")}>{stats[2].label}</dt>
          </div>
        </div>
      </div>
      {/* Call to action button (no links) */}
      <Button variant="primary" size="lg" className={clsx("mt-12 w-auto mx-auto", buttonHover)}>
        {t("ourPortal.cta")}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Section>
  );
}
