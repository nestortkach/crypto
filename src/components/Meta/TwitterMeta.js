import Head from 'next/head';

export const TwitterMeta = ({ url, title, description, image, children }) => (
  <Head>
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={url} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={description} />
    <meta property='twitter:image' content={image} />
    {children}
  </Head>
);
