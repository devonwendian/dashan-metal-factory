'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const LargeMetalProducts = () => {
  const { t } = useTranslation('home');

  const largeMetalProducts = [
    {
      id: 1,
      imageUrl: '/images/products/product140/product1.jpeg',
      altText: t('Aluminum Bar Table Spinning Parts'),
      title: t('Aluminum Bar Table Spinning Parts'),
    },
    {
      id: 2,
      imageUrl: '/images/products/product142/product1.jpeg',
      altText: t('Aluminum Automatic Cooking Pot Spinning Part'),
      title: t('Aluminum Automatic Cooking Pot Spinning Part'),
    },
    {
      id: 3,
      imageUrl: '/images/products/product66/product1.jpeg',
      altText: t('Aluminum Industrial Lampshade Deep Drawing Parts'),
      title: t('Aluminum Industrial Lampshade Deep Drawing Parts'),
    },
    {
      id: 4,
      imageUrl: '/images/products/product190/product1.jpeg',
      altText: t('Stainless Steel Industrial Washing Machine Housing Deep Drawing Parts'),
      title: t('Stainless Steel Industrial Washing Machine Housing Deep Drawing Parts'),
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('Large-Scale Metal Products')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {largeMetalProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/large/${product.id}`}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              aria-label={`View details of ${product.title}`}
            >
              <figure className="relative w-full h-0 pb-[133.33%]">
                <Image
                  src={product.imageUrl}
                  alt={product.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LargeMetalProducts;