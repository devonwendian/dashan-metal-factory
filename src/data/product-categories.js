/**
 * Product list category routes (SEO-friendly, refresh-safe).
 * Static paths under /products/* take precedence over [product_id].
 */
import productListData from '@/data/product-list-data';

export const PRODUCT_CATEGORIES = {
  'deep-drawing': {
    slug: 'deep-drawing',
    path: '/products/deep-drawing',
    /** Matches deep draw + related stamping (same product bucket). */
    matchCategories: ['Metal Deep Drawing Parts', 'Metal Stamping Parts'],
    dataKey: 'metalDeepDrawing',
    titleKey: 'title_deep_drawing',
    descriptionKey: 'description_deep_drawing',
    h1Key: 'h1_deep_drawing',
    tabKey: 'tab_deep_drawing',
    introKey: 'intro_deep_drawing',
    ogImage: '/images/workshop-areas/deep-drawing-1.jpeg',
  },
  'metal-spinning': {
    slug: 'metal-spinning',
    path: '/products/metal-spinning',
    matchCategories: ['Metal Spinning Parts'],
    dataKey: 'metalSpinning',
    titleKey: 'title_metal_spinning',
    descriptionKey: 'description_metal_spinning',
    h1Key: 'h1_metal_spinning',
    tabKey: 'tab_metal_spinning',
    introKey: 'intro_metal_spinning',
    ogImage: '/images/workshop-areas/cnc-spinning-1.jpeg',
  },
};

export const CATEGORY_ORDER = ['deep-drawing', 'metal-spinning'];

export function getProductsForCategory(slug) {
  const config = PRODUCT_CATEGORIES[slug];
  if (!config) return [];
  if (config.dataKey === 'metalSpinning') {
    return productListData.metalSpinning;
  }
  return productListData.metalDeepDrawing;
}

/** List URL for a product's primary process category (for breadcrumbs / back). */
export function getCategoryPathForProduct(product) {
  if (!product?.category) return PRODUCT_CATEGORIES['deep-drawing'].path;
  if (product.category.includes('Metal Spinning Parts')) {
    return PRODUCT_CATEGORIES['metal-spinning'].path;
  }
  return PRODUCT_CATEGORIES['deep-drawing'].path;
}

export function getCategorySlugForProduct(product) {
  if (product?.category?.includes('Metal Spinning Parts')) return 'metal-spinning';
  return 'deep-drawing';
}
