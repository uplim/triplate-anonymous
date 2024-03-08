import type { Metadata } from 'next';

import { Header } from '@/components/header/header';
import { getTranslation } from '@/functions/server/i18n/get-translation';

import { EditForm } from './_components/edit-form/edit-form';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslation('new');

  return {
    title: t('new.header.title'),
  };
}

const New = async () => {
  const { t } = await getTranslation('new');

  return (
    <div>
      <Header title={t('new.header.title')} />
      <EditForm />
    </div>
  );
};

export default New;
