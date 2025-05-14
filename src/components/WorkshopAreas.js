'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 加工区域数据（可替换为 API 或 CMS 数据）
const areas = [
  {
    id: 1,
    title: 'Drawing Area',
    description: 'Specialized in large-scale metal drawing processes.',
    imageUrl: '/images/workshop-areas/deep-drawing-1.jpeg',
    altText: 'Drawing area with advanced metal drawing machines',
    link: '/workshop/drawing',
  },
  {
    id: 2,
    title: 'CNC Spinning Area',
    description: 'Equipped with large-scale CNC spinning machines.',
    imageUrl: '/images/workshop-areas/deep-drawing-1.jpeg',
    altText: 'CNC spinning area with precision equipment',
    link: '/workshop/cnc-spinning',
  },
  {
    id: 3,
    title: 'Manual Spinning Area',
    description: 'Skilled craftsmen for traditional metal spinning.',
    imageUrl: '/images/workshop-areas/deep-drawing-1.jpeg',
    altText: 'Manual spinning area with skilled workers',
    link: '/workshop/manual-spinning',
  },
  {
    id: 4,
    title: 'Punching Area',
    description: 'High-efficiency punching for precise metal fabrication.',
    imageUrl: '/images/workshop-areas/deep-drawing-1.jpeg',
    altText: 'Punching area with advanced punching machines',
    link: '/workshop/punching',
  },
];

const WorkshopAreas = () => {
  const router = useRouter();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Workshop Areas
        </h2>

        {/* 加工区域网格 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {areas.map((area) => (
            <div
              key={area.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => router.push(area.link)}
            >
              <figure className="relative w-full h-64">
                <Image
                  src={area.imageUrl}
                  alt={area.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </div>
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