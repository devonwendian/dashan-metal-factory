import { useTranslation } from 'next-i18next';
export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="text-center p-4 border-t mt-8">
     {t('© 2025 Dongguan Huangjiang Dashan Metal Products Factory. All rights reserved.')}
    </footer>
  );
}
