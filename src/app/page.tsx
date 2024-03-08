import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'top',
  };
}

const Index = async () => {
  return (
    <div>
      <a href="/new">newに遷移するリンク</a>
    </div>
  );
};

export default Index;
