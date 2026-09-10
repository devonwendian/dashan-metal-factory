import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoOpenGraph from '@/components/SeoOpenGraph';
import { useTranslation } from 'next-i18next';
import {
  absoluteUrl,
  alternateHrefLangLinks,
  absolutePublicUrl,
  SITE_BASE,
} from '@/lib/i18n-seo';
import {
  PRODUCT_CATEGORIES,
  CATEGORY_ORDER,
  getProductsForCategory,
} from '@/data/product-categories';

const PRODUCTS_PER_PAGE = 9;

/**
 * Shared product gallery for /products/deep-drawing and /products/metal-spinning.
 * Category lives in the path so refresh, share, and browser-back keep the tab.
 */
export default function ProductCategoryList({ categorySlug }) {
  const config = PRODUCT_CATEGORIES[categorySlug];
  const { t, i18n } = useTranslation(['common', 'product-list']);
  const router = useRouter();
  const { locale } = router;
  const currentPage = Math.max(1, parseInt(router.query.page || '1', 10) || 1);

  const products = getProductsForCategory(categorySlug);
  const totalPages = Math.max(1, Math.ceil(products.length / PRODUCTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const pageQuery = safePage > 1 ? `page=${safePage}` : '';
  const listPath = config.path;
  const canonicalUrl = absoluteUrl(i18n.language, listPath, pageQuery);
  const alternates = alternateHrefLangLinks(listPath, pageQuery);
  const siteName = t('site_name', { ns: 'common' });
  const listTitle = t(config.titleKey, { ns: 'product-list' });
  const listDesc = t(config.descriptionKey, { ns: 'product-list' });
  const pageTitle = `${listTitle} | ${siteName}`;
  const ogImage = absolutePublicUrl(config.ogImage);

  const goToPage = (page) => {
    const query = page > 1 ? { page: String(page) } : {};
    router.push({ pathname: listPath, query }, undefined, { shallow: true, locale });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: listTitle,
    description: listDesc,
    url: canonicalUrl,
    isPartOf: { '@type': 'WebSite', name: siteName, url: SITE_BASE },
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={listDesc} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
        {safePage > 1 && (
          <link
            rel="prev"
            href={absoluteUrl(
              locale,
              listPath,
              safePage === 2 ? '' : `page=${safePage - 1}`
            )}
          />
        )}
        {safePage < totalPages && (
          <link rel="next" href={absoluteUrl(locale, listPath, `page=${safePage + 1}`)} />
        )}
        <SeoOpenGraph
          url={canonicalUrl}
          title={pageTitle}
          description={listDesc}
          image={ogImage}
          locale={i18n.language}
          siteName={siteName}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            {t(config.h1Key, { ns: 'product-list' })}
          </h1>
          <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {t(config.introKey, { ns: 'product-list' })}
          </p>
          <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {t('custom_note', { ns: 'product-list' })}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="mailto:wendian1989@gmail.com"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm md:text-base font-medium hover:bg-blue-700 transition"
            >
              {t('cta_email_drawing', { ns: 'product-list' })}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-gray-300 bg-white text-gray-800 text-sm md:text-base font-medium hover:bg-gray-50 transition"
            >
              {t('cta_contact_page', { ns: 'product-list' })}
            </Link>
          </div>

          {/* Tabs: real links → refresh / share / SEO keep the category */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            role="tablist"
            aria-label={t('product_categories', { ns: 'product-list', defaultValue: 'Product categories' })}
          >
            {CATEGORY_ORDER.map((slug) => {
              const tab = PRODUCT_CATEGORIES[slug];
              const active = slug === categorySlug;
              return (
                <Link
                  key={slug}
                  href={tab.path}
                  role="tab"
                  aria-selected={active}
                  className={`px-5 py-2.5 rounded-md text-sm md:text-base font-medium transition ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {t(tab.tabKey, { ns: 'product-list' })}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <article
                key={product.product_id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/products/${product.product_id}`} prefetch={false}>
                  <div className="relative w-full aspect-square">
                    <Image
                      src={product.images[5] || product.images[0]}
                      alt={t(product.name, { ns: 'product-list' })}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 truncate">
                      {t(product.name, { ns: 'product-list' })}
                    </h2>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {paginatedProducts.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              {t('no_products', { ns: 'product-list', defaultValue: 'No products found in this category.' })}
            </p>
          )}

          {totalPages > 1 && (
            <nav
              className="mt-8 flex items-center justify-center space-x-3 sm:space-x-4"
              aria-label={t('product_pagination', { ns: 'product-list', defaultValue: 'Product pagination' })}
            >
              <div className="flex items-center space-x-3 sm:hidden">
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                >
                  {t('Previous', { ns: 'product-list' })}
                </button>
                <span className="text-gray-700 text-base font-medium">
                  {t('page_of', {
                    current: safePage,
                    total: totalPages,
                    ns: 'product-list',
                  })}
                </span>
                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                >
                  {t('Next', { ns: 'product-list' })}
                </button>
              </div>

              <div className="hidden sm:flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                >
                  {t('Previous', { ns: 'product-list' })}
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-md text-base ${
                      safePage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-current={safePage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                >
                  {t('Next', { ns: 'product-list' })}
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
