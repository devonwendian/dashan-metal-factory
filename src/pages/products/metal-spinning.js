import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductCategoryList from '@/components/ProductCategoryList';

export default function MetalSpinningProductsPage() {
  return <ProductCategoryList categorySlug="metal-spinning" />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'product-list'])),
    },
  };
}
