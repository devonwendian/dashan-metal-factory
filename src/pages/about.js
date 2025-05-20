import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
const factoryImage = '/images/factory-intro/factory-gate.jpg';

export default function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <>
      <Head>
        <title>{t('about_page_title')}</title>
        <meta name="description" content={t('about_page_description')} />
        <meta name="keywords" content={t('about_page_keywords')} />
        <link rel="alternate" hreflang="zh" href="https://dsmetalstamping.com/zh/about" />
        <link rel="alternate" hreflang="en" href="https://dsmetalstamping.com/about" />
        <link rel="alternate" hreflang="x-default" href="https://dsmetalstamping.com/about" />
      </Head>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <section className="relative">
          <div className="relative h-96 md:h-[28rem]">
            <Image
              src={factoryImage}
              alt={t('factory_image_alt')}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
            <h1 className="absolute bottom-8 left-6 md:left-12 text-3xl md:text-5xl font-bold text-white tracking-tight">
              {t('about_us')}
            </h1>
          </div>
          <div className="container mx-auto px-6 py-12 max-w-4xl">
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">{t('our_factory')}</h2>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed font-light">{t('factory_intro')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">{t('expertise')}</h2>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed font-light">{t('factory_expertise')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">{t('certification')}</h2>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed font-light">{t('factory_certification')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">{t('our_founder')}</h2>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed font-light">{t('factory_founder')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-800 text-sm md:text-base leading-relaxed font-semibold">{t('factory_invitation')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  };
}