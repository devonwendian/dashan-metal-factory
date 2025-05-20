import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import logo from '../../public/images/logo.jpg';
import { useState } from 'react';

export default function Header() {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center shadow-md">
        <nav className="bg-white text-gray-800 py-2 px-6 w-full shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt={t('logo_alt')}
                width={80}
                className="rounded"
              />
              <div
                role="heading"
                aria-level="2"
                className="text-xl md:text-2xl font-semibold whitespace-normal flex-grow mr-4"
              >
                {t('factory_name')}
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}
                aria-label={t('toggle_menu')}
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div
                className={`${
                  isMenuOpen ? 'block' : 'hidden'
                } lg:flex lg:items-center lg:space-x-4 absolute lg:static top-16 right-6 lg:right-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 rounded-lg lg:rounded-none z-50`}
              >
                <Link
                  href="/"
                  className="block lg:inline hover:text-blue-600 transition py-2 lg:py-0"
                >
                  {t('home')}
                </Link>
                <Link
                  href="/products"
                  className="block lg:inline hover:text-blue-600 transition py-2 lg:py-0"
                >
                  {t('products')}
                </Link>
                <Link
                  href="/about"
                  className="block lg:inline hover:text-blue-600 transition py-2 lg:py-0"
                >
                  {t('about')}
                </Link>
                <Link
                  href="/contact"
                  className="block lg:inline hover:text-blue-600 transition py-2 lg:py-0"
                >
                  {t('contact')}
                </Link>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}