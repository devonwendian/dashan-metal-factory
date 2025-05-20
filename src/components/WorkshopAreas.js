import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const WorkshopAreas = () => {
  const { t } = useTranslation('home');
// 加工区域数据（可替换为 API 或 CMS 数据）
const areas = [
  {
    id: 1,
    title: t('Deep Drawing Area'),
    description: t('Maximum Processing Length: 2100mm'),
    images: [
      '/images/workshop-areas/deep-drawing-1.jpeg',
      '/images/workshop-areas/deep-drawing-2.jpeg',
    ],
  },
  {
    id: 2,
    title: t('CNC Spinning Area'),
    description: t('Maximum Processing Diameter: 1800mm'),
    images: [
      '/images/workshop-areas/cnc-spinning-1.jpeg',
      '/images/workshop-areas/cnc-spinning-2.jpeg',
    ],
  },
  {
    id: 3,
    title: t('Stamping Area'),
    images: [
      '/images/workshop-areas/stamping-area-1.jpeg',
      '/images/workshop-areas/stamping-area-2.jpeg',
    ],
  },
  {
    id: 4,
    title: t('Manual Spinning Area'),
    images: [
      '/images/workshop-areas/manual-spinning.jpeg',
    ],
  },
  {
    id: 5,
    title: t('Punching Area'),
    images: [
      '/images/workshop-areas/punching-area.jpeg',
    ],
  },
];
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          {t('Workshop Areas')}
        </h2>

        {/* 加工区域模块 */}
        <div className="space-y-12">
          {areas.map((area) => (
            <article
              key={area.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* 左侧图片区域 */}
              <div className="md:w-2/3 flex flex-col gap-4 p-4">
                {area.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-64 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                    />
                  </div>
                ))}
              </div>

              {/* 右侧文字区域，垂直居中对齐 */}
              <div className="md:w-1/3 p-6 flex items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {area.title}
                  </h3>
                  {area.description && <p className="text-gray-600 leading-relaxed">{area.description}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopAreas;