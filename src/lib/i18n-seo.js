import localesData from '../../locales.json';

const SITE_BASE = 'https://dsmetalstamping.com';
const I18N_LOCALES = localesData.locales;
const DEFAULT_LOCALE = localesData.defaultLocale;

/**
 * @param {string} locale
 * @param {string} pathname - path without locale prefix, e.g. '/', '/about', '/products/x'
 * @param {string} [queryString] - without leading '?', e.g. 'page=2'
 */
export function absoluteUrl(locale, pathname, queryString = '') {
  const qs = queryString ? `?${queryString.replace(/^\?/, '')}` : '';
  const path = pathname === '' || pathname === '/' ? '/' : pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (locale === DEFAULT_LOCALE) {
    if (path === '/') return `${SITE_BASE}${qs}`;
    return `${SITE_BASE}${path}${qs}`;
  }

  const prefix = path === '/' ? `/${locale}` : `/${locale}${path}`;
  return `${SITE_BASE}${prefix}${qs}`;
}

/**
 * hreflang alternates + x-default for a path (no locale prefix).
 * @param {string} pathname
 * @param {string} [queryString]
 */
export function alternateHrefLangLinks(pathname, queryString = '') {
  return [
    ...I18N_LOCALES.map((loc) => ({
      hrefLang: loc,
      href: absoluteUrl(loc, pathname, queryString),
    })),
    { hrefLang: 'x-default', href: absoluteUrl(DEFAULT_LOCALE, pathname, queryString) },
  ];
}

/** Absolute URL for a path under /public (leading slash). */
export function absolutePublicUrl(publicPath) {
  if (!publicPath) return '';
  const p = publicPath.startsWith('/') ? publicPath : `/${publicPath}`;
  return `${SITE_BASE}${p}`;
}

/**
 * Homepage title: commercial phrase first so China / process keywords
 * sit in the SERP window; brand is the suffix.
 */
export function homeSeoTitle(_locale, siteName, tagline) {
  return `${tagline} | ${siteName}`;
}

export { SITE_BASE, I18N_LOCALES, DEFAULT_LOCALE };
