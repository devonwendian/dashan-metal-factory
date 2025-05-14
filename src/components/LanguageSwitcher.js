import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const changeLanguage = useCallback(
    (l) => {
      router.push({ pathname, query }, asPath, { locale: l });
    },
    [router, pathname, asPath, query]
  );

  return (
    <div className="flex items-center space-x-1" role="navigation" aria-label={t('select_language')}>
      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => changeLanguage(l)}
          className={`px-3 py-1 rounded-full text-sm transition border ${
            locale === l
              ? 'bg-amber-600 text-white border-amber-600 shadow-md'
              : 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'
          }`}
          aria-current={locale === l ? 'true' : 'false'}
        >
          {t(`language.${l}`)}
        </button>
      ))}
    </div>
  );
}