import { useState } from 'react';
import { FaPhone, FaEnvelope, FaTimes, FaWeixin } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

export default function ContactUs() {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-32 right-6 z-50">
      {/* 浮窗按钮 */}
      <button
        onClick={toggleContact}
        className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <FaEnvelope size={24} />
        )}
      </button>

      {/* 联系方式面板 */}
      <div
        className={`absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl transition-all duration-300 transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="dialog"
        aria-labelledby="contact-us-title"
      >
        <div className="p-6">
          <h3 id="contact-us-title" className="text-xl font-semibold text-gray-900 mb-4">
            {t('Contact Us')}
          </h3>
          <ul className="space-y-4">
            {/* 电话 */}
            <li className="flex items-center space-x-3">
              <FaPhone className="text-blue-600" size={20} />
              <a
                href="tel:+86-18576639259"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Call us"
              >
                +86-18576639259
              </a>
            </li>
            {/* 邮箱 */}
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" size={20} />
              <a
                href="mailto:wendian1989@gmail.com"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Email us"
              >
                wendian1989@gmail.com
              </a>
            </li>
            {/* 微信 1 */}
            <li className="flex items-center space-x-3">
              <FaWeixin className="text-blue-600" size={20} />
              <span className="text-gray-700">{t('WeChat')}: devendian</span>
            </li>
            {/* 微信 2 */}
            <li className="flex items-center space-x-3">
              <FaWeixin className="text-blue-600" size={20} />
              <span className="text-gray-700">{t('WeChat')}: Dewygreens</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}