import { Metadata } from 'next';

import { Header } from '@/components/header/header';

export const metadata: Metadata = {
  title: '新しい旅程の作成',
};

const New = async () => {
  return <Header title="新しい旅程の作成" />;
};

export default New;
