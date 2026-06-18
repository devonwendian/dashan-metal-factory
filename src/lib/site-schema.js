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
}) {
  const orgId = `${SITE_BASE}/#organization`;
  const websiteId = `${SITE_BASE}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_BASE,
        name: siteName,
        ...(alternateNames.length ? { alternateName: alternateNames } : {}),
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: siteName,
        url: SITE_BASE,
        logo: logoUrl,
        description,
        ...(alternateNames.length ? { alternateName: alternateNames } : {}),
        ...(address ? { address } : {}),
        ...(contactPoint ? { contactPoint } : {}),
      },
    ],
  };
}
