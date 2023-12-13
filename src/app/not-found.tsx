import { getTranslation } from '@/functions/server/i18n/get-translation';

import style from './not-found.module.css';

export default async function NotFound() {
  const { t } = await getTranslation();
  return <main className={style.container}>{t('error.404.description')}</main>;
}
