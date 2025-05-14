import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation('banner');

// 轮播数据
const banners = [
  {
    id: 1,
    imageUrl: '/images/banner/banner1.jpeg',
    altText: t('30 Years Experience'),
    title: t('30 Years Experience'),
    description: [
      t('ISO9001'),
      t('Large-Scale'),
      t('100 machines'),
    ],
  },
  {
    id: 2,
    imageUrl: '/images/banner/banner2.jpeg',
    altText: t('CNC Spinning Machines'),
    title: t('CNC Spinning Machines'),
    description: [
      t('Complex Metal Forming'),
    ],
  },
  {
    id: 3,
    imageUrl: '/images/banner/banner3.jpeg',
    altText: t('Hydraulic Presses'),
    title: t('Hydraulic Presses'),
    description: [
      t('Self-Owned'),
    ],
  },
];

  // 自动轮播
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
      }, 5000); // 每5秒切换
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // 处理触摸滑动
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }
    setIsPaused(false);
    setTouchStart(null);
  };

  // 键盘导航
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    } else if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }
  };

  // 切换到指定索引
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Banner carousel"
    >
      {/* 轮播内容 */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          role="group"
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={banner.imageUrl}
            alt={banner.altText}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? undefined : 'lazy'}
          />
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start">
  <div className="text-left text-white px-6 md:px-12 w-full max-w-4xl mx-auto">
    {/* 标题靠左，加粗并添加下划线 */}
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight drop-shadow-lg animate-fadeIn">
      {banner.title}
      <div className="w-20 h-1 bg-yellow-500 mt-2"></div>
    </h1>
    {/* 描述居中，优化圆点和间距 */}
    <div className="text-base md:text-lg space-y-6 max-w-xl mx-auto animate-fadeIn animate-delay-200">
      {banner.description.map((desc, i) => (
        <p key={i} className="flex items-center justify-start">
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></span>
          <span>
            {desc}
          </span>
        </p>
      ))}
    </div>
  </div>
</div>
        </div>
      ))}

      {/* 导航按钮 */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)}
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* 指示点 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-6 h-2 rounded transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;