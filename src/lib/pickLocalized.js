const FALLBACK_ORDER = ['en', 'zh', 'ja', 'es'];

/**
 * @param {Record<string, string>|undefined|null} record
 * @param {string} locale
 */
export function pickLocalized(record, locale) {
  if (!record || typeof record !== 'object') return '';
  if (typeof record[locale] === 'string' && record[locale]) return record[locale];
  for (const l of FALLBACK_ORDER) {
    if (typeof record[l] === 'string' && record[l]) return record[l];
  }
  const first = Object.values(record).find((v) => typeof v === 'string' && v);
  return first || '';
}
