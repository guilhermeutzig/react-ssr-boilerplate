import Head from 'next/head';
import PropTypes from 'prop-types';

import GlobalStyles from 'styles/globalStyles';

import { Main } from './layout.style';

const Layout = ({ seo, children }) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta property="og:image" content={seo.image.src} />
        <meta property="og:image:type" content={seo.image.type} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Main>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      title: PropTypes.string,
      height: PropTypes.number,
      src: PropTypes.string,
      type: PropTypes.string,
      width: PropTypes.number,
    }),
  }),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  seo: {
    title: 'React SSR Boilerplate',
    description: 'Boilerplate description',
    image: {
      src: '/images/background.jpg',
      type: 'image/jpeg',
      height: 600,
      width: 800,
    },
  },
};

export default Layout;
