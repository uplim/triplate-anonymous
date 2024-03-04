import { defineConfig } from '@playwright/test';
import baseConfig from './playwright.base.config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config = defineConfig({
  ...baseConfig,
  globalSetup: require.resolve('./tests/integration/helpers/playwright-global-setup.ts'),
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'NODE_ENV=production yarn start -p 3001',
    port: 3001,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL: 'http://localhost:3001',
    trace: 'on',
  },

  reporter: process.env.CI ? 'blob' : baseConfig.reporter,
});

export default config;
