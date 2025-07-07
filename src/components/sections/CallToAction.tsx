'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/common/Button';
import clsx from 'clsx';
import Section from '../common/Section';
import { ArrowRight } from 'lucide-react';

export default function CallToActionSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Button hover effect for secondary buttons
  const buttonHover =
    'transition-colors duration-200 bg-white text-[#0060A9] hover:bg-gray-100 dark:bg-[#111828] dark:text-white dark:hover:bg-[#222f43] border-0';

  return (
    <Section
      className={clsx(
        'w-full flex justify-center items-center py-12 px-2',
        isDark ? 'bg-[#111828]' : 'bg-white'
      )}
    >
      <div className="bg-[#0060A9] rounded-lg max-w-7xl w-full mx-auto px-6 py-16 flex flex-col items-center text-center text-white shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
          {t('callToAction.title')}
        </h2>
        <p className="mt-4 text-lg text-white/90">
          {t('callToAction.subtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
          <Button
            variant="secondary"
            size="lg"
            className={clsx(
              'w-auto font-semibold',
              buttonHover
            )}
          >
            {t('callToAction.cta')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className={clsx(
              'w-auto font-semibold',
              buttonHover,
              isDark
                ? 'border border-white text-white'
                : 'border border-[#0060A9] text-[#0060A9]'
            )}
          >
            {t('callToAction.demo')}
          </Button>
        </div>
      </div>
    </Section>
  );
}
