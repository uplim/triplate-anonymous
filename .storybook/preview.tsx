import React from 'react';
import type { Decorator, Preview } from '@storybook/react';
import '@/styles/globals.css';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { locales } from '../src/i18n/locales/ja';
import { getI18nOptions } from '../src/functions/shared/i18n/get-i18n-options';
import { I18nextProvider } from 'react-i18next';

const withI18nProvider: Decorator = (Story) => {
  i18next.use(initReactI18next).init({
    ...getI18nOptions('ja'),
    resources: { ja: locales },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <Story />
    </I18nextProvider>
  );
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    pseudo: {},
  },
  decorators: [
    (Story) => (
      <main>
        <Story />
      </main>
    ),
    withI18nProvider,
  ],
};

export default preview;
