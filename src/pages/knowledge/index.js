import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import knowledgeListData from '@/data/knowledge-list-data';

export default function KnowledgeList({ }) {
  const { t, i18n } = useTranslation(['common', 'knowledge']);

  return (
    <>
      <Head>
        <title>{t('title', {ns: 'knowledge'})}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <Header />
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          {t('Metal Forming Knowledge')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeListData.map((article) => (
            <article
              key={article.knowledge_id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <Link href={`/knowledge/${article.knowledge_id}`}>
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title[i18n.language]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title[i18n.language]}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description[i18n.language]}
                  </p>
                  <p className="text-gray-500 text-sm">{article.date}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'knowledge'])),
    },
  };
}