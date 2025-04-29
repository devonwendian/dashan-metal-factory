import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">Metal Factory</div>
      <nav className="flex gap-4">
        <Link href="/">{t('home')}</Link>
        <Link href="/products">{t('products')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/contact">{t('contact')}</Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
