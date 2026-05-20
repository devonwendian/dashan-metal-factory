import { useRouter } from 'next/router';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const changeLanguage = useCallback(
    (l) => {
      setOpen(false);
      router.push({ pathname, query }, asPath, { locale: l });
    },
    [router, pathname, asPath, query]
  );

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);

    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        close();
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 hover:bg-gray-50 transition"
        aria-label={t('select_language')}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <svg
          className="w-4 h-4 text-gray-600 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="max-w-[5.5rem] truncate sm:max-w-none">
          {t(`language.${locale}`)}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-gray-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open ? (
        <ul
          role="menu"
          className="absolute right-0 z-[60] mt-2 min-w-[9.5rem] rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {locales.map((l) => {
            const active = locale === l;
            return (
              <li key={l} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => changeLanguage(l)}
                  className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition ${
                    active
                      ? 'bg-amber-50 text-amber-800 font-medium'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                  aria-current={active ? 'true' : undefined}
                >
                  <span>{t(`language.${l}`)}</span>
                  {active ? (
                    <svg className="w-4 h-4 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
