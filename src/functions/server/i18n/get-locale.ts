import 'server-only';

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { headers } from 'next/headers';
import { cache } from 'react';

import {
  DEFAULT_LOCALE,
  LocaleType,
  AVAILABLE_LOCALES,
} from '@/functions/shared/i18n';

// https://nextjs.org/docs/app/building-your-application/routing/internationalization
export const getLocale = cache((): LocaleType => {
  const headersList = headers();

  const acceptLanguage =
    headersList.get('accept-language') ?? 'ja,en-US;q=0.9,en;q=0.8';

  const locales = new Negotiator({
    headers: {
      'accept-language': acceptLanguage,
    },
  }).languages();

  return match(locales, AVAILABLE_LOCALES, DEFAULT_LOCALE) as LocaleType;
});
