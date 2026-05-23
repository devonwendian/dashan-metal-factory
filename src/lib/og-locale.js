/** BCP47-style tags for Open Graph */
export const OG_LOCALE_BY_LANG = {
  en: 'en_US',
  zh: 'zh_CN',
  ja: 'ja_JP',
  es: 'es_ES',
  ko: 'ko_KR',
};

export function ogLocaleForLang(lang) {
  return OG_LOCALE_BY_LANG[lang] || 'en_US';
}
