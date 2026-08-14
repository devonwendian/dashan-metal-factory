import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'next-i18next';
import productListData from '@/data/product-list-data';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactUs from '@/components/ContactUs';
import Head from 'next/head';
import { I18N_LOCALES, absoluteUrl, alternateHrefLangLinks, absolutePublicUrl, SITE_BASE } from '@/lib/i18n-seo';
import SeoOpenGraph from '@/components/SeoOpenGraph';
import {
  getCategoryPathForProduct,
  getCategorySlugForProduct,
  PRODUCT_CATEGORIES,
} from '@/data/product-categories';

const allData = [...productListData.metalSpinning, ...productListData.metalDeepDrawing];

export async function getStaticPaths() {
  const paths = [];

  if (Array.isArray(allData)) {
    for (const product of allData) {
      for (const locale of I18N_LOCALES) {
        paths.push({
          params: {
            product_id: product.product_id,
          },
          locale,
        });
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const product = allData.find((p) => p.product_id === params.product_id);
  return {
    props: {
      product,
      ...(await serverSideTranslations(locale, ['common', 'product-detail', 'product-list'])),
    },
  };
}

export default function ProductDetail({ product }) {
  const { t, i18n } = useTranslation(['common', 'product-detail', 'product-list']);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <div className="text-center py-12">{t('product_not_found')}</div>;
  }
  const detailPath = `/products/${product.product_id}`;
  const canonicalUrl = absoluteUrl(i18n.language, detailPath);
  const alternates = alternateHrefLangLinks(detailPath);
  const siteName = t('site_name', { ns: 'common' });
  const productName = t(product.name, { ns: 'product-list' });
  const pageTitle = `${t('title', { ns: 'product-detail', productName })} | ${siteName}`;
  const pageDesc = t('description', { ns: 'product-detail', productName });
  const ogImage =
    typeof selectedImage === 'string' && selectedImage.startsWith('/')
      ? absolutePublicUrl(selectedImage)
      : absolutePublicUrl(product.images[0]);
  const categorySlug = getCategorySlugForProduct(product);
  const categoryPath = getCategoryPathForProduct(product);
  const categoryConfig = PRODUCT_CATEGORIES[categorySlug];
  const categoryLabel = t(categoryConfig.tabKey, { ns: 'product-list' });

  /**
   * 不使用 Product：Google 要求 Product 富结果必须含 offers / review / aggregateRating 之一。
   * OEM 无固定价、无站内评价时不应申报 Product，否则会被判为无效富媒体。
   */
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('home', { ns: 'common' }),
            item: absoluteUrl(i18n.language, '/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: categoryLabel,
            item: absoluteUrl(i18n.language, categoryPath),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: productName,
            item: canonicalUrl,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDesc,
        isPartOf: { '@type': 'WebSite', name: siteName, url: SITE_BASE },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
        <SeoOpenGraph url={canonicalUrl} title={pageTitle} description={pageDesc} image={ogImage} locale={i18n.language} siteName={siteName} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 面包屑导航 */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  {t('home', {ns: 'common'})}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href={categoryPath} className="hover:text-blue-600">
                  {categoryLabel}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{t(product.name, {ns: 'product-list'})}</li>
            </ol>
          </nav>

          {/* 产品详情 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左侧：图片和视频 */}
            <div>
              {/* 主图 */}
              <div className="w-full mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={selectedImage}
                  alt={productName}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>

              {/* 缩略图 */}
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.images.slice(0, 5).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-full aspect-square rounded-md overflow-hidden ${
                      selectedImage === img ? 'ring-2 ring-blue-600' : ''
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${productName} ${index + 1}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="20vw"
                    />
                  </button>
                ))}
              </div>

              {/* 视频 */}
              {product.video && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('product_video')}
                  </h3>
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src={product.video}
                      title={`${productName} video`}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 右侧：案例说明 + 询价 */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {productName}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-3">
                {t(`case_blurb_${categorySlug}`, { ns: 'product-detail' })}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('case_custom_note', { ns: 'product-detail' })}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:18675548079@163.com"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  {t('cta_email_drawing', { ns: 'product-detail' })}
                </a>
                <Link
                  href={categoryPath}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50 transition"
                >
                  {t('back_to_cases', { ns: 'product-detail', category: categoryLabel })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}