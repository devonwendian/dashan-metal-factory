import { useTranslation } from 'next-i18next';
const ManufacturingProcessesVideos = () => {
  const { t, i18n } = useTranslation('home');
  const videos = [
    {
      title: t('Large-Scale Metal Deep Drawing Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114529430212810&bvid=BV1VsJGzWEG2&cid=30028662923&p=1&danmaku=0&autoplay=0', // 替换为实际 Bilibili 嵌入链接
      youtubeUrl: 'https://www.youtube.com/embed/C2l17ViCqTg?si=a0pqmBOST9wBlEHh', // 替换为实际 YouTube 嵌入链接
    },
    {
      title: t('Aluminum Spinning Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114529547588586&bvid=BV1SaJGzmEpH&cid=30029316953&p=1&danmaku=0&autoplay=0', // 替换为实际 Bilibili 嵌入链接
      youtubeUrl: 'https://www.youtube.com/embed/IvSlQ8NH2Vo?si=8Go4-fKV3ddBkfz7', // 替换为实际 YouTube 嵌入链接
    },
    {
      title: t('Copper Spinning Manufacturing Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114526611707093&bvid=BV14eJgzzEKg&cid=30017652996&p=1&danmaku=0&autoplay=0', // 替换为实际 Bilibili 嵌入链接
      youtubeUrl: 'https://www.youtube.com/embed/DsPXa_2Vp5U?si=Mo4R-pcgzpzGT14x', // 替换为实际 YouTube 嵌入链接
    },
    {
      title: t('Aluminum Stamping Parts Punching Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114526460645555&bvid=BV157JgznEDz&cid=30017129695&p=1&danmaku=0&autoplay=0', // 替换为实际 Bilibili 嵌入链接
      youtubeUrl: 'https://www.youtube.com/embed/IUyKPLtU51I?si=Mo4R-pcgzpzGT14x', // 替换为实际 YouTube 嵌入链接
    },
  ];
  // 简单地区检测（实际需结合后端或 CDN 地理定位）
  // const isChinaUser = typeof window !== 'undefined' && navigator.language.includes('zh');
  const isChinaUser = i18n.language.includes('zh'); // 判断当前语言是否为中文
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('Our Manufacturing Processes')}
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
                  // Bilibili 嵌入（国内用户）
                  <iframe
                    src={video.bilibiliEmbedUrl}
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
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcessesVideos;