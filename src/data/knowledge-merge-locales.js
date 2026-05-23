import { KNOWLEDGE_JA_ES } from './knowledge-ja-es';
import { KNOWLEDGE_KO } from './knowledge-ko';

const EXTRA_SOURCES = [KNOWLEDGE_JA_ES, KNOWLEDGE_KO];

const LOCALE_KEYS = ['ja', 'es', 'ko'];

function mergeFields(base, ...extraFieldObjects) {
  const merged = { ...base };
  for (const extraField of extraFieldObjects) {
    if (!extraField) continue;
    for (const key of LOCALE_KEYS) {
      if (extraField[key]) merged[key] = extraField[key];
    }
  }
  return merged;
}

export function mergeKnowledgeArticleLocales(rows) {
  return rows.map((row) => {
    const extras = EXTRA_SOURCES.map((src) => src[row.knowledge_id]).filter(Boolean);
    if (extras.length === 0) return row;

    const [first, ...rest] = extras;
    const titleExtras = rest.map((e) => e.title);
    const descExtras = rest.map((e) => e.description);
    const contentExtras = rest.map((e) => e.content);

    return {
      ...row,
      title: mergeFields(row.title, first.title, ...titleExtras),
      description: mergeFields(row.description, first.description, ...descExtras),
      content: mergeFields(row.content, first.content, ...contentExtras),
    };
  });
}
