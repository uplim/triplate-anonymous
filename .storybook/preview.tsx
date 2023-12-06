import React from 'react';
import type { Preview } from '@storybook/react';
import '@/styles/globals.css';

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
  ],
};

export default preview;
