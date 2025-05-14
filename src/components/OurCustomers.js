// components/ClientShowcase.jsx
import Image from 'next/image';

export default function ClientShowcase() {
  return (
    <section
      className="py-12 bg-gray-50"
      aria-labelledby="client-showcase-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分，语义化且支持 SEO */}
        <h2
          id="client-showcase-title"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Our Trusted Partners
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
            // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px" // 响应式图片尺寸
            quality={80}
            // priority={false} // 非首屏内容，延迟加载
          />
        </div>

        {/* 可选的描述文本，增强 SEO */}
        <p className="mt-6 text-center text-gray-600 text-lg">
          We proudly collaborate with industry-leading companies worldwide to
          deliver exceptional solutions.
        </p>
      </div>
    </section>
  );
}