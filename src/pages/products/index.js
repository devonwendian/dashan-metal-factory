import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import productListData from '@/data/product-list-data';

// 示例产品数据（实际项目中从 API 或 CMS 获取）
const categories = ['All', 'Metal Spinning', 'Metal Deep Drawing'];

const allData = [...productListData.metalSpinning, ...productListData.metalDeepDrawing];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export const metadata = {
  title: 'Our Products - Your Factory',
  description: 'Explore a wide range of high-quality products manufactured by our factory, including electronics, machinery, and textiles.',
};

export default function ProductsPage() {
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 筛选产品
  const filteredProducts =
    selectedCategory === 'All'
      ? allData
      : allData.filter((product) => product.category.includes(selectedCategory));

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Products
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 左侧分类导航 */}
          <nav
            className="md:w-1/4"
            aria-label="Product categories"
          >
            {/* 移动端下拉菜单 */}
            <div className="md:hidden">
              <label htmlFor="category-select" className="sr-only">
                Select Category
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* 桌面端分类列表 */}
            <ul className="hidden md:block space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-current={selectedCategory === category ? 'true' : 'false'}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* 右侧产品列表 */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/products/${product.product_id}`} prefetch={false}>
                    <div className="relative w-full aspect-square">
                      <Image
                        src={product.images[1]}
                        alt={`${product.name} product image`}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900 truncate">
                        {product.name}
                      </h2>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-600 mt-8">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}