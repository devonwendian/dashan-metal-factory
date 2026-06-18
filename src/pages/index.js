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
// import ContactUs from '@/components/ContactUs';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { absoluteUrl, alternateHrefLangLinks, absolutePublicUrl } from '@/lib/i18n-seo';
import { buildSiteOrganizationGraph } from '@/lib/site-schema';
import SeoOpenGraph from '@/components/SeoOpenGraph';

export default function Home() {
  const { t, i18n } = useTranslation(['home', 'common']);

  const siteName = t('site_name', { ns: 'common' });
  const pageTitle = `${siteName} | ${t('title_tagline', { ns: 'home' })}`;
  const canonicalUrl = absoluteUrl(i18n.language, '/');
  const alternates = alternateHrefLangLinks('/');
  const ogImage = absolutePublicUrl('/images/factory-intro/factory-gate.jpg');
  const orgJsonLd = buildSiteOrganizationGraph({
    siteName,
    description: t('description', { ns: 'home' }),
    logoUrl: absolutePublicUrl('/images/logo.jpg'),
    alternateNames: [
      t('site_name_alt', { ns: 'common' }),
      'Dashan Metal',
      'dsmetalstamping.com',
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 101, No. 12 Banhu East Street, Huangjiang Town',
      addressLocality: 'Dongguan',
      addressRegion: 'Guangdong',
      postalCode: '523750',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-18576639259',
      contactType: 'sales',
      email: '18675548079@163.com',
      availableLanguage: ['English', 'Chinese', 'Japanese', 'Spanish', 'Korean'],
    },
  });

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={t('description', { ns: 'home' })} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
        <SeoOpenGraph
          url={canonicalUrl}
          title={pageTitle}
          description={t('description', { ns: 'home' })}
          image={ogImage}
          locale={i18n.language}
          siteName={siteName}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
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
        {/* <ContactUs /> */}
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
