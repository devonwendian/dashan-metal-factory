import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'next-i18next';
import productListData from '@/data/product-list-data';
import { useRouter } from 'next/router';

const allData = [...productListData.metalSpinning, ...productListData.metalDeepDrawing];

// 动态生成静态路径
// export async function getStaticPaths() {
//   const paths = products.map((product) => ({
//     params: { slug: product.slug },
//   }));
//   return { paths, fallback: false };
// }
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }

export async function getStaticPaths() {
  const locales = ['zh', 'en']; // 支持的语言
  const paths = [];

  // 确保 products 是一个数组
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

  console.log('----------test');
  console.log(paths);
  return {
    paths,
    fallback: false, // 未预渲染的页面返回 404
  };
}


// 获取静态道具
export async function getStaticProps({ params, locale }) {
  const product = allData.find((p) => p.product_id === params.product_id);
  return { props: { product,  } };
}

// 生成 SEO 元数据
// export const metadata = ({ product }) => ({
//   title: `${product.name} - Your Factory`,
//   description: product.description,
//   openGraph: {
//     title: `${product.name} - Your Factory`,
//     description: product.description,
//     images: [{ url: product.image[0] }],
//   },
// });

export default function ProductDetail({ product }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  if (!product) {
    return <div className="text-center py-12">{t('product_not_found')}</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 面包屑导航 */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  {t('home')}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:text-blue-600">
                  {t('products')}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{product.name}</li>
            </ol>
          </nav>

          {/* 产品详情 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左侧：图片和视频 */}
            <div>
              {/* 主图 */}
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={selectedImage}
                  alt={`${product.name} main image`}
                  fill
                  className="object-cover"
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* 缩略图 */}
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.images.map((img, index) => (
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-sm text-gray-600 mb-2">
                {t('category')}: {product.category[0]}
              </p>
              {/* <p className="text-gray-700 mb-6">{product.description}</p> */}

              {/* CTA 按钮 */}
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                {t('contact_us')}
              </Link>

              {/* Schema.org 结构化数据 */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: product.name,
                    image: product.images[0],
                    // description: product.description,
                    // category: product.category,
                    brand: {
                      '@type': 'Brand',
                      name: 'Your Factory',
                    },
                  }),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}