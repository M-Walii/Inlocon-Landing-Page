"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "../common/Button";
import Section from "../common/Section";
import { ArrowRight } from "lucide-react";

export default function OurBlogSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Blog posts data
  const posts = [
    {
      id: 1,
      title: t("blog.posts.1.title"),
      imageSrc: "/assets/images/jpeg/factory.jpeg",
    },
    {
      id: 2,
      title: t("blog.posts.2.title"),
      imageSrc: "/assets/images/jpeg/court.jpeg",
    },
    {
      id: 3,
      title: t("blog.posts.3.title"),
      imageSrc: "/assets/images/jpeg/tax.jpeg",
    },
  ];

  return (
    <Section
      id="our-blog"
      className={clsx(
        "relative w-full",
        "px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        isDark ? "bg-[#111828] text-white" : "bg-white text-slate-900"
      )}
    >
      {/* Section heading */}
      <div className="mx-auto max-w-[1240px] text-center">
        <h2
          className={clsx(
            "font-bold leading-tight",
            "text-[32px] sm:text-[40px] md:text-[48px]",
            isDark ? "text-white" : "text-slate-900"
          )}
        >
          {t("blog.title")}
        </h2>
        <p
          className={clsx(
            "mt-4 text-[18px] leading-relaxed max-w-[500px] mx-auto",
            isDark ? "text-white/90" : "text-gray-600"
          )}
        >
          {t("blog.subtitle")}
        </p>
      </div>

      {/* Posts Grid */}
      <div className="mt-12 mx-auto max-w-[1240px] grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className={clsx(
              "flex flex-col rounded-lg overflow-hidden shadow-lg",
              isDark ? "bg-[#111828]" : "bg-white"
            )}
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Body */}
            <div className="flex flex-col flex-1 p-6 items-start text-left">
              <p
                className={clsx(
                  "font-semibold text-base leading-snug",
                  isDark ? "text-white" : "text-slate-900"
                )}
              >
                {post.title}
              </p>
              <Button
                variant="link"
                className={clsx(
                  "inline-flex items-center mt-4 p-0",
                  isDark ? "text-white hover:text-white/80" : "text-[#0060A9]"
                )}
              >
                {t("blog.posts.readMore")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Button
          variant="primary"
          size="lg"
          className={clsx(
            "inline-flex items-center shadow-lg bg-[#0060A9] text-white border-0 hover:bg-[#005080]",
          )}
        >
          {t("blog.cta")}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </Section>
  );
}
