import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerCarousel from '@/components/BannerCarousel';
import MainProducts from '@/components/MainProducts';
import LargeMetalProducts from '@/components/LargeMetalProducts';
import CraftVideos from '@/components/CraftVideos';
import FactoryIntro from '@/components/FactoryIntro';
import WorkshopAreas from '@/components/WorkshopAreas2';
import OurCustomers from '@/components/OurCustomers';
import ContactUs from '@/components/ContactUs';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <main className="text-center">
        <BannerCarousel />
        <MainProducts />
        <LargeMetalProducts />
        <CraftVideos />
        <FactoryIntro />
        <WorkshopAreas />
        <OurCustomers />
        <ContactUs />
        {/* <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1> */}
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
