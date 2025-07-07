"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Section from "../common/Section";

export default function Testimonials() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Testimonials data
  const base = [
    {
      name: t("testimonials.testimonials.1.name"),
      designation: t("testimonials.testimonials.1.designation"),
      image: "/assets/images/png/esther.png",
      text: t("testimonials.testimonials.1.text"),
      rating: 5,
    },
    {
      name: t("testimonials.testimonials.2.name"),
      designation: t("testimonials.testimonials.2.designation"),
      image: "/assets/images/png/john.png",
      text: t("testimonials.testimonials.2.text"),
      rating: 5,
    },
    {
      name: t("testimonials.testimonials.3.name"),
      designation: t("testimonials.testimonials.3.designation"),
      image: "/assets/images/png/jane.png",
      text: t("testimonials.testimonials.3.text"),
      rating: 5,
    },
  ];

  const items = [...base, ...base, ...base];
  const containerRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const GAP = 24;
  const [mobileIndex, setMobileIndex] = useState(base.length);

  // Auto-scroll for mobile
  useEffect(() => {
    const isMobile = () => window.innerWidth < 640;
    if (!isMobile()) return;
    const iv = setInterval(() => {
      setMobileIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(iv);
  }, [items.length]);

  // Set initial scroll position for desktop
  useEffect(() => {
    const c = containerRef.current!;
    const card = c.querySelector<HTMLDivElement>(".snap-start")!;
    const step = card.clientWidth + GAP;
    c.scrollLeft = step * base.length;
  }, [base.length]);

  // Scroll one card left or right
  const scrollOne = useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      const c = containerRef.current!;
      const card = c.querySelector<HTMLDivElement>(".snap-start")!;
      const step = card.clientWidth + GAP;
      const { scrollWidth, clientWidth } = c;

      animating.current = true;
      c.scrollBy({ left: dir * step, behavior: "smooth" });

      setTimeout(() => {
        const sl = c.scrollLeft;
        if (dir === 1 && sl + 1 >= scrollWidth - clientWidth) {
          c.scrollLeft = sl - base.length * step;
        }
        if (dir === -1 && sl <= 1) {
          c.scrollLeft = sl + base.length * step;
        }
        animating.current = false;
      }, 300);
    },
    [base.length]
  );

  // Auto-scroll for desktop
  useEffect(() => {
    const iv = setInterval(() => scrollOne(-1), 5000);
    return () => clearInterval(iv);
  }, [scrollOne]);

  // Button hover effect for navigation buttons
  const navButtonHover =
    "transition-colors duration-200 border-2 border-white/30 hover:border-white/60 bg-transparent hover:bg-white/10";

  return (
    <Section
      className={clsx(
        "relative w-full py-16 lg:py-20",
        isDark ? "bg-[#121212]" : "bg-[#0060A9]"
      )}
    >
      <div className="mx-auto max-w-[1540px] px-6 md:px-12 xl:px-40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-[440px] flex-shrink-0 flex flex-col gap-6">
            <Image
              src="/assets/images/png/Testimonials.png"
              width={58}
              height={58}
              alt="Testimonials"
            />
            <span
              className={clsx(
                "uppercase tracking-wide font-light text-[16px] leading-[25px]",
                isDark ? "text-gray-400" : "text-white/80"
              )}
            >
              {t("testimonials.subtitle")}
            </span>
            <h2
              className={clsx(
                "uppercase font-bold text-white",
                "text-[32px] sm:text-[40px] leading-[38px] sm:leading-[48px]"
              )}
            >
              {t("testimonials.title")}
            </h2>
            <p
              className={clsx(
                "font-light text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]",
                isDark ? "text-gray-400" : "text-white/90"
              )}
            >
              {t("testimonials.description")}
            </p>
          </div>
          <div className="flex-1 max-w-[900px] ml-auto">
            <div className="overflow-hidden px-4 md:px-0">
              {/* Desktop carousel */}
              <div
                ref={containerRef}
                className="hidden sm:flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {items.map((it, i) => (
                  <div
                    key={i}
                    className={clsx(
                      "snap-start flex-shrink-0",
                      "w-full max-w-[340px] mx-auto min-h-[420px] sm:w-full sm:max-w-[380px]",
                      "rounded-xl p-8 flex flex-col gap-6 shadow-lg",
                      isDark
                        ? "bg-[#1F2937] text-white"
                        : "bg-white text-[#374151]"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <Image
                          src={it.image}
                          width={60}
                          height={60}
                          alt={it.name}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-[16px] leading-[20px] truncate">
                          {it.name}
                        </span>
                        <span
                          className={clsx(
                            "text-[14px] leading-[18px] truncate",
                            isDark ? "text-gray-400" : "text-[#222222]"
                          )}
                        >
                          {it.designation}
                        </span>
                      </div>
                    </div>
                    <p
                      className={clsx(
                        "text-[16px] leading-[24px] flex-1",
                        isDark ? "text-gray-300" : "text-[#222222]"
                      )}
                    >
                      "{it.text}"
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: it.rating }).map((_, z) => (
                        <Star
                          key={z}
                          fill="currentColor"
                          className={clsx(
                            "w-5 h-5",
                            isDark ? "text-yellow-400" : "text-black"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Mobile carousel */}
              <div className="flex flex-col items-center sm:hidden">
                <div className="w-full max-w-[340px] mx-auto min-h-[420px] rounded-xl p-8 flex flex-col gap-6 shadow-lg bg-white dark:bg-[#1F2937] text-[#374151] dark:text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                      <Image
                        src={items[mobileIndex].image}
                        alt={items[mobileIndex].name}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-[16px] leading-[20px] truncate">
                        {items[mobileIndex].name}
                      </span>
                      <span className={clsx(
                        "text-[14px] leading-[18px] truncate",
                        isDark ? "text-gray-400" : "text-[#222222]"
                      )}>
                        {items[mobileIndex].designation}
                      </span>
                    </div>
                  </div>
                  <p className={clsx(
                    "text-[16px] leading-[24px] flex-1",
                    isDark ? "text-gray-300" : "text-[#222222]"
                  )}>
                    "{items[mobileIndex].text}"
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: items[mobileIndex].rating }).map((_, z) => (
                      <Star
                        key={z}
                        fill="currentColor"
                        className={clsx(
                          "w-5 h-5",
                          isDark ? "text-yellow-400" : "text-black"
                        )}
                      />
                    ))}
                  </div>
                </div>
                {/* Mobile navigation buttons */}
                <div className="flex sm:hidden gap-4 mt-4 justify-center">
                  <button
                    onClick={() => setMobileIndex((i) => (i - 1 + items.length) % items.length)}
                    className={clsx(
                      "w-[44px] h-[44px] flex items-center justify-center rounded-full",
                      navButtonHover
                    )}
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => setMobileIndex((i) => (i + 1) % items.length)}
                    className={clsx(
                      "w-[44px] h-[44px] flex items-center justify-center rounded-full",
                      navButtonHover
                    )}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              {/* Desktop navigation buttons */}
              <div className="hidden sm:flex gap-4 mt-4 px-4 md:px-0 justify-start">
                <button
                  onClick={() => scrollOne(-1)}
                  className={clsx(
                    "w-[44px] h-[44px] flex items-center justify-center rounded-full",
                    navButtonHover
                  )}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => scrollOne(1)}
                  className={clsx(
                    "w-[44px] h-[44px] flex items-center justify-center rounded-full",
                    navButtonHover
                  )}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
