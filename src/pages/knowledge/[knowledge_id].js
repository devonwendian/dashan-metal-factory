import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import knowledgeListData from '@/data/knowledge-list-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { absoluteUrl, alternateHrefLangLinks, I18N_LOCALES, absolutePublicUrl, SITE_BASE } from '@/lib/i18n-seo';
import { pickLocalized } from '@/lib/pickLocalized';
import SeoOpenGraph from '@/components/SeoOpenGraph';

/** Map knowledge articles to the matching factory case gallery. */
function relatedCasesPath(knowledgeId) {
  if (typeof knowledgeId === 'string' && knowledgeId.includes('spinning')) {
    return '/products/metal-spinning';
  }
  return '/products/deep-drawing';
}

export default function KnowledgeDetail({ knowledge }) {
  const { t, i18n } = useTranslation('common');
  const siteName = t('site_name');

  const detailPath = `/knowledge/${knowledge.knowledge_id}`;
  const canonicalUrl = absoluteUrl(i18n.language, detailPath);
  const alternates = alternateHrefLangLinks(detailPath);
  const title = pickLocalized(knowledge.title, i18n.language);
  const description = pickLocalized(knowledge.description, i18n.language);
  const contentHtml = pickLocalized(knowledge.content, i18n.language);
  const ogImage = knowledge.image ? absolutePublicUrl(knowledge.image) : undefined;
  const pageTitle = `${title} | ${siteName}`;
  const casesPath = relatedCasesPath(knowledge.knowledge_id);
  const casesLabel =
    casesPath === '/products/metal-spinning'
      ? t('nav_metal_spinning')
      : t('nav_deep_drawing');
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: ogImage ? [ogImage] : undefined,
    datePublished: knowledge.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    publisher: { '@type': 'Organization', name: siteName, url: SITE_BASE },
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
        <SeoOpenGraph
          url={canonicalUrl}
          title={pageTitle}
          description={description}
          image={ogImage}
          locale={i18n.language}
          type="article"
          siteName={siteName}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      </Head>
      <Header />
      <article className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-56 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src={knowledge.image}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-8 mb-4 text-center">
            {title}
          </h1>
          <p className="text-gray-500 text-sm mb-8 text-center">{knowledge.date}</p>
          <div
            className="prose prose-lg text-gray-700 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <aside className="mt-12 max-w-3xl mx-auto rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
            <p className="text-gray-700 mb-2 font-medium">{t('knowledge_cta_title')}</p>
            <p className="text-gray-600 text-sm mb-5">{t('knowledge_cta_body')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={casesPath}
                className="inline-flex px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                {t('knowledge_cta_cases', { category: casesLabel })}
              </Link>
              <a
                href="mailto:18675548079@163.com"
                className="inline-flex px-5 py-2.5 rounded-md border border-gray-300 bg-white text-gray-800 text-sm font-medium hover:bg-gray-100 transition"
              >
                {t('knowledge_cta_email')}
              </a>
            </div>
          </aside>
        </div>
      </article>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params, locale }) {
  const knowledge = knowledgeListData.find((p) => p.knowledge_id === params.knowledge_id);
  return {
    props: {
      knowledge,
      ...(await serverSideTranslations(locale, ['common', 'knowledge'])),
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  if (Array.isArray(knowledgeListData)) {
    for (const knowledge of knowledgeListData) {
      for (const locale of I18N_LOCALES) {
        paths.push({
          params: {
            knowledge_id: knowledge.knowledge_id,
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
