import { KNOWLEDGE_JA_ES } from './knowledge-ja-es';

export function mergeKnowledgeArticleLocales(rows) {
  return rows.map((row) => {
    const ex = KNOWLEDGE_JA_ES[row.knowledge_id];
    if (!ex) return row;
    return {
      ...row,
      title: { ...row.title, ja: ex.title.ja, es: ex.title.es },
      description: { ...row.description, ja: ex.description.ja, es: ex.description.es },
      content: { ...row.content, ja: ex.content.ja, es: ex.content.es },
    };
  });
}
