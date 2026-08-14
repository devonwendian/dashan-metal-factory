import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductCategoryList from '@/components/ProductCategoryList';

export default function DeepDrawingProductsPage() {
  return <ProductCategoryList categorySlug="deep-drawing" />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'product-list'])),
    },
  };
}
