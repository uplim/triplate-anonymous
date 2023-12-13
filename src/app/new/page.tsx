import { Metadata } from 'next';

import { Header } from '@/components/header/header';
import { getTranslation } from '@/functions/server/i18n/get-translation';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslation('page');

  return {
    title: t('page.new.header.title'),
  };
}

const New = async () => {
  const { t } = await getTranslation('page');

  return <Header title={t('page.new.header.title')} />;
};

export default New;
