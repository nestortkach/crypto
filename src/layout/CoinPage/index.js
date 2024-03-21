import React from 'react';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
import { DocHead } from '../Head';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Banner } from './Banner';
import { AboutCoin } from './AboutCoin';
import { ExchangeRate } from './ExchangeRate';
import { HowToBuyVerge } from './HowToBuyVerge';
import { OtherCurrensies } from './OtherCurrensies/OtherCurrensies';
import { PopularPaymant } from './PopularPaymant/PopularPaymant';

export default function CoinPage({ pageInfo }) {
  const url = pageInfo.meta && pageInfo.meta.url;
  const title = pageInfo.meta && pageInfo.meta.title;
  const description = pageInfo.meta && pageInfo.meta.description;
  const image = (pageInfo.meta && pageInfo.meta.image) || 'https://guardarian.com/services/sell-crypto-mobile.png';
  return (
    <>
      <DocHead title={title || 'Buy & Sell crypto with the best rates'} description={description} linkCanonical={url} />
      <FacebookMeta url={url} title={title} description={description} image={image} />
      <TwitterMeta url={url} title={title} description={description} image={image} />
      <Header lightblue theme={pageInfo.banner.theme}>
        <Banner
          title={pageInfo.banner.title}
          text={pageInfo.banner.text}
          info={pageInfo.banner.info}
          calculatorTheme={pageInfo.banner.theme}
          currency={pageInfo.banner.currency}
          fiatCurrency={pageInfo.banner.fiatCurrency}
          network={pageInfo.exchange.network}
          creators={pageInfo.banner.info.creators}
        />
      </Header>

      <AboutCoin articles={pageInfo.about.articles} theme={pageInfo.about.theme} />
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
        sing={pageInfo.exchange.sing}
        whether={pageInfo.exchange.whether}
        isBitcoinPage={pageInfo.isBitcoinPage}
        bitcoinPageInfo={pageInfo.bitcoinPageInfo}
      />
      <HowToBuyVerge
        newText={pageInfo.howToBuy?.newText}
        ticker={pageInfo.howToBuy.ticker}
        name={pageInfo.howToBuy.name}
        theme={pageInfo.howToBuy.theme}
        youtube={pageInfo.howToBuy.youtube}
        isBitcoinPage={pageInfo.isBitcoinPage}
        bitcoinPageInfo={pageInfo.bitcoinPageInfo}
      />
      {pageInfo.otherCurrensies && (
        <>
          <OtherCurrensies
            ticker={pageInfo.otherCurrensies.ticker}
            name={pageInfo.otherCurrensies.name}
            currency={pageInfo.otherCurrensies.currency}
            usdBtc={pageInfo.otherCurrensies.usdBtc}
            logo={pageInfo.otherCurrensies.logo}
            otherCurrensies={pageInfo.otherCurrensies.otherCurrencies}
          />
          <PopularPaymant
            ticker={pageInfo.popularPaymant.ticker}
            name={pageInfo.popularPaymant.name}
            currency={pageInfo.popularPaymant.currency}
            usdImageSrc={pageInfo.popularPaymant.usdImageSrc}
            imageWithCreditDebit={pageInfo.popularPaymant.imageWithCreditDebit}
            imgCreditDebit={pageInfo.popularPaymant.imgCreditDebit}
            imgFasterPayments={pageInfo.popularPaymant.imgFasterPayments}
            imgBankTpansfer={pageInfo.popularPaymant.imgBankTpansfer}
            imgSepaTpansfer={pageInfo.popularPaymant.imgSeraTpansfer}
            isBitcoinPage={pageInfo.isBitcoinPage}
            bitcoinPageInfo={pageInfo.bitcoinPageInfo}
          />
        </>
      )}
      <Footer />
    </>
  );
}
