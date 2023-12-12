import { InitOptions } from 'i18next';

import {
  DEFAULT_NS,
  LocaleType,
  AVAILABLE_LOCALES,
} from '@/functions/shared/i18n';

export const getI18nOptions = (
  language: LocaleType,
  ns = DEFAULT_NS
): InitOptions => {
  return {
    supportedLngs: AVAILABLE_LOCALES,
    fallbackLng: language,
    lng: language,
    fallbackNS: DEFAULT_NS,
    defaultNS: DEFAULT_NS,
    ns,
  };
};
