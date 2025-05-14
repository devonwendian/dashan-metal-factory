'use client';

import { useRouter } from 'next/navigation';

const FactoryIntro = () => {
  const router = useRouter();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Factory Introduction
        </h2>

        {/* 简介内容 */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Dongguan Huangjiang Dashan Metal Products Factory was established in 2001, with an 8,000-square-meter self-owned factory. We are equipped with over 100 advanced machines, including 200-1000 ton hydraulic presses, 30-200 ton punching machines, multiple large-scale CNC spinning machines, as well as lathes, milling machines, grinders, wire-cutting machines, and other precision mold processing equipment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We have extensive experience in large-scale drawing, large-scale spinning, complex metal forming, and high-precision machining. We can process metals such as iron, aluminum, copper, and stainless steel with a maximum diameter of 1800mm and a thickness of up to 9.0mm, meeting diverse high-precision demands. Our products are widely used in lighting, machinery, medical, furniture, tableware, electrical appliances, gardening, and craft industries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 2014, we passed the ISO9001:2008 Quality Management System certification, strictly controlling our production processes to ensure stable and reliable product quality. Our founder, Mr. Fu Tingsheng, graduated from a renowned university with a degree in Material Forming and is a member of the China Spinning Association, bringing 30 years of expertise in drawing and spinning.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Adhering to the philosophy of "Customer First, Continuous Innovation," we provide professional customized services, supporting processing with drawings or samples. We warmly welcome customers from all industries to visit and discuss cooperation opportunities!
          </p>

          {/* 查看更多按钮 */}
          <div className="text-center">
            <button
              onClick={() => router.push('/about')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dongguan Huangjiang Dashan Metal Products Factory',
            description: 'Established in 2001, Dashan Metal Products Factory specializes in large-scale drawing, spinning, and high-precision metal forming.',
            foundedDate: '2001',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dongguan',
              addressRegion: 'Guangdong',
              addressCountry: 'CN',
            },
            certification: 'ISO9001:2008',
            founder: {
              '@type': 'Person',
              name: 'Fu Tingsheng',
              jobTitle: 'Founder',
            },
          }),
        }}
      />
    </section>
  );
};

export default FactoryIntro;