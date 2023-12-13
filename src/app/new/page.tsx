import { Metadata } from 'next';

import { Header } from '@/components/header/header';
import { getTranslation } from '@/functions/server/i18n/get-translation';

export const metadata: Metadata = {
  title: '新しい旅程の作成',
};

const New = async () => {
  const { t } = await getTranslation('page');

  return <Header title={t('page.new.header.title')} />;
};

export default New;
