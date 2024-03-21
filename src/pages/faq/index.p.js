import React from 'react';

import { Footer } from 'layout/Footer';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { FaqBanner } from 'layout/Faq/Banner';
import { FaqContent } from 'layout/Faq/Content';
import { data } from 'constants/data/faq';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';

export default function Faq() {
  const metaData = {
    url: 'https://guardarian.com/faq',
    title: 'FAQ | Guardarian fiat on-ramp',
    description:
      'Frequently Asked Questions about Guardarian. What is Guardarian? Why trust Guardarian? How to buy and sell crypto on Guardarian?',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  };

  return (
    <>
      <DocHead title='FAQ' linkCanonical={metaData.url}>
        {/* Primary Meta Tags */}
        <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='description' content={metaData.description} key='description' />
      </DocHead>
      <FacebookMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />
      <TwitterMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />

      <Header>
        <FaqBanner />
      </Header>

      <FaqContent data={data} />

      <Footer />
    </>
  );
}
