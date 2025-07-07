"use client";

import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import {
  FileText,
  TrendingUpDown,
  Trophy,
  Users,
  BriefcaseBusiness,
  CalendarHeart,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import clsx from 'clsx';
import Section from '../common/Section';

export default function TrustedBySection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Stats for the grid
  const stats = [
    { icon: FileText, value: t('trustedBy.stats.1.value'), label: t('trustedBy.stats.1.label') },
    { icon: TrendingUpDown, value: t('trustedBy.stats.2.value'), label: t('trustedBy.stats.2.label') },
    { icon: Trophy, value: t('trustedBy.stats.3.value'), label: t('trustedBy.stats.3.label') },
    { icon: Users, value: t('trustedBy.stats.4.value'), label: t('trustedBy.stats.4.label') },
    { icon: BriefcaseBusiness, value: t('trustedBy.stats.5.value'), label: t('trustedBy.stats.5.label') },
    { icon: CalendarHeart, value: t('trustedBy.stats.6.value'), label: t('trustedBy.stats.6.label') },
  ];

  // Button hover effect for all buttons
  const buttonHover =
    "transition-colors duration-200 hover:bg-[#005080] dark:hover:bg-[#00395c] hover:text-white";

  return (
    <Section id="trusted-by" className={clsx(
      "relative w-full flex flex-col items-center",
      "px-4 sm:px-6 lg:px-8",
      "pt-10 sm:pt-14 md:pt-16",
      "pb-12 sm:pb-16 md:pb-20",
      isDark ? 'bg-[#111828]' : 'bg-white'
    )}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className={clsx("text-3xl font-bold", isDark ? 'text-white' : 'text-gray-900')}>
              {t('trustedBy.title')}
            </h2>
            <p className={clsx("mt-2", isDark ? 'text-gray-400' : 'text-gray-600')}>
              {t('trustedBy.subtitle')}
            </p>
          </div>

          {/* Stats grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className={clsx(
                  "w-full max-w-[270px] p-6 rounded-lg flex flex-col items-center text-center shadow-lg",
                  isDark ? 'bg-[#000000]' : 'bg-[#ffffff]'
                )}
              >
                <div className={clsx(
                  "p-3 rounded-lg",
                  isDark ? 'bg-[#262626]' : 'bg-[#d9e7f2]'
                )}>
                  <Icon className={clsx("h-6 w-6", isDark ? 'text-white' : 'text-[#0160AA]')} />
                </div>
                <h3 className={clsx("mt-4 text-2xl font-bold", isDark ? 'text-white' : 'text-[#0160AA]')}>
                  {value}
                </h3>
                <p className={clsx("mt-1 text-sm", isDark ? 'text-gray-400' : 'text-gray-500')}>{label}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-10 relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/jpeg/trustBySection.jpeg"
                alt={t('trustedBy.cta.alt')}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 py-16 px-6 flex flex-col items-center justify-center text-center gap-8">
              <div className="max-w-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white break-words whitespace-normal leading-tight">
                  {t('trustedBy.cta.title')}
                </h2>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 break-words whitespace-normal leading-snug">
                  {t('trustedBy.cta.subtitle')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className={clsx(
                    "w-[181px] h-[46px] flex flex-row justify-center items-center gap-[10px] px-4 rounded-[6px]",
                    "bg-[#0060A9] text-white border-0 hover:bg-[#005080]",
                    "dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:border-0"
                  )}
                >
                  {t('trustedBy.cta.startTrial')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className={clsx(
                    "w-[131px] h-[46px] flex flex-row justify-center items-center gap-[10px] px-4 rounded-[6px] border",
                    "bg-white text-[#0060A9] border-[#0060A9] hover:bg-gray-100 hover:text-[#0060A9]",
                    "dark:bg-[#111827] dark:text-white dark:border-white dark:hover:bg-[#222f43] dark:hover:text-white"
                  )}
                >
                  {t('trustedBy.cta.demo')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
