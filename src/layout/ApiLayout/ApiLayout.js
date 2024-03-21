import React from 'react';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { Footer } from 'layout/Footer';
import { ApiHeader } from './components/ApiHeader';
import { ApiContent } from './components/ApiContent';
import { FacebookMeta } from '../../components/Meta/FacebookMeta';
import { TwitterMeta } from '../../components/Meta/TwitterMeta';

export const ApiLayout = ({ header, content }) => {
  const metaData = {
    url: 'https://guardarian.com/api-doc',
    title: 'Guardarian | Top cryptocurrency purchase API for crypto business',
    description:
      'Connect cryptocurrency purchase API for your service. Integrate a crypto exchange API with multiple payment methods. Create an exchange rate calculator. See API documentation.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  };
  return (
    <>
      <DocHead linkCanonical={metaData.url}>
        <title>Guardarian - Buy/Sell Crypto</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />

        <title> {metaData.title} </title>
        <meta name='title' content={metaData.title} key='title' />
        <meta name='description' content={metaData.description} key='description' />
      </DocHead>
      {/* Open Graph / Facebook */}
      <FacebookMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />
      {/* Twitter */}
      <TwitterMeta
        url={metaData.url}
        title={metaData.title}
        description={metaData.description}
        image={metaData.image || 'https://guardarian.com/services/sell-crypto-mobile.png'}
      />

      <Header>
        <div className='container'>
          <ApiHeader {...header} />
        </div>
      </Header>

      <div className='container'>
        <ApiContent {...content} />
      </div>
      <Footer />
    </>
  );
};
