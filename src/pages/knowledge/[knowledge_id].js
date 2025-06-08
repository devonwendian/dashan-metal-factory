import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Head from 'next/head';
import knowledgeListData from '@/data/knowledge-list-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const baseUrl = 'https://dsmetalstamping.com';

export default function KnowledgeDetail({ knowledge }) {
  const { t, i18n } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{knowledge.title[i18n.language]}</title>
        <meta name="description" content={knowledge.description[i18n.language]} />
        <link 
          rel="alternate" 
          hreflang="zh" 
          href={`${baseUrl}/zh/knowledge/${knowledge.knowledge_id}`} 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href={`${baseUrl}/knowledge/${knowledge.knowledge_id}`} 
        />
        <link 
          rel="alternate" 
          hreflang="x-default"
          href={`${baseUrl}/knowledge/${knowledge.knowledge_id}`} 
        />
      </Head>
      <Header />
      <article className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-56 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src={knowledge.image}
              alt={knowledge.title[i18n.language]}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-8 mb-4 text-center">
            {knowledge.title[i18n.language]}
          </h1>
          <p className="text-gray-500 text-sm mb-8 text-center">{knowledge.date}</p>
          <div
            className="prose prose-lg text-gray-700 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: knowledge.content[i18n.language] }}
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
  const locales = ['zh', 'en'];
  const paths = [];

  if (Array.isArray(knowledgeListData)) {
    for (const knowledge of knowledgeListData) {
      for (const locale of locales) {
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