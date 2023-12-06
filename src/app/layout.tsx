import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | TRIPLATE - たびにいきたくなる旅程管理アプリ`,
    default: 'TRIPLATE - たびにいきたくなる旅程管理アプリ',
  },
  description:
    'TRIPLATEはたび先で確認したい旅程のURLを管理し、たびの思い出と一緒にテンプレートして公開することで新しいたびのアイデアが得られるWebアプリです！',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
