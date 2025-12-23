import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaPhone, FaEnvelope, FaWeixin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactPage() {
  const { t, i18n } = useTranslation('contact');
  const isChinese = i18n.language === 'zh';
  const mapImage = isChinese ? '/images/factory-map.png' : '/images/factory-map.png';
  const mapAlt = isChinese ? t('contact.map_alt_zh') : t('contact.map_alt_en');
  const siteBase = 'https://dsmetalstamping.com';

  const locales = {
    zh: '/zh/contact',
  };

  const canonicalUrl = siteBase + (locales[i18n.language] ? locales[i18n.language] : '/contact');

  return (
    <>
      <Head>
        <title>{t('title', {ns: 'contact'})}</title>
        <meta name="description" content={t('description')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="zh" href="https://dsmetalstamping.com/zh/contact" />
        <link rel="alternate" hreflang="en" href="https://dsmetalstamping.com/contact" />
        <link rel="alternate" hreflang="x-default" href="https://dsmetalstamping.com/contact" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* 头部 Banner */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">{t('contact.title')}</h1>
            <p className="mt-4 text-lg md:text-xl">{t('contact.subtitle')}</p>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">{t('contact.info')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-blue-600" size={24} />
                  <div className="text-gray-700 hover:text-blue-600 text-lg block">
                      +86-18576639259
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-600" size={24} />
                  <div>
                    <a
                      href="tel:+86-18576639259"
                      className="text-gray-700 hover:text-blue-600 text-lg block"
                      aria-label={t('contact.phone')}
                    >
                      +86-18576639259
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-600" size={24} />
                  <a
                    href="mailto:wendian1989@gmail.com"
                    className="text-gray-700 hover:text-blue-600 text-lg"
                    aria-label={t('contact.email')}
                  >
                    wendian1989@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWeixin className="text-blue-600" size={24} />
                  <div>
                    <span className="text-gray-700 text-lg block">{t('contact.WeChat')}: devendian</span>
                    <span className="text-gray-700 text-lg block mt-1">{t('contact.WeChat')}: Dewygreens</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-blue-600" size={24} />
                  <span className="text-gray-700 text-lg">
                    {t('contact.address')}
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 text-lg">{t('contact.inquiry')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 静态地图 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">{t('contact.map')}</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={mapImage}
                alt={mapAlt}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="text/javascript"
        async
        src="https://embed.tawk.to/68386c24ff68c4190ac35a80/1ise6cs8i"
        charSet="UTF-8"
        crossOrigin="*"
      ></script>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  };
}