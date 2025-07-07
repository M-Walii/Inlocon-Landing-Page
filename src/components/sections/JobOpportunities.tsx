"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import {
  Play,
  Building,
  FileSearch,
  FileDown,
  Users,
  Award,
  X,
} from "lucide-react";
import { Button } from "../common/Button";
import Section from "../common/Section";

export default function JobOpportunitiesSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Features for the right column
  const features = [
    {
      title: t("jobOpportunities.features.1.title"),
      description: t("jobOpportunities.features.1.description"),
      Icon: Building,
    },
    {
      title: t("jobOpportunities.features.2.title"),
      description: t("jobOpportunities.features.2.description"),
      Icon: FileSearch,
    },
    {
      title: t("jobOpportunities.features.3.title"),
      description: t("jobOpportunities.features.3.description"),
      Icon: FileDown,
    },
    {
      title: t("jobOpportunities.features.4.title"),
      description: t("jobOpportunities.features.4.description"),
      Icon: Award,
    },
    {
      title: t("jobOpportunities.features.5.title"),
      description: t("jobOpportunities.features.5.description"),
      Icon: Users,
    },
  ];

  function handlePlay() {
    setIsModalOpen(true);
    setTimeout(() => videoRef.current?.play(), 0);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Section
      id="job-opportunities"
      className={clsx(
        "relative w-full flex flex-col items-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-10 sm:pt-14 md:pt-16",
        "pb-12 sm:pb-16 md:pb-20",
        isDark ? "bg-[#272f3c]" : "bg-[#0060A9]"
      )}
    >
      <div className="max-w-[1240px] w-full mx-auto">
        {/* Section heading */}
        <div className="text-center mx-auto">
          <h2
            className={clsx(
              "pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight",
              "text-white"
            )}
          >
            {t("jobOpportunities.title")}
          </h2>
          <p
            className={clsx(
              "mt-4 text-[18px] leading-7 max-w-2xl mx-auto",
              "text-white"
            )}
          >
            {t("jobOpportunities.subtitle")}
          </p>
        </div>

        {/* Two-column layout: video and features */}
        <div className="mt-12 flex flex-col lg:flex-row gap-12 items-stretch h-full">
          {/* Video column with overlay and play button */}
          <div className="flex-1 flex flex-col items-center justify-center h-full">
            <div className="relative w-full max-w-[800px] h-full rounded-lg overflow-hidden shadow-lg flex flex-col justify-center">
              <Image
                src="/assets/images/jpeg/desktop.jpeg"
                alt={t("jobOpportunities.video.alt")}
                width={800}
                height={700}
                className="object-cover w-full h-full min-h-0 lg:h-[548px] lg:min-h-[548px] rounded-lg"
              />
              <div className="absolute inset-0 bg-[#11182799]" />
              <Button
                onClick={handlePlay}
                variant="ghost"
                className={clsx(
                  "absolute inset-0 h-full w-full rounded-none p-0 flex flex-col items-center justify-center transition-opacity duration-300"
                )}
              >
                <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-white dark:text-black" fill="currentColor" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white">
                    {t("jobOpportunities.video.cta")}
                  </p>
                  <p className="text-sm text-white/50">
                    {t("jobOpportunities.video.subtitle")}
                  </p>
                </div>
              </Button>
            </div>
          </div>

          {/* Features column */}
          <div className="flex-1 flex flex-col justify-between space-y-2 h-full">
            {features.map(({ title, description, Icon }) => (
              <div
                key={title}
                className={clsx(
                  "flex items-start gap-4 p-6 rounded-lg shadow-sm transition-shadow hover:shadow-lg",
                  isDark ? "bg-[#111728]" : "bg-white"
                )}
              >
                <div
                  className={clsx(
                    "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                    isDark ? "bg-[#38414F]" : "bg-[#E6F0F8]"
                  )}
                >
                  <Icon className="w-6 h-6 text-[#6FAD4C]" />
                </div>
                <div>
                  <h3
                    className={clsx(
                      "text-lg font-semibold",
                      isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    {title}
                  </h3>
                  <p
                    className={clsx(
                      "mt-1 text-sm leading-relaxed",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video modal popup */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-3xl mx-auto">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
              <video
                ref={videoRef}
                src="/assets/video/Inlocon-AG.mp4"
                controls
                autoPlay
                className="w-full h-[60vh] rounded-lg bg-black"
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
