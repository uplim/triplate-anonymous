import { InitOptions } from 'i18next';

import { AVAILABLE_LOCALES, DEFAULT_NS, LocaleType } from '@/functions/shared/i18n';

export const getI18nOptions = (language: LocaleType, ns = DEFAULT_NS): InitOptions => {
  return {
    supportedLngs: AVAILABLE_LOCALES,
    fallbackLng: language,
    lng: language,
    fallbackNS: DEFAULT_NS,
    defaultNS: DEFAULT_NS,
    ns,
  };
};
