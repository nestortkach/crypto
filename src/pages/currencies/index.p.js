import AOS from 'aos';

import React, { useState, useEffect, useCallback } from 'react';

import { Footer } from 'layout/Footer';
import { DocHead } from 'layout/Head';
import { Header } from 'layout/Header';
import { CurrenciesHeaderSection } from 'layout/CurrenciesHeaderSection';
import CompleteListCoinsSection from 'layout/CompleteListCoinsSection';
import { cryptoCurrencies } from 'components/Calculator/action';
import { coinPages } from 'constants/coinPages';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';

const missedCoins = ['WBTC', 'CRO', 'USDC'];
const coinsAtTop = [...coinPages.filter((c) => !missedCoins.includes(c.ticker)).map((c) => c.ticker)];
const checkLogoUrl = (c) => {
  if (c.logo_url) {
    const split = c.logo_url.split('.');

    if (split[split.length - 1] === 'sv') {
      split[split.length - 1] = 'svg';
    }

    return {
      ...c,
      logo_url: split.join('.'),
    };
  }

  return c;
};

export default function Currencies() {
  const [currencies, setCurrencies] = useState([]);

  const filteredCoins = useCallback(
    () =>
      [...currencies.filter((c) => coinsAtTop.includes(c.ticker.toUpperCase())).map(checkLogoUrl)].concat(
        currencies
          .filter((c) => !coinsAtTop.includes(c.ticker))
          .filter((c) => !missedCoins.includes(c.ticker))
          .filter((c) => c.logo_url)
          .map(checkLogoUrl),
      ),
    [currencies],
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    cryptoCurrencies().then((data) => {
      const allCurrencies = [];

      data.forEach((currency) => {
        if (currency.enabled) {
          const idx = currency.networks.findIndex((el) => el.payment_methods.length > 0);
          const ethNetworkIndex = currency.networks.findIndex(
            (element) => element.payment_methods.length > 0 && element.network === 'ETH',
          );

          if (idx < 0) {
            return;
          }

          if (ethNetworkIndex > 0) {
            allCurrencies.push({
              ...currency,
              network: currency.networks[ethNetworkIndex].network,
              logo_url: `/currencies/${currency.ticker.toLowerCase()}-${currency.networks[
                ethNetworkIndex
              ].network.toLowerCase()}.svg`,
            });

            return;
          }

          allCurrencies.push({
            ...currency,
            network: currency.networks[idx].network,
            logo_url: `/currencies/${currency.ticker.toLowerCase()}-${currency.networks[
              idx
            ].network.toLowerCase()}.svg`,
          });
        }
      });

      setCurrencies(allCurrencies);
    });
  }, []);

  const metaData = {
    url: 'https://guardarian.com/currencies',
    title: 'Buy or sell crypto with Guardarian fiat on-ramp',
    description:
      'More than 400 coins and new tokens with the lowest transaction fees on Guardarian. Solana, ADA, BTC, DOGE, ETH, FLOKI, and more!',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  };

  return (
    <>
      <DocHead linkCanonical={metaData.url}>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
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
        <div className='container'>
          <CurrenciesHeaderSection coinPages={coinPages} currencies={currencies} />
        </div>
      </Header>

      <div className='container'>
        <CompleteListCoinsSection currencies={filteredCoins()} />
      </div>

      <Footer />
    </>
  );
}
