'use client';

import Image from 'next/image';

// 加工区域数据（可替换为 API 或 CMS 数据）
const areas = [
  {
    id: 1,
    title: 'Deep Drawing Area',
    description: 'Specialized in large-scale metal drawing processes with advanced hydraulic presses.',
    images: [
      '/images/workshop-areas/deep-drawing-1.jpeg',
      '/images/workshop-areas/deep-drawing-2.jpeg',
    ],
    altTexts: ['Drawing area with advanced metal drawing machines', 'Close-up of drawing process'],
  },
  {
    id: 2,
    title: 'CNC Spinning Area',
    description: 'Equipped with large-scale CNC spinning machines for precision metal forming.',
    images: [
      '/images/workshop-areas/cnc-spinning-1.jpeg',
      '/images/workshop-areas/cnc-spinning-2.jpeg',
    ],
    altTexts: ['CNC spinning area with precision equipment', 'CNC spinning machine in operation'],
  },
  {
    id: 3,
    title: 'Stamping Area',
    description: 'Skilled craftsmen perform traditional metal spinning with expertise.',
    images: [
      '/images/workshop-areas/stamping-area-1.jpeg',
      '/images/workshop-areas/stamping-area-2.jpeg',
    ],
    altTexts: ['Manual spinning area with skilled workers', 'Traditional spinning technique'],
  },
  {
    id: 4,
    title: 'Manual Spinning Area',
    description: 'High-efficiency punching for precise metal fabrication with advanced machines.',
    images: [
      '/images/workshop-areas/manual-spinning.jpeg',
    ],
    altTexts: ['Punching area with advanced punching machines', 'Punching process in action'],
  },
  {
    id: 5,
    title: 'Punching Area',
    description: 'High-efficiency punching for precise metal fabrication with advanced machines.',
    images: [
      '/images/workshop-areas/punching-area.jpeg',
    ],
    altTexts: ['Punching area with advanced punching machines', 'Punching process in action'],
  },
];

const WorkshopAreas = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Workshop Areas
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
                      alt={area.altTexts[index]}
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Place',
            name: 'Dongguan Huangjiang Dashan Metal Products Factory Workshop',
            description: 'Workshop areas including drawing, CNC spinning, manual spinning, and punching.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dongguan',
              addressRegion: 'Guangdong',
              addressCountry: 'CN',
            },
            hasMap: 'https://maps.google.com/?q=Dashan+Metal+Factory,Dongguan', // 替换为实际地址
            containsPlace: areas.map((area) => ({
              '@type': 'Place',
              name: area.title,
              description: area.description,
            })),
          }),
        }}
      />
    </section>
  );
};

export default WorkshopAreas;