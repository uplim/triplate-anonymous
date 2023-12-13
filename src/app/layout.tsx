import { getLocale } from '@/functions/server/i18n/get-locale';
import { getTranslation } from '@/functions/server/i18n/get-translation';

import { LocaleProvider } from './_components/i18n/locale-provider';

import type { Metadata } from 'next';

import '@/styles/globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslation();

  return {
    title: {
      template: `%s - ${t('common.triplate.title')}`,
      default: t('common.triplate.title'),
    },
    description: t('common.triplate.description'),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <LocaleProvider locale={getLocale()}>
          <main>{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}
