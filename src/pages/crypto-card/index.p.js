import React, { useRef } from 'react';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { Footer } from 'layout/Footer';
import { CryptoCardBanner } from 'layout/CryptoCardPage/CryptoCardBanner';
import { CryptoCardFeatures } from 'layout/CryptoCardPage/CryptoCardFeatures';
import { GetPrepaidVisaCard } from 'layout/CryptoCardPage/GetPrepaidVisaCard';
import { PrepaidVisaCard } from 'layout/CryptoCardPage/PrepaidVisaCard';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { ChooseCryptoCurrencies } from 'layout/CryptoCardPage/ChooseCryptoCurrencies/ChooseCryptoCurrencies';
import { ChooseCard } from 'layout/CryptoCardPage/ChooseCard/ChooseCard';

const CryptoCardPage = () => {
  const metaData = {
    url: 'https://guardarian.com/crypto-card',
    title: 'Guardarian crypto card. Purchases accepted globally',
    description:
      'Spend your crypto with a Guardarian crypto debit card. No monthly subscription fees. Make payments with cryptocurrencies worldwide. Request plastic & virtual crypto card.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  };
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();

  return (
    <>
      <DocHead linkCanonical={metaData.url}>
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

      <Header theme='none'>
        <CryptoCardBanner />
      </Header>
      <PrepaidVisaCard />
      <ChooseCryptoCurrencies />
      <CryptoCardFeatures />
      <ChooseCard executeScroll={executeScroll} />
      <GetPrepaidVisaCard scrollRef={scrollRef} />
      <Footer />
    </>
  );
};

export default CryptoCardPage;
