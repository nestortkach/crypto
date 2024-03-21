import React from 'react';

import { formTypes } from 'components/Calculator/constants';
import { DocHead } from '../Head';
import { Header } from '../Header';
import { Banner } from '../CoinPage/Banner';

import { Footer } from '../Footer';

import { ExchangeRate } from './ExchangeRate';

import { HowToSell } from './HowToSell';
import { SellAll } from './SellAll';
import { WayToSell } from './WayToSell';

export default function SellCoinPage({ pageInfo }) {
  return (
    <>
      <DocHead title='Buy & Sell crypto with the best rates' />

      <Header lightblue theme={pageInfo.banner.theme}>
        <Banner
          title={pageInfo.banner.title}
          type={formTypes.sell}
          text={pageInfo.banner.text}
          info={pageInfo.banner.info}
          calculatorTheme={pageInfo.banner.theme}
          currency={pageInfo.banner.currency}
          network={pageInfo.exchange.network}
        />
      </Header>
      <ExchangeRate
        currency={pageInfo.exchange.currency}
        usdImageSrc={pageInfo.exchange.usdImageSrc}
        eurImageSrc={pageInfo.exchange.eurImageSrc}
        name={pageInfo.exchange.name}
        usdText={pageInfo.exchange.usdText}
        eurText={pageInfo.exchange.eurText}
        theme={pageInfo.exchange.theme}
        network={pageInfo.exchange.network}
        fromNetwork={pageInfo.exchange.fromNetwork}
      />
      <WayToSell ticker={pageInfo.howToBuy.ticker} name={pageInfo.howToBuy.name} />
      <HowToSell
        ticker={pageInfo.howToBuy.ticker}
        name={pageInfo.howToBuy.name}
        theme={pageInfo.howToBuy.theme}
        youtube={pageInfo.howToBuy.youtube}
      />
      <SellAll ticker={pageInfo.howToBuy.ticker} />
      <Footer />
    </>
  );
}
