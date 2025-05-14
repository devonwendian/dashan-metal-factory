'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const MainProducts = () => {
  const { t } = useTranslation('home');

  const products = [
    {
      id: 1,
      imageUrl: '/images/main-products/product1.jpg',
      altText: t('Aluminum Deep Drawing Parts'),
      title: t('Aluminum Deep Drawing Parts'),
    },
    {
      id: 2,
      imageUrl: '/images/main-products/product2.jpg',
      altText: t('Aluminum Spinning Parts'),
      title: t('Aluminum Spinning Parts'),
    },
    {
      id: 3,
      imageUrl: '/images/main-products/product3.jpg',
      altText: t('Copper Spinning Part'),
      title: t('Copper Spinning Parts'),
    },
    {
      id: 4,
      imageUrl: '/images/main-products/product4.jpg',
      altText: t('Stainless Steel Stamping Parts'),
      title: t('Stainless Steel Stamping Parts'),
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          {t('Main Products')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              aria-label={`View details of ${product.title}`}
            >
              <figure className="relative w-full h-64">
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
                <h3 className="text-xl font-semibold text-gray-800">
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

export default MainProducts;