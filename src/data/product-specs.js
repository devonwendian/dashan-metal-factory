/**
 * 产品详情补充字段（先填中文 zh）。
 *
 * 填写：只改对应产品引号里的中文。某字段留空 = 该语言页面不显示这一行。
 * 英文 / 日文 / 西语 / 韩语稍后翻译时，在 zh 旁边加 en / ja / es / ko 即可。
 *
 * 示例：
 *   material: { zh: '紫铜' },
 *   process: { zh: 'CNC 旋压' },
 *   description: { zh: '按客户图纸加工的非标件，具体尺寸以图纸为准。' },
 */

export const SPEC_FIELD_KEYS = [
  'dimensions',
  'material',
  'process',
  'surface',
  'application',
  'description',
];

const productSpecs = {
  // —— 金属旋压 ——
  'metal-spinning-product216': {
    // 铝合金机械配件数控旋压加工
    dimensions: { zh: '' },
    material: {
      zh: '5052铝合金',
      en: '5052 aluminum alloy',
      ja: '5052アルミニウム合金',
      es: 'Aleación de aluminio 5052',
      ko: '5052 알루미늄 합금',
    },
    process: {
      zh: '数控旋压+冲孔',
      en: 'CNC spinning + punching',
      ja: 'CNCスピニング＋パンチング',
      es: 'Hilado CNC + punzonado',
      ko: 'CNC 스피닝 + 펀칭',
    },
    surface: {
      zh: '抛光+阳极氧化',
      en: 'Polishing + anodizing',
      ja: '研磨＋陽極酸化',
      es: 'Pulido + anodizado',
      ko: '폴리싱 + 아노다이징',
    },
    application: {
      zh: '机械',
      en: 'Machinery',
      ja: '機械',
      es: 'Maquinaria',
      ko: '기계',
    },
    description: { zh: '' },
  },
  'metal-spinning-product214': {
    // 大半球形铝件旋压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product206': {
    // 工厂定制双层夹层黄铜杯子旋压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product191': {
    // 定制铝灯罩数控旋压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product202': {
    // 铝合金喇叭形数控旋压定制加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product40': {
    // 红铜蒸馏器旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product51': {
    // 红铜酒器旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product65': {
    // 铝制异形灯罩旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product88': {
    // 铝制壁灯灯罩旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product93': {
    // 红铜糖果盘旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product102': {
    // 铝制吊灯灯罩旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product110': {
    // 铝制台灯底座灯罩旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product122': {
    // 铝制烛台底座旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product127': {
    // 铝制机械外壳旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product128': {
    // 黄铜烛台底座旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product129': {
    // 铝制牛奶桶旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product138': {
    // 铝制吧台凳旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product139': {
    // 铁制机械旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product140': {
    // 铝制吧台桌旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product142': {
    // 铝制自动炒锅旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product155': {
    // 铝制吊灯灯罩旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product162': {
    // 铝制滤芯机壳体旋压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product197': {
    // 黄铜沙拉碗数控旋压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product13': {
    // 铝料茶叶罐数控旋压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-spinning-product69': {
    // 源头工厂定制铝料大型冰桶件数控旋压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },

  // —— 拉伸与冲压 ——
  'metal-stamping-product239': {
    // 201不锈钢斜面电器罩壳异形拉伸加工
    dimensions: { zh: '' },
    material: {
      zh: '201不锈钢',
      en: '201 stainless steel',
      ja: '201ステンレス鋼',
      es: 'Acero inoxidable 201',
      ko: '201 스테인리스강',
    },
    process: {
      zh: '拉伸+退火+冲孔+激光切割',
      en: 'Deep drawing + annealing + punching + laser cutting',
      ja: '深絞り＋焼なまし＋パンチング＋レーザー切断',
      es: 'Embutición + recocido + punzonado + corte láser',
      ko: '딥 드로잉 + 어닐링 + 펀칭 + 레이저 커팅',
    },
    surface: {
      zh: '喷砂',
      en: 'Sandblasting',
      ja: 'サンドブラスト',
      es: 'Granallado',
      ko: '샌드블라스트',
    },
    application: {
      zh: '电器、电器外壳',
      en: 'Electrical appliances, appliance housings',
      ja: '家電、家電筐体',
      es: 'Electrodomésticos, carcasas de aparatos',
      ko: '가전, 가전 하우징',
    },
    description: { zh: '' },
  },
  'metal-stamping-product220': {
    // 不锈钢四方盒外壳电器配件拉伸加工
    dimensions: { zh: '' },
    material: {
      zh: '316不锈钢',
      en: '316 stainless steel',
      ja: '316ステンレス鋼',
      es: 'Acero inoxidable 316',
      ko: '316 스테인리스강',
    },
    process: {
      zh: '拉伸+退火+压形+激光切割+拉铆+焊接+压铆',
      en: 'Deep drawing + annealing + forming + laser cutting + pull riveting + welding + press riveting',
      ja: '深絞り＋焼なまし＋成形＋レーザー切断＋ブラインドリベット＋溶接＋圧入リベット',
      es: 'Embutición + recocido + conformado + corte láser + remachado por tracción + soldadura + remachado por presión',
      ko: '딥 드로잉 + 어닐링 + 성형 + 레이저 커팅 + 풀 리베팅 + 용접 + 압입 리베팅',
    },
    surface: {
      zh: '喷绝缘漆',
      en: 'Insulating paint',
      ja: '絶縁塗装',
      es: 'Pintura aislante',
      ko: '절연 도장',
    },
    application: {
      zh: '水下设备',
      en: 'Underwater equipment',
      ja: '水中機器',
      es: 'Equipos submarinos',
      ko: '수중 장비',
    },
    description: { zh: '' },
  },
  'metal-stamping-product208': {
    // 汽车网格板保护罩冲压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-stamping-product209': {
    // 大型长椭圆铝灯罩拉伸加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product204': {
    // 工厂定制拖拉机侧板冲压加工
    dimensions: { zh: '' },
    material: {
      zh: '铁',
      en: 'Iron',
      ja: '鉄',
      es: 'Hierro',
      ko: '철',
    },
    process: {
      zh: '拉伸',
      en: 'Deep drawing',
      ja: '深絞り',
      es: 'Embutición',
      ko: '딥 드로잉',
    },
    surface: {
      zh: '打磨+喷粉',
      en: 'Grinding + powder coating',
      ja: '研磨＋粉体塗装',
      es: 'Rectificado + recubrimiento en polvo',
      ko: '연마 + 분체도장',
    },
    application: {
      zh: '机械配件',
      en: 'Machinery parts',
      ja: '機械部品',
      es: 'Piezas de maquinaria',
      ko: '기계 부품',
    },
    description: { zh: '' },
  },
  'metal-stamping-product193': {
    // 定制灯饰配件吸顶盘冲压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-stamping-product217': {
    // 工厂定制不锈钢机械配件盖子拉伸加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-stamping-product158': {
    // 机械配件桶冲压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-stamping-product198': {
    // 不锈钢盖子冲压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product48': {
    // 不锈钢外壳冲压件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product66': {
    // 铝制工业灯罩拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product89': {
    // 铝制大型交换机外壳拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product123': {
    // 不锈钢烘焙托盘底座拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product134': {
    // 铁制洗衣机底座拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product157': {
    // 铝制储物桶拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product189': {
    // 铝制多孔机械拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-deep-drawing-product190': {
    // 不锈钢工业洗衣机外壳拉伸件
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-stamping-product203': {
    // 源头工厂定制铝料长条方形地漏件冲压拉伸加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
  'metal-stamping-product187': {
    // 定制不锈钢桶冲压加工
    dimensions: { zh: '' },
    material: { zh: '' },
    process: { zh: '' },
    surface: { zh: '' },
    application: { zh: '' },
    description: { zh: '' },
  },
};

/**
 * 当前语言下已填写的规格行。不回退到其他语言，避免英文页露出中文。
 * @param {string} productId
 * @param {string} locale
 * @returns {{ key: string, value: string }[]}
 */
export function getProductSpecRows(productId, locale) {
  const specs = productSpecs[productId];
  if (!specs || !locale) return [];

  const rows = [];
  for (const key of SPEC_FIELD_KEYS) {
    const raw = specs[key] && specs[key][locale];
    const value = typeof raw === 'string' ? raw.trim() : '';
    if (value) rows.push({ key, value });
  }
  return rows;
}

/**
 * 用已填参数拼 meta description；当前语言没有参数时返回空字符串。
 * @param {string} productId
 * @param {string} locale
 * @param {string} productName
 */
export function buildSpecDescription(productId, locale, productName) {
  const rows = getProductSpecRows(productId, locale);
  if (!rows.length) return '';

  const byKey = Object.fromEntries(rows.map((row) => [row.key, row.value]));
  const sep = locale === 'zh' || locale === 'ja' ? '，' : ', ';
  const parts = [productName];
  for (const key of ['material', 'process', 'surface', 'application', 'dimensions']) {
    if (byKey[key]) parts.push(byKey[key]);
  }
  let desc = parts.join(sep);
  if (byKey.description) {
    desc = `${desc}${sep === '，' ? '。' : '. '}${byKey.description}`;
  }
  return desc.length > 160 ? `${desc.slice(0, 157)}…` : desc;
}

export default productSpecs;
