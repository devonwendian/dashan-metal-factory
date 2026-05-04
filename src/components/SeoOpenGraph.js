import { I18N_LOCALES } from '@/lib/i18n-seo';
import { ogLocaleForLang } from '@/lib/og-locale';

/**
 * Open Graph + Twitter Card (inside next/head).
 * @param {{ url: string; title: string; description: string; image?: string; locale: string; type?: string }} props
 */
export default function SeoOpenGraph({ url, title, description, image, locale, type = 'website' }) {
  const primary = ogLocaleForLang(locale);

  return (
    <>
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={primary} />
      {I18N_LOCALES.filter((l) => l !== locale).map((l) => (
        <meta key={l} property="og:locale:alternate" content={ogLocaleForLang(l)} />
      ))}
      {image ? <meta property="og:image" content={image} /> : null}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}
    </>
  );
}
