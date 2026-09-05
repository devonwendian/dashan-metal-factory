import { useTranslation } from 'next-i18next';
import { getProductSpecRows } from '@/data/product-specs';

const SPEC_HEADING = {
  zh: '案例参数',
  en: 'Case details',
  ja: '事例仕様',
  es: 'Detalles del caso',
  ko: '사례 사양',
};

export default function ProductCaseSpecs({ productId, locale }) {
  const { t } = useTranslation('product-detail');
  const rows = getProductSpecRows(productId, locale);
  const tableRows = rows.filter((row) => row.key !== 'description');
  const description = rows.find((row) => row.key === 'description')?.value;

  if (!rows.length) return null;

  return (
    <section className="mb-6" aria-labelledby="case-specs-heading">
      <h2 id="case-specs-heading" className="text-base font-semibold text-gray-900 mb-3">
        {t('spec_heading', { defaultValue: SPEC_HEADING[locale] || SPEC_HEADING.en })}
      </h2>
      {tableRows.length > 0 && (
        <dl className="divide-y divide-gray-200 overflow-hidden rounded-md border border-gray-200 bg-white">
          {tableRows.map(({ key, value }) => (
            <div
              key={key}
              className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[7.5rem_1fr] sm:gap-4 sm:items-start"
            >
              <dt className="text-sm font-medium text-gray-500">{t(`spec_${key}`)}</dt>
              <dd className="text-gray-900 whitespace-pre-wrap">{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {description && (
        <p className="mt-3 text-gray-700 leading-relaxed whitespace-pre-wrap">{description}</p>
      )}
    </section>
  );
}
