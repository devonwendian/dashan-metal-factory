import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Head from 'next/head';
import knowledgeListData from '@/data/knowledge-list-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { absoluteUrl, alternateHrefLangLinks, I18N_LOCALES, absolutePublicUrl, SITE_BASE } from '@/lib/i18n-seo';
import { pickLocalized } from '@/lib/pickLocalized';
import SeoOpenGraph from '@/components/SeoOpenGraph';

export default function KnowledgeDetail({ knowledge }) {
  const { i18n } = useTranslation('common');

  const detailPath = `/knowledge/${knowledge.knowledge_id}`;
  const canonicalUrl = absoluteUrl(i18n.language, detailPath);
  const alternates = alternateHrefLangLinks(detailPath);
  const title = pickLocalized(knowledge.title, i18n.language);
  const description = pickLocalized(knowledge.description, i18n.language);
  const contentHtml = pickLocalized(knowledge.content, i18n.language);
  const ogImage = knowledge.image ? absolutePublicUrl(knowledge.image) : undefined;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: ogImage ? [ogImage] : undefined,
    datePublished: knowledge.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    publisher: { '@type': 'Organization', name: 'Dashan Metal', url: SITE_BASE },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
        <SeoOpenGraph
          url={canonicalUrl}
          title={title}
          description={description}
          image={ogImage}
          locale={i18n.language}
          type="article"
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