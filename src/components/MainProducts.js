import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const mainProducts = [
  {
    product_id: 'metal-deep-drawing-product157',
    imageUrl: '/images/products/metal-deep-drawing/product157/metal-deep-drawing-head.jpg',
    title: 'Aluminum Deep Drawing Parts'
  },
  {
    product_id: 'metal-spinning-product138',
    imageUrl: '/images/products/metal-spinning/product138/metal-spinning-head.jpg',
    title: 'Aluminum Spinning Parts'
  },
  {
    product_id: 'metal-spinning-product51',
    imageUrl: '/images/products/metal-spinning/product51/metal-spinning-1.jpg',
    title: 'Copper Spinning Parts',
  },
  {
    product_id: 'metal-deep-drawing-product48',
    imageUrl: '/images/products/metal-deep-drawing/product48/metal-deep-drawing-head.jpg',
    title: 'Stainless Steel Stamping Parts',
  },
];

const MainProducts = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          {t('Main Products')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainProducts.map((product) => (
            <Link
              key={product.product_id}
              href={`/products/${product.product_id}`}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              aria-label={`View details of ${product.title}`}
            >
              <figure className="relative w-full aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={t(product.title)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
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

export default MainProducts;