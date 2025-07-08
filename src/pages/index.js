import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerCarousel from '@/components/BannerCarousel';
import MainProducts from '@/components/MainProducts';
import LargeMetalProducts from '@/components/LargeMetalProducts';
import ManufacturingProcessesVideos from '@/components/ManufacturingProcessesVideos';
import FactoryIntro from '@/components/FactoryIntro';
import WorkshopAreas from '@/components/WorkshopAreas';
import OurCustomers from '@/components/OurCustomers';
import ContactUs from '@/components/ContactUs';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('home');


  const siteBase = 'https://dsmetalstamping.com';

  const locales = {
    zh: '/zh',
  };

  const canonicalUrl = siteBase + (locales[i18n.language] ? locales[i18n.language] : '');
  
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="zh" href="https://dsmetalstamping.com/zh" />
        <link rel="alternate" hreflang="en" href="https://dsmetalstamping.com" />
        <link rel="alternate" hreflang="x-default" href="https://dsmetalstamping.com" />
      </Head>
      <Header />
      <main className="text-center">
        <h1 className="sr-only">{t('home_h1')}</h1>
        <BannerCarousel />
        <MainProducts />
        <LargeMetalProducts />
        <ManufacturingProcessesVideos />
        <FactoryIntro />
        <WorkshopAreas />
        <OurCustomers />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'banner', 'home'])),
    },
  };
}
