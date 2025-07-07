'use client';

import Link from 'next/link';
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  PhoneCall,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

// Social media links
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/InloconAG',
    icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/inlocon-ag/posts/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/inlocon_ag/',
    icon: Instagram,
  },
];

export default function Footer() {
  const { t } = useLanguage();

  // Navigation links for quick access and support
  const navigation = {
    quickLinks: [
      { name: t('footer.quickLinks.links.howItWorks'), href: '#how-it-works' },
      { name: t('footer.quickLinks.links.benefits'), href: '#why-choose-inlocon' },
      { name: t('footer.quickLinks.links.features'), href: '#extra-features' },
      { name: t('footer.quickLinks.links.dataSources'), href: '#groups' },
      { name: t('footer.quickLinks.links.pricing'), href: '#what-we-offer' },
    ],
    support: [
      { name: t('footer.support.links.helpCenter') },
      { name: t('footer.support.links.documentation') },
      { name: t('footer.support.links.apiReference') },
      { name: t('footer.support.links.contactSupport') },
      { name: t('footer.support.links.statusPage') },
    ],
  };

  // Contact information
  const contact = [
    {
      name: t('footer.contact.email'),
      value: `mailto:${t('footer.contact.email')}`,
      icon: Mail,
    },
    {
      name: t('footer.contact.phone'),
      value: `tel:${t('footer.contact.phone')}`,
      icon: PhoneCall,
    },
    {
      name: t('footer.contact.address'),
      value: '#',
      icon: MapPin,
    },
  ];

  return (
    <footer className="bg-[#192133] text-gray-300">
      <div className="bg-[url(/assets/images/footer-bg.png)] bg-no-repeat bg-cover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 space-y-6 md:space-y-0">
            {/* Brand, tagline, and social icons */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/assets/images/png/logo-dark.png"
                  alt={t('header.logoAlt')}
                  width={180}
                  height={40}
                  priority
                />
              </Link>
              <p className="text-gray-400 max-w-xs">{t('footer.cta')}</p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6 text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links and Support (side by side) */}
            <div className="md:col-span-1 lg:col-span-2 flex flex-row flex-wrap gap-8 min-w-0">
              <div className="min-w-[150px] flex-1">
                <h3 className="font-semibold text-white">
                  {t('footer.quickLinks.title')}
                </h3>
                <ul className="mt-4 space-y-2">
                  {navigation.quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-[150px] flex-1">
                <h3 className="font-semibold text-white">
                  {t('footer.support.title')}
                </h3>
                <ul className="mt-4 space-y-2">
                  {navigation.support.map((link) => (
                    <li key={link.name}>
                      <span
                        className="text-gray-400 text-sm transition-colors hover:text-white cursor-pointer select-none"
                        tabIndex={0}
                        onMouseOver={e => e.currentTarget.classList.add('text-white')}
                        onMouseOut={e => e.currentTarget.classList.remove('text-white')}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact information */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-white">
                {t('footer.contact.title')}
              </h3>
              <ul className="mt-4 space-y-3">
                {contact.map((item) => (
                  <li key={item.name} className="flex items-start">
                    <item.icon className="h-5 w-5 text-lime-400 mt-1 mr-3 flex-shrink-0" />
                    <a
                      href={item.value}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright and legal links (not clickable) */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-start">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer select-none">
                {t('footer.privacy')}
              </span>
              <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer select-none">
                {t('footer.terms')}
              </span>
              <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer select-none">
                {t('footer.cookies')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
