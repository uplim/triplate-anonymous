import { InitOptions } from 'i18next';

import {
  DEFAULT_NS,
  LocaleType,
  SUPPORTED_LOCALES,
} from '@/functions/shared/i18n';

export const getI18nOptions = (
  language: LocaleType,
  ns = DEFAULT_NS
): InitOptions => {
  return {
    supportedLngs: SUPPORTED_LOCALES,
    fallbackLng: language,
    lng: language,
    fallbackNS: DEFAULT_NS,
    defaultNS: DEFAULT_NS,
    ns,
  };
};
