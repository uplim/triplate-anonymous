import 'client-only';

import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

import { AVAILABLE_LOCALES, LocaleType, getI18nOptions } from '@/functions/shared/i18n';

const runsOnServerSide = typeof window === 'undefined';

// https://github.com/canereren112/florazi-app/blob/a5122f148f584c7b0b3ae2ff871a6c3dc5b27a7e/frontend/src/app/i18n/client.ts#L13C13-L13C13
export const initI18next = (() => {
  let initialized = false;

  return (lng: LocaleType) => {
    // 一度だけ初期化する
    if (initialized) return;

    i18next
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`@/i18n/locales/${language}/${namespace}.json`)
        )
      )
      .init(
        {
          ...getI18nOptions(lng),
          lng,
          // レンダリングされる前に翻訳がロードされていることを保証する
          preload: runsOnServerSide ? AVAILABLE_LOCALES : [],
        },
        () => {
          // 初期化後に実行される
          initialized = true;
        }
      );
  };
})();
