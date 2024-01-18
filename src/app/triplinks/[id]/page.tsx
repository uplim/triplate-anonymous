import { Metadata } from 'next';

import { Header } from '@/components/header/header';
import { getTranslation } from '@/functions/server/i18n/get-translation';
import * as repository from '@/repositories/triplinks/repository';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getTranslation('new');

  return {
    title: t('new.header.title'),
  };
}

type TriplinkProps = {
  params: { id: string };
};

const Triplink = async ({ params }: TriplinkProps) => {
  const { t } = await getTranslation('new');

  const triplink = await repository.findById(String(params.id));

  return (
    <div>
      <Header title={t('new.header.title')} />
      <p>{triplink.id}</p>
      <p>{triplink.name}</p>
      <p>{triplink.password}</p>
    </div>
  );
};

export default Triplink;
