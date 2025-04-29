import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const changeLanguage = (l) => {
    router.push({ pathname, query }, asPath, { locale: l });
  };

  return (
    <select value={locale} onChange={(e) => changeLanguage(e.target.value)} className="border p-1">
      {locales.map((l) => (
        <option key={l} value={l}>{l.toUpperCase()}</option>
      ))}
    </select>
  );
}
