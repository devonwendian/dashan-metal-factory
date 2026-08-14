import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="border-t mt-8 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <nav
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-700 mb-5"
          aria-label={t('footer_nav_label')}
        >
          <Link href="/products/deep-drawing" className="hover:text-blue-600">
            {t('nav_deep_drawing')}
          </Link>
          <Link href="/products/metal-spinning" className="hover:text-blue-600">
            {t('nav_metal_spinning')}
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            {t('about')}
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            {t('contact')}
          </Link>
          <Link href="/knowledge" className="hover:text-blue-600">
            {t('Metal Forming Knowledge')}
          </Link>
        </nav>
        <p className="text-sm text-gray-500">
          {t('© 2025 Dongguan Huangjiang Dashan Metal Products Factory. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
