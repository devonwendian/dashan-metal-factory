import { SITE_BASE } from '@/lib/i18n-seo';

/**
 * WebSite + Organization @graph for Google site name & brand signals.
 * @see https://developers.google.com/search/docs/appearance/site-names
 */
export function buildSiteOrganizationGraph({
  siteName,
  description,
  logoUrl,
  alternateNames = [],
  contactPoint,
  address,
  areaServed,
}) {
  const orgId = `${SITE_BASE}/#organization`;
  const websiteId = `${SITE_BASE}/#website`;
  const uniqueAlternateNames = [...new Set(alternateNames.filter((n) => n && n !== siteName))];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_BASE,
        name: siteName,
        ...(uniqueAlternateNames.length ? { alternateName: uniqueAlternateNames } : {}),
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: siteName,
        url: SITE_BASE,
        logo: logoUrl,
        description,
        ...(uniqueAlternateNames.length ? { alternateName: uniqueAlternateNames } : {}),
        ...(address ? { address } : {}),
        ...(contactPoint ? { contactPoint } : {}),
        ...(areaServed ? { areaServed } : {}),
      },
    ],
  };
}
