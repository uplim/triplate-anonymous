import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="TRIPLATEの開発者用WIKIです">
      <main>topページはtsxでいい感じにする</main>
    </Layout>
  );
}
