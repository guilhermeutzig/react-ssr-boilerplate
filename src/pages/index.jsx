import Head from 'next/head';

import Layout from 'containers/layout';
import ImageWithBackground from 'components/image-with-background';
import Button from 'commons/button';

const Index = () => {
  return (
    <>
      <Head>
        <title>React SSR Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <img src="/images/background.jpg" alt="" />
        <ImageWithBackground />
        <Button>This is a button</Button>
      </Layout>
    </>
  );
};

export default Index;
