import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function ClientShowcase() {
  const { t } = useTranslation('home');
  return (
    <section
      className="py-8 bg-gray-50"
      aria-labelledby="client-showcase-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分，语义化且支持 SEO */}
        <h2
          id="client-showcase-title"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
        >
          {t('Our Customers')}
        </h2>

        {/* 客户图标展示区域 */}
        <div className="relative">
          <Image
            src="/images/our-customers.jpeg" // 替换为你的图片路径
            alt="Logos of our trusted partners"
            width={3000} // 替换为图片实际宽度
            height={1689} // 替换为图片实际高度
            className="w-full h-auto object-contain"
            loading="lazy" // 懒加载优化性能
            sizes="100vw" // 简化为全宽图片
            quality={80}
          />
        </div>
      </div>
    </section>
  );
}