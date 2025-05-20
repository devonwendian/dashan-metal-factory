import Image from 'next/image';
import { useTranslation, Trans } from 'next-i18next';

const FactoryIntro = () => {
  // 多语言支持
  const { t } = useTranslation('home');

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text">
            {t('Factory Profile')}
          </h2>
        </div>

        {/* 时间轴 */}
        <div className="relative">
          {/* 时间轴线（仅桌面端显示） */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

          {/* 时间轴节点 1：成立与设施 */}
          <div className="relative mb-12 md:mb-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-8 text-center md:text-right">
              <div className="flex justify-center md:justify-end items-center mb-2">
                <span className="inline-block w-4 h-4 bg-blue-600 rounded-full md:w-6 md:h-6 border-2 md:border-4 border-white"></span>
                <h3 className="ml-2 text-lg md:text-xl font-semibold text-gray-800">
                  {t('timeline_1_title')}
                </h3>
              </div>
              <p className="text-gray-600 text-base md:text-base leading-relaxed">
                {t('timeline_1_description')}
              </p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-8">
              <div className="relative w-full h-32 md:h-48 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/factory-intro/factory-gate.jpg" // 替换为实际路径
                  alt={t('timeline_1_image_alt')}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* 时间轴节点 2：经验与能力 */}
          <div className="relative mb-12 md:mb-16 flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pl-8 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center mb-2">
                <span className="inline-block w-4 h-4 bg-blue-600 rounded-full md:w-6 md:h-6 border-2 md:border-4 border-white"></span>
                <h3 className="ml-2 text-lg md:text-xl font-semibold text-gray-800">
                  {t('timeline_2_title')}
                </h3>
              </div>
              <p className="text-gray-600 text-base md:text-base leading-relaxed">
                <Trans
                  i18nKey="timeline_2_description"
                  ns="home"
                  components={{
                    maxDiameter: <span className="font-bold text-blue-600" />,
                    maxThickness: <span className="font-bold text-blue-600" />,
                  }}
                />
              </p>
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-8">
              <div className="relative w-full h-32 md:h-48 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/factory-intro/factory-large-product.jpg" // 替换为实际路径
                  alt={t('timeline_2_image_alt')}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* 时间轴节点 3：认证与创始人 */}
          <div className="relative mb-12 md:mb-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-8 text-center md:text-right">
              <div className="flex justify-center md:justify-end items-center mb-2">
                <span className="inline-block w-4 h-4 bg-blue-600 rounded-full md:w-6 md:h-6 border-2 md:border-4 border-white"></span>
                <h3 className="ml-2 text-lg md:text-xl font-semibold text-gray-800">
                  {t('timeline_3_title')}
                </h3>
              </div>
              <p className="text-gray-600 text-base md:text-base leading-relaxed">
                <Trans
                  i18nKey="timeline_3_description"
                  ns="home"
                  components={{
                    isoCertification: <span className="font-bold text-blue-600" />,
                  }}
                />
              </p>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <div className="relative w-full aspect-[2481/3509] md:max-w-[400px] mx-auto rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/factory-intro/factory-certification.jpg"
                alt={t('timeline_3_image_alt')}
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            </div>
          </div>

          {/* 时间轴节点 4：应用与合作 */}
          <div className="relative mb-12 md:mb-16 flex flex-col md:flex-row-reverse items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pl-8 text-center md:text-left">
              <div className="flex justify-center md:justify-start items-center mb-2">
                <span className="inline-block w-4 h-4 bg-blue-600 rounded-full md:w-6 md:h-6 border-2 md:border-4 border-white"></span>
                <h3 className="ml-2 text-lg md:text-xl font-semibold text-gray-800">
                  {t('timeline_4_title')}
                </h3>
              </div>
              <p className="text-gray-600 text-base md:text-base leading-relaxed">
                {t('timeline_4_description')}
              </p>
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-8">
              <div className="relative w-full h-32 md:h-48 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/factory-intro/factory-sample-room.jpeg" // 替换为实际路径
                  alt={t('timeline_4_image_alt')}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryIntro;