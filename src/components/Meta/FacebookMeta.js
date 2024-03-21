import Head from 'next/head';

export const FacebookMeta = ({ url, title, description, image, children }) => (
  <Head>
    <meta property='og:type' content='website' />
    <meta property='og:url' content={url} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image} />
    {children}
  </Head>
);
