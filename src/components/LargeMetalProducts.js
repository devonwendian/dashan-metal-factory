import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const LargeMetalProducts = () => {
  const { t } = useTranslation('home');

  const largeMetalProducts = [
    {
      product_id: 'metal-spinning-product140',
      imageUrl: '/images/products/metal-spinning/product140/metal-spinning-head.jpg',
      title: 'Aluminum Bar Table Spinning Parts',
    },
    {
      product_id: 'metal-spinning-product142',
      imageUrl: '/images/products/metal-spinning/product142/metal-spinning-head.jpg',
      title: 'Aluminum Automatic Cooking Pot Spinning Part',
    },
    {
      product_id: 'metal-deep-drawing-product66',
      imageUrl: '/images/products/metal-deep-drawing/product66/metal-deep-drawing-head.jpg',
      title: 'Aluminum Industrial Lampshade Deep Drawing Parts',
    },
    {
      product_id: 'metal-deep-drawing-product190',
      imageUrl: '/images/products/metal-deep-drawing/product190/metal-deep-drawing-1.jpeg',
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
              key={product.product_id}
              href={`/products/${product.product_id}`}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              aria-label={`View details of ${product.title}`}
            >
              <figure className="relative w-full h-0 pb-[133.33%]">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {t(product.title)}
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