import '@testing-library/jest-dom';
import i18next from 'i18next';
import failOnConsole from 'jest-fail-on-console';
import { initReactI18next } from 'react-i18next';

import { getI18nOptions } from '@/functions/shared/i18n';
import { locales } from '@/i18n/locales/ja';

i18next.use(initReactI18next).init({
  ...getI18nOptions('ja'),
  resources: { ja: locales },
});

failOnConsole({
  silenceMessage: (errorMessage) => {
    if (/Invalid value for prop `action` on <form> tag./.test(errorMessage)) {
      return true;
    }
    return false;
  },
});

jest.mock('react', () => {
  const testCache = <T extends (...args: unknown[]) => unknown>(func: T) =>
    func;
  const originalModule = jest.requireActual('react');
  return {
    ...originalModule,
    cache: testCache,
  };
});

jest.mock('next/headers', () => ({ headers: jest.fn(() => new Map()) }));

// functionsのモック。固有の機能は単体テストで担保
jest.mock('@/functions/client/i18n/init-i18next');
jest.mock('@/functions/server/firebase/get-firebase');
