import React, { useEffect } from 'react';
import Head from 'next/head';

import { freshChatInit } from 'services/freshchat-script-handler';

export const DocHead = ({ title, description, children, noFreshChat, linkCanonical }) => {
  useEffect(() => {
    if (noFreshChat) return;

    freshChatInit();
  }, []);

  return (
    <Head>
      {title && <title>{`${title} |`} Guardarian</title>}
      {description && <meta name='description' content={description} />}
      <link rel='icon' href='/fav16.png' />
      <link rel='icon' href='/fav32.png' />
      <link rel='icon' href='/fav64.png' />
      {linkCanonical && <link rel='canonical' href={linkCanonical} />}
      <meta name='apple-itunes-app' content='app-id=1616505826' />
      {children}
    </Head>
  );
};

Head.defaultProps = {
  title: '',
};
