import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext();
  const { description } = customFields as { description: string };
  return (
    <>
      <Head>
        <link rel="stylesheet" href="style/reset.css" />
      </Head>
      <Layout title={tagline} description={description}>
        <SwaggerUI url={'openapi/default.yml'} />
      </Layout>
    </>
  );
}
