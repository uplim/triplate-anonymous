'use client';

import { type ReactNode, createContext } from 'react';

import { initI18next } from '@/functions/client/i18n/init-i18next';
import { DEFAULT_LOCALE, type LocaleType } from '@/functions/shared/i18n';

export const LocaleContext = createContext<LocaleType>(DEFAULT_LOCALE);

type Props = {
  children: ReactNode;
  locale: LocaleType;
};

export const LocaleProvider = ({ children, locale }: Props) => {
  initI18next(locale);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};
