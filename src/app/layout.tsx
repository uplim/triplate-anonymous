import type { ReactNode } from 'react';

import { getLocale } from '@/functions/server/i18n/get-locale';
import { getTranslation } from '@/functions/server/i18n/get-translation';

import { LocaleProvider } from './_components/i18n/locale-provider';

import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslation();

  return {
    title: {
      template: `%s - ${t('common.triplate.title')}`,
      default: t('common.triplate.title'),
    },
    description: t('common.triplate.description'),
    manifest: '/manifest.json',
    icons: [
      { url: '/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
      { url: '/safari-pinned-tab.svg', rel: 'mask-icon' },
    ],
  };
}

export const viewport: Viewport = {
  themeColor: '#4272EF',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
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
