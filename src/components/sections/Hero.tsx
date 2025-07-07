"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "../common/Button";
import Section from "../common/Section";
import { ArrowRight, Search } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const isDe = language === "de";

  // Utility class for button hover effect
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  // Responsive objectPosition logic
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let objectPosition = "40% center";
  if (windowWidth !== null) {
    if (windowWidth >= 1536) {
      objectPosition = "80% 25%";
    } else if (windowWidth >= 1024) {
      objectPosition = "80% 30%";
    }
  }

  return (
    <Section
      className={clsx(
        "relative w-full overflow-hidden min-h-[703px] flex items-center",
        "px-4 sm:px-6 lg:px-8",
        "bg-gradient-to-b from-[#0060A91A] to-[#0060A94D] dark:from-[#070A14] dark:to-[#070A1466]",
        "pb-12 sm:pb-16 md:pb-20"
      )}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/jpeg/hero.jpeg"
          alt={t("hero.backgroundAlt")}
          fill
          style={{
            objectFit: "cover",
            objectPosition,
          }}
          className="opacity-60 dark:opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-[#111827CC] dark:bg-black/60" />
      </div>

      {/* Main content container */}
      <div
        className={clsx(
          "relative z-10 mx-auto w-full text-center",
          "pt-24 sm:pt-28 md:pt-32",
          isDe ? "max-w-4xl" : "max-w-3xl"
        )}
      >
        {/* Headline */}
        <h1
          className={clsx(
            "font-bold text-white break-words mx-auto leading-tight",
            // Smaller text and more top padding on mobile, minimal on desktop
            isDe
              ? "text-[clamp(1.5rem,6vw,2.2rem)] sm:text-[clamp(2.2rem,7vw,3.2rem)] md:text-[clamp(2.8rem,6vw,4rem)]"
              : "text-[clamp(1.7rem,7vw,2.5rem)] sm:text-[clamp(2.5rem,8vw,3.5rem)] md:text-[clamp(3rem,6vw,4.5rem)]",
            "pt-12 sm:pt-16 md:pt-10"
          )}
        >
          {t("hero.headline1")}
          <br />
          <span className="text-[#B6FF2E]">{t("hero.headline2")}</span>
        </h1>
        {/* Description */}
        <p
          className={clsx(
            "mt-6 mx-auto leading-[1.6]",
            isDe
              ? "text-[14px] sm:text-[16px] max-w-[760px]"
              : "text-[16px] sm:text-[18px] max-w-[678px]",
            "text-white dark:text-gray-300"
          )}
        >
          {t("hero.description")}
        </p>
        {/* Search form (no links) */}
        <form
          className={clsx(
            "relative mt-10 mx-auto w-full max-w-[758px] h-[50px] flex items-center",
            "bg-white dark:bg-[#111728] rounded-lg shadow-md overflow-hidden"
          )}
        >
          <span className="absolute left-4">
            <Search className="w-6 h-6 text-black dark:text-white" />
          </span>
          <input
            type="text"
            placeholder={t("hero.searchPlaceholder")}
            aria-label={t("hero.searchPlaceholder")}
            className={clsx(
              "pl-12 pr-28 w-full h-full rounded-lg focus:outline-none",
              "text-[15px] bg-transparent",
              "text-black/70 placeholder-black/40 dark:text-white dark:placeholder-gray-400"
            )}
          />
          <Button
            type="submit"
            className={clsx(
              "absolute right-2 top-1/2 -translate-y-1/2",
              buttonHover
            )}
          >
            {t("hero.searchButton")}
          </Button>
        </form>
        {/* Action buttons (no links) */}
        <div className="mt-8 flex flex-row justify-center gap-4 w-full max-w-md mx-auto">
          <Button className={buttonHover}>
            {t("hero.cta")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className={clsx(
              "bg-white text-[#0060A9] border-[#0060A9] border",
              "transition-colors duration-200 hover:bg-gray-100 hover:text-[#0060A9]",
              "dark:bg-[#111828] dark:text-white dark:border-white dark:hover:bg-[#222f43] dark:hover:text-white"
            )}
          >
            {t("hero.demo")}
          </Button>
        </div>
        {/* Trusted by text */}
        <p className="mt-14 text-[16px] sm:text-[18px] font-medium text-white dark:text-gray-300">
          {t("hero.trusted")}
        </p>
        {/* Trusted logos */}
        <div className="mt-4 flex flex-wrap justify-center items-center gap-6">
          {[
            ["/assets/svg/db-logo.svg", t("hero.logos.db"), 32, 22],
            ["/assets/svg/knauf-logo.svg", t("hero.logos.knauf"), 39, 25],
            ["/assets/svg/schindler-logo.svg", t("hero.logos.schindler"), 41, 35],
            ["/assets/svg/siemens-logo.svg", t("hero.logos.siemens"), 124, 22],
            ["/assets/svg/strabag-logo.svg", t("hero.logos.strabag"), 100, 31],
          ].map(([src, alt, w, h]) => (
            <Image
              key={src as string}
              src={src as string}
              alt={alt as string}
              width={w as number}
              height={h as number}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
