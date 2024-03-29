import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'TRIPLATE WIKI',
  favicon: 'img/favicon.ico',

  url: 'https://triplate-wiki.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/uplim/triplate-web/edit/main/wiki',
        },
        theme: {
          customCss: './style/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TRIPLATE WIKI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'specs/home/index',
          position: 'left',
          label: '仕様書',
        },
        {
          to: '/swagger',
          position: 'left',
          label: 'OpenAPI',
        },
        {
          type: 'doc',
          docId: 'help/home/index',
          position: 'left',
          label: 'ヘルプ',
        },
        {
          href: 'https://github.com/uplim/triplate-web',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
