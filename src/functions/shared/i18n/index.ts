import { FlatNamespace } from 'i18next';

export type LocaleType = 'ja';

export const SUPPORTED_LOCALES: LocaleType[] = ['ja'];
export const DEFAULT_LOCALE: LocaleType = 'ja';
export const DEFAULT_NS: FlatNamespace = 'global';

export * from './get-i18n-options';
