'use client';

import Image from 'next/image';

// 视频数据（优酷嵌入链接需替换为实际 URL，YouTube 链接供国外用户）
const videos = [
  {
    id: 1,
    title: 'Metal Spinning Process',
    description: 'High-precision metal spinning for industrial components.',
    youkuEmbedUrl: 'https://www.youtube.com/embed/3E800wgxPJE?si=8Go4-fKV3ddBkfz7', // 替换为优酷嵌入链接
    youtubeUrl: 'https://www.youtube.com/embed/3E800wgxPJE?si=8Go4-fKV3ddBkfz7', // 替换为 YouTube 嵌入链接
    posterUrl: '/images/optimized/metal-spinning-poster.webp',
    altText: 'Metal spinning process in factory workshop',
  },
  {
    id: 2,
    title: 'Metal Drawing Process',
    description: 'Advanced metal drawing for seamless production.',
    youkuEmbedUrl: 'https://www.youtube.com/embed/3E800wgxPJE?si=8Go4-fKV3ddBkfz7', // 替换为优酷嵌入链接
    youtubeUrl: 'https://www.youtube.com/embed/3E800wgxPJE?si=8Go4-fKV3ddBkfz7', // 替换为 YouTube 嵌入链接
    posterUrl: '/images/optimized/metal-drawing-poster.webp',
    altText: 'Metal drawing process for industrial parts',
  },
  {
    id: 3,
    title: 'Punching Process',
    description: 'Efficient punching for precise metal fabrication.',
    youkuEmbedUrl: 'https://www.youtube.com/embed/3E800wgxPJE?si=8Go4-fKV3ddBkfz7', // 替换为优酷嵌入链接
    youtubeUrl: 'https://www.youtube.com/embed/3E800wgxPJE?si=8Go4-fKV3ddBkfz7', // 替换为 YouTube 嵌入链接
    posterUrl: '/images/optimized/punching-poster.webp',
    altText: 'Punching process for metal sheets in factory',
  },
];

const CraftVideos = () => {
  // 简单地区检测（实际需结合后端或 CDN 地理定位）
  const isChinaUser = typeof window !== 'undefined' && navigator.language.includes('zh');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Craftsmanship
        </h2>

        {/* 视频网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <figure className="relative w-full h-64">
                {isChinaUser ? (
                  // 优酷嵌入（国内用户）
                  <iframe
                    src={video.youkuEmbedUrl}
                    title={video.title}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  // YouTube 嵌入（国外用户）
                  <iframe
                    src={video.youtubeUrl}
                    title={video.title}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
                {/* 封面图（仅用于 SEO 和初始加载） */}
                {/* <Image
                  src={video.posterUrl}
                  alt={video.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  width={600}
                  height={400}
                  quality={75}
                /> */}
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
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
            '@type': 'ItemList',
            itemListElement: videos.map((video, index) => ({
              '@type': 'VideoObject',
              position: index + 1,
              name: video.title,
              description: video.description,
              thumbnailUrl: video.posterUrl,
              contentUrl: isChinaUser ? video.youkuEmbedUrl : video.youtubeUrl,
              uploadDate: '2025-05-06',
              duration: 'PT1M',
            })),
          }),
        }}
      />
    </section>
  );
};

export default CraftVideos;