"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { Globe, ListFilter, Target, FileText, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import Section from "@/components/common/Section";
import clsx from "clsx";

export default function WhatWeOffer() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Offer cards data
  const offers = [
    {
      key: '1',
      title: 'whatWeOffer.offers.1.title',
      description: 'whatWeOffer.offers.1.description',
      icon: Globe,
      items: [
        'whatWeOffer.offers.1.items.1',
        'whatWeOffer.offers.1.items.2',
        'whatWeOffer.offers.1.items.3',
        'whatWeOffer.offers.1.items.4'
      ],
    },
    {
      key: '2',
      title: 'whatWeOffer.offers.2.title',
      description: 'whatWeOffer.offers.2.description',
      icon: Globe,
      items: [
        'whatWeOffer.offers.2.items.1',
        'whatWeOffer.offers.2.items.2',
        'whatWeOffer.offers.2.items.3',
        'whatWeOffer.offers.2.items.4'
      ],
    },
    {
      key: '3',
      title: 'whatWeOffer.offers.3.title',
      description: 'whatWeOffer.offers.3.description',
      icon: Globe,
      items: [
        'whatWeOffer.offers.3.items.1',
        'whatWeOffer.offers.3.items.2',
        'whatWeOffer.offers.3.items.3',
        'whatWeOffer.offers.3.items.4'
      ],
    },
  ];

  // Stats bar data
  const stats = [
    { label: 'whatWeOffer.stats.1.label', value: 'whatWeOffer.stats.1.value', icon: ListFilter },
    { label: 'whatWeOffer.stats.2.label', value: 'whatWeOffer.stats.2.value', icon: Target },
    { label: 'whatWeOffer.stats.3.label', value: 'whatWeOffer.stats.3.value', icon: FileText }
  ];

  // Button hover effect for primary button
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  return (
    <Section
      id="what-we-offer"
      className={clsx("py-10 sm:py-16", isDark ? "bg-[#111828]" : "bg-white")}
    >
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={clsx("pt-6 text-3xl sm:text-4xl font-bold text-center leading-tight", isDark ? "text-white" : "text-gray-900")}>
            {t('whatWeOffer.title')}
          </h2>
          <p className={clsx("mt-4 text-base sm:text-lg", isDark ? "text-gray-300" : "text-gray-600")}>
            {t('whatWeOffer.subtitle')}
          </p>
        </div>

        {/* Offer Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <div key={o.title} className={clsx("rounded-lg p-8", isDark ? "bg-[#000000]" : "bg-[#f9fafc]")}>
              <div className="flex items-center gap-4">
                <div className={clsx("h-12 w-12 flex items-center justify-center rounded-lg", isDark ? "bg-[#97be0d]" : "bg-[#97be0d]")}>
                  <o.icon className={clsx("h-6 w-6", isDark ? "text-[#FFFFFF]" : "text-[#FFFFFF]")} />
                </div>
                <h3 className={clsx("text-xl font-semibold", isDark ? "text-white" : "text-gray-900")}>{t(o.title)}</h3>
              </div>
              <p className={clsx("mt-4 text-sm", isDark ? "text-gray-300" : "text-gray-600")}>{t(o.description)}</p>
              <ul role="list" className="mt-6 space-y-3">
                {o.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="h-5 w-5 flex-shrink-0 mt-1 rounded-full bg-[#97be0d]/90 flex items-center justify-center">
                      <Check className={clsx("h-3 w-3", isDark ? "text-black" : "text-white")} strokeWidth={2.5} />
                    </div>
                    <span className={clsx("ml-3 text-sm", isDark ? "text-gray-300" : "text-gray-700")}>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center">
          <div className={clsx("mt-10 rounded-lg px-6 py-4 sm:px-8 w-full max-w-3xl", isDark ? "bg-[#1d2532]" : "bg-[#f2f7fb]")}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              {stats.map((s, index) => (
                <div
                  key={s.label}
                  className={clsx(
                    "flex-1 flex items-center w-full sm:justify-center text-left py-4 sm:py-0",
                    index > 0 && "sm:pl-8",
                    index < stats.length - 1 && "sm:border-r border-gray-300 dark:border-gray-600"
                  )}
                >
                  <s.icon className="h-8 w-8 text-[#0060A9] dark:text-[#0060aa]" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t(s.label)}</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{t(s.value)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action button (no links) */}
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" className={buttonHover}>
            {t('whatWeOffer.cta')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
