import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';

const ManufacturingProcessesVideos = () => {
  const { t, i18n } = useTranslation('home');
  const isChinaUser = i18n.language.includes('zh');
  
  const videos = [
    {
      title: t('Large-Scale Metal Deep Drawing Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114529430212810&bvid=BV1VsJGzWEG2&cid=30028662923&p=1&danmaku=0&autoplay=0',
      youtubeUrl: 'https://www.youtube.com/embed/C2l17ViCqTg?si=a0pqmBOST9wBlEHh',
      thumbnail: '/images/video-placeholder.png',
      description: t('Description of Large-Scale Metal Deep Drawing Process'),
    },
    {
      title: t('Aluminum Spinning Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114529547588586&bvid=BV1SaJGzmEpH&cid=30029316953&p=1&danmaku=0&autoplay=0',
      youtubeUrl: 'https://www.youtube.com/embed/IvSlQ8NH2Vo?si=8Go4-fKV3ddBkfz7',
      thumbnail: '/images/video-placeholder.png',
      description: t('Description of Aluminum Spinning Process'),
    },
    {
      title: t('Copper Spinning Manufacturing Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114526611707093&bvid=BV14eJgzzEKg&cid=30017652996&p=1&danmaku=0&autoplay=0',
      youtubeUrl: 'https://www.youtube.com/embed/DsPXa_2Vp5U?si=Mo4R-pcgzpzGT14x',
      thumbnail: '/images/video-placeholder.png',
      description: t('Description of Copper Spinning Manufacturing Process'),
    },
    {
      title: t('Aluminum Stamping Parts Punching Process'),
      bilibiliEmbedUrl: 'https://player.bilibili.com/player.html?isOutside=true&aid=114526460645555&bvid=BV157JgznEDz&cid=30017129695&p=1&danmaku=0&autoplay=0',
      youtubeUrl: 'https://www.youtube.com/embed/IUyKPLtU51I?si=Mo4R-pcgzpzGT14x',
      thumbnail: '/images/video-placeholder.png',
      description: t('Description of Aluminum Stamping Parts Punching Process'),
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('Our Manufacturing Processes')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} isChinaUser={isChinaUser} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ video, isChinaUser }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={videoRef}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <figure className="relative w-full h-0 pb-[56.25%]">
        {isVisible ? (
          <iframe
            src={isChinaUser ? video.bilibiliEmbedUrl : video.youtubeUrl}
            title={video.title}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <figcaption className="sr-only">{video.description}</figcaption>
      </figure>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
      </div>
    </div>
  );
};

export default ManufacturingProcessesVideos;