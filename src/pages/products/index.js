import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import productListData from '@/data/product-list-data';
// import ContactUs from '@/components/ContactUs';

const categories = ['All', 'Metal Spinning Parts', 'Metal Deep Drawing Parts'];
const allData = [...productListData.metalSpinning, ...productListData.metalDeepDrawing];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'product-list'])),
    },
  };
}

export default function ProductsPage() {
  const { t, i18n } = useTranslation(['common', 'product-list']);
  const router = useRouter();
  const { locale } = router;
  const currentPage = parseInt(router.query.page || '1', 10);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const productsPerPage = 9;

  // 筛选产品
  const filteredProducts =
    selectedCategory === 'All'
      ? allData
      : allData.filter((product) => product.category.includes(selectedCategory));

  // 计算分页
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // 处理分页导航
  const handlePageChange = (page) => {
    router.push(
      {
        pathname: '/products',
        query: { page },
      },
      undefined,
      { shallow: true, locale }
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const baseUrl = 'https://dsmetalstamping.com'; // 替换为实际域名

  const locales = {
    zh: '/zh/products',
  };

  const canonicalUrl = baseUrl + (locales[i18n.language] ? locales[i18n.language] : '/products');

  return (
    <>
      <Head>
        <title>{t('title', {ns: 'product-list'})}</title>
        <meta name="description" content={t('description', {ns: 'product-list'})} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="zh" href="https://dsmetalstamping.com/zh/products" />
        <link rel="alternate" hreflang="en" href="https://dsmetalstamping.com/products" />
        <link rel="alternate" hreflang="x-default" href="https://dsmetalstamping.com/products" />
        {currentPage > 1 && (
          <link
            rel="prev"
            href={`${baseUrl}/${locale}/products${currentPage === 2 ? '' : `?page=${currentPage - 1}`}`}
          />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`${baseUrl}/${locale}/products?page=${currentPage + 1}`} />
        )}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/en/products${currentPage > 1 ? `?page=${currentPage}` : ''}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${baseUrl}/en/products${currentPage > 1 ? `?page=${currentPage}` : ''}`}
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href={`${baseUrl}/zh/products${currentPage > 1 ? `?page=${currentPage}` : ''}`}
        />
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面标题 */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t('Product List', {ns: 'product-list'})}
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* 左侧分类导航 */}
            <nav className="md:w-1/4" aria-label={t('product_categories', 'Product categories')}>
              {/* 移动端下拉菜单 */}
              <div className="md:hidden">
                <label htmlFor="category-select" className="sr-only">
                  {t('select_category', 'Select Category')}
                </label>
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    handlePageChange(1); // 重置到第一页
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {t(category, { ns: 'product-list'})}
                    </option>
                  ))}
                </select>
              </div>

              {/* 桌面端分类列表 */}
              <ul className="hidden md:block space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        handlePageChange(1); // 重置到第一页
                      }}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      aria-current={selectedCategory === category ? 'true' : 'false'}
                    >
                      {t(category, {ns: "product-list"})}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 右侧产品列表 */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <article
                    key={product.product_id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link href={`/products/${product.product_id}`} prefetch={false}>
                      <div className="relative w-full aspect-square">
                        <Image
                          src={product.images[5] || product.images[0]}
                          alt={t(product.name, { ns: 'product-list' })}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900 truncate">
                          {t(product.name, { ns: 'product-list' })}
                        </h2>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
              {paginatedProducts.length === 0 && (
                <p className="text-center text-gray-600 mt-8">
                  {t('no_products', 'No products found in this category.')}
                </p>
              )}

              {/* 分页导航 */}
              {totalPages > 1 && (
                <nav
                  className="mt-8 flex items-center justify-center space-x-3 sm:space-x-4"
                  aria-label={t('product_pagination', 'Product pagination')}
                >
                  {/* 移动端分页：仅显示 Previous、当前页、Next */}
                  <div className="flex items-center space-x-3 sm:hidden">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                      aria-label={t('previous_page', 'Previous page')}
                    >
                       {t('Previous', {ns: 'product-list'})}
                    </button>
                    <span className="text-gray-700 text-base font-medium">
                      {t('page_of', {
                        current: currentPage,
                        total: totalPages,
                        defaultValue: 'Page {{current}} of {{total}}',
                        ns: "product-list"
                      })}
                    </span>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                      aria-label={t('next_page', 'Next page')}
                    >
                     {t('Next', {ns: 'product-list'})}
                    </button>
                  </div>

                  {/* 桌面端分页：显示完整导航 */}
                  <div className="hidden sm:flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                      aria-label={t('previous_page', 'Previous page')}
                    >
                      {t('Previous', {ns: 'product-list'})}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-md text-base ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 min-w-[48px] min-h-[48px] border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 text-base"
                      aria-label={t('next_page', 'Next page')}
                    >
                      {t('Next', {ns: 'product-list'})}
                    </button>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}