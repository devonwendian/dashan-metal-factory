import { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaTimes, FaWeixin } from 'react-icons/fa';

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContact = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
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
            Contact Us
          </h3>
          <ul className="space-y-4">
            {/* 电话 */}
            <li className="flex items-center space-x-3">
              <FaPhone className="text-blue-600" size={20} />
              <a
                href="tel:+1234567890"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Call us"
              >
                +1 (234) 567-890
              </a>
            </li>
            {/* 邮箱 */}
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" size={20} />
              <a
                href="mailto:contact@yourfactory.com"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Email us"
              >
                contact@yourfactory.com
              </a>
            </li>
            {/* WhatsApp */}
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="text-blue-600" size={20} />
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Message us on WhatsApp"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaWeixin className="text-blue-600" size={20} />
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Message us on WhatsApp"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
          {/* 快速联系表单 */}
          <form
            action="/api/contact"
            method="POST"
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submission is not implemented yet.');
            }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Quick Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
              aria-required="true"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}