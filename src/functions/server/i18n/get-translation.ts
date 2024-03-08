import 'server-only';

import { type FlatNamespace, createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { cache } from 'react';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { getLocale } from '@/functions/server/i18n/get-locale';
import { type LocaleType, getI18nOptions } from '@/functions/shared/i18n';

const initI18next = async (locale: LocaleType, ns?: FlatNamespace) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/i18n/locales/${language}/${namespace}.json`)
      )
    )
    .init(getI18nOptions(locale, ns));
  return i18nInstance;
};

export const getTranslation = cache(async (ns?: FlatNamespace) => {
  const locale = getLocale();
  const i18nextInstance = await initI18next(locale, ns);

  return {
    t: i18nextInstance.getFixedT<FlatNamespace>(locale, ns),
  };
});
