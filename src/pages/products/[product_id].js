import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'next-i18next';
import productListData from '@/data/product-list-data';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactUs from '@/components/ContactUs';
import Head from 'next/head';

const allData = [...productListData.metalSpinning, ...productListData.metalDeepDrawing];

export async function getStaticPaths() {
  const locales = ['zh', 'en'];
  const paths = [];

  if (Array.isArray(allData)) {
    for (const product of allData) {
      for (const locale of locales) {
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
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <div className="text-center py-12">{t('product_not_found')}</div>;
  }
  const baseUrl = 'https://dsmetalstamping.com';

  const canonicalUrl = baseUrl + (i18n.language === 'zh' ? `/zh/products/${product.product_id}` : `/products/${product.product_id}`);

  return (
    <>
      <Head>
        <title>{t('title', {ns: 'product-detail', productName: t(product.name, {ns: 'product-list'})})}</title>
        <meta name="description" content={t('description', {ns: 'product-detail', productName: t(product.name, {ns: 'product-list'})})} />
        <link rel="canonical" href={canonicalUrl} />
        <link 
          rel="alternate" 
          hreflang="zh" 
          href={`${baseUrl}/zh/products/${product.product_id}`} 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href={`${baseUrl}/products/${product.product_id}`} 
        />
        <link 
          rel="alternate" 
          hreflang="x-default"
          href={`${baseUrl}/products/${product.product_id}`} 
        />
      </Head>
      <Header />
      <h1 class="sr-only">{t('detail-h1', {ns: 'product-detail', productName: t(product.name, {ns: 'product-list'})})}</h1>
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
                <Link href="/products" className="hover:text-blue-600">
                  {t('products', {ns: 'common'})}
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
                  alt={`${product.name} main image`}
                  width={600} // 明确宽度
                  height={600} // 明确高度，假设图片接近正方形
                  className="w-full h-auto object-contain" // 使用 object-contain 确保完整显示
                  priority // 首屏关键图片
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
                      alt={`${product.name} thumbnail ${index + 1}`}
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
                      title={`${product.name} video`}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 右侧：产品信息 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t(product.name, {ns: 'product-list'})}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}