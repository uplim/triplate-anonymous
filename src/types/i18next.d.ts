import 'i18next';

import type { locales } from '@/i18n/locales/ja';

// next-i18nで型推論を有効にする
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof locales;
  }
}
